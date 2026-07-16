function Hero() {

  return (
    <div className="max-w-screen-lg m-auto px-4 relative">
      <div className="flex flex-col items-center pt-36 pb-12">
        <div className="relative pointer-events-none select-none">
          <img src="/images/SRLogo.svg" alt="" className="sm:h-60 h-38 drop-shadow-sm" />
          <div className="absolute inset-0 -z-20 flex items-center justify-center text-[230px] sm:text-[380px] text-primary/5 select-none font-black">
            SR
          </div>
        </div>
        <h3 className="lg:text-4xl w-full max-w-screen-sm rounded-full sm:text-3xl text-center border-primary/20 text-[28px] font-semibold mt-10">
          Front-End Developer
        </h3>
        <p className="text-center mt-2 m-auto max-w-xl text-zinc-600 dark:text-zinc-300">
          Turning ideas into interactive web experiences
        </p>
      </div>
    </div>
  )
}

export default Hero