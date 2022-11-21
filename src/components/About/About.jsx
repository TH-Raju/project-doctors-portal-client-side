import React from 'react';
import me from '../../img/th-raju.jpg'

const About = () => {
    return (
        <article className="max-w-2xl px-6 py-24 mx-auto space-y-12 ">
            <div className="w-full mx-auto space-y-4 text-center">
                <p className="text-xs font-semibold tracking-wider uppercase">Doctors Portal</p>
                <h1 className="text-4xl font-bold leading-tight md:text-5xl">Doctor's Portal is a Online Doctor's Appoinment System</h1>
                <p className="text-sm dark:text-gray-400">by
                    <a rel="noopener noreferrer" href=" " target="_blank" className="underline dark:text-violet-400">
                        <span itemprop="name" className='text-blue-900'><a href="https://www.facebook.com/rjraju.r8/" target="__blank"> TH Raju</a> </span>
                    </a>on
                    <time datetime="2021-02-12 15:34:18-0200">Nov 21th 2022</time>
                </p>
            </div>
            <div className="pt-12 border-t dark:border-gray-700">
                <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row">
                    <img src={me} alt="" className="self-center flex-shrink-0 w-24 h-24 border rounded-full md:justify-self-start dark:bg-gray-500 dark:border-gray-700" />
                    <div className="flex flex-col">
                        <h4 className="text-lg font-semibold">TH Raju</h4>
                        <p className="text-gray-400">Doctor's Portal is a Online Doctor's Appoinment System. I Develop it with ReactJs NodeJs MongoDB ExpressJs and some of NPM Package. I'll Develop it for Learning Purpose. and it has a admin System. and Payment method System.</p>
                    </div>
                </div>

            </div>
        </article>
    );
};

export default About;