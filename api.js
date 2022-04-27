var axios = require('axios');

var config = {
  method: 'get',
  url: 'http://shop.lenovo.test/fission/v3/activity/1',
  headers: { 
      "api-token":"eyJpdiI6IkUwV05Da0RSb3lxTHFPaUxSM2NYTlE9PSIsIm1hYyI6ImJlY2FiZjgzMDBkMTc5ZDdhZTQyMjM5ZDBmMmI1ZGY4NzBmOWRjMmFjNGJiMWQ3M2ZiNWRhYTZhODRkMTg4ZTciLCJ2YWx1ZSI6ImdPeXhncDFhYzFWWUM1cFlhRVRzbnp0WDJvQnVuZldHYnVlbUg3NVJndmYyZTYvWm1yc24yZzdMTHlueFBpY1QifQ=="
  }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
