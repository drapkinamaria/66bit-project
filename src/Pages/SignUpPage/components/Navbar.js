import React from "react";

const Navbar = () => {
    return (

        <div>
            <div>
                <a href='/registration/1'>
                    <div className="">
                        <text className=''>1</text>
                        <text className='text-style '>основная</text>
                        <text className='text-style '>информация</text>
                    </div>
                </a>
                <a href='/registration/2'>
                    <div className="">
                        <text className='text-style '>2</text>
                        <text className='text-style '>дополнительно</text>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Navbar;