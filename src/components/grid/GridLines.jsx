import React from 'react'
import { Scales } from "@/components/ui/scales";

const GridLines = () => {
  return (
    <>
      <div className='h-full mask-t-from-90% mask-b-from-90%'>
        <Scales size={8} className="relative w-8 border-x-2 border-border" />
      </div>
    </>
  )
}

export default GridLines
