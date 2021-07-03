import styled from "styled-components";
import movie from "../assets/video/movie_1.mp4";
import poster from "../assets/images/video_poster.png";
import logoSmall from "../assets/images/logo-cecilia-h70.png";
import Player from "@vimeo/player/dist/player";

import { vimeoVideos } from "../../data/vimeoVideos";
import { useEffect } from "react";
import { MD_BREAKPOINT, SM_BREAKPOINT } from "../../utils/constants";

const Container = styled.div`
  width: 100%;
`;

const Content = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 16px;
  padding-top: 100px;

  hr {
    margin: 80px 0;
  }

  .padleft1 {
    margin: 30px 0;
    padding-left: 56px;
  }
  .padleft2 {
    margin: 30px 0;
    padding-left: 112px;
  }

  img {
    margin: 0 auto;
    display: block;
  }

  @media (max-width: ${MD_BREAKPOINT}) {
    padding-top: 50px;
    .padleft1 {
      margin: 15px 0;
      padding-left: 40px;
    }
    .padleft2 {
      margin: 15px 0;
      padding-left: 80px;
    }
  }

  @media (max-width: ${SM_BREAKPOINT}) {
    padding-top: 15px;
    .padleft1 {
      margin: 10px 0;
      padding-left: 20px;
    }
    .padleft2 {
      margin: 10px 0;
      padding-left: 40px;
    }
  }
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

const Videos = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  .video-container {
    max-width: 400px;
    min-width: 320px;
    margin: 0 30px 100px;
    @media (max-width: ${SM_BREAKPOINT}) {
      max-width: 100vw;
      width: 100vw;
      margin-bottom: 40px;
    }
  }
`;

const Landing = () => {
  useEffect(() => {
    const players = vimeoVideos.map(
      (v) =>
        new Player(v.id, {
          responsive: true,
        })
    );
    return () => {
      players.forEach((p) => p.destroy());
    };
  });
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
      <Content>
        <h2>Hola, soy Cecilia Ainardi y te quiero invitar a reflexionar.</h2>
        <p>¿Qué significa sanar?</p>
        <p>Sanar significa mirar nuestra familia y su historia.</p>
        <p>Sanar significa hacerse preguntas:</p>
        <h3 className="padleft1">¿Cómo vivió su embarazo mi madre?</h3>
        <h3 className="padleft2">
          ¿Qué parte de mi no fue escuchada en la infancia?
        </h3>
        <p>Comprender nuestros procesos emocionales nos hace crecer.</p>
        <p>
          Si estás aquí significa que ya estás preparad@ para emprender un viaje
          terapéutico.
        </p>
        <h2>¿Quieres que te acompañe a ver la película completa de tu vida?</h2>
        <img src={logoSmall} alt="logo Cecilia Ainardi" />
        <hr />
        <Videos>
          {vimeoVideos.map((v) => (
            <div data-vimeo-id={v.id} id={v.id} className="video-container" />
          ))}
        </Videos>
      </Content>
    </Container>
  );
};

export default Landing;
