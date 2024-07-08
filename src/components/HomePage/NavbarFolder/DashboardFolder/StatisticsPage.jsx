import React from 'react';
import { LineChart, Line, BarChart, Bar, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const StatisticsPage = () => {
  const generateRandomData = () => {
    const data = [];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    for (let i = 0; i < months.length; i++) {
      const bookings = Math.floor(Math.random() * (100 - 50 + 1)) + 50; // Random bookings between 50 and 100
      const revenue = Math.floor(Math.random() * (30000 - 10000 + 1)) + 10000; // Random revenue between 10000 and 30000
      const occupancyRate = Math.floor(Math.random() * (100 - 60 + 1)) + 60; // Random occupancy rate between 60% and 100%
      data.push({ month: months[i], bookings, revenue, occupancyRate });
    }
    return data;
  };

  const data = generateRandomData();

  return (
    <div>
      <p className='text-white font-semibold sm:text-2xl md:text-3xl'>Statistics:</p>
      {/* Line Chart */}
      <div className="mb-6">
        <h2 className="text-white font-semibold sm:text-xl md:text-2xl mb-6">Bookings Over Months</h2>
        <LineChart width={800} height={300} data={data}>
          <XAxis dataKey="month" />
          <YAxis />
          <CartesianGrid stroke="#ccc" />
          <Tooltip />
          <Line type="monotone" dataKey="bookings" stroke="#8884d8" />
        </LineChart>
      </div>

      {/* Bar Chart */}
      <div className="mb-6">
        <p className='text-white font-semibold sm:text-xl md:text-2xl mb-6'>Revenue Over Months</p>
        <BarChart width={800} height={300} data={data}>
          <XAxis dataKey="month" />
          <YAxis />
          <CartesianGrid stroke="#ccc" />
          <Tooltip />
          <Legend />
          <Bar dataKey="revenue" fill="#003740" />
        </BarChart>
      </div>

      {/* Area Chart */}
      <div className="mb-6">
        <p className='text-white font-semibold sm:text-xl md:text-2xl mb-6'>Occupancy Rate Over Months</p>
        <AreaChart width={800} height={300} data={data}>
          <XAxis dataKey="month" />
          <YAxis />
          <CartesianGrid stroke="#ccc" />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="occupancyRate" fill="#8884d8" />
        </AreaChart>
      </div>
    </div>
  );
};

export default StatisticsPage;
