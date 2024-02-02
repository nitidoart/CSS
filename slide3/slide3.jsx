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
      <section className={styles.section}>
        <div className={styles.section__row}>
          <div>
            <i>1</i>
          </div>
          <div>
            <h2>Registrate</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio at, magnam quae repellat, repudiandae ipsa nam consequuntur.</p>
          </div>
          <iframe className={styles.iframe}></iframe>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.section__row}>
          <div>
            <i>2</i>
          </div>
          <div>
            <h2>Registrate</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio at, magnam quae repellat, repudiandae ipsa nam consequuntur.</p>
          </div>
          <iframe className={styles.iframe}></iframe>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.section__row}>
          <div>
            <i>3</i>
          </div>
          <div>
            <h2>Registrate</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio at, magnam quae repellat, repudiandae ipsa nam consequuntur.</p>
          </div>
          <iframe className={styles.iframe}></iframe>
        </div>
      </section>

    </section>
  );
};

export default Slider;
