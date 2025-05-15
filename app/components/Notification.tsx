import React from 'react'

interface NotificationProps {
    title: string
    children?: React.ReactNode
}

const Notification = ({title, children}: NotificationProps) => {
    return (
        <section className={'bg-green-50 p-5 mt-7 rounded-xl'}>
            <div className={'flex items-center space-x-2'}>
                <p className={'bg-green-500 text-green-100 w-10 text-center rounded text-xs p-1'}>New</p>
                <p className={'font-medium'}>{title}</p>
            </div>
            <p className={'text-sm mt-2'}>{children}</p>
        </section>
    )
}
export default Notification
