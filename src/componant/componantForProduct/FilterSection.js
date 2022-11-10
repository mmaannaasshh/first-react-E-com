import React from 'react'
import styled from 'styled-components'
import { useFilterContext } from '../../context/filterContext'
import { FaCheck } from 'react-icons/fa';
import { Button } from '../../style.css/Button'
import FormatPrice from './../../helper/FormatPrice';
const FilterSection = () => {
  const { filter: { text, color, price, maxPrice, minPrice }, updateFilter, all_products, clearFilter } = useFilterContext();

  // we need unic data

  const newCategoryData = (data, property) => {
    let newval = data.map((e) => {
      return e[property]
    })
    if (property === "colors") {
      // return (newval=["all", ...new Set([].concat(...newval))]);
      (newval = newval.flat())
    }
    return (newval = ["all", ...new Set(newval)])


  }


  const categoryOnlyData = newCategoryData(all_products, "category")
  const companyOnlyData = newCategoryData(all_products, "company")
  const colorsData = newCategoryData(all_products, "colors")

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
      <div className="filter-colors colors ">
        <h3>Colors</h3>
        <div className="filter-color-style">
          {colorsData.map((e, i) => {
            if (e === "all") {
              return (<button type='button' className="color-all--style" key={i} name="color" value={e} onClick={updateFilter} >
                all
              </button>)
            }
            return (<button type='button' className="btnStyle" style={{ backgroundColor: e }} key={i} name="color" value={e} onClick={updateFilter} >
              {color === e ? <FaCheck className="checkStyle" /> : null}

            </button>)
          })}
        </div>
      </div>

      <div className="filter_price">
        <h3>Price</h3>
        <p><FormatPrice price={price} /></p>
        <div>
          <input type="range"
            min={minPrice} max={maxPrice} name="price" value={price} onChange={updateFilter} />
        </div>
      </div>
      <div className="filter-clear">
        <Button className='btn' onClick={clearFilter} >
          clearFilter
        </Button>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`

  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  h3 {
    padding: 2rem 0;
    font-size: bold;
  }
  .filter-search {
    input {
      padding: 0.6rem 1rem;
      width: 80%;
    }
  }
  .filter-category {
    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1.4rem;
      button {
        border: none;
        background-color: ${({ theme }) => theme.colors.white};
        text-transform: capitalize;
        cursor: pointer;
        &:hover {
          color: ${({ theme }) => theme.colors.btn};
        }
      }
      .active {
        border-bottom: 1px solid #000;
        color: ${({ theme }) => theme.colors.btn};
      }
    }
  }
  .filter-company--select {
    padding: 0.3rem 1.2rem;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.text};
    text-transform: capitalize;
  }
  .filter-color-style {
    display: flex;
    justify-content: center;
  }
  .color-all--style {
    background-color: transparent;
    text-transform: capitalize;
    border: none;
    cursor: pointer;
  }
  .btnStyle {
    width: 2rem;
    height: 2rem;
    background-color: #000;
    border-radius: 50%;
    margin-left: 1rem;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;
    &:hover {
      opacity: 1;
    }
  }
  .active {
    opacity: 1;
  }
  .checkStyle {
    font-size: 1rem;
    color: #fff;
  }
  .filter_price {
    input {
      margin: 0.5rem 0 1rem 0;
      padding: 0;
      box-shadow: none;
      cursor: pointer;
    }
  }
  .filter-shipping {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  .filter-clear .btn {
    background-color: #ec7063;
    color: #000;
  }
`;
export default FilterSection
