import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion';

function Skill({ title, imgURL, delay }) {
    return (
        <div className='relative'>
            <motion.div className='w-16 h-16 p-2 rounded-xl shadow-lg shadow-primary/30 bg-white flex justify-center z-10 items-center' transition={{ duration: 0.5, delay: delay / 10 }} variants={{ hidden: { opacity: 0, scale: 0.5 }, visible: { opacity: 1, scale: 1 } }}>
                {/* <Image src={imgURL} width={40} height={40} alt={title} className='drop-shadow-2xl' /> */}
                <img src={imgURL} alt={title} className='w-10 h-10' />
            </motion.div>
        </div>
    )
}

export default Skill