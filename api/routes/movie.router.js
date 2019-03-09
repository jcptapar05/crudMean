const express = require('express'),
movieRouter = express.Router();

let Movie = require('../model/model');

// +++++ Get List +++++
movieRouter.route('/').get((req, res) => {
	Movie.find((err, movies) => {
		if(err) {
			console.log(err);
		} else {
			res.json(movies)
		}
	})
});

// +++++ Add new item +++++
movieRouter.route('/add').post((req, res) => {
	let newMovie = new Movie(req.body);

	newMovie.save().then( movie => {
		res.status(200).json({'movie':'Successfully added to the database...'});
	}).catch(err => {
		res.status(400).send('Unable to send to the database...');
	});
});


// +++++ Get item to be edit +++++
movieRouter.route('/edit/:id').get( (req, res) => {
	let id = req.params.id;
	Movie.findById(id, (err, movie) => {
		res.json(movie);
	})
});

// +++++ Update Item +++++
movieRouter.route('/update/:id').post( (req, res) => {
	Movie.findById(req.params.id, (err, movie, next) => {
		if(!movie) {
			return next(new Error('Could not load movie'));
		} else {
			movie.movieName = req.body.movieName;
			movie.category = req.body.category;
			movie.details = req.body.details;

			movie.save().then(movie => {
				res.json(movie);
			})
			.catch(res => {
				res.status(400).send('Unable to update item....');
			});
		}
	});
});

// +++++ Remove item from List +++++
movieRouter.route('/delete/:id').get( (req, res) => {
	Movie.findByIdAndDelete({_id: req.params.id}, (err, movie) => {
		if(err) {
			res.json(err);
		} else {
			res.json('Successfully removed...');
		}
	});
});


module.exports = movieRouter;