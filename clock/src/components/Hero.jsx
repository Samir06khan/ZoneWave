import React from 'react';

import {TypeAnimation} from 'react-type-animation';

const Hero = () => {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] mx-auto bg-black mt-12'>
            <div className='col-span-1 my-auto max-auto w-[100px] h-auto lg:w-[600px]'>

            </div>
            <div className='flex items-center justify-center w-full'>
                <div className='col-span-2 px-5'>
                    <h1 className='text-white text-2xl sm:text-2xl lg:text-8xl font-extrabold text-center'>
                        <span className='primary-color'>
                          Welcome
                        </span>
                        <TypeAnimation
                            sequence={[
                                " To Zone Wave",
                                1000,
                            ]}
                            wrapper='span'
                            speed={50}
                            repeat={Infinity}
                        />

                    </h1>

                    <p className='text-white sm:text-lg my-6 lg:text-xl text-justify leading-relaxed px-4  bg-black p-4  shadow-md'>
                        This is a tool to tackle time zone issues. It shows the current time in different locations,
                        making it easier to synchronize activities globally. It provides up-to-date clocks for multiple
                        regions, helping to streamline global coordination.
                    </p>

                </div>
            </div>
        </div>
    )
}
export default Hero;

 