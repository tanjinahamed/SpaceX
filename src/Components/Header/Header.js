import React from 'react';
import video from '../../media/video/video.mp4';
import Nabvar from '../Navbar/Nabvar';

const Header = () => {
    return (
        <>
            <header className="relative flex flex-col items-center justify-center h-screen overflow-hidden">
                <div className="z-40 w-full z-50 sticky top-0 inset-x-0 relative md:absolute p-5 text-2xl text-white text-extrabold subpixel-antialiased dropShadow-2xl tracking-widest"><Nabvar></Nabvar></div>
                <div className="relative z-30 p-5 text-4xl leading-loose text-white text-bold text-center whitespace-pre-line tracking-morewide">
                    SMALLSAT RIDESHARE
                    <br /> <span className="">PROGRAM</span>
                </div>
                <video autoPlay loop muted className="absolute z-10 w-auto min-w-full min-h-full max-w-none">
                    <source src={video} />
                    Your browser does not support the video tag.
                </video>

            </header>
        </>
    );
};

export default Header;