import React from 'react'
import Image from 'next/image'

const Loading = () => {
  return (
    <div className="page-loader">
    <Image 
      src="/assets/icons/page-spinner.svg"
      width={50}
      height={50}
      alt="spinner"
    />
    </div>
  )
}

export default Loading