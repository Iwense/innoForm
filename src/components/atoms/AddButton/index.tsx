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

const AddButton: React.FC<IProps> = ({ className, onClick }) => {
    const classes = useStyles();

    const boxClass = cn(classes.button, className);

    return (
        <Box className={boxClass} onClick={onClick}>
            <AddIcon className={classes.icon} />
        </Box>
    );
};

export default AddButton;
