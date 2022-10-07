import React from 'react'
// import styled from 'styled-components'
import Herosection from '../componant/Herosection'
const Home = () => {
  const data={
    name:"Man store"
  }
  return (
    <Herosection myData={data} />
  )
}


export default Home;
// const Wrapper=styled.section`
// background-color:${({theme})=>theme.colors.bg } ;
// width:20rem;
// height:100vh;
// color:#000 ;
// `