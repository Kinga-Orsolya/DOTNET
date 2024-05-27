import api,{setAccessToken} from "./../api/api"
import Cookies from 'js-cookie'


const fatchTransactions = async (setTransactions) => {
    const response = await api.get('/transactions/')
    setTransactions(response.data)
  }

const getCurrenctUser = async () =>{
  const userToken = Cookies.get('userToken')
  if (userToken){
    try{
      setAccessToken(userToken)
      const res = await api.get('/users/me/')
      console.log(res.data)
      return res.data;
    }
    catch (error){
      console.log(error)
      return false
    }
  } 
}

const logOut = async ()=>{
  Cookies.remove('userToken');
}

const authorize = async (loginData,setLoginData,event,reload) =>{
  if (event)
    event.preventDefault()
  try{
    let fd = new FormData()
    fd.append('username', loginData.username)
    fd.append('password', loginData.password)
    console.log(loginData)
    const res = await api.post('/token',fd)
    const token = res.data
    setAccessToken(token.access_token);
    console.log(token.access_token)
    Cookies.set('userToken',token.access_token,{ expires: 1 })
    if (setLoginData)
      setLoginData({
        username:"",
        password:""
      })
    const res2 = await api.get('/users/me/');
    console.log(res2) 
    reload()
  }
  catch (error){
    console.log(error)
    return false
  }
}

  const handleInputChange = (Data,setData,event) =>{
    const value = event.target.value
    setData({
      ...Data,
      [event.target.name]:value,
    })
    console.log(Data)
  }

  const handleFormSubmit = async (formData,setFormData,event) => {
    event.preventDefault()
    const fd = new FormData();
    fd.append('username', formData.username);
    fd.append('password', formData.password);
    await api.post('/user/',fd);
    setFormData({
      username:"",
      password:""
    });
  }

  const handleFormSubmitSignUp = async (formData,setFormData,event,reload) => {
    event.preventDefault()
    await api.post('/user/',formData);
    const loginData = {
      username:formData.username,
      password:formData.password
    }
    await authorize(loginData)
    setFormData({
      username:"",
      password:"",
      first_name:"",
      last_name:"",
      email:""
    });
    reload();
  }

  const uploadImage = async(event,image,setImage)=>{
    event.preventDefault()
    console.log(image)
    const formData = new FormData();
    formData.append('file', image);
    await api.post('/image/',formData);
    setImage({
      file:""
    })
  }

  const handleLoginSubmit = async (userData,setFormData,setTransactions,event)=>{
    event.preventDefault()
    await api.post('/token',userData.username,userData.password)
    
  }

  const handleUpdateFormSubmit = async (data,setData,user,event)=>{
    event.preventDefault();
    console.log(data);
    console.log(user.id);
    
    const fd = {
      "username": data.username,
      "email": data.email,
      "first_name": data.first_name,
      "last_name": data.last_name,
      "id": user.id,
      "age": parseInt(data.age, 10),
      "address": data.address,
      "ocupation": data.ocupation,
      "family_status": data.family_status,
      "living_arangment": data.living_arangment,
      "description": data.description
    }
    console.log(fd);
    try{
      await api.put(`/update_user/${user.id}`,fd);
    }
    catch(e){
      console.log(e)
    }
  }

  export {handleUpdateFormSubmit, logOut,handleInputChange, handleFormSubmit,fatchTransactions,getCurrenctUser,authorize,handleFormSubmitSignUp,uploadImage };