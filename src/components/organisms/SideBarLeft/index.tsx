import React from "react";
import SidebatListItems from "../../molecules/SidebarListItems";

import { Box, Typography } from "@material-ui/core";
import { useStyles } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { getFiledsList } from "../../../store/selectors";

interface IProps {
    onClick?: () => void;
}

const SideBarLeft: React.FC<IProps> = ({ onClick }) => {
    const classes = useStyles();
    const data = useSelector(getFiledsList);
    const dispatch = useDispatch();

    const handleClick = (value: string): void => {
        dispatch.elements.addElement(value);
        onClick && onClick();
    };

    return (
        <Box className={classes.wrapper}>
            <SidebatListItems
                data={data}
                onClick={(value: string) => handleClick(value)}
            />
        </Box>
    );
};

export default SideBarLeft;
