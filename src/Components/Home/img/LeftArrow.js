import React from "react";

function LeftArrow() {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        fill="none"
        viewBox="0 0 28 28"
      >
        <path
          fill="#fff"
          d="M14 28c7.732 0 14-6.268 14-14S21.732 0 14 0 0 6.268 0 14s6.268 14 14 14z"
          opacity="0.1"
        ></path>
        <path
          fill="#fff"
          fillRule="evenodd"
          d="M16.002 8.666l.534.54a.925.925 0 01.264.653c0 .254-.088.47-.264.647L13.072 14l3.464 3.494a.885.885 0 01.264.647c0 .249-.088.467-.264.654l-.534.532a.881.881 0 01-.65.273.844.844 0 01-.64-.273l-4.641-4.68A.858.858 0 019.8 14c0-.254.09-.472.27-.654l4.64-4.68a.87.87 0 01.642-.266.91.91 0 01.649.266z"
          clipRule="evenodd"
          opacity="0.4"
        ></path>
      </svg>
    </div>
  );
}

export default LeftArrow;
