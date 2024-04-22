import React from 'react'
import Image from 'next/image'
import { Grid, Grid3x3 } from 'lucide-react'
import firstgrid from '../../public/assets/firstgrid.svg'
import secondpic from '../../public/assets/secondpic.svg'
import thirdpic from '../../public/assets/thirdpic.svg'
import fourthpic from '../../public/assets/fourthpic.svg'
import bigpic from '../../public/assets/bigpic.svg'
import big2 from '../../public/assets/big2.svg'
import big3 from '../../public/assets/big3.svg'


const Headerimage = () => {
  return (
    <div>
      <div>
      <div className='flex w-[755px] h-[44px] ml-[80px] text-3xl font-semibold mt-[60px]'>Heading</div>
      <div className='flex flex-col items-center justify-center space-y-8 mt-6'>
      <div className='flex flex-row items-center justify-center space-x-8 '>
        <div className=''>
          <Image src={firstgrid} alt='first'></Image>
          <div>Product</div>
          <div className='font-light'>Description of first product</div>
          <div>$10.99</div>
        </div>
        <div>
          <Image src={secondpic} alt='second'></Image>
          <div>Product</div>
          <div className='font-light'>Description of second product</div>
          <div>$10.99</div>
        </div>
        <div>
          <Image src={thirdpic} alt='third'></Image>
          <div>Product</div>
          <div className='font-light'>Description of third product</div>
          <div>$10.99</div>
        </div>

      </div>
      <div className='flex flex-row items-center justify-center space-x-8 '>
        <div className=''>
          <Image src={fourthpic} alt='four'></Image>
          <div>Product</div>
          <div className='font-light'>Description of fourth product</div>
          <div>$10.99</div>
        </div>
        <div>
          <Image src={firstgrid} alt='first'></Image>
          <div>Product</div>
          <div className='font-light'>Description of first product</div>
          <div>$10.99</div>
        </div>
        <div>
          <Image src={firstgrid} alt='first'></Image>
          <div>Product</div>
          <div className='font-light'>Description of first product</div>
          <div>$10.99</div>
        </div>

      </div>

      </div>
      </div>
      <div>
        <div className='flex w-[755px] h-[44px] ml-[80px] text-3xl font-semibold mt-[60px]'> Heading</div>
        <div className='flex items-center justify-center'>
          <div className='flex flex-row space-x-4'>
            <div>
              <Image src={bigpic} alt='bigpic'></Image>
            </div>
            <div className='flex flex-col space-y-4'>
              <div>
                <Image src={big2} alt='big2'></Image>
              </div>
              <div>
              <Image src={big3} alt='big3'></Image>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Headerimage
