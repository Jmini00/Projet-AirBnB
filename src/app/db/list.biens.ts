
import { Biens } from "../models/biens"

export const listBiens: Array<Biens> = [
    {
        id:1,
        type: 'maison',
        picture:'assets/b.png',
        prix:'50€',
        pictures:'',
        creation: new Date()

    },
    {
        id:2,
        type: 'appartement',
        picture:'assets/a.png',
        prix:'40€',
        pictures:'',
        creation: new Date()

    },
    {
        id:3,
        type: 'hotel',
        picture:'assets/m.png',
        prix:'60€',
        pictures:'',
        creation: new Date()

    },
]


