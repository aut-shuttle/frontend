import axios from 'axios'

export default axios.create({
	baseURL: 'http://192.168.1.68:3000',
	responseType: 'json',
	headers: { Authorization: `Bearer ${localStorage.getItem('token') || ''}` }
})
