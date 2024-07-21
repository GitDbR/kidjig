import React from 'react';
import './main.css';

function Main() {
    return (
        <main>
            <div className="main-container">
                <div className="container">
                    <h1 className='primary-text text-wrap text-start'>Empowering Lives Through Innovative <span>AI</span> Technologies. </h1>
                    <p className='secondary-text text-wrap text-start'>Finding new horizons for visionaries to accelerate their innovation and progress.</p>
                    <div className="buttons flex">
                        <button className="services rounded-xl py-3 px-5">Explore Our Services</button>
                        <button className="learn rounded-xl py-3 px-5">Learn more</button>
                    </div>
                </div>

            </div>
            <div className="special">
                <h3 className='text-center'><span className='gradient-text ' id='left'>From Ideas to Software Solutions </span> 💡✨ <span className='gradient-text' id='middle'>From Ideas to Software Solutions</span> 🌟✨ <span className='gradient-text' id='right'> From Ideas to</span></h3>
            </div>

        </main>
    )
}

export default Main
