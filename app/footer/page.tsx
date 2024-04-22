import Image from 'next/image'
import React from 'react'
import divider from '../../public/assets/divider.svg'
import facebook from '../../public/assets/facebook.svg'

const Footer = () => {
    return (
        <div>
            <div className='flex items-center justify-center mt-[100px]'>
                <Image src={divider} alt='divide'></Image>
            </div>

            <div className='text-base mt-[40px] ml-[80px]'>
                <div>
                <div className='flex flex-row space-x-4 mb-[40px]'>
                    <div className='flex flex-col space-y-20'>
                    <div className='font-semibold flex mt-[20px] ml-[80px]'>Site name</div>
                    <div className='flex flex-row ml-[70px]'>
                        <Image src={facebook} alt='facebook'></Image>
                        <Image src={facebook} alt='facebook'></Image>
                        <Image src={facebook} alt='facebook'></Image>
                        <Image src={facebook} alt='facebook'></Image>
                    </div>
                    </div>
                    <div className='flex flex-row items-center justify-center space-x-48'>
                        <div className='flex flex-col space-y-5 ml-[500px]'>
                        <div className='font-semibold'>Topic</div>
                        <div className='font-light'>Page</div>
                        <div className='font-light'>Page</div>
                        <div className='font-light'>Page</div>
                        </div>
                        <div className='flex flex-col space-y-5 ml-[500px]'>
                        <div className='font-semibold'>Topic</div>
                        <div className='font-light'>Page</div>
                        <div className='font-light'>Page</div>
                        <div className='font-light'>Page</div>
                        </div>
                        
                        <div className='flex flex-col space-y-5 ml-[500px]'>
                        <div className='font-semibold'>Topic</div>
                        <div className='font-light'>Page</div>
                        <div className='font-light'>Page</div>
                        <div className='font-light'>Page</div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
