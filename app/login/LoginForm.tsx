'use client'

import { useState } from "react";
import Heading from "../components/Heading";
import Input from "../components/inputs/Input";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Button from "../components/Button";
import { Link } from "@mui/material";
import { AiOutlineGoogle } from "react-icons/ai";

const LoginForm = () => {
    const [isLoading, setIsLoading] = useState(false);
    const {
        register, 
        handleSubmit, 
        formState: { errors } 
    } = useForm<FieldValues>({
        defaultValues: {
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
        <Heading title="Sign in to E-Shop" />
        <Button
        outline
        label="Countinue with Google"
        icon={AiOutlineGoogle}
        onClick={() => {}}
        />
        <hr className="bg-slate-300 w-full h-px" />
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
        <Button label= {isLoading ? "Loading" : "Login"} onClick={handleSubmit(onsubmit)}/>
        <p className="text-sm text-slate-700">
            Do not have an account? {" "}
            <Link className="underline" href="/register">
                Sign Up
            </Link>
        </p>
        </>
     );
};
 
export default LoginForm;