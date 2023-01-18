import React, {useEffect, useState} from "react";
import styles from "../style";
import {Footer, Navbar} from "./index";
import {Navigate, useLocation, useNavigate} from "react-router-dom";
import {db} from "./firebaseHandler";



const TableRow = ({ my_thesis,student}) => {
    const navigate = useNavigate();
    const handleClick = (item) => {
        if(item.action === 'View'){
            console.log("should view completed work")
        }else {
            navigate('/work-thesis',{state:{topic:item,student_name:student}});
        }
    };
    return (
        <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-800 ">
                {my_thesis.id}
            </td>
            <td className="px-6 py-4 text-sm text-gray-800 ">
                {my_thesis.topic_title}
            </td>
            <td className="px-6 py-4 text-sm text-gray-800 ">
                {my_thesis.thesis_type}
            </td>
            <td className="px-6 py-4 text-sm text-gray-800 ">
                {my_thesis.spec}
            </td>
            <td className="px-6 py-4 text-sm text-gray-800 ">
                {my_thesis.univ}
            </td>
            <td className="px-6 py-4 text-sm text-gray-800 ">
                {my_thesis.coordinator}
            </td>
            <td className="px-6 py-4 text-sm text-gray-800 ">
                {my_thesis.status}
            </td>
            <td className="px-6 py-4 text-sm font-medium text-right ">
                <a
                    className="text-green-500 hover:text-green-700"
                    onClick={() => handleClick(my_thesis)
                    }
                >
                    {my_thesis.action}
                </a>
            </td>
        </tr>

    );
};


const My_Thesis = () => {
    const loggedInUser = localStorage.getItem("authenticated");
    const location = useLocation();
    const prop  = location.state.user;
    if (!loggedInUser) {
        return <Navigate replace to="/login" />;
    }
    const [selectedItem, setSelectedItem] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [info , setInfo] = useState([]);
    const [filteredData, setFilteredData] = useState(info);
    const [loaded , setLoaded] = useState(false);

    const Fetchdata = ()=>{
        db.collection("my.thesis")
            .where("idv", "==", prop).get().then((querySnapshot) => {

            // Loop through the data and store
            // it in array to display
            querySnapshot.forEach(element => {

                var data = element.data();
                setInfo(arr => [...arr , data]);


            });
        })
    }
    if(!loaded) {
        Fetchdata()
        setLoaded(true);

    }
    useEffect(() => {
        const lowerCaseSearchTerm = searchTerm.toLowerCase();
        const newFilteredData = info.filter(item => {
            // Check if the item matches the search term
            return Object.values(item).some(val =>
                val.toString().toLowerCase().includes(lowerCaseSearchTerm)
            );
        });
        setFilteredData(newFilteredData);
    }, [info, searchTerm]);


    return (
        <div className="bg-gradient-to-r from-white-500 to-gray-500 w-full overflow-hidden z-50">
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <Navbar name='Topics' username={prop}/>
                </div>
            </div>
            <div className={`bg-gradient-to-r from-white-500 to-gray-500  h-screen w-screen ${styles.flexStart} overflow-hidden z-50`}>
                <div className={`${styles.boxWidth}`}>
                    <div>
                        <div className="w-full md:mt-0 mt-6">
                            <h2 className={`${styles.heading1}  text-left`}>
                                Thesis<br className="sm:block hidden"/>
                            </h2>
                        </div>
            <div className="flex flex-col">
                <div className="overflow-x-auto">
                    <div className="p-1.5 w-full inline-block align-middle">
                        <div className="overflow-x-auto border rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                <tr>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                    >
                                        No.
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                    >
                                        Topic
                                    </th>

                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                    >
                                        Level
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                    >
                                        Specialization
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                    >
                                        University
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                    >
                                        Coordinator
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                    >
                                        Status
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase "
                                    >
                                        Action
                                    </th>
                                </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                {filteredData.map(my_thesis => (
                                    <TableRow
                                        key={my_thesis.id}
                                        my_thesis={my_thesis}
                                        student={prop}
                                        onChoose={selected => setSelectedItem(selected) }
                                    />
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
                    </div>
                </div>
            </div>

            <div className={`bg-gradient-to-r from-white-500 to-gray-500 ${styles.paddingX} ${styles.flexCenter}`}>

                <div className={`${styles.boxWidth}`}>
                    <Footer/>
                </div>

            </div>
        </div>


    );
};

export default My_Thesis