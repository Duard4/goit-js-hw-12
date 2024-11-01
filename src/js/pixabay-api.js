import axios from 'axios'


export async function ImageSearch(source, options) {
	
	const response = await axios.get(`${source}${options}`)
	return response.data;
}
