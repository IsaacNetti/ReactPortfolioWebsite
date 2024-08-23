
export default function HireMe(){

    return(
        <>
         <div id="hireMe" className=' font-display flex flex-col justify-center bg-rippedPaperBottom bg-cover bg-no-repeat w-screen h-screen '>
            <div className=" flex justify-around">
                <h1 className="sm:text-4xl">Email: isaacnetti@gmail.com</h1>
                <h1 className="sm:text-4xl">LinkedIn: linkedin.com/in/inetti </h1>
            </div>

            <a href="mailto:isaacnetti@gmail.com?subject=I'd like to work with you!?body=Hello! I have a job opportunity that I think you would be great for"><div className=" bg-hireMePaper bg-contain bg-no-repeat w-56 h-56 mx-auto"></div></a>
            <div className="bg-stickyNote2 bg-contain bg-no-repeat w-36 h-36 mx-auto"></div>
         </div>
        </>
    )
}