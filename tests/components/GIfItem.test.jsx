import { screen, render, getByRole } from "@testing-library/react"
import { GifItem } from "../../src/components"

describe('Prueba del componente <GifItem/>', () => { 
    const title = 'saitama';
    const url = 'https://one-punch-man.jpg/';

    test('Debe hacer match con snapshot', () => { 
        const {container} = render(<GifItem title={title} url={url}/>);
        expect(container).toMatchSnapshot();
     })

    test('Debe de mostrar la imagen con el URL y el ATL indicado', () => { 
        render(<GifItem title={title} url={url}/>);
        //screen.debug();
        //expect(screen.getByRol('img').src).toBe(url);
        //expect(screen.getByRol('img').alt).toBe(title);
        const {src, alt} = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);
    })

    test('Debe de mostrar el titulo en el componente', () => { 
        render(<GifItem title={title} url={url}/>);
        expect(screen.getByText(title)).toBeTruthy();
    })
 })