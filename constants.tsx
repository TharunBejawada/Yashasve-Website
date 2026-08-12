import type { DoctorProfile, Service, FAQ, Testimonial, ProcessStep, TrustSignal, Condition, WhyUsCard, ClinicPhoto } from './types';

// PLACEHOLDER: All contact information, credentials, and statistics below must be
// verified with Dr. Yashasve and replaced with real values before launch.

export const DOCTOR_PROFILE: DoctorProfile = {
  name: "Dr. Yashasve",
  title: "Consultant Dermatologist & Cosmetologist",
  qualifications: "MBBS, MD (Dermatology, Venereology & Leprosy)",
  regNumber: "TSMC-XXXXX", // PLACEHOLDER: Replace with real TSMC registration number
  bio: "Dr. Yashasve is a leading dermatologist known for his ethical, evidence-based approach to skin and hair care. With a focus on sustainable results, he specialises in treating chronic skin conditions and performing advanced aesthetic procedures with precision and safety.",
  hospital: "Suseela Hospital",
  location: "Kothapet, LB Nagar, Hyderabad, Telangana",
  phone: "+91 81431 79457",
  whatsapp: "918143179457",
  email: "dryashasvedermatologist@gmail.com", // PLACEHOLDER: Replace with real email
  mapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.463376789!2d78.53!3d17.43!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae1!2sSuseela%20Hospital!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin", // PLACEHOLDER: Replace with real Google Maps embed URL
  hours: [
    "Mon - Sat: 10:00 AM - 01:00 PM",
    "Mon - Sat: 05:00 PM - 09:00 PM",
    "Sunday: By Appointment Only",
  ],
  philosophy: "Dr. Yashasve advocates for a measured approach to dermatology — focusing on restoring skin health over time rather than aggressive quick fixes that damage the skin barrier. He specialises in acne scar revision and anti-aging treatments that respect the natural anatomy of the face.", // PLACEHOLDER: Verify this is Dr. Yashasve's actual philosophy
  education: [
    // PLACEHOLDER: Verify all dates and institutions with Dr. Yashasve
    { year: "2016", description: "MD Dermatology, Venereology & Leprosy (Gold Medalist)" },
    { year: "2013", description: "MBBS, Osmania Medical College, Hyderabad" },
  ],
  memberships: [
    // PLACEHOLDER: Verify current membership status
    "Life Member, Indian Association of Dermatologists, Venereologists and Leprologists (IADVL)",
    "Member, Cosmetic Dermatology Society of India (CDSI)",
    "Awarded Best Paper Presentation at DERMACON 2015", // PLACEHOLDER: Verify this award
  ],
  googleRating: {
    score: 4.9, // PLACEHOLDER: Use actual Google Business Profile rating
    count: 54, // PLACEHOLDER: Use actual review count
  },
  stats: [
    // PLACEHOLDER: Verify all statistics with Dr. Yashasve's practice records
    { value: "8+", label: "Years Exp.", iconName: "Award" },
    { value: "5k+", label: "Happy Patients", iconName: "User" },
    { value: "6,000+", label: "Procedures", iconName: "Settings" },
    { value: "30k+", label: "Treatments", iconName: "Gem" },
  ],
  heroHighlight: {
    value: "15+", // PLACEHOLDER: Verify award count — bio lists only 1 specific award
    label: "Awards",
  },
  established: "2016", // PLACEHOLDER: Verify when practice was established
};

