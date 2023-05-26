import { Table, TableContainer,TableHead,TableRow,TableCell,TableBody, Button } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Appw from './Appw';

const Project = () => {
    var[names,setNames]=useState([]);
    var[update,setUpdate]=useState(false)
    var[singleValue,setSingleValue]=useState([])
    useEffect(()=>{
        axios("http://localhost:8080/see")
        .then((response)=>{
            setNames(response.data);
            console.log(response.data._id)

        })
    },[])
    const updateValue=(value)=>{
        setSingleValue(value);
        setUpdate(true);
        console.log("cliked update",value);
        
    }
    const deleteValue=(id)=>{
        console.log("delete id:",id);
        axios.delete("http://localhost:8080/delete/"+id)
        .then((response)=>{
            alert("deleted")
            window.location.reload(false)
        })
    }
    
    var finalJSX=
    <div style={{paddingTop:'100px'}}>
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>grade</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {names.map((value,index)=>{
                        return(
                            <TableRow>
                                <TableCell>{value.sname}</TableCell>
                                <TableCell>{value.sgrade}</TableCell>
                                <TableCell><Button onClick={()=>deleteValue(value._id)}>Delete</Button></TableCell> 
                                <TableCell><Button onClick={()=>updateValue(value)}>Update</Button></TableCell> 
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>   
        </TableContainer>
    
        </div>
          
        if(update)
            finalJSX=<Appw data ={singleValue} method="put"/>


        return (
        
        finalJSX
  )
}

export default Project