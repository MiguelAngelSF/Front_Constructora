import { Button, Grid, Typography } from "@mui/material";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import React from "react";

export default function Home() {

    return (
        <>
            <Grid container className="header-home">
                <img src="assets/logo.png" />
            </Grid>
            <Grid>
                <Grid className="container-card" container spacing={2}>
                    <Grid className="card" item xs={12} sm={6} md={4}>
                        <div className="item">
                            <img className="home-card img-card" src="assets/casa1.jpg" width={300} height={170}/>
                            <Button className="btn-home">Ver información</Button>
                        </div>
                    </Grid>
                    <Grid className="card" item xs={12} sm={6} md={4}>
                        <div className="item">
                            <img className="home-card img-card" src="assets/casa2.jpg" width={300} height={170}/>
                            <Button className="btn-home">Ver información</Button>
                        </div>
                    </Grid>
                    <Grid className="card" item xs={12} sm={6} md={4}>
                        <div className="item">
                            <img className="home-card img-card" src="assets/casa3.jpg" width={300} height={170}/>
                            <Button className="btn-home">Ver información</Button>
                        </div>
                    </Grid>
                </Grid>
                <Grid container className="c-carrousel">
                    <Typography variant="h2" className="title-home">Galeria</Typography>
                    <div className="c-item-carrousel">
                        <Carousel className="carrousel">
                            <div>
                                <img className="img-home" src="assets/casa1.jpg" />
                                <p className="legend">Legend 1</p>
                            </div>
                            <div>
                                <img className="img-home" src="assets/casa2.jpg" />
                                <p className="legend">Legend 2</p>
                            </div>
                            <div>
                                <img className="img-home" src="assets/casa3.jpg" />
                                <p className="legend">Legend 3</p>
                            </div>
                        </Carousel>
                    </div>
                </Grid>
                <Grid container className="c-appointments">
                    <Typography variant="h2" className="title-home">Agendar cita</Typography>
                </Grid>
            </Grid>
        </>
    )
}