export const SERVICES: Service[] = [
  {
    id: 'acne-scars',
    title: 'Acne & Scar Treatment',
    category: 'Skin',
    shortDescription: 'Comprehensive management of active acne and post-acne scarring.',
    fullDescription: 'Persistent breakouts and the scars they leave behind respond well to a multi-layered treatment strategy. Medical management addresses active inflammation at its source, while procedural therapies such as chemical peels and microneedling work to resurface and remodel damaged skin over time. Each plan is tailored after a thorough skin assessment, and results vary between individuals.',
    candidates: 'Individuals with active acne, hormonal breakouts, or residual scarring.',
    procedure: 'Consultation followed by topical/oral medication. Procedures like peels or microneedling may be suggested.',
    downtime: 'Minimal to 2-3 days redness depending on procedure.',
    iconName: 'Microscope',
    detailedContent: {
      overview: [
        "Acne is one of the most common skin conditions treated at Suseela Hospital, affecting patients from adolescence through adulthood. Beyond the visible breakouts, acne carries a significant emotional burden — affecting confidence, social interactions, and self-image.",
        "Effective acne management requires identifying the specific type and triggers: hormonal fluctuations, bacterial overgrowth, excess sebum, or inflammatory responses. Dr. Yashasve designs treatment plans that address the root cause rather than merely suppressing symptoms, combining medical management with procedural therapies where appropriate.",
        "For existing scars — ice-pick, boxcar, rolling, or post-inflammatory marks — a multi-modal approach using microneedling, chemical peels, subcision, and fractional lasers can significantly improve skin texture over a series of sessions. Complete erasure of deep scars is not always possible, but substantial improvement is achievable for most patients."
      ],
      howItWorks: "Treatment begins with a thorough skin assessment including the type and severity of acne, scar types, skin sensitivity, and contributing factors. For active acne, a medical regimen (topical retinoids, antibiotics, or hormonal therapy) is prescribed. Once active inflammation is controlled, procedural treatments for scarring can begin — typically microneedling, chemical peels, or laser sessions spaced 3-4 weeks apart. Each session stimulates collagen remodelling in the scarred tissue, gradually smoothing the skin surface.",
      benefits: ["Addresses both active acne and scarring in a unified plan", "Medical management targets the root cause of breakouts", "Multiple procedural options available for different scar types", "Customised approach for each patient's skin type and concern", "Progressive improvement over a treatment course"],
      sideEffects: "Topical treatments may cause initial dryness or mild irritation (usually resolves within 2 weeks). Procedural treatments cause temporary redness for 1-3 days. Oral medications have specific considerations discussed during consultation. Results require patience — acne management is a 3-6 month process, not an overnight fix.",
      sessionInfo: { duration: "30-45 minutes per session", sessions: "4-8 sessions for scarring", frequency: "Every 3-4 weeks", resultsIn: "Active acne: 4-6 weeks. Scars: progressive over 3-6 months" },
      preCare: ["Bring a list of all current skincare products and medications", "Avoid harsh scrubs or exfoliants for 3 days before procedural treatments", "Take photographs for progress tracking"],
      postCare: ["Follow the prescribed skincare routine consistently", "Sunscreen is mandatory — UV exposure worsens both acne and scars", "Do not pick or squeeze active breakouts", "Attend follow-up appointments to track progress and adjust treatment"],
      faqs: [
        { question: "Can acne be permanently cured?", answer: "Acne can be effectively controlled and managed long-term. For some patients, treatment leads to lasting clearance. For others — particularly those with hormonal drivers — maintenance therapy may be needed. The goal is clear, healthy skin with the simplest possible regimen." },
        { question: "How long before I see improvement?", answer: "Active acne typically shows visible improvement within 4-6 weeks of starting treatment. Scar revision is a longer process — meaningful improvement develops over 3-6 months of regular sessions." },
        { question: "Will the scars disappear completely?", answer: "Deep scars can be significantly improved but may not be completely erased. The realistic goal is smoother, more even skin texture. Dr. Yashasve sets honest expectations during the initial assessment." },
      ],
    },
  },
  {
    id: 'pigmentation',
    title: 'Pigmentation & Melasma',
    category: 'Skin',
    shortDescription: 'Targeted therapies for melasma, sun spots, and uneven skin tone.',
    fullDescription: 'Stubborn dark patches and uneven tone often have deep-seated triggers including sun exposure, hormonal shifts, and post-inflammatory changes. Treatment combines medical-grade topical regimens with advanced modalities like laser toning and chemical exfoliation to gradually reduce melanin deposits. Patience and sun protection are key — improvements build over multiple sessions, and individual responses vary.',
    candidates: 'Patients dealing with melasma, sun damage, or post-inflammatory hyperpigmentation.',
    procedure: 'Topical regimen combined with laser toning or chemical exfoliation.',
    downtime: 'None to mild flaking.',
    iconName: 'Sparkles',
    detailedContent: {
      overview: [
        "Pigmentation disorders — melasma, solar lentigines, and post-inflammatory hyperpigmentation — are among the most common dermatological concerns in Indian skin types. The combination of high UV exposure in Hyderabad, hormonal influences, and genetic predisposition makes these conditions both prevalent and persistent.",
        "Treatment requires patience and a layered approach: topical depigmenting agents to inhibit melanin production, procedural therapies (laser toning, chemical peels) to break down existing pigment deposits, and rigorous sun protection to prevent re-darkening. Dr. Yashasve assesses the type, depth, and cause of your pigmentation before designing a protocol.",
        "Melasma in particular is a chronic condition — it can be effectively managed but requires ongoing maintenance. Setting realistic expectations from the start is essential for a successful treatment journey."
      ],
      howItWorks: "A clinical and sometimes dermoscopic assessment determines the type and depth of pigmentation. A customised protocol is designed combining medical-grade topical agents (hydroquinone, arbutin, tranexamic acid, retinoids), in-clinic procedures (laser toning, chemical peels), and strict photoprotection. Treatments are spaced 2-4 weeks apart, with gradual lightening visible over the course.",
      benefits: ["Addresses multiple types of pigmentation simultaneously", "Combination approach for faster, more sustained results", "Treatments calibrated for Indian skin types", "Progressive improvement with each session", "Ongoing management plan to prevent recurrence"],
      sideEffects: "Mild redness or flaking after peels and laser sessions. Temporary sensitivity to sunlight — strict SPF use is mandatory. Improper treatment can worsen pigmentation in darker skin types, which is why dermatologist supervision is critical.",
      sessionInfo: { duration: "20-30 minutes per session", sessions: "6-10 sessions", frequency: "Every 2-4 weeks", resultsIn: "Visible lightening from session 3-4" },
      preCare: ["Start sunscreen use (SPF 30+) at least 1 week before", "Discontinue retinoids 5 days before procedural sessions", "Avoid waxing the treatment area for 48 hours"],
      postCare: ["Sunscreen every 2-3 hours is non-negotiable", "Follow the prescribed topical regimen between sessions", "Avoid direct sun exposure, especially 10 AM - 4 PM", "Use a wide-brimmed hat outdoors"],
      faqs: [
        { question: "Will my pigmentation come back after treatment?", answer: "Melasma is a chronic condition with a tendency to recur, especially with sun exposure or hormonal changes. Maintenance treatments and diligent sun protection significantly reduce recurrence." },
        { question: "How long does treatment take?", answer: "A visible improvement is typically seen after 3-4 sessions over 6-8 weeks. Full results develop over 3-6 months. Maintenance is ongoing." },
        { question: "Is laser treatment safe for dark Indian skin?", answer: "When performed by an experienced dermatologist using appropriate laser settings and parameters for Indian skin types, laser toning is safe and effective. Incorrect settings can cause adverse effects, making specialist supervision essential." },
      ],
    },
  },
  {
    id: 'hair-loss',
    title: 'Hair Fall & PRP/GFC',
    category: 'Hair',
    shortDescription: 'Advanced hair restoration using Growth Factor Concentrate (GFC) and PRP.',
    fullDescription: 'Early intervention is key in managing hair thinning and pattern loss. After identifying the type and stage of alopecia through clinical examination, treatment may range from medical management to injectable therapies that harness the body\'s own growth factors to stimulate dormant follicles. Mild scalp tenderness for 24 hours is common after injectable sessions. Results vary between individuals and depend on the stage of hair loss.',
    candidates: 'Men and women experiencing thinning hair, pattern baldness, or telogen effluvium.',
    procedure: 'Blood draw followed by separation of growth factors, injected into the scalp.',
    downtime: 'Mild scalp tenderness for 24 hours is common. Most patients return to work the same day.',
    iconName: 'Droplet',
    detailedContent: {
      overview: ["Hair loss affects both men and women, often beginning subtly with increased shedding or a widening part line. Early intervention is key — the sooner treatment begins, the more follicles can be preserved and revitalised.", "PRP (Platelet-Rich Plasma) and GFC (Growth Factor Concentrate) therapies use the patient's own blood-derived growth factors to stimulate dormant follicles and improve hair density. These treatments are backed by growing clinical evidence and are considered safe due to the autologous (self-derived) nature of the injected material.", "Dr. Yashasve begins with a thorough diagnosis to identify the type of hair loss — androgenetic, telogen effluvium, alopecia areata, or nutritional — before recommending a treatment plan. Medical management may be sufficient for some patients, while others benefit from injectable therapies."],
      howItWorks: "A small volume of blood is drawn and processed in a centrifuge to isolate the platelet-rich fraction. This concentrated preparation — rich in PDGF, VEGF, and other growth factors — is injected into the scalp at the level of the hair follicles using a fine needle. The growth factors stimulate follicular stem cells, improve local blood supply, and prolong the active growth phase (anagen) of the hair cycle.",
      benefits: ["Uses your own blood — no synthetic substances", "Stimulates dormant follicles into active growth", "Improves hair thickness and density over time", "Safe with minimal side effects", "Can be combined with medical therapy for enhanced results"],
      sideEffects: "Mild scalp tenderness and small bumps at injection sites for 24 hours. Occasional headache on treatment day. Very rare: infection at injection sites (minimised by sterile technique). Not effective for completely bald areas where follicles are permanently lost.",
      sessionInfo: { duration: "30-45 minutes", sessions: "4-6 sessions initial course", frequency: "Monthly initially, then quarterly maintenance", resultsIn: "Reduced shedding in 4-6 weeks; visible density at 3-4 months" },
      preCare: ["Wash hair with a gentle shampoo before the session", "Avoid blood thinners for 48 hours", "Stay well-hydrated for better blood draw quality"],
      postCare: ["Do not wash hair for 6-8 hours", "Avoid helmet/cap for 24 hours", "Continue prescribed oral medications alongside", "Gentle scalp massage after 48 hours can aid absorption"],
      faqs: [
        { question: "What is the difference between PRP and GFC?", answer: "Both use your own blood. PRP contains platelets in a plasma base. GFC is a newer technique that extracts a higher concentration of specific growth factors with fewer inflammatory components. Dr. Yashasve recommends based on your specific condition." },
        { question: "How many sessions do I need?", answer: "An initial course of 4-6 monthly sessions is typical. Maintenance sessions every 3-4 months help sustain results. The total number depends on the severity and type of hair loss." },
        { question: "Can PRP regrow hair on completely bald areas?", answer: "PRP/GFC works best on thinning areas where follicles are weakened but still present. Completely bald areas with no viable follicles will not respond to injectable therapy." },
      ],
    },
  },
  {
    id: 'anti-aging',
    title: 'Anti-Aging & Aesthetics',
    category: 'Body',
    shortDescription: 'Botox, fillers, and skin tightening for natural-looking rejuvenation.',
    fullDescription: 'Subtle volume restoration and wrinkle softening can refresh the appearance without altering natural expression. Treatments are customised after facial assessment, using precise injection techniques and medical-grade products. The goal is always to enhance — not change — how you look. Results are typically visible immediately for fillers, while neurotoxin effects develop over 5-7 days. Individual outcomes may vary.',
    candidates: 'Individuals looking to reduce fine lines, wrinkles, or volume loss.',
    procedure: 'Injectable treatments performed with high precision and numbing cream.',
    downtime: '24-48 hours of mild swelling or bruising may occur.',
    iconName: 'Syringe',
    detailedContent: {
      overview: ["Ageing is a natural process, but its visible signs — fine lines, volume loss, skin laxity — can be managed effectively with modern non-surgical techniques. The key is subtlety: the goal is refreshment, not transformation.", "Dr. Yashasve's approach to anti-aging centres on facial harmonisation — restoring what time has taken away while respecting the patient's natural features. This may involve neurotoxin injections (to relax dynamic wrinkles), hyaluronic acid fillers (to restore volume), or skin tightening procedures.", "Every treatment plan is customised after a detailed facial assessment. The emphasis is always on natural-looking results that enhance confidence without creating an obviously 'treated' appearance."],
      howItWorks: "The consultation begins with a facial analysis examining volume loss, dynamic lines, static wrinkles, and skin quality. Treatment may include botulinum toxin for forehead lines, crow's feet, and frown lines (relaxing the muscles that cause them), fillers for cheek volume, nasolabial folds, and jawline definition, or energy-based devices for overall skin tightening. Multiple modalities may be combined in a single session.",
      benefits: ["Non-surgical with minimal downtime", "Natural-looking rejuvenation", "Customised combination treatments", "Results visible within days to weeks", "Treatments are reversible (HA fillers)", "Preventive approach slows future ageing"],
      sideEffects: "Botox: mild bruising, headache (rare), results take 5-7 days to appear. Fillers: swelling for 24-48 hours, bruising possible. All effects are temporary. Serious complications are extremely rare with experienced practitioners.",
      sessionInfo: { duration: "20-45 minutes", sessions: "Varies by treatment type", frequency: "Botox: every 4-6 months. Fillers: every 8-18 months", resultsIn: "Botox: 5-7 days. Fillers: immediate" },
      preCare: ["Avoid blood thinners for 48 hours", "No alcohol for 24 hours before", "Discuss all medications and supplements"],
      postCare: ["Avoid lying flat for 4 hours after Botox", "No intense exercise for 24 hours", "Apply ice for swelling if needed", "Avoid facial massage for 48 hours"],
      faqs: [
        { question: "At what age should I start anti-aging treatments?", answer: "There is no fixed age — it depends on individual skin quality, genetics, and concerns. Preventive Botox (to slow wrinkle formation) is common from the late 20s. Fillers are typically relevant from the mid-30s onwards." },
        { question: "Will I look frozen or unnatural?", answer: "Not with a conservative approach. Dr. Yashasve uses precise doses to maintain natural facial expression. The goal is 'refreshed', not 'frozen'." },
        { question: "How long do results last?", answer: "Botox: 4-6 months. Fillers: 8-18 months depending on the area and product. Regular maintenance keeps results consistent." },
      ],
    },
  },
  {
    id: 'laser-hair',
    title: 'Laser Hair Reduction',
    category: 'Body',
    shortDescription: 'Long-term hair reduction using medical-grade diode lasers suited for all skin types.',
    fullDescription: 'Medical-grade laser systems target hair follicles beneath the skin surface while cooling technology keeps the process comfortable. Significant reduction in hair growth develops progressively over a series of sessions spaced 4-6 weeks apart. The approach is calibrated for each patient\'s skin type and hair density, and results vary depending on individual factors like hormonal profile and hair coarseness.',
    candidates: 'Anyone seeking long-term reduction of unwanted body or facial hair.',
    procedure: 'Laser energy pulses target hair roots. Cooling technology ensures comfort.',
    downtime: 'None. Sun protection is essential for 2 weeks post-session.',
    iconName: 'Zap',
    detailedContent: {
      overview: ["Laser hair reduction offers a long-term solution for unwanted body and facial hair that eliminates the cycle of waxing, shaving, and threading. Medical-grade diode and Nd:YAG lasers target the melanin in hair follicles, delivering controlled thermal energy that damages the follicle's ability to produce new hair.", "The procedure is calibrated for each patient's skin type and hair characteristics — Indian skin types (Fitzpatrick IV-V) require specific wavelengths and settings to ensure safety and efficacy. Dr. Yashasve personally supervises all laser sessions to ensure appropriate parameters are used.", "Significant hair reduction (70-90%) is achievable over a course of 6-8 sessions. Complete permanent removal is not guaranteed — hormonal factors can trigger new hair growth, and periodic maintenance sessions may be needed."],
      howItWorks: "The laser emits a concentrated beam of light that is absorbed by the melanin (pigment) in the hair shaft. The absorbed energy converts to heat, which damages the follicle and inhibits future growth. Only hairs in the active growth phase (anagen) are affected, which is why multiple sessions are needed to catch all hairs as they cycle through this phase. Cooling technology protects the skin surface during treatment.",
      benefits: ["Long-term hair reduction (70-90%)", "Eliminates ingrown hairs and razor bumps", "Suitable for face, underarms, legs, bikini, back, and chest", "Each session is quick (15-45 minutes depending on area)", "Skin becomes smoother over the course", "Safe for Indian skin with correct parameters"],
      sideEffects: "Mild warmth and redness for 1-2 hours post-session. Occasional perifollicular oedema (small bumps around follicles) — this indicates the follicles responded to treatment. Rare: temporary pigment changes in darker skin types. Burns are preventable with correct settings and experienced practitioners.",
      sessionInfo: { duration: "15-45 minutes per area", sessions: "6-8 sessions", frequency: "Every 4-6 weeks", resultsIn: "Progressive reduction after each session; significant results by session 4" },
      preCare: ["Shave the treatment area 24 hours before (do not wax or pluck)", "Avoid sun exposure for 2 weeks before", "Discontinue self-tanning products for 2 weeks", "No bleaching of hair in the treatment area"],
      postCare: ["Apply SPF 30+ to treated areas exposed to sun", "Avoid hot showers, saunas, and pools for 48 hours", "Do not wax or pluck between sessions — shaving is fine", "Mild redness resolves within hours; apply aloe if needed"],
      faqs: [
        { question: "Is laser hair reduction permanent?", answer: "It provides long-term significant reduction. Most patients see 70-90% less hair growth after a full course. Some maintenance sessions may be needed annually for hormonal regrowth." },
        { question: "Does it hurt?", answer: "Modern lasers with cooling technology make the procedure tolerable. Most patients describe a warm snapping sensation. Sensitive areas may cause mild discomfort that subsides quickly." },
        { question: "Can it be done on all skin types?", answer: "Yes — Nd:YAG lasers are specifically designed for darker skin types. The key is using the correct wavelength and settings. This is why treatment by a dermatologist is safer than at a salon." },
      ],
    },
  },
  {
    id: 'medical-derm',
    title: 'Clinical Dermatology',
    category: 'Wellness',
    shortDescription: 'Expert diagnosis for eczema, psoriasis, fungal infections, and allergies.',
    fullDescription: 'Chronic skin conditions — including eczema, psoriasis, vitiligo, and recurrent infections — affect quality of life far beyond the skin surface. A thorough clinical examination identifies the underlying drivers, and long-term management plans are designed to reduce flares, control symptoms, and improve daily comfort. Each plan accounts for lifestyle factors, local climate, and individual triggers.',
    candidates: 'Patients with rashes, itching, chronic skin diseases, or infections.',
    procedure: 'Thorough clinical examination and biopsy if needed.',
    downtime: 'Not applicable.',
    iconName: 'Stethoscope',
    detailedContent: {
      overview: ["Clinical dermatology forms the foundation of Dr. Yashasve's practice. Chronic conditions like eczema, psoriasis, vitiligo, fungal infections, and allergic dermatitis require accurate diagnosis and sustained management — not one-off treatments.", "Hyderabad's climate — with its high humidity, hard water, and significant pollution — contributes to the prevalence of skin conditions that need specialist attention. Seasonal flares, occupational exposures, and stress-related exacerbations are all factors considered during assessment.", "The approach is holistic: identify the condition precisely, understand the patient's triggers and lifestyle factors, design a management plan that controls symptoms and prevents flares, and adjust over time as the condition evolves."],
      howItWorks: "Clinical assessment begins with a detailed history and physical examination. Dermoscopy, skin scrapings, KOH mounts, or biopsies may be performed when needed for definitive diagnosis. Treatment protocols typically combine topical therapy (corticosteroids, calcineurin inhibitors, antifungals), systemic medication when warranted, and lifestyle modifications (trigger avoidance, moisturising routines, dietary guidance).",
      benefits: ["Accurate diagnosis using clinical and dermoscopic evaluation", "Long-term management plans, not just symptom relief", "Treatment protocols adjusted to Hyderabad's local environment", "Holistic approach covering medication, lifestyle, and prevention", "Biopsy and lab testing available on-site"],
      sideEffects: "Topical steroids (if prescribed) are used for limited durations to avoid thinning. Systemic medications are monitored through regular blood tests. Side effect management is built into every treatment plan.",
      sessionInfo: { duration: "20-30 minutes", sessions: "Initial + follow-ups at 2-4 weeks", frequency: "Varies by condition", resultsIn: "Symptom relief within 1-2 weeks; long-term control over 4-8 weeks" },
      preCare: ["List all current medications and supplements", "Note any known triggers or patterns in your flares", "Bring photographs of the condition at its worst if possible"],
      postCare: ["Follow the prescribed regimen consistently", "Use the recommended moisturiser daily", "Attend follow-up appointments even if symptoms improve", "Report any unexpected side effects promptly"],
      faqs: [
        { question: "Is there a cure for eczema/psoriasis?", answer: "These are chronic conditions — they can be effectively controlled but not permanently cured. Modern treatment allows most patients to lead comfortable, flare-free lives with proper management." },
        { question: "Why do I need a dermatologist for a skin rash?", answer: "Many skin conditions look similar but require different treatments. A dermatologist can differentiate between conditions that appear identical to the untrained eye and prescribe targeted therapy." },
        { question: "Can diet affect my skin condition?", answer: "For some conditions (like eczema and urticaria), dietary triggers play a role. Dr. Yashasve can guide you on evidence-based dietary modifications relevant to your specific condition." },
      ],
    },
  },
  {
    id: 'hydrafacial',
    title: 'Medifacials & Hydration',
    category: 'Skin',
    shortDescription: 'Medical-grade facials for deep cleansing and improved skin texture.',
    fullDescription: 'Unlike salon facials, medifacials use clinically active ingredients to deeply cleanse, exfoliate, and hydrate the skin under dermatologist supervision. The multi-step process addresses specific concerns like dullness, congestion, and dehydration. Skin may appear brighter immediately after the procedure, though long-term improvement requires consistent sessions.',
    candidates: 'Suitable for event preparation or routine skin maintenance.',
    procedure: 'Multi-step process involving cleansing, exfoliation, extraction, and hydration.',
    downtime: 'No downtime; skin may appear brighter immediately.',
    iconName: 'ScanFace',
    detailedContent: {
      overview: ["Medical-grade facials — or medifacials — bridge the gap between salon treatments and clinical procedures. Unlike salon facials that rely on cosmetic-grade products, medifacials use active pharmaceutical and dermatological ingredients under dermatologist supervision.", "The multi-step process — cleansing, exfoliation, extraction, infusion, and hydration — is customised to your specific skin concern. Whether it's pre-event preparation, routine skin maintenance, or addressing dullness and congestion, medifacials deliver clinical-grade results in a single session.", "These treatments are an excellent entry point for patients new to dermatological procedures — they are comfortable, have zero downtime, and provide immediately visible improvement in skin clarity and glow."],
      howItWorks: "The skin is deep-cleansed to remove surface debris. Depending on the protocol, a gentle chemical exfoliant or enzymatic peel is applied to loosen dead cells. Extraction of blackheads and congestion is performed manually or with a device. Active serums — containing hyaluronic acid, vitamins, peptides, or brightening agents — are infused into the skin. A soothing mask and SPF complete the treatment. The entire process takes 45-60 minutes.",
      benefits: ["Immediate visible improvement in radiance", "Deep pore cleansing and extraction", "Customisable for different skin concerns", "Zero downtime — return to activities immediately", "Medical-grade active ingredients", "Excellent preparation before events"],
      sideEffects: "Minimal — mild redness for 1-2 hours in some patients. No peeling or flaking. Skin may be slightly more sensitive to sun for 24 hours. Extractions may leave temporary marks that resolve within hours.",
      sessionInfo: { duration: "45-60 minutes", sessions: "Monthly for maintenance", frequency: "Every 3-4 weeks", resultsIn: "Immediate glow; cumulative improvement with regular sessions" },
      preCare: ["Arrive with clean, makeup-free skin", "Avoid retinoids for 2 days before", "Inform the doctor of any active breakouts or sensitivities"],
      postCare: ["Apply SPF 30+ sunscreen", "Avoid heavy makeup for 6-8 hours", "Use a gentle moisturiser as directed", "Stay hydrated for maximum benefit"],
      faqs: [
        { question: "How is a medifacial different from a salon facial?", answer: "Medifacials use pharmaceutical-grade active ingredients and are supervised by a dermatologist. They can include chemical exfoliants, prescription-strength serums, and clinical extraction techniques not available in salon settings." },
        { question: "How often should I get a medifacial?", answer: "Monthly sessions provide the best cumulative results. Before a special event, a session 5-7 days beforehand is ideal to allow any mild redness to resolve completely." },
        { question: "Can I get a medifacial if I have acne?", answer: "Yes — specific medifacial protocols are designed for acne-prone skin, using salicylic acid and antibacterial ingredients. Active cystic acne may require medical treatment first." },
      ],
    },
  },
  {
    id: 'skin-surgery',
    title: 'Skin Surgery',
    category: 'Wellness',
    shortDescription: 'Removal of moles, warts, skin tags, and cysts.',
    fullDescription: 'Benign skin growths that are bothersome, cosmetically concerning, or changing in appearance can be safely removed using radiofrequency or excision techniques under local anaesthesia. The approach is selected to minimise scarring and ensure complete removal. A histopathological examination may be recommended for certain lesions.',
    candidates: 'Patients with bothersome moles, skin tags, or cysts.',
    procedure: 'Local anaesthesia followed by removal using radiofrequency or excision.',
    downtime: '5-7 days for small scab healing.',
    iconName: 'ShieldCheck',
    detailedContent: {
      overview: [
        "Skin growths such as moles, warts, skin tags, and sebaceous cysts are extremely common and usually benign. However, they may cause discomfort due to friction with clothing, affect appearance, or occasionally show changes that warrant medical evaluation.",
        "Dermatological surgery at Suseela Hospital uses precise techniques — including radiofrequency ablation and surgical excision — to remove these growths with minimal scarring. Each lesion is assessed clinically, and the removal method is chosen based on its size, location, and nature.",
        "For any lesion showing recent changes in colour, size, or shape, a histopathological examination is recommended to rule out atypical findings. Safety and thoroughness take priority over speed."
      ],
      howItWorks: "After clinical assessment, the area is cleaned and numbed with local anaesthesia. Depending on the growth type, radiofrequency is used for superficial lesions (tags, small warts) or a surgical excision is performed for deeper growths (cysts, larger moles). The procedure typically takes 15-30 minutes. Specimens may be sent for laboratory analysis when indicated.",
      benefits: ["Immediate removal in a single visit", "Minimal scarring with proper technique", "Histopathology available for suspicious lesions", "Quick recovery for most procedures", "Performed in a hospital setting with sterilisation protocols"],
      sideEffects: "Mild discomfort at the site for 1-2 days. A small scab forms and heals within 5-7 days. Temporary redness or slight pigmentation change at the site is normal. Scarring risk is low but depends on the location and size of the growth. Infection is rare when post-care instructions are followed.",
      sessionInfo: { duration: "15-30 minutes", sessions: "Usually 1 session", frequency: "One-time procedure", resultsIn: "Immediate removal; healing in 5-7 days" },
      preCare: ["Inform the doctor of any blood-thinning medications", "Keep the area clean on the day of the procedure", "No special fasting or preparation is needed for local anaesthesia"],
      postCare: ["Keep the wound dry for 24 hours", "Apply prescribed antibiotic ointment as directed", "Avoid direct sun exposure on the healing area", "Do not pick at the scab — allow it to fall off naturally", "Return for follow-up if histopathology was performed"],
      faqs: [
        { question: "Will the removal leave a scar?", answer: "Modern techniques minimise scarring significantly. The extent depends on the size and location of the growth. Dr. Yashasve selects the method that offers the best cosmetic outcome for each case." },
        { question: "How do I know if a mole is concerning?", answer: "Changes in colour, irregular borders, rapid growth, itching, or bleeding are signs that warrant evaluation. A clinical and dermoscopic examination can assess whether further investigation is needed." },
        { question: "Is the procedure painful?", answer: "Local anaesthesia numbs the area completely. You may feel mild pressure but no pain during the procedure. Post-procedure discomfort is typically mild and manageable." },
      ],
    },
  },

  // ===== NEW SERVICES — Skin Category =====
  {
    id: 'carbon-peel',
    title: 'Carbon Peel',
    category: 'Skin',
    shortDescription: 'Laser-assisted deep cleansing that targets oiliness, enlarged pores, and dull skin.',
    fullDescription: 'A specialised carbon lotion is applied to the skin and then targeted with a specific laser wavelength. The laser energy vaporises the carbon particles along with dead skin cells, excess oil, and contaminants lodged in the pores. The process simultaneously stimulates collagen remodelling beneath the surface. Results vary between individuals.',
    candidates: 'Individuals with oily skin, enlarged pores, dull complexion, or mild acne.',
    procedure: 'Carbon lotion applied, allowed to dry, then treated with laser passes. Takes about 20-30 minutes.',
    downtime: 'None — sometimes called a "lunchtime peel". Mild redness for a few hours.',
    iconName: 'Flame',
    detailedContent: {
      overview: [
        "The carbon peel — sometimes referred to as the carbon laser facial — combines a medical-grade carbon lotion with targeted laser energy to achieve deep cleansing that goes well beyond what topical products can reach.",
        "When the laser interacts with the carbon particles, it creates a controlled micro-exfoliation effect. Oil, dead cells, and debris trapped in the pores are expelled along with the carbon. The thermal energy from the laser also stimulates the deeper skin layers to produce fresh collagen over the following weeks.",
        "This treatment is particularly well-suited for Hyderabad's humid climate, where oiliness and clogged pores are persistent concerns for many patients. It requires no downtime, making it practical for those with demanding schedules."
      ],
      howItWorks: "A thin layer of medical-grade carbon lotion is spread across the treatment area and allowed to penetrate the pores for 10-15 minutes. A Q-switched Nd:YAG laser is then passed over the skin in two phases: first to heat the carbon and stimulate collagen, then to vaporise the carbon along with surface impurities. The entire process takes about 20-30 minutes and produces a mild snapping sensation.",
      benefits: ["Deep pore cleansing beyond surface level", "Reduces oiliness and shine", "Improves skin texture and smoothness", "Stimulates collagen for gradual skin tightening", "No downtime — return to activities immediately", "Suitable for most skin types"],
      sideEffects: "Mild warmth and slight redness immediately after the session, resolving within a few hours. No peeling or flaking is expected. Temporary sensitivity to sunlight for 48 hours. Not recommended during active breakouts with open lesions.",
      sessionInfo: { duration: "20-30 minutes", sessions: "4-6 sessions recommended", frequency: "Every 2-3 weeks", resultsIn: "Noticeable after 2-3 sessions" },
      preCare: ["Arrive with clean skin, free of makeup or sunscreen", "Avoid retinoids for 3 days before treatment", "Inform the doctor of any recent sun exposure or active skin conditions"],
      postCare: ["Apply broad-spectrum SPF 30+ sunscreen immediately after", "Avoid direct sun exposure for 48 hours", "Use a gentle, non-abrasive cleanser for 2-3 days", "Moisturise regularly to support recovery"],
      faqs: [
        { question: "Does the carbon peel hurt?", answer: "Most patients describe a mild snapping or tingling sensation during the laser passes. The procedure is well-tolerated without anaesthesia." },
        { question: "How many sessions do I need?", answer: "A course of 4-6 sessions spaced 2-3 weeks apart is typical for best results. Maintenance sessions every 1-2 months help sustain the improvement." },
        { question: "Can I wear makeup after?", answer: "It is advisable to keep the skin bare for 6-8 hours after the session. Mineral makeup may be applied the following day." },
      ],
    },
  },
  {
    id: 'laser-toning',
    title: 'Laser Toning',
    category: 'Skin',
    shortDescription: 'Gentle laser sessions that gradually reduce tan, pigmentation, and open pores.',
    fullDescription: 'Laser toning uses low-fluence laser passes delivered at specific wavelengths to break down excess melanin deposits without damaging the surrounding skin. Over a series of sessions, uneven tone, solar tan, and patchy discolouration are visibly reduced. The treatment also has a mild pore-tightening effect due to collagen stimulation. Individual results depend on the depth and type of pigmentation.',
    candidates: 'Patients with sun tan, uneven skin tone, post-inflammatory marks, or open pores.',
    procedure: 'Multiple low-energy laser passes across the treatment area. Mild warmth is felt during the session.',
    downtime: 'None to minimal. Mild redness for a few hours is common.',
    iconName: 'Sun',
    detailedContent: {
      overview: [
        "Laser toning is a non-ablative approach to pigmentation management — meaning it works beneath the skin surface without removing or wounding the outer layer. This makes it significantly gentler than ablative laser treatments, with virtually no downtime.",
        "The Q-switched Nd:YAG laser delivers energy at a low fluence (power level) across the skin in rapid passes. This energy selectively fragments melanin pigment clusters into smaller particles that the body's immune system can gradually clear. Over multiple sessions, the overall tone becomes more uniform.",
        "In Hyderabad's climate, where UV exposure is high year-round, laser toning is a practical option for maintaining clear, even-toned skin. It pairs well with a disciplined sunscreen regimen and may be combined with topical lightening agents for enhanced results."
      ],
      howItWorks: "The treated area is cleansed and a cooling gel may be applied. The laser handpiece delivers rapid, low-energy pulses across the skin in overlapping passes. Each session covers the entire area — face, neck, or hands — uniformly. The melanin absorbs the laser energy and breaks into smaller fragments that are cleared by macrophages (immune cells) over the following days. Sessions are spaced to allow this clearance process between treatments.",
      benefits: ["Gradual, natural-looking reduction in pigmentation", "No wounds or peeling — non-ablative approach", "Mild pore-tightening effect", "Can treat face, neck, hands, and other areas", "Works on both sun-induced and hormonal pigmentation", "Safe for Indian skin types when performed correctly"],
      sideEffects: "Mild warmth and temporary pinkness for 2-4 hours. Very rarely, transient darkening of treated pigment (which resolves). Improper technique on darker skin tones can cause paradoxical hyperpigmentation — this is why practitioner expertise matters. Always insist on treatment by a trained dermatologist.",
      sessionInfo: { duration: "20-30 minutes", sessions: "6-10 sessions typical", frequency: "Every 1-2 weeks", resultsIn: "Visible improvement from session 3-4" },
      preCare: ["Apply sunscreen diligently for at least 1 week before starting", "Discontinue retinoids 5 days before", "Avoid waxing or threading the treatment area for 48 hours"],
      postCare: ["Sunscreen (SPF 30+) is mandatory — reapply every 3 hours outdoors", "Avoid direct sun for 48 hours", "Use a calming moisturiser if mild redness occurs", "Continue prescribed topical regimen between sessions"],
      faqs: [
        { question: "Is laser toning safe for dark skin?", answer: "When performed by an experienced dermatologist using appropriate settings, laser toning is safe for Indian skin types (Fitzpatrick IV-V). Incorrect settings can cause side effects, which is why specialist supervision is essential." },
        { question: "Will my pigmentation come back?", answer: "Melasma and hormonal pigmentation are chronic conditions — they can recur with sun exposure or hormonal changes. Maintenance sessions and strict sun protection help sustain results." },
        { question: "Can I combine this with other treatments?", answer: "Laser toning pairs well with chemical peels, topical depigmenting agents, and antioxidant serums. Dr. Yashasve will advise on the optimal combination for your specific pigmentation type." },
      ],
    },
  },
  {
    id: 'chemical-peel',
    title: 'Chemical Peel Therapy',
    category: 'Skin',
    shortDescription: 'Controlled exfoliation using medical-grade acids to renew skin texture and tone.',
    fullDescription: 'Chemical peels apply a carefully selected acid solution to the skin surface, triggering controlled shedding of the outermost layers. As new skin regenerates, texture irregularities, mild scarring, fine lines, and pigmentation are visibly reduced. The depth and type of peel are chosen based on the patient\'s specific concern and skin type. Results build progressively over a course of sessions.',
    candidates: 'Patients with dull skin, superficial scars, fine lines, or uneven pigmentation.',
    procedure: 'Acid solution applied for a calibrated duration, then neutralised. Takes 15-20 minutes.',
    downtime: 'Mild flaking for 2-5 days depending on peel depth.',
    iconName: 'FlaskConical',
    detailedContent: {
      overview: [
        "Chemical peels are among the most versatile tools in a dermatologist's arsenal. By applying a specific acid at a controlled concentration and pH, the outer skin layers are encouraged to shed in a predictable manner. The fresh skin that emerges is typically smoother, more uniform in tone, and less marked by superficial damage.",
        "Peels range from superficial (glycolic, lactic, mandelic acids) to medium-depth (trichloroacetic acid) to deep formulations. For most patients, a series of superficial or medium peels delivers the best balance of results and minimal downtime. Dr. Yashasve selects the peel type, concentration, and duration based on a thorough assessment of your skin type, condition, and goals.",
        "Chemical peels are particularly effective in the Indian climate, where sun damage, post-inflammatory marks, and melasma are widespread concerns. When combined with a targeted homecare regimen, they can deliver significant improvement over 4-6 sessions."
      ],
      howItWorks: "The skin is cleansed and degreased to ensure even absorption. The selected acid solution is applied in controlled layers and left for a precise duration — anywhere from 1 to 10 minutes depending on the peel type and skin tolerance. A mild stinging or warmth is normal. The solution is then neutralised (for certain peels) or allowed to self-neutralise. Over the following 2-5 days, the treated skin sheds naturally, revealing fresher skin beneath.",
      benefits: ["Improves overall skin texture and smoothness", "Reduces superficial acne scars and post-inflammatory marks", "Addresses fine lines and early signs of ageing", "Helps manage active acne by unclogging pores", "Enhances absorption of topical products", "Multiple peel options tailored to different concerns"],
      sideEffects: "Mild stinging during application (resolves in minutes). Redness and tightness for 1-2 days. Flaking and peeling for 2-5 days — this is the intended effect and should not be forced. Temporary sun sensitivity for 1-2 weeks. Darker skin types require careful peel selection to avoid post-inflammatory hyperpigmentation.",
      sessionInfo: { duration: "15-20 minutes", sessions: "4-6 sessions typical", frequency: "Every 2-4 weeks", resultsIn: "Progressive improvement over the course" },
      preCare: ["Discontinue retinoids 5-7 days before", "Avoid waxing, threading, or scrubbing the treatment area for 48 hours", "Start a mild sunscreen regimen at least 1 week before", "Inform the doctor of any recent facial treatments or allergic reactions"],
      postCare: ["Do not peel, scratch, or exfoliate flaking skin", "Apply a gentle, fragrance-free moisturiser liberally", "Strict sunscreen use (SPF 30+) for at least 2 weeks", "Avoid swimming pools, saunas, and steam for 48 hours", "Follow the prescribed post-peel skincare routine"],
      faqs: [
        { question: "Which type of chemical peel is right for me?", answer: "This depends on your skin type, concern, and tolerance. Superficial peels (glycolic, lactic) suit most patients. Medium peels are reserved for deeper concerns. Dr. Yashasve assesses and recommends the appropriate type during consultation." },
        { question: "Is peeling visible after the treatment?", answer: "Mild flaking is common 2-5 days after medium peels. Superficial peels may cause only a slight dryness. The peeling is generally subtle and manageable with moisturiser." },
        { question: "Can chemical peels treat acne?", answer: "Yes — salicylic acid peels are specifically designed for acne-prone skin. They unclog pores, reduce oiliness, and help clear active breakouts when used in a series." },
      ],
    },
  },
  {
    id: 'hifu',
    title: 'HIFU — Skin Tightening',
    category: 'Skin',
    shortDescription: 'Non-invasive ultrasound energy that lifts and tightens sagging skin without surgery.',
    fullDescription: 'High Intensity Focussed Ultrasound (HIFU) delivers concentrated ultrasound energy to precise depths beneath the skin, triggering a natural tightening response in the deep tissue layers. The procedure targets the same foundational layer (SMAS) that surgeons address during a facelift — but without any incisions, anaesthesia, or recovery period. Results develop gradually as new collagen forms over 2-3 months.',
    candidates: 'Patients with mild to moderate skin laxity on the face, jawline, neck, or brow area.',
    procedure: 'Ultrasound gel applied, then targeted energy delivered through a handpiece. Takes 30-60 minutes.',
    downtime: 'None to minimal. Mild redness or tenderness for a few hours.',
    iconName: 'Waves',
    detailedContent: {
      overview: [
        "HIFU represents a significant advancement in non-surgical skin tightening. By focusing ultrasound energy at specific depths — 1.5mm, 3mm, and 4.5mm — the treatment reaches tissue layers that topical products and most laser treatments cannot access. The concentrated energy creates thermal coagulation points that trigger the body's wound-healing response, producing fresh collagen and elastin over the following weeks.",
        "The ability to target the SMAS layer (superficial musculoaponeurotic system) at 4.5mm depth is what distinguishes HIFU from other non-invasive tightening modalities. This is the same tissue layer that plastic surgeons manipulate during surgical facelifts. HIFU achieves a milder but meaningful tightening of this layer without any incision.",
        "Results are not immediate — the collagen remodelling process takes 2-3 months to become fully visible. Most patients notice improved firmness and definition along the jawline, reduced jowling, and a subtle lift in the brow and cheek area. Individual outcomes depend on age, skin quality, and the degree of laxity."
      ],
      howItWorks: "Ultrasound gel is applied to the treatment area. The HIFU handpiece delivers focused ultrasound energy in precise lines at predetermined depths. You may feel brief pulses of warmth or tingling as the energy reaches the deeper tissue. The practitioner works systematically across the face, jawline, and neck. A full-face session typically involves 300-500 energy lines and takes 30-60 minutes.",
      benefits: ["Targets deep tissue layers without surgery", "No incisions, no anaesthesia, no scarring", "Stimulates natural collagen production", "Treats jawline sagging, jowls, and brow drooping", "Results improve progressively over 2-3 months", "Single session can last 12-18 months"],
      sideEffects: "Mild discomfort during the procedure — described as brief prickling or warmth at deeper settings. Temporary redness, slight swelling, or tenderness for a few hours post-treatment. Rare: temporary numbness or tingling in treated areas, resolving within days. Not suitable for patients with severe laxity or metallic implants in the treatment area.",
      sessionInfo: { duration: "30-60 minutes", sessions: "1-2 sessions per year", frequency: "Annual maintenance", resultsIn: "Gradual improvement over 2-3 months" },
      preCare: ["No special preparation required", "Arrive with clean, makeup-free skin", "Inform the doctor of any implants or active skin conditions in the treatment area"],
      postCare: ["Apply sunscreen as part of your regular routine", "No special restrictions — resume all activities immediately", "Avoid vigorous facial massage for 48 hours", "Results develop gradually — be patient through the collagen remodelling period"],
      faqs: [
        { question: "Is HIFU painful?", answer: "Most patients tolerate it well. You may feel brief moments of warmth or prickling as the energy is delivered to deeper layers. The sensation is intermittent, not constant. Topical numbing can be applied for sensitive areas." },
        { question: "How is HIFU different from a facelift?", answer: "HIFU offers mild to moderate tightening without surgery, anaesthesia, scars, or downtime. A surgical facelift produces more dramatic results for severe laxity. HIFU is best suited for patients with early to moderate sagging who want improvement without an invasive procedure." },
        { question: "How long do results last?", answer: "The collagen produced by HIFU persists for 12-18 months on average. Annual maintenance sessions help sustain the tightening effect. Natural ageing continues regardless, so results are not permanent." },
      ],
    },
  },
  {
    id: 'cosmelan-peel',
    title: 'Cosmelan Peel',
    category: 'Skin',
    shortDescription: 'Professional depigmentation system for stubborn melasma and deep discolouration.',
    fullDescription: 'Cosmelan is a medical-grade depigmentation programme that combines an in-clinic mask application with a structured homecare protocol. It works by inhibiting tyrosinase — the enzyme responsible for melanin production — at multiple levels simultaneously. This makes it effective for melasma, post-inflammatory hyperpigmentation, and solar lentigines that have not responded adequately to standard topical treatments. Outcomes are progressive and require patient compliance with the homecare phase.',
    candidates: 'Patients with melasma, persistent hyperpigmentation, or deep discolouration resistant to other treatments.',
    procedure: 'In-clinic mask applied for a specific duration, followed by a structured homecare regimen over several weeks.',
    downtime: '3-7 days of redness and peeling after the initial mask. Homecare phase is ongoing.',
    iconName: 'CircleDot',
    detailedContent: {
      overview: [
        "Melasma is among the most challenging pigmentation conditions to treat, particularly in Indian skin types where it is prevalent. Hormonal factors, sun exposure, and genetic predisposition drive melanin overproduction in specific facial zones — typically the cheeks, forehead, upper lip, and nose bridge.",
        "The Cosmelan programme addresses this through a dual-phase approach. The first phase involves a professional depigmentation mask applied in-clinic, which delivers a concentrated blend of active depigmenting agents directly to the skin. The second phase is a structured homecare protocol using Cosmelan 2 cream, which maintains and builds upon the results achieved by the in-clinic mask.",
        "Unlike single-session treatments, Cosmelan works through sustained tyrosinase inhibition over weeks and months. Patient compliance with the homecare routine is essential — results correlate directly with how consistently the protocol is followed. Sun protection is absolutely non-negotiable throughout the entire treatment period."
      ],
      howItWorks: "During the in-clinic session, the Cosmelan 1 mask is applied as a thick layer over the affected areas. It remains on the skin for a duration determined by the doctor (typically 8-12 hours), after which the patient removes it at home. Over the following days, controlled peeling occurs. The homecare phase begins with Cosmelan 2 cream applied according to a specific schedule that tapers in intensity over several months. The active ingredients continuously suppress melanin production while the skin renews.",
      benefits: ["Addresses melasma at the enzymatic level", "Effective on deep and persistent pigmentation", "Structured protocol reduces guesswork", "Visible improvement within 2-4 weeks", "Can treat multiple pigmentation types simultaneously", "Long-lasting results with proper maintenance"],
      sideEffects: "Significant redness, tightness, and peeling for 3-7 days after the initial mask — this is expected and part of the treatment. Temporary skin sensitivity and dryness during the homecare phase. Strict sun avoidance is critical — UV exposure during treatment can worsen pigmentation. Not suitable during pregnancy or breastfeeding.",
      sessionInfo: { duration: "30 minutes (in-clinic)", sessions: "1 in-clinic + months of homecare", frequency: "Single programme", resultsIn: "2-4 weeks for initial improvement; full results over 3-6 months" },
      preCare: ["Consultation and skin assessment are mandatory before starting", "Pre-conditioning with specific products may be recommended for 2 weeks", "Discontinue all exfoliating agents", "Plan the treatment around your schedule — the peeling phase lasts several days"],
      postCare: ["Follow the Cosmelan 2 homecare protocol exactly as prescribed", "Apply SPF 50+ sunscreen every 2-3 hours without exception", "Avoid hot water, saunas, and intense exercise for 1 week", "Use only the recommended cleanser and moisturiser during recovery", "Do not pick or peel flaking skin"],
      faqs: [
        { question: "Is Cosmelan safe for Indian skin?", answer: "Yes — the Cosmelan system is widely used on Fitzpatrick skin types IV-V and has a strong track record in treating melasma in Indian patients. Proper application technique and strict sun protection are essential for safety." },
        { question: "How is this different from regular chemical peels?", answer: "Chemical peels primarily exfoliate the surface. Cosmelan works deeper by inhibiting the enzyme that produces melanin, addressing the root cause of pigmentation rather than just the visible layer." },
        { question: "Will my melasma come back?", answer: "Melasma is a chronic condition. Results can be maintained long-term with diligent sun protection, maintenance products, and periodic touch-up treatments. Without sun care, recurrence is likely." },
      ],
    },
  },
  {
    id: 'vampire-facial',
    title: 'Vampire Facial (PRP)',
    category: 'Skin',
    shortDescription: 'Microneedling combined with platelet-rich plasma for deep skin rejuvenation.',
    fullDescription: 'The vampire facial combines microneedling with the application of the patient\'s own platelet-rich plasma (PRP). Microneedling creates thousands of controlled micro-channels in the skin, and when PRP is applied to these channels, the concentrated growth factors penetrate deeply to accelerate healing, collagen production, and skin renewal. The result is improved texture, reduced scarring, and a healthier complexion over time. Individual results vary.',
    candidates: 'Patients seeking skin rejuvenation, improved texture, or reduction of acne scars and fine lines.',
    procedure: 'Blood drawn, PRP separated via centrifuge, microneedling performed, PRP applied to treated skin. Takes 45-60 minutes.',
    downtime: '1-3 days of redness. Skin may feel tight and appear pink.',
    iconName: 'HeartPulse',
    detailedContent: {
      overview: [
        "The vampire facial leverages two proven dermatological techniques in combination: microneedling (collagen induction therapy) and platelet-rich plasma (PRP) application. Individually, each is effective — together, they amplify each other's benefits significantly.",
        "Microneedling creates thousands of tiny punctures in the skin using a specialised device. These controlled injuries trigger the skin's repair mechanism, producing fresh collagen and elastin. When PRP — a concentrated preparation of the patient's own blood plasma rich in growth factors — is applied immediately after needling, the active growth factors are delivered directly into the deeper skin layers through the open channels.",
        "This combination is particularly valued for acne scar revision, skin rejuvenation, and pore refinement. Because PRP is derived from the patient's own blood, there is no risk of allergic reaction or rejection. The treatment harnesses the body's natural healing processes rather than introducing synthetic substances."
      ],
      howItWorks: "A small volume of blood is drawn from the arm and placed in a centrifuge to separate the platelet-rich plasma from other blood components. Meanwhile, the treatment area is cleansed and numbed with topical anaesthesia. Microneedling is performed at a calibrated depth across the target area. Immediately after, the PRP is spread over the treated skin, allowing it to seep into the micro-channels. The entire process takes 45-60 minutes.",
      benefits: ["Uses your own blood — no synthetic substances", "Stimulates natural collagen and elastin production", "Effective for acne scars, fine lines, and texture", "Improves skin radiance and pore size", "Minimal risk of allergic reaction", "Can be combined with other treatments"],
      sideEffects: "Redness and a sunburn-like sensation for 1-3 days. Mild swelling, especially around the eyes, for 24-48 hours. Skin may feel tight and dry during recovery. Small pinpoint bleeding during the procedure is normal. Avoid if you have active infections, blood disorders, or are on blood thinners.",
      sessionInfo: { duration: "45-60 minutes", sessions: "3-4 sessions recommended", frequency: "Every 4-6 weeks", resultsIn: "Noticeable improvement after 2-3 weeks; full results at 3 months" },
      preCare: ["Avoid retinoids and exfoliating products for 5 days", "Stay hydrated — this improves blood draw quality", "No blood thinners (aspirin, ibuprofen) for 48 hours before", "Arrive with clean, makeup-free skin"],
      postCare: ["Do not wash the face for 6-8 hours after treatment", "Avoid makeup for 24 hours", "Apply only prescribed soothing products for 48 hours", "Strict sun avoidance and SPF 30+ for 2 weeks", "No swimming, sauna, or intense exercise for 48 hours"],
      faqs: [
        { question: "Is the vampire facial painful?", answer: "Topical numbing cream is applied before microneedling, so most patients feel only mild pressure and a prickling sensation. The blood draw is a standard procedure. Overall discomfort is manageable." },
        { question: "How soon will I see results?", answer: "Skin looks fresher within 1-2 weeks as initial healing completes. Collagen remodelling continues for 2-3 months, with progressive improvement in texture, scars, and tone. A series of sessions yields the best cumulative results." },
        { question: "Can this help deep acne scars?", answer: "The vampire facial is effective for mild to moderate acne scars. Deep ice-pick or boxcar scars may require additional modalities such as subcision, fractional lasers, or fillers for optimal results. A combination approach is often recommended." },
      ],
    },
  },
  {
    id: 'skin-boosters',
    title: 'Skin Boosters & Profhilo',
    category: 'Skin',
    shortDescription: 'Injectable hyaluronic acid that hydrates skin from within for a natural, dewy glow.',
    fullDescription: 'Skin boosters and Profhilo are injectable treatments that deliver hyaluronic acid directly into the skin layers where it is needed most. Unlike dermal fillers (which add volume), these treatments focus on deep hydration, improved elasticity, and overall skin quality. The hyaluronic acid attracts and retains moisture at the cellular level, producing a natural luminosity and smoothness that topical products cannot replicate. Results are subtle, natural, and develop over 2-4 weeks.',
    candidates: 'Patients with dehydrated, dull, or crepey skin seeking improved radiance and elasticity.',
    procedure: 'Multiple micro-injections of hyaluronic acid across the treatment area. Takes 20-30 minutes.',
    downtime: 'Minimal. Small injection marks for 24-48 hours. Mild swelling possible.',
    iconName: 'Droplet',
    detailedContent: {
      overview: [
        "As skin ages, it loses its natural reservoir of hyaluronic acid — the molecule responsible for retaining moisture and maintaining plumpness. While topical hyaluronic acid products provide surface-level hydration, they cannot penetrate deeply enough to replenish what has been lost at the dermal level.",
        "Skin boosters solve this by delivering stabilised hyaluronic acid directly into the mid-dermis through a series of micro-injections. The injected hyaluronic acid integrates into the skin tissue, attracting water molecules and creating a sustained hydration effect from within. This improves skin texture, fine lines, and overall radiance.",
        "Profhilo takes this concept further — it uses a patented formulation of highly concentrated hyaluronic acid (64mg in 2ml) that not only hydrates but also stimulates the production of collagen and elastin through a process called bio-remodelling. The result is firmer, more elastic skin with improved tone and texture. Profhilo requires just 5 injection points per side of the face (the BAP technique), making the procedure quick and efficient."
      ],
      howItWorks: "For skin boosters, multiple micro-injections are placed in a grid pattern across the treatment area (face, neck, hands, or decolletage). For Profhilo, the BAP (Bio Aesthetic Points) technique is used — 5 specific injection points per side of the face, chosen for optimal product distribution through the tissue. The hyaluronic acid then diffuses through the dermal layers over the following weeks, providing hydration and stimulating collagen/elastin production.",
      benefits: ["Deep hydration at the cellular level", "Improved skin elasticity and firmness", "Natural, dewy glow without a 'done' look", "Fine line reduction through plumping effect", "Profhilo stimulates collagen and elastin production", "Can treat face, neck, hands, and decolletage"],
      sideEffects: "Small injection marks (wheals) visible for 24-48 hours. Mild swelling and tenderness at injection sites. Rare bruising at injection points. The treatment uses hyaluronic acid — a substance naturally present in the body — so allergic reactions are extremely uncommon.",
      sessionInfo: { duration: "20-30 minutes", sessions: "2-3 sessions for initial course", frequency: "1 month apart; maintenance every 6 months", resultsIn: "Gradual improvement over 2-4 weeks after each session" },
      preCare: ["Avoid blood thinners (aspirin, fish oil) for 48 hours before", "Arrive with clean, makeup-free skin", "Inform the doctor of any allergies or previous filler treatments"],
      postCare: ["Avoid touching or massaging the treated area for 6 hours", "No makeup for 12 hours", "Avoid intense heat (sauna, hot yoga) for 48 hours", "Stay hydrated — drink plenty of water to support the hyaluronic acid", "Small bumps at injection sites resolve within 24-48 hours"],
      faqs: [
        { question: "What is the difference between skin boosters and Profhilo?", answer: "Skin boosters deliver hyaluronic acid through multiple micro-injections in a grid pattern, primarily for hydration. Profhilo uses a higher concentration of hyaluronic acid delivered at just 10 points, and uniquely stimulates both collagen and elastin production (bio-remodelling), providing tightening alongside hydration." },
        { question: "Will my face look puffy after?", answer: "No — skin boosters and Profhilo do not add volume like fillers. You may have small bumps at injection sites for 24-48 hours, but these flatten naturally. The result is improved skin quality, not a fuller or puffier appearance." },
        { question: "How is this different from dermal fillers?", answer: "Dermal fillers add volume to specific areas (lips, cheeks, jawline). Skin boosters and Profhilo improve overall skin quality, hydration, and texture without adding volume. They serve completely different purposes and are often used together." },
      ],
    },
  },

  // ===== NEW SERVICES — Hair Category =====
  {
    id: 'mesotherapy-hair',
    title: 'Scalp Mesotherapy',
    category: 'Hair',
    shortDescription: 'Micro-injections of vitamins and growth agents directly into the scalp to support hair health.',
    fullDescription: 'Scalp mesotherapy involves injecting a customised cocktail of vitamins, minerals, amino acids, and growth-promoting agents directly into the scalp at the level of the hair follicles. This targeted delivery ensures the active ingredients reach the follicles in higher concentrations than topical products can achieve. The treatment aims to improve blood circulation, nourish weakened follicles, and support the hair growth cycle. Results are gradual and depend on the underlying cause of hair thinning.',
    candidates: 'Patients with early-stage hair thinning, diffuse hair loss, or weakened hair quality.',
    procedure: 'Multiple superficial injections across the scalp using a fine needle or meso-gun. Takes 20-30 minutes.',
    downtime: 'None. Mild scalp tenderness for a few hours.',
    iconName: 'Activity',
    detailedContent: {
      overview: [
        "Hair thinning often begins with a reduction in the nutrients and blood supply reaching the hair follicles. While oral supplements and topical solutions provide some support, their delivery to the follicle level is limited by absorption barriers.",
        "Scalp mesotherapy bypasses these barriers by injecting a customised blend of active ingredients — including biotin, dexpanthenol, zinc, minoxidil, and growth peptides — directly into the mid-dermal layer of the scalp. This ensures that the follicles receive therapeutic concentrations of nutrients precisely where they are needed.",
        "The treatment is particularly effective in the early stages of hair thinning, where follicles are weakened but still active. For advanced hair loss, mesotherapy may be combined with PRP/GFC therapy for a more comprehensive approach. Results are cumulative and become noticeable after 4-6 sessions."
      ],
      howItWorks: "The scalp is cleansed and a customised cocktail is prepared based on your specific hair concern. Using either a fine needle or an automated meso-gun, the solution is injected in a grid pattern across the affected areas of the scalp. The injections are superficial — reaching the dermal layer where follicle roots reside. Each session covers the entire thinning area and takes 20-30 minutes. The active ingredients nourish the follicles, improve local blood circulation, and support the transition of resting follicles into the active growth phase.",
      benefits: ["Direct nutrient delivery to hair follicles", "Customisable cocktail for individual needs", "Improves scalp blood circulation", "Strengthens existing hair strands", "Can slow progression of early-stage thinning", "Complements other hair restoration treatments"],
      sideEffects: "Mild scalp tenderness and small bumps at injection sites for a few hours. Occasional headache on the day of treatment. Very rare: localised allergic reaction to specific ingredients. The procedure is generally well-tolerated.",
      sessionInfo: { duration: "20-30 minutes", sessions: "8-12 sessions for initial course", frequency: "Weekly or fortnightly", resultsIn: "Visible improvement after 4-6 sessions" },
      preCare: ["Wash hair with a gentle shampoo on the day of treatment", "Avoid applying any styling products before the session", "Inform the doctor of any scalp conditions or allergies"],
      postCare: ["Do not wash hair for 6-8 hours after treatment", "Avoid swimming pools and saunas for 48 hours", "A mild shampoo without SLS is recommended for the first week", "Continue prescribed oral supplements alongside the treatment"],
      faqs: [
        { question: "Is mesotherapy different from PRP/GFC?", answer: "PRP/GFC uses your own blood-derived growth factors. Mesotherapy uses a customised cocktail of vitamins, minerals, and pharmaceutical agents. Both target the follicle level but through different mechanisms. They are often used in combination for enhanced results." },
        { question: "Does it hurt?", answer: "The needles used are very fine. Most patients describe a mild prickling sensation. The automated meso-gun further reduces discomfort by delivering rapid, shallow injections. Topical numbing can be applied for sensitive individuals." },
        { question: "Can mesotherapy regrow completely lost hair?", answer: "Mesotherapy works best on weakened but still-active follicles. It cannot revive follicles that have been dormant for years or permanently scarred. Early intervention produces the best outcomes." },
      ],
    },
  },
  {
    id: 'scalp-treatment',
    title: 'Scalp Health & Dandruff',
    category: 'Hair',
    shortDescription: 'Clinical management of dandruff, seborrheic dermatitis, and chronic scalp conditions.',
    fullDescription: 'Persistent dandruff, itchy scalp, and flaking are often symptoms of seborrheic dermatitis or other underlying scalp conditions that do not respond to commercial anti-dandruff shampoos. A clinical approach involves identifying the root cause — whether fungal overgrowth, sebaceous gland dysfunction, or an inflammatory condition — and designing a targeted treatment protocol. This may include medicated shampoos, topical antifungals, scalp serums, and lifestyle modifications specific to the patient\'s triggers.',
    candidates: 'Patients with persistent dandruff, itchy scalp, seborrheic dermatitis, or scalp psoriasis.',
    procedure: 'Clinical scalp examination followed by a customised treatment protocol (topical + oral as needed).',
    downtime: 'Not applicable — this is an ongoing management plan.',
    iconName: 'Leaf',
    detailedContent: {
      overview: [
        "The scalp is skin — and like facial skin, it can develop conditions that require medical attention beyond over-the-counter products. Persistent dandruff, chronic itching, visible flaking, and scalp redness are signs that the scalp barrier is compromised and needs professional management.",
        "Seborrheic dermatitis — the most common cause of persistent dandruff — is driven by an overgrowth of Malassezia yeast on the scalp, combined with individual inflammatory responses and sebum production patterns. In Hyderabad's warm, humid climate, this condition is particularly prevalent and often chronic.",
        "Dr. Yashasve takes a systematic approach: clinical examination (and dermoscopic evaluation when needed), identification of the specific condition and its triggers, and a tailored protocol that addresses both the symptoms and the underlying cause. This may include prescription-strength medicated shampoos, topical antifungals or anti-inflammatory agents, scalp serums, and guidance on hair care habits."
      ],
      howItWorks: "The consultation begins with a detailed history of your scalp symptoms, hair care routine, and any known triggers. A clinical examination — sometimes aided by dermoscopy — identifies the condition type and severity. Based on the diagnosis, a multi-step protocol is designed: medicated cleansers for the active phase, maintenance products for long-term control, and lifestyle recommendations (diet, stress management, water quality considerations) to minimise recurrence.",
      benefits: ["Addresses the root cause, not just symptoms", "Prescription-strength treatments tailored to your condition", "Long-term management plan reduces recurrence", "Improves overall scalp health for better hair growth", "Dermoscopic evaluation for accurate diagnosis"],
      sideEffects: "Medicated shampoos may cause mild dryness initially. Topical steroids (if prescribed) are used for short durations to avoid side effects. The treatment plan is designed for long-term safety.",
      sessionInfo: { duration: "20-30 minutes consultation", sessions: "Follow-up at 2-4 weeks, then as needed", frequency: "Varies by condition", resultsIn: "Symptom relief within 1-2 weeks; long-term control over 4-8 weeks" },
      preCare: ["Arrive without applying any hair products on the day of consultation", "List all hair products you currently use", "Note any known triggers (stress periods, dietary changes, seasonal patterns)"],
      postCare: ["Follow the prescribed cleansing and treatment schedule strictly", "Avoid sharing combs, towels, or pillowcases during active treatment", "Use lukewarm water — not hot — for hair washing", "Consider a water filter if hard water is suspected as a trigger"],
      faqs: [
        { question: "Why doesn't my anti-dandruff shampoo work?", answer: "Over-the-counter shampoos contain lower concentrations of active ingredients and address only surface-level symptoms. Persistent dandruff often involves a deeper inflammatory or fungal component that requires prescription-strength treatment and a comprehensive protocol." },
        { question: "Can dandruff cause hair loss?", answer: "Chronic scalp inflammation from untreated seborrheic dermatitis can weaken hair follicles and contribute to increased shedding. Treating the underlying scalp condition often reduces hair fall as a secondary benefit." },
        { question: "Is hard water causing my scalp issues?", answer: "Hard water — common in many parts of Hyderabad — deposits minerals on the scalp that can disrupt the natural pH, cause dryness, and aggravate existing conditions. A chelating shampoo or shower filter may be recommended as part of your management plan." },
      ],
    },
  },

  // ===== NEW SERVICES — Body Category =====
  {
    id: 'dermal-fillers',
    title: 'Dermal Fillers',
    category: 'Body',
    shortDescription: 'Hyaluronic acid injections that restore facial volume, define contours, and soften deep lines.',
    fullDescription: 'Dermal fillers use biocompatible hyaluronic acid gel to restore volume in areas where natural fat and bone have receded with age. Common treatment areas include the cheeks, under-eyes, nasolabial folds, jawline, chin, and lips. When placed by a trained dermatologist, fillers produce natural-looking results that enhance facial proportions without altering your fundamental appearance. The effects are immediate and last 8-18 months depending on the area and product used.',
    candidates: 'Patients with volume loss in the cheeks, hollow under-eyes, deep nasolabial folds, thin lips, or weak jawline definition.',
    procedure: 'Topical numbing applied, then precise injections using fine needles or cannulas. Takes 20-40 minutes.',
    downtime: 'Mild swelling for 24-48 hours. Minor bruising possible. Avoid strenuous activity for 24 hours.',
    iconName: 'Syringe',
    detailedContent: {
      overview: [
        "The face loses volume progressively from the mid-20s onwards. Fat pads shrink and descend, bone resorbs, and the skin loses its structural support. This creates hollow cheeks, deepening nasolabial folds, under-eye shadows, and loss of jawline definition — changes that can make you look tired or older than you feel.",
        "Hyaluronic acid dermal fillers are the most widely used and safest approach to non-surgical volume restoration. The gel is injected beneath the skin at specific depths and locations to recreate the structural support that has been lost. Because hyaluronic acid is a substance naturally present in the body, the results look and feel natural.",
        "Dr. Yashasve follows the principle of facial harmonisation — enhancing your natural proportions rather than creating an obviously 'done' appearance. The amount of filler used, the injection technique (needle vs cannula), and the product type are all selected based on your facial anatomy, age, and aesthetic goals."
      ],
      howItWorks: "After cleansing and applying topical anaesthesia, the treatment areas are marked based on the pre-procedure assessment. Hyaluronic acid gel is injected using fine needles or blunt-tipped cannulas at precise depths. For cheeks, the product is placed on the bone to recreate volume. For lips, it is layered within the lip tissue. For the jawline, it is deposited along the mandibular border. The results are visible immediately, though mild swelling may slightly exaggerate the outcome for 24-48 hours. The final result settles within a week.",
      benefits: ["Immediate visible results", "Natural-looking volume restoration", "Reversible — hyaluronidase can dissolve if needed", "Minimal downtime", "Can treat multiple facial areas in one session", "Products last 8-18 months depending on area"],
      sideEffects: "Swelling for 24-48 hours (more pronounced in lips). Bruising at injection sites in some patients. Mild tenderness for 2-3 days. Rare: asymmetry (correctable), vascular occlusion (extremely rare with experienced practitioners — this is why dermatologist-led treatment is critical). Lumps are uncommon and usually resolve with massage.",
      sessionInfo: { duration: "20-40 minutes", sessions: "1 session per area", frequency: "Repeat every 8-18 months", resultsIn: "Immediate; settles fully within 1 week" },
      preCare: ["Avoid blood thinners (aspirin, ibuprofen, fish oil) for 48 hours", "No alcohol for 24 hours before", "Arrive with clean, makeup-free skin", "Discuss your goals and concerns openly during the pre-procedure assessment"],
      postCare: ["Apply ice packs gently to reduce swelling", "Avoid touching, pressing, or massaging the treated area for 48 hours", "Sleep on your back for 1-2 nights", "Avoid intense exercise, alcohol, and saunas for 24-48 hours", "Do not apply makeup for 12 hours"],
      faqs: [
        { question: "Will fillers look unnatural?", answer: "Not when performed by a trained dermatologist using appropriate volumes. Dr. Yashasve follows a conservative, harmonisation-based approach. The goal is to refresh — not transform — your appearance. You can always add more in a follow-up if desired." },
        { question: "What if I don't like the result?", answer: "Hyaluronic acid fillers are reversible. An enzyme called hyaluronidase can dissolve the filler if needed. This is one of the key safety advantages of HA fillers over permanent alternatives." },
        { question: "How long do fillers last?", answer: "This depends on the treatment area and product used. Lips: 6-9 months. Cheeks and jawline: 12-18 months. Under-eyes: 9-12 months. Metabolism, activity level, and individual factors also influence longevity." },
      ],
    },
  },
  {
    id: 'body-contouring',
    title: 'Body Contouring',
    category: 'Body',
    shortDescription: 'Non-surgical fat reduction and body sculpting for targeted stubborn fat areas.',
    fullDescription: 'Non-surgical body contouring uses advanced technologies to reduce localised fat deposits that are resistant to diet and exercise. Depending on the technology used, fat cells are either permanently destroyed through controlled cooling, radiofrequency energy, or ultrasound, and then naturally eliminated by the body over the following weeks. These treatments are not weight-loss solutions — they are precision tools for refining body shape in specific areas.',
    candidates: 'Patients close to their ideal weight with localised fat deposits (abdomen, flanks, thighs, arms, submental area).',
    procedure: 'Non-invasive device applied to the target area for 25-60 minutes depending on technology.',
    downtime: 'Minimal. Mild soreness or numbness in treated area for a few days.',
    iconName: 'Scissors',
    detailedContent: {
      overview: [
        "Stubborn fat deposits — particularly around the abdomen, flanks, inner thighs, and under the chin — are a common concern even among patients who maintain a healthy weight and exercise regularly. These areas accumulate fat due to genetic predisposition and hormonal factors, and they often resist dietary efforts.",
        "Non-surgical body contouring technologies offer a targeted solution by selectively destroying fat cells in these specific areas without surgery, anaesthesia, or significant downtime. The treated fat cells are permanently eliminated — they do not regenerate — and the body clears them through natural metabolic processes over 6-12 weeks.",
        "It is important to understand that body contouring is not a weight-loss treatment. It is designed for patients who are within a reasonable range of their target weight and want to refine specific areas. A consultation will determine whether you are a suitable candidate and which technology is best for your concern."
      ],
      howItWorks: "The specific mechanism depends on the technology used. Cryolipolysis (controlled cooling) freezes fat cells to a temperature that triggers apoptosis (natural cell death) without affecting surrounding tissue. Radiofrequency devices heat the fat layer to disrupt cell membranes. Ultrasound-based systems use focused energy to mechanically destroy fat cells. In all cases, the destroyed cells are processed and eliminated by the body's lymphatic system over 6-12 weeks. The treatment area is marked, the device applicator is positioned, and the session lasts 25-60 minutes per area.",
      benefits: ["Non-surgical — no incisions, anaesthesia, or scars", "Permanent fat cell reduction in treated area", "Minimal to no downtime", "Can target specific problem areas precisely", "Results develop naturally over weeks", "No damage to surrounding tissue"],
      sideEffects: "Temporary numbness, redness, and mild soreness in the treated area for a few days. Bruising may occur with some technologies. Paradoxical adipose hyperplasia (treated fat area increases instead of decreasing) is extremely rare. Results are not immediate — patience is required as the body processes the destroyed fat cells.",
      sessionInfo: { duration: "25-60 minutes per area", sessions: "1-3 sessions per area", frequency: "4-8 weeks apart", resultsIn: "Gradual reduction over 6-12 weeks" },
      preCare: ["Maintain stable weight for at least 4 weeks before treatment", "Stay well-hydrated", "Wear comfortable clothing to the appointment", "Set realistic expectations — this is body refinement, not dramatic transformation"],
      postCare: ["Light walking and hydration help the lymphatic clearance process", "Mild soreness can be managed with over-the-counter pain relief if needed", "Maintain a stable weight to preserve results", "Follow-up assessment at 8-12 weeks to evaluate outcome"],
      faqs: [
        { question: "How much fat can be removed?", answer: "Non-surgical body contouring typically reduces fat in the treated area by 20-25% per session. This translates to a visible refinement in contour rather than dramatic size reduction. Multiple sessions may be performed for enhanced results." },
        { question: "Will the fat come back?", answer: "The destroyed fat cells are permanently eliminated. However, remaining fat cells in the area can enlarge if you gain significant weight. Maintaining a stable weight preserves your results." },
        { question: "Is this a replacement for liposuction?", answer: "Non-surgical contouring suits patients with moderate, localised fat deposits. For larger volumes or more dramatic reshaping, surgical liposuction may be more appropriate. Dr. Yashasve will advise on the best approach for your goals." },
      ],
    },
  },

  // ===== NEW SERVICES — Wellness Category =====
  {
    id: 'iv-therapy',
    title: 'IV Drip Therapy',
    category: 'Wellness',
    shortDescription: 'Intravenous infusions of vitamins, minerals, and antioxidants for systemic wellness support.',
    fullDescription: 'IV drip therapy delivers a customised blend of vitamins (B-complex, C, D), minerals (zinc, magnesium, selenium), amino acids, and antioxidants (glutathione) directly into the bloodstream. By bypassing the digestive system, IV infusion achieves significantly higher bioavailability than oral supplements. These drips are designed to support general wellness, energy levels, skin health, and recovery. They are a complement to — not a replacement for — a balanced diet and healthy lifestyle.',
    candidates: 'Patients seeking wellness support, energy enhancement, skin radiance, or recovery from illness and fatigue.',
    procedure: 'IV line placed in the arm, customised drip infused over 30-60 minutes in a clinical setting.',
    downtime: 'None. Resume normal activities immediately.',
    iconName: 'Pill',
    detailedContent: {
      overview: [
        "Modern lifestyles — characterised by irregular meals, high stress, poor sleep, and environmental pollution — often result in nutritional gaps that affect energy, immunity, and skin health. While oral supplements address some of this, absorption through the gut is limited by various factors including digestive health, medication interactions, and individual metabolic differences.",
        "IV drip therapy bypasses the digestive system entirely, delivering nutrients directly into the bloodstream at concentrations that oral intake cannot match. A vitamin C drip, for instance, achieves blood levels 50-100x higher than the same dose taken orally. This makes IV therapy particularly effective when rapid replenishment or high-dose delivery is the goal.",
        "At Suseela Hospital, IV drips are administered under medical supervision with customised formulations. Common cocktails include the glutathione brightening drip (for skin radiance and antioxidant support), the energy booster (B-vitamins and amino acids), and the immunity support blend (vitamin C, zinc, selenium). Each formulation is selected based on the patient's specific needs and health status."
      ],
      howItWorks: "A consultation determines the appropriate drip formulation based on your health status, goals, and any existing conditions. An IV line is placed in a vein (usually in the arm) by trained staff, and the customised nutrient solution is infused slowly over 30-60 minutes. You can rest, read, or use your phone during the infusion. Vital signs are monitored throughout. The IV is removed upon completion, and you can leave immediately.",
      benefits: ["100% bioavailability — nutrients go directly to the bloodstream", "Higher therapeutic doses than oral supplements allow", "Rapid replenishment of deficient vitamins and minerals", "Supports skin health, energy, and immunity simultaneously", "Customisable cocktails for individual needs", "Performed in a hospital setting with medical oversight"],
      sideEffects: "Minor discomfort at the IV insertion site. Rare: mild headache, metallic taste during infusion, or feeling of warmth (these resolve quickly). Allergic reactions are extremely uncommon with standard formulations. IV therapy is not recommended for patients with kidney disease, heart failure, or certain metabolic conditions without medical clearance.",
      sessionInfo: { duration: "30-60 minutes", sessions: "1-4 sessions per month", frequency: "Weekly or fortnightly as needed", resultsIn: "Immediate energy boost; cumulative skin benefits over 3-4 sessions" },
      preCare: ["Eat a light meal before your appointment", "Stay well-hydrated", "Inform the doctor of all medications and health conditions", "Blood tests may be recommended before starting regular sessions"],
      postCare: ["Continue drinking water after the infusion", "No specific restrictions — resume all activities immediately", "Note any unusual symptoms and report to the clinic"],
      faqs: [
        { question: "How often should I get IV drips?", answer: "This depends on your goals. For general wellness, once a month is common. For specific concerns (pre-event skin prep, recovery from illness, jet lag), a short series of weekly sessions may be recommended. Dr. Yashasve advises based on your individual needs." },
        { question: "Is IV therapy safe?", answer: "When administered by trained medical professionals in a clinical setting with quality-controlled formulations, IV therapy is very safe. Suseela Hospital ensures all infusions are prepared under sterile conditions with pharmaceutical-grade ingredients." },
        { question: "Can IV drips replace my regular supplements?", answer: "IV therapy complements oral supplements — it does not replace a balanced diet or regular health maintenance. Think of it as a targeted boost for specific needs, not a substitute for everyday nutrition." },
      ],
    },
  },
  {
    id: 'allergy-testing',
    title: 'Allergy & Patch Testing',
    category: 'Wellness',
    shortDescription: 'Diagnostic testing to identify contact allergens causing skin rashes and dermatitis.',
    fullDescription: 'Patch testing is the gold standard for diagnosing allergic contact dermatitis — a condition where specific substances trigger an immune-mediated skin reaction on contact. Small amounts of potential allergens are applied to the skin under adhesive patches and left for 48 hours. The reactions are then read and interpreted by the dermatologist. Identifying the culprit allergen is the first step toward effective avoidance and management.',
    candidates: 'Patients with recurrent rashes, unexplained dermatitis, or suspected contact allergies to cosmetics, metals, chemicals, or hair dyes.',
    procedure: 'Allergen patches applied to the back, readings taken at 48 and 96 hours. Requires 2-3 clinic visits.',
    downtime: 'None — patches must stay dry and in place for 48 hours.',
    iconName: 'Stethoscope',
    detailedContent: {
      overview: [
        "Contact dermatitis — characterised by itchy, red, sometimes blistering rashes at sites of contact with specific substances — is one of the most common reasons patients visit a dermatologist. Common culprits include metals (nickel in jewellery and zippers), fragrances in cosmetics, preservatives, hair dyes, rubber chemicals, and certain topical medications.",
        "When the trigger is not obvious from history alone, patch testing provides a systematic, evidence-based method for identification. A standardised panel of common allergens — supplemented with patient-specific suspects — is applied to the skin in controlled quantities. The immune response (or absence of it) at each site reveals which substances the patient is sensitised to.",
        "Once the allergen is identified, targeted avoidance is remarkably effective. Many patients who have suffered recurring rashes for years find lasting relief simply by eliminating the specific trigger from their environment or routine."
      ],
      howItWorks: "During the first visit, small chambers containing standardised concentrations of common allergens are affixed to the upper back using hypoallergenic adhesive tape. You wear these patches for 48 hours without getting them wet. On the second visit (48 hours later), the patches are removed and the first reading is taken — the doctor examines each site for signs of a reaction (redness, swelling, blistering). A second reading at 96 hours (fourth day) captures delayed reactions. The results are interpreted in the context of your clinical history, and a comprehensive allergen avoidance plan is provided.",
      benefits: ["Gold-standard diagnostic method for contact allergies", "Identifies specific trigger substances", "Enables targeted avoidance for long-term relief", "Tests for 30-50+ common allergens in one session", "Patient-specific suspects can be added to the panel", "Ends the cycle of recurring, unexplained rashes"],
      sideEffects: "Mild itching under the patches during the 48-hour wearing period. Positive reactions cause localised redness and bumps at specific test sites — this is the intended diagnostic outcome and resolves within a week. Very rarely, a strong reaction at a test site may leave temporary pigmentation. The back must stay dry during the testing period.",
      sessionInfo: { duration: "15 minutes (application)", sessions: "3 visits over 4-5 days", frequency: "One-time diagnostic test", resultsIn: "Definitive results at the 96-hour reading" },
      preCare: ["Discontinue systemic steroids and immunosuppressants as advised by the doctor (timing varies)", "Do not apply topical steroids to the back for 1 week before testing", "Avoid sun exposure on the back for 2 weeks before", "Plan your schedule — you will need visits on Day 1, Day 3, and Day 5"],
      postCare: ["Keep the back dry during the 48-hour patch period — sponge baths only", "Avoid vigorous activity that causes excessive sweating", "Do not scratch or disturb the patches", "After removal, mild reactions resolve within a few days", "Follow the avoidance plan provided after results are interpreted"],
      faqs: [
        { question: "How do I know if I need patch testing?", answer: "If you have recurring rashes in the same locations, dermatitis that does not respond to standard treatment, or reactions after using specific products, patch testing can identify the trigger. Dr. Yashasve will assess whether testing is indicated based on your history." },
        { question: "Is patch testing the same as a skin prick test?", answer: "No — they test different things. Skin prick tests detect immediate (IgE-mediated) allergies like those to pollen or food. Patch tests detect delayed (T-cell-mediated) contact allergies. The conditions they diagnose, the allergens tested, and the mechanisms involved are entirely different." },
        { question: "Can children undergo patch testing?", answer: "Yes — patch testing can be performed on children when contact dermatitis is suspected. The panel may be modified based on age-relevant exposures. It is a non-invasive, safe diagnostic procedure." },
      ],
    },
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    title: "Consultation",
    desc: "Detailed history taking and skin analysis.",
    iconName: "ClipboardList",
    fullDetails: {
      what: "A 20-30 minute in-depth session where Dr. Yashasve listens to your history, lifestyle factors, and skin concerns.",
      action: "Digital dermoscopy is used to examine the skin surface in detail.",
      outcome: "A clear understanding of your skin type and triggers.",
    },
  },
  {
    step: "02",
    title: "Diagnosis",
    desc: "Root cause analysis of your condition.",
    iconName: "Search",
    fullDetails: {
      what: "Clinical evaluation backed by evidence. The focus is on diagnosis, not guesswork.",
      action: "If needed, minimal lab tests or skin scrapings are performed on the same visit.",
      outcome: "A definitive diagnosis explaining the underlying cause.",
    },
  },
  {
    step: "03",
    title: "Treatment",
    desc: "Customised plan tailored to your lifestyle.",
    iconName: "Activity",
    fullDetails: {
      what: "A personalised prescription combining medical management and/or procedures.",
      action: "Prescriptions are kept minimal and effective. Procedures are scheduled if necessary.",
      outcome: "A roadmap to recovery with clear timelines on when to expect results.",
    },
  },
  {
    step: "04",
    title: "Maintenance",
    desc: "Long-term care and follow-up plan.",
    iconName: "Heart",
    fullDetails: {
      what: "Skin health improves with consistent care, not one-off treatments.",
      action: "A simplified skincare routine is designed to maintain results at home.",
      outcome: "Sustainable, healthy skin without lifelong dependency on medicines.",
    },
  },
];

