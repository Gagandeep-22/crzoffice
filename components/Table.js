import React from 'react'
import './Table.css';

function Table() {
  return (
    <div className='TableContainer'>
      <h1>Statistics</h1>
      <table >
        <thead>
          <tr className='cl2'>
            <th>Application Type</th>
            <th>New</th>
            <th>Seen</th>
            <th>Pending</th>
            <th>Cleared</th>
          </tr>
        </thead>
        <tbody>
          <tr className='cl1'>
            <td><b>Residential Conversion</b></td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>

          <tr className='cl2'>
            <td><b>Residential Construction</b></td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>

          <tr className='cl1'>
            <td><b>Commercial Conversion</b></td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>

          <tr className='cl2'>
            <td><b>Commercial Construction</b></td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
        </tbody>
      </table>

    </div>
  )
}

export default Table
