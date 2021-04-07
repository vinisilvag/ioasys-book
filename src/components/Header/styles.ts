import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderDetails = styled.div`
  margin-top: 0.3rem;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const HeaderInfo = styled.span`
  color: var(--light-black);

  @media (max-width: 580px) {
    display: none;
  }
`;

export const LogoutButton = styled.button`
  padding: 0.6rem 0.5rem 0.2rem 0.7rem;

  border: 1px solid var(--border);
  border-radius: 100%;
  background-color: transparent;

  margin-left: 1.5rem;
`;

export const LogoutImage = styled.img`
  width: 1.4rem;
  height: 1.4rem;
`;
