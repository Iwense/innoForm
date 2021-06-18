import React from "react";
import SidebatListItems from "../../molecules/SidebarListItems";

import { Box, Typography } from "@material-ui/core";
import { useStyles } from "./styles";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";

interface IProps {}

const SideBarLeft: React.FC<IProps> = () => {
    const classes = useStyles();
    const data = useSelector((state: RootState) => state.sidebarList.list);

    return (
        <Box className={classes.wrapper}>
            <SidebatListItems data={data} />
        </Box>
    );
};

export default SideBarLeft;
