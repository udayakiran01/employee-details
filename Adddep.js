import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router';
function Adddep(){
    const navigate = useNavigate();
    const [values, setValues] = useState({
        name: "",
        username: "",
        email: "",
        phone:""
    })

    const handlesubmit = (event) => {
        event.preventDefault();
        axios.post('https://jsonplaceholder.typicode.com/users',values)
        .then(res => 
            {
                console.log(res);
                navigate('/Rd')
            })

    }
   

        
        return (
            <><div >
              
              <div className='card col-md-6 offset-md-3 offset-md-3'>
                <header className='head'>
                    <h1 >Add Employee</h1>

                    </header>
                    <div className='card-body'>
                <form className='form' onSubmit={handlesubmit}>

                <span className='span'>Name</span>
                    <input type='text' name='name' placeholder='Enter dep..'
                    onChange={e => setValues({...values, name: e.target.value})} />

                <span className='span'>UserName</span>
                    <input type='text' name='username' placeholder='Enter name..' 
                    onChange={e => setValues({...values, username: e.target.value})}  />


                <span className='span'>Email id</span>
                    <input type='text' name='email' placeholder='Enter date..' 
                    onChange={e => setValues({...values, email: e.target.value})}  />

                    
                <span className='span'>Phone Number</span>
                    <input type='text' name='phone' placeholder='Enter Email..' 
                   onChange={e => setValues({...values, phone: e.target.value})}  />
                     
                     <button className='bn'>Submit</button>
                     <button className='bn' onClick={() => navigate('/Rd')}>Back</button>
                </form>
                </div>
            
            
                </div>
                
                </div>
                </>
      
        
        );
    }



export default Adddep;