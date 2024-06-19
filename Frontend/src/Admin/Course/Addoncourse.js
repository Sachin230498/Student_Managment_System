
// import React, { useState } from 'react';

// export default function Addoncourse({ onClose, courseId, onAddContent }) {
//   const [title, setTitle] = useState('');
//   const [content, setContent] = useState('');

//   const handleAddContent = async (e) => {
//     e.preventDefault();
//     const token = localStorage.getItem('token');

//     try {
//       const response = await fetch(`http://localhost:8081/api/courseContent`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify({ courseId, title, content }),
//       });

//       if (!response.ok) {
//         const text = await response.text();
//         throw new Error(`Network response was not ok: ${text}`);
//       }

//       const newContent = await response.json();
//       onAddContent(newContent);
//       onClose();
//     } catch (error) {
//       console.error('Error adding content:', error);
//       alert(`Error adding content: ${error.message}`);
//     }
//   };

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
//       <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
//         <h2 className="text-2xl mb-4">Add Content</h2>
//         <form onSubmit={handleAddContent}>
//           <div className="mb-4">
//             <label className="block text-sm font-bold mb-2" htmlFor="title">Title</label>
//             <input
//               id="title"
//               type="text"
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//               className="w-full px-3 py-2 border border-gray-300 rounded"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-sm font-bold mb-2" htmlFor="content">Content</label>
//             <textarea
//               id="content"
//               value={content}
//               onChange={(e) => setContent(e.target.value)}
//               className="w-full px-3 py-2 border border-gray-300 rounded"
//               required
//             />
//           </div>
//           <div className="flex justify-end">
//             <button type="button" onClick={onClose} className="bg-gray-500 text-white px-4 py-2 rounded mr-2">Cancel</button>
//             <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">Add</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }


// import React, { useState } from 'react';

// export default function Addoncourse({ onClose, courseId, onAddContent }) {
//   const [title, setTitle] = useState('');
//   const [content, setContent] = useState('');
//   const [image, setImage] = useState(null);

//   const handleFileChange = (event) => {
//     setImage(event.target.files[0]);
//   };

//   const handleAddContent = async (e) => {
//     e.preventDefault();
//     const token = localStorage.getItem('token');

//     const formData = new FormData();
//     formData.append('course', courseId);
//     formData.append('title', title);
//     formData.append('content', content);
//     if (image) {
//       formData.append('image', image);
//     }

//     try {
//       const response = await fetch(`http://localhost:8081/api/courseContent`, {
//         method: 'POST',
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//         body: formData,
//       });


//       if (!response.ok) {
//         const text = await response.text();
//         throw new Error(`Network response was not ok: ${text}`);
//       }


//       const newContent = await response.json();
//       onAddContent(newContent);
//       onClose();
//     } catch (error) {
//       console.error('Error adding content:', error);
//       alert(`Error adding content: ${error.message}`);
//       alert("hello")
//     }

//   };

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
//       <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
//         <h2 className="text-2xl mb-4">Add Content</h2>
//         <form onSubmit={handleAddContent}>
//           <div className="mb-4">
//             <label className="block text-sm font-bold mb-2" htmlFor="title">Title</label>
//             <input
//               id="title"
//               type="text"
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//               className="w-full px-3 py-2 border border-gray-300 rounded"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-sm font-bold mb-2" htmlFor="content">Content</label>
//             <textarea
//               id="content"
//               value={content}
//               onChange={(e) => setContent(e.target.value)}
//               className="w-full px-3 py-2 border border-gray-300 rounded"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-sm font-bold mb-2" htmlFor="image">Image</label>
//             <input
//               id="image"
//               type="file"
//               onChange={handleFileChange}
//               className="w-full px-3 py-2 border border-gray-300 rounded"
//               accept="image/*"
//             />
//           </div>
//           <div className="flex justify-end">
//             <button type="button" onClick={onClose} className="bg-gray-500 text-white px-4 py-2 rounded mr-2">Cancel</button>
//             <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">Add</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }





import React, { useState } from 'react';

export default function Addoncourse({ onClose, onAddContent }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);

  const handleFileChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleAddContent = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');

    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    if (image) {
      formData.append('image', image);
    }

    try {
      const response = await fetch(`http://localhost:8081/api/courseContent`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      if (!response.ok) {
        const text = await response.text();
        throw new Error(`Network response was not ok: ${text}`);
      }
      else {

        alert("Course Added successfully!!!")
      }



      const newContent = await response.json();
      onAddContent(newContent);
      onClose();
    } catch (error) {
      console.error('Error adding content:', error);
      alert(`Error adding content: ${error.message}`);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl mb-4">Add Content</h2>
        <form onSubmit={handleAddContent}>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="title">Title</label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="content">Content</label>
            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="image">Image</label>
            <input
              id="image"
              type="file"
              onChange={handleFileChange}
              className="w-full px-3 py-2 border border-gray-300 rounded"
              accept="image/*"
            />
          </div>
          <div className="flex justify-end">
            <button type="button" onClick={onClose} className="bg-gray-500 text-white px-4 py-2 rounded mr-2">Cancel</button>
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">Add</button>
          </div>
        </form>
      </div>

    </div>

  );
}