import Slider from 'react-slick';

export default function HeroSection() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    cssEase: 'linear',
  };

  return (
    <div className="relative h-auto md:h-[500px] before:bg-gradient-to-r before:from-primary-brand-color before:to-transparent before:absolute before:inset-0 before:w-full before:h-full before:z-10">
      <Slider {...settings}>
        <div>
          <img
            className="w-full h-[500px] object-cover"
            src="https://www.larvalabs.com/public/images/product/cryptopunks/punk-variety-2x.png"
          />
        </div>
        <div>
          <img
            className="w-full h-[500px] object-cover"
            src="https://www.btchaber.com/wp-content/uploads/2021/10/bir-cryptopunks-nftsi-530-milyon-dolara-satildi.jpg"
          />
        </div>
      </Slider>
    </div>
  );
}
