import React from 'react'

export default function Interest({title , children}) {
    return (
        <div className='d-flex flex-column align-items-center justify-content-center'>
            {children}
            <h6 className="text-white mt-3">{title}</h6>
        </div>
    )
}
