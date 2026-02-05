import React from 'react'
import Skill from './modules/Skill'

function Skills() {
    return (
        <div className='flex flex-col items-center flex-wrap gap-4 justify-center px-4 mt-6 max-w-screen-lg m-auto'>
            <div className='flex gap-4'>
                <Skill title={"TypeScript"} imgURL={"/images/skills/typescript.svg"} delay={500} rank={1} />
                <Skill title={"React"} imgURL={"/images/skills/react.svg"} delay={1} rank={1} />
                <Skill title={"Next"} imgURL={"/images/skills/nextjs.svg"} delay={1} rank={1} />
            </div>
            <div className='flex gap-2 flex-wrap justify-center'>
                <Skill title={"HTML5"} imgURL={"/images/skills/html5.svg"} delay={1} rank={2} />
                <Skill title={"CSS3"} imgURL={"/images/skills/css3.svg"} delay={1} rank={2} />
                <Skill title={"JavaScript"} imgURL={"/images/skills/javascript.svg"} delay={1} rank={2} />
                <Skill title={"Tailwind"} imgURL={"/images/skills/tailwind.svg"} delay={1} rank={2} />
                <Skill title={"MaterialUI"} imgURL={"/images/skills/mui.png"} delay={1} rank={2} />
                <Skill title={"Redux"} imgURL={"/images/skills/redux.svg"} delay={1} rank={2} />
                <Skill title={"GraphQL"} imgURL={"/images/skills/graphql.svg"} delay={1} rank={2} />
            </div>
        </div>
    )
}

export default Skills