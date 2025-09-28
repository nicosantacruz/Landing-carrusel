export interface Product {
  id: string;
  handle: string;
  title: string;
  featuredImage?: { 
    url: string;
    altText?: string;
  };
  priceRange: {
    maxVariantPrice: {
      amount: string;
      currencyCode: string;
    };
  };
}

export interface ShopifyCollection {
  products: {
    edges: Array<{
      node: Product;
    }>;
  };
}

export interface ShopifyResponse {
  data?: {
    collection?: ShopifyCollection;
  };
  errors?: Array<{
    message: string;
  }>;
}

export interface LabelProps {
  title: string;
  amount: string;
  currencyCode: string;
  position?: 'bottom' | 'center';
}
