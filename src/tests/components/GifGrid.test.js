import { shallow } from "enzyme"
import { GifGrid } from "../../components/GifGrid"
import { useFetchGifs } from "../../hooks/useFetchGifs"
import "@testing-library/jest-dom";
jest.mock("../../hooks/useFetchGifs")

describe('Pruebas del componente GifGrid', () => {
    const category = "Evangelion"

    test('Debería hacer match con el snapshop', () => {

        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        })

        const wrapper = shallow(<GifGrid category={category} />)
        expect(wrapper).toMatchSnapshot()
    })

    test('Debe de mostrar items cuando se cargan imagenes con useFetchGifs', () => {

        const gifs = [{
            id: 5346457457,
            title: "titulo",
            url: "https://gfs.com/5346457457.gif",
        },
        {
            id: 53464346346347457,
            title: "titulo555",
            url: "https://gfs.com/534546457457.gif",
        }]

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        })

        const wrapper = shallow(<GifGrid category={category} />)

        expect(wrapper).toMatchSnapshot()
        expect(wrapper.find('p').exists()).toBe(false)
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length)

    })


})


