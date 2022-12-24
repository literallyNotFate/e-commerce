import React from 'react'
// Styles
import '../styles/Contacts.css';

export default function Contacts() {
  return (
    <div className='contacts-content'>
        <h1>Contacts</h1>

        <div className='map-info'>
          <div>
              <h2>Where to find us?</h2>
              <p>So here is the map where <span>our main office is.</span></p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a pharetra est, id venenatis elit. Maecenas tincidunt vestibulum leo a placerat. 
                Curabitur vitae eleifend sem, a malesuada dolor. Fusce ullamcorper ante non sapien ultricies, sed mattis purus efficitur.</p>
              <p>Nullam bibendum, leo sed cursus faucibus, sem est luctus nunc.</p>
          </div>
         
          <div class="mapouter">
              <div class="gmap_canvas">
                  <iframe width="300" height="300" id="gmap_canvas" title='map' 
                    src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed" 
                    frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
                  </iframe>  
              </div>
          </div>
        </div>

        <div className='phone-info'>
            <div><i className='big-icon left-icon-pos material-icons'>phone</i></div>

          <div>
              <h2>How to contact us by phone?</h2>
              <p>Information <span>about the phone.</span> (123456789)</p>
              <p>Mauris sit amet consequat ante, sed sodales tortor. Aliquam blandit vel sem vitae facilisis. Nunc fermentum mauris massa, et 
                pulvinar dui hendrerit sit amet. Nullam fermentum aliquam posuere.</p>
              <p>Fusce lobortis augue id sapien egestas, a scelerisque magna laoreet.</p>
          </div>
        </div>

        <div className='email-info'>
            <div>
                <h2>How to contact us by email?</h2>
                <p>Information <span>about the email.</span> (randomproducts@gmail.com)</p>
                <p>Duis molestie, tellus et volutpat malesuada, metus metus lacinia eros, nec congue diam dui vitae erat. Nunc ut congue sem. Nunc sit amet aliquet lorem. 
                Fusce finibus enim eu purus consequat, non porttitor nunc pulvinar. Nulla facilisi.</p>
                <p>Duis venenatis nec nisl fermentum interdum.</p>
            </div>

            <div><i className='big-icon right-icon-pos material-icons'>mail</i></div>
        </div>
    </div>
  )
}