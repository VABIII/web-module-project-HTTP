import React, { useState } from 'react';
import axios from "axios";
import {Link} from "react-router-dom";

const initialValues = {
    title: "",
    director: "",
    genre: "",
    metascore: 0,
    description: ""
};

const AddMovie = props => {
    const { setMovies } = props;
    const [values, setValues] = useState(initialValues);

    const addMovie = movie => {
        axios.post(`http://localhost:9000/api/movies`, movie)
            .then(res => {
                const movies = res.data;
                setMovies(movies);
            })
            .catch(err => {
                console.error(err);
            });
    };

    const onChange = evt => {
        const name = evt.target.name;
        const value = evt.target.value;
        setValues({
            ...values,
            [name]: value
        });
        console.log(values)
    };

    const onSubmit = evt => {
        evt.preventDefault();
        addMovie(values);
        window.location.href = "/movies";
    };


    return (
        <div>
            <div className="col">
                <div className="modal-content">
                    <form onSubmit={onSubmit}>
                        <div className="modal-header">
                            <h4 className="modal-title">Add New Movie</h4>
                        </div>
                        <div className="modal-body">
                            <div className="form-group">
                                <label>Title:&nbsp;</label>
                                <input
                                    type="text"
                                    name="title"
                                    value={values.title}
                                    onChange={onChange}
                                    className="form-control"
                                />
                            </div>
                            <div  className="form-group">
                                <label>Director:&nbsp;</label>
                                <input
                                    type="text"
                                    name="director"
                                    value={values.director}
                                    onChange={onChange}
                                    className="form-control"
                                />
                            </div>
                            <div className="form-group">
                                <label>Genre: &nbsp;</label>
                                <input
                                    type="text"
                                    name="genre"
                                    value={values.genre}
                                    onChange={onChange}
                                    className="form-control"
                                />
                            </div>
                            <div className="form-group">
                                <label>Metascore:&nbsp;</label>
                                <input
                                    type="number"
                                    name="director"
                                    value={values.director}
                                    onChange={onChange}
                                    className="form-control"
                                />
                            </div>
                            <div className="form-group">
                                <label>Description:&nbsp;</label>
                                <input
                                    type="text"
                                    name="description"
                                    value={values.description}
                                    onChange={onChange}
                                    className="form-control"
                                />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <input type="submit" className="btn btn-info" value="Save"/>
                            <Link to={`/movies/1`}>
                                <input
                                    type="button"
                                    className="btn btn-default"
                                    value="Cancel"/>
                            </Link>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default AddMovie;
