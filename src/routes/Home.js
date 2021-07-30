import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import styled from "styled-components";
import Movie from "../component/Movie";

const GET_MOVIES = gql`
  {
    movies {
      id
      medium_cover_image
      isLiked @client
    }
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Header = styled.div`
  background: linear-gradient(to left, #b24592, #f1645f);
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h1`
  color: white;
  font-size: 60px;
  margin-bottom: 20px;
`;
const SubTitle = styled.h3`
  font-size: 30px;
  color: white;
`;
const Loading = styled.div`
  margin-top: 20px;
`;

const Movies = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 25px;
  width: 60%;
  position: relative;
  top: -50px;
`;

const Home = () => {
  const { loading, data } = useQuery(GET_MOVIES);

  return (
    <Container>
      <Header>
        <Title>Apollo 2021</Title>
        <SubTitle>I love GraphQL</SubTitle>
      </Header>
      {loading && <Loading>Loading...</Loading>}
      {!loading && (
        <Movies>
          {data?.movies?.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              bg={movie.medium_cover_image}
              isLiked={movie.isLiked}
            />
          ))}
        </Movies>
      )}
    </Container>
  );
};
export default Home;
