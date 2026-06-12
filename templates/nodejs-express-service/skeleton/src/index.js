const express = require('express');
const app = express();
const PORT = process.env.PORT || ${{ values.port }};

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ 
    service: '${{ values.serviceName }}',
    status: 'running' 
  });
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.listen(PORT, () => {
  console.log(`${{ values.serviceName }} running on port ${PORT}`);
});