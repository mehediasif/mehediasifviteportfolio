import { BsFillAlarmFill, BsTable, BsFillArrowDownCircleFill } from "react-icons/bs";
import { MdSecurity } from "react-icons/md";
import { SiLoop, SiTailwindcss } from "react-icons/si";
import { RxScissors } from "react-icons/rx";
export default [
    {
        title: 'UI Design',
        icon: <SiTailwindcss className='w-full h-full' />,
        description: `There is a saying-"A UI IS LIKE A JOKE,IF YOU HAVE TO EXPLAIN IT THEN ITS PROBABLY NOT GOOD xD" so I always try to remember this and my bachelor's thesis was on "Human Centric Design Principles"`,
    },
    {
        title: 'Software Development',
        icon: <BsFillAlarmFill className='w-full h-full' />,
        description: 'I have a strong understanding of the software development life cycle and have experience in full-stack development, from building responsive web applications to developing RESTful APIs. I am familiar with Agile development methodologies and have a strong understanding of design patterns and software architecture.',
    },
    {
        title: 'Testing',
        icon: <RxScissors className='w-full h-full' />,
        description: 'I have experience in software testing and am familiar with different testing methodologies and best practices. I am proficient in testing tools such as Jest and Cypress, and have experience in testing both unit and end-to-end functionality. I have worked on several testing projects, ensuring the quality and reliability of the software',
    },
    {
        title: 'Scrum Methodology',
        icon: <SiLoop className='w-full h-full' />,
        description: 'I have experience working in Scrum teams and am familiar with the Scrum methodology. I understand the importance of Agile development and have experience with Scrum tools such as Jira.I also made my own lightweight bug tracking web app.',
    },
    {
        title: 'Databases',
        icon: <BsTable className='w-full h-full' />,
        description: `I have experience working with MySQL and MongoDB. I am familiar with basic CRUD operations and have experience with database design and normalization. I am familiar with ORM and ODM technologies also MongoDB's unique features such as its document-oriented data model and its support for JSON data`,
    },
    {
        title: 'Web Security Architecture',
        icon: <MdSecurity className='w-full h-full' />,
        description: 'I have knowledge of web security best practices such as OWASP, ISO 27001 and the common security threats faced by web applications. I understand the importance of implementing secure web architecture and have experience with security protocols and tools to protect against potential threats.',
    },
]