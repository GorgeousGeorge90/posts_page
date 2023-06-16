import {useSelector} from 'react-redux';
import {render,screen} from '@testing-library/react';
import CardItem from "../components/CardItem/CardItem";
import Cards from "../Cards";

jest.mock('react-redux')

describe('test Cards components',()=> {
    it('goal: render CardItem component',()=> {
        const data = {
            description:'Hi',
            title:'Title',
            link:'nice',
            pic:'pic',
        }

        useSelector.mockReturnValue(data)
        const component = render(<CardItem {...data}/>)
        const cardItem = screen.getByRole('listitem')
        expect(component).toMatchSnapshot()
        expect(cardItem).toHaveTextContent('Title')
    })

    it('goal: render Cards component',()=> {
        const data = {
            works:[
                {id:1, title: 'Joke', body:'Lol'}
            ],
            isLoading: false,
        }
        useSelector.mockReturnValue(data)
        const component = render(<Cards {...data}/>)
        expect(component).toMatchSnapshot()
    })
})