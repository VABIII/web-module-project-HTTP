import React from 'react';
import {useParams} from "react-router-dom";


const DeleteMovieModal = props => {
    const {handleDelete, setIsToggled, toggle} = props;
    const {id} = useParams();

    const onDeleteClick = (evt) => {
        evt.preventDefault()
        handleDelete(id)
    }

    const handleToggle = () => {
        setIsToggled(!toggle);
    }


    return (<div id="deleteEmployeeModal">
        <div className="modal-dialog">
            <div className="modal-content">
                <form>
                    <div className="modal-header">						
                        <h4 className="modal-title">Delete Employee</h4>
                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                    </div>
                    <div className="modal-body">					
                        <p>Are you sure you want to delete these Records?</p>
                        <p className="text-warning"><small>This action cannot be undone.</small></p>
                    </div>
                    <div className="modal-footer">
                        <input onClick={handleToggle} type="button" className="btn btn-default" data-dismiss="modal" value="Cancel"/>
                        <input onClick={onDeleteClick} type="submit" className="btn btn-danger" value="Delete"/>
                    </div>
                </form>
            </div>
        </div>
    </div>)
}

export default DeleteMovieModal;