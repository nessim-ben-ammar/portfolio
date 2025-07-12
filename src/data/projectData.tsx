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
  {
    id: "cloud-vpn",
    title: "Cloud VPN: Your Dedicated VPN",
    description:
      "A personal VPN hosted on AWS using WireGuard and AWS Global Accelerator. Ideal for geolocation control and high-performance global routing.",
    image: require("../assets/images/cloud-vpn.png"),
    body: (
      <>
        <p>
          This project started after one too many headaches with commercial VPN
          services like <strong>Surfshark</strong>. Despite paying extra for a
          "dedicated IP," I still ran into random disconnects, laggy streaming,
          and servers that just didn’t feel very... dedicated. Even premium
          services often rely on shared infrastructure, which means you’re
          always rolling the dice on performance.
        </p>
        <p>
          Tired of the roulette, I decided to build my own VPN using AWS. This
          project sets up a <strong>WireGuard VPN</strong> on an
          <strong>EC2 instance</strong>, all deployed with Terraform and bundled
          with a few handy scripts to manage clients, back things up, or move
          the whole thing to another region.
        </p>
        <p>
          The key benefit? It’s yours. You get a
          <strong>dedicated virtual machine</strong> that gives you consistent
          bandwidth, stable performance, and full control. It works especially
          well for:
        </p>
        <ul>
          <li>Getting around geo-blocks with your own regional IP.</li>
          <li>Keeping a fixed IP (via Elastic IP or Global Accelerator).</li>
          <li>
            Cutting latency across continents thanks to AWS’s global network.
          </li>
        </ul>
        <p>
          Remember, AWS knows when your instance is running, where it lives, and
          how much data it’s munching through. They’re not snooping, but if
          someone in a suit shows up with papers, they won’t pretend they’ve
          never heard of you. Unlike those “no-log” VPNs that claim they
          couldn’t identify you, AWS has literal billing receipts. Still, it’s a
          big step up from your home ISP who logs everything, tracks you across
          services, and definitely knows you’re really into cat videos 😉. So:
          this solution’s great for streaming, travel, and peace of mind. Just
          please don’t try to overthrow any governments with it.
        </p>

        <p>
          If you want to go fancy, you can enable{" "}
          <strong>Global Accelerator</strong>. That gives you a stable global IP
          and DNS name, routing traffic through the closest AWS edge location
          for better speed and reliability. It’s like flying business class for
          your packets.
        </p>
        <p>
          Here’s what a typical monthly bill might look like if you go all-in
          with Global Accelerator:
        </p>
        <ul>
          <li>
            <strong>EC2 t3.micro instance:</strong> ~$8.50/month (750 hours at
            $0.0114/hour)
          </li>
          <li>
            <strong>Global Accelerator:</strong> ~$18/month (720 hours at
            $0.025/hour)
          </li>
          <li>
            <strong>Data Transfer (100 GB):</strong> ~$1.50/month ($0.015/GB)
          </li>
          <li>
            <strong>EBS Volume (8 GB):</strong> ~$0.80/month ($0.10/GB-month)
          </li>
        </ul>
        <p>
          <strong>Total:</strong> Around <strong>$28–30/month</strong> for a
          globally reachable, low-latency personal VPN, not including extras
          like snapshots or CloudWatch metrics.
        </p>
        <p>
          <strong>That said</strong>, I personally keep it simple. Global
          Accelerator sounds great, and it is, but it ist not very cheap. So I'd
          stick to an Elastic IP or even just the default public IP.
        </p>
        <p>
          Moving the setup to another region? No problem. Backup and restore
          scripts let you take your config with you. And if you do use Global
          Accelerator, your clients won’t notice a thing, the IP stays the same
          no matter where the server moves.
        </p>
        <p>
          Everything’s open-source and ready to go 👉
          <a
            href="https://github.com/nessim-ben-ammar/cloud-vpn-aws"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          .
        </p>
        <p>
          In short: no more random server drops, no more shared bandwidth
          mysteries. Just a clean, dependable VPN that you control, perfect for
          folks who like building their own tools instead of renting half-broken
          ones.
        </p>
      </>
    ),
  },
];
