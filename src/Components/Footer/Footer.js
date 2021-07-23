import React from "react";

const Footer = () => {
    return (
        <footer class="text-gray-600 body-font  bg-footerBg ">
            <div class=" flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                <div class="w-full md:w-1/3 lg:w-1/3 xl:w-1/3 2xl:w-1/3 px-12 py-24  sm:w-full md:mx-0  text-center md:text-left md:mt-0 mt-10 bg-white">
                    <h1 class="text-gray-600 text-2xl pb-6 leading-normal animate-pulse">Get Updates</h1>
                    <p class="mt-2 py-6 text-gray-500">
                        Subscribe and get updates about our rocket & everything about SpaceX
                    </p>
                    <form>
                        <h4 className="py-6">Email:</h4>
                        <div class="flex flex-row border rounded-lg dark:border-gray-600 lg:flex-row ">
                            <input class="focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent px-6 py-3 text-gray-700 placeholder-gray-500 md:w-full xl:w-full 2xl:w-full bg-white outline-none dark:bg-gray-800 dark:placeholder-gray-400 focus:placeholder-transparent dark:focus:placeholder-transparent" type="text" name="email" placeholder="Enter your email" aria-label="Enter your email" />
                            <button class="sm:px-2 w-full py-2 text-lg md:w-full lg:w-12 md:ml-0 md:rounded-b-lg lg:float-right xl:float-right 2xl:float-right -ml-6 rounded-r-lg font-medium tracking-wider text-white uppercase transition-colors duration-200 transform bg-blue-700 hover:bg-blue-600 focus:bg-gray-600 focus:outline-none">OK</button>
                        </div>
                    </form>
                </div>
                <div class="flex-grow w-full md:w-2/3 lg:w-2/3 xl:w-2/3 2xl:w-2/3 flex flex-wrap md:pr-20  -mb-10 md:text-left text-center order-first Class
                        Properties justify-start justify-content: flex-start; justify-end justify-content: flex-end;">
                    <div class="border-r-2 lg:w-1/4  py-24 md:w-1/2 w-full text-center px-4">
                        <h2 class="title-font font-medium text-gray-900 tracking-widest pb-6 text-sm mb-3">
                            CONTACTS
                        </h2>
                        <nav class="list-none mb-10">
                            <li className="py-6">
                                <a href="tel:+32484267794">
                                    <p>+32 484 26 77 94</p>
                                </a>
                            </li>
                            <li className="py-6">
                                <a href="tel:+32484267794">
                                    <p>+32 484 26 77 94</p>
                                </a>
                            </li>
                            <li className="py-6">
                                <a href="mailto:info@spacex.com">
                                    <p>info@spacex.com</p>
                                </a>
                            </li>
                        </nav>
                    </div>
                    <div class="border-r-2 sm:boder-0 lg:w-1/4 py-24 md:w-1/2 w-full text-center px-4">
                        <h2 class="title-font font-medium pb-6 text-gray-900 tracking-widest text-sm mb-3">
                            ABOUT
                        </h2>
                        <nav class="list-none mb-10">
                            <li className="py-6">
                                <a href="" target="_blank">
                                    <p>Abous us</p>
                                </a>
                            </li>
                            <li className="py-6">
                                <a href="" target="_blank">
                                    <p>Careers</p>
                                </a>
                            </li>
                            <li className="py-6">
                                <a href="" target="_blank">
                                    <p>Shop</p>
                                </a>
                            </li>
                        </nav>
                    </div>
                    <div class="md:border-r-2 lg:w-1/4  py-24 md:w-1/2 text-center w-full px-4">
                        <h2 class="title-font font-medium pb-6 text-gray-900 tracking-widest text-sm mb-3">
                            SOCIAL MEDIA
                        </h2>
                        <nav class="list-none mb-10">
                            <li className="py-6">
                                <a href="" target="_blank">
                                    <p>Facebook</p>
                                </a>
                            </li>
                            <li className="py-6">
                                <a href="" target="_blank">
                                    <p>Twitter</p>
                                </a>
                            </li>
                            <li className="py-6">
                                <a href="" target="_blank">
                                    <p>Vimeo</p>
                                </a>
                            </li>
                        </nav>
                    </div>
                    <div class="lg:w-1/4  py-24 md:w-1/2 w-full text-center px-4">
                        <h2 class="title-font font-medium pb-6 text-gray-900 tracking-widest text-sm mb-3">
                            ROCKETS
                        </h2>
                        <nav class="list-none mb-10">
                            <li className="py-6">
                                <a href="" target="_blank">
                                    <p>Falcon Heavy</p>
                                </a>
                            </li>
                            <li className="py-6">
                                <a href="" target="_blank">
                                    <p>Falcon 9</p>
                                </a>
                            </li>
                            <li className="py-6">
                                <a href="" target="_blank">
                                    <p>Falcon 1</p>
                                </a>
                            </li>
                        </nav>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;