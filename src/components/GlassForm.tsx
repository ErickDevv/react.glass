import Params from "../types/GlassFormParams"

//@ts-ignore
import ReactGlass from "../assets/ReactGlass.png"

const Input = ({ type, placeholder, changeFunction }: any) => {
    return (

        <>
            <input className={"GlassFormInput"} type={type} placeholder={placeholder} onChange={(e) => { changeFunction(e) }} style={{
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


const GlassForm = ({ Form, Inputs }: Params) => {

    return (
        <>
            <form onSubmit={e => { e.preventDefault(); }} style={{
                maxWidth: "400px",
                height: "400px",
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
                        marginBottom: "3px",
                        fontSize: "28px",
                        fontFamily: "sans-serif",
                    }}>
                        {Form.title}
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
                        let inputArr = []
                        for (let i = 0; i < Inputs.length; i++) {

                            inputArr.push(<h3 style={{
                                margin: "0px",
                                marginBottom: "3px",
                                fontSize: "24px",
                                fontFamily: "sans-serif",
                            }}>
                                {Inputs[i].label}
                            </h3>)

                            inputArr.push(<Input changeFunction={Inputs[i].changeFunction} type={Inputs[i].type} />)
                        }
                        return inputArr
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
                        Form.submitFunction();
                        for (let i = 0; i < document.getElementsByClassName("GlassFormInput").length; i++) {
                            (document.getElementsByClassName("GlassFormInput")[i] as HTMLInputElement).value = "";
                        }
                    }} style={{
                        width: "180px",
                        height: "50px",
                        backgroundColor: "rgba(0, 0, 0, 0.3)",
                        border: "none",
                        borderRadius: "10px",
                        boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
                        cursor: "pointer",

                    }} type="submit"><p style={{
                        color: "#d2d2d2",
                        margin: "0px",
                        padding: "0px",
                        fontSize: "24px",
                        fontFamily: " system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
                        letterSpacing: "1px",
                        fontWeight: "bold",
                    }}>{Form.buttonText}</p></button>
                </div>
            </form>
            <div style={{
                width: "400px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "grey",
                marginTop: "5px",
                marginBottom: "5px",
                fontFamily: "sans-serif",
                fontSize: "10px",
            }}>
                <h2>Created with <a href="https://github.com/ErickDevv/react.glass" target="_blank" >React.Glass</a></h2>
                <img src={ReactGlass} style={{
                    width: "50px",
                    height: "50px",
                }} />
            </div>
        </>
    )
}

export { GlassForm }
