import React, { useState } from "react";
import {v4 as uuidV4} from 'uuid'; 
import toast from 'react-hot-toast'; 
import {useNavigate} from 'react-router-dom'; 

function Home(){

    const navigate = useNavigate(); 
    const [roomId , setRoomId] = useState(""); 
    const [username , setUsername] = useState(""); 

    const createNewRoom = (e)=>{
        e.preventdefalut(); 
        const id = uuidV4();
        setRoomId(id); 
        toast.success('Created a New Room'); 
    }

    const joinRoom = ()=>{
        if(!roomId || !username){
            toast.error('RoomId and Username is required'); 
            return ; 
        }
        //redirect :
        navigate('/editor/${roomId}', {
            state: {
                username
            }
        }) 
    }

    const handleInputEnter = (e) =>{
        if(e.code == 'Enter'){
            joinRoom(); 
        }
    }

    return(
        <div className="homePageWrapper">
            <div className="formWrapper">
                <img className="homePageLogo" src="dev-sync.png" alt="dev-sync-logo"/>
                <h4 className="mainLabel">Paste Invitatin Room ID</h4>
                <div className="inputGroup">

                    <input type="text" className="inputBox" placeholder="Room Id" value = {roomId} onChange={(e)=> setRoomId(e.target.value)} onKeyUp={handleInputEnter}/>

                    <input type="text" className="inputBox" placeholder="UserName" value = {userName} onChange={(e)=> setUsername(e.target.value)} onKeyUp={handleInputEnter}/>

                    <button className="btn joinBtn" onClick={joinRoom}> Join </button>

                    <span className="createInfo">
                        If you don't have an Invite , then create &nbsp;
                        <a onClick={createNewRoom} href="" className="createNewBtn">New Room</a>
                    </span>
                </div>
            </div>

            <footer>Build by Vridhi</footer>
        </div>
    ) 
}

export default Home ; 