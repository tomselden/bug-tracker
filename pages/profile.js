import styles from "../css/profile.module.css";
import { useEffect, useState } from "react";
import * as React from "react";
import ReactDOM from "react-dom";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Modal from "../components/Modal";
import { Form } from "react-bootstrap";

export default function Profile() {
  // const [loggedInUser, setLoggedInUser] = useState(null);
  const [showModal, setShowModal] = useState(false);

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
              <div>
                <Form>
                  <Form.Label>Project Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Project"
                  ></Form.Control>
                  <Button type="submit">Add Project</Button>
                </Form>
              </div>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
}
