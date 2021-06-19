import React from "react";
import cn from "classnames";
import { Box, Typography } from "@material-ui/core";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SettingsIcon from "@material-ui/icons/Settings";
import OpenWithIcon from "@material-ui/icons/OpenWith";

import { useStyles } from "./styles";

interface IProps {
    className?: string;
    disabled?: boolean;
    refCom?: React.RefObject<HTMLDivElement>;
    onClick?: (event: React.MouseEvent<HTMLElement>) => void;
    onMoveClick?: (event: React.MouseEvent<HTMLElement>) => void;
    onDotClick?: (event: React.MouseEvent<HTMLElement>) => void;
    onSettingClick?: (event: React.MouseEvent<HTMLElement>) => void;
}

const SettingsButton: React.FC<IProps> = ({
    className,
    onClick,
    onDotClick,
    refCom,
}) => {
    const classes = useStyles();

    const boxClass = cn(classes.button, className);

    const handleDotClick = (event: React.MouseEvent<HTMLElement>) => {
        onDotClick && onDotClick(event);
    };

    return (
        <Box className={boxClass} onClick={onClick}>
            <Typography ref={refCom}></Typography>
            <Box className={classes.moveBox}>
                <OpenWithIcon className={classes.icon} />
            </Box>
            <Box className={classes.otherBox}>
                <SettingsIcon
                    className={cn(classes.icon, classes.marginIcon)}
                />
                <MoreHorizIcon
                    className={classes.icon}
                    onClick={(event: any) => handleDotClick(event)}
                />
            </Box>
        </Box>
    );
};

export default SettingsButton;
