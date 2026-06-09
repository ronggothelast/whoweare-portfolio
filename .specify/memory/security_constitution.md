# Security Constitution

## Data Model
- Static portfolio site: no user data collection, no authentication
- Contact form (future): client-side validation only, no server storage
- No cookies, no localStorage for sensitive data

## Client-Side Security
- All external resources loaded via HTTPS CDN (Google Fonts, FontAwesome, Tailwind)
- No inline JavaScript (CSP-friendly)
- No eval() or Function() constructor
- No innerHTML with user-supplied content
- Subresource Integrity (SRI) hashes on CDN resources where available

## Dependency Security
- No npm dependencies (static site, CDN only)
- CDN versions pinned (not @latest)
- FontAwesome loaded from cdnjs with specific version
- Tailwind loaded from cdn.tailwindcss.com (play CDN)

## Future Considerations
- If adding contact form: implement CSRF protection
- If adding analytics: respect DNT header, cookie consent
- If deploying: enable HTTPS, HSTS, CSP headers
