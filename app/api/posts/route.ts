import { NextResponse } from 'next/server';
import postsData from '@/data/posts.json';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const featured = searchParams.get('featured');
    const limit = searchParams.get('limit');
    const search = searchParams.get('search');
    const tag = searchParams.get('tag');

    let filteredPosts = [...postsData];

    // Filter by featured
    if (featured === 'true') {
      filteredPosts = filteredPosts.filter(post => post.featured);
    }

    // Filter by tag
    if (tag) {
      filteredPosts = filteredPosts.filter(post =>
        post.tags.includes(tag)
      );
    }

    // Filter by search
    if (search) {
      const searchLower = search.toLowerCase();
      filteredPosts = filteredPosts.filter(post =>
        post.title.toLowerCase().includes(searchLower) ||
        post.excerpt.toLowerCase().includes(searchLower) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchLower))
      );
    }

    // Sort by date (newest first)
    filteredPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    // Apply limit
    if (limit) {
      const limitNum = parseInt(limit);
      filteredPosts = filteredPosts.slice(0, limitNum);
    }

    return NextResponse.json({
      success: true,
      data: filteredPosts,
      total: filteredPosts.length,
    });
  } catch (error) {
    console.error('Error fetching posts:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch posts' },
      { status: 500 }
    );
  }
}
