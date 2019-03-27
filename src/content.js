import React from 'react';

const content={
    hero:{
        title: 'Hi, I am Jon Miren',
        content:"I'm a Front-End Web Developer",
        button:'Checkout My Portfolio',
        background: "../../Assets/img/hero.JPG"
    },

    profile:{
        widget1:{
            content:<ul >
            <li>30 years old (22/03/1988), Spanish and Mexican Citizenship</li>
            <li>Swedish Personal Number: 880322-1251</li>
            <li>Front-end Web Developer</li>
            <li>Journalist</li>
            <li>Video Editor</li>
            <li>PADI Certified SCUBA diving instructor</li>
            <li>Email: jon.m.h.aresti@gmail.com</li>
            <li>cellphone: 07 6321 82 80</li>
        </ul>,
            type:"jsx",
            title:'Jon Miren Aresti Olin'
                    
        },
        widget2:{
            type:'jsx',
            title:'Education',
            content: <ul>
            <li>Masters in Collaborative Media and Creative Industries in Malmo University. Graduation date: Summer 2019. </li>
            <li> Front-End Web Development. Google Challenge scholarship recipient, Udacity. Since November 2017. </li>
            <li>Interaction Design. Malmo University (01/01/2018 – 05/06/2018). </li>
            <li> Bachelor of Liberal Arts with a major in Peace and Conflict Studies and a minor in International Relations. Malmo University. </li>
            <li> Script Writing Workshop with Academy Award Winner Guillermo Arriaga, January 2017. </li>
            <li>Journalism and Entrepreneurship: how to monetize, promote and manage digital media. Online course from the Knight Center for Journalism in The Americas. October 2016 – November 2016. </li>
            <li> Advanced Copy-Writing for Journalists workshop in ARTELUZ, Mexico City, Mexico. May 2016</li>
            <li>Investigative Journalism Diploma from the Autonomous Metropolitan University (UAM). February 2015-July 2015. </li>
            <li>Propaedeutic semester for the International Communication Bachelor at Hanze University of Applied Sciences, Groningen, The Netherlands, September 2010 – April 2011. </li>
        </ul>
            

        }, 
        widget3:{
            type:'text',
            title:'About Me',
            content: <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
            ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui 
            officia deserunt mollit anim id est laborum.</p>
        },
        widget4:{
            type:'jsx',
            title:'Skills',
            content:
                <ul>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>CSS</li>
                    <li>HTML</li>
                    <li>Test Driven Development</li>
                    <li>Accesibility</li>
                    <li>PremierePro</li>
                    <li>Photoshop</li>
                    <li>Tools</li>
                </ul>
            
        }
    }
};

export default content;

