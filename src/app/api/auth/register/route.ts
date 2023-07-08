import User from '@/models/User';
import { connect } from '@/database';
import bcrypt from 'bcryptjs';
import { NextResponse } from 'next/server';

export const POST = async (request: Request) => {
  const { name, email, password } = await request.json();

  await connect();

  const hashedPassword = await bcrypt.hash(password, 5);

  const newUser = new User({
    name,
    email,
    password: hashedPassword,
  });

  try {
    await newUser.save();
    return NextResponse.json(
      { message: 'User has been created' },
      {
        status: 201,
      }
    );
  } catch (err: any) {
    return NextResponse.json(err.message, {
      status: 500,
    });
  }
};
