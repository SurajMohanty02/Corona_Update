import { Button, Container, Input, TextField } from "@material-ui/core";
import React from "react";

const PersonalDetails = ({ formData, setform, navigation }) => {
  const { firstname, lastname, nickname } = formData;
  //console.log(navigation)
  return (
    <Container style={{ textAlign: "center" }} maxWidth="xs">
      <h1 style={{ color: "indigo", textDecoration: "underline" }}>
        Personal Details
      </h1>
      <TextField
        fullWidth
        variant="outlined"
        label="FirstName"
        onChange={setform}
        value={firstname}
        margin="normal"
        name="firstname"
      />
      <TextField
        fullWidth
        variant="outlined"
        label="LastName"
        onChange={setform}
        value={lastname}
        margin="normal"
        name="lastname"
      />
      <TextField
        fullWidth
        variant="outlined"
        label="NickName"
        onChange={setform}
        value={nickname}
        margin="normal"
        name="nickname"
      />
      <Button
        variant="contained"
        fullWidth
        color="primary"
        onClick={() => navigation.next()}
      >
        Next
      </Button>
    </Container>
  );
};

export default PersonalDetails;
