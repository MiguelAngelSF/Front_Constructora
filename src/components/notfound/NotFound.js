import { Button, Grid } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import React, { useEffect } from "react";

export default function NotFound() {
    const navigate = useNavigate();

    return (
        <Grid container className="notFound">
            <Button variant="outlined" onClick={(e) => navigate('/')}>Regresar al inicio</Button>
        </Grid>
    )
}