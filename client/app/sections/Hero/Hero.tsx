	import "./Hero.scss";

	import imageSrc from "~/assets/images/hero-bg.jpg";

	import { useEffect, useState } from "react";

	import HeroLink from "~/components/HeroLink/HeroLink";

	const Hero = () => {
		const [isLoaded, setIsLoaded] = useState(false);

		useEffect(() => {
			setIsLoaded(true);
		}, []);

		return (
			<section className="hero">
				<h1 className="hero__title container">Вкус, который объединяет сердца</h1>

				<div className="hero__body">
					<div className="hero__inner">
						<HeroLink />
					</div>

					<div className="hero__bg">
						<img
							src={imageSrc}
							alt=""
							className={`hero__bg-image ${isLoaded ? "hero__bg-image--animated" : ""}`}
							width={1920}
							height={725}
						/>
					</div>
				</div>
			</section>
		);
	};

	export default Hero;
