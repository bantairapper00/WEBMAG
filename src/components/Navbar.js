import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class Navbar extends Component {
    render() {
        return (
            <div className='border-2 w-full'>
                <div className='w-[1200px] m-auto flex'>
                    <div className='text-2xl text-gray-700 border-r-2 px-5 py-4 my-auto'>WEB<span className='font-bold'>MAG</span></div>
                    <ul className='flex text-base my-auto'>
                        <li className='border-r-2 py-5 px-4 text-[16px]'><Link to="/">News</Link></li>
                        <li className='border-r-2 py-5 px-4 text-[16px]'><Link to="/business">Business</Link></li>
                        <li className='border-r-2 py-5 px-4 text-[16px]'><Link to="/entertainment">Entertainment</Link></li>
                        <li className='border-r-2 py-5 px-4 text-[16px]'><Link to="/health">Health</Link></li>
                        <li className='border-r-2 py-5 px-4 text-[16px]'><Link to="/science">Science</Link></li>
                        <li className='border-r-2 py-5 px-4 text-[16px]'><Link to="/sports">Sports</Link></li>
                        <li className='border-r-2 py-5 px-4 text-[16px]'><Link to="/technology">Technology</Link></li>
                    </ul>
                </div>
            </div>
        )
    }
}
    
