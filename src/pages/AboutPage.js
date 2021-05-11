import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props) {
    return (
        <div>
            <Hero title={props.title} />

            <Content>
                <p>
                    From a very young age I was exposed to a great deal of travel. Having grown up in
                    Southern
                    California it would have been easy to settle into the beach lifestyle; however it was
                    important to my parents that I get out and learn how the rest of the world lived. Thus,
                    by
                    the age of eighteen I had traveled in and out of several countries most of which would
                    be
                    classified as second or third world. Having also learned Russian at a very young age I
                    spent time in Yalta and Moscow during the early nineties translating at the latter
                    stages of
                    the Cold War. Shortly after High School I spent six months in Ammand, Jordan on an
                    archeological dig
                    before attending Oxford University for a year to study Literature. After finishing up
                    College in the states I relocated to Los Angeles to pursue a career in acting. It did
                    not
                    take me long to realize that I was not going to take Hollywood by storm so I began
                    working
                    in Private Equity and Investment Banking as an Analyst for a small Broker/Dealer. Once
                    the
                    Recession in 2009 descended upon us the financial landscape changed with regards to my
                    employers so I relocated to Santa Barbara and have spent the last ten years managing
                    Restaurants/Nightclubs. Like many other businesses the hospitality industry plummeted at
                    the
                    hands of Covid-19, so I am now enrolled in a Full-Stack Coding Bootcamp at UC
                    Davis pursuing a career in Full Stack Web Development.
                </p>
            </Content>
        </div>
    )


}
export default AboutPage;