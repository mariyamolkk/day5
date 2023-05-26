import { Button, TextField } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

const Appw = (props) => {
  var[datas,setDatas]=useState(props.data);
  console.log("add page props"+props.method);
  const inputHandler=(e)=>{
    const{name,value}=e.target
    setDatas((datas)=>({...datas,[name]:value}));
    console.log(datas)
  }
  const addValues=()=>{
    if (props.method==="post"){
    axios.post("https://localhost:8080/create",datas)
    .then((response)=>{
      console.log("data",response.data);
      alert("successfully added")
    })
    .catch(err=>console.log(err))
    }
  if(props.method==="put"){
    console.log("put")
    axios.put("http://localhost:8080/edit/"+datas._id,datas)
    .then((response)=>{
      alert("updated")
      window.location.reload(false)
    })
    .catch((err)=>{
      console.log(err);
    });
  }}
  return (
    <div style={{paddingTop:'100px',marginleft:'40%'}}>
      <TextField label='name' name='sname' value={datas.sname}onChange={inputHandler}/><br></br>
      <TextField label='grade' name='sgrade' value={datas.sgrade}onChange={inputHandler}/>
    <br/>
    <Button variant ='contained' onClick={addValues}>login</Button>
    </div>
  )
}

export default Appw