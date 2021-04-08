import styled from 'styled-components';

export const Container = styled.div<{ modalIsOpen: boolean }>`
  width: 100%;
  height: 100%;
  top: 0;
  position: fixed;
  background-color: var(--modal-background);

  opacity: ${(props) => (props.modalIsOpen ? 1 : 0)};
  visibility: ${(props) => (props.modalIsOpen ? 'visible' : 'hidden')};

  backdrop-filter: blur(1px);

  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1136px) {
    padding: 0rem 1rem;
  }
`;

export const ModalCloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;

  padding: 0.5rem 0.75rem 0.3rem 0.8rem;

  border: 1px solid var(--border);
  border-radius: 100%;
  background-color: var(--white);
`;

export const CloseImage = styled.img`
  width: 0.8rem;
  height: 0.8rem;
`;

export const ModalContent = styled.section`
  max-width: 864px;
  width: 100%;
  height: 608px;

  background-color: #ffffff;
  border-radius: 4px;
  box-shadow: 0px 16px 80px rgba(0, 0, 0, 0.32);

  padding: 3rem;
  padding-right: 0px;

  display: flex;
  flex-direction: row;

  @media (max-width: 820px) {
    padding: 2rem;
    padding-right: 4px;
  }

  @media (max-width: 740px) {
    padding: 1.5rem;
    padding-right: 4px;
    display: block;
    overflow-y: scroll;
  }
`;

export const BookImage = styled.img`
  width: 349px;
  filter: drop-shadow(0px 12px 18px rgba(0, 0, 0, 0.3));

  @media (max-width: 740px) {
    width: 100%;
    padding-right: 1rem;
  }
`;

export const BookDetails = styled.div`
  width: 100%;
  margin-left: 3rem;
  padding-right: 3rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  overflow-y: scroll;

  @media (max-width: 820px) {
    margin-left: 2rem;
    padding-right: 2rem;
  }

  @media (max-width: 740px) {
    overflow-y: hidden;
    margin-left: 0;
    margin-top: 1.5rem;
    padding-right: 1.5rem;
  }
`;

export const BookHeader = styled.div``;

export const BookInfo = styled.div`
  width: 100%;
  margin: 2rem 0;
`;

export const BookReview = styled.div``;

export const BookTitle = styled.h1`
  font-size: 1.7rem;
  font-weight: 600;
  color: var(--light-black);
`;

export const BookAuthor = styled.h1`
  font-size: 1rem;
  font-weight: 400;
  color: var(--caption);
`;

export const BookInfoSectionTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  color: var(--light-black);
`;

export const BookInfoSection = styled.div`
  margin-top: 0.8rem;
`;

export const BookInfoItem = styled.span`
  font-size: 1rem;
  font-weight: 400;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  span:first-child {
    font-weight: 500;
    color: var(--light-black);
  }
`;

export const ReviewContainer = styled.div`
  margin-top: 1rem;
`;

export const ReviewIcon = styled.img`
  width: 1.4rem;
  height: 1.4rem;

  margin-right: 0.5rem;
`;

export const ReviewText = styled.p`
  font-size: 1rem;
  font-weight: 400;
`;
