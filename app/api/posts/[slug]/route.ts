import { NextResponse } from 'next/server';
import postsData from '@/data/posts.json';

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  try {
    const { slug } = params;

    const post = postsData.find(p => p.slug === slug);

    if (!post) {
      return NextResponse.json(
        { success: false, error: 'Post not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: post,
    });
  } catch (error) {
    console.error('Error fetching post:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch post' },
      { status: 500 }
    );
  }
}
