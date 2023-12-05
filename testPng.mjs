import dotenv from 'dotenv';
import path from 'path';
import Recognizer from './src/classes/Recognizer.mjs';
import RecognitionType from './src/classes/RecognitionType.mjs';

dotenv.config({ path: '.env' });

const executablePath = process.argv[1];
const executableDirectory = path.dirname(executablePath);
const pdfFile = path.resolve(executableDirectory, 'files/01.png');
const recognizer = new Recognizer();

const params = {
  "type": RecognitionType.IDENTICAL,
  'segment': { 'x': 1, 'y': 6 }
};

const res = await recognizer.recognize(pdfFile, params);

console.log(res);
