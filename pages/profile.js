import styles from "../css/profile.module.css";
import { useEffect, useState } from "react";
import * as React from "react";
import ReactDOM from "react-dom";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Modal from "../components/Modal";
import { Form } from "react-bootstrap";
import { createProject, getProjectsById } from "../services";
import AddNewProjects from "../components/addNewProjects";
import ls from "local-storage";

export default function Profile() {
  const [loggedInUser, setLoggedInUser] = useState(null);
  useEffect(() => {
    const user = ls("self");
    setLoggedInUser(user);
  }, []);
  // const [ projectList, setProjectList ] = useState()
  const [showModal, setShowModal] = useState(false);
  const getProjectName = (event) => {
    const project = event.target.value;
    console.log(project);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    createProject({ project }).then(onsubmit);
  };

  const getUsersProjects = (userID) => {
    fetch(`api/projects?userID${userID}`)
      .then((response) => response.json())
      .then((data) => {
        setProjectList(data.project);
      })
      .catch(console.error);
  };

  return (
    <div className={styles.background}>
      <div className={styles.main}>
        <div>
          <h2 className={styles.welcome}>Hello, user!</h2>
          <Avatar className={styles.avatar}>H</Avatar>
        </div>
        <div className={styles.projectContainer}>
          <div className={styles.button}>
            <Button variant="contained" onClick={() => setShowModal(true)}>
              Add New Project
            </Button>
            <Modal onClose={() => setShowModal(false)} show={showModal}>
              <AddNewProjects
                userID={loggedInUser?.id}
                onSubmit={() => {
                  setShowModal(false);
                  getUsersProjects(userID);
                }}
              />
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
}


