import styled from 'styled-components';
import backgroundImage from '../../assets/images/app-background.svg';

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;

  background-image: url(${backgroundImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Container = styled.section`
  width: 100%;
  max-width: 1136px;
  margin: 0 auto;
  padding: 3rem 0;

  @media (max-width: 1136px) {
    padding: 3rem 1rem;
  }
`;

export const Main = styled.main`
  margin-top: 3rem;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
  column-gap: 1rem;
  row-gap: 1rem;

  @media (max-width: 1136px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 840px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 580px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const PaginationContainer = styled.div`
  width: 100%;

  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media (max-width: 840px) {
    justify-content: center;
  }
`;

export const PaginationSpan = styled.span`
  color: var(--light-black);
`;

export const ButtonsContainer = styled.div`
  margin-left: 1rem;
`;

export const PaginationButton = styled.button`
  padding: 0.6rem 0.6rem 0.2rem 0.7rem;

  border: 1px solid var(--border);
  border-radius: 100%;
  background-color: transparent;

  &:first-child {
    margin-right: 0.5rem;
    transform: rotate(180deg);
  }
`;

export const PaginationButtonImage = styled.img`
  width: 1rem;
  height: 1rem;
`;
