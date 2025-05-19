import styled from 'styled-components';

const Wrapper = styled.section`
  background-color: var(--black);
  padding: 3.75rem 2.5rem;
  color: var(--white);
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .form-title {
    color: var(--primary-400);
    font-size: 2.25rem;
    font-weight: 700;
    margin-bottom: 2.5rem;
    align-self: flex-start;
    text-transform: uppercase;
  }

  .contact-form {
    display: flex;
    gap: 2.5rem;
    flex-wrap: wrap;
    width: 80vw;
  }

  .left-fields,
  .right-fields {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }

  .contact-form input,
  .contact-form textarea {
    background: transparent;
    color: var(--white);
    outline: none;
    border: none;
    border-bottom: 2px solid var(--primary-400);
    padding: 0.625rem 0.3125rem;
    font-size: 0.875rem;
    width: 100%;
    transition: var(--transition);
  }
  .contact-form input:focus,
  .contact-form textarea:focus {
    border-color: var(--white);
  }

  .contact-form textarea {
    border: 2px solid var(--primary-400);
    border-radius: var(--border-radius);
    resize: vertical;
    width: 100%;
  }

  .contact-form input::placeholder,
  .contact-form textarea::placeholder {
    color: rgba(201, 201, 201, 0.7);
    text-transform: uppercase;
    font-size: 0.75rem;
  }

  .contact-form button {
    align-self: center;
  }
  @media (max-width: 48rem) {
    .contact-form {
      flex-direction: column;
    }
  }
`;

export default Wrapper;
