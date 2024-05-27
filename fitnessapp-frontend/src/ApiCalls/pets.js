import api,{setAccessToken} from "./../api/api"
import Cookies from 'js-cookie'

const get_cities = async ()=>{
    const res = await api.get("/pets/cities/all")
    var ret = []
    for (var item in res.data){
        ret.push({ label: res.data[item], value: res.data[item] })
    }
    return ret
}

const get_all_pets = async ()=>{
    const res = await api.get("/pets/");
    return res.data;
}

export {get_cities,get_all_pets}