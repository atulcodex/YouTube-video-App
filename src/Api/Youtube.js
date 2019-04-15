import axios from 'axios';

const KEY = "AIzaSyCHNva0su2RVQ2Nx2uvsPSXnE5eVpMpFfU";

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});