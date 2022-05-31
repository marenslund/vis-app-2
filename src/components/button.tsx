import React from "react";
import '../style/button.style.css';

interface buttonProps {
    text: string
    classname?: string
    onClick: React.MouseEventHandler<HTMLButtonElement>
}

export const Button = ({text, classname, onClick}:buttonProps) => {

    return (
        <button className={classname ? classname : ''} onClick={onClick}>
            {text}
        </button>
    )
}