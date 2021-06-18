import React from "react";

import { useStyles } from "./styles";
import { Box, Typography } from "@material-ui/core";
import FormWrapper from "../FormWrapper";

interface IProps {}

const Main: React.FC<IProps> = () => {
    const classes = useStyles();

    return (
        <Box className={classes.wrapper}>
            <FormWrapper />
        </Box>
    );
};

export default Main;
