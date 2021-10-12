import React from 'react'

const Footer = () => {
    let footerStyle={
     

        width:"100%",
        color:"red"
    }
    return (
        <footer className="bg-dark text-light py-3" style={footerStyle}>
            <p className="text-center" >
          Copyright &copy; All Rights Reserved  
            </p>        
        </footer>
    )
}

export default Footer
