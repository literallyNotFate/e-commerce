import React, {useState} from 'react';
// Styles
import '../styles/Feedback.css';
// npm i randomcolor (for user avatars)
import randomColor from 'randomcolor';


// Feedback
export default function Feedback() {

    const [username, setUsername] = useState('');
    const [feedback, setFeedback] = useState('');

    const [comment, setComment] = useState([]);

    // Add username + feedback (comment) to array shown below
    const addComment = (usernameValue, feedbackValue) => {
        let newComment = [...comment];

        let commentAdd = 
        {
            username: usernameValue,
            feedback: feedbackValue,
            color:randomColor(), // picking color for avatar
        }; 

        newComment.push(commentAdd);
        setComment(newComment);
    }

    // Delete comment by index
    const deleteComment = (index) => {
        let backupComment = [...comment];
        backupComment.splice(index, 1);

        setComment(backupComment);
    }


    return (
      <div className='feedback-content'>
          <h1>Feedback</h1>

          <div className='feedback-set'>
              <div>
                  <h2>Set username</h2>
                  <input type='text' placeholder='Set username...' className='username-input'
                      value={username} onChange={(e) => setUsername(e.target.value)}></input>
                  <h4 className='username-text'>Choose your username that will be show with your feedback below. There are 
                    no limitations about the username!</h4>
              </div>
              <div>
                  <h2>Leave feedback</h2>
                  <textarea placeholder='Some feedback...' className='feedback-input'
                      value={feedback} onChange={(e) => setFeedback(e.target.value)}></textarea>
              </div>
          </div>

          <button className='send-feedback-btn' disabled={!username || !feedback}
              onClick={function() {addComment(username, feedback); setUsername(""); setFeedback("");}}><i className='material-icons'>done</i></button>

          <div class='comments-list'>
              {
              comment.length ? comment?.map((item, index) => (
                    <div className='comment-element' key={index}>
                          <div className='comment-content'>
                              <div className='user-avatar' style={{backgroundColor:item.color}}>
                                  <i className='user-icon material-icons'>person</i>
                              </div>
                              
                              <div className='username-comment'>
                                  <div className='username-comment-content'>
                                      <h2>{item.username}</h2>
                                  </div>
                                  <div>
                                      <p className='feedback-text'>{item.feedback}</p>
                                  </div>
                              </div>
                          </div>
                          <i class='delete-icon material-icons' onClick={() => deleteComment(index)}>delete</i>
                    </div>
                )) :  <h3>There are no feedbacks yet!</h3>}
          </div>
      </div>
    )
}