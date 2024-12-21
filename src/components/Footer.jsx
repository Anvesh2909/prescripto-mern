import React from 'react'
import {assets} from "../assets/assets_frontend/assets.js";
const Footer = () => {
    return (
        <div className='md:mx-10'>
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] mt-40 my-10 gap-14 text-sm'>
                <div>
                    <img className='mb-5 w-40' src={assets.logo} alt='logo'/>
                    <p className='w-full md:w-2/3 text-gray-600 leading-6'>Prescripto simplifies healthcare by
                        streamlining appointment booking with trusted doctors.  Find, book, and manage your consultations effortlessly. Your health is our priority—connecting you to care, anytime, anywhere.</p>
                </div>
                <div>
                    <h2 className="text-xl font-bold mb-5">COMPANY</h2>
                    <ul className="flex flex-col gap-2 text-gray-600">
                        <li><a href="#home" className="hover:underline">Home</a></li>
                        <li><a href="#about" className="hover:underline">About Us</a></li>
                        <li><a href="#delivery" className="hover:underline">Delivery</a></li>
                        <li><a href="#privacy" className="hover:underline">Privacy Policy</a></li>
                    </ul>
                </div>
                <div>
                    <h2 className="font-bold text-xl text-gray-800 mb-4">GET IN TOUCH</h2>
                    <ul className="space-y-2">
                        <li>+916305625811</li>
                        <li><a href="mailto:anveshyadavmokam@gmail.com"
                               className="hover:underline">anveshyadavmokam@gmail.com</a></li>
                    </ul>
                </div>
            </div>
            <hr/>
            <div>
                <p className='text-sm text-center py-5'>Copyright © 2023 Prescripto. All rights reserved.</p>
            </div>
        </div>
    )
}
export default Footer
