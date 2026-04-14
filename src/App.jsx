import { Routes, Route, Link } from 'react-router-dom';

import React, { useEffect, useState } from "react";

export default function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("/api/test")
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((err) => console.error(err));
  }, []);
  function Home() {
    return (
      <main style={pageStyle}>
        <div style={cardStyle}>
          <h1>Hello World</h1>
          <p>Welcome to your ReactJS project.</p>
          <Link to="/next">Go to Next Page →</Link>
          <p>API Response:</p>   
        <strong>{message}</strong>
        </div>
      </main>
    );
  }
        
  function Next() {
    return (
      <main style={pageStyle}>
        <div style={cardStyle}>
          <h1>Hello Next</h1>
          <p>You are on /next route.</p>
          <Link to="/">← Back Home</Link>
      
        </div>
      </main>
    );
  }
  

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/next" element={<Next />} />
    </Routes>
  );
}

const pageStyle = {
  fontFamily: 'Arial, sans-serif',
  minHeight: '100vh',
  display: 'grid',
  placeItems: 'center',
  background: '#f6f8fb',
  margin: 0
};

const cardStyle = {
  background: 'white',
  padding: '2rem 3rem',
  borderRadius: '16px',
  boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
  textAlign: 'center'
};


