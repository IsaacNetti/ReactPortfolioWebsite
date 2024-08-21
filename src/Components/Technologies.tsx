import{motion, useVelocity} from "framer-motion";
import { useRef } from "react";


export default function Technologies() {
    const variants ={
        scroll:{
            transition: {
                type: "inertia",
                velocity:380
            }
        }

    }
    const parentRef = useRef(null)
    return (
        <>
        <div ref={parentRef}className='border-4 border-black '>
            <motion.ul className='flex justify-around border-4 border-black h-52'>
                <motion.li drag dragConstraints={parentRef} className='border-4 border-black self-center'>HTML</motion.li>
                <motion.li drag dragConstraints={parentRef} className='border-4 border-black self-center'>CSS</motion.li>
                <motion.li drag dragConstraints={parentRef} className='border-4 border-black self-center'>Javascript</motion.li>
                <motion.li drag dragConstraints={parentRef} className='border-4 border-black self-center'>React</motion.li>
                <motion.li drag dragConstraints={parentRef} className='border-4 border-black self-center'>SQL</motion.li>
            </motion.ul>
    
        </div>
        </>
    )
}