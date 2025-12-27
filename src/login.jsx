import { useState } from 'react';

function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const handleSubmit = async (e) => {
        e.preventDefault();


    const res = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    alert(data.message);

    };

    return(
        <div className="min-h-screen flex items-center justify-center">
            <form onSubmit={handleSubmit} className="bg-white p-6 shadow-md rounded">
                <h2 className="text-2xl mb-4">Login</h2>


                <input 
                   type="Email"
                   placeholder="Email"
                   className="border p-2 w-full mb-3"
                   onChange={(e) => setEmail(e.target.value)}
                 /> 

                <input 
                   type="password"
                   placeholder="password"
                   className="border p-2 w-full mb-3"
                   onChange={(e) => setPassword(e.target.value)}
                   /> 


                  <button className="bg-blue-600 text-white px-4 py-2 w-full" >Register</button>

            </form>
        </div>

    );
}

export default Login;