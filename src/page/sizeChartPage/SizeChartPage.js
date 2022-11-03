import Hero from '../../components/hero';
import SizeChart from '../../components/sizeChart';
const SizeChartPage = () => {
    return (
        <div>
            <Hero
                title="Size Giày VANS -Cách Đo Size Giày VANS Chi Tiết"
                subTitle="Size Giày VANS -Cách Đo Size Giày VANS Chi Tiết"
            />
            <div style={{ maxWidth: '900px', margin: '50px auto' }}>
                <SizeChart />
            </div>
        </div>
    );
};

export default SizeChartPage;
