import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import GlobalStyle from './components/GlobalStyle';
import { routes } from './route';
import DefaultLayout from './layout/defaultLayout';
import ProductContextProvider from './context/product';
import CartContextProvider from './context/cart';
import NewsContextProvider from './context/news';

function App() {
    return (
        <ProductContextProvider>
            <CartContextProvider>
                <NewsContextProvider>
                    <GlobalStyle>
                        <Router>
                            <Routes>
                                {routes.map((route, index) => {
                                    const Comp = route.component;
                                    let Layout = DefaultLayout;
                                    if (route.layout) {
                                        Layout = route.layout;
                                    }
                                    return (
                                        <Route
                                            key={index}
                                            path={route.path}
                                            element={
                                                <Layout>
                                                    <Comp
                                                        collection={
                                                            route.collection
                                                        }
                                                        login={route.login}
                                                        hero={route.hero}
                                                        data={route.data}
                                                    />
                                                </Layout>
                                            }
                                        />
                                    );
                                })}
                            </Routes>
                        </Router>
                    </GlobalStyle>
                </NewsContextProvider>
            </CartContextProvider>
        </ProductContextProvider>
    );
}

export default App;
