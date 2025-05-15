import React from 'react'
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import ClaimForm from "@/app/components/ClaimForm";

const Claims = async() => {
    return (
        <main className={''}>
            <Header/>
            <hr className={'my-3 w-full absolute top-22 text-gray-300'}/>

            <div className={'px-10 lg:px-20'}>
                <section className={'mt-12'}>
                    <h1 className={'text-2xl font-medium'}>Good morning, Mark 👋</h1>
                    <p className={'text-gray-500 text-sm mt-1'}>Welcome to EMR-SOLUTION, start processing claims</p>
                </section>

                {/* Claim Processing form */}
                <ClaimForm />

            </div>

            <div className={'w-full absolute bottom-0'}>
                <Footer/>
            </div>
        </main>
    )
}
export default Claims
