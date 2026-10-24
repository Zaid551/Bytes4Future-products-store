import Header from '../components/UI/Header';
import Footer from '../components/UI/Footer';
import ProductList from '../components/Products/ProductList';
const Products = () => {
  return (
    <>
			<Header />
			<main>
				<ProductList />
			</main>
			<Footer/>
		</>
  )
}

export default Products