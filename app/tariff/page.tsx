import React from 'react'
import Header from "@/app/components/Header";
import { IoMedicalOutline, IoPricetagOutline} from "react-icons/io5";
import Footer from "@/app/components/Footer";
import Greeting from "@/app/components/Greeting";

const Tariff = () => {
    return (
        <main className={''}>
            <Header/>
            <hr className={'my-3 w-full absolute top-22 text-gray-300'}/>

            <div className={'px-10 lg:px-20'}>
                <Greeting />

                {/* Tariff Uploads */}
                <section className={'mt-12'}>
                    <h2 className={'font-medium text-lg'}>Tariff Uploads</h2>

                    <div className={'w-full grid lg:grid-cols-2 gap-2'}>
                        <div
                            className={'w-full border-[1px] border-gray-300 mt-3 rounded-xl p-3 flex flex-col lg:flex-row space-y-3 lg:space-x-10 lg:space-y-0'}>
                            <div className={'flex flex-col'}>
                                <div className={'flex items-center space-x-1'}>
                                    <IoMedicalOutline className={'text-blue-500'}/>
                                    <p className={'text-sm text-gray-500'}>Name</p>
                                </div>
                                <h3 className={'font-medium'}>NHIS-010-001</h3>
                            </div>

                            <div className={'flex flex-col'}>
                                <div className={'flex items-center space-x-1'}>
                                    <IoMedicalOutline className={'text-blue-500'}/>
                                    <p className={'text-sm text-gray-500'}>General Description</p>
                                </div>
                                <h3 className={'font-medium'}>Specialist Initial Consultation</h3>
                            </div>

                            <div className={'flex flex-col'}>
                                <div className={'flex items-center space-x-1'}>
                                    <IoPricetagOutline className={'text-blue-500'}/>
                                    <p className={'text-sm text-gray-500'}>Price Attached</p>
                                </div>
                                <h3 className={'font-medium'}>₦2,000</h3>
                            </div>
                        </div>

                        <div
                            className={'w-full border-[1px] border-gray-300 mt-3 rounded-xl p-3 flex flex-col lg:flex-row space-y-3 lg:space-x-10 lg:space-y-0'}>
                            <div className={'flex flex-col'}>
                                <div className={'flex items-center space-x-1'}>
                                    <IoMedicalOutline className={'text-blue-500'}/>
                                    <p className={'text-sm text-gray-500'}>Name</p>
                                </div>
                                <h3 className={'font-medium'}>NHIS-010-002</h3>
                            </div>

                            <div className={'flex flex-col'}>
                                <div className={'flex items-center space-x-1'}>
                                    <IoMedicalOutline className={'text-blue-500'}/>
                                    <p className={'text-sm text-gray-500'}>General Description</p>
                                </div>
                                <h3 className={'font-medium'}>Specialist Initial Consultation</h3>
                            </div>

                            <div className={'flex flex-col'}>
                                <div className={'flex items-center space-x-1'}>
                                    <IoPricetagOutline className={'text-blue-500'}/>
                                    <p className={'text-sm text-gray-500'}>Price Attached</p>
                                </div>
                                <h3 className={'font-medium'}>₦2,000</h3>
                            </div>
                        </div>
                        <div
                            className={'w-full border-[1px] border-gray-300 mt-3 rounded-xl p-3 flex flex-col lg:flex-row space-y-3 lg:space-x-10 lg:space-y-0'}>
                            <div className={'flex flex-col'}>
                                <div className={'flex items-center space-x-1'}>
                                    <IoMedicalOutline className={'text-blue-500'}/>
                                    <p className={'text-sm text-gray-500'}>Name</p>
                                </div>
                                <h3 className={'font-medium'}>NHIS-010-001</h3>
                            </div>

                            <div className={'flex flex-col'}>
                                <div className={'flex items-center space-x-1'}>
                                    <IoMedicalOutline className={'text-blue-500'}/>
                                    <p className={'text-sm text-gray-500'}>General Description</p>
                                </div>
                                <h3 className={'font-medium'}>Specialist Initial Consultation</h3>
                            </div>

                            <div className={'flex flex-col'}>
                                <div className={'flex items-center space-x-1'}>
                                    <IoPricetagOutline className={'text-blue-500'}/>
                                    <p className={'text-sm text-gray-500'}>Price Attached</p>
                                </div>
                                <h3 className={'font-medium'}>₦2,000</h3>
                            </div>
                        </div>
                        <div
                            className={'w-full border-[1px] border-gray-300 mt-3 rounded-xl p-3 flex flex-col lg:flex-row space-y-3 lg:space-x-10 lg:space-y-0'}>
                            <div className={'flex flex-col'}>
                                <div className={'flex items-center space-x-1'}>
                                    <IoMedicalOutline className={'text-blue-500'}/>
                                    <p className={'text-sm text-gray-500'}>Name</p>
                                </div>
                                <h3 className={'font-medium'}>NHIS-010-001</h3>
                            </div>

                            <div className={'flex flex-col'}>
                                <div className={'flex items-center space-x-1'}>
                                    <IoMedicalOutline className={'text-blue-500'}/>
                                    <p className={'text-sm text-gray-500'}>General Description</p>
                                </div>
                                <h3 className={'font-medium'}>Specialist Initial Consultation</h3>
                            </div>

                            <div className={'flex flex-col'}>
                                <div className={'flex items-center space-x-1'}>
                                    <IoPricetagOutline className={'text-blue-500'}/>
                                    <p className={'text-sm text-gray-500'}>Price Attached</p>
                                </div>
                                <h3 className={'font-medium'}>₦2,000</h3>
                            </div>
                        </div>
                        <div
                            className={'w-full border-[1px] border-gray-300 mt-3 rounded-xl p-3 flex flex-col lg:flex-row space-y-3 lg:space-x-10 lg:space-y-0'}>
                            <div className={'flex flex-col'}>
                                <div className={'flex items-center space-x-1'}>
                                    <IoMedicalOutline className={'text-blue-500'}/>
                                    <p className={'text-sm text-gray-500'}>Name</p>
                                </div>
                                <h3 className={'font-medium'}>NHIS-010-001</h3>
                            </div>

                            <div className={'flex flex-col'}>
                                <div className={'flex items-center space-x-1'}>
                                    <IoMedicalOutline className={'text-blue-500'}/>
                                    <p className={'text-sm text-gray-500'}>General Description</p>
                                </div>
                                <h3 className={'font-medium'}>Specialist Initial Consultation</h3>
                            </div>

                            <div className={'flex flex-col'}>
                                <div className={'flex items-center space-x-1'}>
                                    <IoPricetagOutline className={'text-blue-500'}/>
                                    <p className={'text-sm text-gray-500'}>Price Attached</p>
                                </div>
                                <h3 className={'font-medium'}>₦2,000</h3>
                            </div>
                        </div>
                        <div
                            className={'w-full border-[1px] border-gray-300 mt-3 rounded-xl p-3 flex flex-col lg:flex-row space-y-3 lg:space-x-10 lg:space-y-0'}>
                            <div className={'flex flex-col'}>
                                <div className={'flex items-center space-x-1'}>
                                    <IoMedicalOutline className={'text-blue-500'}/>
                                    <p className={'text-sm text-gray-500'}>Name</p>
                                </div>
                                <h3 className={'font-medium'}>NHIS-010-001</h3>
                            </div>

                            <div className={'flex flex-col'}>
                                <div className={'flex items-center space-x-1'}>
                                    <IoMedicalOutline className={'text-blue-500'}/>
                                    <p className={'text-sm text-gray-500'}>General Description</p>
                                </div>
                                <h3 className={'font-medium'}>Specialist Initial Consultation</h3>
                            </div>

                            <div className={'flex flex-col'}>
                                <div className={'flex items-center space-x-1'}>
                                    <IoPricetagOutline className={'text-blue-500'}/>
                                    <p className={'text-sm text-gray-500'}>Price Attached</p>
                                </div>
                                <h3 className={'font-medium'}>₦2,000</h3>
                            </div>
                        </div>
                        <div
                            className={'w-full border-[1px] border-gray-300 mt-3 rounded-xl p-3 flex flex-col lg:flex-row space-y-3 lg:space-x-10 lg:space-y-0'}>
                            <div className={'flex flex-col'}>
                                <div className={'flex items-center space-x-1'}>
                                    <IoMedicalOutline className={'text-blue-500'}/>
                                    <p className={'text-sm text-gray-500'}>Name</p>
                                </div>
                                <h3 className={'font-medium'}>NHIS-010-001</h3>
                            </div>

                            <div className={'flex flex-col'}>
                                <div className={'flex items-center space-x-1'}>
                                    <IoMedicalOutline className={'text-blue-500'}/>
                                    <p className={'text-sm text-gray-500'}>General Description</p>
                                </div>
                                <h3 className={'font-medium'}>Specialist Initial Consultation</h3>
                            </div>

                            <div className={'flex flex-col'}>
                                <div className={'flex items-center space-x-1'}>
                                    <IoPricetagOutline className={'text-blue-500'}/>
                                    <p className={'text-sm text-gray-500'}>Price Attached</p>
                                </div>
                                <h3 className={'font-medium'}>₦2,000</h3>
                            </div>
                        </div>
                        <div
                            className={'w-full border-[1px] border-gray-300 mt-3 rounded-xl p-3 flex flex-col lg:flex-row space-y-3 lg:space-x-10 lg:space-y-0'}>
                            <div className={'flex flex-col'}>
                                <div className={'flex items-center space-x-1'}>
                                    <IoMedicalOutline className={'text-blue-500'}/>
                                    <p className={'text-sm text-gray-500'}>Name</p>
                                </div>
                                <h3 className={'font-medium'}>NHIS-010-001</h3>
                            </div>

                            <div className={'flex flex-col'}>
                                <div className={'flex items-center space-x-1'}>
                                    <IoMedicalOutline className={'text-blue-500'}/>
                                    <p className={'text-sm text-gray-500'}>General Description</p>
                                </div>
                                <h3 className={'font-medium'}>Specialist Initial Consultation</h3>
                            </div>

                            <div className={'flex flex-col'}>
                                <div className={'flex items-center space-x-1'}>
                                    <IoPricetagOutline className={'text-blue-500'}/>
                                    <p className={'text-sm text-gray-500'}>Price Attached</p>
                                </div>
                                <h3 className={'font-medium'}>₦2,000</h3>
                            </div>
                        </div>
                        <div
                            className={'w-full border-[1px] border-gray-300 mt-3 rounded-xl p-3 flex flex-col lg:flex-row space-y-3 lg:space-x-10 lg:space-y-0'}>
                            <div className={'flex flex-col'}>
                                <div className={'flex items-center space-x-1'}>
                                    <IoMedicalOutline className={'text-blue-500'}/>
                                    <p className={'text-sm text-gray-500'}>Name</p>
                                </div>
                                <h3 className={'font-medium'}>NHIS-010-001</h3>
                            </div>

                            <div className={'flex flex-col'}>
                                <div className={'flex items-center space-x-1'}>
                                    <IoMedicalOutline className={'text-blue-500'}/>
                                    <p className={'text-sm text-gray-500'}>General Description</p>
                                </div>
                                <h3 className={'font-medium'}>Specialist Initial Consultation</h3>
                            </div>

                            <div className={'flex flex-col'}>
                                <div className={'flex items-center space-x-1'}>
                                    <IoPricetagOutline className={'text-blue-500'}/>
                                    <p className={'text-sm text-gray-500'}>Price Attached</p>
                                </div>
                                <h3 className={'font-medium'}>₦2,000</h3>
                            </div>
                        </div>
                        <div
                            className={'w-full border-[1px] border-gray-300 mt-3 rounded-xl p-3 flex flex-col lg:flex-row space-y-3 lg:space-x-10 lg:space-y-0'}>
                            <div className={'flex flex-col'}>
                                <div className={'flex items-center space-x-1'}>
                                    <IoMedicalOutline className={'text-blue-500'}/>
                                    <p className={'text-sm text-gray-500'}>Name</p>
                                </div>
                                <h3 className={'font-medium'}>NHIS-010-001</h3>
                            </div>

                            <div className={'flex flex-col'}>
                                <div className={'flex items-center space-x-1'}>
                                    <IoMedicalOutline className={'text-blue-500'}/>
                                    <p className={'text-sm text-gray-500'}>General Description</p>
                                </div>
                                <h3 className={'font-medium'}>Specialist Initial Consultation</h3>
                            </div>

                            <div className={'flex flex-col'}>
                                <div className={'flex items-center space-x-1'}>
                                    <IoPricetagOutline className={'text-blue-500'}/>
                                    <p className={'text-sm text-gray-500'}>Price Attached</p>
                                </div>
                                <h3 className={'font-medium'}>₦2,000</h3>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <div className={'w-full absolute bottom-0'}>
                <Footer/>
            </div>
        </main>
    )
}
export default Tariff
