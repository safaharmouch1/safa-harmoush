import { getDefaultNormalizer } from "@testing-library/dom";
import s1 from "../assets/student/s1.jpg";
import s2 from "../assets/student/s2.jpg";
import s3 from "../assets/student/s3.jpg";

function Students(){


const makeAvatar =(name) =>
    'https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=0D8ABC&color=fff&size=256';
const student = [
    {
        id: 1,
        name: "Safa Harmouch",
        email: "safa.harmouch@gmail.com",
        photo: makeAvatar,
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
    photo: makeAvatar,
    courses: ["Networks", "Databases"],
    grades: [{course:"Networks",grade: "A-"}],
    },
    {
        id: 3,
        name: "Mirriam Mellat",
        email: "mirriam.mellat@gmail.com",
        photo: makeAvatar,
        courses:[ "Operating Systems","Software engineering"],
        grades: [
            {course: "Software Engineering", grade:"B"},
            {course: "OS", grade:"A"},
        ],
    },


];

}

export default Students;

