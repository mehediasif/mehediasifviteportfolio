import React from "react";

export default function ThesisList(){
    const link1 = "https://www.researchgate.net/publication/354427822_Challenges_Applications_and_Design_Aspects_of_Federated_Learning_A_Survey";
    const link2 = "https://apd.amu.edu.pl/diplomas/158058";
    const link3 = "https://www.researchgate.net/publication/354668866_Word_Embedding_based_News_Classification_by_using_CNN";

    return(
        <>
        <h2 className='p-2 border-2 dark:border-0 shadow-md dark:shadow-sm dark:shadow-emerald-400 rounded-lg lg:text-3xl sm:text-xl text-center font-base mb-6 sm:mb-8 lg:mb-4 font-[Georgia] tracking-wide text-indigo-700 dark:text-sky-400'>Academic Contributions</h2>
        <p className="flex flex-wrap items-center text-center lg:w-11/12 text-medium font-systems-ui text-slate-800 dark:text-gray-200 p-2"><i className="text-red-500 dark:text-red-400">Disclaimer: </i>The following section showcases my academic research work conducted during my studies. These projects demonstrate my ability to engage in research, analyze data, and present findings. Please note that the content and findings of each research project are solely the result of my individual work and do not necessarily reflect the views of any institution or organization.</p>
        <div className="flex flex-col justify-center items-center container mx-auto pl-4 bg-slate-200 dark:bg-slate-700 mt-8 pb-6 sm:pl-0">
                        <div className="w-11/12 mx-auto lg:mx-0 xl:mx-0 mb-6 xl:mb-0 rounded-2xl">
                        <table className="w-full overflow-x-auto text-slate-800 dark:text-gray-100">
                            <thead>
                            <tr className="bg-slate-200 dark:bg-slate-600 h-16 text-xl leading-6 text-gray-800 dark:text-blue-400 dark:decoration-sky-200 rounded-lg">
                                <th className="font-bold text-left pl-0">Overview</th>
                                <th className="font-bold text-left">Type</th>
                                <th className="font-bold text-left pr-4 text-indigo-500 dark:text-red-400">Link</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr className="h-20 hover:bg-gray-300 dark:hover:bg-gray-600 antialiased font-[Georgia] border-2 leading-none text-gray-800  border-gray-700 dark:border-sky-600 dark:hover:border-emerald-300">
                                <td className="text-slate-800 dark:text-gray-100">Challenges, Applications and Design Aspects of Federated Learning</td>
                                <td className="text-slate-800 dark:text-gray-100">Article</td>
                                <td><a 
                                href={link1}
                                target="_blank"
                                className="cursor-pointer hover:underline text-slate-800  dark:text-gray-100 hover:text-indigo-700 hover:dark:text-indigo-500"
                                >Preview</a></td>
                            </tr>
                            <tr className="h-20 hover:bg-gray-300 dark:hover:bg-gray-600 antialiased font-[Georgia] border-2 leading-none text-gray-800  border-gray-700 dark:border-sky-600 dark:hover:border-emerald-300">
                                <td className="text-slate-800 dark:text-gray-100">Fiction Creation Platform - A web application for fan fiction creation.</td>
                                <td className="text-slate-800 dark:text-gray-100">Engineering thesis</td>
                                <td><a 
                                href={link2}
                                target="_blank"
                                className="cursor-pointer hover:underline text-slate-800  dark:text-gray-100 hover:text-indigo-700 hover:dark:text-indigo-500"
                                >Preview</a></td>
                            </tr>
                            <tr className="h-20 hover:bg-gray-300 dark:hover:bg-gray-600 antialiased font-[Georgia] border-2 leading-none text-gray-800 border-b border-gray-900 dark:border-sky-600 dark:hover:border-emerald-300">
                                <td className="text-slate-800 dark:text-gray-100">Word Embedding based News Classification by using CNN</td>
                                <td className="text-slate-800 dark:text-gray-100">Conference Paper</td>
                                <td><a 
                                href={link3}
                                target="_blank"
                                className="cursor-pointer hover:underline text-slate-800  dark:text-gray-100 hover:text-indigo-700 hover:dark:text-indigo-500"
                                >Preview</a></td>
                            </tr>
                            
                            </tbody>
                        </table>
                        </div>
                    </div>
        </>
    );
}