import React from "react";

function Home(){
    return(
        <div className="homePageWrapper">
            <div className="formWrapper">
                <img className="homePageLogo" src="dev-sync.png" alt="dev-sync-logo"/>
                <h4 className="mainLabel">Paste Invitatin Room ID</h4>
                <div className="inputGroup">
                    <input type="text" className="inputBox" placeholder="Room Id"/>
                    <input type="text" className="inputBox" placeholder="UserName"/>

                    <button className="btn joinBtn"> Join </button>

                    <span className="createInfo">
                        If you don't have an Invite , then create &nbsp;
                        <a href="" className="createNewBtn">New Room</a>
                    </span>
                </div>
            </div>

            <footer>Build by Vridhi</footer>
        </div>
    ) 
}

export default Home ; 