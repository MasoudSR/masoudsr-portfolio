import React from 'react'

function Skill({ title, imgURL, rank }) {
    return (
        <div className={`${rank === 1 ? "sm:w-24 sm:h-24 w-20 h-20" : "sm:w-20 sm:h-20 w-16 h-16"} p-2 animate-fade-up rounded-xl shadow-sm dark:shadow-slate-950 bg-white dark:bg-slate-800 flex justify-center flex-col items-center`}>
            <div>
                <img src={imgURL} alt={title} className={`${rank === 1 ? "sm:w-12 sm:h-12 w-10 h-10" : "sm:w-10 sm:h-10 w-8 h-8"} rounded-lg ${title === "Next" && "dark:invert"}`} />
            </div>
            <div className={`${rank === 1 ? "sm:text-sm text-xs" : "sm:text-xs text-[10px]"} mt-2 font-semibold`}>
                {title}
            </div>
        </div>
    )
}

export default Skill