import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "./TodoItem.css"

const TodoItem = ({ card, statusCheck, removeCard, editCard }) => {
    return (
        <div className="col-lg-4 col-md-6">
            <div className="card m-2 mb-3" >
                <div className="card-body">
                    <p className="card-title">Name : {card.name}</p>
                    <p className="card-text">Description : {card.description}</p>
                    <div className="card-status">
                        <p>Status</p>
                        <div className="card-status-btn">
                            {
                                card.status == "Completed" ? (
                                    <button className="btn btn-sm dropdown-toggle"
                                        type="button" data-bs-toggle="dropdown" aria-expanded="false"
                                        style={{ backgroundColor: "#09ba8e", color: "whitesmoke" }}
                                    >
                                        {card.status}
                                    </button>
                                ) : (
                                    <button className="btn btn-sm dropdown-toggle"
                                        type="button" data-bs-toggle="dropdown" aria-expanded="false"
                                        style={{ backgroundColor: "#f26f6f", color: "whitesmoke" }}
                                    >
                                        {card.status}
                                    </button>
                                )

                            }

                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#" onClick={() => statusCheck("Completed", card.id)}>Completed</a></li>
                                <li><a className="dropdown-item" href="#" onClick={() => statusCheck("Not Completed", card.id)}>Not Completed</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="btn-groups">
                        <button type='submit' className='btn btn-primary' onClick={() => editCard(card.id)}>Edit</button>
                        <button type='submit' className='btn btn-danger' onClick={() => removeCard(card.id)}>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TodoItem