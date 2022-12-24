import React from 'react';

// Styles
const stylesForContent = 
`
  .about-text {
    font-size:1.2em;
  }

  span {
    font-weight:bold;
  }
`;

export default function About() {
  return (
    <div style={{display:'flex', flexDirection:'column', gap:'2em'}}>
        <style>{stylesForContent}</style>
        <h1>About Us</h1>
        <div>
            <p className='about-text'><span>Random Products</span> is a market place for real men (actually).</p>
            <p className='about-text'>Also we've got some <span>awards</span> for our work (maybe)</p>
            <p className='about-text'><span>Sample text</span></p>
            <p className='about-text'>No idea what to write here...</p>
        </div>
        <div>
            <p className='about-text'>We have many <span>feedbacks</span> from our users and you can <span>leave it as well!</span></p>
            <p className='about-text'>Just go to the 'Feedback' page, <span>if you see the button.</span></p>
        </div>
        <div>
            <p className='about-text'><span>Contacts page</span> will definitely help you to find out something about our location and ...</p>
            <p className='about-text'><span>Map, phone number, email address - all is there!</span></p>
        </div>
    </div>
  )
}