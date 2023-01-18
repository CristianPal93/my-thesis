import React from 'react';
import { format } from 'date-fns'


function Card({ children }) {
    return (
        <div className="flex justify-between flex-col px-10 py-12 rounded-[20px]  max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5  bg-gradient-to-r from-cyan-500 to-blue-500 p-6 rounded-lg shadow-lg">
            {children}
        </div>
    );
}
// title: 'React Meetup',
//     date: new Date('Jan 20, 2022'),
//     description:
function EventCalendar({ title, date, description}) {
    const weekday = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
    const months = {
        0: 'Jan',
        1: 'Feb',
        2: 'Mar',
        3: 'Apr',
        4: 'May',
        5: 'Jun',
        6: 'Jul',
        7: 'Aug',
        8: 'Sep',
        9: 'Oct',
        10: 'Nov',
        11: 'Dec',
    }

    let date_num = date.getDate();
    let month = months[date.getMonth()];
    let day = weekday[date.getDay()]
    let year = date.getFullYear();
    let new_date = day+" "+date_num+", "+month+" "+year;
    return (
        <Card>
            <h3 className="text-lg font-medium text-white">{title}</h3>
            <h2 className="text-gray-300">{new_date}</h2>
            <br></br>
            <p className="text-white">
                {description}
            </p>
        </Card>

);
}

export default EventCalendar;

// <div className="bg-white rounded-lg p-6">
//     <img src={article.image} alt={article.title} className="h-48 w-full object-cover rounded-t-lg" />
//     <div className="pt-4">
//         <h3 className="text-xl font-medium">{article.title}</h3>
//         <p className="text-gray-600">{article.description}</p>
//         <div className="pt-4">
//             <button className="bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600">Read more</button>
//         </div>
//     </div>
// </div>