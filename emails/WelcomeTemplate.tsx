import React, { CSSProperties } from "react";
import {
  Html,
  Body,
  Container,
  Tailwind,
  Text,
  Link,
  Preview,
} from "@react-email/components";

const WelcomeTemplate = ({ name }: { name: string }) => {
  return (
    <Html>
      <Preview>Welcome!</Preview>
      <Tailwind>
        <Body className="bg-white">
          <Container>
            <Text className="text-3xl text-bold text-center">Hello {name}</Text>
            <Link href="https://www.youtube.com/">www.Youtube.com</Link>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default WelcomeTemplate;
