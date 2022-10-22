import Slider from '../../components/slider';
import ProductList from '../../components/productList';
import LatestNews from '../../components/latestNews';

const HomePage = () => {
    return (
        <div>
            <Slider />
            <div>
                <ProductList />
                <ProductList />
                <ProductList />
            </div>
            <LatestNews />
        </div>
    );
};

export default HomePage;
