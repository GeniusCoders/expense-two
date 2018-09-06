import React from 'react'
import ReactDOM from 'react-dom'

const Info = (props) => (
    <div>
     <h2>Info</h2>
     <p>This is info : {props.in}</p>
    </div>
)

const requireAuth = (Wrapped) => {
   return (props) => ( 
    <div>

     {props.isAuth ? <Wrapped {...props}/> : 'Please Login Authenticate' }
    </div>
   )
}

const AuthPage = requireAuth(Info)


ReactDOM.render(<AuthPage isAuth={true} in='nilesh kadam'/> ,document.getElementById('con'))