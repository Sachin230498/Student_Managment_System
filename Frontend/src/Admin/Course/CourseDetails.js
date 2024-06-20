// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';

// export default function CourseDetails() {
//     const { id } = useParams();
//     const [course, setCourse] = useState(null);
//     const [content, setContent] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         fetchCourseDetails();
//         // fetchCourseContent();
//         console.log("id",id)
//     }, [id]); // Fetch data whenever id changes

//     const fetchCourseDetails = async () => {
//         const token = localStorage.getItem('token');

//         try {
//             const response = await fetch(`http://localhost:8081/api/courseDetails/${id}`, {
//                 method: 'GET',
//                 headers: {
//                     Authorization: `Bearer ${token}`,
//                 },
//             });

//             if (!response.ok) {
//                 throw new Error(`HTTP error! Status: ${response.status}`);
//             }

//             const data = await response.json();
//             setCourse(data);
//             setLoading(false);
//         } catch (error) {
//             console.error('Error fetching course details:', error);
//             setError('Error fetching course details. Please check the console for more information.');
//             setLoading(false);
//         }
//     };

//     // const fetchCourseContent = async () => {
//     //     const token = localStorage.getItem('token');

//     //     try {
//     //         const response = await fetch(`http://localhost:8081/api/course/${id}/content`, {
//     //             method: 'GET',
//     //             headers: {
//     //                 Authorization: `Bearer ${token}`,
//     //             },
//     //         });

//     //         if (!response.ok) {
//     //             throw new Error(`HTTP error! Status: ${response.status}`);
//     //         }

//     //         const data = await response.json();
//     //         setContent(data);
//     //     } catch (error) {
//     //         console.error('Error fetching course content:', error);
//     //         setError('Error fetching course content. Please check the console for more information.');
//     //     }
//     // };

//     if (loading) {
//         return <div>Loading...</div>;
//     }

//     if (error) {
//         return <div>{error}</div>;
//     }

//     if (!course) {
//         return <div>Course not found.</div>;
//     }

//     return (
//         <div>
//             <h2>{course.title}</h2>
//             <p>{course.description}</p>
//             <h3>Content</h3>
//             <ul>
//                 {course.map(item => (
//                     <li key={item._id}>
//                         <h4>{item.title}</h4>
//                         <p>{item.content}</p>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }














// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';

// export default function CourseDetails() {
//   const { id } = useParams();
//   const [courseContents, setCourseContents] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetchCourseDetails();
//   }, [id]); 

//   const fetchCourseDetails = async () => {
//     const token = localStorage.getItem('token');
//     console.log('Fetching course details for course ID:', id);

//     try {
//       const response = await fetch(`http://localhost:8081/api/courseContent/${id}`, {
//         method: 'GET',
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }

//       const data = await response.json();
//       console.log('Fetched course details:', data); // Log the fetched data for debugging
//       setCourseContents(data); // Assuming data is an array of course content
//     } catch (error) {
//       console.error('Error fetching course details:', error);
//       setError('Error fetching course details. Please check the console for more information.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>{error}</div>;
//   }

//   if (courseContents.length === 0) {
//     return <div>No course content available.</div>;
//   }

//   return (
//     <div>
//       <h2>Course Content</h2>
//       <ul>
//         {courseContents.map(item => (
//           <li key={item._id}>
//             <h4>{item.title}</h4>
//             <p>{item.content}</p>
//             {item.image && <img src={`http://localhost:8081/${item.image}`} alt={item.title} />}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }




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
    <div>
      <h2>Course Content</h2>
      <ul>
        {courseContents.map(item => (
          <li key={item._id}>
            <h4>{item.title}</h4>
            <p>{item.content}</p>
            {item.image && <img src={`http://localhost:8081/${item.image}`} alt="photo" />}
          </li>
        ))}
      </ul>
      {/* <Addoncourse courseId={id} /> Pass the courseId to the child component */}
    </div>
  );
}










// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';

// export default function CourseDetails() {
//     const { id } = useParams();
//     const [course, setCourse] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         fetchCourseDetails();
//         console.log("id", id);
//     }, [id]); // Fetch data whenever id changes

//     const fetchCourseDetails = async () => {
//         const token = localStorage.getItem('token');

//         try {
//             const response = await fetch(`http://localhost:8081/api/courseDetails/${id}`, {
//                 method: 'GET',
//                 headers: {
//                     Authorization: `Bearer ${token}`,
//                 },
//             });

//             if (!response.ok) {
//                 throw new Error(`HTTP error! Status: ${response.status}`);
//             }

//             const data = await response.json();
//             setCourse(data);
//             setLoading(false);
//         } catch (error) {
//             console.error('Error fetching course details:', error);
//             setError('Error fetching course details. Please check the console for more information.');
//             setLoading(false);
//         }
//     };

//     if (loading) {
//         return <div>Loading...</div>;
//     }

//     if (error) {
//         return <div>{error}</div>;
//     }

//     if (!course) {
//         return <div>Course not found.</div>;
//     }

//     return (
//         <div>
//             <h2>{course.title}</h2>
//             <p>{course.description}</p>
//             <h3>Content</h3>
//             <ul>
//                 {course.content && course.content.length > 0 ? (
//                     course.content.map(item => (
//                         <li key={item._id}>
//                             <h4>{item.title}</h4>
//                             <p>{item.content}</p>
//                             {item.image && <img src={`http://localhost:8081/${item.image}`} alt={item.title} />}
//                         </li>
//                     ))
//                 ) : (
//                     <li>No content available.</li>
//                 )}
//             </ul>
//         </div>
//     );
// }
