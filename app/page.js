// Página principal (Home). Acá va el video, lista de productos, beneficios, etc.
'use client';

import React, {useContext} from "react";
import HeroVideo from '../components/Main/HeroVideo/HeroVideo';
import ProductSection from "@/components/Main/ProductSection/ProductSection";
// import BenefitsSection from '../components/Main/BenefitsSection'

import {
  mateProducts,
} from '../data/products'

import { CartContext } from "../context/CartContext";


export default function HomePage() {
  const { addToCart } = useContext(CartContext)

  return (
    <main>
      {/* Sección de video hero */}
      <HeroVideo />

      {/* Secciones de productos reutilizando ProductSection */}
      <ProductSection 
        title="Mates"
        products={mateProducts}
        onAddToCart={addToCart}
      />
        

      {/* Sección de beneficios */}
      {/* <BenefitsSection /> */}
    </main>
  );
}
