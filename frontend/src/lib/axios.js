import axios from 'axios';

export const axiosInstance = axios.create({
	baseUrl:
		import.meta.env.MODE === 'development'
			? 'http://localhost:5000/api'
			: '/api',
	withCredentials: true,
});
