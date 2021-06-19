import React, { useState } from "react";
import cn from "classnames";
import { Box, Typography, TextField, InputBase } from "@material-ui/core";
import DateFnsUtils from "@date-io/date-fns";
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from "@material-ui/pickers";
import { useStyles } from "./styles";

export interface IProps {
    label?: string;
    defaultValue?: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value?: string;
    className?: string;
}

const DateField = React.forwardRef<HTMLInputElement, IProps>(
    (props: IProps, ref) => {
        const { value, label, className } = props;

        const [inputValue, setInputValue] = useState<string>(value || "");
        const classes = useStyles(props);
        const inputClass = cn(classes.input, className);
        const [selectedDate, setSelectedDate] = React.useState<Date | null>(
            new Date(Date.now())
        );

        const handleDateChange = (date: Date | null) => {
            setSelectedDate(date);
        };

        return (
            <Box className={classes.inputBox}>
                <InputBase
                    className={classes.inputLabel}
                    defaultValue={label || "Введите текст"}
                    inputProps={{ "aria-label": "naked" }}
                />
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                        disablePast
                        disableToolbar
                        variant='inline'
                        format='MM/dd/yyyy'
                        className={classes.input}
                        value={selectedDate}
                        onChange={handleDateChange}
                        InputProps={{
                            disableUnderline: true,
                        }}
                        KeyboardButtonProps={{
                            "aria-label": "change date",
                        }}
                    />
                </MuiPickersUtilsProvider>
            </Box>
        );
    }
);

export default DateField;
