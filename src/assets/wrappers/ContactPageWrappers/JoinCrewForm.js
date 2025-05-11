import styled from 'styled-components';

const Wrapper = styled.section`
  background-color: #000;
  color: var(--white);
  padding: 50px 30px;
  font-family: Arial, sans-serif;

  .join-crew-form h2 {
    font-size: 28px;
    color: var(--primary-400);
    font-weight: 700;
    margin-bottom: 20px;
  }

  .radio-group {
    display: flex;
    gap: 30px;
    margin-bottom: 30px;
  }

  .radio-group label {
    font-weight: bold;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .form-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px 40px;
  }

  input,
  textarea {
    background: transparent;
    border: none;
    border-bottom: 2px solid var(--primary-400);
    padding: 10px 5px;
    color: var(--white);
    font-size: 14px;
    outline: none;
    width: 100%;
  }

  textarea {
    border: 2px solid var(--primary-400);
    border-radius: var(--border-radius);
    resize: vertical;
  }

  input::placeholder,
  textarea::placeholder {
    color: #cfcfcf;
    text-transform: uppercase;
    font-size: 12px;
  }

  .upload-group {
    display: flex;
    flex-direction: column;
    gap: 10px;
    position: relative;
  }

  .upload-label {
    position: relative;
    display: inline-block;
    cursor: pointer;
    color: var(--primary-400);
    font-size: 13px;
    font-weight: bold;
  }

  .upload-label input {
    display: none;
  }

  .upload-icon {
    position: absolute;
    right: -25px;
    top: 0;
    font-size: 18px;
    color: var(--primary-400);
  }

  .or-text {
    font-size: 12px;
    color: #cfcfcf;
  }

  .email {
    color: var(--primary-400);
    font-weight: bold;
  }

  .full-width {
    grid-column: 1 / 3;
  }

  .submit-btn {
    grid-column: 1 / 3;
    justify-self: start;
    background: var(--primary-400);
    border: none;
    color: var(--black);
    padding: 12px 30px;
    font-weight: bold;
    border-radius: 999px;
    cursor: pointer;
    margin-top: 10px;
  }
`;

export default Wrapper;
