import { useEffect, useState } from "react"

import { getHomeProducts } from "../helpers/getProducts"

import { ProductSlider } from '../components/ProductSlider'
import { HomeCategories } from '../UI/HomeCategories'
import { HomeExplore } from '../UI/HomeExplore'
import { HomeFooter } from '../UI/HomeFooter'
import { HomeHeader } from '../UI/HomeHeader'

import '../assets/css/homepage.css'

export const HomePage = () => {

    const [products, setProducts] = useState([])

    // Simula llamado a un api
    const getProducts = async () => {
        const productData = await getHomeProducts()
        setProducts(productData)
    };

    useEffect(() => {
        getProducts()
    }, [])

    return (
        <>
            <div className="headerNotice">
                <p>Envío Gratis En Todo México</p>
            </div>

            <HomeHeader/>

            <main className="homeMain">
                <ProductSlider productsSlides={products}/>
                <a href="#" className='btnPrimary'>VER TODOS</a>
            </main>

            <HomeCategories/>  

            <HomeExplore />

            <HomeFooter/>
        </>
    )
}
