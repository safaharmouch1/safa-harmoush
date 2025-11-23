import { getDefaultNormalizer } from "@testing-library/dom";

function Students(){


const makeAvatar =(name) =>
    'https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=0D8ABC&color=fff&size=256';
const student = [
    {
        id: 1,
        name: "Safa Harmouch",
        email: "safa.harmouch@gmail.com",
        photo: makeAvatar ("safa harmouch"),
        courses: ["Web Development","Data Structures","AI Basic"],
        grades:[
            {course: "Web Development", grade: "A"},
            {course: "Data Structure", grade: "B+"},
        ],
    },

    {
    id: 2,
    name:"Omar kenaan",
    email: "Omar.kenaan@gmail.com",
    photo: makeAvatar ("omar kenaan"),
    courses: ["Networks", "Databases"],
    grades: [{course:"Networks",grade: "A-"}],
    },
    {
        id: 3,
        name: "Mirriam Mellat",
        email: "mirriam.mellat@gmail.com",
        photo: makeAvatar ("mirriam mellat"),
        courses:[ "Operating Systems","Software engineering"],
        grades: [
            {course: "Software Engineering", grade:"B"},
            {course: "OS", grade:"A"},
        ],
    },


];

}

export default Students;

