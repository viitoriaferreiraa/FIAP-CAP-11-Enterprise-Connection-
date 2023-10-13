import styled from "styled-components";

export const Header = styled.div`
  height: 100vh;
  overflow: hidden;
  position: relative;
`;

export const Image = styled.div`
  img {
    width: 16rem;
    border-radius: 50%;
    position: absolute;
    left: 4.5rem;
    top: 15rem;
    border: 2px solid #000;
  }
`;

export const Dialog = styled.div`
  background-color: #f56c2dc5;
  padding: 2rem;
  border-radius: 0 3rem 3rem 3rem;
  border: 2px solid #000;
  width: 38rem;
  position: absolute;
  right: 18rem;
  top: 24rem;
  line-height: 1.5rem;
  text-align: justify;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

export const CpfForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;

  input {
    width: 50%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
  }

  button {
    width: 52%;
    background-color: #a632e9;
    color: #fff;
    border: none;
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 18px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #bd09ce;
    }
  }
`;

export const CepResult = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  strong {
    font-size: 18px;
  }

  p {
    border: 1px solid #ccc;
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 10px;
    width: 50%;
    padding: 8px;
  }
`;

export const Error = styled.div`
  text-align: center;
  color: #ff0000;
  font-size: 1.8rem;
  font-weight: 500;
  margin-top: 10px;
`;
