import React from 'react'
import Card from 'react-bootstrap/Card'
import Spinner from 'react-bootstrap/Spinner'
import Stack from 'react-bootstrap/Stack'
import { useGetNextLaunchQuery } from '../../services/spacex'

export function NextLaunch () {
    const {
        data,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetNextLaunchQuery()

    const formatDate = (date: string) => {
        const parsedDate = new Date(date)
        const options: Intl.DateTimeFormatOptions = {
            weekday: 'long',
            day: 'numeric',
            month: 'long',
            year: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric'
        }
        return new Intl.DateTimeFormat('default', options).format(parsedDate)
    }

    let content

    if (isLoading) {
        content = <div className="loading"><Spinner animation="border" /></div>
    } else if(isError && error) {
        content = <>{error.toString()}</>
    } else if(isSuccess && data) {
        content =
            <Stack direction="horizontal" gap={4}>
                <img src={data.links.mission_patch_small} className="next-launch-patch" alt="patch" />
                <div>
                    <h3>{data.mission_name}</h3>
                    <span>{formatDate(data.launch_date_utc)}</span>
                    <p>{data.details}</p>
                </div>
            </Stack>
    }

    return (
        <Card>
            <Card.Body>
                <Card.Title><h2>Next Launch</h2></Card.Title>
                <Card.Text as="div">{content}</Card.Text>
            </Card.Body>
        </Card>
    )
}
