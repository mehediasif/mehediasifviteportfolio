import React, { useState } from "react";
export default function Modal(){
    const [showModal, setShowModal] = useState(false);
    const wasViewed = window.localStorage.getItem('important-information-viewed')
    const toggleModal = () => {
      if (wasViewed) {
        return
      }
      setShowModal(!showModal)
    }
    const onSave = () => {
      toggleModal()
      window.localStorage.setItem('important-information-viewed', true)
    }
    return(
        <>
        {!wasViewed && <button
          className="bg-pink-700 hover:bg-pink-600 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mx-2 mb-1 ease-linear transition-all duration-150"
          type="button"
          onClick={toggleModal}
        >Open Video CV
        </button>
        }
        {showModal ? (
            <>
              <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none dark:bg-black"
                onClick={toggleModal}
              >
                <div className="relative w-auto my-6 mx-auto max-w-3xl sm:w-2/3 sm:min-h-min sm:overflow-y-auto text-slate-800">
                  {/*content*/}
                  <div className="border-2 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    <h3 className="text-2xl font-semibold px-2 py-2 text-center">
                    A Quick Introduction
                    </h3>
                    <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                      
                      <button
                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={toggleModal}
                      >
                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9.75L14.25 12m0 0l2.25 2.25M14.25 12l2.25-2.25M14.25 12L12 14.25m-2.58 4.92l-6.375-6.375a1.125 1.125 0 010-1.59L9.42 4.83c.211-.211.498-.33.796-.33H19.5a2.25 2.25 0 012.25 2.25v10.5a2.25 2.25 0 01-2.25 2.25h-9.284c-.298 0-.585-.119-.796-.33z" />
                          </svg>
                        </span>
                      </button>
                    </div>
                    {/*body*/}
                    <div className="relative p-4 flex-auto">
                      <p className="my-4 text-gray-500 text-lg leading-relaxed">
                      As someone who values your time, I understand the importance of clarity in communication. That's why I've created this short video CV to be as concise and informative as possible. I've highlighted my most relevant qualifications and experience, including my educational background. I look forward to the opportunity to showcase my skills further and I hope you enjoy watching my video CV. Thank you for your time.
                      </p>
                      <p className="my-4 text-gray-700 text-lg leading-relaxed">
                      <b className="text-lg font-bold leading-relaxed mt-6 mb-4 text-red-800">Note:</b> 
                      The video CV is just a sneak peek of who I am and what I can do, for a more in-depth view of my skills and experience, please check out the rest of the portfolio.
                      </p>
                      
                    </div>
                    {/*footer*/}
                    <div className="flex justify-center p-6 border-t border-solid border-blueGray-200 rounded-b">
                      <button
                        className="items-center text-amber-500 background-transparent font-bold uppercase px-2 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-300"
                        type="button"
                        onClick={toggleModal}
                      >
                        Close
                      </button>
                    </div>
                    <div className="flex p-6 border-t border-solid border-blueGray-200 rounded-b">
                      <button
                        className="justify-start items-center text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={toggleModal}
                      >
                        Close
                      </button>
                      <button
                        className="justify-end items-center bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={onSave}
                      >
                        Not Interested
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-25 dark:opacity-70 fixed inset-0 z-40 bg-black">
              <p className="my-4 mx-5 text-amber-700 dark:text-emerald-300 text-lg leading-relaxed text-center max-w-md">I love to make things more interesting, that's why I've added some Easter eggs in this website, let's see how many you can discover!<br/>
              #happyHacking</p>
              </div>
            </>
          ) : null}
        </>
    );
}