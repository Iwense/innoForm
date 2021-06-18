import React from "react";

import { useStyles } from "./styles";
import { Box, Typography } from "@material-ui/core";

interface IProps {}

const Header: React.FC<IProps> = () => {
    const classes = useStyles();

    return (
        <Box className={classes.wrapper}>
            <Typography>innoForm</Typography>
        </Box>
    );
};

export default Header;
