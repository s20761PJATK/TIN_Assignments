var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  var q = url.parse(req.url, true).query;
  var mode = q.mode;
  
  if(q.n1 === null || q.n2 === null || q.mode === null)
  {
	  var txt = "Error: Please enter a mode, and two numbers to be used";
  }
  else if(typeof(q.n1) != "string" || typeof(q.n2) != "string" || typeof(q.mode) != "string")
  {
	  var txt = "Error: The type of values are incorrect";
  }
  else
  {
	if(mode == 'sum')
	  {
		  var ans = parseInt(q.n1) + parseInt(q.n2);
		  var txt = ans.toString();
	  }
	else if(mode == 'sub')
	  {
		  var ans = parseInt(q.n1) - parseInt(q.n2);
		  var txt = ans.toString();
	  }
	else if(mode == 'mul')
	  {
		  var ans = parseInt(q.n1) * parseInt(q.n2);
		  var txt = ans.toString();
	  }
	else if(mode == 'div')
	  {
		  var ans = parseInt(q.n1) / parseInt(q.n2);
		  var txt = ans.toString();
	  }
	else
	  {
		var txt = q.n1 + " " + q.n2;  
	  }
  }
  
  res.end(txt);
}).listen(7007);