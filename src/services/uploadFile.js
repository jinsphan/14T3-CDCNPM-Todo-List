import axios from "axios/index";
import { config } from './api/index'
const apiUrl = 'https://thuexettb.com/api'
const handleFilesAvatar = (fileName, containerName) => {
  return `${apiUrl}/containers/${containerName}/download/${fileName}`
}

 const uploadFile = (file) => new Promise((resolve, reject) => {
   this.file = file;
  let formData = new FormData();
  formData.append('file', this.file);
  return axios.post(`${apiUrl}/containers/container1/upload`,
    formData,
    {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    .then(function (response) {
    resolve(handleFilesAvatar(response.data.result.files.file[0].name, response.data.result.files.file[0].container))
  })
    .catch(function (error) {
      reject(error)
    })
})
export default uploadFile
