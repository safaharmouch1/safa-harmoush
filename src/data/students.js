import { getDefaultNormalizer } from "@testing-library/dom";
import s1 from "../assets/student/s1.jpg";
import s2 from "../assets/student/s2.jpg";
import s3 from "../assets/student/s3.jpg";

const student = [
    {
        id: 1,
        name: "Safa Harmouch",
        email: "safa.harmouch@gmail.com",
        photo: s1,
        courses: ["Web Development","Data Structures","AI Basic"],
        grades:[
            {course: "Web Development", grade: "A"},
            {course: "Data Structure", grade: "B+"},
        ],
    },

    {
    id: 2,
    name:"Ammar kenaan",
    email: "ammar.kenaan@gmail.com",
    photo: s2,
    courses: ["Networks", "Databases"],
    grades: [{course:"Networks",grade: "A-"}],
    },
    {
        id: 3,
        name: "Mirriam Mellat",
        email: "mirriam.mellat@gmail.com",
        photo: s3,
        courses:[ "Operating Systems","Software engineering"],
        grades: [
            {course: "Software Engineering", grade:"B"},
            {course: "OS", grade:"A"},
        ],
    },


];

export default students;
