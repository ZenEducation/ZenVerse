import { defineStore } from "pinia";

const sampleUserChats = [
    {
        name: "Alfredo Elliott",
        lastMessage: "😂 Lorem ipsum dolor",
        unreadCount: 5,
        id: 2,
        date: "2023-02-12T04:17:52.763+00:00",
        isOnline: false,
    },
    {
        name: "Konnor Guzman",
        lastMessage: "💣 Adipisicing elit. Prov ident?",
        unreadCount: 0,
        id: 3,
        date: "2022-12-28T16:33:17.015+00:00",
        isOnline: false,
    },
    {
        name: "Travis Fuller",
        lastMessage: "Dolor set. Prov ident?",
        unreadCount: 0,
        id: 4,
        date: "2023-01-30T04:21:58.433+00:00",
        isOnline: true,
    },
    {
        name: "Derrick Simmons",
        lastMessage: "And that’s why a 15th century",
        unreadCount: 5,
        id: 1,
        date: "2023-01-30T04:21:58.433+00:00",
        isOnline: false,
    },
    {
        name: "Katrina West",
        lastMessage: "he wanted people to focus",
        unreadCount: 2,
        id: 6,
        date: "2023-01-30T04:21:58.433+00:00",
        isOnline: false,
    },
    {
        name: "Corey Evans",
        lastMessage: "Ut enim ad minim veniam",
        unreadCount: 0,
        id: 7,
        date: "2023-01-30T04:21:58.433+00:00",
        isOnline: true,
    },
    {
        name: "Anthony Jensen",
        lastMessage: "Excepteur sint occaecat cupidatat",
        unreadCount: 0,
        id: 8,
        date: "2023-01-30T04:21:58.433+00:00",
        isOnline: false,
    },
    {
        name: "Lance Tucker",
        lastMessage: "Duis aute irure dolor in",
        unreadCount: 0,
        id: 9,
        date: "2023-02-05T04:21:58.433+00:00",
        isOnline: false,
    },
    {
        name: "Alfredo Elliott",
        lastMessage: "😂 Lorem ipsum dolor",
        unreadCount: 1,
        id: 12,
        date: "2023-01-03T04:21:58.433+00:00",
        isOnline: true,
    },
    {
        name: "Konnor Guzman",
        lastMessage: "💣 Adipisicing elit. Prov ident?",
        unreadCount: 0,
        id: 15,
        date: "2023-02-03T04:21:58.433+00:00",
        isOnline: false,
    },
    {
        name: "Travis Fuller",
        lastMessage: "Dolor set. Prov ident?",
        unreadCount: 5,
        id: 19,
        date: "2023-01-30T04:21:58.433+00:00",
        isOnline: true,
    },
    {
        name: "Derrick Simmons",
        lastMessage: "And that’s why a 15th century",
        unreadCount: 1,
        id: 21,
        date: "2023-02-09T04:21:58.433+00:00",
        isOnline: false,
    },
    {
        name: "Katrina West",
        lastMessage: "he wanted people to focus",
        unreadCount: 4,
        id: 35,
        date: "2023-01-30T04:21:58.433+00:00",
        isOnline: false,
    },
    {
        name: "Corey Evans",
        lastMessage: "Ut enim ad minim veniam",
        unreadCount: 0,
        id: 66,
        date: "2023-02-02T04:21:58.433+00:00",
        isOnline: false,
    },
    {
        name: "Anthony Jensen",
        lastMessage: "Excepteur sint occaecat cupidatat",
        unreadCount: 1,
        id: 101,
        date: "2023-01-30T04:21:58.433+00:00",
        isOnline: false,
    },
    {
        name: "Lance Tucker",
        lastMessage: "Duis aute irure dolor in",
        unreadCount: 0,
        id: 69,
        date: "2023-02-11T04:21:58.433+00:00",
        isOnline: false,
    },
];
const sampleStories = [
    { name: "Konnor" },
    { name: "travis" },
    { name: "jack" },
    { name: "Peter" },
    { name: "Champa" },
    { name: "Kunal" },
    { name: "Reena" },
    { name: "jackson" },
    { name: "naruto" },
    { name: "eren" },
];
const sampleChat = [
    { id: 2, sender: 2, reciever: 1, message: "Hello My Dear. Lorem ipsum dolor sit amet, consectetur.", date: "2022-12-28T17:17:52.063+00:00" },
    { id: 3, sender: 1, reciever: 2, message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda necessitatibus, ratione. Voluptatum.", date: "2022-12-29T16:33:17.015+00:00" },
    { id: 4, sender: 1, reciever: 2, message: "And that’s why a 15th century", date: "2022-01-01T16:12:17.015+00:00" },
    { id: 5, sender: 2, reciever: 1, message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius.", date: "2022-01-04T16:30:17.015+00:00" },
    { id: 45, sender: 2, reciever: 1, images: ['','','','','',''], date: "2022-01-04T16:30:17.015+00:00"},
    { id: 45, sender: 1, reciever: 2, images: [''], date: "2022-01-04T16:30:17.015+00:00"},
    { id: 6, sender: 1, reciever: 2, message: "Please Download This File", date: "2022-01-05T16:33:17.015+00:00" },
    { id: 7, sender: 2, reciever: 1, message: "Please Download This File", date: "2022-01-05T16:33:17.015+00:00" },
    { id: 8, sender: 1, reciever: 2, message: "Please Download This File", date: "2022-01-05T16:33:17.015+00:00" },
    { id: 9, sender: 2, reciever: 1, message: "And that’s why a 15th century", date: "2022-01-07T16:33:17.015+00:00" },
    { id: 10, sender: 1, reciever: 2, message: "Hello My Dear. Lorem ipsum dolor sit amet, consectetur.", date: "2022-01-07T16:33:17.015+00:00" },
    { id: 11, sender: 1, reciever: 2, message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda necessitatibus, ratione. Voluptatum.", date: "2022-01-05T16:33:17.015+00:00" },
    { id: 12, sender: 2, reciever: 1, message: "And that’s why a 15th century", date: "2022-01-05T16:33:17.015+00:00" },
    { id: 13, sender: 1, reciever: 2, message: "Ei eum populo dictas, ad sed tempor minimum voluptatibus", date: "2022-01-05T16:33:17.015+00:00" },
    { id: 14, sender: 1, reciever: 2, message: "No mei stet periculis consequat, agam nostro", date: "2022-01-06T16:33:17.015+00:00" },
    { id: 15, sender: 2, reciever: 1, message: "at has eius harum", date: "2023-02-10T16:33:17.015+00:00" },
    { id: 16, sender: 1, reciever: 2, message: "Recusabo mandamus cum ex, ius unum nibh an, usu liber oratio liberavisse ea.", date: "2023-02-10T16:33:17.015+00:00" },
    { id: 17, sender: 1, reciever: 2, message: "Ocurreret rationibus intellegebat eu eos", date: "2023-02-10T16:33:17.015+00:00" },
    { id: 19, sender: 2, reciever: 1, message: "Veri dolorum cu ius. Vim id nullam putent invidunt.", date: "2023-02-10T16:33:17.015+00:00" }
];
export const useChatStore = defineStore("chat", {
    state: () => ({
        sidebar: true,
        rightSidebar: false,
        userChats: [...sampleUserChats],
        messages: [...sampleChat],
        stories: [...sampleStories]
    }),
    getters: {
        getSidebarStatus: (state) => state.sidebar,
        getRightSidebarStatus: (state) => state.rightSidebar,
        getUserChats: (state) => state.userChats,
        getUserMessages: (state) => state.messages,
        getUserStories: (state) => state.stories,
        getUserImages: (state) => {
            let images = []
            state.messages.forEach(message => {
                if (message.images && message.images.length) {
                    message.images.forEach(image => {
                        images.push(image)
                    })
                }
            })
            return images
        }
    },
    actions: {
        toggleSidebar(value) {
            this.sidebar = value;
        },
        toggleRightSidebar(value) {
            this.rightSidebar = value;
        },
    },
});
