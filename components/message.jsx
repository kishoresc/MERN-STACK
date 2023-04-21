function Message(props) {
    return (
        <div style={{ color: "red", textTransform: "capitalize" }}>
            {props.children}
        </div>
    )
}

export default Message;