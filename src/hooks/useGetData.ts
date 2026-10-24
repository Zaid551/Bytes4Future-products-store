import { useState, useEffect } from "react"

interface Products{
    id: number;
    title: string;
    description: string;
    thumbnail: string;
    category: string;
    price: number;
    rating: number;
  }
  export const useGetData = (currentPage:number, limit:number) =>{
    const [products, setProducts] = useState<Products[]>([])
    const [loading, setLoading] = useState(false)
    const [errors, setErrors] = useState<string | null>(null)
    const [total, setTotal] = useState(0)

    useEffect(()=>{
    const controller = new AbortController();
    const getProducts = async () => {
      setLoading(true)
      setErrors(null)
      const skip = (currentPage - 1) * limit;
      const url = `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
      try{
        const res = await fetch(url, { signal: controller.signal })
        if(!res.ok) throw new Error(`HTTP ${res.status}`)
        const data = await res.json()
        setProducts(data.products)
        setTotal(data.total)
      } catch(err){
        if (err.name !== 'AbortError') {
          setErrors(err instanceof Error ? err.message : 'Failed to load');
        }
      }finally{
        setLoading(false)
      }
    }
    getProducts()
    return () => controller.abort();
  },[currentPage, limit])
  return {products, loading, errors, total}
  } 

