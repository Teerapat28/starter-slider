import Carousel from "./Carousel";
import SlickCarousel from "./SlickCarousel";

const App = () => {
  return (
    <main>
      <h3 style={{textAlign: 'center'}}>Normal Carousel</h3>
      <Carousel />
      <h3 style={{textAlign: 'center'}}>Slick Library</h3>
      <SlickCarousel />
    </main>
  );
};
export default App;
