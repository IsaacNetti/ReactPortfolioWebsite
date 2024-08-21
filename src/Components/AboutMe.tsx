import{motion} from "framer-motion";

export default function AboutMe() {
    const variants ={
        hover2:{
            y: [5,-5,5],
            x: [-2,2,-1,-2],
            transition: {
                duration: 5,
                repeat: Infinity 
            }
        },
        hover:{
            y: [-5,5,-5],
            x: [-2,2,-1,-2],
            transition: {
                duration: 5,
                repeat: Infinity 
            }
        },
        pulse:{
            scale:[1.1,1,1.1],
            transition: {
                duration: 5,
                repeat: Infinity 
            }
        }
    }
    return (
        <>
        <div className='block lg:flex flex-row-reverse relative border-black justify-around bg-rippedPaper bg-cover bg-no-repeat lg:w-screen h-screen '>
            <div className='flex flex-col justify-center h-3/5 max-w-fit mx-auto sm:h-auto sm:mx-0 sm:mr-24'>
                <motion.div animate="pulse" variants={variants} className='px-32 py-28 bg-mePaper bg-cover bg-no-repeat'></motion.div>
                <div className='flex'>
                    <a href='https://github.com/IsaacNetti'><motion.div animate="hover" variants={variants} className='bg-githubPaper bg-cover bg-no-repeat px-16 py-14'></motion.div></a>
                    <a href='www.linkedin.com/in/inetti'><motion.div animate="hover2" variants={variants} className='bg-linkedInPaper bg-cover bg-no-repeat px-16 py-14 '></motion.div></a>
                </div>
            </div>

            <div className='flex flex-col justify-center border-black sm:ml-16'>
                <h1 className=' font-display self-center text-4xl sm:self-start sm:text-9xl '>Hi, my</h1>
                <h1 className=' font-display self-center text-4xl sm:self-start sm:text-9xl' >name is <b>Isaac</b></h1>
                <h2 className=' font-display self-center text-2xl sm:text-4xl'>I'm a React web-developer</h2>
            </div>
        </div>
        </>
    )
}