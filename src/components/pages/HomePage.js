import { useWindowWidth } from '@react-hook/window-size';
import Categories from './Categories';
import HeroSection from './HeroSection';
import Campaigns from './Campaigns';
import Products from './Products';
import Cards from './Cards';

function HomePage() {
  const width = useWindowWidth();

  return (
    <>
      <HeroSection />
      <Categories />
      <div className="grid gap-y-6 py-6 pb-14 container mx-auto">
        {width > 640 && <Campaigns />}
        <Products />
        <Cards />
      </div>
    </>
  );
}

export default HomePage;
