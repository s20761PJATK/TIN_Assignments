const express = require('express')
const app = express()
const port = 3000
app.set('views', './views')
app.set("view engine", "pug");
app.use(express.json());

app.use(express.urlencoded({
  extended: true
}))


app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})

app.get('/', (req, res) => {
  res.sendFile('C:/Users/Michal_/Desktop/Dee/9aHTML.html');
})

app.post('/resp', (req, res) => {
	try{
		var obj = JSON.parse(req.body.jsondata);
		var num1 = parseInt(obj.data[0].number1);
		var num2 = parseInt(obj.data[0].number2);
		var operator = obj.data[0].operator;
		
		var result = 0;
		
		if(operator == '+')
			result = num1 + num2;
		else if(operator == '-')
			result = num1 - num2;
		else if(operator == '*')
			result = num1 * num2;
		else if (operator == '/' && num2 != 0)
			result = num1 / num2;
		else 
			res.render('template', { title: 'Information from JSON form', message: "Error"}); 

		var jsonresult = JSON.stringify(result);
		
		res.render('template', { title: 'Information from JSON form', message: jsonresult}); 
	} catch (e) {
		res.render('template', { title: 'Error in JSON', message: "Error: Given text is not in JSON"}); 
	}
	
	res.end();
})


//Assignment B

app.get('/b', (req, res) => {
  res.sendFile('C:/Users/Michal_/Desktop/Dee/9bHTML.html');
})


app.post('/num', (req, res) => {
	try{
		res.resp
		var num1 = parseInt(req.body.num1);
		var num2 = parseInt(req.body.num2);
		var operator = req.body.operator;
		
		var result = 0;
		if(operator == 'add')
			result = num1 + num2;
		else if(operator == 'sub')
			result = num1 - num2;
		else if(operator == 'mult')
			result = num1 * num2;
		else if (operator == 'div' && num2 != 0)
			result = num1 / num2;
		else 
			res.render('template', { title: 'Information from JSON form', message: "Error"}); 

		var jsonresult = JSON.stringify(result);
		res.render('template', { title: 'Information from JSON form', message: jsonresult}); 
	} catch (e) {
		res.render('template', { title: 'Error in JSON', message: "Error: Given text is not in JSON"}); 
	}
	
	res.end();
})