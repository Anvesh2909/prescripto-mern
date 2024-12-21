import React from "react";
import { assets } from "../assets/assets_frontend/assets.js"; // Ensure the assets file exports the appointment image

const Banner = () => {
    return (
        <div className="bg-primary text-white flex items-center justify-between px-6 sm:px-10 md:px-14 lg:px-12 my-20 rounded-lg">
            <div className="space-y-6">
                <h1 className="text-4xl font-bold leading-snug">
                    Book Appointment <br />
                    With 100+ Trusted Doctors
                </h1>
                <button className="bg-white text-black px-6 py-3 rounded-full shadow-md hover:bg-gray-100 transition-colors">
                    Create Account
                </button>
            </div>
            <img
                src={assets.appointment_img}
                alt="Doctor"
                className="w-1/3 max-w-sm rounded-lg object-cover"
            />
        </div>
    );
};

export default Banner;
