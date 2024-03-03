import { code, container, h1, main, text } from "./styled";
import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Text,
} from "@react-email/components";
import React from "react";
import { FormValues } from "types/form";

export const ContactFormEmail = ({ message, senderEmail }: FormValues) => {
  return (
    <Html>
      <Head />
      <Preview>
        You received the following message from the contact form:
      </Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>
            You received the following message from the contact form:
          </Heading>
          <code style={code}>{message}</code>
          <Text style={{ ...text, marginBottom: "14px" }}>
            The sender&apos;s email is: {senderEmail}
          </Text>
        </Container>
      </Body>
    </Html>
  );
};
