import React, { useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

import TransTable from '../../components/TransTable'
import TranSearch from '../../components/TranSearch'

const Transactions = () => {
  const [search, setSearch] = useState('')
  console.log(search)
  return (
    <div  style={{backgroundColor: "#242424",width:'100vw', height: '100vh' ,display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start'}}>

        <Header />
        <TranSearch state={search} setState={setSearch} />
        <TransTable state={search} />
        <Footer />

    </div>


  )
}

export default Transactions