'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { GridTileImage } from './GridTileImage';
import { Product } from '@/lib/shopify/types';

interface CarouselProps {
  shopUrl?: string;
  collectionHandle?: string;
}

export function Carousel({ 
  shopUrl = "https://tu-tienda.vercel.app",
  collectionHandle = "hidden-homepage-carousel"
}: CarouselProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true);
        setError(null);
        
        const response = await fetch(`/api/shopify/products?collection=${collectionHandle}`);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        if (data.error) {
          throw new Error(data.error);
        }
        
        setProducts(data.products || []);
      } catch (error) {
        console.error('Error fetching products:', error);
        setError(error instanceof Error ? error.message : 'Error desconocido');
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, [collectionHandle]);

  if (loading) {
    return (
      <div className="w-full overflow-x-auto pb-6 pt-1">
        <div className="flex gap-4">
          {[...Array(5)].map((_, i) => (
            <div 
              key={i}
              className="relative aspect-square h-[30vh] max-h-[275px] w-2/3 max-w-[475px] flex-none md:w-1/3 animate-pulse bg-gray-200 rounded-lg"
            />
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full p-8 text-center">
        <p className="text-red-600">Error al cargar productos: {error}</p>
      </div>
    );
  }

  if (!products.length) return null;

  // IMPORTANTE: Triplicar productos para el loop infinito (igual que el original)
  const carouselProducts = [...products, ...products, ...products];

  return (
    <div className="w-full overflow-x-auto pb-6 pt-1">
      <ul className="flex animate-carousel gap-4">
        {carouselProducts.map((product, i) => (
          <li
            key={`${product.handle}${i}`}
            // TAMAÑOS EXACTOS DEL ORIGINAL:
            className="relative aspect-square h-[30vh] max-h-[275px] w-2/3 max-w-[475px] flex-none md:w-1/3"
          >
            <Link 
              href={`${shopUrl}/product/${product.handle}`} 
              className="relative h-full w-full"
              target="_blank"
            >
              <GridTileImage
                alt={product.title}
                label={{
                  title: product.title,
                  amount: product.priceRange.maxVariantPrice.amount,
                  currencyCode: product.priceRange.maxVariantPrice.currencyCode
                }}
                src={product.featuredImage?.url}
                fill
                // SIZES EXACTOS DEL ORIGINAL:
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
