import React from "react";
import cn from "classnames";
import { Button, Typography } from "@material-ui/core";

import { useStyles } from "./styles";

interface IProps {
    btnType?: "button" | "submit" | "reset";
    className?: string;
    btnClassName?: string;
    disabled?: boolean;
    onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}

const ButtonItem: React.FC<IProps> = ({
    btnType,
    className,
    btnClassName,
    disabled,
    onClick,
    children,
}) => {
    const classes = useStyles();

    const classText = cn(classes.text, className);
    const classButton = cn(classes.button, btnClassName);

    return (
        <Button
            disableTouchRipple
            disableRipple
            type={btnType}
            className={classButton}
            disabled={disabled}
            onClick={onClick}
        >
            <Typography variant={"subtitle1"} className={classText}>
                {children}
            </Typography>
        </Button>
    );
};

export default ButtonItem;
