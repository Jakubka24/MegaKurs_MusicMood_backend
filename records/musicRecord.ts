import {v4 as uuid} from 'uuid'
import {pool} from "../utils/db";
import {FieldPacket} from "mysql2";
import {MusicEntity} from "../types";


export interface Music {
    id: string
    bandName: string
    songTitle: string
    musicGenre: string
    youTubeLink: string
}

export class MusicRecord implements MusicEntity {
    public id: string
    public bandName: string
    public songTitle: string
    public musicGenre: string
    public youTubeLink: string
    public validation?: boolean;

    constructor(obj: Music) {
        this.id = obj.id;
        this.bandName = obj.bandName;
        this.songTitle = obj.songTitle;
        this.musicGenre = obj.musicGenre;
        this.youTubeLink = obj.youTubeLink;
    }

    async insert(obj: any) {
        if (!this.id) {
            this.id = uuid()
        }

        if (obj === 'rockmusic')
            await pool.execute("INSERT INTO `rockmusic`(`id`,`Band_name`,`Song_title`,`Music_Genre`,`YouTube_link`) VALUES(:id,:Band_name,:Song_title,:Music_Genre,:YouTube_link)", {
                id: this.id,
                Band_name: this.bandName,
                Song_title: this.songTitle,
                Music_Genre: this.musicGenre,
                YouTube_link: this.youTubeLink,
            })

        else if (obj === 'metalmusic')
            await pool.execute("INSERT INTO `metalmusic`(`id`,`Band_name`,`Song_title`,`Music_Genre`,`YouTube_link`) VALUES(:id,:Band_name,:Song_title,:Music_Genre,:YouTube_link)", {
                id: this.id,
                Band_name: this.bandName,
                Song_title: this.songTitle,
                Music_Genre: this.musicGenre,
                YouTube_link: this.youTubeLink,
            })

        else if (obj === 'popmusic')
            await pool.execute("INSERT INTO `popmusic`(`id`,`Band_name`,`Song_title`,`Music_Genre`,`YouTube_link`) VALUES(:id,:Band_name,:Song_title,:Music_Genre,:YouTube_link)", {
                id: this.id,
                Band_name: this.bandName,
                Song_title: this.songTitle,
                Music_Genre: this.musicGenre,
                YouTube_link: this.youTubeLink,
            })
        else if (obj === 'technomusic')
            await pool.execute("INSERT INTO `technomusic`(`id`,`Band_name`,`Song_title`,`Music_Genre`,`YouTube_link`) VALUES(:id,:Band_name,:Song_title,:Music_Genre,:YouTube_link)", {
                id: this.id,
                Band_name: this.bandName,
                Song_title: this.songTitle,
                Music_Genre: this.musicGenre,
                YouTube_link: this.youTubeLink,
            })
        else if (obj === 'hiphopmusic')
            await pool.execute("INSERT INTO `hiphopmusic`(`id`,`Band_name`,`Song_title`,`Music_Genre`,`YouTube_link`) VALUES(:id,:Band_name,:Song_title,:Music_Genre,:YouTube_link)", {
                id: this.id,
                Band_name: this.bandName,
                Song_title: this.songTitle,
                Music_Genre: this.musicGenre,
                YouTube_link: this.youTubeLink,
            })
        else if (obj === 'classicmusic')
            await pool.execute("INSERT INTO `classicmusic`(`id`,`Band_name`,`Song_title`,`Music_Genre`,`YouTube_link`) VALUES(:id,:Band_name,:Song_title,:Music_Genre,:YouTube_link)", {
                id: this.id,
                Band_name: this.bandName,
                Song_title: this.songTitle,
                Music_Genre: this.musicGenre,
                YouTube_link: this.youTubeLink,
            })
        else if (obj === 'bluesmusic')
            await pool.execute("INSERT INTO `bluesmusic`(`id`,`Band_name`,`Song_title`,`Music_Genre`,`YouTube_link`) VALUES(:id,:Band_name,:Song_title,:Music_Genre,:YouTube_link)", {
                id: this.id,
                Band_name: this.bandName,
                Song_title: this.songTitle,
                Music_Genre: this.musicGenre,
                YouTube_link: this.youTubeLink,
            })
        else if (obj === 'countrymusic')
            await pool.execute("INSERT INTO `countrymusic`(`id`,`Band_name`,`Song_title`,`Music_Genre`,`YouTube_link`) VALUES(:id,:Band_name,:Song_title,:Music_Genre,:YouTube_link)", {
                id: this.id,
                Band_name: this.bandName,
                Song_title: this.songTitle,
                Music_Genre: this.musicGenre,
                YouTube_link: this.youTubeLink,
            })

        else if (obj === 'favourites') {

            try {
                await pool.execute("INSERT INTO `favourites`(`id`,`Band_name`,`Song_title`,`Music_Genre`,`YouTube_link`) VALUES(:id,:Band_name,:Song_title,:Music_Genre,:YouTube_link)", {
                    id: this.id,
                    Band_name: this.bandName,
                    Song_title: this.songTitle,
                    Music_Genre: this.musicGenre,
                    YouTube_link: this.youTubeLink,
                })
            } catch (err) {
                if (err.code === 'ER_DUP_ENTRY') {
                    this.validation = false;
                }
            }
        }
    }

    static async listAll(genre: string): Promise<MusicRecord[]> {
        if (genre === 'rock') {
            const [results] = await pool.execute("SELECT * FROM  `rockmusic`") as [MusicRecord[], FieldPacket[]]
            return results;
        } else if (genre === 'metal') {
            const [results] = await pool.execute("SELECT * FROM  `metalmusic`") as [MusicRecord[], FieldPacket[]]
            return results;
        } else if (genre === 'pop') {
            const [results] = await pool.execute("SELECT * FROM  `popmusic`") as [MusicRecord[], FieldPacket[]]
            return results;
        } else if (genre === 'alternative') {
            const [results] = await pool.execute("SELECT * FROM  `alternativemusic`") as [MusicRecord[], FieldPacket[]]
            return results;
        } else if (genre === 'blues') {
            const [results] = await pool.execute("SELECT * FROM  `bluesmusic`") as [MusicRecord[], FieldPacket[]]
            return results;
        } else if (genre === 'classic') {
            const [results] = await pool.execute("SELECT * FROM  `classicmusic`") as [MusicRecord[], FieldPacket[]]
            return results;
        } else if (genre === 'country') {
            const [results] = await pool.execute("SELECT * FROM  `countrymusic`") as [MusicRecord[], FieldPacket[]]
            return results;
        } else if (genre === 'hiphop') {
            const [results] = await pool.execute("SELECT * FROM  `hiphopmusic`") as [MusicRecord[], FieldPacket[]]
            return results;
        } else if (genre === 'techno') {
            const [results] = await pool.execute("SELECT     * FROM  `technomusic`") as [MusicRecord[], FieldPacket[]]
            return results;
        } else if (genre === 'favourites') {
            const [results] = await pool.execute("SELECT * FROM  `favourites`") as [MusicRecord[], FieldPacket[]]
            return results;
        }
    }

    async remove() {
        await pool.execute( "DELETE FROM `favourites`")}
}
