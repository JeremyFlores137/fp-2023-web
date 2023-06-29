import { NextResponse } from 'next/server';
import sdk from 'microsoft-cognitiveservices-speech-sdk';

let audioFile = 'cortana.wav';

const speechConfig = sdk.SpeechConfig.fromSubscription(
  process.env.SPEECH_KEY as string,
  process.env.SPEECH_REGION as string
);

const audioConfig = sdk.AudioConfig.fromAudioFileOutput(audioFile);

speechConfig.speechSynthesisVoiceName = 'es-ES-LiaNeural';

var synthesizer = new sdk.SpeechSynthesizer(speechConfig, audioConfig);

export async function POST(request: Request) {
  const body = await request.json();
  if (!body || body.length === 0) {
    return NextResponse.json(
      { message: 'La consulta es requerida' },
      { status: 400 }
    );
  }
  try {
    synthesizer.speakTextAsync(
      body,
      function (result) {
        if (result.reason === sdk.ResultReason.SynthesizingAudioCompleted) {
          console.log('synthesis finished.');
        } else {
          console.error(
            'Speech synthesis canceled, ' +
              result.errorDetails +
              '\nDid you set the speech resource key and region values?'
          );
        }
        synthesizer.close();
        synthesizer = null as any;
      },
      function (err) {
        console.trace('err - ' + err);
        synthesizer.close();
        synthesizer = null as any;
      }
    );
    return NextResponse.json({ message: 'hola' });
  } catch {}
}
