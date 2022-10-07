import React from 'react';
import styled from 'styled-components';

const Contact = () => {
  return (
    <Wrapper>
      <h2 className='common-heading'>Contact</h2>
      <iframe  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.4555356999435!2d88.90753631433743!3d23.190063715868085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ff2fd64f0d2abf%3A0xda845f8c57c72d60!2z4Kas4Ka-4KaV4Ka44Ka-IOCmueCmvuCmhyDgprjgp43gppXgp4HgprI!5e0!3m2!1sbn!2sin!4v1665174220480!5m2!1sbn!2sin" width="100%" height="400" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      <div className="container">
        <div className="contact-form">
          <form action="https://formspree.io/f/meqdzjal" method='POST' className='contact-inputs '>
            <input type="text" placeholder='username' name="username" autoComplete='off' required />
            <input type="email" placeholder='Email' required name="Email" />
            <textarea name="Message" id="" required autoCapitalize='off' cols="30" rows="10" placeholder='Enter your message'></textarea>
            <input type="submit" value="send" />

          </form>
        </div>
      </div>
    </Wrapper>
  )
};
const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.btn};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.white};
              transform: scale(0.9);
              border-radius:20px ;
              box-shadow: 0px 15px 20px  rgba(98,84,243,0.4)

            }
          }
        }
      }
    }
  `;
export default Contact