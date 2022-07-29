import React from "react";
import { db } from "./firebase-config";
import { collection, addDoc } from "firebase/firestore";
import { Input, InputLabel, FormControl, Button } from "@mui/material";

export default function AddTodo() {
  const [title, setTitle] = React.useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title !== "") {
      await addDoc(collection(db, "todos"), {
        title,
        completed: false,
      });
      setTitle("");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="input_container">
        <FormControl>
            <InputLabel>Write a To-Do ✅</InputLabel>
            <Input value={title} onChange={(e) => setTitle(e.target.value)} ></Input>
        </FormControl>
        
      </div>
      <div className="btn_container">
        <Button variant="contained">Add</Button>
      </div>
    </form>
  );
}