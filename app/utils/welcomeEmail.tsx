import {
  Body,
  Column,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import { render } from "@react-email/render";
import { Twitter } from "lucide-react";
import * as React from "react";

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";
console.log("baseUrl: ", baseUrl);
// baseUrl:  https://www.nextfrontierhub.com

export const WelcomeEmail = () => (
  <Html>
    <Head />
    <Preview>
      Welcome to The Next Shift! Stay ahead with the latest in emerging tech.
    </Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={headerSection}>
          <Row>
            <Column>
              <Img
                alt="The Next Shift Logo"
                height="40"
                src={`${baseUrl}/hero.png`}
              />
            </Column>
          </Row>
        </Section>

        <Section style={paragraphContent}>
          <Text style={heading}>Welcome to The Next Shift</Text>
          <Text style={paragraph}>
            You’ve joined a newsletter focused on the latest in{" "}
            <span style={highlight}>AI</span>,
            <span style={highlight}>semiconductors</span>, and{" "}
            <span style={highlight}>emerging technology</span>.
          </Text>
          <Text style={paragraph}>
            Each week, I break down key trends, insights, and
            opportunities—through blogs, podcasts, and deep dives that cut
            through the noise.
          </Text>
          <Text style={paragraph}>
            The goal? To keep you ahead of the curve with expert analysis and
            clear investment signals.
          </Text>
        </Section>

        <Section style={ctaSection}>
          <Link href="https://nextfrontierhub.com/" style={ctaButton}>
            Read the latest insights →
          </Link>
        </Section>

        <Section style={paragraphContent}>
          <Text style={paragraph}>Stay curious. Stay ahead.</Text>
          <Text style={signature}>— The Next Shift</Text>
        </Section>

        <Hr style={hr} />

        <Section style={footerSection}>
          <Row>
            <Column>
              <Link href="https://x.com/Danfraga33">
                <Twitter width={20} height={20} />
              </Link>
            </Column>
          </Row>
          <Text style={footerText}>
            You received this email because you subscribed to The Next Shift.
            Unsubscribe{" "}
            <Link href="https://yourblog.com/unsubscribe" style={link}>
              here
            </Link>
            .
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
  padding: "20px",
};

const container = {
  margin: "0 auto",
  maxWidth: "520px",
  padding: "20px",
};

const headerSection = {
  textAlign: "center",
  paddingBottom: "16px",
};

const paragraphContent = {
  padding: "0 16px",
};

const ctaSection = {
  textAlign: "center",
  margin: "24px 0",
};

const heading = {
  fontSize: "18px",
  fontWeight: "600",
  color: "#222",
  textAlign: "center",
};

const paragraph = {
  fontSize: "14px",
  lineHeight: "22px",
  color: "#444",
};

const highlight = {
  color: "#d81e18",
};

const ctaButton = {
  display: "inline-block",
  backgroundColor: "#004dcf",
  color: "#ffffff",
  padding: "10px 18px",
  borderRadius: "5px",
  textDecoration: "none",
  fontSize: "14px",
  fontWeight: "600",
};

const signature = {
  fontSize: "14px",
  fontWeight: "600",
  color: "#333",
  textAlign: "center",
  paddingTop: "8px",
};

const footerSection = {
  textAlign: "center",
  paddingTop: "16px",
};

const footerText = {
  fontSize: "12px",
  color: "#777",
  paddingTop: "10px",
};

const link = {
  color: "#222",
  textDecoration: "none",
};

const hr = {
  borderColor: "#e0e0e0",
  margin: "16px 0",
};

const sendWelcomeEmail = async () => {
  const emailHtml = await render(<WelcomeEmail />);
};
sendWelcomeEmail();
