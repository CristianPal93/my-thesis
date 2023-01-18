import React, {useState} from "react";
import styles from "../style";
import {Footer, Navbar, ItemTable} from "./index";
import {Navigate, useLocation, useNavigate} from "react-router-dom";
import {my_students} from '../constants'
import {db} from "./firebaseHandler";

// Table row component that displays an item and a button to choose it
const TableRow = ({ item,user }) => {
    const navigate = useNavigate();
    const handleClick = (item) => {
        navigate('/work-thesis',{state:{topic:item,student_name:user}});
    };
    return (
        <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-800 ">
                {item.id}
            </td>
            <td className="px-6 py-4 text-sm text-gray-800 ">
                {item.student_name}
            </td>
            <td className="px-6 py-4 text-sm text-gray-800 ">
                {item.topic_title}
            </td>
            <td className="px-6 py-4 text-sm font-medium text-right ">
                <a
                    className="text-green-500 hover:text-red-700"
                    onClick={() => handleClick(item)
                    }
                >
                    {item.action}
                </a>
            </td>
        </tr>

    );
};

const My_Student = () => {

    const loggedInUser = localStorage.getItem("authenticated");
    const [selectedItem, setSelectedItem] = useState(null);
    const [loaded , setLoaded] = useState(false);
    const [info , setInfo] = useState([]);
    const location = useLocation();
    const prop  = location.state.user;
    console.log(prop);
    // const myArray = my_students.filter(top => top.user == prop)[0].current_topics
    // console.log(myArray);

    const Fetchdata = ()=>{
        db.collection("my-students")
            .where("user", "==", prop).get().then((querySnapshot) => {

            // Loop through the data and store
            // it in array to display
            querySnapshot.forEach(element => {

                var data = element.data();
                // setInfo(arr => [...arr , data]);
                setInfo(data['current_topics'])

            });
        })
    }
    if(!loaded) {
        Fetchdata()
        setLoaded(true);

    }

    if (!loggedInUser) {
        return <Navigate replace to="/login" />;
    }
    function handleClick(){
        console.log("Add topics!")
    }

    return(
        <div className="bg-gradient-to-r from-white-500 to-gray-500 w-full overflow-hidden z-50">
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <Navbar name='My Students' username={prop}/>
                </div>
            </div>
            <div className={`bg-gradient-to-r from-white-500 to-gray-500  h-screen w-screen ${styles.flexStart} overflow-hidden z-50`}>

                <div className={`${styles.boxWidth}`}>
                    <div className="w-full md:mt-0 mt-6">
                        <h2 className={`${styles.heading1}  text-left`}>
                            My Students<br className="sm:block hidden"/>
                        </h2>
                    </div>
                    <div>
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
                                                    Student Name
                                                </th>

                                                <th
                                                    scope="col"
                                                    className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase "
                                                >
                                                    Topic
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
                                            {info.map(item => (
                                                <TableRow
                                                    key={item.id}
                                                    item={item}
                                                    user={prop}
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
            <div className={`bg-gradient-to-r from-white-500 to-gray-500 ${styles.flexCenter}`}>

                <div className={`${styles.boxWidth}`}>
                    <Footer/>
                </div>

            </div>
        </div>
    );
}

export default My_Student;