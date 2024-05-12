import React from "react";
import { Input } from "@nextui-org/react";

export const InputTemplate = ({
    type,
    label,
    placeholder,
    icon,
    variant,
    width,
    onChange,
    value
}) => {
    return (
        <>
            <Input
                className="md:w-80"
                radius="sm"
                variant={variant}
                startContent={icon}
                type={type}
                label={label}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
            />
        </>
    );
};
