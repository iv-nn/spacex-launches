export interface Launch {
    flight_number: number;
    mission_name: string;
    launch_date_utc: string;
    details: string;
    links: {
        mission_patch_small: string;
        youtube_id: string;
    }
}
