import {z} from "zod";

const clean=(text)=>text.replace(/[<>]/g,"");

const studentSchema=z.object({//z means zod
   // Name:
    //z.string(),
    //z.min()
    //or we can write like this
    name:z.coerce
    .string()
    .min(3,"name must be at least 3 characters")
    .max(50,"Name is too long")
    .trim()
    .regex(/^[A-Za-z .]+$/,"Only letters, space and dot are allowed")
    .transform(clean),
    

    email:z
    .string()
    .toLowerCase()
    .trim()
    .email("Enter valid email"),


    age:z.coerce
    .number({ message: "Age must be a number"})
    .int("Age must be a Whole Number")
    .min(18,"Minimun age is 18")
    .max(60,"Maximum age is 60"),


    course: z.enum(["CSE","IT","ECE",'MECH'], {
        message: "Select a course",
    }),
});

export default studentSchema;