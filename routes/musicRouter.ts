import {Router} from "express";
import {MusicRecord} from "../records/musicRecord";

export const musicRouter = Router();


musicRouter

    .get('/:genre', async (req, res) => {
        const musicList = await MusicRecord.listAll(req.params.genre)
        res.json(musicList)


    })

    .post('/add/:genre', async (req, res) => {
        const AddSong = new MusicRecord(req.body);
        await AddSong.insert(req.params.genre)
        res.json(AddSong)

    })

    .post(`/favourites`, async (req, res) => {
        const AddFavourite = new MusicRecord(req.body)
        await AddFavourite.insert('favourites')
        res.json(AddFavourite)
    })

    .delete('/:id', async (req, res) => {
        const removeFavourite = new MusicRecord(req.body)
        await removeFavourite.remove()
    })
