import FoodList from './FoodList';
import Navbar from '../Components/Navbar';

const Shop = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-20">
        <FoodList />
      </div>
    </div>
  );
};

export default Shop;
