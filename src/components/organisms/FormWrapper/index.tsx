import React from "react";

import { useStyles } from "./styles";
import { Box, Typography } from "@material-ui/core";
import AddButton from "../../atoms/AddButton";

interface IProps {}

const FormWrapper: React.FC<IProps> = () => {
    const classes = useStyles();

    return (
        <Box className={classes.wrapper}>
            <Typography>FormWrapper</Typography>
            <AddButton />
        </Box>
    );
};

export default FormWrapper;
