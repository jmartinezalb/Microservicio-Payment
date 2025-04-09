const stripe = require('./stripeConfig');

async function createPaymentIntent(amount, currency = 'usd') {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount, // en centavos (ej. 1000 = $10.00)
      currency,
    });
    return paymentIntent;
  } catch (error) {
    console.error('Error creating payment intent:', error);
    throw error;
  }
}

// Uso
createPaymentIntent(1000) // $10.00
  .then(intent => console.log(intent.client_secret))
  .catch(err => console.error(err));