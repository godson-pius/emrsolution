'use client'

import React, {useEffect, useState} from 'react'
import Link from "next/link";
import {IoChatbubblesOutline, IoColorWandOutline, IoNotificationsOutline} from "react-icons/io5";
import {usePathname, useRouter} from 'next/navigation'
import {decryptLS, fetchTotalNumOfClaims, getCookieInClient} from "@/util/nonServer";
import {IEntity} from "@/interface";

const Header = () => {
    const [totalClaims, setTotalClaims] = useState<number | unknown>();
    const path = usePathname();
    const loggedEntity = decryptLS('memo') as unknown as IEntity;
    const router = useRouter();

    useEffect(() => {
        function fetchData() {
            const count: number | unknown = fetchTotalNumOfClaims();
            setTotalClaims(count);
        }
        fetchData();
    }, []);

    useEffect(() => {
        (() => {
            if (localStorage.getItem('memo') === null || getCookieInClient('entityToken') === null) return router.push('/');
        })()
    }, [router]);

    return (
        <header className={'w-full flex flex-col pt-5 px-10 lg:px-20'}>
            <div className={'w-full flex justify-between items-center'}>
                <section className={'flex space-x-2 items-center'}>
                    <Link href={'/'} className={'text-blue-500 font-bold'}>EMR-SOLUTION</Link>

                    <div className="p-[1px] bg-gradient-to-r from-gray-200 via-purple-500 to-pink-500 rounded shadow-lg hidden lg:block">
                        <div className="bg-white rounded px-3 py-1 flex space-x-1">
                            <IoColorWandOutline size={15}/>
                            <Link
                                href={'https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwitrd-g2P6MAxWslFAGHXmPFxkYABAFGgJkZw&co=1&ase=2&gclid=Cj0KCQjw8cHABhC-ARIsAJnY12y9WqSPdaS2Sty6CM3UtI-bZ-Lj049_n4ont8kUg-C1nkU1iMo-6QYaAjaREALw_wcB&ohost=www.google.com&cid=CAESeeD2yTvSDxLlfULNmfIZHAG72XpHdRkWv3CcVOmxxnm5cGt3Kxs8cWJdewLRnPXz4ifFLFHrOTqf5D-x2Z1clrNYygfqA0PaFODY7JT7WcpHP_qNJBM4lpOyC9K9PTM_3ArMLszeEgrk_wI4GUAz38fqlqJqw64Krzs&sig=AOD64_07dqDPklFD6SD_3p9_GSD8tauF3w&q&nis=4&adurl&ved=2ahUKEwjw29ug2P6MAxWKUEEAHUm1LtgQ0Qx6BAgOEAE'}
                                target={'_blank'} className={'text-xs'}>Ask AI</Link>
                        </div>
                    </div>
                </section>

                <section className={'flex space-x-3 items-center'}>
                    <IoChatbubblesOutline size={20}/>
                    <IoNotificationsOutline size={20}/>

                    <div className={'flex items-center space-x-1'}>
                        <div className={'bg-blue-500 text-white p-1 rounded-lg'}>
                            <p>{loggedEntity.entityName?.split(' ')[0].charAt(0)}{loggedEntity.entityName?.split(' ')[1].charAt(0)}</p>
                        </div>
                        <p className={'hidden lg:block'}>{loggedEntity.entityName}</p>
                    </div>
                </section>
            </div>

            <nav className={'flex space-x-3 lg:space-x-6 mt-5 text-sm items-center'}>
                <Link href={'/dashboard'} className={`pb-[6px] ${path.includes('dashboard') ? 'text-blue-500 border-b-2' : 'text-gray-500'}`}>Home</Link>
                <Link href={'/tariff'} className={`pb-[6px] flex gap-1 ${path.includes('tariff') ? 'text-blue-500 border-b-2' : 'text-gray-500'}`}>Tariff <span className={'hidden lg:block'}>Uploads</span></Link>
                <Link href={'/claims'} className={`pb-[6px] flex gap-1 ${path.includes('claims') ? 'text-blue-500 border-b-2' : 'text-gray-500'}`}>Claims <span className={'hidden lg:block'}>Processing</span></Link>
                <Link href={'/saved'} className={`flex items-center pb-[6px] ${path.includes('saved') ? 'text-blue-500 border-b-2' : 'text-gray-500'}`}>
                    Saved Claims
                    <p className={'bg-gray-200 p-2 h-5 flex justify-center items-center ml-2 rounded text-[11px]'}>{totalClaims as number}</p>
                </Link>
            </nav>
        </header>
    )
}
export default Header
