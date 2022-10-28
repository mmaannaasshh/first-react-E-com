import React from 'react'
import styled from 'styled-components'
import {useFilterContext} from '../../context/filterContext'
const FilterSection = () => {
  const {filter:{text},updateFilter}=useFilterContext()
  return (
    <Wrapper>
      <div >
        <form onSubmit={(e)=>e.preventDefault()}>
          <input type="text" name='text' value={text} onChange={updateFilter} />
        </form>
      </div>
    </Wrapper>
  )
}
const Wrapper=styled.section`
padding:5rem 0 ;
display:flex ;
flex-direction:column ;
gap:3rem;

h3{
  padding:2rem 0 ;
  font-size:bold ;

}



`

export default FilterSection
