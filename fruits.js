const FRUIT_DATA=[
{cat:"Pome fruits",items:[["Apple","🍎","Iran, South Africa, China, India","Gala; Red Delicious; Golden Delicious; Fuji; Granny Smith; Cripps Pink; Ambrosia"],["Pear","🍐","China, South Africa, Argentina, Chile","Packham’s Triumph; Williams / Bartlett; Abate Fetel; Conference; Ya Li; Hosui"],["Quince","🟡","Turkey, Iran, China","Ekmek; Lemon; Smyrna"]]},
{cat:"Citrus fruits",items:[["Mandarin","🍊","South Africa, China, Egypt, Morocco","Nadorcott; Tango; Clementine; Murcott; Nova; Satsuma; Orri"],["Orange","🍊","Egypt, South Africa, Spain, Australia","Valencia; Navel; Lane Late; Blood Orange; Shamouti"],["Lemon","🍋","India, South Africa, Turkey, Argentina","Eureka; Lisbon; Meyer; Verna"],["Lime","🍈","India, Mexico, Brazil","Persian / Tahiti; Key Lime; Indian Acid Lime"],["Grapefruit","🍊","South Africa, China, USA","Star Ruby; Marsh; Ruby Red; Oroblanco"]]},
{cat:"Tropical & exotic fruits",items:[["Mango","🥭","India, Thailand, Peru, Mexico","Alphonso; Kesar; Totapuri; Banganapalli; Dasheri; Kent; Keitt; Tommy Atkins"],["Dragon Fruit","🐉","Vietnam, Thailand, India","White-flesh; Red-flesh; Yellow-skin"],["Avocado","🥑","Tanzania, Kenya, Peru, South Africa, Mexico","Hass; Fuerte; Pinkerton; Zutano; Reed"],["Papaya","🍈","India, Brazil, Thailand","Red Lady; Solo; Sunrise; Tainung"],["Pineapple","🍍","Costa Rica, Thailand, Philippines, India","MD-2; Smooth Cayenne; Queen"],["Guava","🍐","India, Thailand, Brazil","Allahabad Safeda; Lucknow 49; Thai White; Pink Guava"],["Passion Fruit","🟣","Vietnam, Kenya, Peru, India","Purple; Yellow; Sweet Granadilla"],["Lychee","🔴","India, China, Vietnam, Thailand","Shahi; China; Mauritius; Brewster"]]},
{cat:"Stone fruits",items:[["Peach","🍑","China, South Africa, Chile","Yellow-flesh; White-flesh; Donut"],["Nectarine","🍑","South Africa, Chile, Spain","Arctic Star; Sunraycer; Fantasia"],["Plum","🟣","South Africa, Chile, China","Angeleno; Black Splendor; Santa Rosa; Fortune"],["Apricot","🟠","Turkey, Iran, South Africa","Moorpark; Katy; Goldrich; Turkish types"],["Cherry","🍒","Chile, USA, Turkey","Bing; Lapins; Santina; Regina; Sweetheart"]]},
{cat:"Grapes & berries",items:[["Table Grapes","🍇","China, India, South Africa, Chile, Peru","Thompson Seedless; Crimson Seedless; Autumn Crisp; Sweet Globe; Red Globe; Sable"],["Strawberry","🍓","India, Egypt, Spain, USA","Camarosa; Festival; Albion; Monterey"],["Blueberry","🫐","Peru, Chile, South Africa, Morocco","Duke; Legacy; Ventura; Emerald"],["Raspberry","🔴","Mexico, Morocco, Spain","Heritage; Tulameen; Adelita"],["Blackberry","⚫","Mexico, USA, Spain","Tupi; Loch Ness; Chester"]]},
{cat:"Melons",items:[["Watermelon","🍉","India, China, Vietnam","Crimson Sweet; Sugar Baby; seedless types"],["Cantaloupe","🍈","India, China, Australia","Hale’s Best; Galia; Charentais"],["Honeydew","🍈","China, USA, Spain","Green-flesh; Orange-flesh"]]},
{cat:"Other fresh fruits",items:[["Kiwi","🥝","Iran, New Zealand, Italy, Greece, China","Hayward; Zespri SunGold; Green; Red"],["Pomegranate","🔴","India, Iran, Turkey, Egypt","Bhagwa; Wonderful; Arakta; Ganesh"],["Figs","🟣","Turkey, India, Spain","Black Mission; Brown Turkey; Calimyrna"],["Dates","🌴","UAE, Saudi Arabia, Tunisia, Iran","Medjool; Deglet Noor; Barhi; Ajwa; Khalas"],["Coconut","🥥","India, Thailand, Vietnam","Mature brown; Tender green; Aromatic types"],["Jackfruit","🟢","India, Thailand, Vietnam","Soft-flesh; Firm-flesh"],["Custard Apple","🍈","India, Thailand","Balanagar; Arka Sahan; Atemoya"]]}
];
/* Research-backed product-book content. Source scope and dates are shown per page.
   Commodity-level sources are not represented as cultivar-specific specifications. */
