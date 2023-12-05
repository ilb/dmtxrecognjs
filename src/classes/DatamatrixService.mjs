import { spawn } from 'child_process';

export default class DatamatrixService {
  constructor() {
    this.recognizerPath = process.env.RECOGNIZER_PATH;
  }

  async detect(path, params) {
    const child = spawn('python3', [
      this.recognizerPath,
      path,
    ]);

    return new Promise((resolve, reject) => {
      child.stdout.on('data', (data) => resolve(JSON.parse(data)));
      child.stderr.on('data', (error) => reject(error.toString()));
      child.stdin.write(JSON.stringify(params));
      child.stdin.end();
    });
  }
}
