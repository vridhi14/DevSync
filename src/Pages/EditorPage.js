import { useState } from "react";
import Client from "../components/Client";

function EditorPage(){

    const [clients , setClients] = useState([{}]); 

    return(
        <div className="mainWrap">
            {/* left side */}
            <div className="aside">
                <div className="asideIneer">
                    <div className="logo">
                        <img src="/dev-sync.png" alt="logo" className="logoImg"></img>
                    </div>
                    <h3>Connected</h3>
                    <div className="clientsList">
                        {
                            clients.map((client) => 
                                (<Client key={client.socketId} username={client.username}/>))
                        }
                    </div>
                </div>
            </div>

            {/* right side */}
            <div className="editorWrap"></div>
        </div>
    )
}

export default EditorPage; 