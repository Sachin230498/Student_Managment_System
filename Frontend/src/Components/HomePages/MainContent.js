// import React from 'react';

// const MainContent = () => {
//   const features = [
//     "Basic to advanced-level training programs",
//     "Interview & GD Preparation",
//     "Project idea building, Implementation, and Execution",
//     "Soft skills enhancement",
//     "Comprehensive teaching methodologies",
//     "Presentation & Personality Development",
//     "Live training classes",
//     "Logic building techniques",
//     "Seminars and Workshops",
//     "Industry-ready IT expert"
//   ];

//   const Feature = ({ title, icon }) => (
//     <div className="bg-white p-4 rounded shadow flex items-center">
//       <div className={`p-2 rounded-full bg-blue-500 text-white ${icon}`}></div>
//       <h2 className="ml-4 text-lg font-semibold">{title}</h2>
//     </div>
//   );

//   return (
//     <main className="container mx-auto py-10">
//       <div className="flex flex-wrap justify-center">
//         <div className="w-full lg:w-1/2 p-4 flex flex-col items-center">
//           <img src="/path/to/your/image.png" alt="Person with laptop" className="rounded-full w-48 h-48" />
//         </div>
//         <div className="w-full lg:w-1/2 p-4">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             {features.map((feature, index) => (
//               <Feature key={index} title={feature} icon="icon-class-name" />
//             ))}
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// };

// export default MainContent;

// import React from 'react';
// import laptopgirl from '../../Assets/laptopgirl.jpg'

// const MainContent = () => {
//   const featuresLeft = [
//     "Basic to advanced-level training programs",
//     "Project idea building, Implementation, and Execution",
//     "Comprehensive teaching methodologies",
//     "Live training classes",
//     "Seminars and Workshops"
// ];

// const featuresRight = [
//     "Interview & GD Preparation",
//     "Soft skills enhancement",
//     "Presentation & Personality Development",
//     "Logic building techniques",
//     "Industry-ready IT expert"
// ];

// const FeatureList = ({ features }) => (
//   <ul className="space-y-4">
//       {features.map((feature, index) => (
//           <li key={index} className="flex items-center space-x-2">
//               <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-blue-500 text-white rounded-full">
//                   <span className="text-lg">★</span>
//               </div>
//               <span className="text-gray-700">{feature}</span>
//           </li>
//       ))}
//   </ul>
// );

//   return (
//     <div className="container mx-auto p-6">
//     <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-6">
//         <div className="md:w-1/3 space-y-4">
//             <FeatureList features={featuresLeft} />
//         </div>
//         <div className="md:w-1/3 flex justify-center">
//             <img src={laptopgirl} alt="Feature" className="w-96 h-66 rounded-xs" />
//         </div>
//         <div className="md:w-1/3 space-y-4">
//             <FeatureList features={featuresRight} />
//         </div>
//     </div>
// </div>
// );
// };
// export default MainContent;





import React from 'react';
import laptopgirl from '../../Assets/laptopgirl.jpg';

const MainContent = () => {
  const featuresLeft = [
    "Basic to advanced-level training programs",
    "Project idea building, Implementation, and Execution",
    "Comprehensive teaching methodologies",
    "Live training classes",
    "Seminars and Workshops"
  ];

  const featuresRight = [
    "Interview & GD Preparation",
    "Soft skills enhancement",
    "Presentation & Personality Development",
    "Logic building techniques",
    "Industry-ready IT expert"
  ];

  const FeatureList = ({ features, animation }) => (
    <ul className={`space-y-4 ${animation}`}>
      {features.map((feature, index) => (
        <li key={index} className="flex items-center space-x-2">
          <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-blue-500 text-white rounded-full">
            <span className="text-lg">★</span>
          </div>
          <span className="text-gray-700">{feature}</span>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Shanti Infosoft Today!</h1>
      <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-6">
        <div className="md:w-1/3 space-y-4">
          <FeatureList features={featuresLeft} animation="animate-slideInLeft" />
        </div>
        <div className="md:w-1/3 flex justify-center">
          <img src={laptopgirl} alt="Feature" className="w-96 h-66 rounded-xs" />
        </div>
        <div className="md:w-1/3 space-y-4">
          <FeatureList features={featuresRight} animation="animate-slideInRight" />
        </div>
      </div>
    </div>
  );
};

export default MainContent;
