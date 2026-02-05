import Skills from './Skills'

function About() {

    return (
        <div className='max-w-screen-lg m-auto'>
            <div className="flex flex-col">
                <h2 className='text-4xl font-semibold'>
                    AmirMasoud SepehrRad
                </h2>
                <div className="bg-primary text-2xl text-center text-white py-0.5 rounded-full drop-shadow-sm">
                    Front-End Developer
                </div>
                <div className="text-xl py-2 lg:mt-10 text-center p-1 px-5" >
                    MSc in Software Engineering
                </div>
            </div>
            <Skills />
        </div>
    )
}

export default About