import React, { useState } from "react";
import {v4 as uuidV4} from 'uuid'; 
import toast from 'react-hot-toast'; 

function Home(){

    const [roomId , setRoomId] = useState(""); 
    const [username , setUsername] = useState(""); 

    const createNewRoom = (e)=>{
        e.preventdefalut(); 
        const id = uuidV4();
        setRoomId(id); 

        toast.success('Created a New Room'); 

    }

    return(
        <div className="homePageWrapper">
            <div className="formWrapper">
                <img className="homePageLogo" src="dev-sync.png" alt="dev-sync-logo"/>
                <h4 className="mainLabel">Paste Invitatin Room ID</h4>
                <div className="inputGroup">
                    <input type="text" className="inputBox" placeholder="Room Id" value = {roomId} onChange={(e)=> setRoomId(e.target.value)}/>

                    <input type="text" className="inputBox" placeholder="UserName" value = {userName} onChange={(e)=> setUsername(e.target.value)}/>

                    <button className="btn joinBtn"> Join </button>

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