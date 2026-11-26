# Launch security and privacy checklist

- Owner must review published policy wording, confirm legal business identity, order/deposit rules, retention schedule and applicable Zimbabwe data protection obligations. POTRAZ enquiry is owner-managed.
- Customer checkout fields are composed locally and transferred through a WhatsApp URL, not written to Supabase. Cart notes persist locally. Treat WhatsApp order records and infrastructure logs as potentially personal data.
- Enable Supabase leaked-password checks (plan dependent), disable unused public signup, configure MFA and test owner sign-in before enforcement. Do not enable MFA enforcement until portal supports challenge and recovery.
- Test unauthenticated and non-owner writes, private recipe downloads, XSS and headers, dependency audit with a committed lockfile, backup/restore and rate limits. CSP currently permits inline scripts/styles for Next.js and existing Kitchen HTML; nonce-based CSP is a future hardening task.
- Incident response: restrict affected access, preserve necessary logs, rotate compromised credentials, assess scope and notify affected persons and authority where legally required. Document decisions and remediation.
- Owner to approve retention schedule for WhatsApp records, payment records and deletion requests; retain legally required records and restrict access. Review processor terms, locations and cross-border safeguards.
