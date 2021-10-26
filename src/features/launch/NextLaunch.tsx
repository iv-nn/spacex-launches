import React from 'react'
import { useGetNextLaunchQuery } from '../../services/spacex'

export function NextLaunch () {
    const {
        data,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetNextLaunchQuery()

    let content

    if (isLoading) {
        content = <>Loading...</>
    } else if(isError && error) {
        content = <>{error.toString()}</>
    } else if(isSuccess) {
        content = <>{data ? data.mission_name : null}</>
    }
    return (
        <div>
            {content}
        </div>
    )
}
