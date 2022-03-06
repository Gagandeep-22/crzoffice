import React from 'react'
import { Form } from 'reactstrap';
import './Doclist.css';

function list(props) {
  return (
    <div className="di">
        {/* <h2 class="h">Mark the Requisite Documents</h2> */}
        <Form>
        <ul type="none" className="unli">
            <li className="oli">
                <input type="checkbox" onChange={props.onChange}
                value='Upload document showing existence of road/authorised structure constructed prior to 19/02/1991 towards seaward side of the project site'/>
                Upload document showing existence of road/authorised structure constructed prior to 19/02/1991 towards seaward side of the project site
            </li>
            <li className="oli">
                <input type="checkbox" onChange={props.onChange}
                value='Upload document showing construction of proposed building prior to 19/02/1991'/>
                Upload document showing construction of proposed building prior to 19/02/1991
            </li>
            <li className="oli">
                <input type="checkbox" onChange={props.onChange}
                value='Upload NOC from Karnataka state pollution control board'/>
                Upload NOC from Karnataka state pollution control board
            </li>
            <li className="oli">
                <input type="checkbox" onChange={props.onChange}
                value='Upload document showing plint area, FAR and density of the proposed building constructed before 19/02/1991'/>
                Upload document showing plint area, FAR and density of the proposed building constructed before 19/02/1991
            </li>
            <li className="oli"><input type="checkbox" onChange={props.onChange}
                value='Doc5'/>Upload project report with cost estimate and layout plan</li>
            <li className="oli"><input type="checkbox" onChange={props.onChange}
                value='Doc6'/>Rapid EIA report including marine ansd terrestrial component except for construction projects listed under 4(c) and (d)- submit physically</li>
            <li className="oli"><input type="checkbox" onChange={props.onChange}
                value='Doc7'/>Comprehensive EIA with cumulative studies for projects in the stretches classified as low and medium eroding by MOEF based on scientific studies and in consultation with the State Government - submit physically</li>
            <li className="oli"><input type="checkbox" onChange={props.onChange}
                value='Doc8'/>Disaster management report, Risk assessment reoport and management plan -submit physically</li>
            <li className="oli"><input type="checkbox" onChange={props.onChange}
                value='Doc9'/>CRZ map indicating HTL and LTL demarcated by one of the authorized agency(as indicated in para 2) in 1:4000 scale - submit physiacally</li>
            
            <li className="oli"><input type="checkbox" onChange={props.onChange}
                value='Doc10'/>Project layout super imposed on the aforesaid CRZ map of 1:4000 scale-submit physically</li>
            <li className="oli"><input type="checkbox" onChange={props.onChange}
                value='Doc11'/>CRZ map indicating CRZ I,II,III and IV areas including other notified ecologically sensitive areas- submit physically</li>
            <li className="oli"><input type="checkbox" onChange={props.onChange}
                value='Doc12'/>CRZ map normally covering 7km radius around the project site - submit phsically</li>
            <li className="oli"><input type="checkbox" onChange={props.onChange}
                value='Doc13'/>Challan for balance amount of Rs.</li>
            <li className="oli"><input type="checkbox" onChange={props.onChange}
                value='Doc14'/>Upload others</li>
        </ul>
      </Form>
    </div>
  )
}

export default list
