import React from 'react';
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const AdminHome = () => {
  const areadata = [
    {
      name: 'Week 1',
      new: 3,
      active: 7,
    },
    {
      name: 'Week 2',
      new: 5,
      active: 4,
    },
    {
      name: 'Week 3',
      new: 12,
      active: 13,
    },
    {
      name: 'Week 4',
      new: 6,
      active: 23,
    },
  ];
  const donatedata = [
    {
      name: 'Week 1',
      target: 4000,
      achieve: 2400,
    },
    {
      name: 'Week 2',
      target: 3000,
      achieve: 1398,
    },
    {
      name: 'Week 3',
      target: 2000,
      achieve: 9800,
    },
    {
      name: 'Week 4',
      target: 2780,
      achieve: 3908,
    },
  ];
  const marketdata = [
    {
      name: '1',
      ammount: 4000,
    },
    {
      name: '2',
      ammount: 3000,
    },
    {
      name: '3',
      ammount: 2000,
    },
    {
      name: '4',
      ammount: 2780,
    },
    {
      name: '5',
      ammount: 1890,
    },
    {
      name: '6',
      ammount: 2390,
    },
    {
      name: '7',
      ammount: 3490,
    },
  ];
  return (
    <div className="grid grid-cols-2 gap-5 mt-6 mx-10">
      {/* user Activity */}
      <div className="space-y-3 p-4 shadow-md rounded-lg">
        <h6>User activity of this monthe</h6>
        <AreaChart
          width={620}
          height={250}
          data={areadata}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colortarget" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorachieve" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="new"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#colortarget)"
          />
          <Area
            type="monotone"
            dataKey="active"
            stroke="#82ca9d"
            fillOpacity={1}
            fill="url(#colorachieve)"
          />
        </AreaChart>
      </div>
      {/* donation Achivement */}
      <div className="space-y-3 p-4 shadow-md rounded-lg">
        <h6>Donation Target and Achive of this month</h6>
        <BarChart width={620} height={250} data={donatedata}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="achieve" fill="#8884d8" />
          <Bar dataKey="target" fill="#82ca9d" />
        </BarChart>
      </div>
      {/* Product sale in this month */}
      <div className="space-y-3 p-4 shadow-md rounded-lg">
        <h6>Last 7 days sell from market</h6>
        <LineChart
          width={620}
          height={250}
          data={marketdata}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="ammount" stroke="#82ca9d" />
        </LineChart>
      </div>
    </div>
  );
};

export default AdminHome;
