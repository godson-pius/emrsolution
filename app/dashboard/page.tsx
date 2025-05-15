import React from 'react'
import Header from "@/app/components/Header";
import Notification from "@/app/components/Notification";
import {IoCalendarOutline, IoCallOutline, IoMedicalOutline, IoPricetagOutline} from "react-icons/io5";
import Footer from "@/app/components/Footer";

const Dashboard = () => {
    return (
        <main className={''}>
            <Header/>
            <hr className={'my-3 w-full absolute top-22 text-gray-300'}/>

            <div className={'px-10 lg:px-20'}>
                <section className={'mt-12'}>
                    <h1 className={'text-2xl font-medium'}>Good morning, Mark 👋</h1>
                    <p className={'text-gray-500 text-sm mt-1'}>Welcome to EMR-SOLUTION, start processing claims</p>
                </section>

                {/* Notification */}
                <Notification title={'Tariff Uploads'}>
                    The NHIS tariff plan have been updated, please check on the tariff uploads.
                </Notification>

                {/* Tariff Uploads */}
                <section className={'mt-12'}>
                    <h2 className={'font-medium text-lg'}>Recent Tariff Uploads</h2>

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

                {/* Claimed Processing */}
                <section className={'mt-12'}>
                    <h2 className={'font-medium text-lg'}>Claimed Process</h2>

                    <div className={'w-full grid gap-2'}>
                        <div className={'w-full border-[1px] border-gray-300 mt-3 rounded-xl p-3 flex space-x-10'}>
                            <div className={'flex flex-col'}>
                                <div className={'flex items-center space-x-1'}>
                                    <IoMedicalOutline className={'text-blue-500'}/>
                                    <p className={'text-sm text-gray-500'}>Patient Name</p>
                                </div>
                                <h3 className={'font-medium'}>Hera Joachim</h3>
                            </div>

                            <div className={'flex flex-col'}>
                                <div className={'flex items-center space-x-1'}>
                                    <IoMedicalOutline className={'text-blue-500'}/>
                                    <p className={'text-sm text-gray-500'}>Diagnosis</p>
                                </div>
                                <h3 className={'font-medium'}>Specialist Initial Consultation</h3>
                            </div>

                            <div className={'flex flex-col'}>
                                <div className={'flex items-center space-x-1'}>
                                    <IoCallOutline className={'text-blue-500'}/>
                                    <p className={'text-sm text-gray-500'}>Phone</p>
                                </div>
                                <h3 className={'font-medium'}>080 8892 9928</h3>
                            </div>

                            <div className={'flex flex-col'}>
                                <div className={'flex items-center space-x-1'}>
                                    <IoCalendarOutline className={'text-blue-500'}/>
                                    <p className={'text-sm text-gray-500'}>Date</p>
                                </div>
                                <h3 className={'font-medium'}>23 07, 2025</h3>
                            </div>
                        </div>
                        <div className={'w-full border-[1px] border-gray-300 mt-3 rounded-xl p-3 flex space-x-10'}>
                            <div className={'flex flex-col'}>
                                <div className={'flex items-center space-x-1'}>
                                    <IoMedicalOutline className={'text-blue-500'}/>
                                    <p className={'text-sm text-gray-500'}>Patient Name</p>
                                </div>
                                <h3 className={'font-medium'}>Hera Joachim</h3>
                            </div>

                            <div className={'flex flex-col'}>
                                <div className={'flex items-center space-x-1'}>
                                    <IoMedicalOutline className={'text-blue-500'}/>
                                    <p className={'text-sm text-gray-500'}>Diagnosis</p>
                                </div>
                                <h3 className={'font-medium'}>Specialist Initial Consultation</h3>
                            </div>

                            <div className={'flex flex-col'}>
                                <div className={'flex items-center space-x-1'}>
                                    <IoCallOutline className={'text-blue-500'}/>
                                    <p className={'text-sm text-gray-500'}>Phone</p>
                                </div>
                                <h3 className={'font-medium'}>080 8892 9928</h3>
                            </div>

                            <div className={'flex flex-col'}>
                                <div className={'flex items-center space-x-1'}>
                                    <IoCalendarOutline className={'text-blue-500'}/>
                                    <p className={'text-sm text-gray-500'}>Date</p>
                                </div>
                                <h3 className={'font-medium'}>23 07, 2025</h3>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <Footer/>
        </main>
    )
}
export default Dashboard
