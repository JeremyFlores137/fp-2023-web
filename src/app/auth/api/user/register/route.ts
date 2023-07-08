import { jwt } from '@/utils';
import { NextResponse } from 'next/server';
import { connect } from '@/database';
import { User } from '@/models';
import bcrypt from 'bcryptjs';
import { isValidEmail, isEmail } from '@/utils/validations';

export async function POST(request: Request) {
  const { email = '', password = '', name = '' } = await request.json();

  if (password.length < 6) {
    return NextResponse.json(
      {
        message: 'La contraseña debe de ser de 6 caracteres',
      },
      { status: 400 }
    );
  }

  if (name.length < 2) {
    return NextResponse.json(
      {
        message: 'El nombre debe de ser de 2 caracteres',
      },
      { status: 400 }
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json(
      {
        message: 'El correo no tiene formato de correo',
      },
      { status: 400 }
    );
  }

  await connect();
  const user = await User.findOne({ email });

  if (user) {
    return NextResponse.json(
      {
        message: 'No puede usar ese correo',
      },
      { status: 400 }
    );
  }

  const newUser = new User({
    email: email.toLocaleLowerCase(),
    password: bcrypt.hashSync(password),
    role: 'client',
    name,
  });

  try {
    await newUser.save({ validateBeforeSave: true });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: 'Revisar logs del servidor',
      },
      { status: 500 }
    );
  }

  const { _id } = newUser;

  const token = jwt.signToken(_id, email);

  return NextResponse.json(
    {
      token, //jwt
      user: {
        email,
        name,
      },
    },
    { status: 200 }
  );
}