export const MARQUEE_ITEMS: string[] = [
  "Clinical Dermatology",
  "Acne Scar Revision",
  "Laser Hair Reduction",
  "Anti-Aging & Fillers",
  "Hair Restoration",
  "Medifacials & Hydration",
];

export const APPOINTMENT_SERVICES: string[] = [
  "General Dermatology",
  "Acne & Scars",
  "Hair Loss Treatment",
  "Aesthetics / Anti-Aging",
  "Laser Hair Reduction",
  "Other",
];

// TEMPLATE: Replace with real Google reviews from patients before launch.
// Do NOT present these as real patient testimonials without verification.
export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: "S. Reddy",
    treatment: "Acne Treatment",
    text: "I struggled with severe acne for years. Dr. Yashasve's approach was patient and scientific. He didn't just give creams but explained the cause. My skin is clear for the first time in 5 years. Highly recommend this clinic!",
    rating: 5,
    date: "2 months ago",
  },
  {
    id: '2',
    name: "Anjali K.",
    treatment: "Laser Hair Reduction",
    text: "The clinic at Suseela Hospital is very hygienic. I was nervous about laser, but the doctor made me feel very comfortable. Excellent results after just 3 sessions.",
    rating: 5,
    date: "1 month ago",
  },
  {
    id: '3',
    name: "Mohammed F.",
    treatment: "Hair Fall Therapy",
    text: "Honest advice. Dr. Yashasve told me exactly what to expect from PRP and didn't make false promises. I'm seeing good density improvement now. Best dermatologist in Kothapet, LB Nagar.",
    rating: 5,
    date: "3 weeks ago",
  },
  {
    id: '4',
    name: "Priya Sharma",
    treatment: "General Consultation",
    text: "Very professional and detailed consultation. The doctor takes time to listen to your concerns unlike others who rush. Medicines prescribed were affordable and effective.",
    rating: 5,
    date: "4 months ago",
  },
  {
    id: '5',
    name: "Karthik R.",
    treatment: "Skin Surgery",
    text: "Had a mole removal procedure here. It was painless and healed beautifully without any scar. Dr. Yashasve has very steady hands.",
    rating: 5,
    date: "5 months ago",
  },
];

