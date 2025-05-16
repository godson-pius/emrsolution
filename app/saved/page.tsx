import React from 'react'
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Greeting from "@/app/components/Greeting";
import axios from "axios";
import {BASE_URL} from "@/util/nonServer";
import {IClaim} from "@/interface";
import {getCookie} from "@/util";
import ClaimedComponent from "@/app/components/ClaimedComponent";

const Tariff = async () => {
    const claims: {data: IClaim[]} = await axios.get(`${BASE_URL}/api/claim`, {headers: {'Authorization': `Bearer ${await getCookie('entityToken')}`}});

    return (
        <main className={''}>
            <Header/>
            <hr className={'my-3 w-full absolute top-22 text-gray-300'}/>

            <div className={'px-10 lg:px-20'}>
                <Greeting />

                {/* TariffComponent Uploads */}
                <section className={'mt-12'}>
                    <h2 className={'font-medium text-lg'}>Tariff Uploads</h2>

                    <div className={'w-full grid lg:grid-cols-2 gap-2'}>

                        {claims.data.length > 0 ? claims.data.slice(0, 4).map((claim) => (
                            <ClaimedComponent key={claim._id} claim={claim} />
                        )) : (
                            <p className={'my-3 text-gray-600 text-sm'}>No Tariff yet!</p>
                        )}

                    </div>
                </section>
            </div>

            <div className={'w-full bottom-0'}>
                <Footer/>
            </div>
        </main>
    )
}
export default Tariff
