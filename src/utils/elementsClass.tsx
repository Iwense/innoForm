import React from "react";
import DateField from "../components/molecules/FormElement/elements/DateField";
import InputText from "../components/molecules/FormElement/elements/InputText";
import ButtonField from "../components/molecules/FormElement/elements/ButtonField";

interface IElement {
    toHTML(): string;
}

export interface IInputTextOptions {
    label: string;
    fieldType: string;
    max: number;
    keyName: string;
    mask: string;
}

export class InputTextElement implements IElement {
    private label: string = "";
    private fieldType: string = "";
    private max: number = 100;
    private keyName: string = "";
    private mask: string = "";
    private placeholder: string = "";

    constructor(options: IInputTextOptions) {
        const { label, fieldType, max, keyName, mask } = options;
        this.label = label;
        this.fieldType = fieldType;
        this.max = max;
        this.keyName = keyName;
        this.mask = mask;
    }

    render() {
        return <InputText onChange={() => null} label={this.label} />;
    }

    toHTML() {
        return "";
    }
}

export interface IDateField {
    date: Date;
    label: string;
}

export class DateElement implements IElement {
    private date: Date = new Date();
    private label: string = "";

    constructor(options: IDateField) {
        const { date, label } = options;
        this.date = date;
        this.label = label;
    }

    render() {
        return <DateField onChange={() => null} />;
    }

    toHTML() {
        return "";
    }
}

export interface IButtonElement {
    btnType?: "button" | "submit" | "reset";
    className?: string;
    children?: string;
    btnClassName?: string;
    disabled?: boolean;
    onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}

export class ButtonElement implements IElement {
    private btnType?: "button" | "submit" | "reset";
    private className?: string;
    private children?: string;
    private btnClassName?: string;
    private disabled?: boolean;
    private onClick?: (event: React.MouseEvent<HTMLElement>) => void;

    constructor(options: IButtonElement) {
        const {
            btnType,
            className,
            btnClassName,
            disabled,
            onClick,
            children,
        } = options;
        this.btnType = btnType;
        this.className = className;
        this.btnClassName = btnClassName;
        this.disabled = disabled;
        this.children = children;
        this.onClick = onClick;
    }

    render() {
        return <ButtonField btnType={this.btnType} children={this.children} />;
    }

    toHTML() {
        return "";
    }
}
