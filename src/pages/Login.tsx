/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import { useLoginMutation } from "src/slices/userApiSlice";
import { useDispatch } from "react-redux";
import { setCredentials } from "src/slices/authSlice";

const Login = () => {
  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await login({ email, password }).unwrap();
      dispatch(setCredentials({ ...res }));
    } catch (error) {
      alert("Problem logging in");
    }
  };

  if (isLoading) return <>Loading</>;

  return (
    <form onSubmit={onSubmitHandler}>
      <label>Email</label>
      <input type="email" onChange={(e) => setEmail(e.target.value)}></input>
      <label>Password</label>
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <button>Submit</button>
    </form>
  );
};

export default Login;
