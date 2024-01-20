import React from 'react';
import { MdHomeWork } from "react-icons/md";

const MyCenter = () => {
    return (
        <div>
            <div>My Center</div>
            <div>
                <div className='flex'>
                    <MdHomeWork className='bg-gray-300 w-12 h-12 p-3 rounded-full text-pink-500' />
                    <div>
                        <div className='text-sm '>Total Centres</div>
                        <div>26</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyCenter