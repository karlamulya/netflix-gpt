const checkValidData = (email, password, displayName)=>{    
 const isEmailValid =  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
 const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/.test(password);
 const isFullNameValid = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/.test(displayName)

if(!isEmailValid){
    return 'Email ID is not valid'
}

if(!isPasswordValid){
    return 'Password not valid'
}

if(!isFullNameValid){
    return 'Full Name not valid'
}

if(isEmailValid){ return null}
if(isPasswordValid){return null}
if(isFullNameValid){return null}

}


export default checkValidData;