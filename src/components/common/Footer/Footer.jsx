import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 150px;
  background-color: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: -3px -3px 4px lightgray;

  a {
    color: black;
  }
  h3 {
    margin: 12px 0;
  }
`;

const Footer = () => {
  return (
    <Container>
      <h3>
        <a href="mailto:ceciliainardi@gmail.com">ceciliainardi@gmail.com</a>
      </h3>
      <h3>
        <a href="tel:+56985960819">+569 8596 0819</a>
      </h3>
    </Container>
  );
};

export default Footer;
