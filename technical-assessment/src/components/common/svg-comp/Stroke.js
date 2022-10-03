import * as React from "react"

const StrokeSvg = (props) => (
  <svg
    width={10}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m1.568 1 7 7-7 7"
      stroke="#BDBDBD"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default StrokeSvg