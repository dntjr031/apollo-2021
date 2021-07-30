import { Link } from "react-router-dom";
import styled from "styled-components";
import { gql } from "apollo-boost";
import { useMutation } from "@apollo/react-hooks";

const LIKE_MOVIE = gql`
  mutation likeMovie($id: Int!) {
    likeMovie(id: $id) @client
  }
`;

const Container = styled.div`
  height: 300px;
  width: 100%;
  box-shadow: 0 3px 6px rbga(0, 0, 0, 0.16);
  overflow: hidden;
  border-radius: 7px;
  color: #ffffff;
  position: relative;
`;

const Poster = styled.div`
  background-image: url(${(props) => props.bg});
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: center center;
`;

const Button = styled.div`
  cursor: pointer;
  position: absolute;
  bottom: 10px;
  left: 10px;
  font-size: 20px;
  -webkit-text-stroke: 1px #f1e3e3;
  color: ${(props) => (props.isLiked ? "#FF3150" : "#FFFFFF")};

  &:hover {
    color: #ff3150;
  }
`;

const Movie = ({ id, bg, isLiked }) => {
  const [likeMovie] = useMutation(LIKE_MOVIE, {
    variables: { id: parseInt(id) },
  });
  return (
    <Container>
      <Link to={`/${id}`}>
        <Poster bg={bg} />
      </Link>
      <Button onClick={likeMovie} isLiked={isLiked}>
        ❤
      </Button>
    </Container>
  );
};

export default Movie;
