const Input = (changeFunction: any, id: string) => {

    //changeFunction(e.target.value)

    return (
        <>
            {/* create an imput with a red placeholder color style */}

            <input className={"GlassFormInput"} onChange={(e) => { changeFunction.changeFunction(e) }} placeholder="..." type="text" style={{
                width: "350px",
                height: "50px",
                backdropFilter: "blur(10px)",
                border: "none",
                backgroundColor: "rgba(255,255,255,0.02)",
                borderRadius: "10px",
                boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
                color: "white",
                marginTop: "15px",
                marginBottom: "15px",
                fontFamily: "sans-serif",
                fontSize: "20px",
                paddingLeft: "10px",
                outline: "none",
            }} />
        </>
    )
}

export interface formProps {
    setters: any
    click: any
    buttonText: string
}

/*{            <button onClick={() => setters[0]("data")}>Button</button>
}            */

function GlassForm({ setters, buttonText, click = "Click" }: formProps) {
    return (
        <>
            <form onSubmit={e => { e.preventDefault(); }} style={{
                minWidth: "400px",
                minHeight: "200px",
                backgroundColor: "linal-gradient(135deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(255,255,255,0) 100%)",
                backdropFilter: "blur(10px)",
                borderRadius: "2%",
                border: "none",
                boxShadow: "0 8px 32px 0 black",
                color: "white",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
            }} action="">
                <div style={{
                    width: "350px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "start",
                    marginTop: "15px",
                }}>
                    <h3 style={{
                        margin: "0px",
                        marginBottom: "2px",
                        fontSize: "28px",
                    }}>
                        REACT.GLASS FORM
                    </h3>
                    <div style={{
                        backgroundColor: "white",
                        width: "130px",
                        height: "5px",
                        marginBottom: "30px"
                    }}>
                    </div>
                </div>
                {
                    function () {
                        let persons = []
                        for (let i = 0; i < setters.length; i++) {
                            persons.push(<Input changeFunction={setters[i]}></Input>)
                        }
                        return persons
                    }()}
                <div style={{
                    width: "350px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "end",
                    marginTop: "20px",
                    marginBottom: "20px",
                }}>
                    <button onClick={() => {
                        click()
                        for (let i = 0; i < setters.length; i++) {
                            //@ts-ignore
                            document.getElementsByClassName("GlassFormInput")[i].value = ""
                        }
                    }} style={{
                        width: "120px",
                        height: "40px",
                        backgroundColor: "rgba(0, 0, 0, 0.3)",
                        border: "none",
                        borderRadius: "10px",
                        boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
                        cursor: "pointer",

                    }} type="submit"><p style={{
                        color: "#d2d2d2",
                        margin: "0px",
                        padding: "0px",
                        fontSize: "18px",
                        fontFamily: " system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
                        letterSpacing: "1px",
                        fontWeight: "bold",
                    }}>{buttonText}</p></button>
                </div>
            </form>

        </>

    )
}

export { GlassForm }
