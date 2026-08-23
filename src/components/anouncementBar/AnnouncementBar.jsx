// import React, { useState } from 'react';

// export default function AnnouncementBar() {
//   const [isVisible, setIsVisible] = useState(true);

//   if (!isVisible) return null;

//   return (
//     <div className="w-full bg-black text-white relative px-4 py-3 sm:py-2.5 transition-all duration-300 ease-in-out">
//       <div className="max-w-7xl mx-auto flex items-center justify-center text-center">
//         {/* Main Announcement Message */}
//         <p className="text-xs sm:text-sm font-normal tracking-wide pr-6 sm:pr-0 selection:bg-white selection:text-black">
//           Sign up and get 20% off to your first order.{" "}
//           <a
//             href="#signup"
//             className="font-medium underline decoration-1 underline-offset-4 hover:text-gray-300 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black rounded"
//           >
//             Sign Up Now
//           </a>
//         </p>
//       </div>

//       {/* Interactive Close Dismiss Button */}
//       <button
//         onClick={() => setIsVisible(false)}
//         className="absolute right-3 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 p-1 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white"
//         aria-label="Dismiss announcement"
//       >
//         <svg
//           xmlns="http://w3.org"
//           fill="none"
//           viewBox="0 0 24 24"
//           strokeWidth={1.5}
//           stroke="currentColor"
//           className="w-4 h-4 sm:w-[18px] sm:h-[18px]"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M6 18L18 6M6 6l12 12"
//           />
//         </svg>
//       </button>
//     </div>
//   );
// }




import React, { useState } from 'react';
import './AnnouncementBar.css'; // Importing your custom styles

export default function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="announcement-bar">
      <div className="announcement-container">
        {/* Main Announcement Message */}
        <p className="announcement-text">
          Sign up and get 20% off to your first order.{" "}
          <a href="#signup" className="announcement-link">
            Sign Up Now
          </a>
        </p>
      </div>

      {/* Interactive Close Dismiss Button */}
      <button
        onClick={() => setIsVisible(false)}
        className="announcement-close-btn"
        aria-label="Dismiss announcement"
      >
        <svg
          xmlns="http://w3.org"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="close-icon"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
}
