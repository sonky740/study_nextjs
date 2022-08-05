import Image from 'next/image';
import classes from './Hero.module.css';

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/sky.png"
          alt="An image showing SKY"
          width={200}
          height={200}
        />
      </div>
      <h1>Hi, I'm SKY</h1>
      <p>
        I blog about web developer - especially frontend frameworks like React.
      </p>
    </section>
  );
}

export default Hero;
