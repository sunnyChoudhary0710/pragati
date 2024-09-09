import React from 'react';
import './QuickFacts.css';

const QuickFacts = () => {
    return (
        <div className="quick-facts-wrapper">
            <div className="quick-facts-banner">
                <div className='quick-facts-banner-img'>
                    <img className='quick-facts-img' src="images/quick_facts.png" alt="Pam standing" aria-hidden="true"/>
                    <img className='pam-standing' src="images/PAM_STANDING.png" alt="quick facts banner" aria-hidden="true"/>
                </div>

                <div className="text1">
                South Korea is my dream destination but my bank balance doesn't agree...
                <img src="images/laugh_emoji.svg" alt="laugh" aria-hidden="true"></img>
            </div>
            <div className="text2">
                <img className="one" src="images/flower.png" alt="laugh" aria-hidden="true"></img>
                My childhood dream was to become a Florist
                <img className="two" src="images/flower2.png" alt="laugh" aria-hidden="true"></img>
            </div>
            <div className="text3">
                I find joy in the little things, keeping a playful approach to design (and life!)
            </div>
            <div className="text4">
                I have a bookshelf full of promises to start reading! <img src="images/books.png" alt="book" aria-hidden="true"></img>
            </div>
            <div className="text5">
                I am a horror movie addict but don't let me watch it alone...
                <img src="images/ghost.png" alt="ghost" aria-hidden="true"/>
                <img src="images/ghost2.png" alt="ghost" aria-hidden="true"/>
            </div>
            </div>
            
        </div>
    )
}

export default QuickFacts;