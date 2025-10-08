import { getCollectionProductsQuery } from './queries/collection';
import { Product, ShopifyResponse } from './types';

const SHOPIFY_DOMAIN = process.env.SHOPIFY_STORE_DOMAIN;
const SHOPIFY_TOKEN = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN;

// Cache tags for Next.js
const TAGS = {
  collections: 'collections',
  products: 'products'
};

// Cache life for Next.js
const cacheLife = (duration: string) => {
  // This would be implemented with Next.js cache in a real app
  return duration;
};

const cacheTag = (...tags: string[]) => {
  // This would be implemented with Next.js cache in a real app
  return tags;
};

export async function getCollectionProducts({
  collection,
  reverse,
  sortKey
}: {
  collection: string;
  reverse?: boolean;
  sortKey?: string;
}): Promise<Product[]> {
  'use cache';
  cacheTag(TAGS.collections, TAGS.products);
  cacheLife('days');

  if (!SHOPIFY_DOMAIN || !SHOPIFY_TOKEN) {
    console.error('Shopify configuration missing');
    return [];
  }

  try {
    const response = await fetch(`https://${SHOPIFY_DOMAIN}/api/2023-01/graphql.json`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token': SHOPIFY_TOKEN,
      },
      body: JSON.stringify({
        query: getCollectionProductsQuery,
        variables: {
          handle: collection,
          reverse,
          sortKey: sortKey === 'CREATED_AT' ? 'CREATED' : sortKey
        }
      }),
      next: { revalidate: 86400 } // Cache for 1 day
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: ShopifyResponse = await response.json();
    
    if (data.errors) {
      console.error('Shopify GraphQL errors:', data.errors);
      return [];
    }

    if (!data.data?.collection) {
      console.log(`No collection found for \`${collection}\``);
      return [];
    }

    const products = data.data.collection.products.edges.map(edge => edge.node);
    return products;
  } catch (error) {
    console.error('Error fetching Shopify products:', error);
    return [];
  }
}

export async function fetchShopifyProducts(collectionHandle: string = 'hidden-homepage-carousel'): Promise<Product[]> {
  if (!SHOPIFY_DOMAIN || !SHOPIFY_TOKEN) {
    console.error('Shopify configuration missing');
    return [];
  }

  try {
    const response = await fetch(`https://${SHOPIFY_DOMAIN}/api/2023-01/graphql.json`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token': SHOPIFY_TOKEN,
      },
      body: JSON.stringify({
        query: getCollectionProductsQuery,
        variables: { handle: collectionHandle }
      }),
      next: { revalidate: 60 } // Cache for 1 minute
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: ShopifyResponse = await response.json();
    
    if (data.errors) {
      console.error('Shopify GraphQL errors:', data.errors);
      return [];
    }

    const products = data.data?.collection?.products?.edges?.map(edge => edge.node) || [];
    return products;
  } catch (error) {
    console.error('Error fetching Shopify products:', error);
    return [];
  }
}
