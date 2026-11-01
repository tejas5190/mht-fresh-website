# MHT Fresh Website

Static, responsive corporate website for MHT Fresh / MHT Group. No build step or package installation is required.

## Pages and assets
- `index.html` — corporate homepage, business overview, supplier/buyer sections and contact details.
- `fruits.html` — searchable fruit library with category and origin filters, variety selection and six-section product-book reader.
- `site.css` — shared responsive design system and print styles.
- `site.js` — shared navigation and email-enquiry interactions.
- `fruits.js` — fruit catalogue and sourced product-book content for the first two research batches.
- `RESEARCH_SOURCES.md` — research register, source dates, scope limitations and expansion plan.
- `_headers` — baseline security response headers.

## Local preview
Open `index.html` in a modern browser. Open `fruits.html` to test the fruit library. The pages are static and can be hosted on Cloudflare Pages with no build command and `/` as the output directory.

## Fruit data integrity
Fruit names, variety examples and indicative origins are a starter navigation catalogue, not confirmation of current supply, supplier relationships or import eligibility. The first researched batch covers Apple (Gala, Fuji, Granny Smith, Red Delicious, Golden Delicious), Mandarin, Table Grapes, Dragon Fruit, Pear, Orange, Lemon, Lime, Mango, Avocado, Kiwi and Pomegranate. The research register explains which references are cultivar-specific and which are commodity-level. Remaining catalogue fruits and varieties are still a research framework. Fruit-specific Brix, firmness, calibre, storage, temperature, season and nutrition values must be researched and sourced before publication. Distinguish reference data from measured shipment-lot data. Validate each commercial specification, current Indian import eligibility and crop window before publishing shipment claims.

## Current limitations
- The enquiry form opens the visitor's email application using `info@mhtfresh.com`; it does not store or transmit form data to a server.
- Fruit illustrations are emoji placeholders, not product photography.
- No CMS, customer/vendor login, live inventory, supplier portal, payments or order management is included.
- No certifications, owned facilities, supplier contracts or live stock claims are made.
- This branch is a review prototype. It has not been merged into `main` or deployed.

## Domain operations
Keep existing MX, SPF, DKIM, DMARC and mail-related DNS records intact when configuring or changing website hosting.
