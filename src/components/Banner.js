import React from 'react';
import { Grid, Button, Divider, Typography } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from 'react-router-dom';
import { GoMegaphone } from 'react-icons/go';
import { ImBooks } from 'react-icons/im';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const font = "'Russo One', sans-serif";
const theme = createMuiTheme({
    typography: {
        fontFamily: font,
        textTransform: "none"
    }
});
const Banner = () => {
    const classes = useStyles();
    const history = useHistory();
    const main = "/";
    const createsession = "/session/create";
    const bookshelf = "/bookshelf/:id";

    const bookie = () => {
        history.push(main);
    };

    const opendebate = () => {
        history.push(createsession);
    };

    const mybookshelf = () => {
        history.push(bookshelf);
    };

    // top padding +40px 위치에 button 위치하게 함. Ex) paddingTop: 50px => button top: 90px; paddingTop: 100px => button top: 140px,
    return (
        <Grid style={{ paddingTop: '30px' }}>
            <Button className={classes.button} onClick={bookie}>
                <Typography className={classes.banner} variant="h2">
                    Bookie
                </Typography>
            </Button>
            <Button className={classes.button} onClick={opendebate} style={{ position: 'absolute', left: 'auto', right: '350px', top: '70px' }} startIcon={<GoMegaphone className={classes.icon} />}>
                Open Debate
            </Button>
            <Button className={classes.button} onClick={mybookshelf} style={{ position: 'absolute', left: 'auto', right: '200px', top: '70px' }} startIcon={<ImBooks className={classes.icon} />}>
                My Bookshelf
            </Button>
            <HorizonLine w='100%' m='10px 0 20px 0' b='5px solid #EC9F05' />
        </Grid>
    );
};

const useStyles = makeStyles({
    text: {
        color: "#EC9F05",
    },
    divider: {
        background: "#EC9F05",
    },
    button: {
        textTransform: 'none'
    },
    icon: {
        color: "#EC9f05"
    },
    banner: {
        color: "#EC9F05",
        fontFamily: font
    }
});
const HorizonLine = ({ w, m, b }) => {
    return (
        <div
            style={{
                width: w,
                textAlign: 'center',
                align: 'center',
                borderBottom: b,
                lineHeight: '0.1em',
                margin: m,
            }}
        ></div>
    );
};
export default Banner;
