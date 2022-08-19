import React from 'react'
import style from "./Button.module.css"

const Button = ({children,handelClick}) => <button className={style.button} onClick={handelClick} >{children}</button>

export default Button
