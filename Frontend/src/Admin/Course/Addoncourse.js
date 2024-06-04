import React ,{ useState } from 'react';
import { RxCross2 } from "react-icons/rx";

export default function Addoncourse({ onClose }) {

  const [pdfFile, setPdfFile] = useState(null);

  const handleClose = () => {
    onClose();
  };


  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type === "application/pdf") {
      const fileURL = URL.createObjectURL(file);
      setPdfFile(fileURL);
    } else {
      alert("Please select a PDF file.");
    }
  };





  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-100 bg-opacity-50 overflow-y-scroll ">

      <div className="bg-white p-4 max-w-xl mx-auto  rounded-lg mt-32">
        <div className='flex justify-end'> <button onClick={handleClose}> <RxCross2 /></button></div>

        <h3 className="text-2xl font-bold mb-4">Addon Courses</h3>

        <div className="space-y-4">

          <div className='flex space-x-4'>

            <div class="flex-1">
              <label class="block mb-1 font-medium" htmlFor="lecture-file">Lecture</label>
              <input type="file" id="lecture-file" className="w-full px-3 py-2 border rounded" />
            </div>
            
          </div>
 

          <div className='flex space-x-4'>

            <div className="flex-1">
              <label className="block mb-1 font-medium" htmlFor="notes-file">Notes</label>
              <input type="file" id="notes-file" accept="application/pdf" className="w-full px-3 py-2 border rounded" onChange={handleFileChange} />
            </div>
          </div>


          {pdfFile && (
            <div className='mt-4'>
              <iframe src={pdfFile} style={{ width: '100%', height: '500px' }} frameBorder="0"></iframe>
            </div>
          )}

        </div>



        <div className='flex justify-center items-center mb-16'>
          <button className='bg-blue-300 flex items-center text-gray-700 rounded-md mt-8 px-6 py-2'>
            Addon Course
          </button>
        </div>

      </div>

    </div>
  );
}