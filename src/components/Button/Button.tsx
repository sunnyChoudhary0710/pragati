import React from 'react';

const Button = (props) => {
    const {type, label, onClick} = props;

    return (
        <button className={type} onClick={onClick} aria-label={label}>
            {label}
        </button>
    )
}

export default Button;