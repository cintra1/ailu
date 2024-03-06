"use client";

import React, { useState } from 'react'
import Lottie from 'react-lottie'
import animationData from '@/public/cat-simple.json'

const Animation = () => {
    const [animationState, setAnimationState] = useState({ isStopped: false, isPaused: false }); 

    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationData,
        rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
        }
    };
    
  return (
    <Lottie options={defaultOptions}
        height={200}
        width={280} />
  )
}

export default Animation