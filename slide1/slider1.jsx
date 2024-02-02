import styles from './slider.module.scss';

import img1 from '../../assets/LandingImages/img1.jpg'
import img2 from '../../assets/LandingImages/img2.jpg'
import img3 from '../../assets/LandingImages/img3.jpg'

const Slider = () => {
  return (

    <div className={styles.container}>
    <section className={styles.slider}>
    <img src={img1} alt="" />
    <img src={img2} alt="" />
    <img src={img3} alt="" />
    </section>
</div> 

  );
};

export default Slider;
  

 