import React from "react";
import cn from "classnames";
import { Box, Typography } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

import { useStyles } from "./styles";

interface IProps {
    className?: string;
    disabled?: boolean;
    onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}

const AddButton: React.FC<IProps> = ({ className, disabled, onClick }) => {
    const classes = useStyles();

    return (
        <Box className={classes.button} onClick={onClick}>
            <AddIcon className={classes.icon} />
        </Box>
    );
};

export default AddButton;
