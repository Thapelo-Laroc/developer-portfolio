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
    {
        id: 4,
        name: 'Forex Analysis Website',
        description: "I developed this website for Forex analysis and trading signal sharing on the platform. Users can view Live Forex data, economic calendar, and other forex related insights",
        tools: ['Laravel', 'Trading View', 'PHP', 'NPM', "Calendar"],
        code: 'Laravel Framework',
        demo: 'https://mccroc.laroclearning.co.za',
        image: ayla,
        role: 'Full Stack Developer',
    },
    {
        id: 5,
        name: 'eLearning Website',
        description: "I developed this eLearning Website for Laroc Learning where they can teach coding, upload videos, create quizzes and tests, track learner progress and so on",
        tools: ['Laravel', 'Youtube API', 'PHP', 'NPM',],
        code: 'Laravel Framework',
        demo: 'https://dashboard.laroclearning.co.za',
        image: ayla,
        role: 'Full Stack Developer',
    }
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