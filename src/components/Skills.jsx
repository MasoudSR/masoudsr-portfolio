import React from 'react'
import Skill from './modules/Skill'
import skillsData from "@/data/skills.json"
import { motion } from 'framer-motion';

function Skills() {
    return (
        <div className='p-4 lg:w-[50%]'>
            <h1 className='text-5xl text-center drop-shadow-xl text-primary drop-shadow-primary/70'>Skills</h1>
            <motion.div initial="hidden" whileInView="visible" className='flex flex-wrap gap-4 justify-center mt-8'>
                {skillsData.map((skill, index) => <Skill key={skill.title} title={skill.title} imgURL={skill.imgURL} delay={index} />)}
            </motion.div>
        </div>
    )
}

export default Skills