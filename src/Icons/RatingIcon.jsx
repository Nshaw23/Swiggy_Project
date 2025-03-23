import React from 'react';

const RatingIcon = () => {
  return (
    <div className="flex items-center">
      {/* SVG star icon with green color */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="green"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="green"
        className="w-4 h-4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l2.208 6.791a1 1 0 00.95.69h7.123c.969 0 1.371 1.24.588 1.81l-5.743 4.168a1 1 0 00-.364 1.118l2.208 6.792c.3.921-.755 1.688-1.54 1.118l-5.744-4.168a1 1 0 00-1.175 0l-5.744 4.168c-.784.57-1.839-.197-1.539-1.118l2.208-6.792a1 1 0 00-.364-1.118L2.385 11.22c-.784-.57-.381-1.81.588-1.81h7.122a1 1 0 00.95-.69l2.208-6.791z"
        />
      </svg>

      {/* Sample Rating Value */}
      <span className=" text-green-600 text-lg"></span>
    </div>
  );
};

export default RatingIcon;
