import React from "react"
import Carousel from "react-bootstrap/Carousel"
import caro1 from "../images/cafeCaro.jpg"
import caro2 from "../images/caro2.png"
import caro3 from "../images/caro4.jpg"

const Slidecarousel = () => (
  <Carousel>
    <Carousel.Item>
      <img className="d-block w-100" src={caro1} alt="First slide" />
      <Carousel.Caption>
        <h3>Tellicafe's Website</h3>
        <p>
          This website was built for a local business and can be visited at:{" "}
          <a
            href="https://tellicafe.com"
            target="_blank"
            rel="noopener noreferrer">
            tellicafe.com
          </a>
        </p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img className="d-block w-100" src={caro2} alt="Third slide" />
      <Carousel.Caption>
        <h3>The Bear's Den Website</h3>
        <p>
          This is a local business website and can be visited at:{" "}
          <a
            href="https://bearsdentellico.com"
            target="_blank"
            rel="noopener noreferrer">
            bearsdentellico.com
          </a>
        </p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img className="d-block w-100" src={caro3} alt="Third slide" />
      <Carousel.Caption>
        <h3>Truck Pro's Website</h3>
        <p>
          Small business website that can be visited at:{" "}
          <a
            href="https://truckprorepair.com"
            target="_blank"
            rel="noopener noreferrer">
            truckprorepair.com
          </a>
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
)

export default Slidecarousel
