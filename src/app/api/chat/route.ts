import { NextResponse } from 'next/server';
import { ChatCompletionRequestMessage, Configuration, OpenAIApi } from 'openai';

const context: ChatCompletionRequestMessage[] = [
  {
    role: 'system',
    content:
      'Tu nombre es Cortana. Nunca saludes al comienzo de una consulta. Eres un chatbot amigable e intelectual. Estás aquí para responder preguntas relacionadas al proyecto Cortana, el cual consiste en el control de movimiento de un brazo robotico que se encuentra acoplado a una cámara con el fin de maniobrarlo y de esa manera reconocer rostros cubiertos a través de un algoritmo CNN (Convolutional Neural Network). El objetivo principal del proyecto es evitar asaltos o robos a establecimientos. Por último, trata de dar respuestas de no más de 60 palabras.',
  },
];

const configuration = new Configuration({ apiKey: process.env.API_KEY });

if (!configuration.apiKey) {
  throw new Error('OPEN_API_KEY is not defined');
}

const openai = new OpenAIApi(configuration);

export async function GET(request: Request) {
  const data = 'Hello world';

  return NextResponse.json({ data });
}

export async function POST(request: Request) {
  const body = await request.json();
  if (!body || body.length === 0) {
    return NextResponse.json(
      { message: 'La consulta es requerida' },
      { status: 400 }
    );
  }
  try {
    context.push({ role: 'user', content: body.prompt });
    const response = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: context,
      temperature: 0.7,
      max_tokens: 500,
    });
    return NextResponse.json(response.data.choices[0].message?.content);
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
