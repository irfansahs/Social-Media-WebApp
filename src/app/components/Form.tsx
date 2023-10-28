"use client"

import { Button } from "primereact/button";
import { useState, useEffect } from "react";
import SignInButton from "./SignInButton";
import { useRouter } from 'next/navigation';


export default function Form() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  const router = useRouter();
  
  // 359247775554-f776m6md9juksvfh4anfccfmsroc32o0.apps.googleusercontent.com

  const onSubmit = (e: any) => {
    e.preventDefault();
    // API'ye kimlik bilgilerini gönderin.
    const data = {
      username,
      password,
    };

    fetch("https://localhost:7197/api/User/action", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
  
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          // Kullanıcıyı oturum açmış olarak işaretleyin.
          
          console.log(data);

        } else {
          // Kimlik bilgileri yanlışsa, bir hata gösterin.
  localStorage.setItem('jwt', data.accessToken);
  console.log(data.accessToken);
          // ...
        }
      });
      router.push("/Home");
  };

  return (
    <div className=" justify-center   bg-slate-100 rounded">
      <SignInButton />

      <form
        onSubmit={onSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            name="username"
            placeholder="Kullanıcı adı"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Password
          </label>
          <input
            className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            name="password"
            placeholder="Şifre"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit">Giriş Yap</button>
      </form>
    </div>
  );
}
