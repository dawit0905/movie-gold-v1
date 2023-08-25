import axios from "axios";

export default axios.create({
    baseURL: 'https://f5df-222-109-215-137.ngrok-free.app/',
    // header: {"ngrok-skip-browser-warning": "true"}
    headers: {
        'Content-Type': `application/json`,
        'ngrok-skip-browser-warning': '69420',
    }
    
});