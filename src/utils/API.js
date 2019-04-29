import axios from 'axios'

const token = ""

export default axios.create({
	baseURL: 'http://localhost:3000',
	responseType: 'json',
	headers: { Authorization: `Bearer ${localStorage.getItem('token') || ""}` }
})