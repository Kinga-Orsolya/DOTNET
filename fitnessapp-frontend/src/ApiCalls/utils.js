import api,{setAccessToken} from "./../api/api"
import Cookies from 'js-cookie'


const getImage = async(path)=>{
    try{
      const image = await api.get('/image/', { params: { path: path },responseType: 'blob' });
      return image
    }
    catch{
      return false
    }
  }

  export {getImage}