export const FAQS: FAQ[] = [
  {
    id: '1',
    question: "Do I need a consultation before a procedure?",
    answer: "Yes. Every skin type is unique. Dr. Yashasve assesses your skin condition and medical history to ensure safety and effectiveness before recommending any procedural treatment.",
  },
  {
    id: '2',
    question: "Are the aesthetic treatments safe?",
    answer: "All procedures are performed or supervised directly by the doctor following strict sterilisation protocols. Only clinically validated technologies and high-quality consumables are used. Results may vary between individuals.",
  },
  {
    id: '3',
    question: "How soon will I see results?",
    answer: "This varies by condition. For medical issues like acne, 4-6 weeks is typical for visible improvement. Aesthetic procedures like fillers show results immediately, while lasers require multiple sessions. Individual responses differ.",
  },
  {
    id: '4',
    question: "What is the cost of consultation?",
    answer: "Transparent pricing is a priority. Please contact the clinic via WhatsApp or call for the current consultation fee and procedure price list.",
  },
  {
    id: '5',
    question: "Is there downtime after laser treatments?",
    answer: "Most modern lasers have zero to minimal downtime — typically mild redness for a few hours. You can return to work immediately, provided you apply sunscreen as directed.",
  },
];

// --- Trust Strip ---
export const TRUST_SIGNALS: TrustSignal[] = [
  { value: "Hospital-Based", label: "Clinic Setting", iconName: "Building2" },
  { value: "5,000+", label: "Patients Treated", iconName: "Users" },
  { value: "Validated", label: "Clinical Technologies", iconName: "ShieldCheck" },
  { value: "8+ Years", label: "of Experience", iconName: "Award" },
];

