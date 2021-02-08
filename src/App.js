import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import './App.css';
import Card from './components/Card';
import Navbar from './components/Navbar';
import { Covidapi } from './Covid/Covidapi';


function App() {
  const [country, setcountry] = useState([]);
  useEffect(() => {
    Covidapi().then((data) => {
      setcountry(data)
      console.log(data)
    }).
      catch((error) => console.log("error", error))

  });
  return (
    <React.Fragment>



      {
        country.map((data, i) => {
          return <Card country={data} id={i} />, console.log(country);

        })
      }

    </React.Fragment>
  );
}

export default App;
