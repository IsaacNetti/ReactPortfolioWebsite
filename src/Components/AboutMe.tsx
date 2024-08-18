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
        <div className='flex border-black justify-center bg-rippedPaper bg-cover bg-no-repeat w-screen h-screen '>
            <div className='flex flex-col justify-center  border-black mr-5 w-2/5'>
                <h1 className=' font-display self-start text-9xl'>Hi, my</h1>
                <h1 className=' font-display self-start text-9xl'>name is <u>Isaac</u></h1>
                <h2 className=' font-display text-4xl'>I'm a React web developer</h2>
            </div>
            <div className='flex flex-col justify-center'>
                <motion.div animate="pulse" variants={variants} className='px-32 py-28 bg-mePaper bg-contain bg-no-repeat '></motion.div>
                <div className='flex'>
                    <a href='https://github.com/IsaacNetti'><motion.div animate="hover" variants={variants} className='bg-githubPaper bg-contain bg-no-repeat px-16 py-14'></motion.div></a>
                    <a href='www.linkedin.com/in/inetti'><motion.div animate="hover2" variants={variants}className='bg-linkedInPaper bg-contain bg-no-repeat px-16 py-14 '></motion.div></a>
                </div>
            </div>
        </div>
        </>
    )
}