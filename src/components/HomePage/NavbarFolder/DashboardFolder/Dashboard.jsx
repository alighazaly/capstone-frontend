import React, { useState } from 'react';
import { HiMenuAlt3 } from "react-icons/hi";
import { HiMiniUsers } from "react-icons/hi2";
import { VscFeedback } from "react-icons/vsc";
import { FaChartLine } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { MdOutlineDashboard } from "react-icons/md";
import UsersPage from './UsersPage';
import FeedbacksPage from './FeedbacksPage';
import StatisticsPage from './StatisticsPage';

const Dashboard = () => {
    const menus = [
        {name:"Dashboard",link: '/', icon: MdOutlineDashboard},
        {name:"Users", icon: HiMiniUsers},
        {name:"Feedbacks", icon: VscFeedback},
        {name:"Statistics", icon: FaChartLine}
    ]

    const renderMenuItem = (name) => {
        switch (name) {
            case 'Users':
                return <UsersPage />;
            case 'Feedbacks':
                return <FeedbacksPage />;
            case 'Statistics':
                return <StatisticsPage />;
            // Add more cases as needed
            default:
                return null;
        }
    };

    const [name, setName] = useState("Statistics"); // Initial state should be a string
    const [open, setOpen] = useState(true);

    return (
        <section className='flex gap-6 bg-[#464646]'>
            <div className={`bg-[#000000] min-h-screen ${open ? 'w-72':'w-16'} duration-500 text-gray-100 px-4`}>
                <div className='py-3 flex justify-end'>
                    <HiMenuAlt3 size={26} className='cursor-pointer' onClick={() => setOpen(!open)} />
                </div>
                <div className='mt-4 flex flex-col gap-4 relative'>
                {
                    menus?.map((menu,i) => (
                        <Link to={menu?.link} key={i} className='group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md' onClick={() => setName(menu.name)}>
                        <div>
                            {React.createElement(menu?.icon,{size:'20'})}
                        </div>
                        <h2 style={{transitionDelay: `${i + 3}00ms`}} className={`whitespace-pre duration-500 ${!open && 'opacity-0 translate-x-28 overflow-hidden'}`}>{menu?.name}</h2>
                        <h2 className={`${open && 'hidden'} absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}>{menu?.name}</h2>
                    </Link>
                    ))
                    
                }  
                </div>
            </div>
            <div className='flex-grow m-3 font-semibold w-[70%]'>
                {renderMenuItem(name)}
            </div>
        </section>
    );
}

export default Dashboard;
