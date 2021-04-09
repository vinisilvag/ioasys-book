import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  display: inline-flex;
  background-color: var(--error-card);
  backdrop-filter: blur(2px);
  border-radius: 4px;

  bottom: -5.2rem;
`;

export const Triangle = styled.div`
  position: absolute;
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;

  border-bottom: 10px solid var(--error-card);
  backdrop-filter: blur(2px);

  top: -10px;
  left: 1rem;
`;

export const Message = styled.span`
  font-size: 1rem;
  font-weight: 700;
  color: var(--white);
  padding: 1rem;
`;
