import api,{setAccessToken} from "./../api/api"
import Cookies from 'js-cookie'


const make_adoption_request = async (petId,userId)=>{
    console.log(petId);
    console.log(userId);
    petId = 1;
    userId = 1;
    try {
        const res = await api.post(`/adaption/request/${userId}/${petId}`,);
        console.log(res.data); // Print the response data for debugging
      } catch (error) {
        console.error(error.response.data); // Print the error response data
      }
}

const get_all_adoptions = async ()=>{
    const res = await api.get('/adaption/all');
    return res;
}

const get_adoptions_for_pet = async (petId)=>{
    console.log(petId)
    const res = await api.get(`/adoptions/pet/${petId}`);
    return res.data;
}

const get_adoption_of_user = async (userId)=>{
  console.log(userId)
  const res = await api.get(`/adoption/accepted/${userId}`)
  return res.data
}

export {make_adoption_request,get_all_adoptions,get_adoptions_for_pet,get_adoption_of_user}