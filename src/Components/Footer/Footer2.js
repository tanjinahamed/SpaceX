import React from 'react';
import logo from '../../media/image/SpaceX-Logo.svg';
const Footer2 = () => {
    return (
        <footer className="px-4 py-2 mx-0 bg-footerBg">
            <div className="flex flex-col md:px-24 lg:px-36 xl:px-48 2xl:p-8 items-center justify-between md:flex-row">
                <p className="text-sm text-center text-gray-600 md:text-left">© 2019 SPACE EXPLORATION TECHNOLOGIES CORP </p>
                <a href="/" title="Go to Kutty Home Page" className="mb-4 md:mb-0">
                    <img src={logo} alt="" />
                    <span className="sr-only">Kutty Home Page</span>
                </a>

            </div>
        </footer>
    );
};

export default Footer2;