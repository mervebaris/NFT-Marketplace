import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import './hero-section.css';
import heroImg from '../../assets/images/hero.jpg';

const HeroSection = () => {
  return (
    <section className="hero__section">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="hero__content">
              <h2>
                Discover rare digital art and collect{" "}
                <span>sell extraordinary</span> NFTs{" "}
              </h2>
              <p>
                On your Binance NFT [Profile], click [Deposit]. Connect your
                wallet and choose the network of your wallet. Next, select the
                NFTs/NFT collections you want to deposit to Binance in the
                connected wallet and click [Deposit Now].
              </p>
              <div className="hero__btns d-flex align-items-center">
              <button className="explore__btn d-flex align-items-center gap-2">
                <i class="ri-rocket-line"></i>
                <Link to="/market">Explore</Link>
              </button>
              <button className="create__btn d-flex align-items-center gap-2">
                <i class="ri-ball-pen-line"></i>
                <Link to="/create">Create</Link>
              </button>
              </div>
            </div>
          </Col>

          <Col lg='6' md='6'>
            <div className="hero__img">
                <img src={heroImg} alt='hero' className="w-100"/>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
