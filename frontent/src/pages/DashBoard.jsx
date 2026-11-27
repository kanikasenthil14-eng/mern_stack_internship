/*
import React from 'react'
import StudentCard from '../components/StudentCard'
function DashBoard() {
    return (
        <div className="flex-1 bg-gray-100 p-6">
            <h2 className="mb-5 text-2xl font-bold">
                DashBoard
            </h2>
            <StudentCard/>
        </div>
    )
}

export default DashBoard
*/

/*
//props
import React from 'react'
import StudentCard from '../components/StudentCard'
function DashBoard() {
    return (
        <div className="flex-1 bg-gray-100 p-6">
            <h2 className="mb-5 text-2xl font-bold">
                DashBoard
            </h2>
            <div className="grid grid-cols-3 shadow">
            <StudentCard
            Name="kanika"
            roll="22"
            />
            <StudentCard
            Name="senthil"
            roll="40"
            />
            <StudentCard
            Name="Baby"
            roll="2"
            />
            </div>
        </div>
    )
}

export default DashBoard
*/


/*
//add button 
import React from 'react'
import StudentCard from '../components/StudentCard'
import {Button} from '../components/ui/button'
import StudentForm from '../components/StudentForm'
import StudentDetails from '@/components/StudentDetails'
import { useEffect, useState } from 'react'
function DashBoard() {
    
    return (
        // <div className="flex-1 bg-gray-100 p-6">
        //     <h2 className="mb-5 text-2xl font-bold">
        //         DashBoard
        //     </h2>
        //     <div className="grid grid-cols-3 shadow">
        //     <StudentCard
        //     Name="kanika"
        //     roll="22"
        //     />
        //     <StudentCard
        //     Name="senthil"
        //     roll="40"
        //     />
        //     <StudentCard
        //     Name="Baby"
        //     roll="2"
        //     />
        //     </div>
        //     <Button>Add Students</Button>
        // </div>


    )
}

export default DashBoard
*/


import React from 'react'
import StudentCard from '../components/StudentCard'
import {Button} from '../components/ui/button'
import StudentForm from '../components/StudentForm'
import StudentDetails from '@/components/StudentDetails'
import { useEffect, useState } from 'react'
function DashBoard() {
    const[students,setStudents]=useState([])

    useEffect(()=>{
        document.title="Student count:"+students.length
    },[students])
    const addStudent=(student)=>{
        setStudents([...students,student])
    }
    return (
        <>
            <h1 className="p-4 font-bold bg-black h-10 text-white">Dashboard</h1>
            <p className="p-4">Students Count:{students.length}</p>
            <StudentForm addOn={addStudent}/>
            <>
            {students.map((s,index)=>(
                <StudentDetails key={index}{...s}/>
            )
            )}
            </>
        </>
    )
}

export default DashBoard