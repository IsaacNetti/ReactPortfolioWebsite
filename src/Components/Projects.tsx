
export default function Projects() {

    return(
        <>
        <div id="projects" className='lg:flex justify-around font-display'>
            <a href="https://github.com/SCCapstone">
            <div className='bg-paperProject bg-contain bg-no-repeat p-1 m-auto h-96 min-w-80 max-w-80 md:w-1/3'>
                <h2 className="w-min ml-28 mt-10 text-xl">FishFinder</h2>
                <img src="src\assets\images\fishFinder.jpeg" alt="" className=" border-4 border-black ml-20 w-36"/>
                <p className="ml-14 mr-14 ">A social media app made for my college capstone project. My focus was the two way real time messaging system.</p>
            </div>
            </a>

            <a href="">
            <div className='bg-paperProject bg-contain bg-no-repeat p-1 m-auto h-96 min-w-80 max-w-80 md:w-1/3'>
                <h2 className="w-min ml-28 mt-10 text-xl">FishFinder</h2>
                <img src="src\assets\images\fishFinder.jpeg" alt="" className=" border-4 border-black ml-20 w-36"/>
                <p className="ml-14 mr-14 ">A social media app made for my college capstone project. My focus was the two way real time messaging system.</p>
            </div>
            </a>

            <a href="">
            <div className='bg-paperProject bg-contain bg-no-repeat p-1 m-auto h-96 min-w-80 max-w-80 md:w-1/3'>
                <h2 className="w-min ml-28 mt-10 text-xl">FishFinder</h2>
                <img src="src\assets\images\fishFinder.jpeg" alt="" className=" border-4 border-black ml-20 w-36"/>
                <p className="ml-14 mr-14 ">A social media app made for my college capstone project. My focus was the two way real time messaging system.</p>
            </div>
            </a>
            
        </div>
        <a href="https://isaacnetti.github.io/projects.html"><p className=" font-display w-min text-nowrap m-auto text-4xl">See all</p></a>
        </>
    )
}