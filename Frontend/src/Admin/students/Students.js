
import React, { useEffect, useState } from 'react';
import { CiSearch, CiHeadphones } from "react-icons/ci";
import { IoIosArrowDropdown, IoIosArrowDropup } from "react-icons/io";
import sleep from '../../Assets/sleep.png';
import AddStudent from './AddStudent';
import Header from './Header';
import LeftNavbar from "./LeftNavbar";

export default function Students() {
  const [filter, setFilter] = useState('');
  const [search, setSearch] = useState('');
  const [showAddStud, setShowAddStud] = useState(false);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await fetch('http://localhost:8081/api/student'); 
      if (!response.ok) {
        const text = await response.text();
        throw new Error(`Network response was not ok: ${text}`);
      }
      const data = await response.json();
      console.log('Fetched students:', data);
      setStudents(data);
    } catch (error) {
      console.error('Error fetching students:', error);
    }
  };

  const handleAddStudent = async (student) => {
    console.log('Adding student:', student);
    try {
      const response = await fetch('http://localhost:8081/api/poststudent', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(student),
      });
      if (!response.ok) {
        const text = await response.text();
        throw new Error(`Network response was not ok: ${text}`);
      }
      const newStudent = await response.json();
      console.log('New student added:', newStudent);
      setStudents(prevStudents => [...prevStudents, newStudent]);
      setShowAddStud(false);
    } catch (error) {
      console.error('Error adding student:', error);
    }
  };

  return (
    <div className="flex flex-col md:flex-row">
      <LeftNavbar />

      <div className="flex flex-col flex-1 p-4 md:p-6">
        <Header />
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl md:text-3xl font-bold">Students</h2>
          <button
            onClick={() => setShowAddStud(true)}
            className="bg-blue-300 text-black px-4 py-2 rounded-lg shadow-md hover:bg-indigo-100 transition duration-300 ease-out hover:ease-in"
          >
            Add Student
          </button>
        </div>
        <div className="flex flex-col md:flex-row mb-4 space-x-0 md:space-x-2 gap-y-2">
          <div className="relative flex items-center w-full md:w-1/3">
            <IoIosArrowDropdown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              placeholder="Add Filter"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded"
            />
          </div>
          <div className="relative flex items-center justify-center w-full md:w-2/3">
            <CiSearch className="absolute left-3 text-gray-500" />
            <input
              type="text"
              placeholder="Search for a student by name or email"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-3 py-2 pl-10 border border-gray-300 rounded"
            />
          </div>
        </div>

        {students.length === 0 ? (
          <div className="flex flex-col items-center">
            <img src={sleep} alt="Sleeping" className=" md:w-90 md:h-96" />
            <h3 className="text-center text-lg md:text-xl">No students at this time</h3>
            <p className="text-center text-sm md:text-base">Students will appear here after they enroll in your academy</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b">Name</th>
                  <th className="py-2 px-4 border-b">Class</th>
                  <th className="py-2 px-4 border-b">Gender</th>
                  <th className="py-2 px-4 border-b">Email</th>
                  <th className="py-2 px-4 border-b">Phone</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student, index) => (
                  <tr key={index}>
                    <td className="py-2 px-4 border-b">{student.name}</td>
                    <td className="py-2 px-4 border-b">{student.class}</td>
                    <td className="py-2 px-4 border-b">{student.gender}</td>
                    <td className="py-2 px-4 border-b">{student.email}</td>
                    <td className="py-2 px-4 border-b">{student.phone}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <div className="flex justify-end items-center w-full gap-8 mt-4 md:mt-0 md:float-right mb-4">
          <div className="flex items-center w-fit gap-2 bg-indigo-600 rounded-lg shadow-md h-10 p-5">
            <CiHeadphones className="text-white" />
            <button className="text-white">Support</button>
            <IoIosArrowDropup className="text-2xl cursor-pointer text-white" />
          </div>
        </div>

        {showAddStud && (
          <AddStudent onClose={() => setShowAddStud(false)} onAddStudent={handleAddStudent} />
        )}
      </div>
    </div>
  );
}

