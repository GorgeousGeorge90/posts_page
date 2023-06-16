import {useSelector} from "react-redux";
import {render,screen} from '@testing-library/react';
import Posts from "../Posts";
import PostItem from "../componets/PostItem/PostItem";

jest.mock("react-redux")


describe('Posts components', ()=> {
    it('goal:create Posts component without props',()=> {
        useSelector.mockReturnValue([])

        const component = render(<Posts/>)
        expect(component).toMatchSnapshot()
    })

    it('goal: create Posts component with props',()=> {
        const posts = [
            {userId: '1', title: 'Hi', body:'Nice'},
            {userId: '2', title: 'Hello', body:'Not nice!'},
            {userId: '2', title: 'Greeting', body:'Twice!'}
        ]
        useSelector.mockReturnValue(posts)

        const component = render(<Posts posts={posts}/>)
        expect(component).toMatchSnapshot()
    })

    it('goal: create PostItem component', ()=> {
        const post = {
            userId:'12',
            title: 'Hello',
            body: `It's nice to see you!`,
        }
        useSelector.mockReturnValue(post)

        const component = render(<PostItem {...post}/>)
        const postElement = screen.getByRole('listitem')
        expect(postElement).toHaveTextContent('Hello')
        expect(component).toMatchSnapshot()
    })

    it('goal: create PostInfo component',()=> {
        const data = {
            comments: [
                {id:1, title:'Ok', body:'Good!'},
            ],


        }

        useSelector.mockReturnValue(data)
    })
})