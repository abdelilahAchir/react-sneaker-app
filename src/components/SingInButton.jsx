import React from "react";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../authConfig";
import Button from "react-bootstrap/Button";
import firebase from "../database/firebase";

/**
 * Renders a button which, when selected, will open a popup for login
 */
export const SignInButton = () => {
    const { instance } = useMsal();

    const handleLogin = (loginType) => {
        if (loginType === "popup") {
            instance.loginPopup(loginRequest).then(response => {
                const graphConfig = {
                    graphMeEndpoint: "https://graph.microsoft.com/v1.0/me"
                };
                const accessToken = response.accessToken;
                instance.acquireTokenSilent({
                    scopes: loginRequest.scopes,
                    account: response.account
                }).then((response) => {
                    fetch(graphConfig.graphMeEndpoint, {
                        headers: {
                            Authorization: `Bearer ${accessToken}`
                        }
                    }).then(response => response.json())
                    .then(data => {
                        const database = firebase.firestore();
                        const userId = data.id;
                        const userData = {
                            firstName: data.givenName,
                            lastName: data.surname,
                            email: data.userPrincipalName,
                            id: data.id,
                        };
                        // Check if user already exists in database
                        database.collection("users").doc(userId).get().then((doc) => {
                            if (!doc.exists) {
                                // If user doesn't exist, save their data to database
                                database.collection("users").doc(userId).set(userData);
                            }
                        });
                    })
                    .catch(error => {
                        console.error(error);
                    });
                }).catch(error => {
                    console.error(error);
                });
            }).catch(e => {
                console.error(e);
            });
        }
    }
    return (
        <Button variant="success" className="ml-auto" onClick={() => handleLogin("popup")}>Sign in</Button>
    );
}
