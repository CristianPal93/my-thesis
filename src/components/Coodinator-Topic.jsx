import React, {useEffect, useState} from "react";
import {useLocation} from 'react-router-dom';
import {items,coordinator_topics} from "../constants";
import styles from "../style";
import {Footer, Navbar, PopupMessageBox} from "./index";
import {db} from "./firebaseHandler";

// Table row component that displays an item and a button to choose it
const TableRow = ({ item, prop }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalData, setModalData] = useState(null);
    console.log(item.free);
    function handleModalClose(data) {
        setModalData(data);
        setIsModalOpen(false);
        if (modalData === false) {
            console.log("You have aborted the topic!");
        }else {
            console.log("Student choose topic "+item.topic_title+" "+item.id+" "+ " coordinated by"+prop.coordinator_name);
        }
    }
    return (

        (item.free) === true &&
                <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-800 ">
                        {item.id}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800 ">
                        {item.topic_title}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800 ">
                        {item.description}
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-right ">
                        <a
                            className="text-green-500 hover:text-green-700"
                            onClick={() => setIsModalOpen(true)}

                        >
                            {item.action}
                        </a>
                        {isModalOpen && <PopupMessageBox onClose={handleModalClose} prop={item}/>}
                    </td>
                </tr>


    );
};

const Coodinator_Topic = () => {
    const location = useLocation();
    const prop  = location.state.professor;
    const user = location.state.user;
    console.log("current user:"+user);
    // console.log(prop.contact_email.split('@')[0])
    const [selectedItem, setSelectedItem] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredData, setFilteredData] = useState(items);
    const [info , setInfo] = useState([]);
    const [loaded , setLoaded] = useState(false);

    const Fetchdata = ()=>{

        db.collection(prop.contact_email.split('@')[0]).get().then((querySnapshot) => {

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
        // <div className="container mx-auto mt-20 px-60 w-full">
        <div className="bg-gradient-to-r from-white-500 to-gray-500 w-full overflow-hidden z-50">
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <Navbar name='Coordinator-Topics' username={user}/>
                </div>
            </div>
            <div className={`bg-gradient-to-r from-white-500 to-gray-500  h-screen w-screen ${styles.flexStart} overflow-hidden z-50`}>

                <div className={`${styles.boxWidth}`}>
                    <div className="w-full md:mt-0 mt-6">
                        <h2 className={`${styles.heading1}  text-left`}>
                            {prop.coordinator_name}'s Topics<br className="sm:block hidden"/>
                        </h2>
                    </div>
                <div>
        <div className="flex flex-col">
            <div className="overflow-x-auto">
                <div className="py-3 pl-2">
                    <div className="relative max-w-xs">
                        <label htmlFor="hs-table-search" className="sr-only">
                            Search
                        </label>
                        <input
                            type="text"
                            name="hs-table-search"
                            id="hs-table-search"
                            className="block w-full p-3 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Search..."
                            value={searchTerm}
                            onChange={e => setSearchTerm(e.target.value)}
                        />
                        <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                            <svg
                                className="h-3.5 w-3.5 text-gray-400"
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                viewBox="0 0 16 16"
                            >
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                            </svg>
                        </div>
                    </div>
                </div>

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
                                    Topic Title
                                </th>

                                <th
                                    scope="col"
                                    className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                                >
                                    Description
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                                >
                                    Action
                                </th>
                            </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                            {filteredData.map(coordinator_topics => (
                                <TableRow
                                    key={coordinator_topics.id}
                                    item={coordinator_topics}
                                    onChoose={selected => setSelectedItem(selected) }
                                    prop = {prop}
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
            <div className={`bg-gradient-to-r from-white-500 to-gray-500 ${styles.flexCenter}`}>

                <div className={`${styles.boxWidth}`}>
                    <Footer/>
                </div>

            </div>
        </div>


            );
}

export default Coodinator_Topic;


// function Modal({ onClose }) {
//     return (
//         <div>
//             <button onClick={() => onClose('some data')}>Close</button>
//         </div>
//     );
// }
