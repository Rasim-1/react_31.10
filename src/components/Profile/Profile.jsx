import React from 'react'
import './Profile.scss'

const Profile = () => {
  return (
    <>
       <section className='profile'>
    <div className="container">
        <div className="profile__title">
            <h1>Hey 👋🏼 I'm Oli </h1>
        </div>
        <div className="profile__img">
            <img src="https://framerusercontent.com/images/wJINOk3BFAbQRx6ZySXfbltPxU.jpg?scale-down-to=1024" alt="" />
            <img src="https://framerusercontent.com/images/O3Foxt0XkzTsjGc74Ap0Hrxtz4c.jpg?scale-down-to=1024" alt="" />
        </div>
        <div className="profile__about">
            <button>About</button>
            <h2>A freelance designer based in the UK. I combine my experience in product and brand to solve problems, tell stories, and create compelling experiences.</h2>
        </div>
    </div>
   </section>
    
    </>
  )
}

export default Profile