// --- Why Choose Us ---
export const WHY_US_CARDS: WhyUsCard[] = [
  {
    number: "01",
    title: "Evidence Over Marketing",
    description: "Every treatment plan begins with a thorough diagnosis — not a sales pitch. Dr. Yashasve follows established dermatological protocols and selects therapies with documented efficacy, not trending popularity.",
    variant: 'featured',
  },
  {
    number: "02",
    title: "Hospital-Grade Safety",
    description: "Suseela Hospital provides a medically supervised environment with sterilisation standards, emergency protocols, and clinical infrastructure that standalone clinics cannot match.",
    variant: 'dark',
  },
  {
    number: "03",
    title: "Personalised Care Plans",
    description: "No two skin types are identical. Treatment is customised after detailed assessment of your skin, medical history, lifestyle, and local environmental factors.",
    variant: 'light',
  },
  {
    number: "04",
    title: "Long-Term Partnerships",
    description: "Skin health is ongoing. Follow-up consultations, maintenance routines, and progress tracking ensure results that last beyond the treatment room.",
    variant: 'accent',
  },
  {
    number: "05",
    title: "Transparent Pricing",
    description: "No hidden costs, no upselling. You know the treatment plan and its cost before you begin. Contact us for a detailed price list.",
    variant: 'light',
  },
  {
    number: "06",
    title: "Advanced Technology",
    description: "Clinically validated laser systems, diagnostic dermoscopy, and medical-grade consumables ensure that every procedure meets the highest standards of safety and effectiveness.",
    variant: 'dark',
  },
];

