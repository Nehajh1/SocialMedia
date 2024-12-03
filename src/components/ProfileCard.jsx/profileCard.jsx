import React from 'react'
import cover from '../../img/cover.jpg'
import profile from '../../img/profileImg.jpg'
import './profileCard.css'

const profileCard = () => {

    const ProfilePage=true;
  return (
    <div className='ProfileCard'>
        <div className='ProfileImages'>
            <img src={cover} alt=""/>
            <img src={profile} alt=""/>
        </div>

        <div className="ProfileName">
            <span>Neha jha</span>
            <span>Senior UI/UX Designer</span>
        </div>


        <div className="followStatus">
            <hr/>
            <div>
                <div className="follow">
                    <span>30</span>
                    <span>following</span>
                </div>
                <div className="vl"></div>
                <div className="follow">
                    <span>30,000</span>
                    <span>followers</span>
                </div>
                {ProfilePage &&(
                    <>
                    <div className="vl">
                    </div>
                    <div className="follow">
                    <span>3</span>
                    <span>Posts</span>
                    </div>
                    </>
                )} 
            </div>
            <hr/>
        </div>
        {ProfilePage?'' :<span>
            My Profile
        </span>}
        
    </div>
  )
}

export default profileCard