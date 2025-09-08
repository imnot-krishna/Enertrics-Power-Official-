import { NextResponse } from 'next/server';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  company: z.string().optional(),
  phone: z.string().optional(),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validate the request body
    const validatedData = contactSchema.parse(body);
    
    // In a real application, you would:
    // 1. Save to database
    // 2. Send email notification
    // 3. Log the contact request
    
    console.log('Contact form submission:', validatedData);
    
    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return NextResponse.json({
      success: true,
      message: 'Thank you for your message! We will get back to you soon.',
      data: {
        id: Date.now().toString(),
        timestamp: new Date().toISOString(),
        ...validatedData,
      },
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Validation failed',
          details: error.errors 
        },
        { status: 400 }
      );
    }
    
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to process contact form' },
      { status: 500 }
    );
  }
}
