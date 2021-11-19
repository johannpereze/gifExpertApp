import '@testing-library/react-hooks'
import { useFetchGifs } from "../../hooks/useFetchGifs"
import { renderHook } from "@testing-library/react-hooks"

describe('Pruebas del custom hook useFetchGifs', () => {

    test('Debe de retornar el estado incial', async () => {

        const category = 'Evangelion'

        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs(category))
        const { data, loading } = result.current

        await waitForNextUpdate()
        
        // const { data, loading } = useFetchGifs(category);

        console.log(data, loading);

        expect(data).toEqual([])
        expect(loading).toBe(true)

    })

    test('debe de retornar un arreglo de imágenes y loading en false', async() => {
        const category = 'Evangelion'

        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs(category))
        await waitForNextUpdate()
        const { data, loading } = result.current

        expect(data.length).toEqual(10)
        expect(loading).toBe(false)

    })


})
