import axios from 'axios'

export default axios.create({
	baseURL: 'https://aut-staging-api.herokuapp.com',
	responseType: 'json',
	headers: { Authorization: `Bearer ${localStorage.getItem('token') || ''}` }
})
