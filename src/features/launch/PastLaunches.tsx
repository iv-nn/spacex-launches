import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import Spinner from 'react-bootstrap/Spinner'
import Stack from 'react-bootstrap/Stack'
import { useGetPastLaunchesQuery } from '../../services/spacex'

export function PastLaunches() {
    const {
        data,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetPastLaunchesQuery()

    let content

    if (isLoading) {
        content = <div className="loading"><Spinner animation="border" /></div>
    } else if (isError && error) {
        content = <>{error.toString()}</>
    } else if (isSuccess && data) {
        const list = data.map((launch) =>
            <ListGroup.Item key={launch.flight_number}>
                <Stack direction="horizontal" gap={2}>
                    <img src={launch.links.mission_patch_small} className="past-launch-patch" />
                    <div>
                        <div>{launch.launch_date_utc}</div>
                        <div>{launch.mission_name}</div>
                    </div>
                    <a>
                        YT
                    </a>
                </Stack>
            </ListGroup.Item>
        )

        content =
            <ListGroup>
                {list}
            </ListGroup>
    }

    return (
        <div className="past-launches">
            <h3>Recent Activity</h3>
            {content}
        </div>
    )
}
