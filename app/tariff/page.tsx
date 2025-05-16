import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Greeting from "@/app/components/Greeting";
import { ITariff } from "@/interface";
import TariffComponent from "@/app/components/TariffComponent";
import axios from "axios";
import { BASE_URL } from "@/util/nonServer";

const Tariff = async () => {
    try {
        // Fetch Tariff Data with Axios
        const tariffsRes = await axios.get(`${BASE_URL}/api/tariff`);
        const tariffs: ITariff[] = tariffsRes.data;

        return (
            <main>
                <Header />
                <hr className="my-3 w-full absolute top-22 text-gray-300" />

                <div className="px-10 lg:px-20">
                    <Greeting />

                    {/* Tariff Uploads */}
                    <section className="mt-12">
                        <h2 className="font-medium text-lg">Tariff Uploads</h2>

                        <div className="w-full grid lg:grid-cols-2 gap-2">
                            {tariffs.length > 0 ? (
                                tariffs.map((tariff) => (
                                    <TariffComponent key={tariff._id} tariff={tariff} />
                                ))
                            ) : (
                                <p className="my-3 text-gray-600 text-sm">No Tariff yet!</p>
                            )}
                        </div>
                    </section>
                </div>

                <Footer />
            </main>
        );
    } catch (error) {
        console.error("Error fetching tariff data:", error);

        return (
            <main>
                <Header />
                <hr className="my-3 w-full absolute top-22 text-gray-300" />

                <div className="px-10 lg:px-20">
                    <Greeting />
                    <section className="mt-12">
                        <h2 className="font-medium text-lg">Tariff Uploads</h2>
                        <p className="my-3 text-gray-600 text-sm">Failed to load tariffs.</p>
                    </section>
                </div>

                <Footer />
            </main>
        );
    }
};

export default Tariff;
