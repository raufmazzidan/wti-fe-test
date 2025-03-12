"use client";

import Button from "@/components/button";
import TaskWrapper from "@/components/task-wrapper";
import TextField from "@/components/text-field";

import { ChangeEvent, FormEvent, useState } from "react";

interface IFormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface IFormErrors {
  name?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
}

const Counter = () => {
  const [formData, setFormData] = useState<IFormData>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState<IFormErrors>({});

  const validate = () => {
    const newErrors: IFormErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email))
      newErrors.email = "Invalid email address.";
    if (formData.password.length < 8)
      newErrors.password = "Password must be at least 8 characters long.";
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
    setErrors((prevError) => ({
      ...prevError,
      [e.target.name]: undefined,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      alert(
        `Form submitted successfully!\nName: ${formData.name}\nEmail: ${formData.email}\nPassword: ${formData.password}`
      );
    }
  };

  return (
    <TaskWrapper
      path={{
        next: "/todo",
        prev: "/counter",
      }}
      num={2}
      title="Form Handling and Validation"
      question={
        <>
          <div className="">
            Create a form with the following fields:
            <ul className="list-disc list-inside">
              <li>Name (text input)</li>
              <li>Email (email input)</li>
              <li>Password (password input)</li>
              <li>Confirm Password (password input)</li>
            </ul>
          </div>
          <div className="mt-2">
            Implement the following validations:
            <ul className="list-disc list-inside">
              <li>Name should not be empty</li>
              <li>Email should be a valid email address.</li>
              <li>Password should be at least 8 characters long.</li>
              <li>Confirm Password should match the Password field.</li>
            </ul>
          </div>
        </>
      }
      solution={
        <ol className="list-decimal list-inside text-sm">
          <li>
            create <i>Input</i> component
          </li>
          <li>
            create all form inputs using <i>Input</i> component
          </li>
          <li>add form value handler using state</li>
          <li>create validation rules</li>
          <li>
            implement validation rules inside <i>onSubmit</i>
          </li>
        </ol>
      }
    >
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 p-6 w-sm max-w-full"
      >
        <TextField
          label="Name"
          type="text"
          name="name"
          value={formData.name}
          onChange={onChange}
          errorMessage={errors.name}
        />
        <TextField
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={onChange}
          errorMessage={errors.email}
        />
        <TextField
          label="Password"
          type="password"
          name="password"
          value={formData.password}
          onChange={onChange}
          errorMessage={errors.password}
        />
        <TextField
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={onChange}
          errorMessage={errors.confirmPassword}
        />
        <Button className="w-full mt-6" type="submit">
          Submit
        </Button>
      </form>
    </TaskWrapper>
  );
};

export default Counter;
