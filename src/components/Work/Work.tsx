import React from 'react';
import Card from '../Card/Card';
import '../../styles/work.css';

const Work = () => {
    return(
        <article id="pam-works" className='test'>
            <h3 className="work-title">Work</h3>
            <div className="card-container">
            <Card image="/images/flower-santuary-new.jpg" heading="The Flower Sanctuary" description={'A User-Friendly & Visually Applealing Flower Shop Website Design'}/>
            <Card image="" comingSoon heading="Healthcare Dashboard" description={'Designing a Web Application to improve patient engagement, access to information, or remote monitoring'}/>
            <Card image="" comingSoon heading="Smart Home Control Center" description={'One application to control them all. This app will alow users to control and monitor all IOT devices at one place.'}/>
            <Card image="" comingSoon heading="" description={''}/>
            </div>
            
        </article>
    )    
}

export default Work;