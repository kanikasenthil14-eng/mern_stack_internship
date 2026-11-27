import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from "react-hook-form"
import studentSchema from '@/lib/studentSchema'
import { Button } from './ui/button'

const StudentForm = ({addOn}) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({resolver: zodResolver(studentSchema)})

    const submit=(data)=>{
        addOn(data);
        reset();
    }

    return (
    <div>
        <form onSubmit={handleSubmit(submit)}>
            <input {...register("name")} placeholder="Enter the value" />
            <p>{errors.name?.message}</p>

            <input {...register("email")} placeholder="Enter the email" />
            <p> {errors.email?.message}</p>

            <input {...register("age")} placeholder="Enter the age" />
            <p> {errors.age?.message}</p>

            <select {...register("course")}>
                <option>IT</option>
                <option>CSE</option>
                <option>ECE</option>
                <option>MECH</option>
            </select>
            <p> {errors.course?.message}</p>
            
            <Button type="submit">add Student</Button>
            
        </form>
    </div>
    )
}

export default StudentForm