'use client'
import React from 'react'
import Lottie from 'lottie-react'
import animationData from '@/public/assets/anim.json'


const LottieRender = () => {
  return (
    <Lottie animationData={animationData} />
  )
}

export default LottieRender