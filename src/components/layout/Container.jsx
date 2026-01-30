function Container(Children) {
    return (
        <div style={{maxWidth: "1280px", margin: "0 auto", padding: "0 24px", alignItems: "center"}}>
  
            {Children}
        </div>
    )
}

export default Container
