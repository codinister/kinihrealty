import {
  Body,
  Button,
  Container,
  Head,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from '@react-email/components';
import * as React from 'react';

interface ContactformProps {
  fullname: string;
  email: string;
  subject: string;
  phone: string;
  message: string;
}


const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : '';

  
export const Contactform = ({
  fullname,
  email,
  subject,
  phone,
  message,
}: ContactformProps) => (
  <Html>
    <Head />
    <Body style={main}>
      <Container style={container}>
        <Text style={title}>
          <strong>From: {fullname}</strong> {email}
        </Text>

        <Section style={section}>
          <Text style={text}>
            Subject: <strong>{subject}</strong>!
          </Text>
          <Text style={text}>
            Phone: <strong>{phone}</strong>
          </Text>
          <Text style={text}>{message}</Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

export default Contactform;

const main = {
  backgroundColor: '#ffffff',
  color: '#24292e',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
};

const container = {
  maxWidth: '480px',
  margin: '0 auto',
  padding: '20px 0 48px',
};

const title = {
  fontSize: '20px',
  lineHeight: 1.25,
};

const section = {
  padding: '24px',
  border: 'solid 1px #dedede',
  borderRadius: '5px',
  textAlign: 'center' as const,
};

const text = {
  margin: '0 0 10px 0',
  textAlign: 'left' as const,
};

