import React, { useState, useEffect } from 'react'
import Carousel from "react-spring-3d-carousel";
import { v4 as uuidv4 } from "uuid";
import { config } from "react-spring";
import '../css/initiatives.css';
import beneficiaries1 from '../assets/Initiatives/Beneficiaries of Success is Just a Book Away Project.jpg';
import beneficiaries2 from '../assets/Initiatives/Beneficiaries of Success is Just a Book Away Project(1).jpg';
import donationAsamankese from '../assets/Initiatives/Donation to primary students of Asamankese.jpg';
import donationOrphanage from '../assets/Initiatives/Donation to the NewLife Orphanage Home.jpg';
import strategicUN from '../assets/Initiatives/Dtrategic UN Conference.jpg';
import executives1 from '../assets/Initiatives/Executives of YSDI at a strtegic UN conference.jpg';
import executives2 from '../assets/Initiatives/Executives of YSDI at a strtegic UN conference 2.jpg';

import modelUN2 from '../assets/Initiatives/Model African Union Summit 2.jpg';
import modelUN3 from '../assets/Initiatives/Model African Union Summit 3.jpg';
import modelUN4 from '../assets/Initiatives/Model African Union Summit 4.jpg';
import modelUN5 from '../assets/Initiatives/Model African Union Summit 5.jpg';
import modelUN6 from '../assets/Initiatives/Model African Union Summit 6.jpg';
import trashyBags1 from '../assets/Initiatives/Trashy bags Initiative 1.jpg';
import trashyBags2 from '../assets/Initiatives/Trashy bags initiative 2.jpg';
import speakingWinners from '../assets/Initiatives/Winners of the young public speaking challenge .jpg';
import fellowExecutives from '../assets/Initiatives/With Fellow executives during Ghana Model UN conference.jpg';
import speakingContestants from '../assets/Initiatives/Young Public Speaker contestants .jpg';

const Initiatives = () => {
  const isMobile = window.innerWidth <= 768;
  const [card, setCard] = useState({
    goToSlide: 0,
    offsetRadius: 2,
    showNavigation: true,
    config: config.slow
  });
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageIndex, setModalImageIndex] = useState(0);

  // All initiative images data
  const initiativeImages = [
    { src: beneficiaries1, alt: "Success is Just a Book Away Project Beneficiaries", title: "Success is Just a Book Away Project" },
    { src: beneficiaries2, alt: "Success is Just a Book Away Project Beneficiaries", title: "Success is Just a Book Away Project - Group 2" },
    { src: donationAsamankese, alt: "Donation to primary students of Asamankese", title: "Supporting Primary Students in Asamankese" },
    { src: donationOrphanage, alt: "Donation to the NewLife Orphanage Home", title: "NewLife Orphanage Home Support" },
    { src: strategicUN, alt: "Strategic UN Conference", title: "Strategic UN Conference Participation" },
    { src: executives1, alt: "YSDI Executives at UN Conference", title: "YSDI Leadership at UN Conference" },
    { src: executives2, alt: "YSDI Executives at UN Conference", title: "YSDI Leadership Team at UN Conference" },
    
    { src: modelUN2, alt: "Model African Union Summit", title: "Model African Union Summit - Session 2" },
    { src: modelUN3, alt: "Model African Union Summit", title: "Model African Union Summit - Session 3" },
    { src: modelUN4, alt: "Model African Union Summit", title: "Model African Union Summit - Session 4" },
    { src: modelUN5, alt: "Model African Union Summit", title: "Model African Union Summit - Session 5" },
    { src: modelUN6, alt: "Model African Union Summit", title: "Model African Union Summit - Session 6" },
    { src: trashyBags1, alt: "Trashy Bags Initiative", title: "Trashy Bags Environmental Initiative" },
    { src: trashyBags2, alt: "Trashy Bags Initiative", title: "Trashy Bags Environmental Initiative - Phase 2" },
    { src: speakingWinners, alt: "Young Public Speaking Challenge Winners", title: "Young Public Speaking Challenge Winners" },
    { src: fellowExecutives, alt: "Fellow executives during Ghana Model UN", title: "Ghana Model UN Conference with Fellow Executives" },
    { src: speakingContestants, alt: "Young Public Speaker contestants", title: "Young Public Speaking Challenge Contestants" }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCard(prevCard => ({
        ...prevCard,
        goToSlide: (prevCard.goToSlide + 1) % initiativeImages.length
      }));
    }, 5000); // 5 seconds

    return () => clearInterval(interval);
  }, [initiativeImages.length]);

  const InCards = initiativeImages.map((image, index) => ({
    key: uuidv4(),
    content: <img src={image.src} alt={image.alt} />,
    onClick: () => {
      if (index === card.goToSlide) {
        setModalImageIndex(index);
        setIsModalOpen(true);
      }
      setCard({ ...card, goToSlide: index });
    }
  }));

  const onRight = () => {
    setCard({ ...card, goToSlide: (card.goToSlide + 1) % initiativeImages.length });
  }

  const onLeft = () => {
    setCard({ ...card, goToSlide: (card.goToSlide - 1 + initiativeImages.length) % initiativeImages.length });
  }

  const closeModal = () => {
    setIsModalOpen(false);
  }

  const nextModalImage = () => {
    setModalImageIndex((modalImageIndex + 1) % initiativeImages.length);
  }

  const prevModalImage = () => {
    setModalImageIndex((modalImageIndex - 1 + initiativeImages.length) % initiativeImages.length);
  }

  return (
    <div className="Initiatives">
      <br />
      <br />
      <div className="title">
        <h1><span>OUR</span> INITIATIVES</h1>
      </div>
      <div className="initiative-cards">
        <Carousel
          slides={InCards}
          goToSlide={card.goToSlide}
          offsetRadius={card.offsetRadius}
          showNavigation={card.showNavigation}
          animationConfig={card.config}
        />
      </div>

      <div className="arrows">
        <svg onClick={onLeft} xmlns="http://www.w3.org/2000/svg" width={isMobile?"30":"40"} height={isMobile?"30":"40"} fill="currentColor" className="leftarr bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
          <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z" />
        </svg>
        <svg onClick={onRight} xmlns="http://www.w3.org/2000/svg" width={isMobile?"30":"40"}  height={isMobile?"30":"40"}  fill="currentColor" className="rightarr bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
          <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
        </svg>
      </div>

      {/* Modal for enlarged image view */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>×</button>
            <div className="modal-image-container">
              <button className="modal-nav modal-prev" onClick={prevModalImage}>‹</button>
              <img 
                src={initiativeImages[modalImageIndex].src} 
                alt={initiativeImages[modalImageIndex].alt}
                className="modal-image"
              />
              <button className="modal-nav modal-next" onClick={nextModalImage}>›</button>
            </div>
            <div className="modal-title">
              <h3>{initiativeImages[modalImageIndex].title}</h3>
              <p>{modalImageIndex + 1} of {initiativeImages.length}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Initiatives
