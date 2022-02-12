import React, { useState } from 'react'
// import RightSide from './RightSide';
import './ApplicationMenu.css'

const ApplicationMenu = () => {

  const [active, setActive] = useState("");
  return (
    <div className='sidebar'>
    <div className='sidebar__menu'>
    <button type='button' onClick={() => setActive("NewApplication")} className={`sidebar__menu__item ${active === "NewApplication"  ? 'active' : ''}`}>New Applications</button>
    <button type='button' onClick={() => setActive("PendingApplication")} className={`sidebar__menu__item ${active === "PendingApplication" ? 'active' : ''}`}>Pending Applications</button>
    <button type='button' onClick={() => setActive("SeenApplication")} className={`sidebar__menu__item ${active === "SeenApplication" ? 'active' : ''}`}>Seen Applications</button>
    <button type='button' onClick={() => setActive("ClearedApplication")} className={`sidebar__menu__item ${active === "ClearedApplication" ? 'active' : ''}`}>Cleared Applications</button>
    </div>
    

    {/* to show  */}
    {/* <div>
    {active === "NewApplication" && <RightSide title="New" />}
    {active === "PendingApplication" && <RightSide title="Pending" />}
    {active === "SeenApplication" && <RightSide title="Seen" />}
    {active === "ClearedApplication" && <RightSide title="Cleared" />}
    </div> */}
    </div>
  )
}

export default ApplicationMenu