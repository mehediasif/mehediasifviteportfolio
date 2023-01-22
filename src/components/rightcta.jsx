import React from "react";
import { GoCircuitBoard, GoMegaphone, GoTools } from "react-icons/go";
function RightCTA() {
    return (
        <>
            <div className="relative pt-16 px-4 rounded-md border-b-2">
                <div className="w-full lg:flex-row flex flex-col-reverse items-center justify-between mx-auto container relative z-20 xl:px-0 px-4 bg-slate-300 dark:bg-slate-700">
                    <div className="lg:w-1/2 mt-16 lg:flex">
                        <div className="flex flex-col">
                            <div className="rounded mb-8 bg-slate-300 px-4 xl:px-8 shadow-md">
                                <div className="mt-8">
                                    <GoTools className="w-20 h-20" />
                                </div>
                                <div>
                                    <h1 className="font-semibold text-2xl f-m-m pt-10">
                                        Tailored Workflow <br />
                                    </h1>
                                    <p className="text-base font-normal f-m-m leading-loose py-8"> I understand that sometimes workflow might be tailored becasue different tasks require different approaches so I adapted to different situations. I believe that a tailored workflow ensures that each task is approached in the most efficient and effective way possible.</p>
                                </div>
                            </div>
                            <div className="rounded bg-indigo-300 px-4 xl:px-8 mb-8 lg:mb-0 shadow-md">
                                <div className="mt-8">
                                    <GoMegaphone className="w-20 h-20" />
                                </div>
                                <div>
                                    <h1 className="font-semibold text-2xl f-m-m pt-10">
                                        Team Communication & <br />
                                        Independence
                                    </h1>
                                    <p className="text-base font-normal f-m-m leading-loose py-8">Clear communication is vital for success in a team environment. I value open communication and the ability to express my ideas clearly and effectively. At the same time, I am comfortable working independently and taking ownership of my tasks.</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col lg:ml-10 ml-0 lg:mt-10 mt-0">
                            <div className="rounded bg-indigo-700 lg:mt-20 mt-0 px-4 xl:px-8 box-shadow-light">
                                <div className="mt-8 justify-center items-center">
                                    <GoCircuitBoard className="w-20 h-20"/>
                                </div>
                                <div>
                                    <h1 className="font-semibold text-2xl f-m-m pt-10 text-white">
                                        Quality & Sequencial <br /> Commits
                                    </h1>
                                    <p className="text-base font-normal f-m-m leading-loose py-8 text-white"> I take pride in my work and understand the importance of code quality. I believe that quality commits are essential for maintaining a high level of performance and that they contribute to the overall success of the team.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/2 lg:pl-40 xl:pl-56">
                        <h1 className="lg:text-5xl text-3xl f-m-w text-indigo-700 dark:text-sky-500 font-bold">What I Expect from a Team?</h1>
                        <p className="lg:text-xl sm:text-base f-m-m leading-loose mt-3 mb-8 mr-4 text-slate-700 dark:text-white">
                        In a collaborative team setting, it is imperative to establish clear lines of communication and a well-defined workflow to achieve common goals. I firmly believe that a tailored workflow, effective communication, and a commitment to quality are crucial components for the success of any team. I am dedicated to working in a collaborative and effective manner to achieve our shared objectives</p>
                        <button className=" hover:opacity-90 text-base font-bold bg-indigo-700 rounded f-m-m md:py-4 py-2 px-4 md:px-8 foucus:outline-none text-white">Video Explaination</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default RightCTA;
