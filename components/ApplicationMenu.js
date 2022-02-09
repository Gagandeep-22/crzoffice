import { Link, useLocation, BrowserRouter, Routes, Route } from "react-router-dom";
import bg from '../images/beach.png'
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
    const [stepHeight, setStepHeight] = useState(0);
    const sidebarRef = useRef();
    const indicatorRef = useRef();
    const location = useLocation();

    useEffect(() => {
        setTimeout(() => {
            const sidebarItem = sidebarRef.current.querySelector('.sidebar__menu__item');
            indicatorRef.current.style.height = `${sidebarItem.clientHeight}px`;
            setStepHeight(sidebarItem.clientHeight);
        }, 50);
    }, []);

    //change active index
    useEffect(() => {
        const curPath = window.location.pathname.split('/')[1];
        const activeItem = sidebarNavItems.findIndex(item => item.section === curPath);
        setActiveIndex(curPath.length === 0 ? 0 : activeItem);
    }, [location]);

    return <div className='sidebar'>
    
        <div ref={sidebarRef} className="sidebar__menu">
            <div
                ref={indicatorRef}
                className="sidebar__menu__indicator"
                style={{
                    transform: `translateX(-50%) translateY(${activeIndex * stepHeight}px)`
                }}
            ></div>
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
    return <div style={{
            backgroundImage: `url(${bg})`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
            backgroundSize: 'cover',
            height: '100vh',
            // padding: '50px 0px 0px 330px'
    }}>
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
