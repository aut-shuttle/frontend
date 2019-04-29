import axios from 'axios'

const token = ""

export default axios.create({
	baseURL: 'http://192.168.1.65:3000/',
	responseType: 'json',
	headers: { Authorization: 'Bearer ' + token }
})