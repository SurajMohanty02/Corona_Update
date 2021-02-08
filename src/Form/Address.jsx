import { Button, Container, TextField } from "@material-ui/core";
import React from "react";

const Address = ({ formData, setform, navigation }) => {
  const { firstname, address, city, state, zip } = formData;

  //console.log(address, city, state, zip)
  return (
    <Container style={{ textAlign: "center" }} maxWidth="xs">
      <h1 style={{ color: "indigo", textDecoration: "underline" }}>
        Address Details
      </h1>
      <TextField
        fullWidth
        variant="outlined"
        label="Address"
        onChange={setform}
        value={address}
        margin="normal"
        name="address"
      />
      <TextField
        fullWidth
        variant="outlined"
        label="City"
        onChange={setform}
        value={city}
        margin="normal"
        name="city"
      />
      <TextField
        fullWidth
        variant="outlined"
        label="State"
        onChange={setform}
        value={state}
        margin="normal"
        name="state"
      />
      <TextField
        fullWidth
        variant="outlined"
        label="zip"
        onChange={setform}
        value={zip}
        margin="normal"
        name="zip"
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

export default Address;
