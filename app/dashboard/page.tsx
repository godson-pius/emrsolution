'use client'

import React, { useEffect, useState } from 'react';
import Header from "@/app/components/Header";
import Notification from "@/app/components/Notification";
import Footer from "@/app/components/Footer";
import Greeting from "@/app/components/Greeting";
import { IClaim, ITariff } from "@/interface";
import axios from "axios";
import { BASE_URL } from "@/util/nonServer";
import TariffComponent from "@/app/components/TariffComponent";
import ClaimedComponent from "@/app/components/ClaimedComponent";
import { getCookie } from "@/util";

const Dashboard = () => {
    const [tariffs, setTariffs] = useState<ITariff[]>([]);
    const [claims, setClaims] = useState<IClaim[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const tariffsRes = await axios.get(`${BASE_URL}/api/tariff`);
                const entityToken = await getCookie('entityToken');
                const claimsRes = await axios.get(`${BASE_URL}/api/claim`, {
                    headers: { 'Authorization': `Bearer ${entityToken}` }
                });

                setTariffs(tariffsRes.data);
                setClaims(claimsRes.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <main>
            <Header/>
            <hr className="my-3 w-full absolute top-22 text-gray-300"/>
            <div className="px-10 lg:px-20">
                <Greeting/>

                {/* Notification */}
                <Notification title="Tariff Uploads">
                    The NHIS tariff plan has been updated, please check the tariff uploads.
                </Notification>

                {/* Loading State */}
                {loading && <p className="text-gray-500">Loading...</p>}

                {/* Tariff Uploads */}
                {!loading && (
                    <section className="mt-12">
                        <h2 className="font-medium text-lg">Recent Tariff Uploads</h2>
                        <div className="w-full grid lg:grid-cols-2 gap-2">
                            {tariffs.length > 0 ? (
                                tariffs.slice(0, 4).map((tariff) => (
                                    <TariffComponent key={tariff._id} tariff={tariff}/>
                                ))
                            ) : (
                                <p className="my-3 text-gray-600 text-sm">No Tariff yet!</p>
                            )}
                        </div>
                    </section>
                )}

                {/* Claim Processing */}
                {!loading && (
                    <section className="mt-12">
                        <h2 className="font-medium text-lg">Claim Process</h2>
                        <div className="w-full grid gap-2">
                            {claims.length > 0 ? (
                                claims.slice(0, 4).map((claim) => (
                                    <ClaimedComponent key={claim._id} claim={claim}/>
                                ))
                            ) : (
                                <p className="my-3 text-gray-600 text-sm">No Claims yet!</p>
                            )}
                        </div>
                    </section>
                )}
            </div>
            <div className={'w-full bottom-0'}>
                <Footer/>
            </div>
        </main>
    );
};

export default Dashboard;
