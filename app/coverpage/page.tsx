import React from 'react'
import { Button } from "@/components/ui/button"
import Image from 'next/image'
import headerimage from '../../public/assets/headerimage.svg'


const Coverpage = () => {
  return (
    <div>
      <div className='flex flex-col h-screen'>
        <div className='flex w-auto h-[150px] items-center '>
          <div className='flex w[95px] h-[30px] mt-[1/2] ml-[70px] text-lg'>Site name</div>
          <div className='flex items-center justify-center space-x-10'>
            <div className='flex text-lg ml-[970px]'>Page</div>
            <div className='flex text-lg'>Page</div>
            <div className='flex text-lg'>Page</div>
            <Button>Button</Button>
          </div>
        </div>
        <div>
            <div className='flex position-absolute top-0 items-center justify-center'>
              <Image src={headerimage} alt='header'></Image>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Coverpage
