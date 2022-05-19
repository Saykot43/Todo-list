import React, { useState } from "react";

import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const handleUpload = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const mobile = event.target.mobile.value;
    // console.log(name, mobile);
    const url = `https://warm-badlands-09869.herokuapp.com/userAdd`;
    fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        name, mobile
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then(req => req.json())
      .then(data => console.log(data))
    navigate('list');
  }

  return (
    <div class="hero h-full bg-base-200">
      <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div class="card-body">
          <form onSubmit={handleUpload}>
            <input className="border rounded-xl p-3 mb-5" type="text" name="name" placeholder="Enter your name" />
            <input className="border rounded-xl p-3 mb-5" type="text" name="mobile" placeholder="Enter your mobile number" /><br />
            <button class="btn btn-accent">Button</button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Home;
