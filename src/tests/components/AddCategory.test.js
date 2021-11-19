import { AddCategory } from "../../components/AddCategory"
import { shallow } from 'enzyme'

describe('Pruebas del componente AddCategory', () => {

    const setCategories = jest.fn()

    let wrapper = shallow(<AddCategory setCategories={setCategories} />); //Lo dejo duplicado para no perder el tipado

    beforeEach(() => {
        jest.clearAllMocks() //realmente no cambia nada en este caso
        wrapper = shallow(<AddCategory setCategories={setCategories} />)
    })

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

    test('No debe de postear la información con submit', () => {

        wrapper.find('form').simulate('submit', { preventDefault() { } })

        expect(setCategories).not.toHaveBeenCalled()
    })

    test('debe de llamar el setCategories y limpiar la caja de texto', () => {

        //1. simular inputchange
        const value = 'Hola Mundo';
        wrapper.find('input').simulate('change', {
            target: {
                value: value
            }
        })

        expect(wrapper.find("input").prop("value")).toBe(value);

        //2. Simular el submit
        wrapper.find('form').simulate('submit', {
            preventDefault: jest.fn()
        })

        //3. setCtaegories se debe haber llamado 1 vez
        expect(setCategories).toBeCalled()
        expect(setCategories).toHaveBeenCalledTimes(1)
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function)) //Así me aseguro que le hayan pasado una función y no otra cosa

        //4. el valor del input debe ser ""
        expect(wrapper.find("input").prop("value")).toBe('');

    })

    

})


