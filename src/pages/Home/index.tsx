/* eslint-disable operator-linebreak */
import React, { useState, useEffect } from 'react';

import { Helmet } from 'react-helmet-async';

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  Wrapper,
  Container,
  ErrorText,
  LoadingText,
  Main,
  PaginationContainer,
  PaginationWrapper,
  PaginationSpan,
  PaginationButton,
  PaginationButtonImage,
} from './styles';

import Header from '../../components/Header';
import BookCard from '../../components/BookCard';
import BookModal from '../../components/BookModal';

import chevronEnabled from '../../assets/icons/chevron-enabled.svg';
import chevronDisabled from '../../assets/icons/chevron-disabled.svg';

import api from '../../services/api';

export interface BookData {
  id: string;
  title: string;
  description: string;
  authors: string[];
  pageCount: number;
  category: string;
  imageUrl: string;
  isbn10: string;
  isbn13: string;
  language: string;
  publisher: string;
  published: number;
}

interface PaginationData {
  page: number;
  totalPages: number;
  totalItems: number;
}

const Home: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [selectedBook, setSelectedBook] = useState<BookData | null>(null);

  const [books, setBooks] = useState<BookData[]>([]);
  const [paginationData, setPaginationData] = useState<PaginationData>();
  const [currentPage, setCurrentPage] = useState(1);

  const [showModal, setShowModal] = useState(false);

  const fetchBooksFromApi = async () => {
    api
      .get('/books', {
        params: {
          page: currentPage,
          amount: 12,
          category: 'biographies',
        },
      })
      .then((response) => {
        setBooks(response.data.data);
        setPaginationData({
          page: response.data.page,
          totalItems: response.data.totalItems,
          totalPages: response.data.totalPages,
        });
      })
      .catch(() => {
        setError('Erro ao autenticar o usuário. Faça login novamente.');

        toast.error('Falha ao carregar os dados da api.', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchBooksFromApi();
  }, [currentPage]);

  const handlePageChange = (actionType: string) => {
    switch (actionType) {
      case 'NEXT':
        setCurrentPage(currentPage + 1);
        break;
      case 'PREV':
        setCurrentPage(currentPage - 1);
        break;
      default:
    }
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleClickedModal = (book: BookData) => {
    setSelectedBook(book);

    toggleModal();
  };

  return (
    <>
      <Helmet>
        <title>Home | ioasys Books</title>
        <meta
          name="description"
          content="A melhor plataforma para visualizar informações sobre livros. Entre agora e descubra novas indicações de literaturas para você!"
        />
      </Helmet>

      <Wrapper>
        <Container>
          <ToastContainer />
          <Header />

          {isLoading ? (
            <LoadingText>Carregando...</LoadingText>
          ) : (
            <>
              {error ? (
                <ErrorText>{error}</ErrorText>
              ) : (
                <>
                  <Main>
                    {books.map((book) => (
                      <BookCard
                        onClick={() => handleClickedModal(book)}
                        bookData={book}
                        key={book.id}
                      />
                    ))}
                  </Main>

                  <PaginationContainer>
                    <PaginationWrapper>
                      <PaginationSpan>
                        Página <b> {currentPage} </b> de{' '}
                        <b>
                          {paginationData?.totalPages &&
                            Math.ceil(paginationData.totalPages)}
                        </b>
                      </PaginationSpan>

                      <PaginationButton
                        type="button"
                        onClick={() => handlePageChange('PREV')}
                        disabled={currentPage <= 1}
                      >
                        <PaginationButtonImage
                          src={
                            currentPage <= 1 ? chevronDisabled : chevronEnabled
                          }
                          alt="Voltar"
                        />
                      </PaginationButton>
                    </PaginationWrapper>

                    <PaginationButton
                      type="button"
                      onClick={() => handlePageChange('NEXT')}
                      disabled={
                        currentPage >= Math.ceil(paginationData?.totalPages!)
                      }
                    >
                      <PaginationButtonImage
                        src={
                          currentPage < Math.ceil(paginationData?.totalPages!)
                            ? chevronEnabled
                            : chevronDisabled
                        }
                        alt="Avançar"
                      />
                    </PaginationButton>
                  </PaginationContainer>
                </>
              )}
            </>
          )}
        </Container>
      </Wrapper>

      <BookModal
        modalIsOpen={showModal}
        toggleModalFunction={toggleModal}
        book={selectedBook}
      />
    </>
  );
};

export default Home;
