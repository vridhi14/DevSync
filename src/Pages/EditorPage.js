

function EditorPage(){
    return(
        <div className="mainWrap">
            {/* left side */}
            <div className="aside">
                <div className="asideIneer">
                    <div className="logo">
                        <img src="/dev-sync.png" alt="logo" className="logoImg"></img>
                    </div>
                </div>
            </div>

            {/* right side */}
            <div className="editorWrap"></div>
        </div>
    )
}

export default EditorPage; 