// --- Conditions We Treat ---
export const CONDITIONS: Condition[] = [
  {
    id: 'acne',
    name: 'Acne & Breakouts',
    description: 'Persistent pimples, cystic acne, hormonal flare-ups, and the scarring they leave behind.',
    serviceId: 'acne-scars',
    size: 'large',
  },
  {
    id: 'pigmentation',
    name: 'Pigmentation & Dark Spots',
    description: 'Melasma, sun spots, post-inflammatory marks, and uneven skin tone that resists over-the-counter treatments.',
    serviceId: 'pigmentation',
    size: 'large',
  },
  {
    id: 'hair-thinning',
    name: 'Hair Thinning & Loss',
    description: 'Pattern baldness, receding hairline, diffuse thinning, and excessive shedding in men and women.',
    serviceId: 'hair-loss',
    size: 'medium',
  },
  {
    id: 'eczema',
    name: 'Eczema & Psoriasis',
    description: 'Chronic itchy, dry, inflamed patches that flare with stress, weather changes, or triggers you cannot identify.',
    serviceId: 'medical-derm',
    size: 'medium',
  },
  {
    id: 'aging',
    name: 'Fine Lines & Aging',
    description: 'Early wrinkles, volume loss, and skin laxity that make you look older than you feel.',
    serviceId: 'anti-aging',
    size: 'medium',
  },
  {
    id: 'unwanted-hair',
    name: 'Unwanted Body Hair',
    description: 'Facial and body hair that requires constant maintenance through waxing or shaving.',
    serviceId: 'laser-hair',
    size: 'medium',
  },
  {
    id: 'infections',
    name: 'Fungal Infections',
    description: 'Recurring ringworm, athlete\'s foot, and stubborn fungal patches common in humid climates.',
    serviceId: 'medical-derm',
    size: 'small',
  },
  {
    id: 'growths',
    name: 'Moles & Skin Tags',
    description: 'Benign growths, skin tags, and warts that are bothersome or changing in appearance.',
    serviceId: 'skin-surgery',
    size: 'small',
  },
];

