import React from 'react';

import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

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

              <SubmitButton type="submit">Entrar</SubmitButton>
            </PasswordWrapper>

            {errors.password && <Error>{errors.password.message}</Error>}
          </InputContainer>
        </Form>
      </LoginContainer>
    </Wrapper>
  );
};

export default Login;
