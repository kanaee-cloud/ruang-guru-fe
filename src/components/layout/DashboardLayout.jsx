import React from 'react'
import Sidebar from '../common/Sidebar'

const DashboardLayout = ({children}) => {
  return (
    <div className='flex'>
        <Sidebar />
        <section className='py-8 px-7 w-full h-screen'>
            {children}
        </section>
    </div>
  )
}

export default DashboardLayout