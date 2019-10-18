const express = require('express')
const app = express()




// new route
app.get('/new', (req, res) => {
	
	res.render('new.ejs')
})

// create route
app.post('/', (req, res) => {
	console.log('this is the create route');
	
})








app.listen(3000, () => {
	console.log('I am alive');
})