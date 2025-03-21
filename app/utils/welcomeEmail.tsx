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
import * as React from "react";

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const WelcomeEmail = () => (
  <Html>
    <Head />
    <Preview>
      Welcome to The Next Shift! Get ready for insights into emerging tech.
    </Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={headerSection}>
          <Row>
            <Column>
              <Img
                alt="The Next Shift Logo"
                height="50"
                src={`${baseUrl}/static/the-next-shift-logo.png`}
              />
            </Column>
          </Row>
        </Section>

        <Section style={paragraphContent}>
          <Hr style={hr} />
          <Text style={heading}>Welcome to The Next Shift!</Text>
          <Text style={paragraph}>
            You’ve just joined <span style={highlight}>The Next Shift</span>,
            your go-to source for the most relevant, actionable insights in{" "}
            <span style={highlight}>emerging technology</span>.
          </Text>
          <Text style={paragraph}>
            Each week, I dive deep into{" "}
            <span style={highlight}>cutting-edge trends</span> in{" "}
            <span style={highlight}>
              AI, semiconductors, quantum computing, and other disruptive
              innovations
            </span>{" "}
            — curating high-value content, including blogs, podcasts, and
            newsletters that I produce. My goal is to provide you with{" "}
            <span style={highlight}>expert analysis</span> and{" "}
            <span style={highlight}>investment signals</span> that help you stay
            ahead of the curve and make it easier to invest in the next
            frontier.
          </Text>
          <Text style={paragraph}>
            At <span style={highlight}>Next Frontier Hub</span>, I’m all about
            identifying and investing in the technologies shaping the future.
          </Text>
        </Section>

        <Section style={ctaSection}>
          <Text style={ctaText}>Explore my latest insights now:</Text>
          <Link href="https://yourblog.com" style={ctaButton}>
            Visit Next Frontier Hub
          </Link>
        </Section>

        <Section style={paragraphContent}>
          <Text style={paragraph}>
            🔍 <span style={highlight}>Stay ahead of the curve.</span>
          </Text>
          <Text style={paragraph}>Welcome aboard!</Text>
          <Text style={signature}>– The Next Frontier Hub Team</Text>
        </Section>

        <Hr style={hr} />

        <Section style={footerSection}>
          <Text style={paragraph}>Connect with me:</Text>
          <Row>
            <Column style={{ paddingRight: "8px" }}>
              <Link href="https://twitter.com/yourhandle">
                <Img
                  width="24"
                  height="24"
                  src={`${baseUrl}/static/twitter-icon.png`}
                />
              </Link>
            </Column>
            <Column style={{ paddingRight: "8px" }}>
              <Link href="https://linkedin.com/in/yourprofile">
                <Img
                  width="24"
                  height="24"
                  src={`${baseUrl}/static/linkedin-icon.png`}
                />
              </Link>
            </Column>
          </Row>
          <Text style={footerText}>
            You received this email because you subscribed to{" "}
            <span style={highlight}>The Next Shift</span>. If this wasn’t you,
            or you'd like to unsubscribe, click{" "}
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
  backgroundColor: "#f5f5f5",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "40px auto",
  backgroundColor: "#ffffff",
  borderRadius: "8px",
  overflow: "hidden",
  padding: "30px",
  maxWidth: "600px",
};

const headerSection = {
  textAlign: "center",
  paddingBottom: "20px",
};

const paragraphContent = {
  padding: "0 20px",
};

const ctaSection = {
  textAlign: "center",
  margin: "30px 0",
};

const heading = {
  fontSize: "18px",
  fontWeight: "700",
  color: "#000",
  textAlign: "center",
};

const paragraph = {
  fontSize: "14px",
  lineHeight: "22px",
  color: "#3c4043",
};

const highlight = {
  color: "#d81e18",
  fontWeight: "bold",
};

const ctaText = {
  fontSize: "16px",
  fontWeight: "600",
  color: "#333",
};

const ctaButton = {
  display: "inline-block",
  backgroundColor: "#004dcf",
  color: "#ffffff",
  padding: "12px 20px",
  borderRadius: "5px",
  textDecoration: "none",
  fontWeight: "600",
  marginTop: "10px",
};

const signature = {
  fontSize: "14px",
  fontWeight: "600",
  color: "#333",
};

const footerSection = {
  textAlign: "center",
  paddingTop: "20px",
};

const footerText = {
  fontSize: "12px",
  color: "#777",
  paddingTop: "10px",
};

const link = {
  color: "#000",
  textDecoration: "none",
};

const hr = {
  borderColor: "#e8eaed",
  margin: "20px 0",
};

export const emailHtml = await render(<WelcomeEmail />);
