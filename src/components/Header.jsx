import { FaLinkedinIn } from "react-icons/fa6";
import { BsGithub } from 'react-icons/bs';


function Header() {

    return (
        <div className='border-b border-divider'>
            <div className='max-w-screen-lg m-auto p-4 flex justify-between items-center'>
                <h1 className='font-bold lg:text-4xl sm:text-3xl text-2xl'>
                    <a href="http://masoudsr.ir">Masoud<span className='text-primary'>SR</span></a>
                </h1>
                <div className='flex gap-1 justify-center items-center'>
                    <a href="https://www.linkedin.com/in/MasoudSR/" target="_blank" className='p-1 flex transition-all duration-300 hover:-translate-y-0.5 active:scale-95 active:translate-y-0'>
                        <FaLinkedinIn size={25} />
                    </a>
                    <a href="https://github.com/MasoudSR" target="_blank" className='p-1 flex transition-all duration-300 hover:-translate-y-0.5 active:scale-95 active:translate-y-0'>
                        <BsGithub size={25} />
                    </a>

                </div>
            </div>
        </div>
    )
}

export default Header