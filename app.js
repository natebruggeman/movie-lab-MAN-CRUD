const express = require('express')
const app = express()
const mongoose = require('mongoose')
const connectionString = 'mongodb://localhost/new';

mongoose.connect(connectionString, { useNewUrlParser: true,
                                     useUnifiedTopology: true,
                                     useCreateIndex: true,
                                     useFindAndModify: false
                                    });

//connection test
mongoose.connection.on('connected', () => {
  console.log(`Mongoose connected to ${connectionString}`);
});



// new route
app.get('/new', (req, res) => {
	
	res.render('new.ejs')
})

// create route
app.post('/', (req, res) => {

})


//schema
const movieSchema = new mongoose.Schema({
	title: String,
	genre: String,
})

const Movie = mongoose.model('Movie', movieSchema);





app.listen(3000, () => {
	console.log('I am alive');
})