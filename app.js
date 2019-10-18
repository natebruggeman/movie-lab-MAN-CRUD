const express = require('express')
const app = express()
const mongoose = require('mongoose')
const connectionString = 'mongodb://localhost/new';
const methodOverride = require('method-override')
const bodyParser = require('body-parser');


mongoose.connect(connectionString, { useNewUrlParser: true,
                                     useUnifiedTopology: true,
                                     useCreateIndex: true,
                                     useFindAndModify: false
                                    });

//connection test
mongoose.connection.on('connected', () => {
  console.log(`Mongoose connected to ${connectionString}`);
});

app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));

//schema
const movieSchema = new mongoose.Schema({
	title: String,
	genre: String,
})

const Movie = mongoose.model('Movie', movieSchema);

// new route
app.get('/new', (req, res) => {
	
	res.render('new.ejs')
})

// create route
app.post('/', (req, res) => {
	Movie.create(req.body, (err, createdMovie) => {
		if (err){
			console.log(err);
		} else {
			console.log(createdMovie);
			res.redirect('/')
		}
	})
})

//index show route
app.get('/', (req, res) => {
	Movie.find({}, (err, foundMovies) => {
		if (err){
			res.send(err);
		} else {
			console.log(foundMovies);
			res.render('index.ejs', {movies: foundMovies})
		}		
	})
})

app.get('/:id', (req, res) => {
	Movie.findById(req.params.id, (err, foundMovie) => {
		if (err){
			res.send(err);
		} else {
			res.render('show.ejs', {movie: foundMovie})
		}
	})
})




app.listen(3000, () => {
	console.log('I am alive');
})