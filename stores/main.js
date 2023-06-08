import { defineStore } from 'pinia';

const state = () => ({
    // ...

    /* User */
    userName: null,
    userEmail: null,
    userAvatar: null,

    /* Field focus with ctrl+k (to register only once) */
    isFieldFocusRegistered: false,

    courseDetails: [
        {
            heading: 'Course image',
            description: 'Suggested Dimensions: 760x420px'
        },
        {
            heading: 'Course description',
            description:
                'Include a brief description of your course. Max 250 characters'
        }
    ],
    clients: [
        {
            id: 19,
            avatar: 'https://avatars.dicebear.com/v2/gridy/Howell-Hand.svg',
            login: 'percy64',
            name: 'Howell Hand',
            company: 'Kiehn-Green',
            city: 'Emelyside',
            progress: 70,
            created: 'Mar 3, 2021'
        },
        {
            id: 11,
            avatar: 'https://avatars.dicebear.com/v2/gridy/Hope-Howe.svg',
            login: 'dare.concepcion',
            name: 'Hope Howe',
            company: 'Nolan Inc',
            city: 'Paristown',
            progress: 68,
            created: 'Dec 1, 2021'
        },
        {
            id: 32,
            avatar: 'https://avatars.dicebear.com/v2/gridy/Nelson-Jerde.svg',
            login: 'geovanni.kessler',
            name: 'Nelson Jerde',
            company: 'Nitzsche LLC',
            city: 'Jailynbury',
            progress: 49,
            created: 'May 18, 2021'
        },
        {
            id: 22,
            avatar: 'https://avatars.dicebear.com/v2/gridy/Kim-Weimann.svg',
            login: 'macejkovic.dashawn',
            name: 'Kim Weimann',
            company: 'Brown-Lueilwitz',
            city: 'New Emie',
            progress: 38,
            created: 'May 4, 2021'
        }
    ],
    learners: [
        {
            id: 1,
            avatar: 'https://avatars.dicebear.com/v2/gridy/Howell-Hand.svg',
            login: 'percy64',
            name: 'Howell Hand',
            email: 'kiehngreen@lms.in',
            mobile: '+91-9987654321',
            lastLogin: 'Mar 03, 2021',
            joinedOn: 'Mar 03, 2021',
            isEnabled: true,
            courses:["course1" , "course2" , "course3" , "course4"],
            bundle:['bundle1' , "bundle2" , "bundle3" , "bundle4"],
            testSerieses: ['ts1' , "ts2" , "ts3"],
            mockTests : ["Mk1" , "Mk2" , "Mk3"],
            leadStatus:"Open",//can be Open, Follow up, Converted, Not Interested
            userSegment : 'Returning' // Free, Trial, Paid,Returning

        },
        {
            id: 2,
            avatar: 'https://avatars.dicebear.com/v2/gridy/Hope-Howe.svg',
            login: 'dare.concepcion',
            name: 'Hope Howe',
            email: 'nolaninc@lms.in',
            mobile: '+91-9987654321',
            lastLogin: 'Dec 01, 2021',
            joinedOn: 'Mar 03, 2021',
            isEnabled: false,
            courses:["course1" , "course2" , "course3" ],
            bundle:['bundle1' , "bundle2" , "bundle4"],
            testSerieses: ['ts1' , "ts2" ],
            mockTests : [ "Mk2" , "Mk3"],
            leadStatus:"Not Interested",//can be Open, Follow up, Converted, Not Interested
            userSegment : 'Free' // Free, Trial, Paid,
        },
        {
            id: 3,
            avatar: 'https://avatars.dicebear.com/v2/gridy/Nelson-Jerde.svg',
            login: 'geovanni.kessler',
            name: 'Nelson Jerde',
            email: 'nitzschellc@lms.in',
            mobile: '+91-9987654321',
            lastLogin: 'May 18, 2021',
            joinedOn: 'Mar 03, 2021',
            isEnabled: true,
            courses:["course1" , "course4"],
            bundle:["bundle3" , "bundle4"],
            testSerieses: ['ts1' , "ts3"],
            mockTests : [ "Mk2" , "Mk3"],
            leadStatus:"Converted",//can be Open, Follow up, Converted, Not Interested
            userSegment : 'Paid' // Free, Trial, Paid,
        },
        {
            id: 4,
            avatar: 'https://avatars.dicebear.com/v2/gridy/Kim-Weimann.svg',
            login: 'macejkovic.dashawn',
            name: 'Kim Weimann',
            email: 'brownlueilwitz@lms.in',
            mobile: '+91-9987654321',
            lastLogin: 'May 04, 2021',
            joinedOn: 'Mar 11, 2021',
            isEnabled: false,
            courses:["course1" , "course4"],
            bundle:['bundle1' , "bundle2" ],
            testSerieses: ['ts1' , "ts3"],
            mockTests : ["Mk1" , "Mk2"],
            leadStatus:"Follow up",//can be Open, Follow up, Converted, Not Interested
            userSegment : "Trial" // Free, Trial, Paid,
        }
    ],
    affiliates: [
        {
            id: 1,
            avatar: 'https://avatars.dicebear.com/v2/gridy/Howell-Hand.svg',
            login: 'percy64',
            name: 'Howell Hand',
            email: 'kiehngreen@lms.in',
            mobile: '+91-9987654321',
            lastLogin: 'Mar 03, 2021',
            joinedOn: 'Mar 03, 2021',
            isEnabled: true,
            commitionRate:50,
            isLifelong : true ,
            courses:["course1" , "course14"],
            bundle:['bundle1' , "bundle22" ],
            testSerieses: ['ts23' , "ts43"],
            mockTests : ["Mk1" , "Mk2"],
            leadStatus:"Follow up",//can be Open, Follow up, Converted, Not Interested
            userSegment : "Paid" // Free, Trial, Paid,
        },
        {
            id: 2,
            avatar: 'https://avatars.dicebear.com/v2/gridy/Hope-Howe.svg',
            login: 'dare.concepcion',
            name: 'Hope Howe',
            email: 'nolaninc@lms.in',
            mobile: '+91-9987654321',
            lastLogin: 'Dec 01, 2021',
            joinedOn: 'Mar 03, 2021',
            isEnabled: false,
            commitionRate:50,
            isLifelong : true ,
            courses:["course1" , "course6"],
            bundle:['bundle1' , "bundle3" ],
            testSerieses: ['ts9' , "ts12"],
            mockTests : ["Mk2" , "Mk5"],
            leadStatus:"Not Interested",//can be Open, Follow up, Converted, Not Interested
            userSegment : "Returning" // Free, Trial, Paid,
        },
        {
            id: 3,
            avatar: 'https://avatars.dicebear.com/v2/gridy/Nelson-Jerde.svg',
            login: 'geovanni.kessler',
            name: 'Nelson Jerde',
            email: 'nitzschellc@lms.in',
            mobile: '+91-9987654321',
            lastLogin: 'May 18, 2021',
            joinedOn: 'Mar 03, 2021',
            isEnabled: true,
            commitionRate:50,
            isLifelong : true ,
            courses:["course1" , "course7"],
            bundle:['bundle1' , "bundle6" ],
            testSerieses: ['ts1' , "ts3"],
            mockTests : ["Mk1" , "Mk8"],
            leadStatus:"Converted",//can be Open, Follow up, Converted, Not Interested
            userSegment : "Free" // Free, Trial, Paid,
        },
        {
            id: 4,
            avatar: 'https://avatars.dicebear.com/v2/gridy/Kim-Weimann.svg',
            login: 'macejkovic.dashawn',
            name: 'Kim affiliate',
            email: 'brownlueilwitz@lms.in',
            mobile: '+91-9987654321',
            lastLogin: 'May 04, 2021',
            joinedOn: 'Mar 11, 2021',
            isEnabled: false,
            commitionRate:50,
            isLifelong : false ,
            courses:["course1" , "course2"],
            bundle:['bundle1' , "bundle4" ],
            testSerieses: ['ts1' , "ts6"],
            mockTests : ["Mk10" , "Mk12"],
            leadStatus:"Open",//can be Open, Follow up, Converted, Not Interested
            userSegment : "Trial" // Free, Trial, Paid,
        }
    ],
    admins: [
        {
            id: 1,
            avatar: 'https://avatars.dicebear.com/v2/gridy/Howell-Hand.svg',
            login: 'percy64',
            name: 'Howell Hand',
            email: 'kiehngreen@lms.in',
            mobile: '+91-9987654321',
            lastLogin: 'Mar 03, 2021',
            joinedOn: 'Mar 03, 2021',
            role:"Admin",
            isEnabled: true,
            courses:["course1" , "course14"],
            bundle:['bundle1' , "bundle22" ],
            testSerieses: ['ts23' , "ts43"],
            mockTests : ["Mk1" , "Mk2"],
        },
        {
            id: 2,
            avatar: 'https://avatars.dicebear.com/v2/gridy/Hope-Howe.svg',
            login: 'dare.concepcion',
            name: 'Hope Howe',
            email: 'nolaninc@lms.in',
            mobile: '+91-9987654321',
            lastLogin: 'Dec 01, 2021',
            joinedOn: 'Mar 03, 2021',
            role:'Super Admin',
            isEnabled: false,
            courses:["course1" , "course6"],
            bundle:['bundle1' , "bundle3" ],
            testSerieses: ['ts9' , "ts12"],
            mockTests : ["Mk2" , "Mk5"],
        },
        {
            id: 3,
            avatar: 'https://avatars.dicebear.com/v2/gridy/Nelson-Jerde.svg',
            login: 'geovanni.kessler',
            name: 'Nelson Jerde',
            email: 'nitzschellc@lms.in',
            mobile: '+91-9987654321',
            lastLogin: 'May 18, 2021',
            joinedOn: 'Mar 03, 2021',
            role:"Admin",
            isEnabled: true,
            courses:["course1" , "course7"],
            bundle:['bundle1' , "bundle6" ],
            testSerieses: ['ts1' , "ts3"],
            mockTests : ["Mk1" , "Mk8"],
        },
        {
            id: 4,
            avatar: 'https://avatars.dicebear.com/v2/gridy/Kim-Weimann.svg',
            login: 'macejkovic.dashawn',
            name: 'Kim admin',
            email: 'brownlueilwitz@lms.in',
            mobile: '+91-9987654321',
            lastLogin: 'May 04, 2021',
            joinedOn: 'Mar 11, 2021',
            role:'Super Admin',
            isEnabled: false,
            courses:["course1" , "course2"],
            bundle:['bundle1' , "bundle4" ],
            testSerieses: ['ts1' , "ts6"],
            mockTests : ["Mk10" , "Mk12"],
        }
    ],
    instructors: [
        {
            id: 1,
            avatar: 'https://avatars.dicebear.com/v2/gridy/Howell-Hand.svg',
            login: 'percy64',
            name: 'Howell Hand',
            email: 'kiehngreen@lms.in',
            mobile: '+91-9987654321',
            lastLogin: 'Mar 03, 2021',
            joinedOn: 'Mar 03, 2021',
            isEnabled: true,
            courses:["course1" , "course2"],
            bundle:['bundle1' , "bundle4" ],
            testSerieses: ['ts1' , "ts6"],
            mockTests : ["Mk10" , "Mk12"],
        },
        {
            id: 2,
            avatar: 'https://avatars.dicebear.com/v2/gridy/Hope-Howe.svg',
            login: 'dare.concepcion',
            name: 'Hope Howe',
            email: 'nolaninc@lms.in',
            mobile: '+91-9987654321',
            lastLogin: 'Dec 01, 2021',
            joinedOn: 'Mar 03, 2021',
            isEnabled: false,
            courses:["course1" , "course6"],
            bundle:['bundle1' , "bundle3" ],
            testSerieses: ['ts9' , "ts12"],
            mockTests : ["Mk2" , "Mk5"],
        },
        {
            id: 3,
            avatar: 'https://avatars.dicebear.com/v2/gridy/Nelson-Jerde.svg',
            login: 'geovanni.kessler',
            name: 'Nelson Jerde',
            email: 'nitzschellc@lms.in',
            mobile: '+91-9987654321',
            lastLogin: 'May 18, 2021',
            joinedOn: 'Mar 03, 2021',
            isEnabled: true,
            courses:["course1" , "course14"],
            bundle:['bundle1' , "bundle22" ],
            testSerieses: ['ts23' , "ts43"],
            mockTests : ["Mk1" , "Mk2"],
        },
        {
            id: 4,
            avatar: 'https://avatars.dicebear.com/v2/gridy/Kim-Weimann.svg',
            login: 'macejkovic.dashawn',
            name: 'Kim instructor',
            email: 'brownlueilwitz@lms.in',
            mobile: '+91-9987654321',
            lastLogin: 'May 04, 2021',
            joinedOn: 'Mar 11, 2021',
            isEnabled: false,
            courses:["course1" , "course4"],
            bundle:['bundle1' , "bundle2" ],
            testSerieses: ['ts1' , "ts3"],
            mockTests : ["Mk1" , "Mk2"],
        }
    ],
    history: [
        {
            amount: 375.53,
            name: 'Home Loan Account',
            date: '3 days ago',
            type: 'deposit',
            business: 'Turcotte'
        },
        {
            amount: 470.26,
            name: 'Savings Account',
            date: '3 days ago',
            type: 'payment',
            business: 'Murazik - Graham'
        },
        {
            amount: 971.34,
            name: 'Checking Account',
            date: '5 days ago',
            type: 'invoice',
            business: 'Fahey - Keebler'
        },
        {
            amount: 374.63,
            name: 'Auto Loan Account',
            date: '7 days ago',
            type: 'withdrawal',
            business: 'Collier - Hintz'
        }
    ],
    lessonOptions: [
        {
            headline: 'Video',
            description: 'Easily upload and display your video content'
        },
        {
            headline: 'PDF',
            description:
                'Easily upload PDF content for your students to view directly within your course player'
        },
        {
            headline: 'Text',
            description:
                'Include bodies of text,styled HTML content, and also imagePerfect for learning on the go, audio content is great if you know your students are mobile'
        },
        {
            headline: 'Audio',
            description:
                'Perfect for learning on the go, audio content is great if you know yor students are mobile'
        },
        {
            headline: 'Download',
            description: 'Distribute files to your students'
        },
        {
            headline: 'Presentation',
            description:
                'Display slides with audio that your students can navigate through'
        },
        {
            headline: 'Multimedia',
            description: 'Include a great resource into your course'
        },
        {
            headline: 'Live',
            description:
                "Enable Live lessons using Zoom's video meeting and/or webinar tools"
        }
    ],
    accessStudents: [
        {
            headline: 'Quiz',
            description:
                'Allow students to interact with material that was just taught or presented'
        },
        {
            headline: 'Survey',
            description:
                'Incorporate some avenues for feedback between you and your students'
        },
        {
            headline: 'Assignment',
            description:
                'Great for any type of homework that you would like a student to submit for approval'
        },
        {
            headline: 'Exam',
            description:
                'Integrate with a professional exam tool called Brillium to deliver tests with these requirements'
        }
    ],

    courseDetails: [
        {
            heading: 'Course image',
            description: 'Suggested Dimensions: 760x420px'
        },
        {
            heading: 'Course description',
            description:
                'Include a brief description of your course. Max 250 characters'
        }
    ],
    products: [
        {
            name: 'Test1',
            date: '3 hours ago',
            adjective: 'TST_001',
            product: 'P-01',
            material: 'wood',
            price: '20.00'
        },
        {
            name: 'Test2',
            date: '2 days ago',
            product: 'P-02',
            adjective: 'TST_002',
            material: 'iron',
            price: '40.00'
        },
        {
            name: 'Test3',
            date: '3 days ago',
            product: 'P-03',
            adjective: 'TST_003',
            material: 'steel',
            price: '20.00'
        },
        {
            name: 'Test4',
            date: '4 days ago',
            product: 'P-04',
            adjective: 'TST_04',
            material: 'wood',
            price: '20.99'
        }
    ]
});

const getters = {};

const actions = {
    setUser(payload) {
        if (payload.name) {
            this.userName = payload.name;
        }
        if (payload.email) {
            this.userEmail = payload.email;
        }
        if (payload.avatar) {
            this.userAvatar = payload.avatar;
        }
    },
    addLearner(payload) {
        this.learners.push(payload);
    },
    addAffiliate(payload) {
        this.affiliates.push(payload);
    },
    addInstructor(payload) {
        this.instructors.push(payload);
    },
    addAdmin(payload) {
        this.admins.push(payload);
    },
};

export const useMainStore = defineStore('main', {
    state,
    getters,
    actions
});
