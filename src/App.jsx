import { useState, useEffect } from 'react';
import './App.css';
import {Title} from "@/components/Title.jsx";
import {Form} from "@/components/Form.jsx";

function App() {

  return (
    <div>
        <Title/>
        <Form/>
    </div>
  );
}

export default App;
