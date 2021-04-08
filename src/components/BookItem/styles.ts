import styled from 'styled-components';

export const ButtonContainer = styled.button`
  border: none;
`;

export const Container = styled.div`
  height: 160px;

  background-color: var(--white);
  border-radius: 4px;
  box-shadow: 0px 6px 24px rgba(84, 16, 95, 0.13);
  transition: box-shadow 0.1s;

  padding: 1rem;

  display: flex;
  flex-direction: row;

  &:hover {
    box-shadow: 0px 16px 80px rgba(84, 16, 95, 0.32);
  }
`;

export const BookImage = styled.img`
  width: 81px;
  height: 100%;
  filter: drop-shadow(0px 6px 9px rgba(0, 0, 0, 0.15));
`;

export const BookDetails = styled.div`
  margin-left: 1rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const BookHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const BookTitle = styled.span`
  font-size: 0.9rem;
  font-weight: 600;
  text-align: left;
  color: var(--light-black);
`;

export const BookAuthor = styled.span`
  font-size: 0.8rem;
  font-weight: 500;
  text-align: left;
  color: var(--caption);
`;

export const BookInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const BookInfoItem = styled.span`
  font-size: 0.8rem;
  font-weight: 400;
  line-height: 20px;
  color: var(--text);
`;
