import React from 'react'
import {IoMedicalOutline, IoPricetagOutline} from "react-icons/io5";
import {ITariff} from "@/interface";

interface IProps {
    tariff: ITariff
}

const TariffComponent = ({tariff}: IProps) => {
    return (
        <div className={'w-full border-[1px] border-gray-300 mt-3 rounded-xl p-3 flex flex-col lg:flex-row space-y-3 lg:space-x-10 lg:space-y-0 lg:justify-between lg:items-center'}>
            <div className={'min-w-max flex flex-col'}>
                <div className={'flex items-center space-x-1'}>
                    <IoMedicalOutline className={'text-blue-500'}/>
                    <p className={'text-sm text-gray-500 font-medium'}>Name</p>
                </div>
                <h3 className={''}>{tariff.name}</h3>
            </div>

            <div className={'w-full flex flex-col'}>
                <div className={'flex items-center space-x-1'}>
                    <IoMedicalOutline className={'text-blue-500'}/>
                    <p className={'text-sm text-gray-500 font-medium'}>General Description</p>
                </div>
                <h3 className={''}>{tariff.description}</h3>
            </div>

            <div className={'flex flex-col'}>
                <div className={'flex items-center space-x-1'}>
                    <IoPricetagOutline className={'text-blue-500'}/>
                    <p className={'text-sm text-gray-500 font-medium'}>Price</p>
                </div>
                <h3 className={''}>₦{Intl.NumberFormat().format(tariff.price)}</h3>
            </div>
        </div>
    )
}
export default TariffComponent
