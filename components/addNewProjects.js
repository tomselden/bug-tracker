import { useState, useRef } from "react";
import { createProject } from "../services";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

export default function AddNewProjects({ onSubmit, userID }) {
  const [project, setProject] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    createProject({ project, userID }).then(onSubmit);
  };
  




  return (
    <div className="formWrapper">
      <Form className="form">
        <Form.Label>Project Name</Form.Label>
        <Form.Control
          className="input"
          type="text"
          placeholder="Enter Project"
          onChange={(event) => {
              setProject(event.target.value)
          }}
        ></Form.Control>
        <Button onClick={handleSubmit}>Add Project</Button>
      </Form>
    </div>
  );
}
