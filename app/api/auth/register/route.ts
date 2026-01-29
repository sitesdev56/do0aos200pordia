import { NextRequest, NextResponse } from 'next/server';
import { registerUser } from '@/lib/auth';

export async function POST(request: NextRequest) {
  try {
    const { email, password, name } = await request.json();

    if (!email || !password || !name) {
      return NextResponse.json(
        { message: 'Email, senha e nome são obrigatórios' },
        { status: 400 }
      );
    }

    const user = registerUser(email, password, name);
    
    return NextResponse.json(user, { status: 201 });
  } catch (error: any) {
    return NextResponse.json(
      { message: error.message || 'Erro ao registrar' },
      { status: 400 }
    );
  }
}
