const express = require('express');
const cors = require('cors');
const paystackRouter = require('./paystack');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Mount the paystack router
app.use(paystackRouter);

app.get('/', (req, res) => {
  res.send('Backend server is running.');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
