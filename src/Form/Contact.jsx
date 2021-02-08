import { Button, Container, TextField } from "@material-ui/core";
import React from "react";

const Contact = ({ formData, setform, navigation }) => {
  const { phone, email } = formData;
  return (
    <Container style={{ textAlign: "center" }} maxWidth="xs">
      <h1 style={{ color: "indigo", textDecoration: "underline" }}>
        Address Details
      </h1>

      <TextField
        fullWidth
        variant="outlined"
        label="Phone"
        onChange={setform}
        value={phone}
        margin="normal"
        name="phone"
      />
      <TextField
        fullWidth
        variant="outlined"
        label="Email"
        onChange={setform}
        value={email}
        margin="normal"
        name="email"
      />
      <Button
        style={{ marginRight: "5px" }}
        variant="contained"
        color="secondary"
        onClick={() => navigation.previous()}
      >
        Prev
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={() => navigation.next()}
      >
        Next
      </Button>
    </Container>
  );
};

export default Contact;
