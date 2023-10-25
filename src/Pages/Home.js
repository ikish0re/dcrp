import React from 'react'
import '../css/Home.css'
import StartButton from '../Components/StartButton'
import Card from '../Components/Card'
import pic1 from '../assets/pic1.png'

const Home = () => {
  return (
    <div className='home'>
      <Card
        title={"Democracy"}
        subTitle={"Roleplay"}
        description={"Welcome to Democracy Role Play! Here, your decisions have real impact and your imagination knows no limits. Engage in democratic debates, forge alliances, and shape the future. Join us on a thrilling journey where your words can change history. Enjoy your stay and have unforgettable adventures in our democratic world!🌟🗳️🌍"}
      />
      <img className='logo' src={logo} />
      <img className='greenBoy' src={pic1} />
      <div className='homeButtons'>
        <StartButton btnType={'homeBtn'} description={'Play With us'} />
        <StartButton btnType={'exploreBtn'} description={'Explore Us'} />
      </div>
    </div>
  )
}

export default Home