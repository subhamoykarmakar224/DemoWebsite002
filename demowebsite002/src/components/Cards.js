import React from 'react'
import CardItem from './CardItem'
import './css/Cards.css'

function Cards() {
  return (
    <div className="cards">
      <h1>Check put these EPIC Destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=714&q=80"
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              label="Adventure"
              path='/services'
            />
            <CardItem
              src="https://images.unsplash.com/photo-1578530332818-6ba472e67b9f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
              text="Travel through the Islands of Bali in a Private Cruise"
              label="Luxury"
              path='/services'
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              label="Adventure"
              path='/services'
            />
            <CardItem
              src="https://images.unsplash.com/photo-1503457574462-bd27054394c1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              text="Travel through the Islands of Bali in a Private Cruise"
              label="Luxury"
              path='/services'
            />
            <CardItem
              src="https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=633&q=80"
              text="Travel through the Islands of Bali in a Private Cruise"
              label="Luxury"
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards
