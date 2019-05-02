import axios from 'axios'
const token =
	'e6e052e36ba0ea6110c96c37c6116e1fae49dcef0e9447f7d7402f93e2a823fb752df0ac57fe5e99eebc78993a480078b1df6e7b37a6d9c8786df9e6af0869fdc9f8232253e02e977938da2b840051e8bf78fda64ce7cb279ded850fc019cbb87f7c129b03ccb5baa6579c3f179246291c4c2e03a72dc835f7d89f384bb61eb45d99a07a84c704e13c16a50b2fc375c3e03f64e17a2a56d1776da5dd86d33338'
export default axios.create({
	baseURL: 'http://localhost:3000/',
	ResponseType: 'json',
	headers: { Authorization: 'Bearer' + token }
})
