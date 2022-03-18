import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LabelList} from 'recharts';
import './Stats_page.css'

export default function Stats_page() {
  const pdata = [
    {
      name: 'Commercial Conv.',
      new: 4,
      seen: 3,
      pending: 3,
      cleared: 10
    },
    {
      name: 'Comm. Const.',
      new: 6,
      seen: 3,
      pending: 3,
      cleared: 10
    },
    {
      name: 'Residential Conv.',
      new: 8,
      seen: 3,
      pending: 3,
      cleared: 10
    },
    {
      name: 'Res. Const.',
      new: 13,
      seen: 3,
      pending: 3,
      cleared: 10
    },

  ]
  return (
    <>
      <h1 className='Heading'>Statistics Chart</h1>
      <div className="chartcontainer">
        <ResponsiveContainer width="60%" aspect={2}>
          <BarChart data={pdata} Width={200} height={100} margin={{ top: 23, right: 33, left: 23, bottom: 5 }} className='chart'>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" interval={'preserveStartEnd'} />
            <YAxis label={{ value: 'no. of applications', angle: -90 }} />
            <Legend />
            <Tooltip />
            <Bar dataKey="new" fill='blue' >
              <LabelList dataKey="new" position="top" />
            </Bar>
            <Bar dataKey="seen" fill='green' >
              <LabelList dataKey="seen" position="top" />
            </Bar>
            <Bar dataKey="pending" fill='purple' >
              <LabelList dataKey="pending" position="top" />
            </Bar>
            <Bar dataKey="cleared" fill='black' >
              <LabelList dataKey="cleared" position="top" />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
        <form action="form.js" className='Form'>
          <label className='tb'><b>Enter Time Period:</b></label>
          <input type="date" placeholder='Start date' className='tb'name="start" id="start" />
          <br />
          <input type="date" placeholder='End date' className='tb' name ="end" id="end" />
        </form>
      </div>
    </>
  )
}

