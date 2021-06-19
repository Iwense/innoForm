import React, { useState } from "react";
import cn from "classnames";
import CloseIcon from "@material-ui/icons/Close";
import { Box, Typography, TextField, InputBase } from "@material-ui/core";
import { useStyles } from "./styles";

export interface IProps {
    placeholder?: string;
    label?: string;
    defaultValue?: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    errorText?: string;
    value?: string;
    inputType?: string;
    className?: string;
    error?: string;
    multiline?: boolean;
    rows?: number;
}

const InputText = React.forwardRef<HTMLInputElement, IProps>(
    (props: IProps, ref) => {
        const {
            placeholder,
            label,
            defaultValue,
            onChange,
            error,
            errorText,
            value,
            inputType,
            className,
            multiline,
            rows,
        } = props;
        const [inputValue, setInputValue] = useState<string>(value || "");
        const classes = useStyles(props);
        const inputClass = cn(classes.input, className);

        return (
            <Box className={classes.inputBox}>
                <InputBase
                    className={classes.inputLabel}
                    defaultValue={label || "Введите текст"}
                    inputProps={{ "aria-label": "naked" }}
                />

                <TextField
                    InputProps={{
                        disableUnderline: true,
                    }}
                    ref={ref}
                    onChange={onChange}
                    value={inputValue}
                    defaultValue={defaultValue}
                    className={inputClass}
                    type={inputType}
                    placeholder={placeholder}
                    multiline={multiline}
                    rows={rows}
                />
                {error && (
                    <Typography
                        className={classes.error}
                    >{`* ${error}`}</Typography>
                )}
            </Box>
        );
    }
);

export default InputText;
