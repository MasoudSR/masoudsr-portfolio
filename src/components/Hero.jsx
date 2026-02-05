function Hero() {

  return (
    <div className="max-w-screen-lg m-auto px-4">
      <div className="flex items-center flex-col pt-32 pb-12">
        <div>
          <img src="/images/picture.png" alt="" className="h-60" />
        </div>
        <div className="flex flex-col">
          <h2 className='lg:text-6xl sm:text-5xl text-2xl text-center font-bold'>
            AmirMasoud SepehrRad
          </h2>
          <h3 className="lg:text-4xl bg-primary rounded-full sm:text-3xl text-center py-2 shadow-sm text-shadow-sm text-xl font-semibold mt-2 text-white">
            Front-End Web Developer
          </h3>
          <h4 className="font-medium text-center lg:text-xl">
            MSc in Software Engineering
          </h4>
        </div>
      </div>
    </div>
  )
}

export default Hero