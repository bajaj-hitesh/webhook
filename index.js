// index.js

/**
 * HTTP Cloud Function to handle webhook events
 *
 * @param {Object} req Cloud Function request context.
 * @param {Object} res Cloud Function response context.
 */
exports.webhookListener = (req, res) => {
  // Only accept POST requests
  if (req.method !== 'POST') {
    return res.status(405).send('Method Not Allowed');
  }

  // Log headers and body for inspection
  console.log('Headers:', JSON.stringify(req.headers));
  console.log('Body:', JSON.stringify(req.body));

  // Optional: Validate webhook secret if needed
  // const receivedSignature = req.headers['x-signature'] || '';
  // const expectedSignature = createYourHMACFunction(req.body);
  // if (receivedSignature !== expectedSignature) {
  //   return res.status(401).send('Invalid signature');
  // }

  // Process the webhook payload
  // You can add logic based on event type or content

  res.status(200).send('Webhook received successfully');
};
