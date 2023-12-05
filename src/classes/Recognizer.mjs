import DatamatrixService from './DatamatrixService.mjs';

export default class Recognizer {
  constructor() {
    this.datamatrixService = new DatamatrixService();
  }

  async recognize(filePath, params) {
    return this.datamatrixService.detect(filePath, params);
  }
}
