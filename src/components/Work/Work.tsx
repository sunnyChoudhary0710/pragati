import React from 'react';
import Card from '../Card/Card';
import '../../styles/work.css';

const Work = () => {
    return(
        <article id="pam-works" className='test'>
            <Card image="/images/flower-santuary-new.jpg" heading="The Flower Sanctuary" description={'A User-Friendly & Visually Applealing Flower Shop Website Design'}/>
            <Card image="/images/flower-santuary.jpg" heading="The Flower Sanctuary" description={'A User-Friendly & Visually Applealing Flower Shop Website Design'}/>
            <Card image="/images/flower-santuary.jpg" heading="The Flower Sanctuary" description={'A User-Friendly & Visually Applealing Flower Shop Website Design'}/>
            <Card image="/images/flower-santuary.jpg" heading="The Flower Sanctuary" description={'A User-Friendly & Visually Applealing Flower Shop Website Design'}/>
        </article>
    )    
}

export default Work;