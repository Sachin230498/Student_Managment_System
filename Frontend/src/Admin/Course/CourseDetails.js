// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';

// export default function CourseDetails() {
//   const { id } = useParams();
//   const [courseContents, setCourseContents] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [editingContent, setEditingContent] = useState(null);
//   const [editedTitle, setEditedTitle] = useState('');
//   const [editedContent, setEditedContent] = useState('');

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
//       console.log('Fetched course details:', data); 
//       setCourseContents(data); 
//     } catch (error) {
//       console.error('Error fetching course details:', error);
//       setError('Error fetching course details. Please check the console for more information.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleEditClick = (content) => {
//     setEditingContent(content._id);
//     setEditedTitle(content.title);
//     setEditedContent(content.content);
//   };

//   const handleUpdateCourseContent = async () => {
//     const token = localStorage.getItem('token');
//     try {
//       const response = await fetch(`http://localhost:8081/api/courseContent/${editingContent}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify({
//           title: editedTitle,
//           content: editedContent,
//         }),
//       });

//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }

//       const updatedContent = await response.json();
//       setCourseContents(prevContents =>
//         prevContents.map(content => 
//           content._id === updatedContent.courseContent._id ? updatedContent.courseContent : content
//         )
//       );
//       setEditingContent(null);
//     } catch (error) {
//       console.error('Error updating course content:', error);
//       setError('Error updating course content. Please check the console for more information.');
//     }
//   };

//   const handleDeleteCourseContent = async (contentId) => {
//     const token = localStorage.getItem('token');
//     try {
//       const response = await fetch(`http://localhost:8081/api/courseContent/${id}`, {
//         method: 'DELETE',
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }

//       setCourseContents(prevContents => prevContents.filter(content => content._id !== contentId));
//     } catch (error) {
//       console.error('Error deleting course content:', error);
//       setError('Error deleting course content. Please check the console for more information.');
//     }
//   };

//   if (loading) {
//     return <div className="flex justify-center items-center h-screen"><div>Loading...</div></div>;
//   }

//   if (error) {
//     return <div className="text-red-500 text-center">{error}</div>;
//   }

//   if (courseContents.length === 0) {
//     return <div className="text-center mt-10">No course content available.</div>;
//   }

//   return (
//     <div className="container mx-auto py-10 px-4">
//       <h2 className="text-4xl font-bold mb-8 text-center">Course Content</h2>
//       <ul className="space-y-6">
//         {courseContents.map(item => (
//           <li key={item._id} className="bg-white shadow-md rounded-lg p-6 transition transform hover:-translate-y-1 hover:shadow-lg">
//             {editingContent === item._id ? (
//               <div>
//                 <input
//                   type="text"
//                   value={editedTitle}
//                   onChange={(e) => setEditedTitle(e.target.value)}
//                   className="w-full px-3 py-2 mb-4 border border-gray-300 rounded"
//                   placeholder="Edit title"
//                 />
//                 <textarea
//                   value={editedContent}
//                   onChange={(e) => setEditedContent(e.target.value)}
//                   className="w-full px-3 py-2 mb-4 border border-gray-300 rounded"
//                   rows="5"
//                   placeholder="Edit content"
//                 />
//                 <div className="flex space-x-4">
//                   <button onClick={handleUpdateCourseContent} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">Save</button>
//                   <button onClick={() => setEditingContent(null)} className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-700">Cancel</button>
//                 </div>
//               </div>
//             ) : (
//               <div>
//                 <h4 className="text-2xl font-semibold mb-2">{item.title}</h4>
//                 <p className="mb-4">{item.content}</p>
//                 {item.image && (
//                   <div className="flex justify-center mb-4">
//                     <img src={`http://localhost:8081${item.image}`} alt={item.title} className="max-w-full h-auto rounded-lg" />
//                   </div>
//                 )}
//                 <div className="flex space-x-4">
//                   <button onClick={() => handleEditClick(item)} className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-700">Edit</button>
//                   <button onClick={() => handleDeleteCourseContent(item._id)} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700">Delete</button>
//                 </div>
//               </div>
//             )}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }




// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';

// const CourseDetails = () => {
//   const { id } = useParams();
//   const [courseContents, setCourseContents] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [editingContent, setEditingContent] = useState(null);
//   const [editedTitle, setEditedTitle] = useState('');
//   const [editedContent, setEditedContent] = useState('');

//   useEffect(() => {
//     fetchCourseDetails();
//   }, [id]);

//   const fetchCourseDetails = async () => {
//     setLoading(true);
//     const token = localStorage.getItem('token');
//     console.log('Fetching course details for course ID:', id);

//     try {
//       const response = await fetch(`http://localhost:8081/api/courseContent/${id}`, {
//         method: 'GET',
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//     });

//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }

//       const data = await response.json();
//       console.log('Fetched course details:', data); 
//       setCourseContents(data); 
//     } catch (error) {
//       console.error('Error fetching course details:', error);
//       setError('Error fetching course details. Please check the console for more information.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleEditClick = (content) => {
//     setEditingContent(content._id);
//     setEditedTitle(content.title);
//     setEditedContent(content.content);
//   };

//   const handleUpdateCourseContent = async () => {
//     const token = localStorage.getItem('token');
//     try {
//       const response = await fetch(`http://localhost:8081/api/courseContent/${editingContent}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify({
//           title: editedTitle,
//           content: editedContent,
//         }),
//       });

