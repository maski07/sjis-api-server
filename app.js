const express = require('express');
const iconv = require('iconv-lite'); // Shift-JIS対応
const app = express();
const port = 3000;
app.use(express.json()); // JSONリクエストをパース

app.get('/api', (req, res) => {
    console.log('/api getter is called');
    const message = "こんにちは、世界！"; // ここにShift-JISで表示させたいメッセージを入れる
    const encodedMessage = iconv.encode(message, 'Shift_JIS');
    res.setHeader('Content-Type', 'text/plain; charset=Shift_JIS');
    res.end(encodedMessage);
});

app.post('/api', (req, res) => {
    console.log('/api postが呼び出された')
    const message = "こんにちは、世界！"; // Shift-JISで表示させたいメッセージ
    const encodedMessage = iconv.encode(message, 'Shift_JIS');
    
    const requestBody = JSON.stringify(req.body);
    
    res.setHeader('Content-Type', 'text/plain; charset=Shift_JIS');
    
    // エンコードされたメッセージとリクエストボディを送信
    res.end(Buffer.concat([encodedMessage, requestBody]));
});
app.listen(port, () => {
    console.log(`API server running at http://localhost:${port}`);
});
