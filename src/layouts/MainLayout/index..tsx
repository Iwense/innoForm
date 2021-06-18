import React, { ReactChild } from "react";
import Box from "@material-ui/core/Box";
import { useStyles } from "./styles";

interface IProps {
    sideBarLeft: ReactChild;
    header: ReactChild;
    children: ReactChild;
}

const MainLayout: React.FC<IProps> = (props) => {
    const { sideBarLeft, children, header } = props;

    const classes = useStyles();
    return (
        <Box className={classes.mainWrapper}>
            <Box className={classes.header}>{header}</Box>

            <Box className={classes.content}>{children}</Box>
        </Box>
    );
};

export default MainLayout;
