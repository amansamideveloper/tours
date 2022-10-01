import Head from 'next/head'
import { useState } from 'react'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { BeakerIcon, GlobeAltIcon, ChevronDownIcon, UserIcon, MagnifyingGlassIcon, CalendarDaysIcon, CurrencyDollarIcon, Bars4Icon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
export default function Home() {

  const [click, setClick] = useState(false)

  const handleClick = function () {
    console.log('clicked')
    setClick(!click)

  }

  return (
    <div className=''>
      <div className='h-200px md:h-600px'>
        <div className="bg-[url('/img/010706_1.jpg')] bg-cover rounded-t-3xl bg-no-repeat m-2 md:m-5 md:rounded-t-3xl md:h-full">
          <div className=' text-white rounded-lg'>
            <div className=''>


              <div className="flex  md:p-5 md:flex justify-between md:align-baseline ">
                <div className="hidden md:block">
                  <div className='flex justify-between'>
                    <div className='mr-10'>
                      <h2 className=' text-base'>Group trips</h2>
                    </div>
                    <div className='mr-10'>
                      <h2 className=' text-base'>Private trips</h2>
                    </div>
                    <div className='mr-10'>
                      <h2 className=' text-base'>Past trips and reviews</h2>
                    </div>

                  </div>
                </div>
                <div className='py-2'>
                  <h1 className='text-lg font-display text-white font-sans md:text-3xl ml-6 '>A<span className='text-white tracking-widest'>man Travels</span></h1>
                </div>
                <div className='hidden md:block '>
                  <ul className='flex justify-between align-baseline'>
                    <li className='mr-10  text-base'>About us</li>
                    <li className='mr-10  text-base'>Blog</li>
                    <li className='mr-10  text-base'>Contact us</li>
                    <li className='mr-10 text-base rounded-md border-white border '>
                      <MagnifyingGlassIcon className='h-3 w-3 mx-3 my-2 font-bold' />
                    </li>
                    <li className='mr-10 text-base border-white border rounded-md flex justify-between align-baseline'>
                      <UserIcon className=' h-5 w-5 mx-1 mt-1' />
                      <button className='text-base mx-1'>Login</button>
                    </li>

                  </ul>
                </div>

                {!click ? (
                  <div className='mr-5 block md:hidden' onClick={handleClick}>
                    <Bars3Icon className='w-10 h-10' />
                  </div>
                ) : (

                  <div className='mr-5 block md:hidden' onClick={handleClick}>
                    <XMarkIcon className='w-10 h-10' />

                  </div>
                )}
                {click && (
                  <div className='top-11 right-0 absolute z-10   bg-gray-600 bg-opacity-50 md:hidden  rounded-bl-md'>
                    <ul className='p-4'>
                      <li className='text-base py-1'>About us</li>
                      <li className='text-base py-1'>Blog</li>
                      <li className=' text-base py-1'>Contact us</li>
                      <li className=' text-base py-1 flex justify-between align-baseline'>
                        <MagnifyingGlassIcon className='h-4 w-4 ' />
                        <button className='text-base mx-1'>Search</button>
                      </li>
                      <li className='flex py-1 justify-between align-baseline'>
                        <UserIcon className=' h-5 w-5' />
                        <button className='text-base mx-1'>Login</button>
                      </li>

                    </ul>
                  </div>
                )}
              </div>
              <div className='w-100 h-px bg-white'></div>
            </div>
            <div className='mt-20 w-96 py-20'>
              <h1 className='text-md md:text-6xl leading-6 p-2 md:p-5 font-bold tracking-wide'>Group trips</h1>
              <p className='p-2 md:p-5 font--apple-system'>Lorem ipsum dolorl neque et dictum. Pellentesque rhoncus leo a mattis viverra. Nullam ut velit egestas, sagittis lorem nec, eleifend augue. Proin dui sem, congue sit amet nunc eget,</p>
            </div>
          </div>

        </div>
      </div>
      <div className='  md:m-5  md:border-1 md:p-5 bg-slate-50 shadow'>
        <div className='flex justify-center md:justify-between mx-2'>
          <div className='flex justify-around mr-10 px-2 w-1/2'>
            <div className='flex  border-r border-yellow-500 p-2 justify-center text-base'>
              <GlobeAltIcon className='hidden md:block md:w-5 md:h-5 mr-1' />
              <p className='text-sm'>Asia</p>
              <ChevronDownIcon className='hidden md:block md:w-5 md:h-5' />
            </div>
            <div className='flex border-r border-yellow-500 p-2 '>
              <CalendarDaysIcon className=' hidden md:block md:w-5 md:h-5' />
              <p className='text-sm'>2022</p>
              <ChevronDownIcon className='hidden md:block md:w-5 md:h-5' />
            </div>
            <div className='flex border-r border-yellow-500 p-2 justify-between'>
              <CalendarDaysIcon className='hidden md:block md:w-5 md:h-5 mr-1' />
              <p className='text-sm'>2 month</p>
              <ChevronDownIcon className='hidden md:block md:w-5 md:h-5' />
            </div>
            <div className='flex border-r border-yellow-500 p-2'>
              <CurrencyDollarIcon className='hidden md:block md:w-5 md:h-5 mr-1' />
              <p className='text-sm'>2022</p>
              <ChevronDownIcon className='hidden md:block md:w-5 md:h-5' />
            </div>
            <div className='flex border-r border-yellow-500 p-2'>
              <Bars4Icon className='hidden md:block  md:w-5 md:h-5 mr-1' />
              <p className='text-sm'>Categories</p>
              <ChevronDownIcon className='hidden md:block md:w-5 md:h-5 mr-1' />
            </div>
          </div>
          <div className='flex  py-1 my-1 md:px-5 md:py-2 bg-slate-800 rounded-md mr-10'>
            <h3 className='text-yellow-500 md:text-base font-semibold px-2'>Search</h3>
          </div>
        </div>
      </div>
      <div className='md:m-5 md:p-5'>
        <div className='h-[16rem] mt-5 flex justify-between relative md:p-5 md:h-[34rem]'>
          <div className='basis-1/3 rounded-lg md:rounded-3xl  relative mx-4 shadow-lg'>
            <div className='flex absolute z-10 justify-between align-baseline m-1 md:m-3 text-white text-sm md:font-semibold'>
              <h4 className='bg-slate-300 bg-opacity-30 px-[1.2px] m-1 md:m-2 md:p-2 rounded-md'>Luxe Living</h4>
              <h4 className='bg-slate-300 bg-opacity-30 px-[1.2px] m-1  md:m-2 md:p-2 rounded-md'>Culture</h4>
            </div>
            <div className='absolute z-10 bottom-1 md:bottom-2 m-2 md:m-4 text-white '>
              <p className='font-thin md:text-sm text-[10px]'>january 8th - january 13th</p>
              <h1 className='text-lg md:text-2xl'>We Love Italy</h1>
            </div>
            <img src='/img/010706_1-24.jpg' className='rounded-lg md:rounded-3xl object-cover absolute h-[15.9rem] md:h-[32rem]' alt='visit' />
          </div>
          <div className='basis-1/3 rounded-lg md:rounded-3xl  relative mx-4 shadow-lg '>
            <div className='flex absolute z-10 justify-between align-baseline m-1 md:m-3 text-white text-sm md:font-semibold'>
              <h4 className='bg-slate-300 bg-opacity-30 px-[1.2px] m-1 md:m-2 md:p-2 rounded-md'>Ball </h4>
              <h4 className='bg-slate-300 bg-opacity-30 px-[1.2px] m-1 md:m-2 md:p-2 rounded-md'>Spring</h4>
            </div>
            <div className='absolute z-10 bottom-1 md:bottom-2 m-2 md:m-4 text-white'>
              <p className='font-thin md:text-sm text-[10px]'>january 8th - january 13th</p>
              <h1 className=' text-lg md:text-2xl'>Spring-break in Bali</h1>
            </div>
            <img src='/img/010706_1.jpg' className=' rounded-lg md:rounded-3xl object-cover absolute h-[15.9rem] md:h-[32rem]' alt='visit' />
          </div>
          <div className='basis-1/3 rounded-3xl  relative mx-4 shadow-lg'>
            <div className='flex absolute z-10 justify-between align-baseline m-1 md:m-3 text-white text-sm md:font-semibold'>
              <h4 className='bg-slate-300 bg-opacity-30 px-[1.2px] m-1 md:m-2 md:p-2 rounded-md'>Luxe Living</h4>
              <h4 className='bg-slate-300 bg-opacity-30 px-[1.2px] m-1 md:m-2 md:p-2 rounded-md'>Island</h4>
            </div>
            <div className='absolute z-10 bottom-1 md:bottom-2 m-2 md:m-4 text-white '>
              <p className='font-thin md:text-sm text-[10px]'>january 8th - january 13th</p>
              <h1 className=' text-lg md:text-2xl'>Luxe Greek getaway</h1>
            </div>
            <img src='/img/040706_1_.jpg' className='rounded-lg md:rounded-3xl object-cover absolute h-[15.9rem] md:h-[32rem]' alt='visit' />
          </div>

        </div>
        <div className='flex mt-5 justify-between md:p-5 h-[16rem] md:h-[34rem]'>
          <div className='basis-1/3 rounded-md   relative mx-4 shadow-lg'>
            <div className='flex absolute z-10 justify-between align-baseline m-1 md:m-3 text-white text-sm md:font-semibold'>
              <h4 className='bg-slate-300 bg-opacity-30 px-[1.2px] m-1 md:m-2 md:p-2 rounded-md'>Luxe Living</h4>
              <h4 className='bg-slate-300 bg-opacity-30 px-[1.2px] m-1 md:m-2 md:p-2 rounded-md'>Culture</h4>
            </div>
            <div className='absolute z-10 bottom-1 md:bottom-2 m-2 md:m-4 text-white '>
              <p className='font-thin md:text-sm text-[10px]'>january 8th - january 13th</p>
              <h1 className=' text-lg md:text-2xl'>We Love Italy</h1>
            </div>
            <img src='/img/020606_1_-162.jpg' className='rounded-lg md:rounded-3xl object-cover absolute h-[15.9rem] md:h-[32rem]' alt='visit' />
          </div>
          <div className='basis-1/3 rounded-lg  relative mx-4 shadow-lg'>
            <div className='flex absolute z-10 justify-between align-baseline m-1 md:m-3 text-white text-sm md:font-semibold'>
              <h4 className='bg-slate-300 bg-opacity-30 px-[1.2px] m-1 md:m-2 md:p-2 rounded-md'>Ball</h4>
              <h4 className='bg-slate-300 bg-opacity-30 px-[1.2px] m-1 md:m-2 md:p-2 rounded-md'>Spring</h4>
            </div>
            <div className='absolute z-10 bottom-1 md:bottom-2 m-2 md:m-4 text-white '>
              <p className='font-thin md:text-sm text-[10px]'>january 8th - january 13th</p>
              <h1 className=' text-lg md:text-2xl'>Spring-break in Bali</h1>
            </div>
            <img src='/img/050706_2_-28.jpg' className='rounded-lg md:rounded-3xl object-cover absolute h-[15.9rem] md:h-[32rem]' alt='visit' />
          </div>
          <div className='basis-1/3 rounded-md  relative mx-4 shadow-lg'>
            <div className='flex absolute z-10 justify-between align-baseline m-1 md:m-3 text-white text-sm md:font-semibold'>
              <h4 className='bg-slate-300 bg-opacity-30 px-[1.2px] m-1 md:m-2 md:p-2 rounded-md'>Luxe Living</h4>
              <h4 className='bg-slate-300 bg-opacity-30 px-[1.2px] m-1 md:m-2 md:p-2 rounded-md'>Island</h4>
            </div>
            <div className='absolute z-10 bottom-1 md:bottom-2 m-2 md:m-4 text-white '>
              <p className='font-thin md:text-sm text-[10px]'>january 8th - january 13th</p>
              <h1 className=' text-lg md:text-2xl'>Luxe Greek getaway</h1>
            </div>
            <img src='/img/060706_2_-168.jpg' className=' rounded-lg md:rounded-3xl object-cover absolute h-[15.9rem] md:h-[32rem]' alt='visit' />
          </div>

        </div>
        <div className='flex mt-5 justify-between md:p-5 h-[16rem] md:h-[34rem]'>
          <div className='basis-1/3 rounded-md  relative mx-4 shadow-lg'>
            <div className='flex absolute z-10 justify-between align-baseline m-1 md:m-3 text-white text-sm md:font-semibold'>
              <h4 className='bg-slate-300 bg-opacity-30 px-[1.2px] m-1 md:m-2 md:p-2 rounded-md'>Luxe Living</h4>
              <h4 className='bg-slate-300 bg-opacity-30 px-[1.2px] m-1 md:m-2 md:p-2 rounded-md'>Culture</h4>
            </div>
            <div className='absolute z-10 bottom-1 md:bottom-2 m-2 md:m-4 text-white '>
              <p className='font-thin md:text-sm text-[10px]'>january 8th - january 13th</p>
              <h1 className=' text-lg md:text-2xl'>We Love Italy</h1>
            </div>
            <img src='/img/070706_2_-100.jpg' className=' rounded-lg md:rounded-3xl object-cover absolute h-[15.9rem] md:h-[32rem]' alt='visit' />
          </div>
          <div className='basis-1/3 rounded-md  relative mx-4 shadow-lg'>
            <div className='flex absolute z-10 justify-between align-baseline m-1 md:m-3 text-white text-sm md:font-semibold'>
              <h4 className='bg-slate-300 bg-opacity-30 px-[1.2px] m-1 md:m-2 md:p-2 rounded-md'>Ball </h4>
              <h4 className='bg-slate-300 bg-opacity-30 px-[1.2px] m-1 md:m-2 md:p-2 rounded-md'>Spring</h4>
            </div>
            <div className='absolute z-10 bottom-1 md:bottom-2 m-2 md:m-4 text-white '>
              <p className='font-thin md:text-sm text-[10px]'>january 8th - january 13th</p>
              <h1 className=' text-lg md:text-2xl'>Spring-break in Bali</h1>
            </div>
            <img src='/img/BAL00881.jpg' className='rounded-lg md:rounded-3xl object-cover absolute h-[15.9rem] md:h-[32rem]' alt='visit' />
          </div>
          <div className='basis-1/3 rounded-md  relative mx-4 shadow-lg'>
            <div className='flex absolute z-10 justify-between align-baseline m-1 md:m-3 text-white text-sm md:font-semibold'>
              <h4 className='bg-slate-300 bg-opacity-30 px-[1.2px] m-1 md:m-2 md:p-2 rounded-md'>Luxe Living</h4>
              <h4 className='bg-slate-300 bg-opacity-30 px-[1.2px] m-1 md:m-2 md:p-2 rounded-md'>Island</h4>
            </div>
            <div className='absolute z-10 bottom-1 md:bottom-2 m-2 md:m-4 text-white '>
              <p className='font-thin md:text-sm text-[10px]'>january 8th - january 13th</p>
              <h1 className=' text-lg md:text-2xl'>Luxe Greek getaway</h1>
            </div>
            <img src='/img/delphin-ruche014.jpg' className=' rounded-lg md:rounded-3xl object-cover absolute h-[15.9rem] md:h-[32rem]' alt='visit' />
          </div>

        </div>
      </div>
    </div>
  )
}