// --- Clinic Gallery ---
// PLACEHOLDER: Replace all Unsplash URLs with real clinic photos before launch
export const CLINIC_PHOTOS: ClinicPhoto[] = [
  {
    src: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop',
    alt: 'Modern consultation room at Suseela Hospital',
    caption: 'Consultation Room',
    span: 'tall',
  },
  {
    src: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?q=80&w=800&auto=format&fit=crop',
    alt: 'Advanced laser equipment for dermatological procedures',
    caption: 'Laser Treatment Suite',
    span: 'wide',
  },
  {
    src: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop',
    alt: 'Welcoming reception area at the dermatology clinic',
    caption: 'Reception & Waiting Area',
    span: 'square',
  },
  {
    src: 'https://images.unsplash.com/photo-1666214280557-f1b5022eb634?q=80&w=800&auto=format&fit=crop',
    alt: 'Sterilised procedure room for skin surgery',
    caption: 'Procedure Room',
    span: 'square',
  },
  {
    src: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&auto=format&fit=crop',
    alt: 'Medical-grade skincare products used at the clinic',
    caption: 'Clinical Skincare',
    span: 'tall',
  },
  {
    src: 'https://images.unsplash.com/photo-1504439468489-c8920d796a29?q=80&w=800&auto=format&fit=crop',
    alt: 'Suseela Hospital exterior in Kothapet, LB Nagar, Hyderabad',
    caption: 'Suseela Hospital, Kothapet, LB Nagar',
    span: 'wide',
  },
];