//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }

//       const updatedContent = await response.json();
//       setCourseContents(prevContents =>
//         prevContents.map(content => 
//           content._id === updatedContent.courseContent._id ? updatedContent.courseContent : content
//         )
//       );
//       setEditingContent(null);
//     } catch (error) {
//       console.error('Error updating course content:', error);
//       setError('Error updating course content. Please check the console for more information.');
//     }
//   };

//   const handleDeleteCourseContent = async (contentId) => {
//     const token = localStorage.getItem('token');
//     try {
//       const response = await fetch(`http://localhost:8081/api/courseContent/${contentId}`, {
//         method: 'DELETE',
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }

//       setCourseContents(prevContents => prevContents.filter(content => content._id !== contentId));
//     } catch (error) {
//       console.error('Error deleting course content:', error);
//       setError('Error deleting course content. Please check the console for more information.');
//     }
//   };

//   if (loading) {
//     return <div className="flex justify-center items-center h-screen"><div>Loading...</div></div>;
//   }

//   if (error) {
//     return <div className="text-red-500 text-center">{error}</div>;
//   }

//   if (courseContents.length === 0) {
//     return <div className="text-center mt-10">No course content available.</div>;
//   }

//   return (
//     <div className="container mx-auto py-10 px-4">
//       <h2 className="text-4xl font-bold mb-8 text-center">Course Content</h2>
//       <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//         {courseContents.map(item => (
//           <div key={item._id} className="bg-white shadow-md rounded-lg p-6 transition transform hover:-translate-y-1 hover:shadow-lg">
//             <div className="mb-4">
//               {item.image && (
//                 <div className="flex justify-center mb-4">
//                   <img src={`http://localhost:8081${item.image}`} alt={item.title} className="max-w-full h-auto rounded-lg" />
//                 </div>
//               )}
//               <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
//               <p className="mb-4">{item.content}</p>
//               <div className="flex space-x-4">
//                 <button onClick={() => handleEditClick(item)} className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-700">Edit</button>
//                 <button onClick={() => handleDeleteCourseContent(item._id)} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700">Delete</button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default CourseDetails;






import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
} from '@mui/material';

const CourseDetails = () => {
  const { id } = useParams();
  const [courseContents, setCourseContents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editingContent, setEditingContent] = useState(null);
  const [editedTitle, setEditedTitle] = useState('');
  const [editedContent, setEditedContent] = useState('');
  const [open, setOpen] = useState(false);
  const [contentToDelete, setContentToDelete] = useState(null);

  useEffect(() => {
    fetchCourseDetails();
  }, [id]);

  const fetchCourseDetails = async () => {
    setLoading(true);
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
      console.log('Fetched course details:', data); 
      setCourseContents(data); 
    } catch (error) {
      console.error('Error fetching course details:', error);
      setError('Error fetching course details. Please check the console for more information.');
    } finally {
      setLoading(false);
    }
  };

  const handleEditClick = (content) => {
    setEditingContent(content._id);
    setEditedTitle(content.title);
    setEditedContent(content.content);
  };

  const handleUpdateCourseContent = async () => {
    const token = localStorage.getItem('token');
    try {
      const response = await fetch(`http://localhost:8081/api/courseContent/${editingContent}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          title: editedTitle,
          content: editedContent,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const updatedContent = await response.json();
      setCourseContents(prevContents =>
        prevContents.map(content => 
          content._id === updatedContent.courseContent._id ? updatedContent.courseContent : content
        )
      );
      setEditingContent(null);
    } catch (error) {
      console.error('Error updating course content:', error);
      setError('Error updating course content. Please check the console for more information.');
    }
  };

  const handleDeleteCourseContent = async () => {
    const token = localStorage.getItem('token');
    try {
      const response = await fetch(`http://localhost:8081/api/courseContent/${contentToDelete}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      setCourseContents(prevContents => prevContents.filter(content => content._id !== contentToDelete));
      setOpen(false);
      setContentToDelete(null);
    } catch (error) {
      console.error('Error deleting course content:', error);
      setError('Error deleting course content. Please check the console for more information.');
      setOpen(false);
    }
  };

  const handleClickOpen = (contentId) => {
    setContentToDelete(contentId);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setContentToDelete(null);
  };

  if (loading) {
    return <div className="flex justify-center items-center h-screen"><div>Loading...</div></div>;
  }

  if (error) {
    return <div className="text-red-500 text-center">{error}</div>;
  }

  if (courseContents.length === 0) {
    return <div className="text-center mt-10">No course content available.</div>;
  }

  return (
    <div className="container mx-auto py-10 px-4">
      <h2 className="text-4xl font-bold mb-8 text-center">Course Content</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {courseContents.map(item => (
          <div key={item._id} className="bg-white shadow-md rounded-lg p-6 transition transform hover:-translate-y-1 hover:shadow-lg">
            <div className="mb-4">
              {item.image && (
                <div className="flex justify-center mb-4">
                  <img src={`http://localhost:8081${item.image}`} alt={item.title} className="max-w-full h-auto rounded-lg" />
                </div>
              )}
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="mb-4">{item.content}</p>
              <div className="flex space-x-4">
                <button onClick={() => handleEditClick(item)} className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-700">Edit</button>
                <button onClick={() => handleClickOpen(item._id)} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700">Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Delete Course Content?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete this course content? This action cannot be undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleDeleteCourseContent} color="secondary" autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default CourseDetails;

