import React, { useEffect, useRef, useState } from "react";
import { Box, Fade, Popper, Typography } from "@material-ui/core";
import { useStyles } from "./styles";
import AddButton from "../../atoms/AddButton";
import SettingsButton from "../../atoms/SettingsButton";

interface IProps {
    className?: string;
    onClick?: () => void;
    onAddClick?: () => void;
    item: any;
}

const FormElement: React.FC<IProps> = (props) => {
    const classes = useStyles();
    const [showAddButton, setShowAddButton] = useState<boolean>(false);
    const { onClick, item, onAddClick } = props;
    const componentRef = useRef<HTMLDivElement>(null);
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [open, setOpen] = React.useState<boolean>(Boolean(anchorEl));

    useEffect(() => {
        setAnchorEl(componentRef.current || null);
    }, [showAddButton]);

    const handleSettingsDotClick = (event: React.MouseEvent<HTMLElement>) => {
        setOpen((prev) => !prev);
    };

    const handleMouseLeave = () => {
        setShowAddButton(false);
        setOpen(false);
    };

    return (
        <Box
            className={classes.wrapper}
            onMouseEnter={() => setShowAddButton(true)}
            onMouseLeave={handleMouseLeave}
        >
            {item?.element.render()}
            {showAddButton && (
                <>
                    <SettingsButton
                        className={classes.settings}
                        refCom={componentRef}
                        onDotClick={(event: React.MouseEvent<HTMLElement>) =>
                            handleSettingsDotClick(event)
                        }
                    />
                    <AddButton
                        className={classes.addButton}
                        onClick={onAddClick}
                    />
                </>
            )}
            <Popper id={item?.id} open={open} anchorEl={anchorEl} transition>
                {({ TransitionProps }) => (
                    <Fade {...TransitionProps} timeout={350}>
                        <Box className={classes.paper}>
                            <Typography className={classes.paperText}>
                                Дублировать
                            </Typography>
                            <Typography className={classes.paperText}>
                                Удалить
                            </Typography>
                        </Box>
                    </Fade>
                )}
            </Popper>
        </Box>
    );
};

export default FormElement;
