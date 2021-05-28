import React from 'react'

const Header = () => {
    return (
        <div className="">
            <div className="" style={header_div}>
              <h2>Contact Manager</h2>
            </div>
            
        </div>
    )
}

const header_div = {
    padding: '20px',
    textAlign: 'center',
    marginBottom: '40px',
    boxSizing: 'border-box',
    borderBottom: '2px solid #ccc',
}

export default Header
