export const projects = [
  {
    id: "cloud-rand",
    title: "Cloud Rand: Serverless True RNG API",
    description:
      "Cloud Rand provides cryptographically secure random numbers through a fully serverless stack built on AWS. It offers reliability, compliance, and zero infrastructure overhead.",
    image: require("../assets/images/cloud-rand.png"),
    body: (
      <>
        <p>
          This project consists of three lightweight Python Lambda functions,
          each exposing a specialized endpoint via a secure API Gateway.
          Together, they offer a flexible and verifiable way to generate and
          audit random values sourced directly from AWS's FIPS-validated
          hardware random generator.
        </p>
        <ul>
          <li>
            <strong>/int</strong> Returns unbiased random integers within a
            user-defined range. It uses sample rejection to eliminate bias by
            discarding out-of-range values. For example, when generating numbers
            from 0 to 99 using one byte (0–127), values 100–127 are excluded
            instead of being remapped, ensuring a uniform distribution.
          </li>
          <li>
            <strong>/hex</strong> Returns random bytes as hexadecimal strings.
            Both the byte length and result count are user-configurable within
            safe limits.
          </li>
          <li>
            <strong>/verify</strong> Retrieves a stored request record from
            DynamoDB. Each includes the original seed used for generation,
            allowing clients to verify that results originated from AWS's secure
            random source.
          </li>
        </ul>
        <p>
          To protect against DDoS attacks and abuse, the system uses{" "}
          <strong>AWS Shield</strong> and an attached{" "}
          <strong>Web Application Firewall (WAF)</strong> on the API Gateway.
          The WAF enforces IP-based rate limiting and strict request size
          constraints, blocking malicious oversized payloads before they reach
          the Lambda functions. This layered protection helps maintain
          consistent performance, ensures availability during traffic spikes,
          and safeguards against common attack vectors.
        </p>
        <p>
          For full auditability and compliance, every successful request is
          logged in an encrypted DynamoDB table with a unique UUID. All records
          are protected using a dedicated KMS key and server-side encryption,
          preserving data integrity and privacy.
        </p>
        <p>
          AWS KMS serves as the entropy source, backed by FIPS 140-2 validated
          hardware, making the solution suitable for high-assurance and
          compliance-driven applications.
        </p>
        <p>
          Thanks to its serverless design, the system scales automatically to
          handle bursts of traffic without provisioning infrastructure. This
          makes it ideal for use cases like gaming, secure token generation, or
          large-scale simulations where demand can spike unpredictably.
        </p>
        <p>
          Security can be further hardened by enabling{" "}
          <strong>AWS Shield Advanced</strong> for enhanced DDoS protection,
          including real-time threat intelligence and cost protection during
          attack mitigation. To establish an additional perimeter, it can be
          placed behind <strong>Amazon CloudFront</strong> with{" "}
          <strong>Lambda@Edge</strong> functions that perform request inspection
          and filtering at the CDN edge. This offloads invalid or malicious
          traffic early, conserving API Gateway and Lambda invocations for
          legitimate clients. Combined, these measures build a resilient
          edge-to-origin protection strategy.
        </p>
        <p>
          The entire infrastructure is defined in Terraform. A single
          <code> terraform apply </code> provisions the API Gateway, Lambda
          functions, DynamoDB table, IAM policies, WAF rules, and rate limits.
          All functions are compiled for ARM64, reducing cold-start latency and
          optimizing runtime efficiency.
        </p>
        <p>
          The full source code, including the Terraform configuration, Python
          Lambda functions, and deployment scripts, is available here 👉{" "}
          <a
            href="https://github.com/nessim-ben-ammar/cloud-rand"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          .
        </p>
        <p>
          With zero operational overhead and a strong security posture, the
          implementation demonstrates the power of serverless architecture for
          building robust, verifiable APIs that serve production-grade
          cryptographic needs.
        </p>
      </>
    ),
  },
];
