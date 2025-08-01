const handle = async (context, body) => {
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  context.log.info(`Method: ${context.method}`);
  context.log.info(`BODY: ${JSON.stringify(body)}`);

  const groupName = body.data.targetid_groupname;
  context.log.info(`Created groupName: ${groupName}`);

  if (context.method === 'OPTIONS') {
    return { statusCode: 204, headers: corsHeaders };
  }

  if (context.method === 'POST') {
    const name = body?.name;
    context.log.info(`Received name: ${name}`);
    return { statusCode: 200, headers: corsHeaders, body };
  } else if (context.method === 'GET') {
    return { statusCode: 200, headers: corsHeaders, body: context.query };
  } else {
    return {
      statusCode: 405,
      headers: corsHeaders,
      statusMessage: 'Method not allowed',
    };
  }
};

module.exports = { handle };
