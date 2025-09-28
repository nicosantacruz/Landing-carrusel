import { NextRequest, NextResponse } from 'next/server';
import { fetchShopifyProducts } from '@/lib/shopify';

export async function GET(request: NextRequest) {
  try {
    // Obtener el parámetro de colección desde la URL
    const { searchParams } = new URL(request.url);
    const collectionHandle = searchParams.get('collection') || 'hidden-homepage-carousel';

    // Obtener productos de Shopify
    const products = await fetchShopifyProducts(collectionHandle);

    // Configurar headers de cache
    const response = NextResponse.json({ 
      products,
      count: products.length,
      collection: collectionHandle
    });

    // Cache por 1 minuto
    response.headers.set('Cache-Control', 'public, s-maxage=60, stale-while-revalidate=30');

    return response;
  } catch (error) {
    console.error('API Error fetching products:', error);
    
    return NextResponse.json(
      { 
        error: 'Failed to fetch products',
        message: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

// Permitir CORS si es necesario
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
