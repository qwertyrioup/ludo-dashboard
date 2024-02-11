import React from 'react'
import Header from '../../components/Header'
import Body from '../../components/Body'
import Footer from '../../components/Footer'

const Home = () => {
  return (
    <div  style={{backgroundColor: "#242424",width:'100vw', height: '100vh' ,display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start'}}>

        <Header />
        <Body />
        <Footer />

    </div>


  )
}

export default Home