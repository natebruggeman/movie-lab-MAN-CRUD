const express = require('express')
const app = express()




// new route
app.get('/new', (req, res) => {
	
	res.render('new.ejs')
})

// create route
app.post('/', (req, res) => {

})








app.listen(3000, () => {
	console.log('I am alive');
})