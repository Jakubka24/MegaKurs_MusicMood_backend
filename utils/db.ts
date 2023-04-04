import {createPool} from "mysql2/promise"

export const pool = createPool({
    host: 'localhost',
    user: 'root',
    database: 'music_for_all_moods',
    decimalNumbers: true,
    namedPlaceholders: true,
})