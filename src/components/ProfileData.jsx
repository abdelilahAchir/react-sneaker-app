import React, { useEffect } from "react";
import firebase from "../database/firebase";

/**
 * Renders information about the user obtained from Microsoft Graph
 */
export const ProfileData = (props) => {

  useEffect(() => {
    const firestore = firebase.firestore();
    const userId = props.graphData.id;
    const userData = {
      firstName: props.graphData.givenName,
      lastName: props.graphData.surname,
      email: props.graphData.userPrincipalName,
      id: props.graphData.id,
    };

    // Check if user already exists in database
    firestore
      .collection("users")
      .doc(userId)
      .get()
      .then((doc) => {
        if (!doc.exists) {
          console.log(userData.lastName);
          // If user doesn't exist, save their data to database
          firestore.collection("users").doc(userId).set(userData);
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }, [props.graphData]);

  console.log("hello");

  return (
    <div className="container" id="profile-div">
      <p>
        <strong>First Name: </strong> {props.graphData.givenName}
        {console.log(props.graphData.givenName)}
      </p>
      <p>
        <strong>Last Name: </strong> {props.graphData.surname}
      </p>
      <p>
        <strong>Email: </strong> {props.graphData.userPrincipalName}
      </p>
      <p>
        <strong>Id: </strong> {props.graphData.id}
      </p>
    </div>
  );
};
