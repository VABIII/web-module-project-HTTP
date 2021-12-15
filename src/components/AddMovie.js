import React, { useState } from 'react';
import axios from "axios";

const initialValues = {
    id:"",
    title: "",
    director: "",
    metascore: "",
    genre: "",
    description: "",
};

const AddMovie = props => {
    const { favoriteMovies, setFavoriteMovies } = props;
    const [values, setValues] = useState(initialValues);


    const onChange = evt => {
        const name = evt.target.name;
        const value = evt.target.value;

    }


    return (
        <div>
            <div className="col">
                <div className="modal-content">
                    <form>
                        <div className="modal-header">
                            <h4 className="modal-title">Add New Movie</h4>
                        </div>
                        <div className="modal-body">
                            <div className="form-group">
                                <label>Title:&nbsp;</label>
                                <input type="text" className="form-control"/>
                            </div>
                            <div  className="form-group">
                                <label>Director:&nbsp;</label>
                                <input type="text" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label>Genre: &nbsp;</label>
                                <input type="text" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label>Metascore:&nbsp;</label>
                                <input type="text" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label>Description:&nbsp;</label>
                                <input type="text" className="form-control"/>
                            </div>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default AddMovie;
