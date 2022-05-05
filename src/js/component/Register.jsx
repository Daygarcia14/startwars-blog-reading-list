import React, {useState} from 'React';

const Register = () => {
    
    const [register, setRegister]= useState({
        email: "",
        password: ""
    });
    return (  
        <div>
            <input type="text" name="email" onChange={(event)=> setRegister({...register, [event.target.name]:[event.target.value]})}/>
            <input type="text" name="password" onChange={(event)=> setRegister({...register, [event.target.name]:[event.target.value]})}/>
            <button type='button'>Registrar</button>
        </div>
    );
};

export default Register;