import React, { useState } from 'react'
import Header from '../../components/Header'
import Body from '../../components/Body'
import Footer from '../../components/Footer'
import AgentBalances from '../../components/AgbSearch'
import Table from '../../components/Table'

const Balances = () => {
  const [search, setSearch] = useState('')
  console.log(search)
  return (
    <div  style={{backgroundColor: "#242424",width:'100vw', height: '100vh' ,display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start'}}>

        <Header />
        <AgentBalances state={search} setState={setSearch} />
        <Table state={search} />
        <Footer />

    </div>


  )
}

export default Balances