import React from 'react';
import { IoMenu } from "react-icons/io5";
import { PiBellRinging } from "react-icons/pi";
import { avatar } from '../../assets';

const Header = () => {
    return (
        <div className="text-black flex justify-between w-full h-12 items-center">
            <div className="flex items-center my-4">
                <IoMenu className='text-2xl' />
                <div className="ml-4 w-56">
                    <select id="countries" className="bg-white border border-white text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                        <option selected>Choose a country</option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="FR">France</option>
                        <option value="DE">Germany</option>
                    </select>
                </div>
            </div>

            <div className='flex items-center my-4 '>
                <PiBellRinging />
                <div className='text-right mx-4'>
                    <div className='font-bold text-base'>
                        Marvin McKinney
                    </div>
                    <p className='text-xs'>Provider User (Admin)</p>
                </div>
                <div className='rounded-full overflow-hidden'>
                    <img className='w-full object-contain' src={avatar} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Header