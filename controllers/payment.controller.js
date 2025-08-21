import axios from 'axios';
import paystack from 'paystack';
export const payment = async (req, res) => {
  const { reference } = req.body;
  const paystackSecretKey = process.env.PAYSTACK_SECRET_KEY || 'sk_test_6cb6abfbeb9a1a5cb05e6b22744a6a4d1bd925d9';
  try {
    const response = await axios.get(
      `https://api.paystack.co/transaction/verify/${reference}`,
      {''
        headers: {
          Authorization: `Bearer ${paystackSecretKey}`,
        },
      }
    );
    if (response.data.status && response.data.data.status === 'success') {
      res.json({ status: 'success', data: response.data.data });
    } else {
      res.json({ status: 'error', message: response.data.message });
    }
  } catch (err) {
    res.status(500).json({ status: 'error', message: err.message });
  }
};
