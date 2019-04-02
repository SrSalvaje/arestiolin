import React from 'react';
import Mymalmo from './Assets/img/myMalmo.JPG';
import myReads from './Assets/img/myReads.JPG';
import restRev from './Assets/img/restRev.JPG';
import matching from './Assets/img/matching.JPG';
import arcade from './Assets/img/arcade.JPG';

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
    },

    CV:[
        {
        title:'Web development internship at Securelink',
        date:"",
        location:'Malmo, Sweden',
        coordinahtes:'',
        description:'Ipso lorem',
        coordinates:  { lat:'55.587399', lng: '13.057444'},
        id:"webSecureLink"
        },
    
        {
            title:'Online Editor for the Newspaper La Jornada',
            date:'',
            location:'Mexico City, Mexico',
            description:'Lorem ipsum',
            coordinates:  { lat: '19.373213', lng: '-99.160531'},
            id:'onlineJornada'
        },

        {
            title:'English Teacher at Nerles Language Center',
            date:'',
            location: 'MExico City, Mexico',
            description:'ahgdfl aSFHJKHG',
            coordinates: { lat:'19.428896', lng: '-99.141923'},
            id:'englishNerles'
        },

        {
            title: 'Columnist and reporter for La Palabra',
            date:'',
            location:'Acapulco, Mexico',
            description:'Stuff, much important very wow',
            coordinates:  { lat:'16.865667', lng: '-99.891980'},
            id:'columnistPalabra'
        },

        {
            title:'Reporter and translator at La Jornada',
            date:'',
            location:'Mexico City, Mexico',
            description:'Much work, very nice',
            coordinates:  { lat:'19.373213', lng: '-99.160531'},
            id:'reporterJornada'
        },

        {
            title:'Sales Executive for Occidental Vacation Club',
            date:'',
            location:"Playa del Carmen, Qro. Mexico",
            description:'Much sales, very nice',
            coordinates:  { lat:'20.586335', lng: '-87.116533'},
            id:'salesOccidental'
        },

        {
            title:'Scuba and First Aid Instructor at Sinai Divers.',
            date:'',
            location:'Sharm el Sheikh, Egypt',
            description:'Much wet, very deep',
            coordinates:  { lat:'27.907461', lng: '34.327875'},
            id:'scubaSinai'
            
        },

        {
            title:'Scuba Diving Instructor and Guide at Scuba Playa.',
            date:'',
            location:'Playa del Carmen México',
            description:'Also wet, very mexican',
            coordinates:{lat:'20.626654', lng:'-87.071960'},
            id:'scubaScuba'
        },

        {
            title:'Scuba Diving Instructor and Guide at Scuba Fun Caraibes.',
            date:'',
            location:'Philipsburg, Sint Maarten',
            description:'sd<föo föhAEFG',
            coordinates:  { lat:'18.018169', lng: '-63.043496'},
            id:'scubaFun'
        },

        {
            title:'Sales Associate at the hotel Barceló Cancun',
            date:'',
            location:'Cancun, Mexico',
            description:'much sales, loads of party',
            coordinates: { lat:'21.102660', lng: '-86.764194'},
            id:'salesBarcelo'
        }

    
    ],

    portfolio:[
        {title: "My Malmö",
        image: Mymalmo,
        url: 'https://srsalvaje.github.io/UdacityFinal/',
        description: 'ipso loreum WEFLKUHSAE<klöufhikuhflikuihsdfgliughraghg',
        id:'myMalmo'
        },
        {title: "Book Tracker",
        image: myReads,
        url: 'https://srsalvaje.github.io/Udacity-My-Reads/',
        description: 'ipso loreum WEFLKUHSAE<klöufhikuhflikuihsdfgliughraghg',
        id:'bkTrack'
        },
        {title: "Restaurant Reviews",
        image: restRev,
        url: 'https://srsalvaje.github.io/udacity-restaurant-reviews/',
        description: 'ipso loreum WEFLKUHSAE<klöufhikuhflikuihsdfgliughraghg',
        id:'restRev'
        },
        {title: "Arcade Clone",
        image: arcade,
        url: 'https://srsalvaje.github.io/UdacityP4Frogger/',
        description: 'ipso loreum WEFLKUHSAE<klöufhikuhflikuihsdfgliughraghg',
        id:'arcClo'
        },
        {title: "Memory Game",
        image: matching,
        url: 'https://srsalvaje.github.io/memorygame/',
        description: 'ipso loreum WEFLKUHSAE<klöufhikuhflikuihsdfgliughraghg',
        id:'memGame'
        }
    ]
        

    
}








export default content;

