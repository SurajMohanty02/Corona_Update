import {
  Accordion,
  AccordionActions,
  AccordionDetails,
  AccordionSummary,
  Button,
  Container,
  IconButton,
  ListItemText,
  Typography,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import EditIcon from "@material-ui/icons/Edit";
import React, { useState } from "react";
import './Accordion.css';
import { AccordionToggle } from "react-bootstrap";

const Review = ({ formData ,navigation}) => {
 const {go}=navigation;

  const {
    firstname,
    lastname,
    nickname,
    address,
    city,
    state,
    zip,
    phone,
    email,
  } = formData;
  return (
    <Container maxWidth="sm">
    <h1 className="text-center position-sticky">Form Details Review</h1>
    <br/>
      <RenderAccordion
        summery="PersonalDetails"
        go={go}
        formdetails={[
          { FirstName: firstname },
          { LastName: lastname },
          { NickName: nickname },
          { Address: address },
          { City: city },
          { State: state },
          { Zip: zip },
          { PhoneNo: phone },
          { Email: email },
        ]}
      />
      <RenderAccordion
        summery="Address"
        go={go}
        formdetails={[
          { Address: address },
          { City: city },
          { State: state },
          { Zip: zip },
          { PhoneNo: phone },
          { Email: email },
        ]}
      />
      <RenderAccordion
        summery="Contact"
        go={go}

        formdetails={[
          
          { PhoneNo: phone },
          { Email: email },
        ]}
      />
      <div className="button__sub">
      <Button variant="contained"
   onClick={()=>navigation.next()}
      color="primary">
      Submit</Button>
      </div>
    </Container>
  );
};

      
        export const RenderAccordion = ({ summery, formdetails,go }) => {

  return (
    <Accordion >
    
      <AccordionSummary expandIcon={<ExpandMoreIcon/>} >
       <span> {summery}</span> 
        </AccordionSummary>
        
        <AccordionDetails>
       
    
          <div>
            {formdetails.map((val, index) => {
              const obj = Object.keys(val)[0];
              const value = val[Object.keys(val)];
              // console.log(obj, value);
              return (
                <ListItemText key={index}>
                 {` ${obj}:${value}`}
                </ListItemText>
              );
            })}
            <IconButton  onClick={()=>go(summery)} className="icon_btn">
              <EditIcon  className="edit"/>
            </IconButton>
          </div>
        
         
        </AccordionDetails>
        
   
    
    </Accordion>
  );
};
export default Review;
