import { cookies } from 'next/headers';
import { jwt } from '@/utils';
import { NextResponse } from 'next/server';
import { connect, disconnect } from '@/database';
import { User } from '@/models';

export async function GET(request: Request) {
  const cookieStore = cookies();
  const token = cookieStore.get('token');
  let userId = '';

  try {
    userId = await jwt.isValidToken(token?.value || '');
  } catch (error) {
    return NextResponse.json(
      { message: 'Token de autorización no es válido' },
      { status: 401 }
    );
  }

  await connect();
  const user = await User.findById(userId).lean();
  await disconnect();

  if (!user) {
    return NextResponse.json(
      { message: 'No existe usuario con ese id' },
      { status: 400 }
    );
  }

  const { _id, email } = user;

  return NextResponse.json(
    { token: jwt.signToken(_id, email), user: { email } },
    { status: 200 }
  );
}
