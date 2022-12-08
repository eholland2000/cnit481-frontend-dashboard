import React,{useState} from 'react'
import fetch from "node-fetch";
const Login=()=>{
    const [email,setEmail]=useState("");
    const [passw,setPassw]=useState("");
    const[dataInput, setDataInput]=useState("");
    const fetch = require('node-fetch');
    const submitThis= event =>{
        event.preventDefault();
        const fetch = require('node-fetch');
        const info={username:email,password:passw};
        fetch('http://user-service:8082/login', {
            method: 'POST',
            mode: "cors",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(info)
        }).then(response => {
            console.log(response)
            window.location.href = 'http://dashboard:3000'
            return response;
        }).catch(err => {console.log(err);});
        // setDataInput([info]);
    }
    return(
        <div>
            <form id="myform" action="" onSubmit={submitThis}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="passw">Password</label>
                    <input type="text" name="passw" id="passw" value={passw} onChange={(e)=>setPassw(e.target.value)}/>
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    )}

export default Login;