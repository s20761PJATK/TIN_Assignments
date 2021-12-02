const express = require('express')
const app = express()
const port = 3000
app.set('views', './views')
app.set("view engine", "pug");
app.use(express.json());

app.use(express.urlencoded({
  extended: true
}))

app.get('/hello', (req, res) => {
  res.send('Hello World!')
})



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

app.get('/form', (req, res) => {
  res.sendFile('C:/Users/Michal_/Desktop/Assignment_8/formHTML.html');
})

app.post('/formdata', (req, res) => {
	  const username = req.body.username;
	  const email = req.body.email;
	  const password = req.body.password;
	  var empass = 'Username: ' + username + ',      Email: ' + email + ',     Password: ' + password; 
	  res.render('template', { title: 'Information from form', message: empass});
	  
	  res.end();
})

app.post('/jsondataresp', (req, res) => {
	try{
		var jsonobj = JSON.parse(req.body.jsondata);
		var jsoninfo = JSON.stringify(jsonobj,null,2);
		var jsonresult = jsoninfo.replace('{','').replace('}','').replace('"','');
		
		res.render('template', { title: 'Information from JSON form', message: jsonresult}); 
	} catch (e) {
		res.render('template', { title: 'Error in JSON', message: "Error: Given text is not in JSON"}); 
	}
	
	res.end();
})

app.get('/jsondata', function (req, res) {
  res.sendFile('C:/Users/Michal_/Desktop/Assignment_8/JsonHTML.html');
});
  
app.get('/', function (req, res) {
  res.render('template', { title: 'Welcome Message', message: 'Use /form, /hello, or /jsondata'});
});