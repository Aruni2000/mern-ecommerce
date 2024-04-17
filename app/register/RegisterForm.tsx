'use client'

import { useState } from "react";
import Heading from "../components/Heading";
import Input from "../components/inputs/Input";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Button from "../components/Button";
import { Link } from "@mui/material";
import { AiOutlineGoogle } from "react-icons/ai";

const RegisterForm = () => {
    const [isLoading, setIsLoading] = useState(false);
    const {
        register, 
        handleSubmit, 
        formState: { errors } 
    } = useForm<FieldValues>({
        defaultValues: {
            name: "",
            email: "",
            password: "",
        },
    });

    const onsubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);
        console.log(data);
    };
    
        return ( 
        <>
        <Heading title="Sign up for E-Shop" />
        <Button
        outline
        label="Sign Up with Google"
        icon={AiOutlineGoogle}
        onClick={() => {}}
        />
        <hr className="bg-slate-300 w-full h-px" />
        <Input
        id="name"
        label="Name"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
        />
        <Input
        id="email"
        label="Email"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
        />
        <Input
        id="password"
        label="Password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
        type="password"
        />
        <Button label= {isLoading ? "Loading" : `Sign Up`} onClick={handleSubmit(onsubmit)}/>
        <p className="text-sm text-slate-700">
            Already have an account? {" "}
            <Link className="underline" href="/login">
                Log in
            </Link>
        </p>
        </>
     );
};
 
export default RegisterForm;