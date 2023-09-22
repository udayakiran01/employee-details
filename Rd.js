import React, { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';
import { Link } from 'react-router-dom';


function Rd() {
    const navigate = useNavigate();
    const [search, setSearch] = useState('');
    const [employees, setEmployees] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => setEmployees(res.data))
        .catch(err => console.log(err));}, [])

    const handledelete = (id) => {
        const confirm = window.confirm("would to like to delete?");
        if(confirm){
            axios.delete('https://jsonplaceholder.typicode.com/users/'+id)
            .then(res => {
                navigate('/Rd')
            }).catch(err => console.log(err))
        }
    }
    return (
                    <div>
                        <header className='header'>
                        <form >
                            <input type="text" placeholder='search for Employee..'
                            onChange={(e) => setSearch(e.target.value)}/>
                            </form>
                        <h1 className='text-center'>Employees</h1>
                        <button onClick={() => navigate("/Adddep")}>Add</button>
                        </header>
                        <button className='bn' onClick={() => navigate('/Listdep')}>Back</button>
                        <div className='row'>
                            <table className='table table-striped table-bordered table-center'>
                                <thead>
                                    <tr>
                                        <th >Name</th>
                                        <th >UserName</th>
                                        <th >Email id</th>
                                        <th >Phone Number</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody >
                                    {
                                        employees.filter((item) => {
                                            return search.toLowerCase() === '' ? item : item.name.toLowerCase().includes(search);
                                        }).map(
                                            employee => 
                                            <tr key = {employee.id}>
                                                <td>{employee.name}</td>
                                                <td>{employee.username}</td>
                                                <td>{employee.email}</td>
                                                <td>{employee.phone}</td>
                                                <td className='td'>
                                                    <button><Link className='text-decoration-none'to={'/read/${employee.id}'}>Read</Link></button>
                                                    <button><Link className='text-decoration-none'to={'/edit/${employee.id}'}>Edit</Link></button>
                                                    <button onClick={e => handledelete(employee.id)}><Link className='text-decoration-none'>Delete</Link></button>
                                                </td>
                                            </tr>
                                        )
                                    }
                                    </tbody>
                            </table>
                        </div>
                    </div>
                );

                  
}

export default Rd