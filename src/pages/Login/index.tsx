import React, { useCallback, useState } from 'react';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useHistory } from 'react-router-dom';

import {
  Wrapper,
  LoginContainer,
  Form,
  InputContainer,
  Label,
  Input,
  Error,
  PasswordWrapper,
  InputWrapper,
  SubmitButton,
} from './styles';

import Logo from '../../components/Logo';
import ErrorCard from '../../components/ErrorCard';
import Spinner from '../../components/Spinner';

import { useAuth } from '../../contexts/AuthContext';

interface FormValues {
  email: string;
  password: string;
}

const schema = yup.object().shape({
  email: yup
    .string()
    .email('Informe um email válido')
    .required('Email é um campo obrigatório'),
  password: yup.string().required('Senha é um campo obrigatório'),
});

const Login: React.FC = () => {
  const history = useHistory();

  const { signIn } = useAuth();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  const onSubmit = useCallback(
    async (signInCredentials) => {
      setError(null);
      setIsLoading(true);

      try {
        await signIn(signInCredentials);

        setIsLoading(false);
        history.push('/app');
      } catch (err) {
        setError(err.response.data.errors.message);
      } finally {
        setIsLoading(false);
      }
    },
    [signIn, history],
  );

  return (
    <Wrapper>
      <LoginContainer>
        <Logo variant="white" />

        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputContainer>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Informe o seu email"
              {...register('email')}
            />

            {errors.email && <Error>{errors.email.message}</Error>}
          </InputContainer>

          <InputContainer>
            <PasswordWrapper>
              <InputWrapper>
                <Label htmlFor="password">Senha</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Informe a sua senha"
                  {...register('password')}
                />
              </InputWrapper>

              <SubmitButton type="submit">
                {isLoading ? <Spinner /> : 'Entrar'}
              </SubmitButton>
            </PasswordWrapper>

            {errors.password && <Error>{errors.password.message}</Error>}
          </InputContainer>
        </Form>

        {error && <ErrorCard message={error} />}
      </LoginContainer>
    </Wrapper>
  );
};

export default Login;
