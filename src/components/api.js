import axios from 'axios'
const token =
	'e6e052e36ba0ea6110c96c37c6116e1fae49dcef0e9447f7d7402f93e2a823fb752df0ac57fe5e99eebc78993a480078b1df6e7b37a6d9c8786df9e6af0869fd6a1d7b59fd8129b91ef4021cd7d07159afc2f8db6b20b734472500a1693c6f1eafb88f7600dd9d69a949059fc623c00df6d583dadaf7ee0afdf0cb81899d1bc41f897244b820f3b35445a630f4f8339d501a06634f0d8df9b99720af73b06d59'
export default axios.create({
	baseURL: 'http://localhost:3000/',
	ResponseType: 'json',
	headers: { Authorization: 'Bearer' + token }
})
