import React from 'react';
import '../../styles/AreaSeparator.css';

const AreaSeparator = ({spacer = 48}) => {
    return (
        <div className='area-separator'>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export default AreaSeparator;