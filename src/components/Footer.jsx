import React from 'react'
import { RiTelegram2Fill } from "react-icons/ri";
import { FiMail } from 'react-icons/fi';
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa6';

function Footer() {
  return (
    <div className='border-t border-divider'>
      <div className='max-w-screen-lg p-4 m-auto'>
        <div className='flex flex-col-reverse sm:flex-row justify-between gap-4 items-center'>
          <div>
            <div className='flex items-center sm:items-baseline lg:gap-2 flex-col lg:flex-row'>
              <h6 className='font-bold text-xl'>
                Masoud<span className='text-primary'>SR</span>
              </h6>
              <p>Front-end Developer</p>
            </div>
            <div className='text-xs sm:text-left text-center'>
              ©2026
            </div>
          </div>
          <div className='flex gap-1 flex-wrap border-b sm:border-none border-divider py-2 sm:py-0'>
            <a href="mailto:sepehrrad.masoud@gmail.com" className='flex gap-1 items-center sm:border-r border-border sm:pr-3 hover:-translate-y-0.5 sm:hover:-translate-y-0 sm:active:scale-100 active:scale-95 active:translate-y-0 transition-all duration-300'>
              <FiMail size={25} />
              <span className='hidden sm:inline'>sepehrrad.masoud@gmail.com</span></a>
            <a href="https://t.me/masoudsr" target="_blank" className='transition-all duration-300 hover:-translate-y-0.5 p-1 active:translate-y-0 active:scale-95'>
              <RiTelegram2Fill size={25} />
            </a>
            <a href="https://www.linkedin.com/in/MasoudSR/" target="_blank" className='transition-all duration-300 hover:-translate-y-0.5 p-1 active:scale-95 active:translate-y-0'>
              <FaLinkedinIn size={25} />
            </a>
            <a href="https://www.instagram.com/masoudsr.dev" target="_blank" className='transition-all duration-300 hover:-translate-y-0.5 active:scale-95 p-1 active:translate-y-0'>
              <FaInstagram size={25} />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer