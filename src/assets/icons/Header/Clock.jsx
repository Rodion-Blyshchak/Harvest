const Clock = ({ className }) => {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_219_2)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0 10C0 15.5225 4.4875 20 10 20C15.5225 20 20 15.5125 20 10C20 4.4775 15.5125 0 10 0C4.4775 0 0 4.4875 0 10ZM2.5 10C2.5 5.86625 5.8575 2.5 10 2.5C14.1337 2.5 17.5 5.8575 17.5 10C17.5 14.1337 14.1425 17.5 10 17.5C5.86625 17.5 2.5 14.1425 2.5 10ZM8.75 11.25H15V8.75H11.25V5H8.75V11.25Z"
        />
      </g>
      <defs>
        <clipPath id="clip0_219_2">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default Clock
