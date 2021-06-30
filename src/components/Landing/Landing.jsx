import styled from "styled-components";
import movie from "../assets/video/movie_1.mp4";
import poster from "../assets/images/video_poster.png";
const Container = styled.div`
  width: 100%;
`;

const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  video {
    width: 100%;
    object-fit: cover;
    z-index: 1;
  }
  p {
    position: absolute;
    top: 30%;
    left: 10%;
    width: 70%;
    color: white;
    font-size: 32px;
    text-shadow: 2px 2px 2px #333;
    @media (max-width: 995px) {
      font-size: 26px;
    }
    @media (max-width: 815px) {
      font-size: 24px;
    }
    @media (max-width: 710px) {
      display: none;
    }
  }
`;

const Landing = () => {
  return (
    <Container>
      <VideoContainer>
        <div
          dangerouslySetInnerHTML={{
            __html: `
          <video
          playsInline
          autoPlay
          muted
          loop
          src="${movie}"
          poster="${poster}"
        ></video>
        `,
          }}
        />

        <p>
          "Mi terapia trabaja en la re-conexión con el propio cuerpo y la
          emoción, volver a pensar y sentir haciendo el cambio desde las raíces,
          enseñar a ser cada vez más coherentes en nuestro sentir, pensar y
          actuar. Ese es mi desafío como terapeuta."
        </p>
      </VideoContainer>
      <h3>
        Hola, aqui hay que poner algo de texto interesante. Tal vez lo que está
        sobre el video ponerlo aqui, y encima del video poner otra cosa.
      </h3>
      <p>
        Debajo de este texto iría el carrusel de fotos, pero no estoy muy seguro
        porque comparado con el video, es de bastante menor calidad, pero igual
        hay que mostrar los lugares donde has estado así que lo voy a pensar un
        poco y te propongo algo
      </p>
    </Container>
  );
};

export default Landing;
