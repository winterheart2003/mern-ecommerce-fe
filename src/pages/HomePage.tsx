import { useEffect } from "react";
import CategoryItem from "../components/CategoryItem";
import { useLanguageStore } from "../stores/useLanguagesStore";
import { useProductStore } from "../stores/useProductStore";
import FeaturedProducts from "../components/FeaturedProducts";
const categories = [
    {href:'/jeans',name:"Jeans",imageUrl:"/jeans.jpg"},
    {href:"/t-shirts",name:"T-Shirts",imageUrl:"/tshirts.jpg"},
    {href:"/shoes",name:"Shoes",imageUrl:"/shoes.jpg"},
    {href:"/jackets",name:"Jackets",imageUrl:"/jackets.jpg"},
    {href:"/suits",name:"suits",imageUrl:"/suits.jpg"},
    {href:"/bags",name:"bags",imageUrl:"/bags.jpg"},
]

 
const HomePage = () => {
    const { fetchFeaturedProducts, products, loading } = useProductStore();
      const {t} = useLanguageStore();

      	useEffect(() => {
		fetchFeaturedProducts();
	}, [fetchFeaturedProducts]);

    return (
       <div className="relative min-h-screen text-white overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h1 className="text-center text-5xl sm:text-6xl font-bold text-emerald-400 mb-4">
               {t.greeting}
            </h1>
            <p className="text-center text-xl text-gray-300 mb-12">
                {t.title}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {categories.map((category) =>(
                    <CategoryItem 
                    key={category.name}
                    category={category}/>
                ))} </div>

                {!loading && products.length > 0 && <FeaturedProducts featuredProducts={products} />}
        </div>
       </div>
    )
}

export default HomePage;