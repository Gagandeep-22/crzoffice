import {Link, useLocation, BrowserRouter, Routes, Route} from "react-router-dom";
import { useEffect, useRef, useState } from 'react';
import './ApplicationMenu.css';

const sidebarNavItems = [
    {
        display: 'New Applications',
        to: '/newApplication',
        section: 'newApplication'
    },
    {
        display: 'Pending Applications',
        to: '/pendingApplication',
        section: 'pendingApplication'
    },
    {
        display: 'Seen Applications',
        to: '/seenApplication',
        section: 'seenApplication'
    },
    {
        display: 'Cleared Applications',
        to: '/clearedApplication',
        section: 'clearedApplication'
    },
]

const Sidebar = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const sidebarRef = useRef();
    const location = useLocation();

    //change active index
    useEffect(() => {
        const curPath = window.location.pathname.split('/')[1];
        const activeItem = sidebarNavItems.findIndex(item => item.section === curPath);
        setActiveIndex(curPath.length === 0 ? 0 : activeItem);
    }, [location]);

    return <div className='sidebar'>
    
        <div ref={sidebarRef} className="sidebar__menu">
            {
                sidebarNavItems.map((item, index) => (
                    <Link to={item.to} key={index}>
                        <div className={`sidebar__menu__item ${activeIndex === index ? 'active' : ''}`}>
                            <div className="sidebar__menu__item__text">
                                {item.display}
                            </div>
                        </div>
                    </Link>
                ))
            }
        </div>
    </div>;
};



const AppLayout = () => {
    return <div>
        <Sidebar />
    </div>;
};

function ApplicationMenu() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<AppLayout />}>
                    <Route index element={<AppLayout />} />
                    <Route path='/newApplication' element={<AppLayout />} />
                    <Route path='/pendingApplication' element={<AppLayout />} />
                    <Route path='/seenApplication' element={<AppLayout/>} />
                    <Route path='/clearedApplication' element={<AppLayout />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
export default ApplicationMenu;
