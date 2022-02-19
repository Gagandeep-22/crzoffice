import React, { useState } from 'react'
// import RightSide from './RightSide';
import './ApplicationMenu.css';
import Box from './Box';
import  Search  from './Search';
const ApplicationMenu = () => {

  const [active, setActive] = useState("");
  return (
    <>
    <div className='sidebar'>
      <div className='sidebar__menu'>
        <button type='button' onClick={() => setActive("NewApplication")} className={`sidebar__menu__item ${active === "NewApplication"  ? 'active' : ''}`}>New Applications</button>
        <button type='button' onClick={() => setActive("PendingApplication")} className={`sidebar__menu__item ${active === "PendingApplication" ? 'active' : ''}`}>Pending Applications</button>
        <button type='button' onClick={() => setActive("SeenApplication")} className={`sidebar__menu__item ${active === "SeenApplication" ? 'active' : ''}`}>Seen Applications</button>
        <button type='button' onClick={() => setActive("ClearedApplication")} className={`sidebar__menu__item ${active === "ClearedApplication" ? 'active' : ''}`}>Cleared Applications</button>
      </div>
    </div>
    <Box/>
    <Search/>
    </>
  )
}

export default ApplicationMenu