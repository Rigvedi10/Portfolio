import React from 'react';

export default function Contact() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Contact Me</h1>
      <p>If you’d like to get in touch, just drop me a message!</p>

      <form style={{ display: 'flex', flexDirection: 'column', maxWidth: '400px' }}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows="5" required></textarea>

        <button type="submit" style={{ marginTop: '1rem' }}>Send</button>
      </form>
    </div>
  );
}
