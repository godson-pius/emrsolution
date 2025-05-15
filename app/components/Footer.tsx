import React from 'react'
import Link from "next/link";

const Footer = () => {
    return (
        <footer
            className={'mt-10 mb-5 px-10 lg:px-20 text-gray-500 text-sm w-full'}>
            <hr className={'w-full my-4 text-gray-300'}/>
            <div className={'flex justify-between'}>
                <p className={'font-medium'}>EMR-SOLUTION ©2025</p>
                <p>Powered by
                    <Link href={'https://www.worldbraintechnology.com'} className={'text-blue-500'}> World Brain
                        Technology
                        Ltd.</Link>
                </p>
            </div>
        </footer>
    )
}
export default Footer
