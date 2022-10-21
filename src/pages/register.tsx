import React, { useState } from "react";
import Button from "../components/Button";
import TextInput from "../components/TextInput";

export default function register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");

  async function submit() {
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        body: JSON.stringify({ email, password, name, avatarUrl }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.status !== 201) {
        console.error(await res.text());
        return;
      }
      const data = await res.json();
      alert(`注册成功，${data.name}`);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="w-full flex justify-center">
      <div className="container lg:px-64 px-8 pt-16">
        <p className="text-3xl font-extrabold">用户注册</p>
        <div className="mt-8">
          <p>邮箱</p>
          <TextInput value={email} onChange={setEmail}></TextInput>
          <p className="mt-4">密码</p>
          <TextInput value={password} onChange={setPassword}></TextInput>
          <p>昵称</p>
          <TextInput value={name} onChange={setName}></TextInput>
          <p>头像</p>
          <TextInput value={avatarUrl} onChange={setAvatarUrl}></TextInput>
          <Button onClick={submit}>注册</Button>
        </div>
      </div>
    </div>
  );
}