// Featured testimonial for the redesigned section
export const FEATURED_TESTIMONIAL_INDEX = 0;

// --- Results Gallery ---
// PLACEHOLDER: Replace all URLs with real consented patient before/after photos
export const GALLERY_ITEMS = [
  { before: "https://images.unsplash.com/photo-1552693673-1bf958298935?q=80&w=800&auto=format&fit=crop", after: "https://images.unsplash.com/photo-1505944270255-72b8c68c6a70?q=80&w=800&auto=format&fit=crop", label: "Acne Scar Revision", duration: "4 Months", category: "Skin" },
  { before: "https://images.unsplash.com/photo-1596704017254-9b1b18485b6f?q=80&w=800&auto=format&fit=crop", after: "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&w=800&auto=format&fit=crop", label: "Skin Rejuvenation", duration: "6 Weeks", category: "Skin" },
  { before: "https://images.unsplash.com/photo-1552693673-1bf958298935?q=80&w=800&auto=format&fit=crop", after: "https://images.unsplash.com/photo-1505944270255-72b8c68c6a70?q=80&w=800&auto=format&fit=crop", label: "Pigmentation Correction", duration: "3 Months", category: "Skin" },
  { before: "https://images.unsplash.com/photo-1596704017254-9b1b18485b6f?q=80&w=800&auto=format&fit=crop", after: "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&w=800&auto=format&fit=crop", label: "Anti-Aging Treatment", duration: "8 Weeks", category: "Body" },
  { before: "https://images.unsplash.com/photo-1552693673-1bf958298935?q=80&w=800&auto=format&fit=crop", after: "https://images.unsplash.com/photo-1505944270255-72b8c68c6a70?q=80&w=800&auto=format&fit=crop", label: "Hair Density Improvement", duration: "6 Months", category: "Hair" },
  { before: "https://images.unsplash.com/photo-1596704017254-9b1b18485b6f?q=80&w=800&auto=format&fit=crop", after: "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&w=800&auto=format&fit=crop", label: "Laser Hair Reduction", duration: "4 Sessions", category: "Body" },
];

export const RESULTS_FAQS: FAQ[] = [
  { id: 'r1', question: "Are these results from real patients?", answer: "All clinical results shown are illustrative and represent typical outcomes. Individual results may vary based on skin type, condition severity, and treatment adherence. Replace with real consented patient photos before launch." },
  { id: 'r2', question: "How long do results typically last?", answer: "This depends on the treatment and condition. Acne management can provide lasting clearance with maintenance. Pigmentation improvements are sustained with sun protection. Injectable results last 4-18 months. Dr. Yashasve sets realistic expectations during consultation." },
  { id: 'r3', question: "Will I need maintenance treatments?", answer: "Most conditions benefit from periodic maintenance. The frequency depends on your individual response, the treatment type, and lifestyle factors. A maintenance plan is designed as part of your initial treatment protocol." },
  { id: 'r4', question: "When will I see improvement?", answer: "Timeline varies by treatment: chemical peels show results in days, laser toning over weeks, PRP/GFC over months. Dr. Yashasve provides a realistic timeline specific to your treatment plan during consultation." },
];
