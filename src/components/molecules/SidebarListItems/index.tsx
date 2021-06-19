import React from "react";
import List from "@material-ui/core/List";
import { useStyles } from "./styles";
import SidebarItem from "../../atoms/SidebarItem";

interface IData {
    title: string;
    type: string;
}

interface IProps {
    className?: string;
    onClick: (value: string) => void;
    data: IData[];
}

const defaultProps: IProps = {
    className: "",
    onClick: () => null,
    data: [],
};

const SidebatListItems: React.FC<IProps> = (props) => {
    const classes = useStyles();
    const { onClick, data } = props;

    return (
        <List
            component='nav'
            aria-labelledby='nested-list-subheader'
            className={classes.root}
        >
            {Boolean(data.length) &&
                data.map((item: IData, index: number) => (
                    <SidebarItem
                        key={`key-link-${index}`}
                        title={item.title}
                        onClick={(e: any) => {
                            e.stopPropagation();
                            onClick && onClick(item?.type);
                        }}
                    />
                ))}
        </List>
    );
};

SidebatListItems.defaultProps = defaultProps;
export default SidebatListItems;
