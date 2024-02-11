import React from 'react'
import Header from '../../components/Header'
import Body from '../../components/Body'
import NewUserForm from '../../components/NewUserForm'
import UpdatePasswordForm from '../../components/UpdatePasswordForm'

const UpdatePassword = () => {
  return (
    <div  style={{backgroundColor: "#242424",width:'100vw', height: '100vh' ,display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start'}}>

        <Header />
        <UpdatePasswordForm />

    </div>


  )
}

export default UpdatePassword