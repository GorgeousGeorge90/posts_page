import axios from "axios";

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
})

const postsApi = {
    getPosts: async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
        return response.data
    },
    getComments: async (postId) => {
        const response = await instance.get(`posts/${postId}/comments`)
        return response.data
    }
}

export default postsApi