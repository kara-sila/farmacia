// Content for the three leaflets
window.PRODUCTS = {
  advil: {
    kind: "Painkiller",
    title: "Advil",
    img: "img/advil.png",
    buy: ["Get Advil", "https://www.advil.com/"],
    alt: "A blue box of Advil, ibuprofen tablets 200 mg, 50 coated tablets",
    short: "Painkiller. Works on the cause of the cramp.",
    marks: ["driven by prostaglandins", "treats the cause of the cramp", "beat paracetamol for period pain", "Take it with food"],
    facts: [
      ["Brand", "Advil, owned by Haleon (formerly Wyeth, then Pfizer)"],
      ["Active ingredient", "Ibuprofen 200 mg, an NSAID. Not paracetamol."],
      ["On the market", "Over the counter in the US since 1984"],
      ["Molecule by", "Stewart Adams and John Nicholson at Boots, UK, patented 1961"]
    ],
    body: [
      "Period cramps are driven by prostaglandins, the chemicals that make the uterus contract. Ibuprofen blocks the COX enzymes that produce them, so it treats the cause of the cramp, not only the feeling of pain.",
      "That is also why it tends to beat paracetamol for period pain. A Cochrane review found NSAIDs worked better than paracetamol, though it could not say which NSAID is best.",
      "Read the leaflet. Take it with food, and skip it if you have stomach ulcers, kidney problems or are told to avoid NSAIDs."
    ],
    stamp: "Yes, eventually.",
    tested: "Ibuprofen was first trialled in 1966 on six people with rheumatoid arthritis. From 1977 to 1993 FDA guidance kept most women who could get pregnant out of early-phase drug trials. For period pain specifically, a 2015 Cochrane review pooled 80 trials with 5,820 women with primary dysmenorrhoea: about 45 to 53% got good relief, against 18% on placebo. The catch: evidence quality was rated low, and 59% of the trials were funded by drug companies.",
    groups: [
      ["Pregnant", "Not part of the period pain trials, since there are no periods during pregnancy. Separately, the FDA says to avoid NSAIDs from 20 weeks of pregnancy unless a doctor advises it."],
      ["Perimenopausal", "Not studied as a group in the period pain trials we found, even though periods can change and hurt more in these years. A gap."],
      ["Menopausal and postmenopausal", "No periods, so not part of these trials."],
      ["Stage of the cycle", "Tested on the painful days of the period itself. The trials are about women with primary period pain, which is most common in the teens and twenties."]
    ],
    sources: [
      ["Cochrane: NSAIDs for dysmenorrhoea (2015)", "https://www.cochrane.org/CD001751/MENSTR_nonsteroidal-anti-inflammatory-drugs-for-dysmenorrhoea"],
      ["Pharmaceutical Journal: a brief history of ibuprofen", "https://pharmaceutical-journal.com/article/infographics/a-brief-history-of-ibuprofen"],
      ["Haleon: how Advil became a global icon", "https://www.haleon.com/news/our-stories/world-class-brands/2026/how-advil-became-a-global-icon"],
      ["Office on Women's Health: women in clinical research", "https://www.womenshealth.gov/node/994"],
      ["FDA: avoid NSAIDs in pregnancy at 20 weeks or later (2020)", "https://www.fda.gov/safety/medical-product-safety-information/nonsteroidal-anti-inflammatory-drugs-nsaids-drug-safety-communication-avoid-use-nsaids-pregnancy-20"]
    ]
  },

  socks: {
    kind: "Warmth",
    title: "Thick wool socks",
    img: "img/socks.png",
    buy: ["Get Socks", "https://www.google.com/search?tbm=shop&q=thick+wool+socks"],
    alt: "A pair of thick, ochre, chunky-knit wool socks",
    short: "Warmth. A grandmother's way to stop the pain before it starts.",
    marks: ["best-studied home remedies", "about as well as 400 mg of ibuprofen", "heated the belly, not the feet", "put the heat where it hurts"],
    facts: [
      ["Material", "Chunky marled knit, wool blend"],
      ["Works by", "Keeping you warm"],
      ["Dose", "One pair, before your period starts. Reapply as needed."],
      ["Side effects", "Wanting to stay on the sofa"]
    ],
    extra: {
      title: "Grandmother's advice",
      quote: "Put your socks on before your period comes, and it won't hurt.",
      who: "Turkish grandmothers, for generations",
      text: [
        "In Turkey this is kocakarı wisdom: keep your feet warm, and start before your period does. So the socks are not a cure for pain you already have. They are meant to prevent it.",
        "Has anyone tested the preventing part? Only loosely. A 2023 survey of 419 women in the US found that some cold habits in winter, like cold drinks or a cold home, went together with worse period pain, especially in women who often have cold hands and feet. But a survey can't show cause, and some results went the other way. Nobody has run a trial of warm feet before a period."
      ]
    },
    body: [
      "Heat is one of the best-studied home remedies for cramps. Warmth relaxes muscle and dulls pain signals, and wool holds heat close to the skin even when it is damp.",
      "In a 2001 trial, a low heat patch worn on the lower belly for 12 hours a day relieved period pain about as well as 400 mg of ibuprofen taken three times a day. Heat plus ibuprofen did a little better than either alone.",
      "To be honest with you: that trial heated the belly, not the feet. Warm socks are the folk version of the same advice. They keep your whole body cosy, which helps, but if cramps are bad, put the heat where it hurts."
    ],
    stamp: "Yes, in small trials.",
    tested: "Heat during the period, yes. The 2001 US trial enrolled 84 women and 81 finished it. A trial in Iran, published in 2012, tested a heat patch against ibuprofen in 147 university students aged 18 to 30 and found them comparable. Warm feet before the period, as grandmothers advise, has only the 2023 survey of 419 women behind it.",
    groups: [
      ["Pregnant", "Excluded. The 2001 trial took only non-pregnant women using contraception, and the Iran trial excluded anyone who had given birth."],
      ["Perimenopausal", "Not studied as a group. The Iran trial only took women aged 18 to 30."],
      ["Menopausal and postmenopausal", "Not in the heat trials. In the 2023 cold survey, about half of the white women were postmenopausal and answered from memory about their last years of periods."],
      ["Stage of the cycle", "Heat was tested during the first day or two of the period. Nobody has tested warmth in the days before it, which is exactly when grandmothers say to start."]
    ],
    sources: [
      ["Akin et al., Continuous low-level topical heat in the treatment of dysmenorrhea (2001)", "https://pubmed.ncbi.nlm.nih.gov/11239634/"],
      ["Summary of the Akin trial, American Family Physician (2001)", "https://www.aafp.org/afp/2001/1015/p1439.html"],
      ["Navvabi Rigi et al., heat wrap vs ibuprofen (BMC Women's Health, 2012)", "https://bmcwomenshealth.biomedcentral.com/articles/10.1186/1472-6874-12-25"],
      ["Wu et al., Cold exposures in relation to dysmenorrhea among Asian and White women (2023)", "https://mdpi.com/1660-4601/21/1/56"]
    ]
  },

  cranberries: {
    kind: "Grandmother's remedy",
    title: "Dried cranberries",
    img: "img/cranberries.png",
    buy: ["Get Cranberries", "https://www.walmart.com/search?q=great+value+sweetened+dried+cranberries"],
    alt: "A pink bag of Great Value sweetened dried cranberries, 680 g",
    short: "Grandmother's remedy. Lovely snack, no evidence.",
    marks: ["someone's grandmother swears by them", "not a single trial", "urinary tract infections", "mostly a snack"],
    facts: [
      ["Brand", "Great Value, Walmart's store brand"],
      ["Contents", "Sweetened dried cranberries, 680 g"],
      ["Works by", "Tasting nice"],
      ["Prescribed by", "Aunts, grandmothers, the internet"]
    ],
    body: [
      "Cranberries are on this shelf because someone's grandmother swears by them. We keep the kocakarı remedies too, with an honest label.",
      "We searched the medical journals and found not a single trial of cranberry for period pain. A Cochrane review of dietary supplements for period pain looked at 27 trials with 3,101 women. It covered chamomile, cinnamon, ginger, fennel, valerian, zinc and more, but no cranberry.",
      "Where cranberry has been studied seriously is urinary tract infections. That is probably how it got its reputation as a remedy for women.",
      "This bag is sweetened, so it is mostly a snack. A good snack. Eat it with your socks on."
    ],
    stamp: "Not for cramps.",
    tested: "Not for period pain: we found no study at all. For urinary tract infections, yes, a lot. A 2023 Cochrane review pooled 50 trials with 8,857 people. Cranberry probably lowers the risk in women who keep getting UTIs.",
    groups: [
      ["Pregnant", "Only in the UTI research. Three trials with 765 pregnant women found little or no benefit for preventing UTIs."],
      ["Perimenopausal", "No study for period pain. We found none that looks at this group on its own."],
      ["Menopausal and postmenopausal", "No study for period pain. In the UTI research, elderly people in care homes were studied and showed little or no benefit."],
      ["Stage of the cycle", "Never studied in relation to the cycle."]
    ],
    sources: [
      ["Cochrane: dietary supplements for dysmenorrhoea (2016)", "https://www.cochrane.org/CD002124/MENSTR_dietary-supplements-dysmenorrhoea"],
      ["Cochrane: cranberries for preventing urinary tract infections (2023)", "https://www.cochrane.org/CD001321/RENAL_cranberries-preventing-urinary-tract-infections"],
      ["Well+Good: an OB/GYN on cranberry juice and cramps", "https://www.wellandgood.com/does-cranberry-juice-help-with-cramps"]
    ]
  }
};
