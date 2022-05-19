import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { SingleHook } from '../Components/SingleHook';

const EditUser = () => {
    const [data, setData] = useState([]);
    const { id } = useParams();
    const [user, setUser] = SingleHook(id);
    console.log(user);
    console.log(user);
    const navigate = useNavigate();

    const handleUpdate = (event) => {
        console.log(user);
        event.preventDefault();
        const name = event.target.name.value;
        const mobile = event.target.mobile.value;
        const url = `https://warm-badlands-09869.herokuapp.com/update/${id}`

        fetch(url, {
            method: 'PUT',
            body: JSON.stringify({
                name, mobile
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((data) => setData(data));

        // event.target.reset();
        navigate('/list');

    }

    const Name = (e) => {
        const { name, ...rest } = user;
        const newName = e.target.value;
        const nameNew = { name: newName, ...rest };
        setUser(nameNew);

    }
    const Mobile = (e) => {

        const { mobile, ...rest } = user;
        const newMobile = e.target.value;
        const MobileNew = { mobile: newMobile, ...rest };
        setUser(MobileNew);

    }

    return (
        <div class="hero h-full bg-base-200">
            <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div class="card-body">
                    <form onSubmit={handleUpdate}>
                        <input className="border rounded-xl p-3 mb-5" onChange={Name} type="text" name="name" value={user.name} />
                        <input className="border rounded-xl p-3 mb-5" onChange={Mobile} type="text" name="mobile" value={user.mobile} /><br />
                        <button class="btn btn-accent">Update</button>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default EditUser;