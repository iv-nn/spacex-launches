import launchReducer, {
    LaunchState,
    setSelected
} from './launchSlice'

describe('launch reducer', () => {
    const initialState: LaunchState = {
        selected: null
    }
    const launch = {
        flight_number: 1,
        mission_name: 'Some mission',
        launch_date_utc: '2020-12-06T16:17:00.000Z',
        details: 'Some details',
        links: {
            mission_patch_small: '',
            youtube_id: ''
        }
    }

    it('should handle setting selected', () => {
        const actual = launchReducer(initialState, setSelected(launch))
        expect(actual.selected).toEqual(launch)
    })
})
