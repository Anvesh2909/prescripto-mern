import { useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext.jsx";

const Doctors = () => {
    const { speciality } = useParams();
    const navigate = useNavigate();
    const { doctors } = useContext(AppContext);
    const [filterDoc, setFilterDoc] = useState([]);
    const [selectedSpeciality, setSelectedSpeciality] = useState(speciality || ""); // Track selected speciality

    const applyFilter = () => {
        if (speciality) {
            setFilterDoc(doctors.filter((item) => item.speciality === speciality));
        } else {
            setFilterDoc(doctors);
        }
    };

    useEffect(() => {
        applyFilter();
        setSelectedSpeciality(speciality || ""); // Update selectedSpeciality when params change
    }, [doctors, speciality]);

    const handleSpecialityClick = (specialityName) => {
        setSelectedSpeciality(specialityName); // Set selected speciality
        navigate(`/doctors/${specialityName}`);
    };

    return (
        <div>
            <p className="text-gray-600">Browse through the doctors specialists</p>
            <div className="flex flex-col sm:flex-row items-start gap-5 mt-5 text-gray-800">
                {/* Sidebar for filtering */}
                <div className="flex flex-col gap-4 text-sm text-gray-600">
                    {[
                        "General Physician",
                        "Gynecologist",
                        "Dermatologist",
                        "Pediatricians",
                        "Neurologist",
                        "Gastroenterologist",
                    ].map((specialityName, index) => (
                        <p
                            key={index}
                            onClick={() => handleSpecialityClick(specialityName)}
                            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 transition-all rounded cursor-pointer ${
                                selectedSpeciality === specialityName
                                    ? "bg-indigo-100 text-black"
                                    : ""
                            }`}
                        >
                            {specialityName}
                        </p>
                    ))}
                </div>

                {/* Doctors List */}
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-5 gap-y-6 px-3 sm:px-0">
                    {filterDoc.map((item, index) => (
                        <div
                            onClick={() => navigate(`/appointment/${item._id}`)}
                            key={index}
                            className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer"
                        >
                            <img
                                className="bg-blue-50"
                                src={item.image || "/fallback-image.jpg"}
                                alt={item.name}
                            />
                            <div className="p-4">
                                <div className="flex items-center gap-2 text-sm text-center text-green-500">
                                    <p className="w-2 h-2 bg-green-500 rounded-full"></p>
                                    <p>Available</p>
                                </div>
                                <p className="text-gray-900 text-lg font-medium">{item.name}</p>
                                <p className="text-gray-600 text-sm">{item.speciality}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Doctors;
