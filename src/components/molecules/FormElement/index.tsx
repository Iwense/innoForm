import React from "react";
import { Box } from "@material-ui/core";
import { useStyles } from "./styles";

interface IProps {
    className?: string;
    onClick?: () => void;
}

const FormElement: React.FC<IProps> = (props) => {
    const classes = useStyles();
    const { onClick } = props;

    return <Box className={classes.wrapper}>Hello</Box>;
};

export default FormElement;
