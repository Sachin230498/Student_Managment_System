import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Addoncourse from './Addoncourse'; // Adjust the path as per your project structure

export default function CourseDetails() {
  const { id } = useParams();
  const [courseContents, setCourseContents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    fetchCourseDetails();
  }, [id]);

  const fetchCourseDetails = async () => {
    const token = localStorage.getItem('token');
    console.log('Fetching course details for course ID:', id);

    try {
      const response = await fetch(`http://localhost:8081/api/courseContent/${id}`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Fetched course details:', data); // Log the fetched data for debugging
      setCourseContents(data); // Assuming data is an array of course content
    } catch (error) {
      console.error('Error fetching course details:', error);
      setError('Error fetching course details. Please check the console for more information.');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (courseContents.length === 0) {
    return <div>No course content available.</div>;
  }

  return (
//     <div>
//       <h2>Course Content</h2>
//       <ul>
//         {courseContents.map(item => (
//           <li key={item._id}>
//             <h4>{item.title}</h4>
//             <p>{item.content}</p>
//             {item.image && <img src={`http://localhost:8081/${item.image}`} alt="photo" />}
//           </li>
//         ))}
//       </ul>
//       {/* <Addoncourse courseId={id} /> Pass the courseId to the child component */}
//     </div>
//   );
// }
<div className="container mx-auto py-10">
      <h2 className="text-3xl font-bold mb-6">Course Content</h2>
      <ul className="space-y-6">
        {courseContents.map(item => (
          <li key={item._id} className="bg-white shadow-md rounded-lg p-6">
            <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
            <p className="mb-4">{item.content}</p>
            {item.image && (
              <div className="flex justify-center">
                <img src={`http://localhost:8081/${item.image}`} alt={item.title} className="max-w-full h-auto" />
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}