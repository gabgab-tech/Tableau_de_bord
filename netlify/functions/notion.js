exports.handler = async (event) => {
  const { endpoint, body, method } = JSON.parse(event.body);
  const res = await fetch(`https://api.notion.com/v1/${endpoint}`, {
    method: method || 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.NOTION_TOKEN}`,
      'Notion-Version': '2022-06-28',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  });
  const data = await res.json();
  return {
    statusCode: 200,
    headers: { 'Access-Control-Allow-Origin': '*' },
    body: JSON.stringify(data)
  };
};
