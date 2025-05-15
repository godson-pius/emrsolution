'use client'

import React from 'react'
import {decryptLS, getGreetingBasedOnHour} from "@/util/nonServer";
import {IEntity} from "@/interface";

const Greeting = () => {
    const loggedEntity = decryptLS('memo') as unknown as IEntity;

    return (
        <section className={'mt-12'}>
            <h1 className={'text-2xl font-medium'}>{getGreetingBasedOnHour()}, {loggedEntity?.entityName} 👋</h1>
            <p className={'text-gray-500 text-sm mt-1'}>Welcome to EMR-SOLUTION, start processing claims</p>
        </section>
    )
}
export default Greeting
