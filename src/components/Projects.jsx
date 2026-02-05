import React from 'react'
import Project from './modules/Project'
import projectsData from "@/data/projects.json"
import { MdArrowRight } from 'react-icons/md'

function Projects() {
    return (
        <div className='border-t border-divider mt-10 py-10 bg-slate-100'>
            <div className='max-w-screen-lg m-auto sm:px-4'>
                <h1 className='text-4xl text-center pb-5 text-shadow'>Projects</h1>
                <div className='sm:border border-y gap-4 sm:rounded-2xl border-primary/30 shadow-sm flex-col shadow-primary/30 w-full flex justify-between p-4 bg-white'>
                    <div className='flex justify-between border-b border-border pb-2'>
                        <div className='flex flex-col sm:flex-row items-baseline sm:gap-2'>
                            <h4 className='text-xl sm:text-2xl font-semibold'>Cabichi</h4>
                            <h5 className='text-gray-700 sm:text-lg text-sm'>Smart Cabinet Analyzer</h5>
                        </div>
                        <div>
                            <div className='rounded-lg bg-primary-soft flex items-center border border-border text-sm sm:text-base sm:flex-row flex-col'>
                                <div className='border-b text-center sm:border-none border-gray-300 px-3 py-0.5'>
                                    Commercial Project
                                </div>
                                <div className='sm:border-l border-gray-300 sm:pl-2 sm:ml-2 py-0.5 px-3 text-center'>Private Repository</div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col-reverse sm:flex-row'>
                        <div className='sm:w-[40%] sm:pr-4 flex justify-between flex-col gap-8 sm:gap-4 border-t sm:border-none mt-4 sm:mt-0 border-border sm:pt-0 pt-4'>
                            <p className=''>Cabichi is an online tool for analyzing cabinet part dimensions and managing cabinet projects.
                                It helps cabinet makers generate cut-ready outputs and part tables in minutes, reducing manual calculation errors.</p>
                            <a href="https://cabichi.ir/" target="_blank" className='px-4 py-3 active:scale-95 text-center w-full bg-primary hover:text-white border-none shadow-sm border-primary-hover hover:bg-primary-hover transition-all duration-300 text-white font-semibold rounded-lg'>Visit Website</a>
                        </div>
                        <div className='border border-border pb-2 rounded-xl overflow-hidden bg-gray-100 sm:w-[60%]'>
                            <img src={"/images/projects/cabichi.png"} alt={"Cabichi"} className='' />
                        </div>
                    </div>
                    <div className='border-t border-border pt-2 text-sm'>
                        <span className='font-semibold'>Tech Stack:</span> Next.js • React 19 • MongoDB • Mongoose • Tailwind CSS • Tailwind Animated • NextAuth • Zod
                    </div>
                </div>
                <div className='grid sm:grid-cols-2 gap-4 justify-center mt-8'>
                    {projectsData.map(project => <Project key={project.title} data={project} />)}
                </div>
                <div className='text-center border-y sm:border-x mt-4 border-border p-4 bg-white sm:rounded-2xl'>
                    View more projects on<a href="https://github.com/MasoudSR" target="_blank" className='group inline text-primary font-semibold'> GitHub
                        <MdArrowRight size={18} className='inline group-hover:translate-x-0 -translate-x-0.5 transition-all duration-700' /></a>
                </div>
            </div>
        </div>
    )
}

export default Projects