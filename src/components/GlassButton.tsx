export interface GlassButtonProps {
    style?: React.CSSProperties
    icon?: React.ReactNode | string
}

const GlassButton = ({ style, icon }: GlassButtonProps) => {
    //add height prop to style
    const newStyle = {
        width: "100px",
        height: "100px",
        backgroundColor: "linal-gradient(135deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(255,255,255,0) 100%)",
        backdropFilter: "blur(10px)",
        borderRadius: "20%",
        border: "none",
        boxShadow: "0 8px 32px 0 black",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center", ...style

    }

    return <div style={
        newStyle
    } className="glassGlassButton">{icon}</div>
}

export { GlassButton }