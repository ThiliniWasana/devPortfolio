import React from 'react';
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Text,
  Section,
} from '@react-email/components';
import { Tailwind } from '@react-email/tailwind'; // Import for Tailwind styling

type Props = {
  message: string;
  firstName: string;
  lastName: string;
};

export default function Email({ message, firstName, lastName }: Props) {
  return (
    <Html>
      <Head />
      <Preview>New Message From Your Portfolio</Preview>
      <Tailwind>
        <Body className="bg-gray-50 font-sans">
          <Container>
            <Section className="bg-white shadow-md border border-gray-200 my-10 px-8 py-6 rounded-lg">
              <Heading className="leading-tight text-2xl font-bold text-gray-800">
                You've Received a New Message!
              </Heading>
              <Hr className="my-4 border-gray-300" />
              <Text className="text-lg text-gray-700">
                <strong>Message:</strong>
              </Text>
              <Text className="text-base text-gray-600 mb-4">{message}</Text>
              <Hr className="my-4 border-gray-300" />
              <Text className="text-sm text-gray-500">
                <strong>Sender's Name:</strong> {firstName} {lastName}
              </Text>
            </Section>
            <Text className="text-center text-sm text-gray-400 mt-4">
              &copy; {new Date().getFullYear()} Your Portfolio. All rights reserved.
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
