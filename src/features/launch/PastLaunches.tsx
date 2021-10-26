import React from 'react'
import { useGetPastLaunchesQuery } from '../../services/spacex'

export function PastLaunches() {
    const {
        data,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetPastLaunchesQuery()


    const list = (data || []).map((launch) =>
        <li key={launch.flight_number}>
            {launch.mission_name}
        </li>
    )
    return (
        <ul>
            {list}
        </ul>
    )
}
