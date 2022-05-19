import React, { useEffect, useState } from 'react';
import { CustomHook } from '../Components/CustomHook';
import UserDetails from './UserDetails';

const List = () => {
    const [users, setUsers] = CustomHook([]);

    // useEffect(() => {
    //     fetch('https://warm-badlands-09869.herokuapp.com/users')
    //         .then(req => req.json())
    //         .then(data => {
    //             // console.log(data);
    //             setUsers(data)
    //         })

    // }, [])

    return (
        <div class="overflow-x-auto">
            <table class="table table-zebra w-full">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Mobile Number</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(user => <UserDetails
                            key={user._id}
                            user={user}
                        />)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default List;