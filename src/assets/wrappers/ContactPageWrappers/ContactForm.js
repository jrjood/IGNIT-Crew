import styled from 'styled-components';

const Wrapper = styled.section`
  background-color: #000;
  padding: 60px 40px;
  color: #fff;
  font-family: Arial, sans-serif;

  .form-title {
    color: #ffc400;
    font-size: 32px;
    font-weight: 700;
    margin-bottom: 40px;
  }

  .contact-form {
    display: flex;
    gap: 40px;
    flex-wrap: wrap;
  }

  .left-fields,
  .right-fields {
    flex: 1;
    min-width: 280px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .contact-form input,
  .contact-form textarea {
    background-color: transparent;
    border: none;
    border-bottom: 2px solid #ffc400;
    padding: 10px 5px;
    color: white;
    font-size: 14px;
    outline: none;
    transition: border-color 0.3s ease;
  }

  .contact-form textarea {
    border: 2px solid #ffc400;
    border-radius: 6px;
    resize: vertical;
  }

  .contact-form input::placeholder,
  .contact-form textarea::placeholder {
    color: #c9c9c9;
    text-transform: uppercase;
    font-size: 12px;
  }

  .contact-form button {
    background-color: #ffc400;
    color: #000;
    border: none;
    border-radius: 999px;
    padding: 12px 30px;
    font-weight: bold;
    cursor: pointer;
    align-self: center;
    transition: background-color 0.3s ease;
  }

  .contact-form button:hover {
    background-color: #e0aa00;
  }
`;

export default Wrapper;
