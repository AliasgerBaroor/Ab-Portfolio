import axios from "axios"

const apiURL = "http://localhost:8020/api/add/message/"

const addMessage = async (userMessage) => {
    return await axios.post(apiURL, userMessage)
}

export { addMessage }