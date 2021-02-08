import { Grid, Paper, Typography} from '@material-ui/core';
import React, { useEffect } from 'react';

const Card=({countries})=> {
   const CardData=()=>{
      
       return (
           <div 
           className="text-center">
           <Grid container justify="center" align="center" id="xx">
        
           <Paper justify="center" align="center" elevation={5} style={{marginLeft:"62px",marginTop:"40px",
           background:"gray",color:"indigo"}}  >
           <Typography  style={{marginLeft:"10px",marginTop:"4px",
           background:"gray",color:"white",marginRight:"10px"}}>
          Country:{countries["country"]}
           
           </Typography>
           <Typography  style={{marginLeft:"10px",marginTop:"4px",
           background:"gray",color:"white",marginRight:"10px"}}>
           Total Cases:{countries["cases"]}
           </Typography>
           
           <Typography  style={{marginLeft:"10px",marginTop:"4px",
           background:"gray",color:"white",marginRight:"10px"}}>
           Active Cases:{countries["active"]}
           </Typography>
           <Typography style={{marginLeft:"10px",marginTop:"4px",
           background:"gray",color:"white",marginRight:"10px"}}>
           Critical:{countries["critical"]}
           </Typography>
           <Typography style={{marginLeft:"10px",marginTop:"4px",
           background:"gray",color:"white",marginRight:"10px"}}>
           Death:{countries["deaths"]}
           </Typography>
           <Typography style={{marginLeft:"10px",marginTop:"4px",
           background:"gray",color:"white",marginRight:"10px"}}>
          Recoverd:{countries["recovered"]}
           </Typography>
           <Typography style={{marginLeft:"10px",marginTop:"4px",
           background:"gray",color:"white",marginRight:"10px"}}>
           Today Cases:{countries["todayCases"]}
           </Typography>
           <Typography style={{marginLeft:"10px",marginTop:"4px",
           background:"gray",color:"white",marginRight:"10px"}}>
           Todays Death:{countries["todayDeaths"]}
           </Typography>
           <Typography style={{marginLeft:"10px",marginTop:"4px",
           background:"gray",color:"white",marginRight:"10px"}}>
          TotalTests:{countries["totalTests"]}
           </Typography>
          </Paper>
         
          </Grid>

          
           </div>
       )
   }
        
    return (
        <React.Fragment>
        {CardData()}
        </React.Fragment>
    )
}


export default Card;