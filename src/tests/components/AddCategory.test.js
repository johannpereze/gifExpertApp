import { AddCategory } from "../../components/AddCategory"
import { shallow } from 'enzyme'

describe('Pruebas del componente AddCategory', () => {

    const setCategories = () => { }

    const wrapper = shallow(<AddCategory setCategories={setCategories} />)

    test('Debería devolver el snapshot correctamente', () => {

        expect(wrapper).toMatchSnapshot()

    })

    test('Debería cambiar la caja de texto', () => {

        const input = wrapper.find('input');

        const value = 'Hola Mundo';

        input.simulate('change', {
            target: {
                value: value
            }
        })

        const inputAfter = wrapper.find("input");
        expect(inputAfter.prop("value")).toBe(value);

    })


})


// const inputForm = wrapper.find('form')
