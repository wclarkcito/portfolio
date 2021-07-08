import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props) {
    return (
        <div>
            <Hero title={props.title} />

            <Content>
                <p> Full Stack Web Developer with a passion for problem solving and a strong background in Sales, Finance and Customer Service. </p>

                <p> Recently earned a certificate in full stack web development from UC Davis with skills in JavaScript, React.js, Node.js, JQuery, CSS3, HTML5, MySql, MongoDb and Express.
                </p>

                <p> Staunch adherence to the Scrum framework.</p>

                <p> Excellent communication skills. </p>

                <p> Graduated with a Bachelor's degree in English from the University of Puget Sound.</p>

                <p> Former Analyst for Winchester Hedge Fund of Funds in Irvine, CA and obtained NASD licenses Series 6, 63 and 3.</p>

                <p> Have spent 15 years in the Service industry both managing and revitalizing numerous Bars and Restaurants increasing revenue in all respective establishments.</p>






            </Content>
        </div>
    )


}
export default AboutPage;