import { assets } from "../assets/assets_frontend/assets.js";
import {useNavigate} from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    return (
        <div className="flex flex-col md:flex-row items-center justify-between bg-primary rounded-xl px-8 py-12 md:py-16 gap-8 shadow-lg">
            <div className="text-center md:text-left flex-1 space-y-6 pl-4">
                <p className="text-4xl md:text-4xl font-bold text-white leading-snug">
                    Book Appointment <br/> With Trusted Doctors
                </p>
                <div className="flex items-center gap-4">
                    <img
                        src={assets.group_profiles}
                        alt="Group Profiles"
                        className="w-28 "
                    />
                    <p className="text-white text-sm font-light leading-relaxed pr-4 py-2">
                        Simply browse through our extensive list of trusted doctors,
                        schedule your appointment hassle-free.
                    </p>
                </div>
                <a
                    href="#"
                    onClick={()=>{navigate('/special')}}
                    className="inline-flex items-center bg-white  px-6 py-3 text-sm rounded-full font-medium  shadow-lg hover:shadow-xl hover:bg-gray-100 transition-all"
                >
                    Book Appointment
                    <img
                        src={assets.arrow_icon}
                        alt="Arrow Icon"
                        className="ml-3 w-3 h-3"
                    />
                </a>
            </div>

            <div className="flex-1 flex justify-center">
                <img
                    src={assets.header_img}
                    alt="Header"
                    className="w-full max-w-sm md:max-w-md rounded-lg"
                />
            </div>
        </div>
    );
};
export default Header;