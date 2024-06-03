
import React from 'react';
import LeftNavbar from './students/LeftNavbar';
import Header from './students/Header';
import { PiStudentFill } from "react-icons/pi";
import { GrUserWorker } from "react-icons/gr";
import { MdOutlineMenuBook } from "react-icons/md";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Dashboard = () => {
  const studentsPercentage = 50; 
  const instructorsPercentage = 30; 
  const coursesPercentage = 20; 

  return (
    <div className="flex flex-col md:flex-row">
      <LeftNavbar />

      <div className="flex flex-col flex-1 p-4 md:p-6">
        <Header />
        <div className="flex flex-col p-6 space-y-6">
          <header className="flex-col items-center mb-6">
            <h1 className="text-3xl font-bold">Welcome guys.</h1>
            <p className='mb-10'> Navigate the future of education with Shanti Academy</p>
            <div className="flex items-center space-x-10">
              <div className="flex bg-purple-200 rounded-xl w-80 p-4">
                <div className="flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold">Students</h3>
                  <p className="text-2xl">{studentsPercentage}%</p>
                </div>
                <div className='flex items-center'>
                  <PiStudentFill style={{ fontSize: '2rem' }} />
                </div>
              </div>

              <div className="flex bg-blue-200 rounded-xl w-80 p-4">
                <div className="flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold">Instructor</h3>
                  <p className="text-2xl">{instructorsPercentage}%</p>
                </div>
                <div className="flex items-center">
                  <GrUserWorker style={{ fontSize: '2rem' }} />
                </div>
              </div>

              <div className="flex bg-orange-200 rounded-xl w-80 p-4">
                <div className="flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold">Courses</h3>
                  <p className="text-2xl">{coursesPercentage}%</p>
                </div>
                <div className="flex items-center">
                  <MdOutlineMenuBook style={{ fontSize: '2rem' }} />
                </div>
              </div>
            </div>
          </header>

          <div className="grid grid-cols-2 gap-6">
            <div className="p-6 bg-white shadow rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Class Routine</h2>
              <div className="space-y-4">
                <select className="w-full p-2 border rounded">
                  <option>Select your day</option>
                </select>
                <select className="w-full p-2 border rounded">
                  <option>Select your class</option>
                </select>
                <select className="w-full p-2 border rounded">
                  <option>Section</option>
                </select>
                <button className="w-full p-2 bg-blue-300 text-black rounded shadow-md hover:bg-indigo-200">Download routine (pdf)</button>
              </div>
            </div>

            <div className="p-6 bg-white shadow rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Course Statistics</h2>
              <div className="flex justify-center items-center h-48">
                <div style={{ width: '100px' }}>
                  <CircularProgressbar
                    value={studentsPercentage}
                    text={`${studentsPercentage}%`}
                    styles={buildStyles({
                      textColor: "#000",
                      pathColor: "#3182ce", // Blue for students
                      trailColor: "#e5e7eb",
                      textSize: "16px"
                    })}
                  />
                </div>
              </div>
            </div>

            <div className="p-6 bg-white shadow rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Star Students</h2>
              <table className="w-full border">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="p-2 border">Name</th>
                    <th className="p-2 border">ID</th>
                    <th className="p-2 border">Marks</th>
                    <th className="p-2 border">Percent</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-2 border">Evelyn Harper</td>
                    <td className="p-2 border">PRE43178</td>
                    <td className="p-2 border">1185</td>
                    <td className="p-2 border">98%</td>
                  </tr>
                  <tr>
                    <td className="p-2 border">Diana Plenty</td>
                    <td className="p-2 border">PRE43174</td>
                    <td className="p-2 border">1165</td>
                    <td className="p-2 border">99%</td>
                  </tr>
                  <tr>
                    <td className="p-2 border">John Millar</td>
                    <td className="p-2 border">PRE43187</td>
                    <td className="p-2 border">1175</td>
                    <td className="p-2 border">99%</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="p-6 bg-white shadow rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Total Exams</h2>
              <p className="text-xl">256</p>
              <a href="#" className="text-blue-500">View details</a>
            </div>

            <div className="p-6 bg-white shadow rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Best Performers</h2>
              <div className="flex justify-center items-center h-32 bg-gray-200 rounded">Top students here</div>
            </div>

            <div className="p-6 bg-white shadow rounded-lg">
              <h2 className="text-2xl font-bold mb-4">New Course</h2>
              <p className="mb-4">Build your career with API</p>
              <button className="w-full p-2 bg-blue-500 text-white rounded">Enroll Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
