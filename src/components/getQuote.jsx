import React, { useState, useEffect } from 'react'

export default function GetQuote(){
    const [quote, setQuote] = useState('');

    const getQuotes = () => {
        fetch('https://type.fit/api/quotes')
        .then((response) => response.json())
        .then(data => {
            let randomNum = Math.floor(Math.random() * data.length);
            setQuote(data[randomNum]);
        })
        .catch(err => console.error(err));
    };

    useEffect(() => {
        getQuotes();
    },[])
    return(
        <div className="mx-auto max-w-xl mt-8 bg-[#fccefc] opacity-70 dark:bg-[#f7d0f7] rounded-xl">
            <h1 className='flex items-center justify-center'>Quote Of the Day...</h1>
            <div className="flex items-center justify-center resize-x rounded-md border-4 shadow-xl dark:hover:opacity-100">
                <div className='max-w-xl'>
                <p className='font-BlinkMacSystemFont font-semibold text-xl leading-relaxed'>"{quote.text}"</p>
                <h3 className='font-apple-system font-light italic text-2xl tracking-widest'>Author : {quote.author}</h3>
                <div className='flex justify-between'>
                <button 
                onClick={getQuotes}
                className="hover:opacity-80 hover:bg-emerald-400 dark:hover:bg-emerald-600 text-black font-bold lg:text-xl bg-sky-200 dark:bg-sky-300 px-2 lg:px-12 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 hover:translate-x-2"
                >Next</button>
                <a
                href={`https://twitter.com/compose/tweet?text=${quote.text}author-${quote.author}`}
                target="_blank"
                rel='noopener noreferrer'
                className="text-black lg:text-xl bg-sky-100 dark:bg-sky-200 px-2 lg:px-12 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 hover:-translate-y-4 hover:scale-110"
                >
                <svg fill="#1DA1F2" role="img" width={32} height={32} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Share it on Twitter</title><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                </a>
                </div>
                </div>
            </div>
        </div>
    )
}