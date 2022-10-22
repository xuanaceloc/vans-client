import Header from '../components/header';
import Footer from '../components/footer';

const DefaultLayout = ({ children }) => {
    return (
        <div>
            <Header />
            <div> {children}</div>
            <Footer />
        </div>
    );
};

export default DefaultLayout;
