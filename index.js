var express = require('express')
var app = express();

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  response.send('<html><head><title>MEGO SEO TEST</title><meta name="description" content="155 characters of message matching text with a call to action goes here"></head><body>m.amged (@) hotmail.com</body>')
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
