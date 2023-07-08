import { jwt } from '@/utils';
import { NextResponse } from 'next/server';
import { connect, disconnect } from '@/database';
import { User } from '@/models';
import bcrypt from 'bcryptjs';

export async function POST(request: Request) {
  const { email = '', password = '' } = await request.json();

  await connect();
  const user = await User.findOne({ email });
  await disconnect();

  if (!user) {
    return NextResponse.json(
      { message: 'Correo o contraseña no válidos - EMAIL' },
      { status: 400 }
    );
  }
  if (!bcrypt.compareSync(password, user.password!)) {
    return NextResponse.json(
      {
        message: 'Correo o contraseña no válidos - Password',
      },
      { status: 400 }
    );
  }
  const { _id } = user;
  const token = jwt.signToken(_id, email);

  return NextResponse.json(
    {
      token, //jwt
      user: {
        email,
      },
    },
    { status: 200 }
  );
}
