import { NextResponse } from 'next/server';
import productsData from '@/data/products.json';

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  try {
    const { slug } = params;
    
    const product = productsData.find(p => p.slug === slug);
    
    if (!product) {
      return NextResponse.json(
        { success: false, error: 'Product not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: product,
    });
  } catch (error) {
    console.error('Error fetching product:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch product' },
      { status: 500 }
    );
  }
}
