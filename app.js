const express = require('express')
const app = express()





app.get('/new', (req, res) => {
	
	res.render('new.ejs')
})










app.listen(3000, () => {
	console.log('I am alive');
})