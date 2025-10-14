import '../styles/page.css'

const Security = () => {
  return (
    <section className="page">
      <header className="page__header">
        <h1>Security Guide</h1>
        <p className="page__lede">
          This audit-friendly runbook covers minimum security requirements, operational checklists,
          and emergency response procedures for SPL Shield and the TDL token ecosystem.
        </p>
      </header>

      <article className="page__section">
        <h2>TDL Security Guide</h2>
        <p>
          <strong>Project:</strong> SPL Shield + Dollar Token (TDL)
        </p>
        <p>
          <strong>Chain:</strong> Solana (SPL)
        </p>
        <p>
          <strong>Scope:</strong> Token, Presale Program (Anchor), DApp (React), Backend
          (Node/FastAPI), DevOps, Liquidity, Post-launch Ops
        </p>
        <blockquote>
          This is a practical, audit-friendly security guide. Use it as your SECURITY.md and
          internal runbook. Items marked <strong>[REQ]</strong> are minimum requirements before
          presale.
        </blockquote>
      </article>

      <article className="page__section">
        <h2>1) Threat Model (High Level)</h2>
        <h3>Assets</h3>
        <ul className="page__list">
          <li>TDL mint &amp; treasuries (token mint authority, freeze authority, vaults)</li>
          <li>Presale program funds (USDC/SOL) and escrowed TDL</li>
          <li>LP tokens and liquidity reserves</li>
          <li>Admin keys (program upgrade, pause, withdraw)</li>
          <li>User funds and PII (email, IP if collected)</li>
          <li>Infrastructure (servers, CI, domain, DNS)</li>
        </ul>
        <h3>Adversaries</h3>
        <ul className="page__list">
          <li>External attackers (botnets, phishers, contract exploiters)</li>
          <li>Malicious insiders or compromised admin keys</li>
          <li>Rugpull impersonators / fake websites</li>
          <li>MEV / sandwich attackers on listing day</li>
        </ul>
        <h3>Top Risks</h3>
        <ul className="page__list">
          <li>Key compromise (admin, deployment, treasury)</li>
          <li>Contract logic bugs (caps, vesting, refunds, accounting)</li>
          <li>Liquidity theft or unlocks</li>
          <li>Phishing (fake presale sites, fake tokens)</li>
          <li>API abuse (free tier farming, scan DoS)</li>
        </ul>
      </article>

      <article className="page__section">
        <h2>2) Keys &amp; Access Control</h2>
        <ul className="page__list">
          <li>
            <strong>[REQ]</strong> Hardware wallets (Ledger/Trezor) for all admin and treasury keys.
          </li>
          <li>
            <strong>[REQ]</strong> Multisig (e.g., Squads) for program admin, withdrawals, LP
            management. Minimum 2-of-3.
          </li>
          <li>
            <strong>[REQ]</strong> Least privilege: separate keys for deploy, treasury, ops.
          </li>
          <li>
            <strong>[REQ]</strong> Cold storage for long-term reserves; hot wallets only for required
            operations.
          </li>
          <li>
            <strong>[REQ]</strong> Secrets management: `.env` never committed. Use 1Password/Bitwarden
            for humans; sealed secrets/Parameter Store for CI.
          </li>
          <li>Rotations: plan quarterly key rotation and emergency replacement playbook.</li>
          <li>Allowlist RPC/IPs: restrict privileged backend endpoints to CIDR/IP allowlists.</li>
        </ul>
      </article>

      <article className="page__section">
        <h2>3) Token (SPL) Hardening</h2>
        <ul className="page__list">
          <li>
            <strong>[REQ]</strong> Supply verification: `1_000_000_000 * 10^decimals` minted once.
          </li>
          <li>
            <strong>[REQ]</strong> Mint authority: revoke (set to `null`) after initial allocations and
            presale vault setup.
          </li>
          <li>
            <strong>[REQ]</strong> Freeze authority: set to a multisig or `null`. If retained, document
            policy and controllers.
          </li>
          <li>Metadata integrity: verify name, symbol, URI; pin metadata to IPFS/Arweave.</li>
          <li>
            Distribution scripts: deterministic, idempotent; produce signed allocation report (wallet,
            amount, txid).
          </li>
        </ul>
      </article>

      <article className="page__section">
        <h2>4) Presale Program (Anchor) Security</h2>
        <ul className="page__list">
          <li>
            <strong>[REQ]</strong> Non-upgradeable programs by default. If upgradeable, restrict
            upgrade authority to multisig + timelock; publish upgrade policy.
          </li>
        </ul>
        <p>
          <strong>[REQ] Invariants:</strong>
        </p>
        <ul className="page__list">
          <li>Cannot oversell beyond `hard_cap` or sale allocation.</li>
          <li>Enforce `wallet_min`/`wallet_max`.</li>
          <li>Enforce `start_ts`/`end_ts`; block buys when paused.</li>
          <li>Refund only if `soft_cap` not met and after end.</li>
          <li>Claimable ≤ vested tokens; idempotent `claim()`.</li>
        </ul>
        <ul className="page__list">
          <li>
            <strong>[REQ]</strong> Payment mint config: USDC or SOL explicitly; reject unexpected
            mints.
          </li>
          <li>
            <strong>[REQ]</strong> PDA vaults for funds and escrowed TDL; never hold in EOAs.
          </li>
          <li>
            <strong>[REQ]</strong> Precise math: fixed-point pricing; check for overflow/underflow;
            round down buyer amounts.
          </li>
          <li>
            <strong>[REQ]</strong> Events for Buy/Claim/Refund/Withdraw; indexable for off-chain
            proof.
          </li>
          <li>
            Reentrancy/TOCTOU: use single-instruction accounting; guard read-modify-write with PDAs;
            avoid unnecessary cross-program calls.
          </li>
          <li>Whitelist (optional): Merkle root; verify leaf on buy; prevent replay.</li>
          <li>Pause/Unpause: circuit breaker; guard critical parameters after sale start.</li>
        </ul>
      </article>

      <article className="page__section">
        <h2>5) Liquidity &amp; Listing Safety</h2>
        <ul className="page__list">
          <li>
            <strong>[REQ]</strong> LP plan: commit target pair (TDL/USDC), initial price, and
            liquidity amount before sale.
          </li>
          <li>
            <strong>[REQ]</strong> LP lock: lock LP tokens for ≥12 months via a reputable locker; publish
            transaction link and expiry.
          </li>
          <li>
            <strong>[REQ]</strong> Treasury split: separate wallets for LP, operations, market-making,
            listings.
          </li>
          <li>Anti-dump measures: vesting for private/seed; clear unlock schedule; no hidden taxes.</li>
          <li>Listing communications: publish official token mint + DEX link; warn about fake pairs.</li>
        </ul>
      </article>

      <article className="page__section">
        <h2>6) Frontend (DApp) Security</h2>
        <ul className="page__list">
          <li>
            <strong>[REQ]</strong> Wallet adapter hardening: support Phantom/Solflare; validate network;
            block unknown clusters.
          </li>
          <li>
            <strong>[REQ]</strong> Contract addresses pulled from signed, versioned `artifacts/*.json`;
            never from URL params.
          </li>
          <li>
            <strong>[REQ]</strong> Input validation: numeric inputs clamped to min/max; disable buttons
            during transactions; provide precise errors.
          </li>
          <li>
            <strong>[REQ]</strong> Anti-phishing UI: show official token mint, sale times, and links;
            provide checksums.
          </li>
          <li>Content Security Policy: restrict scripts; SRI for third-party scripts.</li>
          <li>No secrets in frontend: presale config read-only; signatures client-side.</li>
          <li>Telemetry: capture transaction success/error (no PII); feature-flag endpoints.</li>
        </ul>
      </article>

      <article className="page__section">
        <h2>7) Backend &amp; API Security (Node/FastAPI)</h2>
        <ul className="page__list">
          <li>
            <strong>[REQ]</strong> AuthN/AuthZ: JWT with short TTL; rotate signing keys; RBAC for admin
            endpoints.
          </li>
          <li>
            <strong>[REQ]</strong> Anti-bot: per-IP and per-wallet rate limits; proof-of-work or signed
            nonce for gated buys.
          </li>
          <li>
            <strong>[REQ]</strong> Input sanitation: strict schemas (pydantic/zod) and size limits;
            reject unknown fields.
          </li>
          <li>
            <strong>[REQ]</strong> DoS protection: global rate limits, timeouts, circuit breakers; queue
            long jobs.
          </li>
          <li>
            <strong>[REQ]</strong> Logging: structured (JSON), redact secrets, correlate with request IDs.
          </li>
          <li>
            <strong>[REQ]</strong> Monitoring: uptime, error rate, p95 latency dashboards; alerts to
            Telegram/Slack.
          </li>
          <li>Webhooks: verify HMAC signatures; retry with backoff; idempotent handlers.</li>
          <li>CORS: allow only official domains; strict preflight rules.</li>
        </ul>
      </article>

      <article className="page__section">
        <h2>8) CI/CD &amp; Dependencies</h2>
        <ul className="page__list">
          <li>
            <strong>[REQ]</strong> Locked dependencies: enforce lockfiles; enable Dependabot/Renovate.
          </li>
          <li>
            <strong>[REQ]</strong> SAST/Lint: run rust-clippy, cargo-audit, eslint, bandit on PRs.
          </li>
          <li>
            <strong>[REQ]</strong> Tests: `anchor test`, property tests, e2e happy/edge cases.
          </li>
          <li>
            <strong>[REQ]</strong> Reproducible builds: document toolchains; pin Anchor/Solana versions.
          </li>
          <li>Artifact signing: sign IDL and address files; publish checksums.</li>
          <li>Release checklist: tag git, build, test, produce artifacts with addresses and commit hash.</li>
        </ul>
      </article>

      <article className="page__section">
        <h2>9) Observability &amp; On-Chain Proofs</h2>
        <ul className="page__list">
          <li>
            <strong>[REQ]</strong> Public dashboard: sale progress, caps, buyer count (no PII), events
            feed.
          </li>
          <li>
            <strong>[REQ]</strong> Proof links: token mint, program IDs, vault accounts, LP lock
            transaction, post-listing pool.
          </li>
          <li>Indexers: integrate Birdeye/Helius/Shadow Drive for analytics.</li>
        </ul>
      </article>

      <article className="page__section">
        <h2>10) Incident Response (IR) Playbook</h2>
        <h3>Preparation</h3>
        <ul className="page__list">
          <li>On-call rotation and contacts (dev, ops, comms, legal).</li>
          <li>
            Pre-approved public statements/templates for pause events, bug disclosures, refund activation.
          </li>
        </ul>
        <h3>Scenarios &amp; Actions</h3>
        <ol className="page__list">
          <li>
            <strong>Key compromise suspected:</strong> pause presale; revoke API keys; rotate JWT
            secrets; announce. If upgradeable, revoke upgrade authority; move admin to new multisig.
          </li>
          <li>
            <strong>Critical contract bug:</strong> pause program; snapshot state; consult auditors;
            publish fix plan. If funds at risk, disable buy/claim; consider refund path.
          </li>
          <li>
            <strong>Liquidity attack / fake token:</strong> announce official mint; report scam pairs;
            push verified links.
          </li>
          <li>
            <strong>Phishing site:</strong> DMCA/report to host; warn users; pin warnings; update SEO
            and socials.
          </li>
          <li>
            <strong>API outage/DoS:</strong> rate-limit, scale up, enable read-only mode; communicate
            ETA and status page.
          </li>
        </ol>
        <h3>Post-mortem</h3>
        <p>Within 72 hours publish RCA with timeline, impact, fixes, and prevention steps.</p>
      </article>

      <article className="page__section">
        <h2>11) Compliance &amp; Legal (Lightweight)</h2>
        <ul className="page__list">
          <li>Terms of Sale &amp; Privacy Policy; region restrictions if required.</li>
          <li>No promises of returns; state utility nature clearly.</li>
          <li>KYC only if using centralized launchpads or mandated by partners.</li>
        </ul>
      </article>

      <article className="page__section">
        <h2>12) Pre-Presale Go/No-Go Checklist</h2>
        <ul className="page__list">
          <li>
            <input type="checkbox" readOnly /> <strong>Token hardening complete</strong>; mint/freeze
            authorities set per policy; report generated.
          </li>
          <li>
            <input type="checkbox" readOnly /> <strong>Anchor tests green</strong>: caps, vesting,
            refunds, pause.
          </li>
          <li>
            <input type="checkbox" readOnly /> <strong>Addresses published</strong> with checksums and
            signed release note.
          </li>
          <li>
            <input type="checkbox" readOnly /> <strong>Multisig live</strong> for admin/treasury; test a
            small withdrawal.
          </li>
          <li>
            <input type="checkbox" readOnly /> <strong>LP plan finalized</strong> (amount, pair,
            locker) and communicated.
          </li>
          <li>
            <input type="checkbox" readOnly /> <strong>DApp smoke-tested</strong> on devnet &amp;
            mainnet-beta with dry-run.
          </li>
          <li>
            <input type="checkbox" readOnly /> <strong>Monitoring &amp; alerts</strong> wired; status
            page online.
          </li>
          <li>
            <input type="checkbox" readOnly /> <strong>IR playbook</strong> rehearsed (tabletop exercise).
          </li>
          <li>
            <input type="checkbox" readOnly /> <strong>Marketing</strong> includes official links and
            anti-phishing guide.
          </li>
        </ul>
      </article>

      <article className="page__section">
        <h2>13) Post-Listing Guardrails</h2>
        <ul className="page__list">
          <li>Enable anomaly alerts for price/volume swings.</li>
          <li>Publish daily/weekly transparency reports (treasury, burn, vesting).</li>
          <li>Stage 2 listings (CEX) only after 30–60 days of stable operations.</li>
        </ul>
      </article>

      <article className="page__section">
        <h2>14) Appendices</h2>
        <h3>A. Address Registry Template</h3>
        <pre>
{`{
  "network": "mainnet-beta",
  "tdlMint": "<MINT_PUBKEY>",
  "presaleProgram": "<PROGRAM_ID>",
  "vaultUSDC": "<TOKEN_ACCOUNT>",
  "vaultTDL": "<TOKEN_ACCOUNT>",
  "lpLocker": "<LOCKER_CONTRACT>",
  "raydiumPool": "<POOL_ADDRESS>",
  "release": {
    "gitCommit": "<SHA>",
    "idlHash": "<SHA256>",
    "generatedAt": "<ISO8601>"
  }
}`}
        </pre>
        <h3>B. Example CSP</h3>
        <pre>
{`Content-Security-Policy: default-src 'self'; img-src 'self' data: https:; connect-src 'self' https://api.mainnet-beta.solana.com https://rpc.hel.io; script-src 'self'; style-src 'self' 'unsafe-inline'; frame-ancestors 'none'; base-uri 'none'; form-action 'self';`}
        </pre>
        <h3>C. Log Format (JSON)</h3>
        <pre>
{`{
  "ts": "2025-10-15T06:00:00Z",
  "level": "ERROR",
  "service": "presale-api",
  "reqId": "abcd-1234",
  "route": "/buy",
  "wallet": "<pubkey>",
  "err": "WALLET_CAP_EXCEEDED"
}`}
        </pre>
        <h3>D. Buyer-Facing Anti-Phishing Checklist</h3>
        <ul className="page__list">
          <li>Always verify the exact token mint address.</li>
          <li>Only use links from official socials/website.</li>
          <li>Never share seed phrase or private key.</li>
          <li>Check domain spelling; beware of lookalike ads.</li>
          <li>Bookmark the presale site; avoid random DMs.</li>
        </ul>
      </article>

      <article className="page__section">
        <p>
          <strong>End of Guide.</strong> Keep this document updated per release and run the Go/No-Go
          checklist before opening the presale.
        </p>
      </article>
    </section>
  )
}

export default Security
