import React from 'react'

const Button = ({ styles }) => {
    return (
        <button type="button" className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none rounded-[10px] sm:hover:scale-105 transition ease-in-out delay-150 ${styles}`}>
            Get Started
        </button>
    )
}

export default Button;