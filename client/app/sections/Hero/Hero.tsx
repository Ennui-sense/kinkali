import "./Hero.scss";
import imageSrc from "~/assets/images/hero-bg.jpg";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="hero">
      <h1 className="hero__title container">Вкус, который объединяет сердца</h1>
      <div className="hero__bg">
        <img 
          src={imageSrc} 
          alt="" 
          className={`hero__bg-image ${isLoaded ? "hero__bg-image--animated" : ""}`} 
        />
      </div>
    </section>
  );
};

export default Hero;
