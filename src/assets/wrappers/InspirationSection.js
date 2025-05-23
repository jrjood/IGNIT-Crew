import styled from 'styled-components';
import bgImage from '../images/backgrounds/AboutPageImages/Inspiration-bg.svg'; // background image

const Wrapper = styled.section`
  height: fit-content;
  width: 100%;
  display: flex;
  align-items: center;
  background-image: url(${bgImage});
  background-repeat: no-repeat;
  background-color: var(--primary-400);
  background-position-x: 98%;

  .container {
    margin: 0 5rem;
    max-width: 60%;
  }
  .content {
    margin-top: 3rem;
    margin-bottom: 3rem;
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }
  .row {
    display: flex;
    gap: 5rem;
  }
  .feature {
    padding: 3rem 0;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  .title {
    color: var(--black);
    width: 25%;
    margin-bottom: 5rem;
  }

  .text-box {
    color: var(--white);
    font-size: 1.125rem;
    max-width: 62%;
    line-height: 1.5;
  }
  .quote {
    text-transform: uppercase;
    font-size: 2.5rem;
    font-weight: 700;
  }

  //NewsletterForm style
  .newsletter-title {
    color: var(--white);
    font-family: 'Rama Gothic M';
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 20px;
    text-transform: uppercase;
  }

  .input-wrapper {
    position: relative;
    margin-bottom: 20px;
  }

  .input-wrapper input {
    width: 100%;
    background: transparent;
    border: none;
    border-bottom: 2px solid var(--black);
    padding: 10px 35px 10px 5px;
    font-size: 14px;
    color: var(--black);
    outline: none;
  }

  .input-wrapper input::placeholder {
    font-size: 0.8rem;
    color: #333;
  }

  .email-icon {
    position: absolute;
    right: 5px;
    top: 50%;
    transform: translateY(-50%);
    color: var(--white);
  }

  .send-btn {
    background-color: var(--black);
    color: var(--white);
    border: none;
    padding: 10px 25px;
    font-weight: bold;
    font-size: 13px;
    border-radius: 20px;
    cursor: pointer;
  }

  .social-icons {
    display: flex;
    gap: 1rem;
    margin-bottom: 1rem;
    font-size: 2rem;
    a {
      color: var(--white);
      transition: var(--transition);
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: var(--border-radius);
      padding: 0.5rem;
    }
    .facebook:hover {
      background-color: rgba(0, 0, 0, 0.4);
    }
    .whatsapp:hover {
      background-color: rgba(0, 0, 0, 0.4);
    }
    .instagram:hover {
      background-color: rgba(0, 0, 0, 0.4);
    }
    .facebook {
      background-color: #1877f2;
    }
    .whatsapp {
      background-color: #25d366;
    }
    .instagram {
      background-color: #ee2a7b;
    }
  }

  @media (max-width: 48rem) {
    .row {
      flex-direction: column;
      gap: 2rem;
    }
    .text-box {
      max-width: 100%;
    }
    .container {
      max-width: 80%;
      margin: auto;
    }
    .title {
      margin-bottom: 0;
    }
  }
  @media (max-width: 44rem) {
    .container {
      max-width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  @media (max-width: 27rem) {
    .quote {
      font-size: 2.3rem;
    }
  }
  @media (max-width: 12.5rem) {
    .input-wrapper input::placeholder {
      font-size: 0.5rem;
    }
  }
`;

export default Wrapper;
