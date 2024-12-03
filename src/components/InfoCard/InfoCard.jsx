import React,{useState} from 'react'
import './InfoCard.css'
import {UilPen} from '@iconscout/react-unicons'
import ProfileModel from '../ProfileModel.jsx/ProfileModel'

const InfoCard = () => {

    const[modalOpened, setModalOpened] =useState(false)
  return (
    <div className="InfoCard">
        <div className="infoHead">
            <h4>Your Info</h4>
            <div>
                <UilPen width='2rem' height='1.2rem'
                 onClick={()=>setModalOpened(true)}/>

                 <ProfileModel modalOpened={modalOpened}
                 setModalOpened={setModalOpened}/>

            </div>
        </div>
        <div className="info">
            <span>
                <b>Status: </b>
            </span>
            <span>in Relationship </span>
        </div>
        <div className="info">
            <span>
                <b>Lives in: </b>
            </span>
            <span>Ambala</span>
        </div>
        <div className="info">
            <span>
                <b>Study at: </b>
            </span>
            <span>MMDU</span>
        </div>
        <button className='button' logout-button>Logout</button>
    </div>
  )
}

export default InfoCard