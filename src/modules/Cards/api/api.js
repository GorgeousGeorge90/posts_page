import supabase from "./client";


const aboutApi = {
    getWorks: async () => {
        let {data: examples_works, error} = await supabase
            .from('examples_works')
            .select('*')

        return examples_works
    },
    getImages: async () => {
        const pick = await fetch('https://uhhpxrydhbzktznkfszl.supabase.co/storage/v1/object/public/images/pic/pick.png')
        const weather = await fetch('https://uhhpxrydhbzktznkfszl.supabase.co/storage/v1/object/public/images/pic/weather.png')
        return [pick.url,weather.url]
    }
}


export default aboutApi