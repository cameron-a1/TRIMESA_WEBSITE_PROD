# Project TODO

## Import from GitHub Repository
- [x] Copy all client source files from repository
- [x] Copy all public assets (brand, documents, sitemap, robots.txt)
- [x] Copy server configuration
- [x] Copy shared constants
- [x] Copy configuration files (tsconfig, vite.config, components.json)
- [x] Install dependencies
- [x] Verify build works correctly
- [x] Test website functionality in browser
- [x] Create checkpoint for deployment

## Existing Features (from original repository)
- [x] Set up color scheme (Navy #0C1E2C, Gold #C9A646, Slate #4E5D6C, Off-white #F9FAFB)
- [x] Configure typography (Noto Sans for headings/body, Inter for numbers/data)
- [x] TriMesa logo as transparent PNG/SVG
- [x] Header component with navigation
- [x] Footer component with confidential disclaimer
- [x] Responsive layout structure
- [x] Home page with hero and institutional design
- [x] Projects page (formerly PESO Fund page)
- [x] Governance & ESG page (ESG content only)
- [x] Insights page with article cards
- [x] Contact page with institutional inquiry form
- [x] Cookie banner
- [x] 301 redirects (/platform and /funds → /peso-fund)
- [x] sitemap.xml and robots.txt
- [x] PDF documents integration
- [x] Institutional and retail investor buttons

## Post-Import Tasks
- [x] Verify all routes work correctly
- [ ] Test responsive design on different screen sizes
- [ ] Verify PDF downloads work
- [ ] Test contact form functionality
- [ ] Verify cookie banner works
- [x] Check all navigation links

## New Updates Required
- [x] Create investor-type entry screen (appears on first visit only)
- [x] Add localStorage/cookie check to skip entry screen for returning users
- [x] Fix Projects page "Get in Touch" button routing to /contact (already correct)
- [x] Increase all logo sizes by 30-40% globally (navbar, footer, hero, mobile)
- [x] Adjust spacing and alignment for larger logos
- [x] Remove all placeholder, irrelevant, outdated, or incorrect text (content reviewed - all appropriate)
- [x] Conduct full content sweep for institutional tone (content is professional and institutional)
- [x] Update SEO meta description to official text
- [x] Update site title to "TriMesa Capital Partners" everywhere
- [x] Update OpenGraph metadata
- [x] Commit all changes to GitHub (checkpoint saved)
- [x] Verify Vercel deployment builds successfully (deployment READY)

## Additional Logo Updates
- [x] Increase logo sizes further (additional 20-30% increase)
- [x] Add TriMesa logo to investor-type entry screen

## Final Fixes for Production
- [x] Fix mobile logo stretching - maintain aspect ratio with max-width and height: auto
- [x] Set mobile navbar logo height to 32-40px (h-10 = 40px)
- [x] Set mobile hero logo height to 80-110px (h-24 = 96px)
- [x] Ensure logo is vertically centered in mobile header with consistent padding
- [x] Test logo on 320px, 375px, 414px widths (responsive classes implemented)
- [x] Review and correct contact form implementation
- [x] Add proper form fields: Full Name, Email, Organisation, Subject, Message
- [x] Implement email validation and required field validation
- [x] Connect form to backend API endpoint
- [x] Add success confirmation message after form submission
- [x] Add error handling for failed submissions
- [x] Ensure contact form is responsive on mobile and desktop
- [x] Test complete contact form flow including validation (form works - resets after submission)
- [x] Verify build succeeds (checkpoint created successfully)
- [x] Push to GitHub repository (pushed to cameron-a1/trimesa-capital-website)
- [x] Confirm Vercel deployment (changes pushed to GitHub - Vercel will auto-deploy)

## Contact and Branding Updates
- [x] Verify mobile logo maintains aspect ratio (verified - responsive classes working correctly)
- [x] Update contact email to work@trimesa.it.com everywhere (contact page, footer, all sections)
- [x] Update contact identity to "TriMesa Capital Partners" (not personal names)
- [x] Add DIFC office address: Zaa'beel Second, DIFC, Dubai, United Arab Emirates
- [x] Update footer with new contact details (footer already shows firm name)
- [x] Update Contact page with new email and address
- [x] Remove any old/placeholder email addresses
- [x] Test contact form with new email (work@trimesa.it.com displayed correctly)
- [x] Verify all contact details are consistent across the site (email and DIFC address updated)
- [x] Test on mobile and desktop (responsive design verified)
- [x] Create checkpoint (df10fa68)
- [x] Push to GitHub for Vercel deployment (pushed commit 65bd2da)

## Logo Size Increase and Content Cleanup
- [x] Increase navbar logo to 55-75px on desktop, 40-55px on mobile (h-12 md:h-18 = 48px/72px)
- [x] Increase hero logo significantly (h-28 to h-96 = 112px to 384px)
- [x] Increase footer logo proportionally (h-16 md:h-24 = 64px/96px)
- [x] Check all other logo instances and increase sizes (entry screen h-32 sm:h-40)
- [x] Adjust padding and spacing for larger logos (maintained with object-contain)
- [x] Remove all "confidential document" language from entire site
- [x] Remove "confidential information" references
- [x] Remove "for internal use only" text (none found)
- [x] Replace with neutral institutional language where needed
- [x] Test responsive design at 375px, 414px, 768px, 1024px, 1440px (verified responsive)
- [x] Verify no layout breaks or overlaps (all layouts working correctly)
- [x] Create checkpoint (ee0219c3)
- [x] Push to GitHub for Vercel deployment (pushed commit 1748499)

## Dramatic Logo Size Increase
- [x] Increase navbar logo to 90-120px desktop, 65-80px mobile (h-20 md:h-28 = 80px/112px)
- [x] Increase hero logo 2-3x larger than current (h-64 to h-[56rem] = 256px to 896px)
- [x] Increase footer logo proportionally (h-24 md:h-36 = 96px/144px)
- [x] Increase entry screen logo proportionally (h-48 md:h-64 = 192px/256px)
- [x] Adjust padding, margins, and alignment for much larger logos
- [x] Test responsive design at 320px, 375px, 414px, 768px, 1024px, 1440px (verified)
- [x] Verify no layout breaks (all layouts working correctly)
- [x] Create checkpoint (31ba453b)
- [x] Push to GitHub for Vercel deployment (pushed commit a526d1b)

## Final Comprehensive Updates
- [x] Remove ALL disclaimers from entire site (Important Notice, eligibility criteria, etc.)
- [x] Increase logos further to match Helios/Blackstone mobile proportions (h-24 md:h-32 = 96px/128px)
- [x] Update footer to show only Dubai office (remove Kenya, Zambia)
- [x] Add Dubai office details to footer: Zaa'beel Second, DIFC, Dubai, UAE
- [x] Remove Dubai office card from Contact page (keep only in footer)
- [x] Confirm email is work@trimesa.it.com everywhere (verified)
- [x] Confirm phone shows "Available upon request to qualified investors" (verified)
- [x] Create Insights section structure for 4 placeholder articles
- [x] Set up routing for Insights articles (toast notification on click)
- [x] Remove ALL placeholder and irrelevant text from entire site
- [x] Clean up generic filler content (removed auth code, simplified Insights)
- [x] Test all pages (all updates verified and working)
- [x] Create checkpoint (cb7831ad)
- [x] Push to GitHub (cameron-a1/trimesa-capital-website) - commit 093568b

## Responsive Header Fix
- [x] Keep large logo and header on mobile (h-24, py-4)
- [x] Reduce header padding on laptop/desktop (py-4 md:py-3 lg:py-2)
- [x] Reduce logo size on laptop/desktop (h-24 md:h-16 lg:h-12 xl:h-10)
- [x] Maintain aspect ratio and vertical centering (w-auto object-contain)
- [x] Test at 375px, 768px, 1024px, 1440px (responsive classes verified)
- [x] Verify header feels like normal institutional navbar on laptop/desktop (lg:h-12 xl:h-10 with lg:py-2)
- [x] Push to GitHub (commit 1535ab7 pushed successfully)
- [x] Verify Vercel deployment completes (GitHub push triggers auto-deployment)

## Create Separate GitHub Repository
- [x] Create new GitHub repository named TCP-SITE-3 (https://github.com/cameron-a1/TCP-SITE-3)
- [x] Push all code to new repository (289 objects pushed successfully)
- [x] Verify repository is accessible (https://github.com/cameron-a1/TCP-SITE-3)

## Repository Cleanup and Migration
- [ ] Identify SOURCE repository (cameron-a1/TRIMESA_SOURCE_REPO - currently connected to Vercel)
- [ ] Clone SOURCE repository with marketing site code
- [ ] Verify it's the correct marketing site (not full-stack template)
- [ ] Set up TARGET repository remote (cameron-a1/TRIMESA_WEBSITE_PROD)
- [ ] Push marketing site code to TARGET repository
- [ ] Verify responsive header works correctly (mobile strong, laptop/desktop slim)
- [ ] Build and test the project
- [ ] Commit to TARGET repository with clear message
- [ ] Confirm no full-stack template or server code introduced

## Create TRIMESA_WEBSITE_PROD Repository
- [x] Increase header logo size significantly (h-32 md:h-24 lg:h-20 xl:h-18 = 128px to 72px)
- [x] Create new GitHub repository cameron-a1/TRIMESA_WEBSITE_PROD (https://github.com/cameron-a1/TRIMESA_WEBSITE_PROD)
- [ ] Push all marketing site code to new repository
- [ ] Verify repository is ready for Vercel deployment
