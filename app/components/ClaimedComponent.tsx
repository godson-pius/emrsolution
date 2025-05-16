'use client'

import React from 'react'
import {IoCalendarOutline, IoCallOutline, IoMedicalOutline} from "react-icons/io5";
import {IClaim} from "@/interface";
import moment from "moment/moment";
import {useRouter} from "next/navigation";
import {encryptLS} from "@/util/nonServer";

interface IProps {
    claim: IClaim
}

const ClaimedComponent = ({claim}: IProps) => {
    const router = useRouter()

    const handlePrint = async () => {

        console.log(claim)
        encryptLS('claim', claim as unknown as string)
        router.push('/print')
    }
    return (
        <div onClick={() => handlePrint()} className={'w-full border-[1px] border-sky-300 mt-3 rounded-xl p-3 flex flex-col lg:flex-row space-y-3 lg:space-x-10 lg:space-y-0 lg:items-center cursor-pointer'}>
            <div className={'flex flex-col'}>
                <div className={'flex items-center space-x-1'}>
                    <IoMedicalOutline className={'text-blue-500'}/>
                    <p className={'font-medium text-sm text-gray-500'}>Patient Name</p>
                </div>
                <h3 className={''}>{claim.fullname}</h3>
            </div>

            <div className={'flex flex-col'}>
                <div className={'flex items-center space-x-1'}>
                    <IoMedicalOutline className={'text-blue-500'}/>
                    <p className={'font-medium text-sm text-gray-500'}>Diagnosis</p>
                </div>
                <h3 className={''}>{claim.services.toString()}</h3>
            </div>

            <div className={'flex flex-col'}>
                <div className={'flex items-center space-x-1'}>
                    <IoCallOutline className={'text-blue-500'}/>
                    <p className={'font-medium text-sm text-gray-500'}>Phone</p>
                </div>
                <h3 className={''}>{claim.phone}</h3>
            </div>

            <div className={'flex flex-col'}>
                <div className={'flex items-center space-x-1'}>
                    <IoCalendarOutline className={'text-blue-500'}/>
                    <p className={'font-medium text-sm text-gray-500'}>Admission Date</p>
                </div>
                <h3 className={''}>{moment(claim.admissionDate).format('MMMM DD, YYYY')}</h3>
            </div>

            <div className={'flex flex-col'}>
                <div className={'flex items-center space-x-1'}>
                    <IoCalendarOutline className={'text-blue-500'}/>
                    <p className={'font-medium text-sm text-gray-500'}>Date Claimed</p>
                </div>
                <h3 className={''}>{moment(claim.createdAt).format('MMMM DD, YYYY')}</h3>
            </div>
        </div>
    )
}
export default ClaimedComponent
