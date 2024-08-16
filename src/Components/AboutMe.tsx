
export default function AboutMe() {
    
    return (
        <>
        <div className='flex border-4 border-black justify-center w-screen h-screen'>
            <div className='flex flex-col justify-center border-4 border-black'>
            <h1 className='flex border-4 border-black self-start text-2xl'>Hi, my</h1>
            <h1 className='flex border-4 border-black self-start text-2xl'>name is Isaac</h1>
            <h2 className='flex border-4 border-black self-center text-sm'>I'm a Front-end web developer</h2>
            </div>
            <div className='flex flex-col justify-center border-4 border-black'>
                <img className='flex border-4 border-black'></img>

                <img className='flex border-4 border-black'></img>
                <img className='flex border-4 border-black'></img>
            </div>
        </div>
        </>
    )
}