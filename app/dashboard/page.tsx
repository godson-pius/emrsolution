import React from 'react'
import Header from "@/app/components/Header";
import Notification from "@/app/components/Notification";
import Footer from "@/app/components/Footer";
import Greeting from "@/app/components/Greeting";
import {IClaim, ITariff} from "@/interface";
import axios from "axios";
import {BASE_URL} from "@/util/nonServer";
import TariffComponent from "@/app/components/TariffComponent";
import ClaimedComponent from "@/app/components/ClaimedComponent";
import {getCookie} from "@/util";

const Dashboard = async () => {
    const tariffs: {data: ITariff[]} = await axios.get(`${BASE_URL}/api/tariff`);
    const claims: {data: IClaim[]} = await axios.get(`${BASE_URL}/api/claim`, {headers: {'Authorization': `Bearer ${await getCookie('entityToken')}`}});

    return (
        <main className={''}>
            <Header/>
            <hr className={'my-3 w-full absolute top-22 text-gray-300'}/>

            <div className={'px-10 lg:px-20'}>
                <Greeting />

                {/* Notification */}
                <Notification title={'TariffComponent Uploads'}>
                    The NHIS tariff plan have been updated, please check on the tariff uploads.
                </Notification>

                {/* TariffComponent Uploads */}
                <section className={'mt-12'}>
                    <h2 className={'font-medium text-lg'}>Recent Tariff Uploads</h2>

                    <div className={'w-full grid lg:grid-cols-2 gap-2'}>
                        {tariffs.data.length > 0 ? tariffs.data.slice(0, 4).map((tariff) => (
                            <TariffComponent key={tariff._id} tariff={tariff} />
                        )) : (
                            <p className={'my-3 text-gray-600 text-sm'}>No Tariff yet!</p>
                        )}
                    </div>
                </section>

                {/* Claimed Processing */}
                <section className={'mt-12'}>
                    <h2 className={'font-medium text-lg'}>Claimed Process</h2>

                    <div className={'w-full grid gap-2'}>

                        {claims.data.length > 0 ? claims.data.slice(0, 4).map((claim) => (
                            <ClaimedComponent key={claim._id} claim={claim} />
                        )) : (
                            <p className={'my-3 text-gray-600 text-sm'}>No Tariff yet!</p>
                        )}


                    </div>
                </section>
            </div>

            <Footer/>
        </main>
    )
}
export default Dashboard
