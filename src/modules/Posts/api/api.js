import axios from "axios";

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
})

const postsApi = {
    getPosts: async () => {
        const response = await instance.get('posts')
        console.log(response.data)
        return response.data
    },
    getComments: async (postId) => {
        const response = await instance.get(`posts/${postId}/comments`)
        return response.data
    }
}

export default postsApi