const PRODUCT_RESEARCH={
"Apple":{
"Gala":{scope:"Cultivar-specific UC Davis fact sheet · last updated July 1997",pages:[
{heading:"Gala apple — product profile",copy:"Gala is a dessert apple. For commercial assessment, evaluate ground-colour transition, blush as a visual attribute, crispness, firmness and flavour. Blush percentage alone is not a maturity test.",facts:[["Maturity cue","Ground colour shifts from green to light-green / white"],["Other cue","Beginning of starch degradation"],["Quality focus","Firmness, crispness, low mealiness"],["Defects","Bruising, decay, cracks, bitter pit"]]},
{heading:"Nutrition & eating characteristics",copy:"The UC Davis Gala fact sheet evaluates eating quality through soluble solids, titratable acidity and flavour volatiles, alongside firmness and crispness. It does not provide a nutrition composition table. We therefore do not publish calorie, vitamin or mineral figures here; those require a matched food-composition record for raw Gala apple.",facts:[["Texture","Crispness and firmness"],["Flavour assessment","SSC + titratable acidity + aroma"],["Visual trait","Blush is visual quality only"],["Nutrition values","Not yet sourced for this cultivar"]]},
{heading:"Growing regions & season",copy:"Gala is grown in multiple temperate production regions. The sources attached to this page do not provide a country-by-country harvest calendar. MHT Fresh should add origin-specific crop windows only after checking the producing region, hemisphere, elevation and current season bulletin.",facts:[["Variety","Gala"],["Origin list","Catalogue examples only"],["Harvest calendar","Not verified by region"],["Import eligibility","Check current Indian requirements"]]},
{heading:"Harvest & grading",copy:"UC Davis identifies ground-colour change and the beginning of starch degradation as maturity indicators for Gala. Commercial inspection should additionally record firmness, crispness, flavour, defects and pack-out grade. The source does not define a universal export calibre or carton grade.",facts:[["Primary maturity cue","Ground-colour transition"],["Secondary cue","Starch degradation begins"],["Quality attributes","Firmness, crispness, flavour"],["Calibre / grade","Buyer and destination specification"]]},
{heading:"Post-harvest & cold chain",copy:"The UC Davis Gala sheet recommends 0 ± 1°C and 90–95% relative humidity, with rapid cooling because Gala softens quickly. It reports a controlled-atmosphere regime of 1–2% CO₂ and 1.5–2% O₂ as successful in its cited context, with storage potential up to 4–5 months. These are research references, not a blanket instruction for every lot or logistics route.",facts:[["Temperature reference","0 ± 1°C"],["Relative humidity","90–95%"],["Cooling","Rapid cooling recommended"],["CA reference","1–2% CO₂; 1.5–2% O₂"]]},
{heading:"Technical specification & inspection",copy:"For each incoming Gala lot, record sample size, instrument, method, date and results for firmness, soluble solids (°Brix), titratable acidity, starch index, size distribution and defects. UC Davis does not provide a universal export size chart or a buyer-specific firmness threshold in this sheet. Keep measured lot results separate from this general reference.",facts:[["Source maturity test","Ground colour + starch degradation"],["Quality tests","Firmness, SSC, acidity"],["Storage reference","0 ± 1°C; 90–95% RH"],["Lot data","Must be measured and logged"]]}],
sources:[["UC Davis — Apple (Gala)","https://postharvest.ucdavis.edu/produce-facts-sheets/apple-gala","Last updated July 1997"]]},
"Fuji":{scope:"Cultivar-specific UC Davis fact sheet · last updated February 1996",pages:[
{heading:"Fuji apple — product profile",copy:"Fuji is assessed as a crisp dessert apple. UC Davis warns that over-maturity can be a concern in the production context described. Harvest assessment uses ground-colour transition and starch status; delayed harvest is associated with increased skin checking and internal-browning risk.",facts:[["Maturity cue","Ground colour shifts green to light-green / white"],["Starch status","Harvest before starch degradation is complete"],["Timing caution","Source notes 180–190 days from full bloom"],["Defect watch","Skin checking and internal browning"]]},
{heading:"Nutrition & eating characteristics",copy:"The UC Davis Fuji sheet identifies firmness, crispness, low mealiness and flavour (soluble solids, titratable acidity and flavour volatiles) as quality attributes. It does not provide cultivar-specific nutrient composition values. Nutrition numbers are withheld until a traceable food-composition source is attached.",facts:[["Texture","Firmness and crispness"],["Flavour","SSC, acidity and volatiles"],["Visual trait","Blush percentage"],["Nutrition values","Not yet sourced for this cultivar"]]},
{heading:"Growing regions & season",copy:"The available UC Davis cultivar sheet is a postharvest reference and does not establish a global or Indian import season calendar for Fuji. Origin and harvest windows must be entered separately for each supplier region and crop year.",facts:[["Variety","Fuji"],["Origin list","Catalogue examples only"],["Harvest calendar","Not verified by region"],["Import eligibility","Check current Indian requirements"]]},
{heading:"Harvest & grading",copy:"UC Davis recommends harvesting before starch degradation is complete and notes that ground-colour change can help indicate maturity. The sheet links later harvest with skin cracking/checking and internal browning. Export grade, calibre and defect tolerances must follow the agreed destination-market specification.",facts:[["Maturity cue","Ground colour + starch index"],["Harvest caution","Avoid over-maturity"],["Quality tests","Firmness, crispness, flavour"],["Grade / calibre","Destination-specific"]]},
{heading:"Post-harvest & cold chain",copy:"The UC Davis Fuji reference gives 0 ± 1°C and 90–95% RH. It describes successful controlled-atmosphere storage at 1.5–2.0% O₂ and below 0.5% CO₂, but specifically cautions against placing late-harvested Fuji (beyond 180 days from bloom) into CA because internal browning can develop. Validate maturity and storage regime before use.",facts:[["Temperature reference","0 ± 1°C"],["Relative humidity","90–95%"],["CA reference","1.5–2.0% O₂; CO₂ below 0.5%"],["Critical caution","Late-harvested fruit may brown in CA"]]},
{heading:"Technical specification & inspection",copy:"A Fuji intake protocol should record harvest maturity, starch index method, firmness instrument and reading, SSC, acidity, skin checking, internal browning and size profile. The 180–190 day observation in the UC Davis sheet is context-specific research guidance, not a universal maturity cut-off for all countries and climates.",facts:[["Maturity checks","Ground colour + starch degradation"],["Quality checks","Firmness, SSC, acidity"],["Disorder checks","Skin checking / internal browning"],["Lot data","Record method, date and sample size"]]}],
sources:[["UC Davis — Apple (Fuji)","https://postharvest.ucdavis.edu/produce-facts-sheets/apple-fuji","Last updated February 1996"]]},
"Granny Smith":{scope:"Cultivar-specific UC Davis fact sheet · last updated February 1996",pages:[
{heading:"Granny Smith — product profile",copy:"Granny Smith is a green-skinned apple. The UC Davis sheet describes deep-green colour and absence of blush or sunburn as visual quality attributes. Maturity is assessed using an iodine starch test rather than colour alone.",facts:[["Skin colour","Deep green"],["Starch test","Average starch score ≥2.5 on 0–6 scale"],["Sample basis","30 apples in cited method"],["Defect watch","Bitter pit, watercore, bruising"]]},
{heading:"Nutrition & eating characteristics",copy:"The UC Davis sheet reports quality targets of soluble solids 12% or higher and titratable acidity 0.75% or lower in its cited context. These are source-specific quality indicators, not a universal purchase specification. The sheet does not provide a nutrient-composition panel.",facts:[["Soluble solids","12% or higher (source context)"],["Titratable acidity","0.75% or lower (source context)"],["Visual quality","Deep green; no blush / sunburn"],["Nutrition values","Not yet sourced"]]},
{heading:"Growing regions & season",copy:"The cultivar sheet describes postharvest behaviour, not a current crop calendar. Growing origins and harvest windows in the catalogue are indicative research leads only; confirm each origin and crop year independently.",facts:[["Variety","Granny Smith"],["Origin list","Catalogue examples only"],["Harvest calendar","Not verified by region"],["Import eligibility","Check current Indian requirements"]]},
{heading:"Harvest & grading",copy:"UC Davis describes a starch-index method: average score of at least 2.5 on a 0–6 scale for a 30-apple sample, using iodine–potassium iodide staining. It also lists soluble solids, acidity, deep-green colour and absence of defects as quality indicators. Buyer grade and size classes remain destination-specific.",facts:[["Starch index","≥2.5 on 0–6 scale (source context)"],["Sample","30 apples"],["SSC / acidity","≥12% / ≤0.75% in source context"],["Defects","Bitter pit, watercore, bruising"]]},
{heading:"Post-harvest & cold chain",copy:"The UC Davis reference gives 0.5 ± 0.5°C and 90–95% RH, and notes that some reports found chilling injury at 0°C in some seasons. It reports a successful CA atmosphere of 1.5% O₂ + 1.0% CO₂. Granny Smith is described as highly susceptible to storage scald and bitter pit in the source context. Do not apply storage settings without validating cultivar, maturity and origin.",facts:[["Temperature reference","0.5 ± 0.5°C"],["Relative humidity","90–95%"],["CA reference","1.5% O₂ + 1.0% CO₂"],["Disorder watch","Storage scald and bitter pit"]]},
{heading:"Technical specification & inspection",copy:"Record the iodine starch-test protocol, sample size, SSC, titratable acidity, firmness, skin colour, sunburn, bitter pit, watercore and size distribution. The UC Davis sheet notes that 0°C can cause chilling injury in some seasons; the actual cold-chain set point must be agreed with the supplier and postharvest specialist.",facts:[["Maturity test","Iodine starch index"],["SSC reference","≥12%"],["Acidity reference","≤0.75%"],["Lot data","Measured values only"]]}],
sources:[["UC Davis — Apple (Granny Smith)","https://postharvest.ucdavis.edu/produce-facts-sheets/apple-granny-smith","Last updated February 1996"]]},
"Red Delicious":{scope:"Cultivar-specific UC Davis fact sheet · last updated August 1999",pages:[
{heading:"Red Delicious — product profile",copy:"Red Delicious is a red-skinned apple. UC Davis lists red skin-colour intensity and uniformity as visual quality attributes, while maturity is assessed using firmness and starch-clear core status. Colour alone should not substitute for maturity testing.",facts:[["Visual trait","Red colour intensity and uniformity"],["Firmness reference","18 lbf in source maturity index"],["Starch status","Core clear of starch"],["Defect watch","Scald, bitter pit, internal browning"]]},
{heading:"Nutrition & eating characteristics",copy:"The source assesses eating quality through firmness, crispness, mealiness, soluble solids, titratable acidity and flavour volatiles. It does not provide cultivar-specific nutritional composition values. A nutrient panel should only be published after matching a food-composition record to raw edible Red Delicious apple.",facts:[["Texture","Firmness and crispness"],["Flavour","SSC, acidity and volatiles"],["Visual trait","Red skin colour"],["Nutrition values","Not yet sourced"]]},
{heading:"Growing regions & season",copy:"The UC Davis source is a cultivar postharvest sheet and does not establish an origin-specific calendar. The country list in the catalogue is indicative, not proof of supply or import permission.",facts:[["Variety","Red Delicious"],["Origin list","Catalogue examples only"],["Harvest calendar","Not verified by region"],["Import eligibility","Check current Indian requirements"]]},
{heading:"Harvest & grading",copy:"UC Davis gives a source-specific maturity index of 18 pounds-force firmness with the core clear of starch; it also describes a combined firmness × soluble-solids × starch-score index. These thresholds come from the cited production context and should not be used as a universal import acceptance standard.",facts:[["Firmness index","18 lbf (source context)"],["Starch status","Core clear of starch"],["Quality focus","Crispness and low mealiness"],["Grade / calibre","Destination-specific"]]},
{heading:"Post-harvest & cold chain",copy:"The UC Davis reference gives 0 ± 1°C and 90–95% RH. It reports that controlled atmosphere can help retain firmness and acidity and reduce scald, with a cited atmosphere of 1–2% O₂ + 2–4% CO₂. Storage potential depends on maturity, condition and system; validate the lot before committing to a storage duration.",facts:[["Temperature reference","0 ± 1°C"],["Relative humidity","90–95%"],["CA reference","1–2% O₂ + 2–4% CO₂"],["Disorder watch","Scald, bitter pit, shrivel"]]},
{heading:"Technical specification & inspection",copy:"Measure firmness with a stated penetrometer protocol, SSC with a calibrated refractometer, starch with a stated iodine index, and record colour uniformity, defects and size distribution. Do not translate the source's 18 lbf maturity reference into a buyer acceptance limit without agreement.",facts:[["Maturity","Firmness + starch status"],["Quality","SSC, acidity, crispness"],["Visual","Red colour uniformity"],["Lot data","Sampled and traceable"]]}],
sources:[["UC Davis — Apple (Red Delicious)","https://postharvest.ucdavis.edu/produce-facts-sheets/apple-red-delicious","Last updated August 1999"]]},
"Golden Delicious":{scope:"Cultivar-specific UC Davis fact sheet · last updated August 1999",pages:[
{heading:"Golden Delicious — product profile",copy:"Golden Delicious is assessed using ground-colour transition, firmness and starch status. UC Davis describes colour change from dark green to light green or yellowish-green as a maturity indicator. The sheet notes susceptibility to water loss.",facts:[["Maturity colour","Dark green to light green / yellowish-green"],["Firmness reference","17 lbf in source context"],["Starch status","20–40% of cortex clear of starch"],["Postharvest concern","Water loss"]]},
{heading:"Nutrition & eating characteristics",copy:"The UC Davis sheet uses firmness, crispness, mealiness, soluble solids, acidity and flavour volatiles as quality measures. It does not provide cultivar-specific nutrient composition values; no nutrient figures are published here.",facts:[["Texture","Firmness and crispness"],["Flavour","SSC, acidity and volatiles"],["Appearance","Green-to-yellowish-green transition"],["Nutrition values","Not yet sourced"]]},
{heading:"Growing regions & season",copy:"This cultivar postharvest source does not establish a global or origin-specific crop calendar. Supplier origin and season data must be researched and recorded by production region and crop year.",facts:[["Variety","Golden Delicious"],["Origin list","Catalogue examples only"],["Harvest calendar","Not verified by region"],["Import eligibility","Check current Indian requirements"]]},
{heading:"Harvest & grading",copy:"The UC Davis source describes a maturity reference of 17 lbf firmness and 20–40% of cortex clear of starch, together with green-to-yellowish-green colour change. These values are source-context maturity indicators, not a universal export grade.",facts:[["Firmness reference","17 lbf"],["Starch reference","20–40% cortex clear"],["Colour","Green to yellowish-green"],["Grade / calibre","Destination-specific"]]},
{heading:"Post-harvest & cold chain",copy:"The UC Davis source gives 0 ± 1°C and 90–95% RH. It notes that water loss can be substantial and recommends rapid cooling, suitable bin liners and well-designed refrigeration to reduce it. The sheet reports CA storage potential up to 10 months in its described context; actual duration is maturity- and system-dependent.",facts:[["Temperature reference","0 ± 1°C"],["Relative humidity","90–95%"],["Water-loss control","Rapid cooling; bin liners"],["CA potential","Up to 10 months in source context"]]},
{heading:"Technical specification & inspection",copy:"For each lot, record firmness, starch index and method, ground colour, SSC, acidity, weight loss, skin defects and size distribution. Confirm packaging and liner suitability for the actual route; the source does not define a universal export carton or calibre table.",facts:[["Maturity","Firmness + starch + colour"],["Quality","SSC, acidity, defects"],["Handling","Monitor water loss"],["Lot data","Measured and traceable"]]}],
sources:[["UC Davis — Apple (Golden Delicious)","https://postharvest.ucdavis.edu/produce-facts-sheets/apple-golden-delicious","Last updated August 1999"]]},
"Mandarin":{
scope:"Commodity-level UC Davis mandarin fact sheet · last updated May 1999; not cultivar-specific",
pages:[
{heading:"Mandarin — product profile",copy:"Mandarin is a citrus fruit with multiple commercial cultivar groups, including Clementine, Murcott, Nadorcott, Tango, Nova, Satsuma and Orri. The available UC Davis postharvest fact sheet covers mandarins as a commodity; it does not provide separate technical profiles for each named cultivar.",facts:[["Commercial groups","Clementine, Murcott, Nadorcott, Tango, Nova, Satsuma, Orri"],["Maturity indicator","Peel colour + SSC/acid ratio"],["Quality focus","Colour, size, shape, firmness"],["Data scope","Commodity-level, not cultivar-specific"]]},
{heading:"Nutrition & eating characteristics",copy:"UC Davis links mandarin flavour to the soluble-solids-to-acid ratio and absence of off-flavours. The fact sheet does not provide a nutrient composition panel. Publish vitamin C, energy or mineral values only after attaching a named food-composition source and defining edible portion and serving basis.",facts:[["Eating quality","SSC / acid balance"],["Appearance","Colour intensity and uniformity"],["Texture","Firmness"],["Nutrition values","Not yet sourced"]]},
{heading:"Growing regions & season",copy:"The catalogue lists South Africa, China, Egypt and Morocco as indicative sourcing origins. These are not a live crop calendar. Harvest windows vary by cultivar, region and crop year; verify with the origin's crop report and supplier before presenting availability.",facts:[["Catalogue origins","South Africa, China, Egypt, Morocco"],["Cultivars","Season differs by cultivar"],["Crop calendar","Requires current origin data"],["Import eligibility","Check current Indian requirements"]]},
{heading:"Harvest & grading",copy:"The UC Davis commodity reference describes maturity as yellow, orange and/or red colour on 75% of the fruit surface together with an SSC/acid ratio of 6.5 or higher. This is a published research reference, not an automatic buyer acceptance specification. Inspection should also consider size, shape, firmness, decay, scars and chilling or freezing injury.",facts:[["Colour reference","75% yellow / orange / red surface"],["SSC / acid ratio","≥6.5 in source context"],["Quality","Size, shape, firmness"],["Defects","Decay, scars, chilling injury"]]},
{heading:"Post-harvest & cold chain",copy:"The UC Davis sheet gives 5–8°C and 90–95% RH, with a storage period of 2–6 weeks depending on cultivar, maturity at harvest and decay-control treatment. It warns that chilling injury increases with longer exposure below 5°C. Degreening is described as possible under controlled ethylene conditions; it should not be confused with improving internal sweetness.",facts:[["Temperature reference","5–8°C"],["Relative humidity","90–95%"],["Storage duration","2–6 weeks in source context"],["Chilling caution","Risk rises below 5°C with exposure"]]},
{heading:"Technical specification & inspection",copy:"For mandarin lots, record cultivar identity, peel colour coverage, SSC, titratable acidity and their ratio, size count/calibre, shape, firmness, decay and rind defects. Record storage temperature history. UC Davis notes that mandarins are sensitive to chilling and do not tolerate high CO₂ levels used for fungistatic control.",facts:[["Maturity","Colour + SSC/acid ratio"],["Quality metrics","SSC, acidity, size, firmness"],["Cold chain","5–8°C reference"],["Lot data","Cultivar-specific sample record"]]}],
sources:[["UC Davis — Mandarin","https://postharvest.ucdavis.edu/produce-facts-sheets/mandarin","Last updated May 1999"],["UC Davis — Citrus Postharvest","https://epakag.ucdavis.edu/treecrops/citrus/citrus-postharvest/","General handling guidance"]]},
"Table Grapes":{
scope:"Commodity-level UC Davis table-grape fact sheet · last updated May 1998; not cultivar-specific",
pages:[
{heading:"Table grapes — product profile",copy:"Table grapes are sold as clusters for fresh consumption. The catalogue includes green, red and black seedless and seeded commercial cultivars. The available UC Davis fact sheet provides commodity-level postharvest guidance; it does not establish separate technical specifications for Thompson Seedless, Crimson Seedless, Autumn Crisp, Sweet Globe, Red Globe or Sable.",facts:[["Commercial examples","Thompson, Crimson, Autumn Crisp, Sweet Globe, Red Globe, Sable"],["Market form","Fresh clusters"],["Quality focus","Berry firmness, stems, sound berries"],["Data scope","Commodity-level"]]},
{heading:"Nutrition & eating characteristics",copy:"The UC Davis table-grape reference links consumer acceptance to soluble-solids concentration or the SSC/TA ratio. It also highlights berry firmness. The source does not provide a nutrition panel or variety-specific flavour descriptors. Add nutrient information only from a cited food-composition dataset.",facts:[["Eating quality","SSC or SSC / TA ratio"],["Texture","Berry firmness"],["Visual quality","Colour for red / black cultivars"],["Nutrition values","Not yet sourced"]]},
{heading:"Growing regions & season",copy:"The catalogue lists China, India, South Africa, Chile and Peru as indicative origins. These examples are not current availability claims. Table-grape crop windows are region- and cultivar-specific; a live calendar requires dated crop reports for each origin.",facts:[["Catalogue origins","China, India, South Africa, Chile, Peru"],["Seasonality","Hemisphere and region-specific"],["Crop calendar","Requires current origin data"],["Import eligibility","Check current Indian requirements"]]},
{heading:"Harvest & grading",copy:"UC Davis reports that California harvest decisions use soluble-solids concentration of 14–17.5%, depending on cultivar and production area; in some situations an SSC/TA ratio of 20 or higher is used for early cultivars. Red and black cultivars also have a minimum colour requirement. These California values are not universal global export thresholds.",facts:[["SSC reference","14–17.5% in California context"],["SSC / TA ratio","≥20 in some early-cultivar contexts"],["Colour","Minimum colour for red / black types"],["Defects","Decay, cracks, stem browning, shatter"]]},
{heading:"Post-harvest & cold chain",copy:"The UC Davis reference recommends berry storage at −1.0 to 0°C and 90–95% RH. It suggests air velocity of approximately 20–40 feet per minute during storage. It notes that controlled atmospheres are not generally recommended in the cited context because benefit is slight and SO₂ is used for decay control. Confirm packaging, SO₂ regime, residue limits and destination-market requirements separately.",facts:[["Temperature reference","−1.0 to 0°C"],["Relative humidity","90–95%"],["Air velocity","20–40 ft/min suggested"],["CA","Not generally recommended in source"]]},
{heading:"Technical specification & inspection",copy:"A table-grape intake report should identify cultivar, berry size and firmness, cluster weight, stem condition/colour, shatter, decay, cracked berries, shrivel, sunburn, SSC and acidity. The UC Davis sheet does not supply cultivar-by-cultivar berry diameter, cluster-weight or pack-style specifications. Measure these on the actual lot and agree limits with the buyer.",facts:[["Maturity","SSC + colour where applicable"],["Quality","Berry firmness and stem condition"],["Defects","Shatter, decay, cracks, shrivel"],["Lot data","Cultivar and sample-level readings"]]}],
sources:[["UC Davis — Grape","https://postharvest.ucdavis.edu/produce-facts-sheets/grape","Last updated May 1998"],["UC Davis — Recommendations for Maintaining Postharvest Quality: Grape","https://fruitsandnuts.ucdavis.edu/crop-resource/recommendations-maintaining-postharvest-quality-grape","Last updated March 7, 2022"]]},
"Dragon Fruit":{
scope:"Commodity-level UC Davis dragon-fruit fact sheet · last updated July 2011; cultivar/type distinctions noted",
pages:[
{heading:"Dragon fruit — product profile",copy:"Dragon fruit (pitaya) is marketed in red- or yellow-skinned forms with white or red/purple flesh depending on species and cultivar. UC Davis describes white flesh in Hylocereus undatus and red hues in Hylocereus polyhizus under the nomenclature used by that source. Yellow pitaya may be treated differently in postharvest handling; identify the exact commercial type before specifying a cold chain.",facts:[["Commercial types","Red skin / white flesh; red skin / red flesh; yellow pitaya"],["Flesh types","White or red hues"],["Market quality","Shape, size, bract freshness"],["Data scope","Commodity/type level"]]},
{heading:"Nutrition & eating characteristics",copy:"The UC Davis fact sheet discusses total soluble solids (TSS), titratable acidity and flesh firmness as ripening-related attributes, but it does not supply a nutrient composition table or universal sweetness value. Nutrition facts and variety-specific taste descriptors should be added only when matched to a reliable source for the exact species and edible portion.",facts:[["Ripening trend","TSS rises to a peak"],["Acidity","TA decreases as fruit ripens"],["Texture","Flesh firmness decreases during ripening"],["Nutrition values","Not yet sourced"]]},
{heading:"Growing regions & season",copy:"The catalogue lists Vietnam, Thailand and India as indicative sourcing origins. This is not a verified seasonal calendar or confirmation of current trade access. Crop windows must be researched by production region, cultivar/type and crop year.",facts:[["Catalogue origins","Vietnam, Thailand, India"],["Harvest window","Region- and type-specific"],["Crop calendar","Requires dated origin research"],["Import eligibility","Check current Indian requirements"]]},
{heading:"Harvest & grading",copy:"UC Davis states that dragon fruit is generally harvested close to full ripe because it does not continue ripening after harvest. It describes days after flowering (minimum 27–33 days depending on cultivar and production area) and skin-colour intensity as commonly used maturity indices. Quality checks include size, skin colour, well-shaped fruit, firm fleshy green bracts and absence of splitting, mechanical damage, water loss and decay. Its top-quality reference includes a minimum TSS:TA ratio of 40.",facts:[["Harvest maturity","Close to full ripe"],["Days after flowering","27–33 days minimum in source context"],["Quality indicator","Skin colour intensity"],["Top-quality ratio","TSS:TA ≥40 in source context"]]},
{heading:"Post-harvest & cold chain",copy:"The UC Davis source gives 10°C for red pitaya and yellow clones of H. undatus, and 6°C for yellow pitaya (Selenicereus megalanthus), with 85–90% RH. These are type-dependent reference conditions. The source identifies chilling injury as a relevant quality risk; do not apply one temperature to all dragon-fruit types.",facts:[["Red pitaya / yellow H. undatus clones","10°C reference"],["Yellow pitaya S. megalanthus","6°C reference"],["Relative humidity","85–90%"],["Key caution","Separate type-specific cold chain"]]},
{heading:"Technical specification & inspection",copy:"For each lot, record the exact commercial type/species, days after flowering if available, skin colour, TSS, TA, TSS:TA ratio, flesh firmness, size/weight distribution, bract freshness, splitting, bruising, water loss and decay. The UC Davis source does not define a universal export carton weight or calibre table. Keep actual measured lot data separate from reference maturity guidance.",facts:[["Identity","Type / species / cultivar"],["Maturity","DAF + skin colour"],["Quality","TSS, TA, firmness, bracts"],["Lot data","Measure and record"]]}],
sources:[["UC Davis — Dragon Fruit","https://postharvest.ucdavis.edu/produce-facts-sheets/dragon-fruit","Last updated July 2011"]]},

  "Pear": {
    "scope": "Commodity sheet plus cultivar-specific Anjou/Bosc/Comice and Bartlett references",
    "pages": [
      {
        "heading": "Pear — product profile",
        "copy": "Pears are harvested mature-green before full ripeness; firmness is a key maturity index, with cultivar-specific ranges in the cited Anjou, Bosc and Comice sheet. Bartlett uses a combined firmness/SSC index modified by size and skin colour. These references are California-context guidance, not universal import limits.",
        "facts": [
          [
            "Commercial identity",
            "Pear"
          ],
          [
            "Variety scope",
            "Commodity sheet plus cultivar-specific Anjou/Bosc/Comice and Bartlett references"
          ],
          [
            "Reference basis",
            "UC Davis postharvest sheet"
          ],
          [
            "Trade status",
            "General research, not an offer"
          ]
        ]
      },
      {
        "heading": "Nutrition & eating characteristics",
        "copy": "Pear cultivars differ in shape, skin finish, russeting and eating texture. The cited UC Davis sheets describe appearance, flesh firmness, sugars/acids and aroma as quality attributes; no matched nutrient panel is supplied.",
        "facts": [
          [
            "Nutrition values",
            "No cultivar-matched panel published"
          ],
          [
            "Quality attributes",
            "Use source-specific fruit metrics"
          ],
          [
            "Eating quality",
            "Variety and maturity dependent"
          ],
          [
            "Data scope",
            "Commodity reference"
          ]
        ]
      },
      {
        "heading": "Growing regions & season",
        "copy": "The cited sources describe commercial pear cultivars and California handling. They do not provide a global crop calendar for Packham’s Triumph, Abate Fetel, Conference, Ya Li or Hosui. Origin seasons need region- and crop-year-specific sources.",
        "facts": [
          [
            "Catalogue origins",
            "Indicative navigation only"
          ],
          [
            "Crop calendar",
            "Origin and crop-year research required"
          ],
          [
            "Availability",
            "Not confirmed"
          ],
          [
            "Import eligibility",
            "Check current Indian requirements"
          ]
        ]
      },
      {
        "heading": "Harvest & grading",
        "copy": "Inspect maturity using the correct cultivar method; record flesh firmness, SSC where relevant, size, skin colour and internal condition. Check for bruising, scars, russeting, internal breakdown and decay.",
        "facts": [
          [
            "Maturity",
            "Use the cited fruit-specific indicators"
          ],
          [
            "Grading",
            "Destination and buyer specification"
          ],
          [
            "Defects",
            "Record by agreed grade"
          ],
          [
            "Sampling",
            "Document sample size and method"
          ]
        ]
      },
      {
        "heading": "Packaging & post-harvest",
        "copy": "UC Davis gives -1 to 0°C and 90–95% RH for several European pear types; Bartlett has its own cited reference. Pears require careful maturity, cooling and ripening management. Do not copy one cultivar’s set point to another.",
        "facts": [
          [
            "Storage",
            "Source-specific reference only"
          ],
          [
            "Humidity",
            "Validate by fruit, origin and route"
          ],
          [
            "Handling",
            "Minimise mechanical injury"
          ],
          [
            "Shelf life",
            "Do not infer without route validation"
          ]
        ]
      },
      {
        "heading": "Technical specification & inspection",
        "copy": "Record cultivar, harvest maturity, firmness protocol/tip, SSC, fruit diameter, colour, defects and internal condition. Buyer grade, count, carton and destination rules must be separately agreed.",
        "facts": [
          [
            "Identity",
            "Cultivar/type and origin"
          ],
          [
            "Measurements",
            "Record units and method"
          ],
          [
            "Defects",
            "Photograph and quantify"
          ],
          [
            "Lot data",
            "Date, sample, instrument, inspector"
          ]
        ]
      }
    ],
    "sources": [
      [
        "UC Davis — Pear",
        "https://postharvest.ucdavis.edu/produce-facts-sheets/pear-anjou-bosc-comice",
        "Last updated August 1996"
      ],
      [
        "UC Davis — Pear: Bartlett",
        "https://postharvest.ucdavis.edu/produce-facts-sheets/pear-bartlett",
        "Last updated May 1996"
      ]
    ]
  },
  "Orange": {
    "scope": "Commodity-level UC Davis postharvest reference; not cultivar-specific",
    "pages": [
      {
        "heading": "Orange — product profile",
        "copy": "The cited UC Davis orange sheet uses soluble-solids/acid ratio together with rind colour as maturity indices. It notes that rind colour alone does not establish internal eating quality. The stated ratios are California research context, not a universal export standard.",
        "facts": [
          [
            "Commercial identity",
            "Orange"
          ],
          [
            "Variety scope",
            "Commodity-level UC Davis postharvest reference; not cultivar-specific"
          ],
          [
            "Reference basis",
            "UC Davis postharvest sheet"
          ],
          [
            "Trade status",
            "General research, not an offer"
          ]
        ]
      },
      {
        "heading": "Nutrition & eating characteristics",
        "copy": "Quality assessment includes colour intensity and uniformity, firmness, size, shape, smoothness, flavour and freedom from decay or physical damage. The source does not provide cultivar-matched nutrition values.",
        "facts": [
          [
            "Nutrition values",
            "No cultivar-matched panel published"
          ],
          [
            "Quality attributes",
            "Use source-specific fruit metrics"
          ],
          [
            "Eating quality",
            "Variety and maturity dependent"
          ],
          [
            "Data scope",
            "Commodity reference"
          ]
        ]
      },
      {
        "heading": "Growing regions & season",
        "copy": "Valencia, Navel, Lane Late, Blood Orange and Shamouti have different production calendars. This source does not establish origin-specific seasons for Egypt, South Africa, Spain or Australia.",
        "facts": [
          [
            "Catalogue origins",
            "Indicative navigation only"
          ],
          [
            "Crop calendar",
            "Origin and crop-year research required"
          ],
          [
            "Availability",
            "Not confirmed"
          ],
          [
            "Import eligibility",
            "Check current Indian requirements"
          ]
        ]
      },
      {
        "heading": "Harvest & grading",
        "copy": "Inspect external colour, size, firmness, rind condition and decay; sample juice for SSC/acid ratio where the buyer specification requires it. Avoid harvest/handling when fruit is highly turgid to reduce oil spotting.",
        "facts": [
          [
            "Maturity",
            "Use the cited fruit-specific indicators"
          ],
          [
            "Grading",
            "Destination and buyer specification"
          ],
          [
            "Defects",
            "Record by agreed grade"
          ],
          [
            "Sampling",
            "Document sample size and method"
          ]
        ]
      },
      {
        "heading": "Packaging & post-harvest",
        "copy": "The source gives 3–8°C up to three months depending on cultivar, maturity and production area, with 90–95% RH; it also documents exceptions for specific growing regions. Chilling injury and decay risks vary by origin and cultivar.",
        "facts": [
          [
            "Storage",
            "Source-specific reference only"
          ],
          [
            "Humidity",
            "Validate by fruit, origin and route"
          ],
          [
            "Handling",
            "Minimise mechanical injury"
          ],
          [
            "Shelf life",
            "Do not infer without route validation"
          ]
        ]
      },
      {
        "heading": "Technical specification & inspection",
        "copy": "Record cultivar, origin, maturity sample, juice SSC, titratable acidity, ratio, size/count, rind defects, decay and treatment history. Apply destination-market grade and residue requirements separately.",
        "facts": [
          [
            "Identity",
            "Cultivar/type and origin"
          ],
          [
            "Measurements",
            "Record units and method"
          ],
          [
            "Defects",
            "Photograph and quantify"
          ],
          [
            "Lot data",
            "Date, sample, instrument, inspector"
          ]
        ]
      }
    ],
    "sources": [
      [
        "UC Davis — Orange",
        "https://postharvest.ucdavis.edu/produce-facts-sheets/orange",
        "Last updated May 1999"
      ]
    ]
  },
  "Lemon": {
    "scope": "Commodity-level UC Davis postharvest reference; not cultivar-specific",
    "pages": [
      {
        "heading": "Lemon — product profile",
        "copy": "The UC Davis reference uses minimum juice content by grade (28% or 30%) and colour stage as maturity/marketing indicators. Dark-green picked lemons have longer postharvest life in the cited context than fully yellow fruit.",
        "facts": [
          [
            "Commercial identity",
            "Lemon"
          ],
          [
            "Variety scope",
            "Commodity-level UC Davis postharvest reference; not cultivar-specific"
          ],
          [
            "Reference basis",
            "UC Davis postharvest sheet"
          ],
          [
            "Trade status",
            "General research, not an offer"
          ]
        ]
      },
      {
        "heading": "Nutrition & eating characteristics",
        "copy": "Quality attributes include yellow colour intensity/uniformity, size, shape, smoothness, firmness, decay and freedom from rind defects. No cultivar-specific nutrient table is provided.",
        "facts": [
          [
            "Nutrition values",
            "No cultivar-matched panel published"
          ],
          [
            "Quality attributes",
            "Use source-specific fruit metrics"
          ],
          [
            "Eating quality",
            "Variety and maturity dependent"
          ],
          [
            "Data scope",
            "Commodity reference"
          ]
        ]
      },
      {
        "heading": "Growing regions & season",
        "copy": "Eureka, Lisbon, Meyer and Verna need separate origin/region crop calendars. The commodity sheet does not verify current harvest windows or import availability.",
        "facts": [
          [
            "Catalogue origins",
            "Indicative navigation only"
          ],
          [
            "Crop calendar",
            "Origin and crop-year research required"
          ],
          [
            "Availability",
            "Not confirmed"
          ],
          [
            "Import eligibility",
            "Check current Indian requirements"
          ]
        ]
      },
      {
        "heading": "Harvest & grading",
        "copy": "Sample juice content by volume and inspect colour, size, shape, firmness, rind stains, drying, shrivelling and decay. Record grade method and sampling basis.",
        "facts": [
          [
            "Maturity",
            "Use the cited fruit-specific indicators"
          ],
          [
            "Grading",
            "Destination and buyer specification"
          ],
          [
            "Defects",
            "Record by agreed grade"
          ],
          [
            "Sampling",
            "Document sample size and method"
          ]
        ]
      },
      {
        "heading": "Packaging & post-harvest",
        "copy": "The source gives 12–14°C and 90–95% RH depending on cultivar, maturity, origin and journey; it discusses chilling injury and ethylene-related senescence. Treat these as research references, not shipping instructions.",
        "facts": [
          [
            "Storage",
            "Source-specific reference only"
          ],
          [
            "Humidity",
            "Validate by fruit, origin and route"
          ],
          [
            "Handling",
            "Minimise mechanical injury"
          ],
          [
            "Shelf life",
            "Do not infer without route validation"
          ]
        ]
      },
      {
        "heading": "Technical specification & inspection",
        "copy": "Record cultivar, juice percentage, colour, size, firmness, rind defects, decay, origin, treatment and temperature history. Confirm grade-specific juice thresholds with the buyer.",
        "facts": [
          [
            "Identity",
            "Cultivar/type and origin"
          ],
          [
            "Measurements",
            "Record units and method"
          ],
          [
            "Defects",
            "Photograph and quantify"
          ],
          [
            "Lot data",
            "Date, sample, instrument, inspector"
          ]
        ]
      }
    ],
    "sources": [
      [
        "UC Davis — Lemon",
        "https://postharvest.ucdavis.edu/produce-facts-sheets/lemon",
        "Last updated May 1999"
      ]
    ]
  },
  "Lime": {
    "scope": "Commodity-level UC Davis postharvest reference; not cultivar-specific",
    "pages": [
      {
        "heading": "Lime — product profile",
        "copy": "The cited sheet identifies juice content of at least 30% by volume and colour stage as maturity/quality indicators. Mature-green limes generally retain postharvest life longer than yellow fruit in the source context.",
        "facts": [
          [
            "Commercial identity",
            "Lime"
          ],
          [
            "Variety scope",
            "Commodity-level UC Davis postharvest reference; not cultivar-specific"
          ],
          [
            "Reference basis",
            "UC Davis postharvest sheet"
          ],
          [
            "Trade status",
            "General research, not an offer"
          ]
        ]
      },
      {
        "heading": "Nutrition & eating characteristics",
        "copy": "Quality attributes include colour, size, shape, firmness, smoothness, juice condition and freedom from bruising, oil spotting, dryness and stylar-end breakdown. No matched nutrient panel is provided.",
        "facts": [
          [
            "Nutrition values",
            "No cultivar-matched panel published"
          ],
          [
            "Quality attributes",
            "Use source-specific fruit metrics"
          ],
          [
            "Eating quality",
            "Variety and maturity dependent"
          ],
          [
            "Data scope",
            "Commodity reference"
          ]
        ]
      },
      {
        "heading": "Growing regions & season",
        "copy": "Persian/Tahiti, Key Lime and Indian Acid Lime are not interchangeable. The source does not establish origin-specific seasons for India, Mexico or Brazil.",
        "facts": [
          [
            "Catalogue origins",
            "Indicative navigation only"
          ],
          [
            "Crop calendar",
            "Origin and crop-year research required"
          ],
          [
            "Availability",
            "Not confirmed"
          ],
          [
            "Import eligibility",
            "Check current Indian requirements"
          ]
        ]
      },
      {
        "heading": "Harvest & grading",
        "copy": "Inspect green/yellow colour as required by target market, juice percentage, size, firmness, rind condition, oil spotting, bruising and decay.",
        "facts": [
          [
            "Maturity",
            "Use the cited fruit-specific indicators"
          ],
          [
            "Grading",
            "Destination and buyer specification"
          ],
          [
            "Defects",
            "Record by agreed grade"
          ],
          [
            "Sampling",
            "Document sample size and method"
          ]
        ]
      },
      {
        "heading": "Packaging & post-harvest",
        "copy": "The source gives 10–13°C and 90–95% RH, depending on cultivar and maturity, with chilling injury risk below 10°C under prolonged exposure. Avoid ethylene where green colour retention matters.",
        "facts": [
          [
            "Storage",
            "Source-specific reference only"
          ],
          [
            "Humidity",
            "Validate by fruit, origin and route"
          ],
          [
            "Handling",
            "Minimise mechanical injury"
          ],
          [
            "Shelf life",
            "Do not infer without route validation"
          ]
        ]
      },
      {
        "heading": "Technical specification & inspection",
        "copy": "Record lime type, juice percentage, colour, size, firmness, defects, origin and cold-chain history. Confirm whether the buyer wants green or yellow fruit.",
        "facts": [
          [
            "Identity",
            "Cultivar/type and origin"
          ],
          [
            "Measurements",
            "Record units and method"
          ],
          [
            "Defects",
            "Photograph and quantify"
          ],
          [
            "Lot data",
            "Date, sample, instrument, inspector"
          ]
        ]
      }
    ],
    "sources": [
      [
        "UC Davis — Lime",
        "https://postharvest.ucdavis.edu/produce-facts-sheets/lime",
        "Last updated May 1999"
      ]
    ]
  },
  "Mango": {
    "scope": "Commodity-level UC Davis postharvest reference; not cultivar-specific",
    "pages": [
      {
        "heading": "Mango — product profile",
        "copy": "The UC Davis sheet lists fullness of cheeks, skin-colour transition (in some cultivars) and flesh-colour change as maturity indices. Red skin is explicitly not a dependable maturity index for some cultivars.",
        "facts": [
          [
            "Commercial identity",
            "Mango"
          ],
          [
            "Variety scope",
            "Commodity-level UC Davis postharvest reference; not cultivar-specific"
          ],
          [
            "Reference basis",
            "UC Davis postharvest sheet"
          ],
          [
            "Trade status",
            "General research, not an offer"
          ]
        ]
      },
      {
        "heading": "Nutrition & eating characteristics",
        "copy": "Cultivars differ substantially in sweetness, sourness, aroma and fibre. Quality assessment includes shape, size, skin colour, flesh firmness and freedom from sapburn, abrasion, chilling injury and decay. Nutrition figures are not cultivar-matched here.",
        "facts": [
          [
            "Nutrition values",
            "No cultivar-matched panel published"
          ],
          [
            "Quality attributes",
            "Use source-specific fruit metrics"
          ],
          [
            "Eating quality",
            "Variety and maturity dependent"
          ],
          [
            "Data scope",
            "Commodity reference"
          ]
        ]
      },
      {
        "heading": "Growing regions & season",
        "copy": "Alphonso, Kesar, Totapuri, Banganapalli, Dasheri, Kent, Keitt and Tommy Atkins have distinct regional seasons. This source does not provide current India/origin crop calendars.",
        "facts": [
          [
            "Catalogue origins",
            "Indicative navigation only"
          ],
          [
            "Crop calendar",
            "Origin and crop-year research required"
          ],
          [
            "Availability",
            "Not confirmed"
          ],
          [
            "Import eligibility",
            "Check current Indian requirements"
          ]
        ]
      },
      {
        "heading": "Harvest & grading",
        "copy": "Assess fullness of cheeks, flesh colour, firmness, size, shape and defects. Record maturity and sample protocol; red blush alone must not be treated as proof of maturity.",
        "facts": [
          [
            "Maturity",
            "Use the cited fruit-specific indicators"
          ],
          [
            "Grading",
            "Destination and buyer specification"
          ],
          [
            "Defects",
            "Record by agreed grade"
          ],
          [
            "Sampling",
            "Document sample size and method"
          ]
        ]
      },
      {
        "heading": "Packaging & post-harvest",
        "copy": "The sheet gives 13°C for mature-green and 10°C for partially-ripe/ripe mangoes, with 90–95% RH. Chilling injury depends on cultivar, ripeness and exposure; use cultivar/origin-specific validated protocols.",
        "facts": [
          [
            "Storage",
            "Source-specific reference only"
          ],
          [
            "Humidity",
            "Validate by fruit, origin and route"
          ],
          [
            "Handling",
            "Minimise mechanical injury"
          ],
          [
            "Shelf life",
            "Do not infer without route validation"
          ]
        ]
      },
      {
        "heading": "Technical specification & inspection",
        "copy": "Record cultivar, maturity stage, flesh firmness, SSC, acidity if required, fibre/defect observations, size, treatment, pack format and temperature history. Do not transfer one cultivar’s specification to another.",
        "facts": [
          [
            "Identity",
            "Cultivar/type and origin"
          ],
          [
            "Measurements",
            "Record units and method"
          ],
          [
            "Defects",
            "Photograph and quantify"
          ],
          [
            "Lot data",
            "Date, sample, instrument, inspector"
          ]
        ]
      }
    ],
    "sources": [
      [
        "UC Davis — Mango",
        "https://postharvest.ucdavis.edu/produce-facts-sheets/mango",
        "Last updated February 1997"
      ]
    ]
  },
  "Avocado": {
    "scope": "Commodity-level UC Davis reference with cultivar-specific dry-matter examples",
    "pages": [
      {
        "heading": "Avocado — product profile",
        "copy": "The UC Davis sheet identifies dry matter as a maturity index correlated with oil content in California and many other production areas. Its cited minimums differ by cultivar: Fuerte 19.0%, Hass 20.8%, Gwen 24.2%. These are source-context values and must not be assumed valid for every origin or current import protocol.",
        "facts": [
          [
            "Commercial identity",
            "Avocado"
          ],
          [
            "Variety scope",
            "Commodity-level UC Davis reference with cultivar-specific dry-matter examples"
          ],
          [
            "Reference basis",
            "UC Davis postharvest sheet"
          ],
          [
            "Trade status",
            "General research, not an offer"
          ]
        ]
      },
      {
        "heading": "Nutrition & eating characteristics",
        "copy": "Quality indices include size, cultivar-dependent shape and skin colour, and freedom from sunburn, wounds, blemishes, flesh browning, anthracnose and stem-end rot. No matched nutrient panel is included.",
        "facts": [
          [
            "Nutrition values",
            "No cultivar-matched panel published"
          ],
          [
            "Quality attributes",
            "Use source-specific fruit metrics"
          ],
          [
            "Eating quality",
            "Variety and maturity dependent"
          ],
          [
            "Data scope",
            "Commodity reference"
          ]
        ]
      },
      {
        "heading": "Growing regions & season",
        "copy": "Hass, Fuerte, Pinkerton, Zutano and Reed have different maturity patterns and harvest windows. The fact sheet is not an origin-specific calendar for Tanzania, Kenya, Peru, South Africa or Mexico.",
        "facts": [
          [
            "Catalogue origins",
            "Indicative navigation only"
          ],
          [
            "Crop calendar",
            "Origin and crop-year research required"
          ],
          [
            "Availability",
            "Not confirmed"
          ],
          [
            "Import eligibility",
            "Check current Indian requirements"
          ]
        ]
      },
      {
        "heading": "Harvest & grading",
        "copy": "Measure dry matter using a documented method where appropriate; inspect size, shape, skin condition, wounds, sunburn, flesh browning and disease. Florida cultivars may use different maturity criteria.",
        "facts": [
          [
            "Maturity",
            "Use the cited fruit-specific indicators"
          ],
          [
            "Grading",
            "Destination and buyer specification"
          ],
          [
            "Defects",
            "Record by agreed grade"
          ],
          [
            "Sampling",
            "Document sample size and method"
          ]
        ]
      },
      {
        "heading": "Packaging & post-harvest",
        "copy": "Mature-green reference is 5–13°C depending on cultivar and duration; ripe fruit 2–4°C; RH 90–95%. The sheet warns of chilling injury at low temperatures and prolonged exposure. Validate by cultivar and route.",
        "facts": [
          [
            "Storage",
            "Source-specific reference only"
          ],
          [
            "Humidity",
            "Validate by fruit, origin and route"
          ],
          [
            "Handling",
            "Minimise mechanical injury"
          ],
          [
            "Shelf life",
            "Do not infer without route validation"
          ]
        ]
      },
      {
        "heading": "Technical specification & inspection",
        "copy": "Record cultivar, dry matter method/result, harvest maturity, size, defects, ripeness stage, treatment and temperature history. Never apply Hass dry-matter limits to other cultivars without evidence.",
        "facts": [
          [
            "Identity",
            "Cultivar/type and origin"
          ],
          [
            "Measurements",
            "Record units and method"
          ],
          [
            "Defects",
            "Photograph and quantify"
          ],
          [
            "Lot data",
            "Date, sample, instrument, inspector"
          ]
        ]
      }
    ],
    "sources": [
      [
        "UC Davis — Avocado",
        "https://postharvest.ucdavis.edu/produce-facts-sheets/avocado",
        "Last updated February 1999"
      ]
    ]
  },
  "Kiwi": {
    "scope": "Commodity-level UC Davis kiwifruit reference; not cultivar-specific",
    "pages": [
      {
        "heading": "Kiwi — product profile",
        "copy": "The UC Davis reference lists minimum 6.5% SSC at harvest and minimum flesh firmness 14 lbf using an 8-mm tip in its source context. It notes late-harvested fruit retain firmness better and have higher SSC. These are not universal limits for every modern cultivar or origin.",
        "facts": [
          [
            "Commercial identity",
            "Kiwi"
          ],
          [
            "Variety scope",
            "Commodity-level UC Davis kiwifruit reference; not cultivar-specific"
          ],
          [
            "Reference basis",
            "UC Davis postharvest sheet"
          ],
          [
            "Trade status",
            "General research, not an offer"
          ]
        ]
      },
      {
        "heading": "Nutrition & eating characteristics",
        "copy": "The source lists freedom from growth cracks, insect injury, bruises, scars, sunscald, internal breakdown and decay. It describes ripe fruit at SSC of at least 14% and 2–3 lbf firmness in the cited context, and notes kiwifruit as a vitamin C source.",
        "facts": [
          [
            "Nutrition values",
            "No cultivar-matched panel published"
          ],
          [
            "Quality attributes",
            "Use source-specific fruit metrics"
          ],
          [
            "Eating quality",
            "Variety and maturity dependent"
          ],
          [
            "Data scope",
            "Commodity reference"
          ]
        ]
      },
      {
        "heading": "Growing regions & season",
        "copy": "Hayward, SunGold, green and red kiwifruit are not equivalent. This source does not establish harvest calendars for Iran, New Zealand, Italy, Greece or China.",
        "facts": [
          [
            "Catalogue origins",
            "Indicative navigation only"
          ],
          [
            "Crop calendar",
            "Origin and crop-year research required"
          ],
          [
            "Availability",
            "Not confirmed"
          ],
          [
            "Import eligibility",
            "Check current Indian requirements"
          ]
        ]
      },
      {
        "heading": "Harvest & grading",
        "copy": "Record SSC and flesh firmness with the specified probe tip, and inspect for cracks, bruising, scars, sunscald, internal breakdown and decay. State whether measurements are harvest maturity or ready-to-eat ripeness.",
        "facts": [
          [
            "Maturity",
            "Use the cited fruit-specific indicators"
          ],
          [
            "Grading",
            "Destination and buyer specification"
          ],
          [
            "Defects",
            "Record by agreed grade"
          ],
          [
            "Sampling",
            "Document sample size and method"
          ]
        ]
      },
      {
        "heading": "Packaging & post-harvest",
        "copy": "The cited reference gives 0°C and 90–95% RH. Kiwifruit is highly ethylene-sensitive; the source warns that very low ethylene exposure can induce softening. CA conditions are technical and require validated operation.",
        "facts": [
          [
            "Storage",
            "Source-specific reference only"
          ],
          [
            "Humidity",
            "Validate by fruit, origin and route"
          ],
          [
            "Handling",
            "Minimise mechanical injury"
          ],
          [
            "Shelf life",
            "Do not infer without route validation"
          ]
        ]
      },
      {
        "heading": "Technical specification & inspection",
        "copy": "Record cultivar, harvest date, SSC, firmness/probe size, size distribution, defects, ethylene exposure and cold-chain history. Confirm buyer maturity and eating-ripeness requirements separately.",
        "facts": [
          [
            "Identity",
            "Cultivar/type and origin"
          ],
          [
            "Measurements",
            "Record units and method"
          ],
          [
            "Defects",
            "Photograph and quantify"
          ],
          [
            "Lot data",
            "Date, sample, instrument, inspector"
          ]
        ]
      }
    ],
    "sources": [
      [
        "UC Davis — Kiwi",
        "https://postharvest.ucdavis.edu/produce-facts-sheets/kiwifruit",
        "Last updated February 1996"
      ]
    ]
  },
  "Pomegranate": {
    "scope": "Commodity-level UC Davis postharvest reference; not cultivar-specific",
    "pages": [
      {
        "heading": "Pomegranate — product profile",
        "copy": "The source lists external red colour (cultivar-dependent), juice colour, and juice acidity as maturity indicators. It states pomegranates do not ripen after harvest and should be picked fully ripe for eating quality.",
        "facts": [
          [
            "Commercial identity",
            "Pomegranate"
          ],
          [
            "Variety scope",
            "Commodity-level UC Davis postharvest reference; not cultivar-specific"
          ],
          [
            "Reference basis",
            "UC Davis postharvest sheet"
          ],
          [
            "Trade status",
            "General research, not an offer"
          ]
        ]
      },
      {
        "heading": "Nutrition & eating characteristics",
        "copy": "Quality indices include freedom from growth cracks, cuts, bruises and decay; skin colour/smoothness; and juice sugar-acid balance. The source gives a desirable SSC reference above 17% and tannin below 0.25% in its context, not a universal buyer limit.",
        "facts": [
          [
            "Nutrition values",
            "No cultivar-matched panel published"
          ],
          [
            "Quality attributes",
            "Use source-specific fruit metrics"
          ],
          [
            "Eating quality",
            "Variety and maturity dependent"
          ],
          [
            "Data scope",
            "Commodity reference"
          ]
        ]
      },
      {
        "heading": "Growing regions & season",
        "copy": "Bhagwa, Wonderful, Arakta and Ganesh require cultivar- and region-specific crop windows. The UC Davis commodity sheet does not provide current Indian or international harvest calendars.",
        "facts": [
          [
            "Catalogue origins",
            "Indicative navigation only"
          ],
          [
            "Crop calendar",
            "Origin and crop-year research required"
          ],
          [
            "Availability",
            "Not confirmed"
          ],
          [
            "Import eligibility",
            "Check current Indian requirements"
          ]
        ]
      },
      {
        "heading": "Harvest & grading",
        "copy": "Inspect crown/calyx, skin colour, cracks, cuts, bruises, shrivel and decay. Sample juice SSC and acidity when required; fruit should be harvested fully ripe because it does not continue ripening after harvest.",
        "facts": [
          [
            "Maturity",
            "Use the cited fruit-specific indicators"
          ],
          [
            "Grading",
            "Destination and buyer specification"
          ],
          [
            "Defects",
            "Record by agreed grade"
          ],
          [
            "Sampling",
            "Document sample size and method"
          ]
        ]
      },
      {
        "heading": "Packaging & post-harvest",
        "copy": "The cited source gives 5°C up to two months and 7.2°C for longer storage to reduce chilling injury, with 90–95% RH. It highlights water loss and shrivelling; these are research references requiring origin/route validation.",
        "facts": [
          [
            "Storage",
            "Source-specific reference only"
          ],
          [
            "Humidity",
            "Validate by fruit, origin and route"
          ],
          [
            "Handling",
            "Minimise mechanical injury"
          ],
          [
            "Shelf life",
            "Do not infer without route validation"
          ]
        ]
      },
      {
        "heading": "Technical specification & inspection",
        "copy": "Record cultivar, maturity, SSC, acidity, juice colour, size/weight, crown condition, cracks, bruising, shrivel, decay, packaging and temperature history.",
        "facts": [
          [
            "Identity",
            "Cultivar/type and origin"
          ],
          [
            "Measurements",
            "Record units and method"
          ],
          [
            "Defects",
            "Photograph and quantify"
          ],
          [
            "Lot data",
            "Date, sample, instrument, inspector"
          ]
        ]
      }
    ],
    "sources": [
      [
        "UC Davis — Pomegranate",
        "https://postharvest.ucdavis.edu/produce-facts-sheets/pomegranate",
        "Last updated February 1996"
      ]
    ]
  }


  "Peach": {
    "scope": "Commodity-level UC Davis sheet covering peaches and nectarines; not cultivar-specific",
    "pages": [
      {
        "heading": "Peach — product profile",
        "copy": "California source uses cultivar-dependent ground-colour and firmness assessment; full red colour can mask maturity. There is no universal minimum eating-quality standard in this sheet.",
        "facts": [
          [
            "Commercial identity",
            "Peach"
          ],
          [
            "Source scope",
            "Commodity-level UC Davis sheet covering peaches and nectarines; not cultivar-specific"
          ],
          [
            "Reference basis",
            "UC Davis postharvest fact sheet"
          ],
          [
            "Trade status",
            "General reference, not a supplier offer"
          ]
        ]
      },
      {
        "heading": "Nutrition & eating characteristics",
        "copy": "Eating quality is influenced by soluble solids, acidity and their balance. Firmness, cheek condition, bruising and internal breakdown are important inspection points. No matched nutrient panel is provided.",
        "facts": [
          [
            "Nutrition figures",
            "No cultivar-matched label unless stated"
          ],
          [
            "Eating quality",
            "Cultivar and maturity dependent"
          ],
          [
            "Quality tests",
            "Use the fruit-specific methods"
          ],
          [
            "Data scope",
            "Commodity-level evidence"
          ]
        ]
      },
      {
        "heading": "Growing regions & season",
        "copy": "The cited sheet is a California postharvest reference, not a global season calendar for yellow-flesh, white-flesh or donut peaches. Check origin, cultivar and crop year.",
        "facts": [
          [
            "Origins",
            "Catalogue examples only"
          ],
          [
            "Harvest calendar",
            "Origin and crop-year research required"
          ],
          [
            "Availability",
            "Not confirmed"
          ],
          [
            "Import eligibility",
            "Check current Indian requirements"
          ]
        ]
      },
      {
        "heading": "Harvest & grading",
        "copy": "Use cultivar-appropriate colour guidance and penetrometer firmness with the stated probe method. Inspect for bruises, scars, decay and internal browning; keep maturity and eating-ripe firmness separate.",
        "facts": [
          [
            "Maturity",
            "Use fruit-specific maturity indicators"
          ],
          [
            "Grade",
            "Destination/buyer specification"
          ],
          [
            "Defects",
            "Record by agreed grade"
          ],
          [
            "Sampling",
            "Document sample size and method"
          ]
        ]
      },
      {
        "heading": "Packaging & post-harvest",
        "copy": "The source gives -1 to 0°C and 90–95% RH as its reference. It warns that intermediate cold-storage temperatures can increase internal breakdown risk; chilling injury varies by cultivar and storage history.",
        "facts": [
          [
            "Cold chain",
            "Source-specific reference only"
          ],
          [
            "Handling",
            "Avoid mechanical damage"
          ],
          [
            "Pack format",
            "Confirm by supplier and buyer"
          ],
          [
            "Shelf life",
            "Validate for actual route"
          ]
        ]
      },
      {
        "heading": "Technical specification & inspection",
        "copy": "Record cultivar, origin, skin ground colour, firmness method/tip, SSC, acidity, size, bruising, internal breakdown and temperature history.",
        "facts": [
          [
            "Identity",
            "Cultivar/type and origin"
          ],
          [
            "Measurements",
            "Units and method required"
          ],
          [
            "Defects",
            "Record and photograph"
          ],
          [
            "Lot traceability",
            "Date, sample, instrument, inspector"
          ]
        ]
      }
    ],
    "sources": [
      [
        "UC Davis — Peach",
        "https://postharvest.ucdavis.edu/produce-facts-sheets/peach",
        "Last updated May 1996"
      ]
    ]
  },
  "Nectarine": {
    "scope": "Commodity-level UC Davis sheet covering peaches and nectarines; not cultivar-specific",
    "pages": [
      {
        "heading": "Nectarine — product profile",
        "copy": "The shared peach/nectarine sheet describes cultivar-specific colour chips and firmness checks where red skin masks ground-colour maturity. The maturity system cited is California-specific.",
        "facts": [
          [
            "Commercial identity",
            "Nectarine"
          ],
          [
            "Source scope",
            "Commodity-level UC Davis sheet covering peaches and nectarines; not cultivar-specific"
          ],
          [
            "Reference basis",
            "UC Davis postharvest fact sheet"
          ],
          [
            "Trade status",
            "General reference, not a supplier offer"
          ]
        ]
      },
      {
        "heading": "Nutrition & eating characteristics",
        "copy": "SSC, acidity, their ratio, phenolic content, firmness and appearance influence consumer acceptance. The sheet states there is no established minimum quality standard for peaches and nectarines.",
        "facts": [
          [
            "Nutrition figures",
            "No cultivar-matched label unless stated"
          ],
          [
            "Eating quality",
            "Cultivar and maturity dependent"
          ],
          [
            "Quality tests",
            "Use the fruit-specific methods"
          ],
          [
            "Data scope",
            "Commodity-level evidence"
          ]
        ]
      },
      {
        "heading": "Growing regions & season",
        "copy": "Arctic Star, Sunraycer and Fantasia are catalogue variety examples only. No current origin-specific harvest calendar is established by this source.",
        "facts": [
          [
            "Origins",
            "Catalogue examples only"
          ],
          [
            "Harvest calendar",
            "Origin and crop-year research required"
          ],
          [
            "Availability",
            "Not confirmed"
          ],
          [
            "Import eligibility",
            "Check current Indian requirements"
          ]
        ]
      },
      {
        "heading": "Harvest & grading",
        "copy": "Inspect ground colour, firmness with a defined penetrometer tip, size, skin defects, bruising and decay. Confirm the maturity stage required for transit and final market.",
        "facts": [
          [
            "Maturity",
            "Use fruit-specific maturity indicators"
          ],
          [
            "Grade",
            "Destination/buyer specification"
          ],
          [
            "Defects",
            "Record by agreed grade"
          ],
          [
            "Sampling",
            "Document sample size and method"
          ]
        ]
      },
      {
        "heading": "Packaging & post-harvest",
        "copy": "The sheet gives -1 to 0°C and 90–95% RH in its California context. Internal breakdown and chilling injury depend on cultivar and temperature exposure.",
        "facts": [
          [
            "Cold chain",
            "Source-specific reference only"
          ],
          [
            "Handling",
            "Avoid mechanical damage"
          ],
          [
            "Pack format",
            "Confirm by supplier and buyer"
          ],
          [
            "Shelf life",
            "Validate for actual route"
          ]
        ]
      },
      {
        "heading": "Technical specification & inspection",
        "copy": "Record cultivar, maturity stage, firmness and probe size, SSC, acidity, size/count, skin defects, bruising and cold-chain history.",
        "facts": [
          [
            "Identity",
            "Cultivar/type and origin"
          ],
          [
            "Measurements",
            "Units and method required"
          ],
          [
            "Defects",
            "Record and photograph"
          ],
          [
            "Lot traceability",
            "Date, sample, instrument, inspector"
          ]
        ]
      }
    ],
    "sources": [
      [
        "UC Davis — Nectarine",
        "https://postharvest.ucdavis.edu/produce-facts-sheets/peach",
        "Last updated May 1996"
      ]
    ]
  },
  "Plum": {
    "scope": "Commodity-level UC Davis sheet; cultivar-specific maturity varies",
    "pages": [
      {
        "heading": "Plum — product profile",
        "copy": "The source describes cultivar-specific skin-colour maturity guides. Firmness measurement is useful when dark or red skin masks the ground colour; it is a California reference.",
        "facts": [
          [
            "Commercial identity",
            "Plum"
          ],
          [
            "Source scope",
            "Commodity-level UC Davis sheet; cultivar-specific maturity varies"
          ],
          [
            "Reference basis",
            "UC Davis postharvest fact sheet"
          ],
          [
            "Trade status",
            "General reference, not a supplier offer"
          ]
        ]
      },
      {
        "heading": "Nutrition & eating characteristics",
        "copy": "SSC, acidity, their ratio and phenolic content affect eating quality. The sheet does not establish a universal minimum quality standard; ripe-to-eat firmness is not an export acceptance threshold.",
        "facts": [
          [
            "Nutrition figures",
            "No cultivar-matched label unless stated"
          ],
          [
            "Eating quality",
            "Cultivar and maturity dependent"
          ],
          [
            "Quality tests",
            "Use the fruit-specific methods"
          ],
          [
            "Data scope",
            "Commodity-level evidence"
          ]
        ]
      },
      {
        "heading": "Growing regions & season",
        "copy": "Angeleno, Black Splendor, Santa Rosa and Fortune are catalogue examples. Harvest seasons and market windows need origin-specific research.",
        "facts": [
          [
            "Origins",
            "Catalogue examples only"
          ],
          [
            "Harvest calendar",
            "Origin and crop-year research required"
          ],
          [
            "Availability",
            "Not confirmed"
          ],
          [
            "Import eligibility",
            "Check current Indian requirements"
          ]
        ]
      },
      {
        "heading": "Harvest & grading",
        "copy": "Inspect cultivar colour, firmness with an 8-mm probe where applicable, size, skin finish, bruising and decay. Avoid using colour alone when it masks maturity.",
        "facts": [
          [
            "Maturity",
            "Use fruit-specific maturity indicators"
          ],
          [
            "Grade",
            "Destination/buyer specification"
          ],
          [
            "Defects",
            "Record by agreed grade"
          ],
          [
            "Sampling",
            "Document sample size and method"
          ]
        ]
      },
      {
        "heading": "Packaging & post-harvest",
        "copy": "The UC Davis reference gives -1 to 0°C and 90–95% RH. Internal breakdown can occur after cold storage; cultivar and transit history matter.",
        "facts": [
          [
            "Cold chain",
            "Source-specific reference only"
          ],
          [
            "Handling",
            "Avoid mechanical damage"
          ],
          [
            "Pack format",
            "Confirm by supplier and buyer"
          ],
          [
            "Shelf life",
            "Validate for actual route"
          ]
        ]
      },
      {
        "heading": "Technical specification & inspection",
        "copy": "Record cultivar, ground colour, firmness/probe, SSC, acidity, size, bloom/skin condition, defects and storage history.",
        "facts": [
          [
            "Identity",
            "Cultivar/type and origin"
          ],
          [
            "Measurements",
            "Units and method required"
          ],
          [
            "Defects",
            "Record and photograph"
          ],
          [
            "Lot traceability",
            "Date, sample, instrument, inspector"
          ]
        ]
      }
    ],
    "sources": [
      [
        "UC Davis — Plum",
        "https://postharvest.ucdavis.edu/produce-facts-sheets/plum",
        "Last updated May 1996"
      ]
    ]
  },
  "Apricot": {
    "scope": "Commodity-level UC Davis sheet; cultivar-dependent colour and softening",
    "pages": [
      {
        "heading": "Apricot — product profile",
        "copy": "The California reference uses ground-colour transition from green toward yellow, varying by cultivar. Apricots are highly bruise-prone as they soften, so harvest and handling stage matter.",
        "facts": [
          [
            "Commercial identity",
            "Apricot"
          ],
          [
            "Source scope",
            "Commodity-level UC Davis sheet; cultivar-dependent colour and softening"
          ],
          [
            "Reference basis",
            "UC Davis postharvest fact sheet"
          ],
          [
            "Trade status",
            "General reference, not a supplier offer"
          ]
        ]
      },
      {
        "heading": "Nutrition & eating characteristics",
        "copy": "The source associates consumer acceptance with soluble solids and moderate acidity, and highlights rapid softening. Those figures are California research context, not universal buyer specifications.",
        "facts": [
          [
            "Nutrition figures",
            "No cultivar-matched label unless stated"
          ],
          [
            "Eating quality",
            "Cultivar and maturity dependent"
          ],
          [
            "Quality tests",
            "Use the fruit-specific methods"
          ],
          [
            "Data scope",
            "Commodity-level evidence"
          ]
        ]
      },
      {
        "heading": "Growing regions & season",
        "copy": "Moorpark, Katy, Goldrich and Turkish types need region- and crop-year-specific harvest windows; this sheet does not establish them.",
        "facts": [
          [
            "Origins",
            "Catalogue examples only"
          ],
          [
            "Harvest calendar",
            "Origin and crop-year research required"
          ],
          [
            "Availability",
            "Not confirmed"
          ],
          [
            "Import eligibility",
            "Check current Indian requirements"
          ]
        ]
      },
      {
        "heading": "Harvest & grading",
        "copy": "Inspect ground colour, firmness, size, shape, bruising and decay. Handle gently and cool promptly because soft fruit can deteriorate quickly.",
        "facts": [
          [
            "Maturity",
            "Use fruit-specific maturity indicators"
          ],
          [
            "Grade",
            "Destination/buyer specification"
          ],
          [
            "Defects",
            "Record by agreed grade"
          ],
          [
            "Sampling",
            "Document sample size and method"
          ]
        ]
      },
      {
        "heading": "Packaging & post-harvest",
        "copy": "The source gives -0.5 to 0°C and 90–95% RH, with freezing risk related to soluble solids. Validate the set point against cultivar, maturity and route.",
        "facts": [
          [
            "Cold chain",
            "Source-specific reference only"
          ],
          [
            "Handling",
            "Avoid mechanical damage"
          ],
          [
            "Pack format",
            "Confirm by supplier and buyer"
          ],
          [
            "Shelf life",
            "Validate for actual route"
          ]
        ]
      },
      {
        "heading": "Technical specification & inspection",
        "copy": "Record cultivar, ground colour, firmness, SSC, acidity, size, bruises, decay, sample method and temperature history.",
        "facts": [
          [
            "Identity",
            "Cultivar/type and origin"
          ],
          [
            "Measurements",
            "Units and method required"
          ],
          [
            "Defects",
            "Record and photograph"
          ],
          [
            "Lot traceability",
            "Date, sample, instrument, inspector"
          ]
        ]
      }
    ],
    "sources": [
      [
        "UC Davis — Apricot",
        "https://postharvest.ucdavis.edu/produce-facts-sheets/apricot",
        "Last updated November 1998"
      ]
    ]
  },
  "Cherry": {
    "scope": "Commodity-level UC Davis sheet; cultivar-specific maturity criteria",
    "pages": [
      {
        "heading": "Cherry — product profile",
        "copy": "The California sheet uses skin colour and soluble solids together; minimum colour/SSC varies by variety. It identifies the mahogany stage for some named California cultivars, not all cherries.",
        "facts": [
          [
            "Commercial identity",
            "Cherry"
          ],
          [
            "Source scope",
            "Commodity-level UC Davis sheet; cultivar-specific maturity criteria"
          ],
          [
            "Reference basis",
            "UC Davis postharvest fact sheet"
          ],
          [
            "Trade status",
            "General reference, not a supplier offer"
          ]
        ]
      },
      {
        "heading": "Nutrition & eating characteristics",
        "copy": "Taste is related to SSC, titratable acidity and their ratio. Cracks, bird damage, shrivel, decay and misshapen fruit matter; green fleshy stems are a freshness cue.",
        "facts": [
          [
            "Nutrition figures",
            "No cultivar-matched label unless stated"
          ],
          [
            "Eating quality",
            "Cultivar and maturity dependent"
          ],
          [
            "Quality tests",
            "Use the fruit-specific methods"
          ],
          [
            "Data scope",
            "Commodity-level evidence"
          ]
        ]
      },
      {
        "heading": "Growing regions & season",
        "copy": "Bing, Lapins, Santina, Regina and Sweetheart are not given separate global crop calendars by this source. Confirm harvest windows by origin and cultivar.",
        "facts": [
          [
            "Origins",
            "Catalogue examples only"
          ],
          [
            "Harvest calendar",
            "Origin and crop-year research required"
          ],
          [
            "Availability",
            "Not confirmed"
          ],
          [
            "Import eligibility",
            "Check current Indian requirements"
          ]
        ]
      },
      {
        "heading": "Harvest & grading",
        "copy": "Check skin colour, SSC, cracking, stem freshness, bruising, pitting and decay. Rapid cooling and careful handling are important for a delicate fruit.",
        "facts": [
          [
            "Maturity",
            "Use fruit-specific maturity indicators"
          ],
          [
            "Grade",
            "Destination/buyer specification"
          ],
          [
            "Defects",
            "Record by agreed grade"
          ],
          [
            "Sampling",
            "Document sample size and method"
          ]
        ]
      },
      {
        "heading": "Packaging & post-harvest",
        "copy": "The UC Davis reference gives -0.5 ± 0.5°C and 90–95% RH. High humidity helps maintain stem appearance; controlled atmosphere is specialist handling, not a generic setting.",
        "facts": [
          [
            "Cold chain",
            "Source-specific reference only"
          ],
          [
            "Handling",
            "Avoid mechanical damage"
          ],
          [
            "Pack format",
            "Confirm by supplier and buyer"
          ],
          [
            "Shelf life",
            "Validate for actual route"
          ]
        ]
      },
      {
        "heading": "Technical specification & inspection",
        "copy": "Record cultivar, colour stage, SSC, acidity, size, stem condition, cracks, pitting, decay, pack date and temperature history.",
        "facts": [
          [
            "Identity",
            "Cultivar/type and origin"
          ],
          [
            "Measurements",
            "Units and method required"
          ],
          [
            "Defects",
            "Record and photograph"
          ],
          [
            "Lot traceability",
            "Date, sample, instrument, inspector"
          ]
        ]
      }
    ],
    "sources": [
      [
        "UC Davis — Cherry",
        "https://postharvest.ucdavis.edu/produce-facts-sheets/cherry",
        "Last updated May 1996"
      ]
    ]
  },
  "Strawberry": {
    "scope": "Commodity-level UC Davis sheet; not cultivar-specific",
    "pages": [
      {
        "heading": "Strawberry — product profile",
        "copy": "The source uses berry surface colour as a maturity index; the required red/pink coverage differs by the cited U.S. grade context. Strawberries should be harvested close to eating maturity.",
        "facts": [
          [
            "Commercial identity",
            "Strawberry"
          ],
          [
            "Source scope",
            "Commodity-level UC Davis sheet; not cultivar-specific"
          ],
          [
            "Reference basis",
            "UC Davis postharvest fact sheet"
          ],
          [
            "Trade status",
            "General reference, not a supplier offer"
          ]
        ]
      },
      {
        "heading": "Nutrition & eating characteristics",
        "copy": "Appearance, firmness and flavour (SSC, acidity and aroma) are key quality attributes. The source discusses vitamin C but does not provide a cultivar-matched nutrition table.",
        "facts": [
          [
            "Nutrition figures",
            "No cultivar-matched label unless stated"
          ],
          [
            "Eating quality",
            "Cultivar and maturity dependent"
          ],
          [
            "Quality tests",
            "Use the fruit-specific methods"
          ],
          [
            "Data scope",
            "Commodity-level evidence"
          ]
        ]
      },
      {
        "heading": "Growing regions & season",
        "copy": "Camarosa, Festival, Albion and Monterey are listed as commercial variety examples. Their Indian and international harvest windows require separate regional research.",
        "facts": [
          [
            "Origins",
            "Catalogue examples only"
          ],
          [
            "Harvest calendar",
            "Origin and crop-year research required"
          ],
          [
            "Availability",
            "Not confirmed"
          ],
          [
            "Import eligibility",
            "Check current Indian requirements"
          ]
        ]
      },
      {
        "heading": "Harvest & grading",
        "copy": "Inspect colour coverage, firmness, size, shape, leakage, mould and bruising. Remove damaged berries and cool promptly to limit decay spread.",
        "facts": [
          [
            "Maturity",
            "Use fruit-specific maturity indicators"
          ],
          [
            "Grade",
            "Destination/buyer specification"
          ],
          [
            "Defects",
            "Record by agreed grade"
          ],
          [
            "Sampling",
            "Document sample size and method"
          ]
        ]
      },
      {
        "heading": "Packaging & post-harvest",
        "copy": "The source gives 0 ± 0.5°C and 90–95% RH. Modified-atmosphere packaging may be used under validated packhouse protocols; it is not a substitute for rapid cooling.",
        "facts": [
          [
            "Cold chain",
            "Source-specific reference only"
          ],
          [
            "Handling",
            "Avoid mechanical damage"
          ],
          [
            "Pack format",
            "Confirm by supplier and buyer"
          ],
          [
            "Shelf life",
            "Validate for actual route"
          ]
        ]
      },
      {
        "heading": "Technical specification & inspection",
        "copy": "Record cultivar, colour stage, firmness, SSC, acidity, size, mould, leakage, damage, harvest date and pre-cooling time.",
        "facts": [
          [
            "Identity",
            "Cultivar/type and origin"
          ],
          [
            "Measurements",
            "Units and method required"
          ],
          [
            "Defects",
            "Record and photograph"
          ],
          [
            "Lot traceability",
            "Date, sample, instrument, inspector"
          ]
        ]
      }
    ],
    "sources": [
      [
        "UC Davis — Strawberry",
        "https://postharvest.ucdavis.edu/produce-facts-sheets/strawberry",
        "Last updated August 1996"
      ]
    ]
  },
  "Blueberry": {
    "scope": "Commodity-level bushberry sheet covering blueberry, blackberry, raspberry and cranberry; not cultivar-specific",
    "pages": [
      {
        "heading": "Blueberry — product profile",
        "copy": "The source recommends harvesting berries near ripe because eating quality does not improve after harvest. Colour, soluble solids and acidity can contribute to maturity assessment.",
        "facts": [
          [
            "Commercial identity",
            "Blueberry"
          ],
          [
            "Source scope",
            "Commodity-level bushberry sheet covering blueberry, blackberry, raspberry and cranberry; not cultivar-specific"
          ],
          [
            "Reference basis",
            "UC Davis postharvest fact sheet"
          ],
          [
            "Trade status",
            "General reference, not a supplier offer"
          ]
        ]
      },
      {
        "heading": "Nutrition & eating characteristics",
        "copy": "Appearance, bloom/skin condition, size, shape, firmness and flavour are relevant. The source refers to vitamins A and C but does not provide a cultivar-matched nutrient profile.",
        "facts": [
          [
            "Nutrition figures",
            "No cultivar-matched label unless stated"
          ],
          [
            "Eating quality",
            "Cultivar and maturity dependent"
          ],
          [
            "Quality tests",
            "Use the fruit-specific methods"
          ],
          [
            "Data scope",
            "Commodity-level evidence"
          ]
        ]
      },
      {
        "heading": "Growing regions & season",
        "copy": "Duke, Legacy, Ventura and Emerald are catalogue examples only. Regional seasons and variety availability need separate crop-year evidence.",
        "facts": [
          [
            "Origins",
            "Catalogue examples only"
          ],
          [
            "Harvest calendar",
            "Origin and crop-year research required"
          ],
          [
            "Availability",
            "Not confirmed"
          ],
          [
            "Import eligibility",
            "Check current Indian requirements"
          ]
        ]
      },
      {
        "heading": "Harvest & grading",
        "copy": "Inspect uniform colour, bloom, firmness, shrivel, leakage, mould and mechanical damage. Avoid rough handling and maintain high humidity without condensation.",
        "facts": [
          [
            "Maturity",
            "Use fruit-specific maturity indicators"
          ],
          [
            "Grade",
            "Destination/buyer specification"
          ],
          [
            "Defects",
            "Record by agreed grade"
          ],
          [
            "Sampling",
            "Document sample size and method"
          ]
        ]
      },
      {
        "heading": "Packaging & post-harvest",
        "copy": "The sheet lists blueberry storage potential of 1–2 weeks at 0°C in its reference context and 90–95% RH. It describes ethylene response and the need to harvest near ripe.",
        "facts": [
          [
            "Cold chain",
            "Source-specific reference only"
          ],
          [
            "Handling",
            "Avoid mechanical damage"
          ],
          [
            "Pack format",
            "Confirm by supplier and buyer"
          ],
          [
            "Shelf life",
            "Validate for actual route"
          ]
        ]
      },
      {
        "heading": "Technical specification & inspection",
        "copy": "Record cultivar, colour/bloom, firmness, SSC, acidity, size, leakage, mould, pack date, cooling time and storage temperature.",
        "facts": [
          [
            "Identity",
            "Cultivar/type and origin"
          ],
          [
            "Measurements",
            "Units and method required"
          ],
          [
            "Defects",
            "Record and photograph"
          ],
          [
            "Lot traceability",
            "Date, sample, instrument, inspector"
          ]
        ]
      }
    ],
    "sources": [
      [
        "UC Davis — Blueberry",
        "https://postharvest.ucdavis.edu/produce-facts-sheets/bushberry",
        "Last updated August 1998"
      ]
    ]
  },
  "Raspberry": {
    "scope": "Commodity-level bushberry sheet; not cultivar-specific",
    "pages": [
      {
        "heading": "Raspberry — product profile",
        "copy": "The source says berries should be harvested near ripe because eating quality does not improve after harvest. Colour and berry condition are primary practical maturity cues.",
        "facts": [
          [
            "Commercial identity",
            "Raspberry"
          ],
          [
            "Source scope",
            "Commodity-level bushberry sheet; not cultivar-specific"
          ],
          [
            "Reference basis",
            "UC Davis postharvest fact sheet"
          ],
          [
            "Trade status",
            "General reference, not a supplier offer"
          ]
        ]
      },
      {
        "heading": "Nutrition & eating characteristics",
        "copy": "Appearance, firmness, flavour, SSC and acidity are relevant. Nutrition is discussed at broad vitamin A/C level only; no cultivar-matched values are provided.",
        "facts": [
          [
            "Nutrition figures",
            "No cultivar-matched label unless stated"
          ],
          [
            "Eating quality",
            "Cultivar and maturity dependent"
          ],
          [
            "Quality tests",
            "Use the fruit-specific methods"
          ],
          [
            "Data scope",
            "Commodity-level evidence"
          ]
        ]
      },
      {
        "heading": "Growing regions & season",
        "copy": "Heritage, Tulameen and Adelita are catalogue examples. No current origin-specific season calendar is established by this sheet.",
        "facts": [
          [
            "Origins",
            "Catalogue examples only"
          ],
          [
            "Harvest calendar",
            "Origin and crop-year research required"
          ],
          [
            "Availability",
            "Not confirmed"
          ],
          [
            "Import eligibility",
            "Check current Indian requirements"
          ]
        ]
      },
      {
        "heading": "Harvest & grading",
        "copy": "Inspect for leakage, mould, crushed drupelets, shrivel and uneven colour. Keep handling gentle; damaged berries can deteriorate quickly.",
        "facts": [
          [
            "Maturity",
            "Use fruit-specific maturity indicators"
          ],
          [
            "Grade",
            "Destination/buyer specification"
          ],
          [
            "Defects",
            "Record by agreed grade"
          ],
          [
            "Sampling",
            "Document sample size and method"
          ]
        ]
      },
      {
        "heading": "Packaging & post-harvest",
        "copy": "The source groups raspberry and blackberry at 0 ± 0.5°C for only 2–5 days in its reference context, with 90–95% RH. Rapid cooling is critical.",
        "facts": [
          [
            "Cold chain",
            "Source-specific reference only"
          ],
          [
            "Handling",
            "Avoid mechanical damage"
          ],
          [
            "Pack format",
            "Confirm by supplier and buyer"
          ],
          [
            "Shelf life",
            "Validate for actual route"
          ]
        ]
      },
      {
        "heading": "Technical specification & inspection",
        "copy": "Record cultivar, maturity/colour, firmness, leakage, mould, damaged berries, pack date, cooling time and temperature history.",
        "facts": [
          [
            "Identity",
            "Cultivar/type and origin"
          ],
          [
            "Measurements",
            "Units and method required"
          ],
          [
            "Defects",
            "Record and photograph"
          ],
          [
            "Lot traceability",
            "Date, sample, instrument, inspector"
          ]
        ]
      }
    ],
    "sources": [
      [
        "UC Davis — Raspberry",
        "https://postharvest.ucdavis.edu/produce-facts-sheets/bushberry",
        "Last updated August 1998"
      ]
    ]
  },
  "Blackberry": {
    "scope": "Commodity-level bushberry sheet; not cultivar-specific",
    "pages": [
      {
        "heading": "Blackberry — product profile",
        "copy": "The source recommends near-ripe harvest because eating quality does not improve after harvest. Berry colour and condition are important, but cultivar-specific maturity criteria are not provided.",
        "facts": [
          [
            "Commercial identity",
            "Blackberry"
          ],
          [
            "Source scope",
            "Commodity-level bushberry sheet; not cultivar-specific"
          ],
          [
            "Reference basis",
            "UC Davis postharvest fact sheet"
          ],
          [
            "Trade status",
            "General reference, not a supplier offer"
          ]
        ]
      },
      {
        "heading": "Nutrition & eating characteristics",
        "copy": "Appearance, firmness, flavour, SSC and acidity are relevant. The source does not provide cultivar-specific nutrition values.",
        "facts": [
          [
            "Nutrition figures",
            "No cultivar-matched label unless stated"
          ],
          [
            "Eating quality",
            "Cultivar and maturity dependent"
          ],
          [
            "Quality tests",
            "Use the fruit-specific methods"
          ],
          [
            "Data scope",
            "Commodity-level evidence"
          ]
        ]
      },
      {
        "heading": "Growing regions & season",
        "copy": "Tupi, Loch Ness and Chester are catalogue examples. Crop windows and commercial availability must be confirmed by production region.",
        "facts": [
          [
            "Origins",
            "Catalogue examples only"
          ],
          [
            "Harvest calendar",
            "Origin and crop-year research required"
          ],
          [
            "Availability",
            "Not confirmed"
          ],
          [
            "Import eligibility",
            "Check current Indian requirements"
          ]
        ]
      },
      {
        "heading": "Harvest & grading",
        "copy": "Inspect colour uniformity, drupelet integrity, leakage, mould, shrivel and bruising. Gentle handling and rapid cooling reduce losses.",
        "facts": [
          [
            "Maturity",
            "Use fruit-specific maturity indicators"
          ],
          [
            "Grade",
            "Destination/buyer specification"
          ],
          [
            "Defects",
            "Record by agreed grade"
          ],
          [
            "Sampling",
            "Document sample size and method"
          ]
        ]
      },
      {
        "heading": "Packaging & post-harvest",
        "copy": "The source gives 0 ± 0.5°C and a 2–5 day reference period for blackberry and raspberry, at 90–95% RH. Do not infer a longer shelf life.",
        "facts": [
          [
            "Cold chain",
            "Source-specific reference only"
          ],
          [
            "Handling",
            "Avoid mechanical damage"
          ],
          [
            "Pack format",
            "Confirm by supplier and buyer"
          ],
          [
            "Shelf life",
            "Validate for actual route"
          ]
        ]
      },
      {
        "heading": "Technical specification & inspection",
        "copy": "Record cultivar, maturity, berry integrity, firmness, leakage, mould, pack date, pre-cooling and transit temperatures.",
        "facts": [
          [
            "Identity",
            "Cultivar/type and origin"
          ],
          [
            "Measurements",
            "Units and method required"
          ],
          [
            "Defects",
            "Record and photograph"
          ],
          [
            "Lot traceability",
            "Date, sample, instrument, inspector"
          ]
        ]
      }
    ],
    "sources": [
      [
        "UC Davis — Blackberry",
        "https://postharvest.ucdavis.edu/produce-facts-sheets/bushberry",
        "Last updated August 1998"
      ]
    ]
  },
  "Watermelon": {
    "scope": "Commodity-level UC Davis sheet; not cultivar-specific",
    "pages": [
      {
        "heading": "Watermelon — product profile",
        "copy": "The source says watermelon should be harvested fully mature because internal colour and sugars do not develop after harvest. Ground spot, vine tendril condition and destructive sampling are cited maturity clues.",
        "facts": [
          [
            "Commercial identity",
            "Watermelon"
          ],
          [
            "Source scope",
            "Commodity-level UC Davis sheet; not cultivar-specific"
          ],
          [
            "Reference basis",
            "UC Davis postharvest fact sheet"
          ],
          [
            "Trade status",
            "General reference, not a supplier offer"
          ]
        ]
      },
      {
        "heading": "Nutrition & eating characteristics",
        "copy": "Flesh colour, crispness, firmness and soluble solids are useful. Cultivars vary widely, so the source's general SSC indicator must not become a universal buyer threshold.",
        "facts": [
          [
            "Nutrition figures",
            "No cultivar-matched label unless stated"
          ],
          [
            "Eating quality",
            "Cultivar and maturity dependent"
          ],
          [
            "Quality tests",
            "Use the fruit-specific methods"
          ],
          [
            "Data scope",
            "Commodity-level evidence"
          ]
        ]
      },
      {
        "heading": "Growing regions & season",
        "copy": "Crimson Sweet, Sugar Baby and seedless types have differing crop patterns. No origin-specific calendar is established by this sheet.",
        "facts": [
          [
            "Origins",
            "Catalogue examples only"
          ],
          [
            "Harvest calendar",
            "Origin and crop-year research required"
          ],
          [
            "Availability",
            "Not confirmed"
          ],
          [
            "Import eligibility",
            "Check current Indian requirements"
          ]
        ]
      },
      {
        "heading": "Harvest & grading",
        "copy": "Inspect shape, surface, ground spot, bruising and rind damage. Use destructive sampling across a representative lot to assess internal maturity and quality.",
        "facts": [
          [
            "Maturity",
            "Use fruit-specific maturity indicators"
          ],
          [
            "Grade",
            "Destination/buyer specification"
          ],
          [
            "Defects",
            "Record by agreed grade"
          ],
          [
            "Sampling",
            "Document sample size and method"
          ]
        ]
      },
      {
        "heading": "Packaging & post-harvest",
        "copy": "The source gives 10–15°C as a general storage reference and discusses 7–10°C for certain short-term transit contexts, with chilling injury risk. Do not assume colder is always better.",
        "facts": [
          [
            "Cold chain",
            "Source-specific reference only"
          ],
          [
            "Handling",
            "Avoid mechanical damage"
          ],
          [
            "Pack format",
            "Confirm by supplier and buyer"
          ],
          [
            "Shelf life",
            "Validate for actual route"
          ]
        ]
      },
      {
        "heading": "Technical specification & inspection",
        "copy": "Record cultivar/type, ground spot, tendril condition, sample size, central flesh SSC, flesh colour/texture, size, rind defects and temperature history.",
        "facts": [
          [
            "Identity",
            "Cultivar/type and origin"
          ],
          [
            "Measurements",
            "Units and method required"
          ],
          [
            "Defects",
            "Record and photograph"
          ],
          [
            "Lot traceability",
            "Date, sample, instrument, inspector"
          ]
        ]
      }
    ],
    "sources": [
      [
        "UC Davis — Watermelon",
        "https://postharvest.ucdavis.edu/produce-facts-sheets/watermelon",
        "Last updated February 1997"
      ]
    ]
  },
  "Cantaloupe": {
    "scope": "Commodity-level UC Davis sheet; not cultivar-specific",
    "pages": [
      {
        "heading": "Cantaloupe — product profile",
        "copy": "The source uses vine slip and surface netting/colour as maturity clues; harvest maturity is not determined by fruit size. The cited grade SSC values are U.S. grade context only.",
        "facts": [
          [
            "Commercial identity",
            "Cantaloupe"
          ],
          [
            "Source scope",
            "Commodity-level UC Davis sheet; not cultivar-specific"
          ],
          [
            "Reference basis",
            "UC Davis postharvest fact sheet"
          ],
          [
            "Trade status",
            "General reference, not a supplier offer"
          ]
        ]
      },
      {
        "heading": "Nutrition & eating characteristics",
        "copy": "Uniform shape, netting, firmness, internal cavity condition, weight-for-size and SSC are discussed. Fruit can ripen after harvest but does not gain sugar after harvest.",
        "facts": [
          [
            "Nutrition figures",
            "No cultivar-matched label unless stated"
          ],
          [
            "Eating quality",
            "Cultivar and maturity dependent"
          ],
          [
            "Quality tests",
            "Use the fruit-specific methods"
          ],
          [
            "Data scope",
            "Commodity-level evidence"
          ]
        ]
      },
      {
        "heading": "Growing regions & season",
        "copy": "Hale’s Best, Galia and Charentais require region- and variety-specific crop calendars. The source does not establish those seasons.",
        "facts": [
          [
            "Origins",
            "Catalogue examples only"
          ],
          [
            "Harvest calendar",
            "Origin and crop-year research required"
          ],
          [
            "Availability",
            "Not confirmed"
          ],
          [
            "Import eligibility",
            "Check current Indian requirements"
          ]
        ]
      },
      {
        "heading": "Harvest & grading",
        "copy": "Inspect vine-slip stage, netting, shape, stem end, bruises and internal cavity. Use calibrated refractometer readings where SSC is part of the buyer specification.",
        "facts": [
          [
            "Maturity",
            "Use fruit-specific maturity indicators"
          ],
          [
            "Grade",
            "Destination/buyer specification"
          ],
          [
            "Defects",
            "Record by agreed grade"
          ],
          [
            "Sampling",
            "Document sample size and method"
          ]
        ]
      },
      {
        "heading": "Packaging & post-harvest",
        "copy": "The source gives 2.2–5°C and 90–95% RH, and warns of chilling injury below the range during prolonged exposure. Precooling is emphasised.",
        "facts": [
          [
            "Cold chain",
            "Source-specific reference only"
          ],
          [
            "Handling",
            "Avoid mechanical damage"
          ],
          [
            "Pack format",
            "Confirm by supplier and buyer"
          ],
          [
            "Shelf life",
            "Validate for actual route"
          ]
        ]
      },
      {
        "heading": "Technical specification & inspection",
        "copy": "Record type/cultivar, maturity/slip, netting, SSC, size/count, firmness, internal cavity, defects, pre-cooling and cold-chain data.",
        "facts": [
          [
            "Identity",
            "Cultivar/type and origin"
          ],
          [
            "Measurements",
            "Units and method required"
          ],
          [
            "Defects",
            "Record and photograph"
          ],
          [
            "Lot traceability",
            "Date, sample, instrument, inspector"
          ]
        ]
      }
    ],
    "sources": [
      [
        "UC Davis — Cantaloupe",
        "https://postharvest.ucdavis.edu/produce-facts-sheets/cantaloupe",
        "Last updated February 1997"
      ]
    ]
  },
  "Honeydew": {
    "scope": "Commodity-level UC Davis sheet; not cultivar-specific",
    "pages": [
      {
        "heading": "Honeydew — product profile",
        "copy": "The source assesses maturity by ground-colour progression, waxiness, aroma and blossom-end firmness; there is no clean vine-slip signal. A cited California minimum SSC is not a universal standard.",
        "facts": [
          [
            "Commercial identity",
            "Honeydew"
          ],
          [
            "Source scope",
            "Commodity-level UC Davis sheet; not cultivar-specific"
          ],
          [
            "Reference basis",
            "UC Davis postharvest fact sheet"
          ],
          [
            "Trade status",
            "General reference, not a supplier offer"
          ]
        ]
      },
      {
        "heading": "Nutrition & eating characteristics",
        "copy": "Shape, uniformity, surface defects, weight-for-size, peel texture and maturity class are relevant. No cultivar-matched nutrient panel is supplied.",
        "facts": [
          [
            "Nutrition figures",
            "No cultivar-matched label unless stated"
          ],
          [
            "Eating quality",
            "Cultivar and maturity dependent"
          ],
          [
            "Quality tests",
            "Use the fruit-specific methods"
          ],
          [
            "Data scope",
            "Commodity-level evidence"
          ]
        ]
      },
      {
        "heading": "Growing regions & season",
        "copy": "Green-flesh and orange-flesh types need separate crop and maturity research by origin; this source does not supply global seasonality.",
        "facts": [
          [
            "Origins",
            "Catalogue examples only"
          ],
          [
            "Harvest calendar",
            "Origin and crop-year research required"
          ],
          [
            "Availability",
            "Not confirmed"
          ],
          [
            "Import eligibility",
            "Check current Indian requirements"
          ]
        ]
      },
      {
        "heading": "Harvest & grading",
        "copy": "Inspect ground colour, waxiness, aroma, blossom-end response, shape, weight, scars and bruising. Use internal sample checks where required.",
        "facts": [
          [
            "Maturity",
            "Use fruit-specific maturity indicators"
          ],
          [
            "Grade",
            "Destination/buyer specification"
          ],
          [
            "Defects",
            "Record by agreed grade"
          ],
          [
            "Sampling",
            "Document sample size and method"
          ]
        ]
      },
      {
        "heading": "Packaging & post-harvest",
        "copy": "The source commonly references 7°C and 85–90% RH but notes variation in recommendations and chilling injury with prolonged lower-temperature storage.",
        "facts": [
          [
            "Cold chain",
            "Source-specific reference only"
          ],
          [
            "Handling",
            "Avoid mechanical damage"
          ],
          [
            "Pack format",
            "Confirm by supplier and buyer"
          ],
          [
            "Shelf life",
            "Validate for actual route"
          ]
        ]
      },
      {
        "heading": "Technical specification & inspection",
        "copy": "Record type, maturity class, ground colour, SSC, size/count, blossom-end condition, bruises, decay and cold-chain history.",
        "facts": [
          [
            "Identity",
            "Cultivar/type and origin"
          ],
          [
            "Measurements",
            "Units and method required"
          ],
          [
            "Defects",
            "Record and photograph"
          ],
          [
            "Lot traceability",
            "Date, sample, instrument, inspector"
          ]
        ]
      }
    ],
    "sources": [
      [
        "UC Davis — Honeydew",
        "https://postharvest.ucdavis.edu/produce-facts-sheets/honeydew",
        "Last updated February 1997"
      ]
    ]
  },
  "Papaya": {
    "scope": "Commodity-level UC Davis sheet; not cultivar-specific",
    "pages": [
      {
        "heading": "Papaya — product profile",
        "copy": "The source uses colour break from dark green toward light green/yellow. It notes that fruit harvested very green does not gain sweetness after harvest; export and local-market maturity differ in its cited context.",
        "facts": [
          [
            "Commercial identity",
            "Papaya"
          ],
          [
            "Source scope",
            "Commodity-level UC Davis sheet; not cultivar-specific"
          ],
          [
            "Reference basis",
            "UC Davis postharvest fact sheet"
          ],
          [
            "Trade status",
            "General reference, not a supplier offer"
          ]
        ]
      },
      {
        "heading": "Nutrition & eating characteristics",
        "copy": "Uniform size and colour, firmness, flesh colour, sunburn, abrasions, pitting, insect injury and decay are relevant. A cited Hawaiian grade SSC is not a universal limit.",
        "facts": [
          [
            "Nutrition figures",
            "No cultivar-matched label unless stated"
          ],
          [
            "Eating quality",
            "Cultivar and maturity dependent"
          ],
          [
            "Quality tests",
            "Use the fruit-specific methods"
          ],
          [
            "Data scope",
            "Commodity-level evidence"
          ]
        ]
      },
      {
        "heading": "Growing regions & season",
        "copy": "Red Lady, Solo, Sunrise and Tainung need origin-specific crop windows and cultivar-specific maturity validation.",
        "facts": [
          [
            "Origins",
            "Catalogue examples only"
          ],
          [
            "Harvest calendar",
            "Origin and crop-year research required"
          ],
          [
            "Availability",
            "Not confirmed"
          ],
          [
            "Import eligibility",
            "Check current Indian requirements"
          ]
        ]
      },
      {
        "heading": "Harvest & grading",
        "copy": "Inspect colour-break stage, flesh colour, SSC, firmness, size, skin abrasions, pitting, blotchy colour and decay. Avoid punctures and abrasion.",
        "facts": [
          [
            "Maturity",
            "Use fruit-specific maturity indicators"
          ],
          [
            "Grade",
            "Destination/buyer specification"
          ],
          [
            "Defects",
            "Record by agreed grade"
          ],
          [
            "Sampling",
            "Document sample size and method"
          ]
        ]
      },
      {
        "heading": "Packaging & post-harvest",
        "copy": "The source gives different reference temperatures for mature-green, partially ripe and ripe papaya, with 90–95% RH. Temperature must match ripeness stage and route.",
        "facts": [
          [
            "Cold chain",
            "Source-specific reference only"
          ],
          [
            "Handling",
            "Avoid mechanical damage"
          ],
          [
            "Pack format",
            "Confirm by supplier and buyer"
          ],
          [
            "Shelf life",
            "Validate for actual route"
          ]
        ]
      },
      {
        "heading": "Technical specification & inspection",
        "copy": "Record cultivar, colour stage, SSC, firmness, size, skin injury, decay, ripeness distribution, pack date and temperature history.",
        "facts": [
          [
            "Identity",
            "Cultivar/type and origin"
          ],
          [
            "Measurements",
            "Units and method required"
          ],
          [
            "Defects",
            "Record and photograph"
          ],
          [
            "Lot traceability",
            "Date, sample, instrument, inspector"
          ]
        ]
      }
    ],
    "sources": [
      [
        "UC Davis — Papaya",
        "https://postharvest.ucdavis.edu/produce-facts-sheets/papaya",
        "Last updated May 1997"
      ]
    ]
  },
  "Pineapple": {
    "scope": "Commodity-level UC Davis sheet; not cultivar-specific",
    "pages": [
      {
        "heading": "Pineapple — product profile",
        "copy": "The source describes pineapple as non-climacteric: it should be harvested ready to eat. Shell colour alone is not enough; SSC and acidity are part of flavour assessment.",
        "facts": [
          [
            "Commercial identity",
            "Pineapple"
          ],
          [
            "Source scope",
            "Commodity-level UC Davis sheet; not cultivar-specific"
          ],
          [
            "Reference basis",
            "UC Davis postharvest fact sheet"
          ],
          [
            "Trade status",
            "General reference, not a supplier offer"
          ]
        ]
      },
      {
        "heading": "Nutrition & eating characteristics",
        "copy": "Uniform size and shape, firmness, crown condition, decay, sunburn, cracks, bruising and internal disorders are quality checks. SSC/acidity and vitamin C ranges vary by cultivar and ripeness in the source.",
        "facts": [
          [
            "Nutrition figures",
            "No cultivar-matched label unless stated"
          ],
          [
            "Eating quality",
            "Cultivar and maturity dependent"
          ],
          [
            "Quality tests",
            "Use the fruit-specific methods"
          ],
          [
            "Data scope",
            "Commodity-level evidence"
          ]
        ]
      },
      {
        "heading": "Growing regions & season",
        "copy": "MD-2, Smooth Cayenne and Queen need origin-specific production and harvest calendars; the source is not a current trade calendar.",
        "facts": [
          [
            "Origins",
            "Catalogue examples only"
          ],
          [
            "Harvest calendar",
            "Origin and crop-year research required"
          ],
          [
            "Availability",
            "Not confirmed"
          ],
          [
            "Import eligibility",
            "Check current Indian requirements"
          ]
        ]
      },
      {
        "heading": "Harvest & grading",
        "copy": "Inspect shell maturity, SSC, acidity, crown freshness, size, shape, bruising, internal browning and decay. Sample fruit internally because external colour can mislead.",
        "facts": [
          [
            "Maturity",
            "Use fruit-specific maturity indicators"
          ],
          [
            "Grade",
            "Destination/buyer specification"
          ],
          [
            "Defects",
            "Record by agreed grade"
          ],
          [
            "Sampling",
            "Document sample size and method"
          ]
        ]
      },
      {
        "heading": "Packaging & post-harvest",
        "copy": "The source gives 10–13°C for partially ripe and 7–10°C for ripe fruit, with 85–90% RH. It warns of chilling injury below 7°C.",
        "facts": [
          [
            "Cold chain",
            "Source-specific reference only"
          ],
          [
            "Handling",
            "Avoid mechanical damage"
          ],
          [
            "Pack format",
            "Confirm by supplier and buyer"
          ],
          [
            "Shelf life",
            "Validate for actual route"
          ]
        ]
      },
      {
        "heading": "Technical specification & inspection",
        "copy": "Record cultivar, shell colour, SSC, acidity, crown condition, size/weight, internal defects, decay and cold-chain history.",
        "facts": [
          [
            "Identity",
            "Cultivar/type and origin"
          ],
          [
            "Measurements",
            "Units and method required"
          ],
          [
            "Defects",
            "Record and photograph"
          ],
          [
            "Lot traceability",
            "Date, sample, instrument, inspector"
          ]
        ]
      }
    ],
    "sources": [
      [
        "UC Davis — Pineapple",
        "https://postharvest.ucdavis.edu/produce-facts-sheets/pineapple",
        "Last updated November 1996"
      ]
    ]
  },
  "Guava": {
    "scope": "Commodity-level UC Davis sheet; not cultivar-specific",
    "pages": [
      {
        "heading": "Guava — product profile",
        "copy": "Harvest stage depends on target market: mature-green for some markets, firm-yellow/partially ripe for long-distance ripe-fruit markets, and fully ripe for local sale. Flesh colour varies by cultivar.",
        "facts": [
          [
            "Commercial identity",
            "Guava"
          ],
          [
            "Source scope",
            "Commodity-level UC Davis sheet; not cultivar-specific"
          ],
          [
            "Reference basis",
            "UC Davis postharvest fact sheet"
          ],
          [
            "Trade status",
            "General reference, not a supplier offer"
          ]
        ]
      },
      {
        "heading": "Nutrition & eating characteristics",
        "copy": "Colour, size, shape, firmness, gritty texture, seed quantity, aroma, SSC and acidity are relevant. UC Davis gives broad vitamin C information for guava, not a cultivar-matched label.",
        "facts": [
          [
            "Nutrition figures",
            "No cultivar-matched label unless stated"
          ],
          [
            "Eating quality",
            "Cultivar and maturity dependent"
          ],
          [
            "Quality tests",
            "Use the fruit-specific methods"
          ],
          [
            "Data scope",
            "Commodity-level evidence"
          ]
        ]
      },
      {
        "heading": "Growing regions & season",
        "copy": "Allahabad Safeda, Lucknow 49, Thai White and Pink Guava need separate crop calendars by origin and cultivar.",
        "facts": [
          [
            "Origins",
            "Catalogue examples only"
          ],
          [
            "Harvest calendar",
            "Origin and crop-year research required"
          ],
          [
            "Availability",
            "Not confirmed"
          ],
          [
            "Import eligibility",
            "Check current Indian requirements"
          ]
        ]
      },
      {
        "heading": "Harvest & grading",
        "copy": "Inspect colour stage, flesh colour, seed/grit profile, aroma, firmness, bruising, abrasions, insects and decay. Immature fruit may ripen poorly.",
        "facts": [
          [
            "Maturity",
            "Use fruit-specific maturity indicators"
          ],
          [
            "Grade",
            "Destination/buyer specification"
          ],
          [
            "Defects",
            "Record by agreed grade"
          ],
          [
            "Sampling",
            "Document sample size and method"
          ]
        ]
      },
      {
        "heading": "Packaging & post-harvest",
        "copy": "The source gives different temperature ranges for mature-green/partially ripe and fully ripe fruit, with 90–95% RH. Chilling injury and physical damage are important risks.",
        "facts": [
          [
            "Cold chain",
            "Source-specific reference only"
          ],
          [
            "Handling",
            "Avoid mechanical damage"
          ],
          [
            "Pack format",
            "Confirm by supplier and buyer"
          ],
          [
            "Shelf life",
            "Validate for actual route"
          ]
        ]
      },
      {
        "heading": "Technical specification & inspection",
        "copy": "Record cultivar, harvest stage, colour, firmness, SSC, acidity, size, flesh colour, defects, pack date and temperature history.",
        "facts": [
          [
            "Identity",
            "Cultivar/type and origin"
          ],
          [
            "Measurements",
            "Units and method required"
          ],
          [
            "Defects",
            "Record and photograph"
          ],
          [
            "Lot traceability",
            "Date, sample, instrument, inspector"
          ]
        ]
      }
    ],
    "sources": [
      [
        "UC Davis — Guava",
        "https://postharvest.ucdavis.edu/produce-facts-sheets/guava",
        "Last updated February 1999"
      ]
    ]
  },
  "Lychee": {
    "scope": "Commodity-level UC Davis sheet; not cultivar-specific",
    "pages": [
      {
        "heading": "Lychee — product profile",
        "copy": "The source says lychee should be harvested fully ripe because it does not continue ripening after harvest. Skin colour, fruit size and cultivar sugar-acid balance are maturity cues.",
        "facts": [
          [
            "Commercial identity",
            "Lychee"
          ],
          [
            "Source scope",
            "Commodity-level UC Davis sheet; not cultivar-specific"
          ],
          [
            "Reference basis",
            "UC Davis postharvest fact sheet"
          ],
          [
            "Trade status",
            "General reference, not a supplier offer"
          ]
        ]
      },
      {
        "heading": "Nutrition & eating characteristics",
        "copy": "Bright skin colour alone does not guarantee aril quality. Inspect sweet juicy aril, SSC/acid ratio, cracking, browning, insect/physical damage and decay. Broad vitamin C data is not a cultivar label.",
        "facts": [
          [
            "Nutrition figures",
            "No cultivar-matched label unless stated"
          ],
          [
            "Eating quality",
            "Cultivar and maturity dependent"
          ],
          [
            "Quality tests",
            "Use the fruit-specific methods"
          ],
          [
            "Data scope",
            "Commodity-level evidence"
          ]
        ]
      },
      {
        "heading": "Growing regions & season",
        "copy": "Shahi, China, Mauritius and Brewster are catalogue examples; harvest periods need region- and cultivar-specific sources.",
        "facts": [
          [
            "Origins",
            "Catalogue examples only"
          ],
          [
            "Harvest calendar",
            "Origin and crop-year research required"
          ],
          [
            "Availability",
            "Not confirmed"
          ],
          [
            "Import eligibility",
            "Check current Indian requirements"
          ]
        ]
      },
      {
        "heading": "Harvest & grading",
        "copy": "Inspect full maturity, fruit size, skin browning, cracks, aril quality, decay and stem condition. Minimise water loss and physical injury.",
        "facts": [
          [
            "Maturity",
            "Use fruit-specific maturity indicators"
          ],
          [
            "Grade",
            "Destination/buyer specification"
          ],
          [
            "Defects",
            "Record by agreed grade"
          ],
          [
            "Sampling",
            "Document sample size and method"
          ]
        ]
      },
      {
        "heading": "Packaging & post-harvest",
        "copy": "The source gives 5°C as a central reference with a cultivar/storage-duration range and 90–95% RH. High humidity helps reduce browning; ethylene may accelerate deterioration.",
        "facts": [
          [
            "Cold chain",
            "Source-specific reference only"
          ],
          [
            "Handling",
            "Avoid mechanical damage"
          ],
          [
            "Pack format",
            "Confirm by supplier and buyer"
          ],
          [
            "Shelf life",
            "Validate for actual route"
          ]
        ]
      },
      {
        "heading": "Technical specification & inspection",
        "copy": "Record cultivar, harvest maturity, size, aril SSC/acid ratio, skin colour, browning, cracks, decay, treatment and cold-chain history.",
        "facts": [
          [
            "Identity",
            "Cultivar/type and origin"
          ],
          [
            "Measurements",
            "Units and method required"
          ],
          [
            "Defects",
            "Record and photograph"
          ],
          [
            "Lot traceability",
            "Date, sample, instrument, inspector"
          ]
        ]
      }
    ],
    "sources": [
      [
        "UC Davis — Lychee",
        "https://postharvest.ucdavis.edu/produce-facts-sheets/lychee",
        "Last updated May 1998"
      ]
    ]
  }

};

const BOOK_SECTIONS=[
{nav:"Introduction",kicker:"01 · PRODUCT INTRODUCTION",heading:"Understanding the product",copy:"A concise product introduction should identify the fruit, botanical or commercial type, intended market use and the selected variety’s distinguishing traits. This page is a structured research entry, not a supplier offer.",facts:[["Fruit","Selected fruit"],["Variety","Selected variety"],["Market role","Fresh-market reference"],["Status","General reference"]]},
{nav:"Nutrition & characteristics",kicker:"02 · NUTRITION & CHARACTERISTICS",heading:"Nutrition, appearance & eating quality",copy:"Document edible portion, key nutrients using a reputable food-composition source, and the variety’s external appearance, flesh colour, flavour, aroma and texture. Nutrient values must state the source, serving basis and whether values are raw or processed.",facts:[["Nutrition","Source required"],["Appearance","Variety-specific"],["Flesh / texture","Variety-specific"],["Eating quality","Reference to verify"]]},
{nav:"Growing regions & season",kicker:"03 · GROWING REGIONS & SEASON",heading:"Origins, growing regions & crop windows",copy:"Map recognised growing regions and harvest windows by country, region and season. Crop timing shifts with hemisphere, altitude, weather and cultivar. An origin list is indicative only; it does not prove current availability or Indian import eligibility.",facts:[["Origins","Indicative list"],["Harvest window","Research required"],["Seasonality","Region-specific"],["Import eligibility","Check current rules"]]},
{nav:"Harvest & grading",kicker:"04 · HARVEST & GRADING",heading:"Maturity, harvest & grading",copy:"Describe maturity indicators, harvest method, defect tolerances and the applicable grade standard. Record measurement method and units for any quality parameter. The correct indicators differ by fruit: for example, firmness, dry matter, colour break, berry condition or rind maturity.",facts:[["Maturity index","Fruit-specific"],["Grade standard","Destination-specific"],["Size / calibre","Standard required"],["Inspection","Lot-level record"]]},
{nav:"Packaging & post-harvest",kicker:"05 · PACKAGING & POST-HARVEST",heading:"Packaging, handling & cold chain",copy:"Specify pack style, net weight, carton material, liners, pallet pattern, ventilation and traceability details only when confirmed for the product and route. Storage temperature, humidity, atmosphere and shelf-life claims require validated technical references and shipment-specific handling plans.",facts:[["Pack format","Supplier-confirmed"],["Carton weight","Lot-specific"],["Cold chain","Validated protocol"],["Shelf life","Evidence required"]]},
{nav:"Technical specifications",kicker:"06 · TECHNICAL SPECIFICATIONS",heading:"Technical profile & lot measurements",copy:"Populate the technical table with product-appropriate metrics and explicit test methods. Examples may include soluble solids (°Brix), titratable acidity, firmness/pressure, dry matter, fruit diameter, berry size, cluster weight, colour and net weight. Never treat generic reference ranges as actual lot results.",facts:[["Quality metrics","Fruit-specific"],["Units & methods","Must be stated"],["Reference values","Source required"],["Actual lot data","Measure & record"]]}
];
const $=id=>document.getElementById(id);let activeCategory="All fruits",activeFruit=null,activeVariety="",activePage=0;
const fruits=()=>FRUIT_DATA.flatMap(c=>c.items.map(x=>({category:c.cat,name:x[0],emoji:x[1],origins:x[2].split(", ").map(s=>s.trim()),varieties:x[3].split("; ").map(s=>s.trim())})));
function safe(s){return String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]))}
function renderCategories(){const cats=["All fruits",...FRUIT_DATA.map(x=>x.cat)];$("category-list").innerHTML=cats.map(c=>'<button class="category-button '+(activeCategory===c?"active":"")+'" data-category="'+safe(c)+'">'+safe(c)+'</button>').join("");document.querySelectorAll("[data-category]").forEach(b=>b.addEventListener("click",()=>{activeCategory=b.dataset.category;renderCategories();renderFruitCards()}))}
function renderFruitCards(){const query=$("fruit-search").value.trim().toLowerCase(),origin=$("origin-filter").value;const list=fruits().filter(f=>(activeCategory==="All fruits"||f.category===activeCategory)&&(!origin||f.origins.includes(origin))&&(!query||(f.name+" "+f.varieties.join(" ")+" "+f.origins.join(" ")).toLowerCase().includes(query)));$("category-heading").textContent=activeCategory;$("result-count").textContent=list.length+" fruits";$("fruit-grid").innerHTML=list.map(f=>'<article class="fruit-card"><div class="fruit-visual" aria-hidden="true">'+f.emoji+'</div><div class="fruit-body"><h3>'+safe(f.name)+'</h3><p>'+safe(f.origins.join(", "))+'</p><div class="chips">'+f.varieties.slice(0,4).map(v=>'<span class="chip">'+safe(v)+'</span>').join("")+'</div><p>'+f.varieties.length+' listed varieties / types</p><button class="text-button" data-fruit="'+safe(f.name)+'">Explore varieties & book ↗</button></div></article>').join("")||"<p>No matching fruit. Try a different search or origin.</p>";document.querySelectorAll("[data-fruit]").forEach(b=>b.addEventListener("click",()=>openFruit(b.dataset.fruit)))}
function getProductResearch(){return PRODUCT_RESEARCH[activeFruit.name]?.[activeVariety]||PRODUCT_RESEARCH[activeFruit.name]||null}
function renderVarieties(){ $("book-varieties").innerHTML=activeFruit.varieties.map(v=>'<button type="button" class="'+(v===activeVariety?'active':'')+'" data-variety="'+safe(v)+'">'+safe(v)+'</button>').join("");document.querySelectorAll("[data-variety]").forEach(b=>b.addEventListener("click",()=>{activeVariety=b.dataset.variety;renderVarieties();showPage(0)}))}
function openFruit(name){activeFruit=fruits().find(f=>f.name===name);activeVariety=activeFruit.varieties[0];$("book-subtitle").textContent=activeFruit.name+" · "+activeFruit.category;$("book-nav").innerHTML=BOOK_SECTIONS.map((s,i)=>'<button type="button" data-book-page="'+i+'">'+(i+1)+". "+safe(s.nav)+'</button>').join("");document.querySelectorAll("[data-book-page]").forEach(b=>b.addEventListener("click",()=>showPage(Number(b.dataset.bookPage))));renderVarieties();$("book-overlay").classList.add("open");document.body.style.overflow="hidden";showPage(0);$("book-close").focus()}
function showPage(n){activePage=Math.max(0,Math.min(5,n));const section=BOOK_SECTIONS[activePage],research=getProductResearch(),page=research?.pages?.[activePage];$("book-title").textContent=activeVariety;$("book-kicker").textContent=page?section.kicker:section.kicker+" · RESEARCH PENDING";$("book-heading").textContent=page?page.heading:section.heading;$("book-copy").textContent=page?page.copy:section.copy;$("book-facts").innerHTML=(page?page.facts:section.facts).map(([a,b])=>'<div class="book-fact"><b>'+safe(a)+'</b><span>'+safe(b)+'</span></div>').join("");const scope=research?research.scope:"No reviewed technical source is attached to this fruit/variety yet. This page is a content framework only.";const note=page?"Source scope: "+scope+". Values and guidance are research references, not an agreed commercial acceptance specification. Verify cultivar identity, origin, harvest maturity, test method, route and buyer requirements before use.":"Research status: pending. No verified cultivar-specific technical content is published for this selection. Do not infer its specification from another variety."; $("research-note").textContent=note;const src=research?.sources||[];$("book-sources").innerHTML=src.length?'<b>Research sources</b><ul>'+src.map(([name,url,date])=>'<li><a href="'+safe(url)+'" target="_blank" rel="noopener noreferrer">'+safe(name)+'</a> <span>('+safe(date)+')</span></li>').join("")+'</ul>':"No source attached yet. Research and technical review required before publishing specifications.";document.querySelectorAll("[data-book-page]").forEach((b,i)=>b.classList.toggle("active",i===activePage));document.querySelectorAll("[data-variety]").forEach(b=>b.classList.toggle("active",b.dataset.variety===activeVariety));$("book-page").textContent="Page "+(activePage+1)+" of 6";$("book-prev").disabled=activePage===0;$("book-next").disabled=activePage===5}
function closeBook(){$("book-overlay").classList.remove("open");document.body.style.overflow=""}
$("fruit-search").addEventListener("input",renderFruitCards);$("origin-filter").addEventListener("change",renderFruitCards);$("book-close").addEventListener("click",closeBook);$("book-prev").addEventListener("click",()=>showPage(activePage-1));$("book-next").addEventListener("click",()=>showPage(activePage+1));$("book-print").addEventListener("click",()=>window.print());$("book-overlay").addEventListener("click",e=>{if(e.target===$("book-overlay"))closeBook()});document.addEventListener("keydown",e=>{if(!$("book-overlay").classList.contains("open"))return;if(e.key==="Escape")closeBook();if(e.key==="ArrowRight")showPage(activePage+1);if(e.key==="ArrowLeft")showPage(activePage-1)});renderCategories();renderFruitCards();