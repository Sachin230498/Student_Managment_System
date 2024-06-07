import React, { useState } from 'react'
import { IoIosNotificationsOutline } from "react-icons/io";
import ProfileOptions from './ProfileOptions';
import sss from '../../Assets/sss.jpg';





export default function Header() {
  const [isPopupOpen, setPopupOpen] = useState(false);



  const togglePopup = () => {
    setPopupOpen(!isPopupOpen);
  };


  const handlePhotoChange = (newPhoto) => {
    
    setPopupOpen(false); // Close the profile options popup after selecting a new photo
  };


  return (

    <div className="flex justify-end  mb-4">

      <div className="flex text-right gap-3  ">
        {/* <IoIosNotificationsOutline className="text-2xl" />
          <p className="cursor-pointer">Log out</p> */}
        <a onClick={togglePopup}>
        <img src={sss} alt="Sleeping" className="rounded-full h-9 w-9 " />
        </a>
      </div>

      {isPopupOpen && <ProfileOptions onClose={togglePopup} onChangePhoto={handlePhotoChange} />}

    </div>

  )
}
