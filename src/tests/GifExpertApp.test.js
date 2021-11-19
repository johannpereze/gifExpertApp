import { shallow } from "enzyme"
import { GifExpertApp } from "../GifExpertApp"
import '@testing-library/jest-dom'

describe('Pruebas del componente GifExpertApp', () => {
    test('Debería hacer match con el snapshot', () => {
        const wrapper = shallow(<GifExpertApp />)

        expect(wrapper).toMatchSnapshot()
    })

    test('debe de mostrar una lista de categorías', () => {
        const categories = ["Evangelion", "Death Note"]
        const wrapper = shallow(<GifExpertApp defaultCategories={categories} />)
        expect(wrapper.find('GifGrid').length).toBe(categories.length)

    })


})
