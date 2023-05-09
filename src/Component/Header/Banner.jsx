import bannerImg from '../../assets/img/banner.jpg'

const Banner = () => {
    return (
        <div className='min-h-[calc(100vh-60px)] bg-cover bg-center flex justify-center items-center' style={{ backgroundImage: `url(${bannerImg})` }}>
            <div className='my-container grid grid-cols-2'>
                <div></div>
                <div className='space-y-4 text-slate-50'>
                    <h2 className='font-bold text-4xl'>Would you like a Cup of Delicious Coffee?</h2>
                    <p className='text-gray-400'>Its coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                    <button className='cmn-btn'>Learn More</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;