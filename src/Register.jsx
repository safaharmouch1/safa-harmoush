import { useState } from "react";

function Register(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();


        const res = await fetch("http://localhost:5000/api/auth/register", {
            method: "POST",
            header: { "Content-Type" : "appliction/json" },
            body: JSON.stringify({name, email,password}),

        });

        const data = await res.json();
        alert(data.message);
        
    };

    return(
        <div className="min-h-screen flex items-center justify-center">
            <form onSubmit={handleSubmit} className="bg-white p-6 shadow-md rounded">
                <h2 className="text-2xl mb-4">Register</h2>

                <input 
                   type="text"
                   placeholder="Name"
                   className="border p-2 w-full mb-3"
                   onChange={(e) => setName(e.target.value)}
                 />

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