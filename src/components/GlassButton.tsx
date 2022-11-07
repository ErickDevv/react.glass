export interface GlassButtonProps {
    style?: React.CSSProperties
    icon?: React.ReactNode | string | null
}

const GlassButton = ({ style, icon }: GlassButtonProps) => {
    const newStyle = {
        width: "100px",
        height: "100px",
        backgroundColor: "rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(10px)",
        borderRadius: "20%",
        border: "none",
        boxShadow: "0 8px 32px 0 black",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center", ...style,
        cursor: "pointer",
    }

    return <>

        <button style={
            newStyle
        } className="glassGlassButton">{icon ? null : "Default"}</button>

    </>
}

export { GlassButton }