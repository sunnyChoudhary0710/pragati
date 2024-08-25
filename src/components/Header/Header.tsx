import React from 'react';
import {Button} from '..';

const Header = () => {
    return (
        <section className='header-wrapper'>
            <Button type={'link'} label="About Me"/>
            <Button type={'link'} label="Work"/>
            <Button type={'link'} label="Behance"/>
            <Button type={'p-button'} label="Let's Chat" />
        </section>
    )
}

export default Header;