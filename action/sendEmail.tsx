"use server";

import React from "react";
import { Resend } from "resend";
import Email from "@/Email/email";

const resend = new Resend(process.env.RESEND_API_KEY);

const validateString = (value: unknown, maxlength?: number): boolean => {
  return typeof value === "string" && (!maxlength || value.length <= maxlength);
};

export const handleSubmit = async (formData: FormData) => {
  const message = formData.get("message");
  const firstName = formData.get("firstName");
  const lastName = formData.get("lastName");
  const senderEmail = formData.get("email");

  // Combine first and last names, ensuring they are strings
  const senderName =
    typeof firstName === "string" && typeof lastName === "string"
      ? `${firstName} ${lastName}`
      : "";

  // Validate input values
  if (!validateString(message, 1000)) {
    return { error: "Invalid message" };
  }

  if (!validateString(senderName, 50)) {
    return { error: "Please enter your full name" };
  }

  if (!validateString(senderEmail, 100)) {
    return { error: "Please enter a valid email address" };
  }

  try {
    // Send the email using Resend
    await resend.emails.send({
      from: `Portfolio Message - ${firstName}${lastName} <onboarding@resend.dev>`,
      to: "wthilini418@gmail.com",
      subject: `Message from ${firstName} via Contact Form`,
      replyTo: senderEmail as string,
      react: React.createElement(Email, {
        message: message as string,
        firstName: firstName as string,
        lastName: lastName as string,
      }),
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return { error: error.message };
    } else if (
      typeof error === "object" &&
      error !== null &&
      "message" in error
    ) {
      return { error: (error as any).message };
    } else {
      return { error: "Something went wrong" };
    }
  }

  return { data: "Email sent successfully!" }; // Success response can be returned
};
