import {notes,notes_all_students} from "../constants";
import React, {useEffect, useState} from 'react';
import {db} from "./firebaseHandler";
function Card({ children }) {
    return (
        <div className="flex justify-between flex-col px-10 py-12 rounded-[20px]  max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5  bg-gradient-to-r from-cyan-500 to-blue-500 p-6 rounded-lg shadow-lg">
            {children}
        </div>
    );
}

const Notes = ({description}) => {

    return (
        <p className="text-white">
            {"• " + description.note}
        </p>
    );
}

const Chat = ({prop,username}) => {
    const role = localStorage.getItem("role");
    // Initialize an empty array
    const [noteArray, setNoteArray] = useState([]);
    const [inputText, setInputText] = useState(''); // Initialize an empty
    const loggedInUser = localStorage.getItem("authenticated");
    const [info , setInfo] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [info2 , setInfo2] = useState([]);
    const [loaded2, setLoaded2] = useState(false);
    console.log(prop);
    const Fetchdata = ()=>{
        if(role == 'professor') {
            db.collection("notes").where("note_view", "array-contains-any", [prop.student_username]).get().then((querySnapshot) => {

                // Loop through the data and store
                // it in array to display
                querySnapshot.forEach(element => {

                    var data = element.data();
                    setInfo(arr => [...arr, data]);


                });
            })
        }else {
            db.collection("notes").where("note_view", "array-contains-any", [username]).get().then((querySnapshot) => {

                // Loop through the data and store
                // it in array to display
                querySnapshot.forEach(element => {

                    var data = element.data();
                    setInfo(arr => [...arr, data]);


                });
            })
        }
    }
    if(!loaded) {
        Fetchdata()
        setLoaded(true);
        console.log(info)

    }
    const WriteData = async (info) => {
        db.collection('notes').doc('zWGcqJOnm2DJmSaczczN').update(
                info[0]
            );

    }

        useEffect(() => {
            const data = []
            for (let element in info){
                for(let i in info[element]['notes_of_coord']) {
                    data.push(info[element]['notes_of_coord'][i])
                }
            }
            setNoteArray(data);
        }, [info]);


    const handleClick = () => {
        const newData = { id:noteArray.length , note: inputText };
        setNoteArray([...noteArray, newData]);
        setInputText(''); // Clear the input text
        info[0]['notes_of_coord'].push(newData);
        console.log(info)
        WriteData(info);


    };

    let showButton;
    if (role==='student'){
        showButton = false;
    }else {
        showButton =  true;
    }
    return(

        <Card>
            {role === 'professor' ? <h3 className="text-lg font-medium text-white">Add notes to your students</h3>
                                  : <h3 className="text-lg font-medium text-white">Notes from {prop.coordinator}:</h3>
            }

            <br></br>

            {noteArray.map(item => (
                <Notes
                    key={item.id}
                    description={item}
                />
            ))}
            <br></br>
            { showButton
            &&
            <input
                className="bg-white focus:outline-none focus:shadow-outline-blue border border-gray-300 rounded-md py-2 px-4 block w-full appearance-none leading-normal"
                type="text"
                placeholder="Enter notes here!"
                value={inputText}
                onChange={e => setInputText(e.target.value)}
            /> }
            {showButton && <br></br>}
            <div>
                { showButton
                &&
                <button
                    onClick={handleClick}
                    className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-primary rounded-md hover:bg-gradient-to-r from-cyan-500 to-blue-500 focus:outline-none focus:blue_gradient">
                Add note
            </button>
                }
            </div>
        </Card>
    );
}
export default Chat;