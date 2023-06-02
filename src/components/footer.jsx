import React from "react";
import SectionTitle from "./sectiontitle";
import WhatCurrentlyLearning from "./whCulearn";
import img from '../assets/mypicture.webp'

function Footer() {
    const github = 'https://github.com/mehediasif';
    const twitter = 'https://twitter.com/Asif2Mehedi';
    const instagram = 'https://www.instagram.com/asifbrox/';
    const devdotto = 'https://dev.to/mehediasif';
    const linkedin = 'https://www.linkedin.com/in/mehedi-asif-097464177/';
    const researchGate = 'https://www.researchgate.net/profile/Mohammad-Hasan-154';
    return (
        <div className="pt-16">
            <SectionTitle>Get In Touch</SectionTitle>
            <div className="w-full border-gray-300 border-t lg:w-11/12 md:w-11/12 lg:mx-auto md:mx-auto">
                <div className="container mx-auto py-12">
                    <div className="xl:flex lg:flex md:flex pt-6">
                        <div className="w-11/12 xl:w-3/6 lg:w-2/5 mx-auto lg:mx-4 xl:mx-0">
                            <div className="flex items-center mb-6 xl:mb-0 lg:mb-0">
                            <img src={img} alt="Display Picture of Mehediasif" className="w-20 h-20 rounded-full object-cover"/>
                                <p className="ml-3 font-serif text-xl dark:text-sky-100">Mohammad Mehadi Hasan</p>
                            </div>
                            <p className="text-medium md:text-xl font-mono text-slate-800 dark:text-gray-200 p-2">My portfolio is just a small sample of my skills and experience. As the technologies that power the internet are constantly evolving, I am committed to staying current and adaptable in order to make a positive impact on any organization I join. I am excited to share more about how I can contribute to your organization and please don't hesitate to reach out directly here {`>>`} <a className="border-2 shadow-sm shadow-violet-300 rounded-lg focus:outline-none focus:ring focus:ring-violet-300 cursor-pointer text-sky-900 hover:text-indigo-400 dark:text-sky-400 dark:hover:text-indigo-500" href="mailto:mehadihasan1999@icloud.com">Send an Email</a> if you have any questions or opportunities.
                            
                            </p>
                        </div>
                        <div className="grid grid-cols-6 md:flex md:flex-row gap-4 mx-2 py-16">
                            <div className="lg:w-24 lg:h-24 md:w-14 md:h-14 hover:-translate-y-5 hover:duration-500 hover:scale-105"
                            onClick={() => window.open(linkedin, '_blank')}
                            >
                            <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="#0A66C2"><title>LinkedIn icon</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                            </div>
                            <div 
                            className="lg:w-24 lg:h-24 md:w-14 md:h-14 hover:-translate-y-5 hover:duration-500 hover:scale-105"
                            onClick={() => window.open(github, '_blank')}
                            >
                            <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="#181717"><title>GitHub icon</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                            </div>
                            <div className="lg:w-24 lg:h-24 md:w-14 md:h-14 hover:-translate-y-5 hover:duration-500 hover:scale-105"
                            onClick={() => window.open(researchGate, '_blank')}
                            >
                            <svg fill="#00CCBB" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>ResearchGate</title><path d="M19.586 0c-.818 0-1.508.19-2.073.565-.563.377-.97.936-1.213 1.68a3.193 3.193 0 0 0-.112.437 8.365 8.365 0 0 0-.078.53 9 9 0 0 0-.05.727c-.01.282-.013.621-.013 1.016a31.121 31.123 0 0 0 .014 1.017 9 9 0 0 0 .05.727 7.946 7.946 0 0 0 .077.53h-.005a3.334 3.334 0 0 0 .113.438c.245.743.65 1.303 1.214 1.68.565.376 1.256.564 2.075.564.8 0 1.536-.213 2.105-.603.57-.39.94-.916 1.175-1.65.076-.235.135-.558.177-.93a10.9 10.9 0 0 0 .043-1.207v-.82c0-.095-.047-.142-.14-.142h-3.064c-.094 0-.14.047-.14.141v.956c0 .094.046.14.14.14h1.666c.056 0 .084.03.084.086 0 .36 0 .62-.036.865-.038.244-.1.447-.147.606-.108.385-.348.664-.638.876-.29.212-.738.35-1.227.35-.545 0-.901-.15-1.21-.353-.306-.203-.517-.454-.67-.915a3.136 3.136 0 0 1-.147-.762 17.366 17.367 0 0 1-.034-.656c-.01-.26-.014-.572-.014-.939a26.401 26.403 0 0 1 .014-.938 15.821 15.822 0 0 1 .035-.656 3.19 3.19 0 0 1 .148-.76 1.89 1.89 0 0 1 .742-1.01c.344-.244.593-.352 1.137-.352.508 0 .815.096 1.144.303.33.207.528.492.764.925.047.094.111.118.198.07l1.044-.43c.075-.048.09-.115.042-.199a3.549 3.549 0 0 0-.466-.742 3 3 0 0 0-.679-.607 3.313 3.313 0 0 0-.903-.41A4.068 4.068 0 0 0 19.586 0zM8.217 5.836c-1.69 0-3.036.086-4.297.086-1.146 0-2.291 0-3.007-.029v.831l1.088.2c.744.144 1.174.488 1.174 2.264v11.288c0 1.777-.43 2.12-1.174 2.263l-1.088.2v.832c.773-.029 2.12-.086 3.465-.086 1.29 0 2.951.057 3.667.086v-.831l-1.49-.2c-.773-.115-1.174-.487-1.174-2.264v-4.784c.688.057 1.29.057 2.206.057 1.748 3.123 3.41 5.472 4.355 6.56.86 1.032 2.177 1.691 3.839 1.691.487 0 1.003-.086 1.318-.23v-.744c-1.031 0-2.063-.716-2.808-1.518-1.26-1.376-2.95-3.582-4.355-6.074 2.32-.545 4.04-2.722 4.04-4.9 0-3.208-2.492-4.698-5.758-4.698zm-.515 1.29c2.406 0 3.839 1.26 3.839 3.552 0 2.263-1.547 3.782-4.097 3.782-.974 0-1.404-.03-2.063-.086v-7.19c.66-.059 1.547-.059 2.32-.059z"/></svg>
                            </div>
                            <div className="lg:w-24 lg:h-24 md:w-14 md:h-14 hover:-translate-y-5 hover:duration-500 hover:scale-105"
                            onClick={() => window.open(devdotto, '_blank')}
                            >
                            <svg fill="#0A0A0A" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>dev.to</title><path d="M7.42 10.05c-.18-.16-.46-.23-.84-.23H6l.02 2.44.04 2.45.56-.02c.41 0 .63-.07.83-.26.24-.24.26-.36.26-2.2 0-1.91-.02-1.96-.29-2.18zM0 4.94v14.12h24V4.94H0zM8.56 15.3c-.44.58-1.06.77-2.53.77H4.71V8.53h1.4c1.67 0 2.16.18 2.6.9.27.43.29.6.32 2.57.05 2.23-.02 2.73-.47 3.3zm5.09-5.47h-2.47v1.77h1.52v1.28l-.72.04-.75.03v1.77l1.22.03 1.2.04v1.28h-1.6c-1.53 0-1.6-.01-1.87-.3l-.3-.28v-3.16c0-3.02.01-3.18.25-3.48.23-.31.25-.31 1.88-.31h1.64v1.3zm4.68 5.45c-.17.43-.64.79-1 .79-.18 0-.45-.15-.67-.39-.32-.32-.45-.63-.82-2.08l-.9-3.39-.45-1.67h.76c.4 0 .75.02.75.05 0 .06 1.16 4.54 1.26 4.83.04.15.32-.7.73-2.3l.66-2.52.74-.04c.4-.02.73 0 .73.04 0 .14-1.67 6.38-1.8 6.68z"/></svg>
                            </div>
                            <div className="lg:w-24 lg:h-24 md:w-14 md:h-14 hover:-translate-y-5 hover:duration-500 hover:scale-105"
                            onClick={() => window.open(twitter, '_blank')}
                            >
                            <svg fill="#1DA1F2" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Twitter</title><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                            </div>
                            <div                             
                            className="lg:w-24 lg:h-24 md:w-14 md:h-14 hover:-translate-y-5 hover:duration-500 hover:scale-105"
                            onClick={() => window.open(instagram, '_blank')}
                            >
                            <svg fill="#E4405F" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Instagram</title><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/></svg>
                            </div>
                        </div>
                    </div>
                    <WhatCurrentlyLearning />
                    <div className="xl:flex flex-wrap justify-center xl:mt-24 mt-16 pb-6 pl-3 sm:pl-0">
                        <div className="w-11/12 mx-auto lg:mx-0 xl:mx-0 mb-6 xl:mb-0 rounded-2xl">
                        <h3 className="text-center text-xl font-semibold uppercase tracking-wide text-indigo-700 dark:text-sky-400">Open source Licenses</h3>
                        <p className="flex flex-wrap lg:w-11/12 text-medium font-systems-ui text-slate-800 dark:text-gray-200 p-2"><i className="text-red-500 dark:text-red-400">Disclaimer: </i>All of the components featured on this website were built and designed by me for my personal use using open-source tools. Some of the design elements was inspired from different websites on the internet.But I recreated them with my own knowledge and understanding.If you are interested in using any of the components, feel free to reach out to me I am happy to share my knowledge.</p>
                        <table className="w-11/12 overflow-x-auto text-slate-800 dark:text-gray-100 rounded-md">
                            <thead>
                            <tr className="bg-slate-200 dark:bg-gray-500 h-16 text-md leading-none text-gray-800 rounded-lg">
                                <th className="font-bold text-left pl-4">Library</th>
                                <th className="font-bold text-left pl-4">Use case</th>
                                <th className="font-bold text-left pl-4">Version</th>
                                <th className="font-bold text-left pl-4">License</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr className="h-20 antialiased leading-none text-gray-800 border-b border-gray-900 dark:border-gray-300">
                                <td className="text-slate-800 dark:text-gray-100">Vite</td>
                                <td className="text-slate-800 dark:text-gray-100">Build Tool</td>
                                <td className="text-slate-800 dark:text-gray-100">[latest version]</td>
                                <td><a 
                                href="https://github.com/vitejs/vite/blob/main/LICENSE"
                                target="_blank"
                                className="cursor-pointer hover:underline text-slate-800  dark:text-gray-100 hover:text-indigo-700 hover:dark:text-indigo-500"
                                >MIT License</a></td>
                            </tr>
                            <tr className="h-20 antialiased leading-none text-gray-800 border-b border-gray-900 dark:border-gray-300">
                                <td className="text-slate-800 dark:text-gray-100">React</td>
                                <td className="text-slate-800 dark:text-gray-100">UI Development</td>

                                <td className="text-slate-800 dark:text-gray-100">[latest version]</td>
                                <td><a 
                                href="https://github.com/facebook/react/blob/main/LICENSE"
                                target="_blank"
                                className="cursor-pointer hover:underline text-slate-800  dark:text-gray-100 hover:text-indigo-700 hover:dark:text-indigo-500"
                                >MIT License</a></td>
                            </tr>
                            <tr className="h-20 antialiased leading-none text-gray-800 border-b border-gray-900 dark:border-gray-300">
                                <td className="text-slate-800 dark:text-gray-100">Tailwind CSS</td>
                                <td className="text-slate-800 dark:text-gray-100">UI Design</td>

                                <td className="text-slate-800 dark:text-gray-100">[latest version]</td>
                                <td><a 
                                href="https://github.com/tailwindlabs/tailwindcss/blob/master/LICENSE"
                                target="_blank"
                                className="cursor-pointer hover:underline text-slate-800  dark:text-gray-100 hover:text-indigo-700 hover:dark:text-indigo-500"
                                >MIT License</a></td>
                            </tr>
                            <tr className="h-20 antialiased leading-none text-gray-800 border-b border-gray-900 dark:border-gray-300">
                                <td className="text-slate-800 dark:text-gray-100">Pnpm</td>
                                <td className="text-slate-800 dark:text-gray-100">Package Manager</td>

                                <td className="text-slate-800 dark:text-gray-100">[latest version]</td>
                                <td><a 
                                href="https://github.com/pnpm/pnpm/blob/main/LICENSE"
                                target="_blank"
                                className="cursor-pointer hover:underline text-slate-800  dark:text-gray-100 hover:text-indigo-700 hover:dark:text-indigo-500"
                                >MIT License</a></td>
                            </tr>
                            <tr className="h-20 antialiased leading-none text-gray-800 border-b border-gray-900 dark:border-gray-300">
                                <td className="text-slate-800 dark:text-gray-100">Simple-Icons</td>
                                <td className="text-slate-800 dark:text-gray-100">Icons</td>

                                <td className="text-slate-800 dark:text-gray-100">[latest version]</td>
                                <td><a 
                                href="https://github.com/simple-icons/simple-icons-website/blob/master/LICENSE.md"
                                target="_blank"
                                className="cursor-pointer hover:underline text-slate-800  dark:text-gray-100 hover:text-indigo-700 hover:dark:text-indigo-500"
                                >Creative Commons License</a></td>
                            </tr>
                            </tbody>
                        </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
