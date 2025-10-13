'use client';

import { useEffect, useState, useMemo, useRef } from 'react';
import Link from 'next/link';
import { GridTileImage } from './GridTileImage';
import { Product } from '@/lib/shopify/types';

export function Carousel() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setIsMounted(true);
    let isMounted = true;
    
    async function fetchProducts() {
      try {
        setLoading(true);
        const response = await fetch('/api/shopify/products?collection=hidden-homepage-carousel', {
          next: { revalidate: 3600 } // Cache for 1 hour
        });
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        if (data.error) {
          throw new Error(data.error);
        }
        
        if (isMounted) {
          setProducts(data.products || []);
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    fetchProducts();
    
    return () => {
      isMounted = false;
    };
  }, []);

  // Memoizar la triplicación de productos para evitar recálculos
  const carouselProducts = useMemo(() => {
    if (!products.length) return [];
    return [...products, ...products, ...products];
  }, [products]);

  // Evitar hidratación mostrando el carrusel solo después del mount
  if (!isMounted) {
    return (
      <div className="w-full overflow-x-auto pb-6 pt-1 carousel-scroll">
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

  if (loading) {
    return (
      <div className="w-full overflow-x-auto pb-6 pt-1 carousel-scroll">
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

  if (!products?.length) return null;

  return (
    <div
      ref={containerRef}
      className="w-full overflow-x-auto pb-6 pt-1 carousel-scroll"
      onScroll={() => {
        const el = containerRef.current;
        if (!el) return;
        const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 1;
        if (atEnd) {
          if (!isPaused) setIsPaused(true); // detener animación al final
        } else if (isPaused) {
          setIsPaused(false); // reanudar si se aleja del final
        }
      }}
    >
      <ul className={`flex gap-4 ${isPaused ? '' : 'animate-carousel'}`}>
        {carouselProducts.map((product, i) => (
          <li
            key={`${product.handle}${i}`}
            className="relative aspect-square h-[30vh] max-h-[275px] w-2/3 max-w-[475px] flex-none md:w-1/3"
          >
            <Link href={`/product/${product.handle}`} className="relative h-full w-full">
              <GridTileImage
                alt={product.title}
                label={{
                  title: product.title,
                  amount: product.priceRange.maxVariantPrice.amount,
                  currencyCode: product.priceRange.maxVariantPrice.currencyCode
                }}
                src={product.featuredImage?.url || '/placeholder.jpg'}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
