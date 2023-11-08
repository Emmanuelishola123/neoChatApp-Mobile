export type callStatus = 'missed' | 'canceled' | 'received' | 'sent'

export enum callStatusColor {
    MISSED = '#Dc3545',
    SENT = '#0085ca',
    RECEIVED = '#28a745',
    CANCELED = '#ff6700',
}

export enum callStatusIconName {
    MISSED = 'call-missed',
    SENT = 'call-made',
    RECEIVED = 'call-received',
    CANCELED = 'call-merge',
}


export interface callProps {
    caller: string,
    time: string,
    status: callStatus,
    avatar: string | undefined
    duration: string
}