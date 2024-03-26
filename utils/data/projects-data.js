import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Hackathon Web App',
        description: "I developed a Hackathon web application where contestant can login, create teams, discuss project features and submit the final project for grading by judges.",
        tools: ['Laravel', 'MySQL', 'PHPMailer', 'React'],
        role: 'Full-Stack Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'Portfolio Website',
        description: 'I have designed and developed a full-stack web app where users can learn courses created by course developers and/or lecturers. It has features such as Saas, Learner, Instructor and Admin Panel, code editing, emailing system, chat system etc...',
        tools: ['Laravel', 'Tailwind CSS', "Google Api", "Payment Gateways", "PHPMailer", "MySQL", "Social Login", "Google Analytics", "Admin tools"],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'Notes WebApp',
        description: 'I developed a notes WebApp where users can login, create notes, save, edit and/or delete them, share notes with other users and users can read other users notes if those users made them public.',
        tools: ['Laravel', 'Breeze', 'MySQL'],
        code: '',
        role: 'Full Stack Developer',
        demo: '',
        image: realEstate,
    },
    // {
    //     id: 4,
    //     name: 'Newsroom Management',
    //     description: "My team and I developed a newspaper management dashboard application called Newsroom Management. As a front-end developer, I worked on creating the dashboard using NextJS, Material UI, Redux, Calendar, and other necessary npm libraries. We used React Redux to manage the application's state and React-hook-form and Sun Editor to handle forms.",
    //     tools: ['NextJS', 'Material UI', 'Redux', 'Sun Editor', "Calendar"],
    //     code: '',
    //     demo: '',
    //     image: ayla,
    //     role: 'Full Stack Developer',
    // }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },