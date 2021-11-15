import { getGifs } from "../../helpers/getGifs";

describe('Pruebas con getGifs fetch', () => {

    test('Debe de traer 10 elementos', async () => {

        const gifs = await getGifs('usa');
        console.log(gifs);
        expect(gifs.length).toBe(10)

    })


})
