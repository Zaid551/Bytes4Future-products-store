import { useState } from "react"
import { Button } from "../UI/Button";
import { useGetData } from "../../hooks/useGetData";
const ProductList = () => {
  const[currentPage, setCurrentPage] = useState(1)
  const limit = 8
  const {products, loading, errors, total} = useGetData(currentPage, limit)
  const totalPage = Math.ceil(total/limit)
  if(loading){
    return (
    <div className="section-status">
      <svg className="w-10 h-10 animate-spin text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
      <p className="text-lg font-semibold text-gray-500 animate-pulse">Loading products...</p>
    </div>)
  }
  if(errors){
    return (
    <div className="section-status">
      <svg className="w-10 h-10 text-red-500" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
      </svg>
      <p className="text-base font-semibold text-red-600 dark:text-red-400">{errors}</p>
      <Button className="btn-primary w-50" onClick={() => location.reload()}>
        Retry
      </Button>
    </div>)
  }
  if(products.length === 0){
    return (
    <div className="section-status">
      <svg className="w-12 h-12 text-gray-400 dark:text-gray-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l3.375 3.375m0 0l3.375-3.375M13.5 15V3.75" />
      </svg>
      <p className="text-base font-medium text-gray-500 dark:text-gray-400">No products available yet...</p>
    </div>)
  }
  return (
    <section className="max-w-7xl mx-auto py-32  space-y-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-gray-200 dark:border-gray-800 pb-6">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
            Explore <span className="gradient-text">Products</span>
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 max-w-sm">
            Discover our curated collection of top-quality products designed for you.
          </p>
        </div>

        {/* عداد المنتجات الإجمالي */}
        <div className="text-sm font-medium text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-full border border-gray-200 dark:border-gray-700">
          Total Items: <span className="text-primary font-bold">{total}</span>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        {products.map(product => (
          <article 
            key={product.id}
            className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
          >
            <div className="relative h-48 w-full bg-gray-100 dark:bg-gray-800 overflow-hidden">
              <img 
                src={product.thumbnail} 
                alt={product.title}
                loading="lazy"
                className="w-full h-full object-contain object-center hover:scale-105 transition-transform duration-300"
              />
              <span className="absolute top-2 right-2 bg-accent backdrop-blur-md text-white text-xs px-2.5 py-1 rounded-full capitalize">
                {product.category}
              </span>
            </div>

            <div className="p-5 flex flex-col grow justify-between">
              <div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-1 mb-2">
                    <svg className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                    <span className=" text-sm font-medium text-gray-700 dark:text-gray-300">{product.rating}</span>
                  </div>
                  <div>
                    <span className="text-xl font-bold text-primary">{product.price}$</span>
                  </div>
                </div>
                <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-1 line-clamp-1">{product.title}</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 line-clamp-2">{product.description}</p>
              </div>
              <div className="flex items-center justify-between  border-t border-gray-100 dark:border-gray-800">
                <Button className="btn-primary" onClick={() => console.log('Added to cart:', product.id)}>
                  Add to Cart
                </Button>
              </div>
            </div>
          </article>
        ))}
      </div>
      <div className="flex items-center justify-center space-x-4 pt-4">
        <Button 
        className="btn-outline" 
        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} 
        disabled={currentPage === 1}>
          Prev
        </Button>
        <span className="text-sm font-semibold text-gray-600 dark:text-gray-300">Page {currentPage} of {totalPage}</span>
        <Button 
        className="btn-outline" 
        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPage))} 
        disabled={currentPage === totalPage}>
          Next
        </Button>
      </div>
    </section>
    
  )
}

export default ProductList