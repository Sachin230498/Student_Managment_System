import React from 'react'
import { IoIosNotificationsOutline } from "react-icons/io";


export default function Header() {
  return (
    
      <div className="flex justify-end  mb-4">
        <div className="flex text-right gap-3 ">
          <IoIosNotificationsOutline className="text-2xl" />
          <p className="cursor-pointer">Log out</p>
        </div>
      </div>
    
  )
}
