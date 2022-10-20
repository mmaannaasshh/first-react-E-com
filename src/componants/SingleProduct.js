import React from 'react';
import styled from 'styled-components';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useProductContext } from '../context/productcontex';
import PageNavigation from '../componant/PageNavigation';
import MyImage from '../componant/MyImage';
import { Container } from '../style.css/Container';
import FormatPrice from '../helper/FormatPrice';
import { TbReplace, TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import Star from '../componant/Star';
import AdToCart from '../componant/AdToCart';


const API = "https://api.pujakaitem.com/api/products";


const SingleProducte = () => {
  const { singleProduct, isSingleLoading, singleProoduct } = useProductContext()
  const { id } = useParams();
  const { name, company, price, description, stock, stars, reviews, image } = singleProoduct;

  useEffect(() => {
    singleProduct(`${API}?id=${id}`)
  },[])

  if (isSingleLoading) {
    return <div className='page_loading'>Loading .....</div>
  }

  return (
    <Wrapper>
      <PageNavigation title={name} />
      <Container className='container'>
        <div className="grid grid-two-column">
          {/* productImage */}
          <div className="product_images">
            <MyImage imgs={image} />
          </div>

          {/* product Data */}
          <div className="product-data">
            <h2>{name} </h2>
            <Star stars={stars} reviews={reviews} />

            <p className="product-data-price">
              MRP:
              <del>
                <FormatPrice price={price + 25000} />
              </del>
            </p>
            <p className="product-data-price product-data-real-price ">
              Deals of the Day:<FormatPrice price={price} />
            </p>
            <p>{description} </p>
            <div className="product-data-warranty">
              <div className="product-data-warranty-data">
                <TbTruckDelivery style={{width:'30px',height:'30px',display:'flex',justifyContent:'center',margin:'auto'}} className='warranty-icon' />
                <p>Free Delivery</p>
              </div>
              <div className="product-data-warranty-data">
                <TbReplace style={{width:'30px',height:'30px',display:'flex',justifyContent:'center',margin:'auto'}} className='warranty-icon' />
                <p>30 days replacement</p>
              </div>
              <div className="product-data-warranty-data">
                <MdSecurity style={{width:'30px',height:'30px',display:'flex',justifyContent:'center',margin:'auto'}} className='warranty-icon'/>
                <p>3 yrs warranty</p>
              </div>
              
              

            </div>
            <div className="product-data-info">
                <p>Available:
                 <span> {stock >0?'In Stock':'Not available'} </span>
                  </p>
                  <p>
                    ID: <span>{id} </span>
                  </p>
                  <p>
                    Brand: <span>{company} </span>
                  </p>

              </div>
              <hr />
                {stock>0 && <AdToCart products={singleProoduct}/>}
              

          </div>

        </div>
      </Container>

    </Wrapper>
  )
};
const Wrapper = styled.section`

  .container {
    padding: 9rem 0;
  }
  .product_images{
    display: flex;
    align-items:center ;
  }
  .product-data {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 2rem;
    .product-data-warranty {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #ccc;
      margin-bottom: 1rem;
      .product-warranty-data {
        text-align: center;
        .warranty-icon {
          background-color: rgba(220, 220, 220, 0.5);
          border-radius: 50%;
          width: 80rem;
          height: 80rem;
          padding: 0.6rem;
        }
        p {
          font-size: 1.4rem;
          padding-top: 0.4rem;
        }
      }
    }
    .product-data-price {
      font-weight: bold;
    }
    .product-data-real-price {
      color: ${({ theme }) => theme.colors.btn};
    }
    .product-data-info {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      font-size: 1.8rem;
      span {
        font-weight: bold;
      }
    }
    hr{
      max-width: 100%;
      width: 90%;
      /* height: 0.2rem; */
      border: 0.1rem solid #000;
      color: red;
    }
  }
  .product-images {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 0 2.4rem;
  }
`;


export default SingleProducte;