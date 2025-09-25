import React from 'react';
import style from './Input.module.css';

type InputProps = React.ComponentProps<"input">;

export const Input: React.FC<InputProps> = (props) => {
    return <input className={style.input} {...props}/>
}