import React from 'react'

interface topBannerProps {
  closeBanner : ()=>void
}

const TopBanner = ({closeBanner}:topBannerProps) => {
  return (
    <div className='bg-[url(/images/banner.png)] bg-cover bg-center flex items-center py-3 z-[100] px-2'>
        <span className='text-sm mx-auto flex text-white h-full  items-center  text-center'>
        **Welcome to the official AuditOne validation portal
        </span>
        <img src='/images/cancel.svg' className='cursor-pointer' onClick={closeBanner}/>
    </div>
  )
}

export default TopBanner