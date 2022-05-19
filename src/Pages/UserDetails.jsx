import React, { useState } from 'react';

import { useNavigate, useParams } from 'react-router-dom';
import { CustomHook } from '../Components/CustomHook';

const UserDetails = ({ user }) => {
    const { name, mobile } = user;

    const [users, setUsers, isReload, setIsReload] = CustomHook([]);

    const navigate = useNavigate();

    const edit = id => {
        navigate(`/edit/${id}`);
    }

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure delete this product?');
        if (proceed) {
            const url = `https://warm-badlands-09869.herokuapp.com/delete/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    // toast("Delete this Product")
                    // const rest = users.filter(user => user._id !== id);
                    setIsReload(data);
                    setUsers('delete');
                })
        }
    }

    return (
        <tr>
            <th>{name}</th>
            <td>{mobile}</td>
            <td>
                <button onClick={() => edit(user._id)} className='btn btn-primary mx-2'>Edit</button>
                <button onClick={() => handleDelete(user._id)} class="btn bg-red-500 mx-5">delete</button>
            </td>
        </tr>
    );
};

export default UserDetails;