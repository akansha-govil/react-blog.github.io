import React from 'react';
import "./../styles/fitness.css";

function Fitness(){
    return(
        <>

        {/* <div className="main-img"></div>
        <h1 className="heading1">More About Fitness</h1> */}
        <div className="container1">
        <div className="main-img"></div>
        <h1 className="heading1">More About Fitness</h1>
            <div className="card">
                <div className="diet-img"></div>
                <h2 className="fit-sub">Healthy Balanced Diet</h2>
                <p className="fit-description">A balanced diet is not just about eating the right foods, but also ensuring the vital nutrients that make it to your plate is varied.</p>
                
            </div>
            <div className="card">
                <div className="yoga-img"></div>
                <h2 className="fit-sub">Calming Yoga And Meditation</h2>
                <p className="fit-description">It helps in keeping our mental and physical health intact. It helps us to connect to nature.In short, it improves our well-being and gives us better mental clarity.</p>
                
            </div>
            <div className="card">
                <div className="workout-img"></div>
                <h2 className="fit-sub">Workout Benefits</h2>
                <p className="fit-description">There are numerous benefits of physical fitness which include better health, greater strength, increased flexibility, increased energy, improved appetite, positive attitude.</p>
            </div>
            <div className="heading-2">
                <h1>Simple Ways To Manage a Balanced Diet</h1>
            </div>

            <div className="diet-img1"></div>
            <div className="list">
            <ul>
                <li>Make half your plate fruits and vegetables</li>
                <li>Make half the grains you eat whole grains.</li>
                <li>Switch to fat-free or low-fat (1%) milk.</li>
                <li>Choose a variety of lean protein foods.</li>
                <li>Drink water instead of sugary drinks.</li>
                <li>Cut back on solid fats.</li>
                <li>Compare sodium in foods. </li>
            </ul>
            </div>
            <div className="heading-2"><h1>Yoga Management</h1></div>
            <div className="yoga-img1"></div>
            <div className="list">
            <ul>
                <li>reduce stress</li>
                <li>relieve anxiety</li>
                <li>help manage depression</li>
                <li>decrease lower back pain</li>
                <li>improve quality of life </li>
                <li>stimulate brain function</li>
                <li>help prevent heart disease </li>
            </ul>
            </div>
            <div className="heading-2"><h1>Workout</h1></div>
            <div className="workout-img1"></div>
            <div className="list">
            <ul>
                <li>ENJOY SOME ENTERTAINMENT</li>
                <li>TAKE ON A HEALTHY DIET</li>
                <li>FIND A WORKOUT PARTNER</li>
                <li>CHOOSE THE RIGHT TIME TO WORKOUT</li>
                <li>SET GOALS </li>
                <li>WEAR BETTER WORKOUT CLOTHES</li>
                <li>WORK OUT AT HOME </li>
            </ul>
            </div>
            

        </div>
        </>
    );
}
export default Fitness;