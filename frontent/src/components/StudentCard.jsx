/*
import React from 'react'

const StudentCard = () => {
    return (
    <div>

        <h2 className="text-lg font-bold">
            Total Students
        </h2>
        <p className="mt-2 text-3xl text-blue-600">
            100
        </p>
    </div>
    )
}

export default StudentCard
*/

//props concept
import React from 'react'

function StudentCard (props) {
    return (
    <div>

        <h2 className="text-lg font-bold">
            {props.Name}
        </h2>
        <p className="mt-2 text-3xl text-blue-600">
            {props.roll}
        </p>
    </div>
    )
}

export default StudentCard