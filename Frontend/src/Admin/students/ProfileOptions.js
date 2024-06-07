import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
export default function ProfileOptions({ onClose, onChangePhoto }) {
  const fileInputRef = useRef(null);
  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    // Pass the selected file to the parent component
    onChangePhoto(file);
  };
  const openFileInput = () => {
    fileInputRef.current.click();
  };
  return (
    <div className="profile-options mt-8 flex flex-col items-cente">
     
      <ul className="profile-options-list mr-6 ">
       <Link to ="/settings" className="text-blue-500 hover:underline">
        <li className="profile-options-list-item " onClick={openFileInput}> Settings </li>
        </Link>
        <Link to ="/login" className="text-blue-500 hover:underline" >
        <li className="profile-options-list-item">Logout</li>
        </Link>
      </ul>

      {/* Hidden file input to handle photo selection */}
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleFileInputChange}
      />
    </div>
  );
}

