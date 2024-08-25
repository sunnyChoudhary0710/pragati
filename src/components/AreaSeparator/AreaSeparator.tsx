import React from 'react';
import '../../styles/AreaSeparator.css';

const AreaSeparator = ({spacer = 48}) => {
    return (
        <div className='area-separator' style={{
            padding: `${spacer}px 0`
        }}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export default AreaSeparator;