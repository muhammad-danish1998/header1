import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export function Navbar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" style={{ boxShadow: 'none' }}>
                <Toolbar className='navbarHeader' >
                    <Typography variant="h6" className={classes.title}>
                        <span className='logo-circle'>N</span>
                        <span className='logo-text'>4IRU</span>
                    </Typography>
                    <div className='right-conent'>
                        <a href='#' className='active'>Home</a>
                        <a href='#'>Cources</a>
                        <a href='#'>FAQ</a>
                        <a href='#'>Management</a>
                        <a href='#'>AboutUS</a>
                        <a href='#'>ContactUs</a>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}
