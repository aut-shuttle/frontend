import axios from 'axios'

export default axios.create({
	baseURL: 'http://localhost:3005',
	responseType: 'json',
	headers: { Authorization: `Bearer ${localStorage.getItem('token') || ''}` }
})
