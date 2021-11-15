import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';

describe("Pruebas del GifGridItem component", () => {
    const title = "Esto es un título"
    const url = "https://localhost/algo.jpg"

    const wrapper = shallow(<GifGridItem title={title} url={url} />);

    test("debería renderizar correctamente el componente haciendo match con el snapshot", () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de tener un párrafo con el title', () => {
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title)
    })
    test('Debe de tener una iamgen con su URL', () => {
        const img = wrapper.find('img');
        expect(img.props().alt).toBe(title)
    })

    test('debe tener la clase animate__fadeIn', () => {
        const fadeInClass = "animate__fadeIn"

        const fadeInDiv = wrapper.find('div');

        expect(fadeInDiv.props().className).toContain(fadeInClass)
    })


});