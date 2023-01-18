import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import {db} from "./firebaseHandler";

// Table row component that displays an item and a button to choose it
const TableRow = ({ item,current_user }) => {
    const navigate = useNavigate();
    const handleClick = (item) => {
        navigate('/coordinator-topics',{state:{professor:item,user:current_user}});
    };
    return (
            <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-800 ">
                {item.id}
            </td>
            <td className="px-6 py-4 text-sm text-gray-800 ">
                {item.coordinator_name}
            </td>
                <td className="px-6 py-4 text-sm text-gray-800 ">
                    {item.contact_email}
                </td>
    <td className="px-6 py-4 text-sm font-medium text-right ">
        <a
            className="text-green-500 hover:text-green-700"
            onClick={() => handleClick(item)
            }
        >
            {item.action}
        </a>
    </td>
        </tr>

    );
};

// Parent component that renders a table of items
const ItemTable = ({prop}) => {
    const [selectedItem, setSelectedItem] = useState(null);
    const [info , setInfo] = useState([]);
    const [loaded,setLoaded] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredData, setFilteredData] = useState([]);
    console.log(prop)
    const Fetchdata = ()=>{
        db.collection("items").get().then((querySnapshot) => {

            // Loop through the data and store
            // it in array to display
            querySnapshot.forEach(element => {
                var data = element.data();
                setInfo(arr => [...arr , data]);

            });
        })
        setLoaded(true);
    }
    if (!loaded) {
        Fetchdata()
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
                                        Coordinator
                                    </th>

                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                                    >
                                        Contact Details
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
                                {filteredData.map(item => (
                                    <TableRow
                                        key={item.id}
                                        item={item}
                                        current_user={prop}
                                        onChoose={selected => setSelectedItem(selected) }
                                    />
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

    );
};


export default ItemTable;