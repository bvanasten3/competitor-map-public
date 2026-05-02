// Bayport tracker source data.
// Edit this file for task/status/spend/notes updates; bayport-gantt.html renders it.
window.BAYPORT_TRACKER_DATA = {
  heroPills: [
    {
      "className": "primary",
      "text": "Top priority: city payments/docs -> sprinkler moves -> framing start"
    },
    {
      "className": "warning",
      "text": "Bayport property taxes: ~$7.5k due May 15"
    },
    {
      "className": "gold",
      "text": "Low-voltage main runs done; counter finish details remain"
    }
  ],
  notes: {
    "nextActions": `TOP ACTIONS
• Pay City of Bayport for permit/document release and keep receipts/docs organized for building, fence, sign, and fire-sprinkler records.
• Confirm Dynamic Fire Protection is locked for sprinkler-head moves mid-to-late next week, target May 6-8.
• Confirm Tom / framer start window for late next week or early the following week, target May 7-15.
• Before framing starts: finalize security checkpoint window direction, confirm front-door cable reuse with security vendor, and finish the easy back-building wiring during equipment install.
• Sales counter structure is sturdy and POS conduit is in; finish one cash-drawer support and front plywood skin, then move to countertop/install timing + custom glass field measure.

WHY THIS ORDER
• The permit watchlist cleanup is complete: building permit, sign permit, and fence permit are no longer open approval risks.
• The live critical path is now document/payment admin -> sprinkler moves -> framing start, with pre-wall decisions handled before drywall closes anything.
• The next operational risk is schedule compression: sprinklers and framing need to land cleanly next week so the buildout does not lose momentum.`,
    "decisionLog": `PERMITS / CITY
• May 1: Brandon confirmed the interior-wall building permit is received and can be marked complete on the dashboard.
• May 1: sign permit review is complete. Final sign payment has been made, and Sir Metalman expects the sign to be completed in June or July.
• May 1: fence permit is approved; fence aisle variance/signoff no longer needs active tracking.
• May 1: primary sales counter framing is complete and the countertop has been ordered.
• May 2: UV light tied to HVAC no longer clicks; main 22-gauge and 18-gauge wiring runs are complete; old telephone/legacy security wiring was removed from drop ceilings; POS conduit is run to the sales-counter terminal locations.

BUILDOUT / SCHEDULE
• Target is for Dynamic Fire Protection to move fire sprinklers mid-to-late next week, likely May 6-8.
• Target is for the framer to begin late next week or early the following week, likely May 7-15, once permit docs and sprinkler sequencing are clear.
• Tom / father-son crew quote remains the working framing/drywall anchor at $15k.
• Framing readiness now depends on permit document release, sprinkler movement, security/window decisions, and only the remaining targeted low-voltage runs: easy back-building wiring during equipment install plus the front exterior/front security door cable-use question.

SECURITY / DESIGN
• Preferred path remains split day-stock vs true vault, not trying to force the shutter opening to be treated as the vault itself.
• Checkpoint window direction still leans toward fixed glazing + controlled pass-through unless a stronger restricted-access corridor is created.`,
    "globalNotes": `OPEN BLOCKERS / WATCHLIST
• City payment/document pickup remains an admin/cash-flow item, but building/sign/fence approvals are no longer watchlist risks.
• Bayport property taxes: about $7,500 due by May 15; treat as near-term cash outflow outside buildout capex.
• Fire-sprinkler moves must be confirmed for mid-to-late next week before framing starts.
• Framer start window is late next week or early the following week, depending on sprinkler/permit documentation timing.
• Security checkpoint window decision still needs to be finalized before framing.
• Most 22/18 low-voltage wiring is now run; remaining security wiring is intentionally deferred to equipment install in the back plus a vendor question on whether nearby banana cable can serve the front exterior/security door.

CURRENT CRITICAL PATH
1. Finish city payment/documentation cleanup and file final docs/receipts
2. Confirm Dynamic Fire Protection sprinkler-head moves for May 6-8 target window
3. Confirm framer start for May 7-15 target window
4. Finalize security window and front-door cable-use decision before framing/drywall
5. Finish targeted back-building wiring during security-equipment install
6. Framing / drywall start
7. Rough-in and system installs
8. SOP / operating plan + Plan of Record
9. OCM review / inspection / opening

RECENT WINS
• Interior-wall building permit received / marked complete
• Sign permit review complete; final sign payment made to Sir Metalman
• Fence permit approved; aisle variance/signoff no longer needs tracking
• UV light connected to HVAC fixed; clicking resolved
• Main 22-gauge and 18-gauge low-voltage wiring runs completed
• POS conduit run to sales-counter terminal locations
• Legacy telephone/old security wiring removed from drop ceilings
• Primary sales-counter framing completed and countertop ordered
• Final coat of stain completed on the wood interior doors
• Ceiling paint completed and lights/sprinklers restored
• Vault HVAC vent modification completed
• Remaining HVAC vent fixed
• Thermostat moved
• Electrical relocated around the wall being removed

PROCUREMENT / WAITING
• City permit/payment documentation cleanup: collect and file final docs/receipts
• Dynamic Fire Protection scheduling confirmation for May 6-8 target window
• Framer/Tom start confirmation for May 7-15 target window
• Countertop is ordered; next step is finish one cash-drawer support + front plywood skin, then install timing and custom glass field measurement
• 3 steel doors from Home Depot are on site and primed; next step is paint
• Bathroom wallpaper + tile still need to be ordered
• ACT Asphalt quote / parking lot scope still needs to be locked
• 2nd air filtration unit for front still needs to be purchased

SPEND SNAPSHOT
• Bayport property taxes: about $7,500 due May 15; non-capitalized cash outflow, but important for runway.
• City permit/payment receipts should be filed as final docs are collected.
• Construction in Process register attached Apr 16 shows ending balance / spend to date of $27,979.93
• P&L screenshot shows total expenses of $17,185.82 plus other expenses of $12,313.25, largely interest expense

HARD DATES TO PROTECT
• Fence complete by July 1, 2026
• Parking lot complete by mid-June and no later than July 1, 2026
• Target opening: Aug 1, 2026`
  },
  importantIds: ['p4','h1b','s2','i4c','sys7','d1','d3','sec2','sec4','c5','c5b','c2','e2','e2b'],
  categories: {permits:{l:'Permits / Professional',c:'var(--color-purple)'},site:{l:'Site / Exterior',c:'var(--color-success)'},framing:{l:'Framing / Doors / Openings',c:'var(--color-warning)'},mech:{l:'HVAC / Fire / Mechanical',c:'var(--color-blue)'},systems:{l:'Electrical / Low Voltage / Security',c:'var(--color-error)'},interior:{l:'Interior Finishes / Fixtures',c:'var(--color-orange)'},retail:{l:'Retail Equipment / Furniture / AV',c:'var(--color-gold)'},ops:{l:'Compliance / Ops Setup',c:'var(--color-primary)'}},
  actuals: [{year:2025,month:11,cat:'ops',amount:1200},{year:2026,month:0,cat:'permits',amount:8000},{year:2026,month:0,cat:'framing',amount:1900},{year:2026,month:1,cat:'mech',amount:500},{year:2026,month:1,cat:'framing',amount:300},{year:2026,month:2,cat:'interior',amount:2600},{year:2026,month:2,cat:'systems',amount:1200},{year:2026,month:2,cat:'permits',amount:2600},{year:2026,month:2,cat:'mech',amount:1100},{year:2026,month:2,cat:'site',amount:1400},{year:2026,month:3,cat:'framing',amount:3900},{year:2026,month:3,cat:'interior',amount:1800},{year:2026,month:3,cat:'mech',amount:1200},{year:2026,month:3,cat:'systems',amount:1479.93}],
  tasks: [
{id:'p1',cat:'permits',n:'Building permit (interior walls)',s:'2026-04-01',e:'2026-05-01',st:'done',pct:100,priority:'soon',cost:4000,notes:`Owner: Brandon / City of Bayport / Studio Bliss / SAFEbuilt / Fairfield
May 1 update: Brandon confirmed the building permit for the interior walls is received and can be marked complete on the dashboard.
Closeout/admin: keep formal documentation and payment receipt filed with the project records.
Dependency cleared: framing path can now proceed once sprinkler moves and pre-wall decisions are handled.`},
{id:'p2',cat:'permits',n:'Sign permit review',s:'2026-04-01',e:'2026-05-01',st:'done',pct:100,priority:'soon',cost:250,notes:`Owner: Brandon / City of Bayport
May 1 update: sign permit review is complete.
Status: no longer a dashboard watchlist item.
Related sign vendor note: final payment has been made to Sir Metalman; completion anticipated June or July.`},
{id:'p2b',cat:'permits',n:'Exterior sign fabrication / install (Sir Metalman)',s:'2026-05-01',e:'2026-07-31',st:'active',pct:65,priority:'later',cost:0,notes:`Owner: Sir Metalman / Brandon
May 1 update: final payment has been made.
Expected completion: June or July.
Cash assumption: no remaining sign payment currently modeled after final payment; update if change orders appear.`},
{id:'p3',cat:'permits',n:'Fence permit submission and processing',s:'2026-04-08',e:'2026-04-18',st:'done',pct:100,priority:'soon',cost:50,notes:`Owner: Brandon
Status: submitted.`},
{id:'p3b',cat:'site',n:'Fence permit approval',s:'2026-04-24',e:'2026-05-01',st:'done',pct:100,priority:'soon',cost:0,notes:`Owner: Brandon / City of Bayport
May 1 update: fence permit is approved.
Fence aisle variance/signoff no longer needs active dashboard tracking.
Next workstream is fence execution timing, not permit approval.`},
{id:'p4',cat:'permits',n:'Bayport property taxes due May 15',s:'2026-05-01',e:'2026-05-15',st:'todo',pct:0,priority:'now',cost:7500,notes:`Owner: Brandon
May 1 cash-flow update: approximately $7,500 in Bayport property taxes is due by May 15.
Planning treatment: non-capitalized property tax / P&L cash outflow, but include in near-term runway and estimated cash needs because it lands alongside permit, sprinkler, framing, and other buildout payments.`},
{id:'i0a',cat:'interior',n:'Ceiling spray paint black (HVAC, sprinklers)',s:'2026-04-08',e:'2026-04-12',st:'done',pct:100,priority:'soon',cost:150,notes:`Owner: Brandon\nStatus: completed last weekend, including putting lights back up and uncovering sprinkler heads.`},
{id:'i0b',cat:'interior',n:'Move smart thermostat to breakroom or office',s:'2026-04-15',e:'2026-04-15',st:'done',pct:100,priority:'soon',cost:0,notes:`Owner: Brandon\nStatus: completed.`},
{id:'i0c',cat:'interior',n:'Finish floor drain patch / vinyl insert',s:'2026-04-15',e:'2026-04-16',st:'done',pct:100,priority:'soon',cost:40,notes:`Owner: Brandon\nStatus: drain fill and vinyl patch work completed; adhesive/seal step handled as part of closeout.`},
{id:'i0d',cat:'mech',n:'Remaining HVAC vent fix',s:'2026-04-15',e:'2026-04-15',st:'done',pct:100,priority:'soon',cost:0,notes:`Owner: Brandon\nStatus: completed.`},
{id:'i0e',cat:'interior',n:'Reinstall ceiling lights and uncover sprinkler heads',s:'2026-04-15',e:'2026-04-15',st:'done',pct:100,priority:'soon',cost:0,notes:`Owner: Brandon\nStatus: completed after ceiling paint.`},
{id:'s2',cat:'framing',n:'Interior framing & drywall',s:'2026-05-07',e:'2026-05-29',st:'active',pct:25,priority:'now',cost:15000,notes:`Owner: Brandon / Tom father-son crew
Tom quote is $15k.
May 1 update: building permit is received/complete; current target is for framer to begin late next week or early the following week, likely May 7-15.
Blockers/watchlist: sprinkler moves, checkpoint window direction, and any pre-wall low-voltage/electrical runs.
Dependency note: two of the stained wood doors cannot be installed until the relevant walls are framed.
Cash assumption: using Tom's quoted $15k as the working framing/drywall spend anchor.`},
{id:'s2b',cat:'framing',n:'Framing prep: electrical moved around removed wall',s:'2026-04-15',e:'2026-04-15',st:'done',pct:100,priority:'soon',cost:0,notes:`Completed.`},
{id:'h1',cat:'mech',n:'Vault HVAC vent modification',s:'2026-04-07',e:'2026-04-16',st:'done',pct:100,priority:'soon',cost:300,notes:`Owner: Brandon\nStatus: completed.\nCash assumption: small parts / vent modification placeholder only.`},
{id:'h1c',cat:'mech',n:'Fix UV light clicking on HVAC system',s:'2026-05-01',e:'2026-05-02',st:'done',pct:100,priority:'soon',cost:0,notes:`Owner: Brandon
May 2 update: fixed the UV light connected to the HVAC system; clicking issue is resolved.`},
{id:'h1b',cat:'mech',n:'Schedule Dynamic Fire Protection for sprinkler-head moves',s:'2026-04-16',e:'2026-05-08',st:'active',pct:55,priority:'now',cost:1500,notes:`Owner: Brandon / Dynamic Fire Protection
Permit-status tracking can be removed from the top dashboard watchlist.
Current focus: confirm Dynamic Fire Protection field-work timing for sprinkler-head moves mid-to-late next week, target May 6-8.
Why it matters: sprinkler-head moves must clear before framing/drywall can start cleanly.
Cash assumption: placeholder for moving a small number of sprinkler heads, should be replaced with real Dynamic Fire Protection quote once scheduled.`},
{id:'sec2',cat:'systems',n:'Compare Lloyd vs Per Mar and choose direction',s:'2026-04-14',e:'2026-04-21',st:'active',pct:65,priority:'soon',cost:0,notes:`Owner: Brandon / Morpheus\nNext step: on-site Per Mar meeting tomorrow around 10:30 to 2.`},
{id:'sec4',cat:'systems',n:'Checkpoint window dimensions + Hallmark quote path',s:'2026-04-15',e:'2026-04-18',st:'active',pct:45,priority:'soon',cost:3200,notes:`Hallmark Glass RFQ sent. Need exact field dimensions.\nTwin City Garage RFQ also sent.\nCash assumption: placeholder for a modest custom glazing / pass-through package, not final.`},

{id:'i2',cat:'interior',n:'Bathroom remodel materials + work',s:'2026-04-14',e:'2026-05-21',st:'active',pct:20,priority:'later',cost:3500,notes:`Wallpaper, tile, toilet, sink still moving.\nCash assumption: moderate DIY bathroom spend placeholder for remaining finishes/fixtures.`},
{id:'i4b',cat:'interior',n:'Primary sales-counter framing + countertop order',s:'2026-04-25',e:'2026-05-01',st:'done',pct:100,priority:'soon',cost:15000,notes:`Owner: Brandon
May 2 update: sales-counter framing is sturdy; plywood/electrical materials were procured; conduit is run to the POS terminal locations.
Completed milestone: primary sales-counter framing and countertop order.
Remaining finish work is tracked separately: one more cash-drawer support plus plywood on the front of the framing.
Cash assumption: if you do a nice countertop / nicer finish path, POS counter materials could land around $15k; update with real countertop invoice when available.`},
{id:'i4c',cat:'interior',n:'Sales-counter finish: cash drawer support + front plywood skin',s:'2026-05-02',e:'2026-05-06',st:'active',pct:75,priority:'soon',cost:0,notes:`Owner: Brandon
May 2 update: plywood and electrical supplies are on hand, frame is sturdy, and POS conduit is already run.
Remaining: add one more cash-drawer support and plywood to the front of the framing.
Next sequence after this: countertop delivery/install timing -> custom glass vendor field-measure for exact flush display fit.`},
{id:'i5',cat:'retail',n:'Sales-floor display cases: framing + electrical plan',s:'2026-04-28',e:'2026-05-18',st:'active',pct:10,priority:'soon',cost:10000,notes:`Owner: Brandon
May 1 update: countertop is ordered, so display-case progress is no longer blocked by placing the countertop order.
Next step: sketch the display-case structure plan before cutting lumber; include where power/conduit feeds enter before the case framing is closed.
Timing note: coordinate with framing/sprinkler/pre-wire sequence so display-case work does not create rework.
Cash assumption: display cases budgeted around $10k until DIY materials vs custom components are clearer.`},
{id:'i6',cat:'retail',n:'TVs, kiosks, speakers, in-store AV hardware',s:'2026-05-15',e:'2026-06-10',st:'todo',pct:0,priority:'later',cost:10000,notes:`Owner: Brandon\nCash assumption: TVs, kiosks, and speakers together budgeted around $10k.`},
{id:'sys7',cat:'systems',n:'Low-voltage / security / AV pre-wire before drywall',s:'2026-04-17',e:'2026-05-06',st:'active',pct:85,priority:'soon',cost:1200,notes:`Owner: Brandon
May 2 update: rest of the 22-gauge and 18-gauge wiring is run.
Remaining intentional open items: easy wiring in the back of the building, best done during security-equipment install, and a front security/front exterior door question. Ask the security vendor whether the banana cable running directly by that door can be used before pulling another banana cable or another 22/18 set.
Dependency: finish before drywall closes relevant walls, but do not duplicate cable pulls until vendor confirms the front-door path.
Cash assumption: placeholder for speaker wire, low-voltage runs, and related pre-wire materials.`},
{id:'sys8',cat:'systems',n:'Remove legacy ceiling wiring clutter',s:'2026-05-01',e:'2026-05-02',st:'done',pct:100,priority:'soon',cost:0,notes:`Owner: Brandon
May 2 update: removed old telephone and likely old security wiring from the drop ceilings so new vs old wiring is less confusing.`},
{id:'i3',cat:'interior',n:'ADA grab bars',s:'2026-04-14',e:'2026-04-28',st:'todo',pct:0,priority:'later',cost:0,notes:`Easy win once time opens up.\nCash assumption: supplies already purchased, so no new spend currently assumed.`},
{id:'e1',cat:'site',n:'Home Depot steel doors delivered on site',s:'2026-04-17',e:'2026-04-21',st:'done',pct:100,priority:'soon',cost:0,notes:`Owner: Brandon
Status: 3 steel doors from Home Depot have been picked up and are now on site.
Impact: reduces framing risk tied to door material availability.`},
{id:'d1',cat:'framing',n:'Seven-door finish work: 4 wood + 3 steel',s:'2026-04-20',e:'2026-05-06',st:'active',pct:78,priority:'soon',cost:250,notes:`Owner: Brandon / Natalie
Apr 25 clarification: there are two separate door projects: 4 stained wood interior doors plus 3 steel welded-frame doors for the vault/security rooms.
Wood doors: final stain coat is complete; remaining step is clear poly on all 4 stained wood interior doors.
Steel doors: 3 steel doors are primed; remaining step is paint, then electronic key hardware / access-control hardware.
Install sequence: after poly, install the 2 wood doors that are not blocked by unfinished wall framing; the other 2 wood doors depend on wall framing. May 1 priority note: keep moving as a high-leverage closeout item, but city permit payment/docs, sprinklers, and framing are now ahead of it on the critical path.`},
{id:'d2',cat:'framing',n:'Install wood doors + standard hardware',s:'2026-04-29',e:'2026-05-08',st:'todo',pct:10,priority:'soon',cost:0,notes:`Owner: Brandon
After poly is done, install the two wood doors that are not blocked by new wall framing and install their hardware at the same time.
The other two wood doors depend on wall framing completion.`},
{id:'d3',cat:'systems',n:'Install electronic key hardware on 3 steel doors',s:'2026-04-30',e:'2026-05-10',st:'todo',pct:5,priority:'soon',cost:0,notes:`Owner: Brandon / security vendor as needed
Dependency: paint the 3 steel welded-frame doors first, then install electronic key hardware / access-control hardware.`},
{id:'e2',cat:'site',n:'ACT Asphalt quote + parking lot scope lock',s:'2026-04-21',e:'2026-04-22',st:'active',pct:60,priority:'soon',cost:15000,notes:`Owner: Brandon / Mitchell at ACT Asphalt
Latest update: Mitchell said the quote should be delivered tomorrow.
Scope direction: include a paved drain approach that may avoid needing green space treatment.
Start timing: Mitchell thinks ACT Asphalt can start around May 20.
Outcome target: parking lot should be started by end of May, and may be complete by then depending on execution.
Cash assumption: still carrying a working first-payment placeholder of $15k until the real quote lands.`},
{id:'e2b',cat:'site',n:'Parking lot paving start / execution window',s:'2026-05-20',e:'2026-05-31',st:'todo',pct:0,priority:'soon',cost:15000,notes:`Owner: Brandon / ACT Asphalt
Latest timing: ACT Asphalt believes work can start around May 20.
Goal: have the parking lot started, if not fully completed, by the end of May.
Cash assumption: placeholder for remaining payment at completion until the formal quote is received.`},
{id:'c5',cat:'ops',n:'Lock day-stock vs true-vault direction',s:'2026-04-14',e:'2026-04-24',st:'active',pct:70,priority:'soon',cost:0,notes:`Preferred path remains split day-stock vs true vault.`},
{id:'c5b',cat:'ops',n:'Lock rolling-shutter opening size and place order',s:'2026-04-16',e:'2026-04-30',st:'active',pct:40,priority:'soon',cost:5000,notes:`One month lead time risk remains, but the immediate field-work priority is now the sales-counter frame / quartz order path.
Twin City Garage RFQ sent.
Cash assumption: using roughly $5k as the current garage-door / rolling-shutter purchase placeholder until real quote direction lands. Main risk is not just price, it is whether the lower-cost door still meets security, durability, mounting, and operational needs.`},
{id:'c1',cat:'ops',n:'SOP + operating plan drafting',s:'2026-04-21',e:'2026-05-14',st:'todo',pct:0,priority:'later',cost:2500,notes:`Kick off once design/build path is clearer.\nCash assumption: working placeholder for Canopyspire / compliance drafting help.`},
{id:'c2',cat:'ops',n:'Final Plan of Record assembly & OCM submission',s:'2026-05-21',e:'2026-05-28',st:'todo',pct:0,priority:'later',cost:0,notes:`Late-May target still matters for Aug 1.`},
{id:'pos1',cat:'retail',n:'POS registers and hardware purchase',s:'2026-05-15',e:'2026-06-05',st:'todo',pct:0,priority:'later',cost:4800,notes:`Owner: Brandon\nCash assumption: about $1,600 per register/hardware set, currently modeled as 3 stations / units.`}
]
};
