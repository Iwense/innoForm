import React, { useState } from "react";

import { useStyles } from "./styles";
import { Box, Typography } from "@material-ui/core";
import AddButton from "../../atoms/AddButton";
import SideBarLeft from "../SideBarLeft";
import { useSelector } from "react-redux";
import { getElementsList } from "../../../store/selectors";
import FormElement from "../../molecules/FormElement";

interface IProps {}

const FormWrapper: React.FC<IProps> = () => {
    const classes = useStyles();
    const [showSidebar, setShowSidebar] = useState<boolean>(false);
    const elements = useSelector(getElementsList);

    const handleAddClick = () => {
        setShowSidebar((prev) => !prev);
    };

    return (
        <Box className={classes.wrapper}>
            {!elements.length && (
                <Box className={classes.noItemsBlock}>
                    <Typography className={classes.title}>
                        Нажмите + чтобы добавить новый элемент вашей формы
                    </Typography>
                    <AddButton onClick={handleAddClick} />
                </Box>
            )}
            {!!elements.length &&
                elements.map((item: any) => (
                    <FormElement
                        key={`${item?.id}-elements`}
                        item={item}
                        onAddClick={handleAddClick}
                    />
                ))}

            {showSidebar && <SideBarLeft onClick={handleAddClick} />}
        </Box>
    );
};

export default FormWrapper;
