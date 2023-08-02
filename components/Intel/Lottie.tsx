'use client'
import React from 'react'
import Lottie from 'lottie-react'
import animationData from '@/public/assets/anim.json'
type Props = {}

const LottieRender = (props: Props) => {
  return (
    <Lottie animationData={animationData} />
  )
}

export default LottieRender