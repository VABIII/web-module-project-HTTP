import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

import axios from 'axios';

const EditMovieForm = (props) => {
	const [movie, setMovie] = useState({
		title:"",
		director: "",
		genre: "",
		metascore: 0,
		description: ""
	});
	const { title, director, genre, metascore, description } = movie;
	const { setMovies } = props;
	const { push } = useHistory();
    const { id } = useParams();


    useEffect(()=>{
        axios.get(`http://localhost:9000/api/movies/${id}`)
            .then(res=>{
                setMovie(res.data);
            })
	}, [id]);

	const editMovie = (edits) => {
		axios.put(`http://localhost:9000/api/movies/${id}`, edits)
			.then(res => {
				console.log(res);
				const movies = res.data
				setMovies(movies)
			})
			.catch(err => {
				console.error(err);
			});
	};

	const handleChange = (e) => {
        setMovie({
            ...movie,
            [e.target.name]: e.target.value
        });
    };

	const onSubmit = evt => {
		evt.preventDefault();
		editMovie(movie);
		push(`/movies/${id}`);
	};


    return (
	<div className="col">
		<div className="modal-content">
			<form onSubmit={onSubmit}>
				<div className="modal-header">						
					<h4 className="modal-title">Editing <strong>{movie.title}</strong></h4>
				</div>
				<div className="modal-body">					
					<div className="form-group">
						<label>Title</label>
						<input value={title} onChange={handleChange} name="title" type="text" className="form-control"/>
					</div>
					<div className="form-group">
						<label>Director</label>
						<input value={director} onChange={handleChange} name="director" type="text" className="form-control"/>
					</div>
					<div className="form-group">
						<label>Genre</label>
						<input value={genre} onChange={handleChange} name="genre" type="text" className="form-control"/>
					</div>
					<div className="form-group">
						<label>Metascore</label>
						<input value={metascore} onChange={handleChange} name="metascore" type="number" className="form-control"/>
					</div>		
					<div className="form-group">
						<label>Description</label>
						<textarea value={description} onChange={handleChange} name="description" className="form-control"></textarea>
					</div>
									
				</div>
				<div className="modal-footer">			    
					<input type="submit" className="btn btn-info" value="Save"/>
					<Link to={`/movies/1`}><input type="button" className="btn btn-default" value="Cancel"/></Link>
				</div>
			</form>
		</div>
	</div>);
}

export default EditMovieForm;