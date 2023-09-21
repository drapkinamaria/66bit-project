import React from "react";

const Navbar = () => {

    const countPages = [1, 2]

    return (
        <div className="menu">
            <div className="menu_element">
                <a href='/registration/1'>
                    <div>
                        <div>{countPages[0]}.</div>
                        <div>основная информация</div>
                    </div>
                </a>
            </div>
            <div className="menu_element">
                <a href='/registration/2'>
                    <div className="">
                        <div className=''>{countPages[1]}.</div>
                        <div className=''>дополнительно</div>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Navbar;