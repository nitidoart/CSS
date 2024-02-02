/* import React, { useEffect } from 'react';
import styles from './slider.module.scss';

import img1 from '../../assets/LandingImages/img1.jpg';
import img2 from '../../assets/LandingImages/img2.jpg';
import img3 from '../../assets/LandingImages/img3.jpg';

const Slider = () => {
  useEffect(() => {
    const container = document.querySelector(`.${styles.container}`);

    const handleScroll = (event) => {
      container.scrollLeft += event.deltaY;
      event.preventDefault();
    };

    container.addEventListener('wheel', handleScroll, { passive: false });

    return () => {
      container.removeEventListener('wheel', handleScroll);
    };
  }, []);

  return (
    <section className={styles.container}>
      <img src={img1} alt="" />
      <img src={img2} alt="" />
      <img src={img3} alt="" />
    </section>
  );
};

export default Slider;
 
 */

import React, { useEffect, useState } from 'react';
import styles from './slider.module.scss';

import img1 from '../../assets/LandingImages/img1.jpg';
import img2 from '../../assets/LandingImages/img2.jpg';
import img3 from '../../assets/LandingImages/img3.jpg';

const Slider = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = (event) => {
      setScrollPosition((prevPosition) => prevPosition + event.deltaY);
      event.preventDefault();
    };

    const container = document.querySelector(`.${styles.container}`);
    container.addEventListener('wheel', handleScroll, { passive: false });

    return () => {
      container.removeEventListener('wheel', handleScroll);
    };
  }, []);

  useEffect(() => {
    const container = document.querySelector(`.${styles.container}`);
    container.scrollLeft = scrollPosition;
  }, [scrollPosition]);

  return (
    <section className={styles.container}>
      <img src={img1} alt="" />
      <img src={img2} alt="" />
      <img src={img3} alt="" />
    </section>
  );
};

export default Slider;
