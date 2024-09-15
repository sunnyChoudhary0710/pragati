import React from 'react';
import { CursorContext } from '../../contexts/CursorContext';
import { motion } from 'framer-motion';

const Button = (props) => {
    const {type, label, onClick} = props;
    const {mouseEnterHandler, mouseLeaveHandler} = React.useContext(CursorContext);

    return (
        <motion.button onMouseEnter={type !== 'p-button' ? mouseEnterHandler : ()=>{}} onMouseLeave={type !== 'p-button' ? mouseLeaveHandler : ()=>{}} className={type} onClick={onClick} aria-label={label}>
            {label}
        </motion.button>
    )
}

export default Button;