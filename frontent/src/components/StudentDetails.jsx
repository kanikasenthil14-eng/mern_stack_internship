import React from 'react'

const StudentDetails = ({name,email,age,course}) => {
  return (
    <div>
        <h3>Name: {name}</h3>
        <p>Email: {email}</p>
        <p>Age: {age}</p>
        <p>Course: {course}</p>
    </div>
  )
}

export default StudentDetails