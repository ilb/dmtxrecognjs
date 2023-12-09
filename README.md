# dmtxrecognjs

Пример использования:

```js
const pdfFile = '/path/to/file.pdf';
const recognizer = new Recognizer();

const params = {
  "type": RecognitionType.IDENTICAL,
  'segment': { 'x': 2, 'y': 6 }
};

const res = await recognizer.recognize([pdfFile], params);
```

- `pdfFile` - путь к файлу
- `segment` - место в котором нужно искать код в сетке 3х6 (3 ячейки по горизонтали и 6 по
  вертикали). `'segment': { 'x': 2, 'y': 6 }` означает, что нужно искать datamatrix внизу по центру
- `RecognitionType.IDENTICAL` означает что эти параметры нужно применить ко всем страницам документа. На данный момент
  поддерживается только этот тип

Формат ответа:
```json
 {
  "results": {
    "files": [
      {
        "pages": [
          [
            "d16fde:2:2:statement"
          ]
        ]
      }
    ]
  }
}
```

Пример использования в файлах `testPdf.mjs` и `testPng.mjs`
