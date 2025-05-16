'use client'

import React, {RefObject, useRef, useState} from 'react'
import {decryptLS} from "@/util/nonServer";
import {IClaim} from "@/interface";
import Header from "@/app/components/Header";
import Greeting from "@/app/components/Greeting";
import Footer from "@/app/components/Footer";
import moment from "moment/moment";

const Print = () => {
    const claim: IClaim = decryptLS('claim') as unknown as IClaim
    const printDoc: RefObject<any> = useRef(null)
    const [printDetails, setPrintDetails] = useState<boolean>(false);

    const handlePrint = () => {
        setPrintDetails(true);

        setTimeout(() => {
            const printContent = printDoc.current.innerHTML;
            const originalContent = document.body.innerHTML;

            document.body.innerHTML = printContent;
            window.print();
            document.body.innerHTML = originalContent;
        }, 1000)

        setTimeout(() => {
            window.location.reload()
        }, 2000)
    }

    return (
        <main className={''}>
            <Header/>
            <hr className={'my-3 w-full absolute top-22 text-gray-300'}/>

            <div className={'px-10 lg:px-20'}>

                <section className={'mt-8'} ref={printDoc}>
                    <p className={`text-5xl text-center my-10 font-bold text-sky-500 ${printDetails ? 'block' : 'hidden'}`}>EMR SOLUTION</p>
                    <h2 className={'font-medium text-3xl'}>{claim.fullname}</h2>
                    <p className={'text-gray-500 my-1'}>This is the claim document for {claim.fullname}.</p>

                    <div className={'w-full mt-8 flex flex-col gap-3 divide-y divide-sky-200'}>
                        <div className={'w-full flex text-lg justify-between pb-5'}>
                            <p>Identity Number: </p>
                            <p className={'font-medium'}>{claim.identityNum}</p>
                        </div>

                        <div className={'w-full flex text-lg justify-between pb-5'}>
                            <p>Phone Number: </p>
                            <p className={'font-medium'}>{claim.phone}</p>
                        </div>

                        <div className={'w-full flex text-lg justify-between pb-5'}>
                            <p>Services: </p>
                            <p className={'font-medium'}>{claim.services.toString()}</p>
                        </div>

                        <div className={'w-full flex text-lg justify-between pb-5'}>
                            <p>Admission Date: </p>
                            <p className={'font-medium'}>{moment(claim.admissionDate).format('MMMM DD, YYYY')}</p>
                        </div>

                        <div className={'w-full flex text-lg justify-between pb-5'}>
                            <p>Date Processed: </p>
                            <p className={'font-medium'}>{moment(claim.createdAt).format('MMMM DD, YYYY')}</p>
                        </div>

                        <div className={'w-full flex text-lg justify-between pb-5'}>
                            <p>Total (₦): </p>
                            <p className={'font-medium'}>{Intl.NumberFormat().format(30000)}</p>
                        </div>
                    </div>

                    <p className={`text-center text-sm text-gray-500 my-5 ${printDetails ? 'block' : 'hidden'}`}>-Secured by emr-solution-</p>
                </section>
                <button onClick={() => handlePrint()} className={'bg-blue-500 text-white p-2 rounded-lg my-2 cursor-pointer'}>Print Document</button>
            </div>

            <div className={'w-full bottom-0'}>
                <Footer/>
            </div>
        </main>
    )
}
export default Print
