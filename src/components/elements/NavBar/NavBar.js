import { Button, Grid, Link, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

export default function NavBar() {
    const [flag, setFlag] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', function(e) {
            Math.trunc(e.currentTarget.scrollY) > 0 ? setFlag(true) : setFlag(false);
        });
    }, []);

    return (
        <Grid container className={flag ? 'navbar-scroll' : 'navbar'}>
            <Grid item className={flag ? 'nav-start black' : 'nav-start'}>
                <Typography variant="h6">
                    Empresa
                </Typography>
            </Grid>
            <Grid item className={flag ? 'nav-end black' : 'nav-end'}>
                <Button className={flag ? "header-menu black" : "header-menu"}>Home</Button>
                <Button className={flag ? "header-menu black" : "header-menu"} onClick={() => window.scroll(0, 955)}>Galery</Button>
                <Button className={flag ? "header-menu black" : "header-menu"}>Contactanos</Button>
                <Button className={flag ? "header-menu black" : "header-menu"}>About</Button>
            </Grid>
        </Grid>
    )
}