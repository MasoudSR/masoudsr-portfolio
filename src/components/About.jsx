"use client"

import { motion } from "framer-motion";
import Skills from "@/components/Skills";

function About() {

    return (
        <div id='about' className="pt-26 lg:pt-56">
            <div className='flex flex-col lg:flex-row max-w-screen-lg m-auto gap-24 lg:gap-0'>
                <div className="m-4 lg:w-[50%] flex flex-col justify-center items-center text-primary drop-shadow-primary/40 drop-shadow-2xl">
                    <motion.div initial="hidden" whileInView="visible">
                        <h2 className='text-5xl font-bold py-4 text-center border-y-4 lg:border-none'>
                            <motion.div className="lg:underline underline-offset-1" transition={{ duration: 0.5 }} variants={{ hidden: { opacity: 0, x: 0 }, visible: { opacity: 1, x: -80 } }}>
                                AmirMasoud
                            </motion.div>
                            <motion.div className="lg:overline" transition={{ duration: 0.5 }} variants={{ hidden: { opacity: 0, x: 0 }, visible: { opacity: 1, x: 80 } }}>
                                SepehrRad
                            </motion.div>
                        </h2>
                        <motion.div className="text-xl py-2 lg:mt-10 text-center p-1 px-5" >
                            MSc in Software Engineering
                        </motion.div>
                    </motion.div>
                    {/* <div className={` transition-all duration-300 lg:-translate-x-20 opacity-100 delay-1000`}>
                            AmirMasoud
                            </div> */}
                    {/* <div className={`lg:overline  transition-all duration-300`}>
                            SepehrRad
                            </div> */}
                    {/* <h3 className={`text-xl py-2 lg:mt-10 text-center p-1 px-5 transition-all duration-300`}>
                            MSc in Software Engineering
                        </h3> */}
                </div>
                <Skills />
            </div>
        </div>
    )
}

export default About