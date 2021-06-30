import styled from "styled-components";
import { SM_BREAKPOINT } from "../../utils/constants";
import TextUnwrapper from "../common/TextUnwrapper";

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  box-shadow: 3px 3px 6px darkgray, -3px -3px 6px darkgray;
`;

const ImageTitle = styled.div`
  width: 100%;
  height: 50vh;
  position: relative;
  background-color: lightgray;
  background-image: url(${({ imgUrl }) => imgUrl});
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  > h1 {
    color: white;
    position: absolute;
    bottom: 10%;
    left: 10%;
    text-shadow: 2px 2px 2px #333;
  }
`;

const TextContainer = styled.div`
  padding: 24px;

  p {
    font-size: 18px;
  }

  li {
    font-size: 18px;
    margin-bottom: 8px;
  }

  .emphasized {
    font-style: italic;
  }

  @media (max-width: ${SM_BREAKPOINT}) {
    padding: 14px;
  }
`;

const Section = ({ imgUrl, title, label, wrappedText }) => {
  return (
    <Container>
      <ImageTitle imgUrl={imgUrl}>
        <h1>{title || label}</h1>
      </ImageTitle>
      <TextContainer>
        <TextUnwrapper wrappedText={wrappedText} />
      </TextContainer>
    </Container>
  );
};

export default Section;
