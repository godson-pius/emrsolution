import React from 'react'
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import ClaimForm from "@/app/components/ClaimForm";
import Greeting from "@/app/components/Greeting";

const Claims = async() => {
    return (
        <main className={''}>
            <Header/>
            <hr className={'my-3 w-full absolute top-22 text-gray-300'}/>

            <div className={'px-10 lg:px-20'}>
                <Greeting />

                {/* Claim Processing form */}
                <ClaimForm />

            </div>

            <div className={'w-full bottom-0'}>
                <Footer/>
            </div>
        </main>
    )
}
export default Claims
