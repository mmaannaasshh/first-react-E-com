import React from 'react'
import styled from 'styled-components'
import { useFilterContext } from '../../context/filterContext'
const FilterSection = () => {
  const { filter: { text, category,company }, updateFilter, all_products } = useFilterContext();
  // we need unic data

  const newCategoryData = (data, property) => {
    let newval = data.map((e) => {
      return e[property]
    })
    return (newval = ["all", ...new Set(newval)])
  }


  const categoryOnlyData = newCategoryData(all_products, "category")
  const companyOnlyData = newCategoryData(all_products, "company")

  return (
    <Wrapper>
      <div >
        <form onSubmit={(e) => e.preventDefault()}>
          <input type="text" name='text' value={text} onChange={updateFilter} />
        </form>
      </div>
      <div className="filter-category">
        <h3>Category</h3>
        <div>
          {categoryOnlyData.map((e, i) => {
            return <button key={i} type="button" name="category" value={e} onClick={updateFilter}>
              {e}
            </button>
          })}
        </div>
      </div>
      <div className="filter-company">
        <h3>Company</h3>
        <form action="#">
          <select name="company" id="company" className='filter-company--select' onClick={updateFilter} >
            {companyOnlyData.map((e, i) => {
              return <option key={i} value={e} name="comapny" >{e} </option>
            })}
          </select>
        </form>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
padding:5rem 0 ;
display:flex ;
flex-direction:column ;
gap:3rem;

h3{
  padding:2rem 0 ;
  font-size:bold ;

}
button{
  display:block;
  border:none ;
  outline:none;
  background:transparent ;
  font-size:1.5rem;
  color:#727374 ;
  margin:1px 0 ;
  cursor: pointer;
  padding:0 2rem ;
  text-transform:capitalize ;
}



`

export default FilterSection
