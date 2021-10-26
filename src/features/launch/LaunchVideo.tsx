import Button from 'react-bootstrap/Button'
import Stack from 'react-bootstrap/Stack'
import { Launch } from '../../types/launch'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../app/store'
import { setSelected } from './launchSlice'

interface LaunchVideoProps {
    launch: Launch;
}

export function LaunchVideo ({launch}:LaunchVideoProps) {
    const dispatch: AppDispatch = useDispatch()

    return (
        <Stack direction="vertical" className="video-player" gap={2}>
            <iframe
                width="1038"
                height="584"
                src={`https://www.youtube.com/embed/${launch.links.youtube_id}`}
                title="YouTube video player"
                frameBorder="0"
                allowFullScreen />
            <Button className="close-video" onClick={() => dispatch(setSelected(null))}>
                Close video player
            </Button>
        </Stack>
    )
}
