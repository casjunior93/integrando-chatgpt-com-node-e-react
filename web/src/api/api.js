import axios from 'axios'

const URL_API = 'http://172.28.93.213:5555/api/prompt'

export const makeRequest = async(message) => {
  const {data} = await axios.post(URL_API, message)

  return data
}