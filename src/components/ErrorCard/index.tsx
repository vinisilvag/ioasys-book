import React from 'react';

import { Container, Triangle, Message } from './styles';

interface ErrorCardProps {
  message: string;
}

const ErrorCard: React.FC<ErrorCardProps> = ({ message }) => (
  <Container data-testid="card">
    <Triangle />
    <Message data-testid="message">{message}</Message>
  </Container>
);

export default ErrorCard;
