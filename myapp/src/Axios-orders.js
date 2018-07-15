import axios from 'axios'

const instance =axios.create({
    baseURL:'https://reactproject-3e851.firebaseio.com/'
})

export default instance;