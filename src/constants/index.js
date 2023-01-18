import {
    people01,
    people02,
    people03,
    facebook,
    instagram,
    linkedin,
    twitter,
    nokia,
    continental,
    flex,
    bcr,
    brd,
    hella,
} from "../assets";

export const navLinksProfessor = [
    {
        id: "home",
        title: "Home",
    },
    {
        id: "my-student",
        title: "My Students",
    },
    {
        id: "my-topics",
        title: "My Topics",
    },
    {
        id: "feed-back",
        title: "Feedback"
    },
    {
        id: "log-out",
        title: "Logout",
    }

];
export const navLinksStudent = [
    {
        id: "home",
        title: "Home",
    },
    {
        id: "my-thesis",
        title: "My Thesis",
    },
    {
        id: "topics",
        title: "Topics",
    },
    {
        id: "feed-back",
        title: "Feedback"
    },
    {
        id: "log-out",
        title: "Logout",
    }
];


export const footer_msg = "Copyright Ⓒ 2023 My Thesis. All Rights Reserved. By Cristian Pal ";

export const feedback = [
    {
        id: "feedback-1",
        content:
            "This platform helped me to keep in touch with the coordinator through the notes left",
        name: "Herman Jensen",
        title: "Student",
        img: people01,
    },
    {
        id: "feedback-2",
        content:
            "Organizing the work has never been easier, I can view my students' work at any time and with the notes feature I can leave a quick feedback!",
        name: "Steve Mark",
        title: "Professor",
        img: people02,
    },
    {
        id: "feedback-3",
        content:
            "My experience was a pleasant one with this platform, but I would like it if it had a mobile version.",
        name: "Kenn Gallagher",
        title: "Student",
        img: people03,
    },
];

export const events = [
    {
        id:1,
        title: 'Topic choosing',
        date: new Date('Jan 21, 2023'),
        description: 'End of topic choosing date is Jan 21'
    },
    {
        id:2,
        title: 'Intermediate Check',
        date: new Date('May 22, 2023'),
        description: 'Intermediate check is done by the end of May'

    },
    {
        id:3,
        title: 'Final Upload',
        date: new Date('Jun 10, 2023'),
        description: 'Final upload of thesis will take place in Jun 10 after that no submissions are allowed!'
    },

];

export const socialMedia = [
    {
        id: "social-media-1",
        icon: instagram,
        link: "https://www.instagram.com/",
    },
    {
        id: "social-media-2",
        icon: facebook,
        link: "https://www.facebook.com/",
    },
    {
        id: "social-media-3",
        icon: twitter,
        link: "https://www.twitter.com/",
    },
    {
        id: "social-media-4",
        icon: linkedin,
        link: "https://www.linkedin.com/",
    },
];

export const sponsors = [
    {
        id: "sponsor-1",
        logo: nokia,
    },
    {
        id: "sponsor-2",
        logo: continental,
    },
    {
        id: "sponsor-3",
        logo: flex,
    },
    {
        id: "sponsor-4",
        logo: bcr,
    },
    {
        id: "sponsor-5",
        logo: brd,
    },
    {
        id: "sponsor-6",
        logo: hella,
    },
];

export const items = [
    { id: 1, coordinator_name: 'Lect. Dr. Monica Sancira', contact_email: 'monica.tirea@e-uvt.ro' , action:"Choose Now" },
    { id: 2, coordinator_name: 'Lect. Dr. Flavia Micota', contact_email: 'flavia.micota@e-uvt.ro' , action:"Choose Now" },
    { id: 3, coordinator_name: 'Lect. Dr. Daniel Pop', contact_email: 'daniel.pop@e-uvt.ro' , action:"Choose Now" },

];
export const coordinator_topics = [
    { id: 1, topic_title: 'Topic 1',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        action:"Choose Now" },
    { id: 2, topic_title: 'Topic 2', description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        action:"Choose Now" },
    { id: 3, topic_title: 'Topic 3', description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        action:"Choose Now" },
    { id: 4, topic_title: 'Topic 4', description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        action:"Choose Now" },

];


export const notes_all_students = [{id:1, cooridnator:"Lect. Dr. Monica Sancira",
    notes_of_coord:[
        {id:0,note:"Note1"},
        {id:1,note:"Note2"},
        {id:2,note:"Note3"},
        {id:3,note:"Note4"},],
    student_name:'student'
},
    {id:2, cooridnator:"Lect. Dr. Monica Sancira",
        notes_of_coord:[
            {id:0,note:"New_Note1"},
            {id:1,note:"New_Note2"},
            {id:2,note:"New_Note3"},
            {id:3,note:"New_Note4"},],
        student_name:'student2'
    },

]
export const notes= [
    {id:0,note:"New_Note1"},
    {id:1,note:"New_Note2"},
    {id:2,note:"New_Note3"},
    {id:3,note:"New_Note4"}
]
export const my_topics=[
    {user:'monica.tirea',current_topics:[
            { id: 0, topic_title: 'Topic 1', description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                action:["Delete","Update"] },
            { id: 1, topic_title: 'Topic 2', description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                action:["Delete","Update"] },
            { id: 2, topic_title: 'Topic 3', description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                action:["Delete","Update"] },

        ]},
    {user:'professor2',current_topics:[
            { id: 1, topic_title: 'Topic 1', description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                action:["Delete","Update"] },
            { id: 2, topic_title: 'Topic 2', description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                action:["Delete","Update"] },
            { id: 3, topic_title: 'Topic 3', description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                action:["Delete","Update"] },
            { id: 4, topic_title: 'Topic 4', description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                action:["Delete","Update"] }
        ]},
]

export const my_students=[
    {user:'monica.tirea',current_topics:[
            { id: 1, student_name: 'Student1', topic_title: "Topic1", action:'View Work' },
            { id: 2, student_name: 'Student2', topic_title: "Topic1", action:'View Work' },
            { id: 3, student_name: 'Student3', topic_title: "Topic1", action:'View Work' },

        ]},
    {user:'professor2',current_topics:[
            { id: 1, student_name: 'Student1', topic_title: "Topic1", action:'View Work' },
            { id: 2, student_name: 'Student2', topic_title: "Topic1", action:'View Work' },
            { id: 3, student_name: 'Student3', topic_title: "Topic1", action:'View Work' },
            { id: 4, student_name: 'Student4', topic_title: "Topic1", action:'View Work' },
        ]},
]