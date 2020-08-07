import {gifResponse} from "../test/mockData";

export default  {
    get: async () =>{
        return new Promise(resolve => {
            resolve(gifResponse)
        })
    },
}


