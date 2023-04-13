import React from "react";
import SectionTitle from "./sectiontitle";
import img from '../assets/mypicture.jpg'

export default function About(){
    const url1 = 'https://www.linkedin.com/in/mehedi-asif-097464177'

    return(
        <div className="mx-auto container">
        <div className="transform bottom-1 lg:-ml-10 md:-mr-52 md:-rotate-270">
        <SectionTitle>Let me Introduce myself</SectionTitle>       
        </div>
        <div className="flex flex-col gap-5 md:flex-row">
            <img src={img} alt="Display Picture of Mehediasif" className="lg:w-1/3 md:w-6/12 sm:w-full rounded-lg object-cover"/>
            <div className="w-full md:w-6/12">

            <p className="md:text-2xl text-slate-800 dark:text-gray-200 p-2">My name is Mohammad Mehadi hasan but you can find me on the internet as <b className="hover:text-pink-400">@mehediasif</b>.I'm a computer science graduate with a passion for full stack web development. I am constantly learning and working to improve my skills, and I believe in balancing hard work with smart work to achieve perfection in problem-solving. I use a combination of mind mapping and issue tracking tools to break down problems and design efficient workflows. My goal is to constantly evolve and become a better developer for myself.In my next role, I'm looking for a team that values collaboration, innovation, and continuous learning.<br></br> Let's connect and see how we can work together!</p>
            
            <button
            type="button"
            className=" hover:opacity-90 text-base font-bold bg-sky-600 hover:bg-sky-700 rounded-full f-m-m md:py-4 py-2 px-8 md:px-8 foucus:outline-none text-white"
            onClick={() => window.open(url1, '_blank')}
            >
            
            <svg
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#0A66C2"
                className="h-5 w-7 block float-left"
                fill="currentColor"
                viewBox="0 0 24 24">
                <path
                    d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
            </svg>
            <text className="block float-right">Connect</text>
            </button>
            </div>
        </div>
        </div>

    )
}