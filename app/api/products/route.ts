import { NextResponse } from 'next/server';
import productsData from '@/data/products.json';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const featured = searchParams.get('featured');
    const limit = searchParams.get('limit');
    const search = searchParams.get('search');

    let filteredProducts = [...productsData];

    // Filter by category
    if (category) {
      filteredProducts = filteredProducts.filter(product =>
        product.categories.includes(category)
      );
    }

    // Filter by featured
    if (featured === 'true') {
      filteredProducts = filteredProducts.filter(product => product.featured);
    }

    // Filter by search
    if (search) {
      const searchLower = search.toLowerCase();
      filteredProducts = filteredProducts.filter(product =>
        product.title.toLowerCase().includes(searchLower) ||
        product.shortDesc.toLowerCase().includes(searchLower) ||
        product.categories.some(cat => cat.toLowerCase().includes(searchLower))
      );
    }

    // Apply limit
    if (limit) {
      const limitNum = parseInt(limit);
      filteredProducts = filteredProducts.slice(0, limitNum);
    }

    return NextResponse.json({
      success: true,
      data: filteredProducts,
      total: filteredProducts.length,
    });
  } catch (error) {
    console.error('Error fetching products:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch products' },
      { status: 500 }
    );
  }
}
