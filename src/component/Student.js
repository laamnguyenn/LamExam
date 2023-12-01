import React from "react";

function Student({id,name, image, email}) {
    return (
        <div class="student-card">
            <img className="student-image" src={image} alt={name} />
            <h1 className="student-name">
                Student: <span className="student-name">{name}</span>
            </h1>
            <h3 className="student-id">
                ID: <span className="student-id">{id}</span>
            </h3>
            <h3 className="student-email">
                Student email: <span className="student-email">{email}</span>
            </h3>
        </div>
    )
}

export default Student;