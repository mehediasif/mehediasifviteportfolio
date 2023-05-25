import React from "react";
import img1 from '../assets/thumbnail_8753.jpg'
import img2 from '../assets/kebab-bulka.jpg.jpg'
import img3 from '../assets/media-mesh.png'
import img4 from '../assets/usermodel_nodejs.png'
import img5 from '../assets/logo.png'
import img6 from '../assets/Screenshot_3.jpg'


export default function ProjectPage() {
    const url1 = 'https://github.com/mehediasif/usermodel_nodejs'
    const url2 = 'https://fiction.vercel.app/'
    const githubURL = 'https://github.com/mehediasif';
    const blogUrl = 'https://www.mehediasif.ninja';
    return (
        <>
            <div className="mx-auto container">
                <div className="xl:flex flex-wrap items-center justify-between relative py-10 lg:py-28 2xl:px-0 xl:px-20 px-4">
                    <div className="xl:w-1/2 w-full md:w-auto flex flex-col sm:items-center lg:items-start">
                        <div className="md:w-10/12 relative md:flex items-center justify-between">
                            <div className="md:flex items-center justify-between w-full">
                                <div className="transform mb-4 md:mb-0 lg:-ml-10 md:-rotate-90">
                                    <p className="text-5xl font-semibold tracking-wider leading-normal text-sky-700 dark:text-emerald-600">Projects</p>
                                </div>
                                <div className="md:pl-20">
                                    <h1 className="hidden xl:block text-5xl font-bold tracking-wider text-gray-800 dark:text-pink-700 uppercase">
                                        Recent<span className="text-indigo-800 dark:text-sky-600"> WORK</span>
                                    </h1>
                                    <h1 className="xl:hidden text-4xl md:text-5xl lg:text-7xl font-bold tracking-wider text-gray-800 dark:text-pink-700 uppercase">
                                        Recent<span className="text-indigo-800 dark:text-sky-600"> WORK</span>
                                    </h1>
                                    <p className="text-gray-800 dark:text-gray-100 mr-2 leading-8 tracking-wide mt-6 text-base md:text-lg"> This section of my portfolio showcases my projects, presented in a sleek and minimalistic architectural style to reflect my proficiency in software architecture.</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col w-full md:flex-row items-center justify-start lg:justify-start md:justify-center mt-5 md:mt-24">
                            <div className="border border-black py-6 2xl:px-2 text-gray-800 dark:text-gray-100 lg:px-4 px-6 md:w-1/6 2xl:w-1/5 text-base 2xl:text-2xl xl:text-lg leading-9 tracking-wider lg:w-1/6 w-full lg:text-2xl">User Model in NodeJS </div>
                            <div className="relative">
                            <img src={img4} alt="building project" className="md:w-11/12 w-full md:h-auto h-full object-center object-full" />
                            <button 
                                className="absolute right-8 py-2 px-6 rounded-md bg-emerald-400 shadow-xl text-lg tracking-wider text-gray-800 hover:bg-gray-200 ease-in duration-150 flex border border-black items-center"
                                onClick={() => window.open(blogUrl, '_blank')}
                                >
                                    View Project 
                                    <svg xmlns="http://www.w3.org/2000/svg" width={13} height={14} viewBox="0 0 13 14" fill="none">
                                            <path d="M0.827637 7.0004H11.6896" stroke="#1A202C" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M7.03418 1.4741L11.6893 7.0004" stroke="#1A202C" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M7.03427 12.5265L11.6894 7.00022" stroke="#1A202C" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                            </button>
                            </div>
                            
                        </div>
                        <div className="flex flex-col md:flex-row w-full items-center justify-start lg:justify-start md:justify-center mt-5 md:mt-20">
                            <img src={img3} alt="building project" className="md:w-11/12 w-full md:h-auto h-full object-center object-full" />
                            <div className="border border-black py-6 2xl:px-6 text-gray-800 dark:text-gray-100 lg:px-4 px-4 md:w-1/6 2xl:w-1/5 text-base 2xl:text-2xl xl:text-lg leading-7 tracking-wider lg:w-1/6 w-full lg:text-2xl">Social Networking Application</div>
                        </div>
                        
                    </div>
                    <div className="xl:w-1/2 w-full md:w-auto flex flex-col mt-5 md:mt-10 xl:mt-0">
                        <div className="flex md:flex-row flex-col-reverse items-center justify-center lg:justify-end relative">
                            <div className="border border-black py-6 2xl:px-6 text-gray-800 dark:text-gray-100 lg:px-4 px-6 md:w-1/6 2xl:w-1/5 text-base 2xl:text-2xl xl:text-lg leading-9 tracking-wider lg:w-1/6 w-full lg:text-2xl">Fiction Creation Platform</div>
                            <img src={img1} alt="building project" className="md:w-auto w-full md:h-auto h-full object-center object-full" />
                            <div className="absolute z-10 right-0 bottom-0 pb-36 sm:pb-28 sm:pr-10 lg:pr-0 xl:-mr-8 md:pb-8">
                                <button 
                                className="py-4 px-6 shadow-xl text-lg tracking-wider text-gray-800 hover:bg-gray-200 ease-in duration-150 flex border border-black items-center bg-white"
                                onClick={() => window.open(url2, '_blank')}
                                >
                                    View Project
                                    <div className="w-8 h-8 rounded-full border border-black flex items-center cursor-pointer justify-center ml-10">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={13} height={14} viewBox="0 0 13 14" fill="none">
                                            <path d="M0.827637 7.0004H11.6896" stroke="#1A202C" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M7.03418 1.4741L11.6893 7.0004" stroke="#1A202C" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M7.03427 12.5265L11.6894 7.00022" stroke="#1A202C" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                </button>
                            </div>
                        </div>
                        <div className="flex flex-col-reverse md:flex-row items-center justify-center lg:justify-end mt-5 md:mt-20">
                            <div className="border border-black py-6 2xl:px-6 text-gray-800 dark:text-gray-100 lg:px-4 px-6 md:w-1/6 2xl:w-1/5 text-base 2xl:text-2xl xl:text-lg leading-9 tracking-wider lg:w-1/6 w-full lg:text-2xl">Burger Shop Website</div>
                            <img src={img2} alt="building project" className="md:w-96 w-full md:h-auto h-full object-center object-full" />
                                <button 
                                className="absolute py-4 px-6 shadow-xl text-lg tracking-wider text-gray-800 hover:bg-gray-200 ease-in duration-150 flex border border-black items-center bg-white"
                                onClick={() => window.open(url1, '_blank')}
                                >
                                    View Project 
                                </button>
                        </div>
                        <div className="flex flex-col-reverse md:flex-row items-center justify-center lg:justify-end mt-5 md:mt-20">
                            <div className="border border-black py-6 2xl:px-6 text-gray-800 dark:text-gray-100 lg:px-4 px-6 md:w-1/6 2xl:w-1/5 text-base 2xl:text-2xl xl:text-lg leading-9 tracking-wider lg:w-1/6 w-full lg:text-2xl">Resturant Website design</div>
                            <img src="https://raw.githubusercontent.com/mehediasif/SIdebarforUglyFiction/main/sidebarimg.png" alt="building project" className="md:w-96 w-full md:h-auto h-full object-center object-full" />
                        </div>
                        <div className="flex flex-col-reverse md:flex-row items-center justify-center lg:justify-end mt-5 md:mt-20">
                            <div className="border border-black py-6 2xl:px-6 text-gray-800 dark:text-gray-100 lg:px-4 px-6 md:w-1/6 2xl:w-1/5 text-base 2xl:text-2xl xl:text-lg leading-9 tracking-wider lg:w-1/6 w-full lg:text-2xl">Blog with .mdx</div>
                            <img src={img6} alt="building project" className="w-5/6 md:h-auto h-fit object-center object-full" />
                                <button 
                                className="absolute right-8 py-2 px-6 rounded-md bg-emerald-400 shadow-xl text-lg tracking-wider text-gray-800 hover:bg-gray-200 ease-in duration-150 flex border border-black items-center"
                                onClick={() => window.open(blogUrl, '_blank')}
                                >
                                    View Project 
                                    <svg xmlns="http://www.w3.org/2000/svg" width={13} height={14} viewBox="0 0 13 14" fill="none">
                                            <path d="M0.827637 7.0004H11.6896" stroke="#1A202C" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M7.03418 1.4741L11.6893 7.0004" stroke="#1A202C" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M7.03427 12.5265L11.6894 7.00022" stroke="#1A202C" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                        </div>
                        <div className='flex items-center justify-center md:pr-12'>
                        <button 
                        className="mt-5 xl:mt-16 xl:block py-2 px-3 shadow-xl text-2xl tracking-wider text-white hover:opacity-80 ease-in duration-150 flex border border-black items-center bg-gray-800 dark:bg-emerald-500"
                        onClick={() => window.open(githubURL, '_blank')}
                        >
                        View All Projects on Github</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}