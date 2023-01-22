import React from "react";
import SectionTitle from "./SectionTitle";
import img from '../assets/mypicture.jpg'

export default function About(){
    return(
        <div className="mx-auto container">
        <div className="transform bottom-1 lg:-ml-10 md:-mr-52 md:-rotate-270">
        <SectionTitle>Let me Introduce myself</SectionTitle>       
        </div>
        <div className="flex flex-col gap-5 md:flex-row">
            <img src={img} alt="Display Picture of Mehediasif" className="lg:w-1/3 md:w-6/12 sm:w-full rounded-lg object-cover"/>
            <div className="w-full md:w-6/12">
            <p className="md:text-2xl text-slate-800 dark:text-gray-200 p-2">My name is Mohammad Mehadi hasan but you can find me on the internet as <b className="hover:text-pink-500">@mehediasif</b>.I am a final semester computer science student with a passion for full stack web development. I am constantly learning and working to improve my skills. I believe in balancing hard work with smart work to achieve perfection in problem-solving. I use a combination of mind mapping and issue tracking tools to break down problems and design efficient workflows. My goal is to constantly evolve and become a better developer for myself.</p>
            </div>
        </div>
        </div>

    )
}