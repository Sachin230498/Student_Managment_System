import React, { useState, useEffect } from 'react';

export default function Profile() {
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [image, setImage] = useState(null);

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    const token = localStorage.getItem('token');

    try {
      const response = await fetch('http://localhost:8081/api/profile', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setProfile(data);
    } catch (error) {
      console.error('Error fetching profile:', error);
      setError('Error fetching profile. Please check the console for more information.');
    } finally {
      setLoading(false);
    }
  };

  const handleFileChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleImageUpload = async () => {
    const token = localStorage.getItem('token');
    const formData = new FormData();
    formData.append('image', image);

    try {
      const response = await fetch('http://localhost:8081/api/profile/image', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setProfile(data);
      alert('Profile image updated successfully!');
    } catch (error) {
      console.error('Error updating profile image:', error);
      alert('Error updating profile image. Please check the console for more information.');
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="container mx-auto py-10">
      <h2 className="text-3xl font-bold mb-6">Profile</h2>
      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="flex items-center space-x-6">
          {profile.image && (
            <img
              src={`http://localhost:8081/uploads/${profile.image}`}
              alt="Profile"
              className="w-32 h-32 rounded-full"
            />
          )}
          <div>
            <h4 className="text-xl font-semibold">{profile.name}</h4>
            <p className="text-gray-600">{profile.email}</p>
          </div>
        </div>
        <div className="mt-6">
          <label className="block text-sm font-bold mb-2" htmlFor="image">Upload new profile image</label>
          <input
            id="image"
            type="file"
            onChange={handleFileChange}
            className="w-full px-3 py-2 border border-gray-300 rounded"
            accept="image/*"
          />
          <button
            onClick={handleImageUpload}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          >
            Upload
          </button>
        </div>
      </div>
    </div>
  );
}
