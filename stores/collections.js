import { defineStore } from "pinia";
// Get data from AWS

const validRoutes = new Set();
validRoutes.add('educators')
validRoutes.add('students')
validRoutes.add('guardians')
validRoutes.add('educarers')
validRoutes.add('admins')
validRoutes.add('superAdmins')

const state = () => ({
    userName: "",
    email: "",
    id: null,
    educators: [
        {
            id: 1,
            firstName: "Malachi",
            middleName: "Sylvester",
            lastName: "England",
            phone: "4847255025",
            email: "malachi4451@protonmail.couk",
        },
        {
            id: 2,
            firstName: "Jada",
            middleName: "Laura",
            lastName: "Ramirez",
            phone: "795-147-7429",
            email: "jada8723@hotmail.edu",
        },
        {
            id: 3,
            firstName: "Abel",
            middleName: "Ruby",
            lastName: "David",
            phone: "8326112185",
            email: "abel7982@hotmail.net",
        },
        {
            id: 4,
            firstName: "Brendan",
            middleName: "Hammett",
            lastName: "Guzman",
            phone: "225-429-7461",
            email: "brendan@yahoo.couk",
        },
        {
            id: 5,
            firstName: "Urielle",
            middleName: "Harrison",
            lastName: "Holcomb",
            phone: "541-092-5712",
            email: "urielle2986@protonmail.couk",
        },
    ],
    students: [
        {
            id: 1,
            firstName: "Reed",
            middleName: "Paki",
            lastName: "Reese",
            phone: "9610424381",
            email: "reed@hotmail.org",
        },
        {
            id: 2,
            firstName: "Roary",
            middleName: "Chaim",
            lastName: "Bell",
            phone: "017-933-6525",
            email: "roary6102@aol.com",
        },
        {
            id: 3,
            firstName: "Kamal",
            middleName: "Len",
            lastName: "Orr",
            phone: "1524685239",
            email: "kamal@hotmail.org",
        },
        {
            id: 4,
            firstName: "Abel",
            middleName: "Randall",
            lastName: "Vaughan",
            phone: "698-871-2380",
            email: "abel@hotmail.org",
        },
        {
            id: 5,
            firstName: "Indigo",
            middleName: "Sandra",
            lastName: "Barron",
            phone: "714-258-3815",
            email: "indigo55@hotmail.com",
        },
    ],
    guardians: [
        {
            id: 1,
            firstName: "Ramona",
            middleName: "Alexandra",
            lastName: "Chavez",
            phone: "312-537-8172",
            email: "ramona@aol.ca",
        },
        {
            id: 2,
            firstName: "Jacob",
            middleName: "Channing",
            lastName: "Mooney",
            phone: "6878523082",
            email: "jacob@outlook.org",
        },
        {
            id: 3,
            firstName: "Ginger",
            middleName: "Aiko",
            lastName: "Mccarty",
            phone: "567-767-3951",
            email: "ginger@aol.org",
        },
        {
            id: 4,
            firstName: "Harper",
            middleName: "Nell",
            lastName: "Donovan",
            phone: "895-174-0188",
            email: "harper@outlook.net",
        },
        {
            id: 5,
            firstName: "Roanna",
            middleName: "Vivien",
            lastName: "Pollard",
            phone: "315-447-1188",
            email: "roanna@yahoo.edu",
        },
    ],
    educarers: [
        {
            id: 1,
            firstName: "Ronan",
            middleName: "Hadley",
            lastName: "Dejesus",
            phone: "888-258-2843",
            email: "ronan8033@yahoo.org",
        },
        {
            id: 2,
            firstName: "Rachel",
            middleName: "Jaquelyn",
            lastName: "Mcclure",
            phone: "8621243562",
            email: "rachel@hotmail.ca",
        },
        {
            id: 3,
            firstName: "Erica",
            middleName: "Conan",
            lastName: "Gallegos",
            phone: "632-348-5464",
            email: "erica@aol.couk",
        },
        {
            id: 4,
            firstName: "Dante",
            middleName: "Eaton",
            lastName: "Graham",
            phone: "885-941-2788",
            email: "dante@hotmail.edu",
        },
        {
            id: 5,
            firstName: "Imani",
            middleName: "Ian",
            lastName: "Martinez",
            phone: "067-275-8809",
            email: "imani@icloud.net",
        },
    ],
    admins: [
        {
            id: 1,
            firstName: "Lani",
            middleName: "Reece",
            lastName: "Dickson",
            phone: "1653515273",
            email: "lani@google.org",
        },
        {
            id: 2,
            firstName: "Dawn",
            middleName: "Dennis",
            lastName: "Cummings",
            phone: "113-241-1165",
            email: "dawn718@protonmail.edu",
        },
        {
            id: 3,
            firstName: "Salvador",
            middleName: "Timon",
            lastName: "Hahn",
            phone: "9278371568",
            email: "salvador2276@icloud.com",
        },
        {
            id: 4,
            firstName: "Allen",
            middleName: "Harper",
            lastName: "Day",
            phone: "6476625736",
            email: "allen@google.org",
        },
        {
            id: 5,
            firstName: "Gwendolyn",
            middleName: "Carolyn",
            lastName: "Marsh",
            phone: "275-561-8295",
            email: "gwendolyn9628@protonmail.ca",
        },
    ],
    superAdmins: [
        {
            id: 1,
            firstName: "Jerome",
            middleName: "Chava",
            lastName: "Munoz",
            phone: "7323324676",
            email: "jerome3961@yahoo.net",
        },
        {
            id: 2,
            firstName: "Macaulay",
            middleName: "Keith",
            lastName: "Melendez",
            phone: "8857052528",
            email: "macaulay6598@protonmail.ca",
        },
        {
            id: 3,
            firstName: "Carson",
            middleName: "Mary",
            lastName: "Blair",
            phone: "376-572-8557",
            email: "carson5838@google.org",
        },
        {
            id: 4,
            firstName: "Keefe",
            middleName: "Frances",
            lastName: "Horn",
            phone: "1926163714",
            email: "keefe@yahoo.com",
        },
        {
            id: 5,
            firstName: "Liberty",
            middleName: "Nina",
            lastName: "Hawkins",
            phone: "453-115-5360",
            email: "liberty@outlook.com",
        },
    ],
    validRoutes
});

const getters = {

};

const actions = {
    isValidRoute: (route) => validRoutes.has(route)
};

export const useCollectionStore = defineStore("collections", {
    state,
    getters,
    actions,
});
