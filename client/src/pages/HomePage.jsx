import NavBar from "../features/navbar/Navbar";

import ProductList from "../features/product-list/ProductList";
import Footer from "../features/common/Footer";

const HomePage = () => {
  return (
    <div>
      <NavBar>
        <ProductList></ProductList>
      </NavBar>

      <Footer></Footer>
    </div>
  );
};

export default HomePage;
