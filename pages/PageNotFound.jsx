import React from 'react'

function PageNotFound() {
    return (
        <div className='cars-container text-center'>
            <h1 className='text-3xl font-bold'>Page Not Found...😥😓</h1>
            <Link path="." relative="path">
                <button className='mt-[2rem] py-[1rem] px-[3rem] rounded-2xl bg-orange-500 hover:bg-orange-300'>
                    Back to Home
                </button>
            </Link>
        </div>
    )
}

export default PageNotFound