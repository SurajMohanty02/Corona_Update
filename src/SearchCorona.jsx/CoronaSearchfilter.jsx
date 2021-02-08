import { Dialog, DialogContent, DialogContentText, DialogTitle, Modal, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import Tableshow from '../components/Tableshow';

import './Corona.css';

const CoronaSearchfilter = () => {
    const [item, setitem] = useState("");
    const [country, setcountry] = useState({});
    const [modal, setmodal] = useState(false);
    const api = {
        base: `https://coronavirus-19-api.herokuapp.com/countries/`
    }
    const manage = () => {
        setmodal(true);
    }
    const handelclose = () => {
        setmodal(false);
    }
    const search = (e) => {
        if (e.key === "Enter") {
            fetch(`${api.base}${item}`).then((res) => res.json()).
                then((result) => {
                    setcountry(result);

                }).
                catch((error) => console.log(error));
        }
    }
    return (
        <div className="Search">
            <div className="Search_box">
                <input type="text" placeholder="search.."
                    onChange={(e) => setitem(e.target.value)}
                    value={item} onKeyPress={search}
                    className="Search_bar"
                />
                {(country.country === item) ? (
                    <div className="Card">
                        <div className="card-header">
                            <div className="card-title color_text">
                                {country.country}
                                <div className="card-body">
                                    <Typography className="color_text" >Total Cases:{country.cases}</Typography>

                                    <Typography className="color_text">Active Cases:{country.active}</Typography>

                                    <Typography className="color_text">Total Deaths:{country.deaths}</Typography>
                                </div>
                                <Dialog open={modal} onClose={handelclose}>
                                    <DialogTitle>Today's Corona Status Update</DialogTitle>
                                    <DialogContent>
                                        <DialogContentText>
                                            <Typography>Total Cases:{country.todayCases}</Typography>
                                            <Typography>Active Deaths:{country.todayDeaths}</Typography>
                                            <Typography>Total Tests:{country.totalTests}</Typography>
                                        </DialogContentText>
                                    </DialogContent>
                                    <button onClick={handelclose} className="btn btn-danger">
                                        Close</button>
                                </Dialog>
                                <div className="text-center">
                                    <button onClick={manage} className="btn btn-primary">
                                        Today's Details</button>
                                </div>

                            </div>

                        </div>

                    </div>
                ) : ("")}
                <Tableshow />
            </div>

        </div>
    )
}

export default CoronaSearchfilter;
