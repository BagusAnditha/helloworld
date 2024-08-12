import React from 'react'
import styles from '../../src/styles/Dashboard.module.css'
//import '../../public/bootstrap/dist/css/bootstrap.css'

export default function layout({children}:{children:React.ReactNode}) {
    return (
        <div className='bg-black text-white p-[20px]'>
            <p>ini layout khusus untuk dashboard</p>
            {children}
        </div>
    )
}