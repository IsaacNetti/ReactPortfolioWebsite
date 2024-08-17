
export default function AboutMe() {
    
    return (
        <>
        <div className='flex border-black justify-center bg-rippedPaper bg-contain bg-no-repeat w-screen h-screen '>
            <div className='flex flex-col justify-center  border-black mr-5 w-2/5'>
                <h1 className=' border-black self-start text-6xl'>Hi, my</h1>
                <h1 className=' border-black self-start text-6xl'>name is <b>Isaac</b></h1>
                <h2 className=' border-black '>I'm a Front-end web developer</h2>
            </div>
            <div className='flex flex-col justify-center border-black'>
                <div className='px-32 py-28 bg-mePaper bg-contain bg-no-repeat '></div>
                <div className='flex'>
                    <div className='bg-githubPaper bg-contain bg-no-repeat px-16 py-14'></div>
                    <div className='bg-linkedInPaper bg-contain bg-no-repeat px-16 py-14 '></div>
                </div>
            </div>
        </div>
        </>
    )
}