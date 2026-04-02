import React from 'react';
export default function App() {
  return (
    <main style={{
      fontFamily: 'Arial, sans-serif',
      minHeight: '100vh',
      display: 'grid',
      placeItems: 'center',
      background: '#f6f8fb',
      margin: 0
    }}>
      <div style={{
        background: 'white',
        padding: '2rem 3rem',
        borderRadius: '16px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
        textAlign: 'center'
      }}>
        <h1>Hello World</h1>
        <p>Welcome to your ReactJS project.</p>
      </div>
    </main>
  );
}
