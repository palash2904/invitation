import { InviteConfig, InviteType, WeddingCoupleInfo, WeddingDay, WeddingTranslations } from '../models/wedding-event.model';

export const WEDDING_COUPLE: WeddingCoupleInfo = {
  groom: 'Palash',
  groomHi: 'पलाश',
  bride: 'Sonam',
  brideHi: 'सोनम',
  weddingDatesEn: '30 November & 1 December 2026',
  weddingDatesHi: '30 नवंबर एवं 1 दिसंबर 2026',
  targetCountdownDate: '2026-11-30T10:00:00',
  venueName: 'Mahaveer Bagh',
  venueNameHi: 'महावीर बाग',
  venueAddress: 'Airport Road, Agrasen Nagar, Indore, Madhya Pradesh, 452006',
  venueAddressHi: 'एयरपोर्ट रोड, अग्रसेन नगर, इंदौर, मध्य प्रदेश, 452006',
  venueCity: 'Indore, Madhya Pradesh',
  venueCityHi: 'इंदौर, मध्य प्रदेश',
  venueMapUrl: 'https://maps.google.com/?q=Mahaveer+Bagh+Airport+Road+Agrasen+Nagar+Indore+Madhya+Pradesh+452006'
};

/* Day 1: 30 November Events */
const DAY_1_EVENTS: WeddingDay = {
  date: '30 November 2026',
  dateKey: '2026-11-30',
  dateFormattedEn: 'Monday, 30 November 2026',
  dateFormattedHi: 'सोमवार, 30 नवंबर 2026',
  dayNameEn: 'Day 1 — Sacred Beginnings & Sangeet',
  dayNameHi: 'प्रथम दिवस — शुभारंभ एवं संगीत संध्या',
  events: [
    {
      id: 'mata-poojan-groom',
      time: '10:00 AM',
      timeHi: 'प्रातः 10:00 बजे',
      title: 'Mata Poojan',
      titleHi: 'माता पूजन',
      description: 'Invoking divine blessings for an auspicious start to our sacred journey.',
      descriptionHi: 'विवाह के शुभारंभ पर कुलदेवी एवं भगवान श्री गणेश जी का पूजन कर, मंगलमय वैवाहिक जीवन का आशीर्वाद प्राप्त करेंगे।',
      venueName: "Groom's Residence",
      venueNameHi: 'वर गृह निवास',
      venueAddress: '31/8 Vrindavan Colony, Indore',
      venueAddressHi: '31/8 वृंदावन कॉलोनी, इंदौर',
      venueMapUrl: 'https://maps.google.com/?q=31/8+Vrindavan+Colony+Indore',
      iconType: 'diya',
      sideTag: 'groom',
      sideTagEn: "Groom's Side",
      sideTagHi: 'वर पक्ष'
    },
    {
      id: 'mata-poojan-bride',
      time: '10:00 AM',
      timeHi: 'प्रातः 10:00 बजे',
      title: 'Mata Poojan',
      titleHi: 'माता पूजन',
      description: 'Invoking divine blessings and grace for eternal happiness, harmony and prosperity.',
      descriptionHi: 'विवाह के पावन अवसर पर कुलदेवी एवं विघ्नहर्ता श्री गणेश जी का पूजन कर सुख-समृद्धि का आशीर्वाद प्राप्त करेंगे।',
      venueName: "Bride's Residence",
      venueNameHi: 'वधू गृह निवास',
      venueAddress: '45 Nanda Nagar, Indore',
      venueAddressHi: '45 नंदा नगर, इंदौर',
      venueMapUrl: 'https://maps.google.com/?q=Nanda+Nagar+Indore',
      iconType: 'diya',
      sideTag: 'bride',
      sideTagEn: "Bride's Side",
      sideTagHi: 'वधू पक्ष'
    },
    {
      id: 'mamera',
      time: '1:00 PM',
      timeHi: 'दोपहर 1:00 बजे',
      title: 'Mamera',
      titleHi: 'मामेरा (भात)',
      description: 'Traditional maternal blessing ceremony welcoming beloved family and gifts.',
      descriptionHi: 'मातृपक्ष की ओर से स्नेह, उपहार और मंगल आशीर्वाद के साथ निभाई जाने वाली पारंपरिक एवं शुभ रस्म।',
      iconType: 'gift'
    },
    {
      id: 'mahela-sangeet',
      time: '7:00 PM',
      timeHi: 'सायं 7:00 बजे',
      title: 'Mahela Sangeet',
      titleHi: 'महिला संगीत',
      description: 'An evening of rhythm, vibrant dance performances, music, and boundless joy.',
      descriptionHi: 'संगीत, नृत्य और हंसी-खुशी से सजी एक खूबसूरत शाम, जहाँ परिवार की प्रस्तुतियाँ इस उत्सव में और भी रंग भरेंगी।',
      iconType: 'music'
    }
  ]
};

/* Day 2: 1 December Complete Events */
const DAY_2_ALL_EVENTS: WeddingDay = {
  date: '1 December 2026',
  dateKey: '2026-12-01',
  dateFormattedEn: 'Tuesday, 1 December 2026',
  dateFormattedHi: 'मंगलवार, 1 दिसंबर 2026',
  dayNameEn: 'Day 2 — Auspicious Unions & Royal Celebrations',
  dayNameHi: 'द्वितीय दिवस — शुभ मिलन एवं भव्य उत्सव',
  events: [
    {
      id: 'engagement',
      time: '10:30 AM',
      timeHi: 'प्रातः 10:30 बजे',
      title: 'Engagement',
      titleHi: 'सगाई समारोह',
      description: 'Exchanging rings of love and eternal promises of companionship.',
      descriptionHi: 'प्रेम और साथ के इस खूबसूरत रिश्ते को अंगूठियों के आदान-प्रदान और जीवनभर साथ निभाने के वादे के साथ मनाने का शुभ अवसर।',
      iconType: 'ring'
    },
    {
      id: 'haldi',
      time: '1:00 PM',
      timeHi: 'दोपहर 1:00 बजे',
      title: 'Haldi',
      titleHi: 'हल्दी उत्सव',
      description: 'Golden hues of turmeric, laughter, floral showers, and playful moments.',
      descriptionHi: 'पीली हल्दी की चमक, फूलों की बौछार, हंसी-खुशी और अपनों के साथ मस्ती से भरी एक रंगीन और यादगार रस्म।',
      iconType: 'haldi'
    },
    {
      id: 'var-nikasi',
      time: '6:00 PM',
      timeHi: 'सायं 6:00 बजे',
      title: 'Var Nikasi',
      titleHi: 'वर निकासी',
      description: 'The royal groom procession accompanied by traditional festive fanfare.',
      descriptionHi: 'ढोल-नगाड़ों और बैंड-बाजे की गूंज के साथ, दूल्हे की भव्य वर निकासी का शुभ प्रस्थान।',
      iconType: 'horse'
    },
    {
      id: 'reception',
      time: '7:00 PM onwards',
      timeHi: 'सायं 7:00 बजे से',
      title: 'Reception / Dinner',
      titleHi: 'स्वागत समारोह एवं रात्रिभोज',
      description: 'A sumptuous royal culinary feast to celebrate togetherness with family and friends.',
      descriptionHi: 'परिवार और स्नेहीजनों के साथ इस खुशी को साझा करने एवं नवदंपति को आशीर्वाद देने के लिए स्नेहपूर्वक आयोजित स्वागत समारोह एवं रात्रिभोज।',
      iconType: 'dining'
    }
  ]
};

/* Day 2 (When displayed alone): 1 December Complete Events */
const DAY_2_SOLO_EVENTS: WeddingDay = {
  date: '1 December 2026',
  dateKey: '2026-12-01',
  dateFormattedEn: 'Tuesday, 1 December 2026',
  dateFormattedHi: 'मंगलवार, 1 दिसंबर 2026',
  dayNameEn: '1 December — Auspicious Celebrations & Reception',
  dayNameHi: '1 दिसंबर — शुभ उत्सव एवं स्वागत समारोह',
  events: DAY_2_ALL_EVENTS.events
};

/* Reception Only Event */
const DAY_RECEPTION_ONLY: WeddingDay = {
  date: '1 December 2026',
  dateKey: '2026-12-01',
  dateFormattedEn: 'Tuesday, 1 December 2026',
  dateFormattedHi: 'मंगलवार, 1 दिसंबर 2026',
  dayNameEn: 'Wedding Reception & Dinner Feast',
  dayNameHi: 'विवाह स्वागत समारोह एवं रात्रिभोज',
  events: [
    {
      id: 'reception-only',
      time: '7:00 PM onwards',
      timeHi: 'सायं 7:00 बजे से',
      title: 'Reception / Dinner',
      titleHi: 'स्वागत समारोह एवं रात्रिभोज',
      description: 'A joyous evening of celebration, delicious royal cuisine, and heartfelt blessings.',
      descriptionHi: 'परिवार और स्नेहीजनों के साथ खुशियाँ मनाने, नवदंपति को आशीर्वाद देने और स्नेहपूर्वक आयोजित रात्रिभोज का आनंद लेने की एक यादगार शाम।',
      iconType: 'dining'
    }
  ]
};

/* Three Distinct Invitation Types */
export const INVITE_CONFIGS: Record<InviteType, InviteConfig> = {
  both: {
    type: 'both',
    titleEn: 'Wedding Invitation',
    titleHi: 'शुभ विवाह निमंत्रण',
    weddingDatesEn: '30 November & 1 December 2026',
    weddingDatesHi: '30 नवंबर एवं 1 दिसंबर 2026',
    targetCountdownDate: '2026-11-30T10:00:00',
    eventsSubheadingEn: 'Two unforgettable days of sacred traditions, laughter & love',
    eventsSubheadingHi: 'मंगलमय परंपराओं, हंसी-खुशी और प्रेम से सजे दो यादगार दिन',
    highlightDate1Num: '30',
    highlightDate1Month: 'November',
    highlightDate2Num: '01',
    highlightDate2Month: 'December',
    highlightYear: '2026',
    highlightTaglineEn: 'Underneath golden skies and glowing lanterns, our forever takes flight.',
    highlightTaglineHi: 'सुनहरी शाम और जगमगाते दीपों की रोशनी में, हमारे जीवन के इस खूबसूरत सफर की नई शुरुआत हो रही है।',
    days: [DAY_1_EVENTS, DAY_2_ALL_EVENTS]
  },
  dec1: {
    type: 'dec1',
    titleEn: '1 December Wedding Celebration',
    titleHi: '1 दिसंबर शुभ विवाह समारोह',
    weddingDatesEn: '1 December 2026',
    weddingDatesHi: '1 दिसंबर 2026',
    targetCountdownDate: '2026-12-01T10:30:00',
    eventsSubheadingEn: 'An auspicious day of Engagement, Haldi, Var Nikasi & Royal Reception',
    eventsSubheadingHi: 'सगाई, हल्दी, वर निकासी एवं स्वागत समारोह से सजा शुभ दिन',
    highlightDate1Num: 'TUE',
    highlightDate1Month: '01 Dec',
    highlightDate2Num: '01',
    highlightDate2Month: 'December',
    highlightYear: '2026',
    highlightTaglineEn: 'A magical day filled with sacred rituals, joy, music and royal celebration.',
    highlightTaglineHi: 'सगाई, हल्दी की खुशियों, भव्य वर निकासी और स्वागत समारोह से सजा एक यादगार दिन।',
    days: [DAY_2_SOLO_EVENTS]
  },
  reception: {
    type: 'reception',
    titleEn: 'Wedding Reception Invitation',
    titleHi: 'विवाह स्वागत समारोह निमंत्रण',
    weddingDatesEn: '1 December 2026 • 7:00 PM onwards',
    weddingDatesHi: '1 दिसंबर 2026 • सायं 7:00 बजे से',
    targetCountdownDate: '2026-12-01T19:00:00',
    eventsSubheadingEn: 'Join us for a magical evening of royal reception, dinner feast & blessings',
    eventsSubheadingHi: 'खुशियों, स्नेह और आशीर्वाद से सजी इस यादगार शाम में हमारे साथ पधारें',
    highlightDate1Num: '7:00',
    highlightDate1Month: 'PM Onwards',
    highlightDate2Num: '01',
    highlightDate2Month: 'December',
    highlightYear: '2026',
    highlightTaglineEn: 'Your gracious presence and blessings will make our celebration complete.',
    highlightTaglineHi: 'आपकी गरिमामयी उपस्थिति और स्नेहाशीर्वाद से हमारा यह उत्सव और भी खास हो जाएगा।',
    days: [DAY_RECEPTION_ONLY]
  }
};

export const WEDDING_DAYS: WeddingDay[] = INVITE_CONFIGS.both.days;

export const TRANSLATIONS: Record<'en' | 'hi', WeddingTranslations> = {
  en: {
    hero: {
      togetherWithFamilies: 'Together with their families',
      areGettingMarried: 'are getting married',
      dates: '30 November & 1 December 2026',
      viewInvitationBtn: 'View Invitation',
      scrollHint: 'Scroll to explore'
    },
    welcome: {
      heading: 'With hearts full of love',
      subheading: 'A sacred union of two souls',
      message: 'We invite you to celebrate the beginning of our forever and bless us as we start this beautiful journey together.',
      blessing: 'Your presence, love, and warm wishes will illuminate our special days with joy.'
    },
    countdown: {
      heading: 'Counting down to forever',
      subheading: 'Until our magical celebrations commence',
      days: 'Days',
      hours: 'Hours',
      minutes: 'Minutes',
      seconds: 'Seconds',
      celebrationStarted: 'The celebrations have begun! ❤️'
    },
    events: {
      heading: 'Our Wedding Celebrations',
      subheading: 'Two unforgettable days of sacred traditions, laughter & love',
      scheduleNote: 'Mata Poojan will be held separately at respective residences (Groom: 31/8 Vrindavan Colony | Bride: 45 Nanda Nagar, Indore). All other ceremonies will take place at Mahaveer Bagh, Airport Road, Indore.'
    },
    story: {
      heading: 'Our Beautiful Journey',
      subheading: 'From the first gentle glance to our eternal tomorrow',
      captions: {
        twoHearts: 'Two Hearts',
        oneJourney: 'One Beautiful Journey',
        foreverBegins: 'Forever Begins Here'
      },
      description1: 'In a world filled with endless possibilities, two paths crossed and blossomed into an everlasting bond of companionship, laughter, and mutual dreams.',
      description2: 'With the gracious blessings of our elders and loved ones, we step hand in hand into a lifetime of cherished memories.'
    },
    highlight: {
      heading: 'Two Days of Love, Laughter & Celebration',
      subheading: 'A picturesque celebration painted with royal warmth',
      date1: '30 November',
      date2: '1 December',
      year: '2026',
      tagline: 'Underneath golden skies and glowing lanterns, our forever takes flight.'
    },
    closing: {
      heading: "We can't wait to celebrate with you",
      subheading: 'Your presence will make our wedding truly complete',
      dates: '30 November & 1 December 2026',
      withLove: 'With love,',
      saveTheDate: 'Save The Date'
    },
    footer: {
      madeWithLove: 'Made with love for our special day ❤️',
      year: '2026'
    },
    controls: {
      musicOn: '🔊 Music On',
      musicOff: '🔇 Music Off',
      playMusic: 'Play Music',
      pauseMusic: 'Pause Music',
      language: 'Language'
    }
  },
  hi: {
    hero: {
      togetherWithFamilies: 'सपरिवार सादर आमंत्रण',
      areGettingMarried: 'विवाह के पावन बंधन में बंधने जा रहे हैं',
      dates: '30 नवंबर एवं 1 दिसंबर 2026',
      viewInvitationBtn: 'निमंत्रण देखें',
      scrollHint: 'नीचे देखें'
    },
    welcome: {
      heading: 'प्रेम से भरे दिलों के साथ',
      subheading: 'दो दिलों के मिलन का खूबसूरत अवसर',
      message: 'हमारे जीवन के इस नए सफर की शुरुआत को अपनी उपस्थिति और आशीर्वाद से खास बनाने के लिए आपको सादर आमंत्रित करते हैं।',
      blessing: 'आपकी उपस्थिति, स्नेह और शुभकामनाएँ हमारे इन खास दिनों की खुशियों को और भी बढ़ा देंगी।'
    },
    countdown: {
      heading: 'उस खास पल का इंतज़ार',
      subheading: 'हमारे खूबसूरत उत्सव की शुरुआत तक',
      days: 'दिन',
      hours: 'घंटे',
      minutes: 'मिनट',
      seconds: 'सेकंड',
      celebrationStarted: 'उत्सव की शुरुआत हो चुकी है! ❤️'
    },
    events: {
      heading: 'हमारे विवाह के शुभ अवसर',
      subheading: 'परंपराओं, हंसी-खुशी और प्रेम से सजे दो यादगार दिन',
      scheduleNote: 'माता पूजन वर पक्ष (31/8 वृंदावन कॉलोनी) एवं वधू पक्ष (45 नंदा नगर) के गृह निवास पर तथा अन्य समस्त मांगलिक कार्यक्रम महावीर बाग, एयरपोर्ट रोड, इंदौर में आयोजित किए जाएंगे।'
    },
    story: {
      heading: 'हमारे रिश्ते का खूबसूरत सफर',
      subheading: 'पहली मुलाकात से साथ निभाने के इस खूबसूरत सफर तक',
      captions: {
        twoHearts: 'दो दिल',
        oneJourney: 'एक खूबसूरत सफर',
        foreverBegins: 'हमेशा की शुरुआत यहीं से'
      },
      description1: 'ज़िंदगी की अनगिनत राहों के बीच हमारी मुलाकात हुई और धीरे-धीरे यह रिश्ता दोस्ती, हंसी, अपनापन और साझा सपनों से एक खूबसूरत बंधन में बदल गया।',
      description2: 'अपने बड़ों और अपनों के स्नेह एवं आशीर्वाद के साथ, हम एक-दूसरे का हाथ थामे जीवनभर के इस खूबसूरत सफर की नई शुरुआत करने जा रहे हैं।'
    },
    highlight: {
      heading: 'प्रेम, खुशियों और उत्सव से सजे दो खास दिन',
      subheading: 'शाही अंदाज़ और सुनहरी आभा से सजा एक खूबसूरत उत्सव',
      date1: '30 नवंबर',
      date2: '1 दिसंबर',
      year: '2026',
      tagline: 'सुनहरी शाम और जगमगाते दीपों की रोशनी में, हमारे जीवन के इस खूबसूरत सफर की नई शुरुआत हो रही है।'
    },
    closing: {
      heading: 'आपके साथ इन खुशियों को मनाने का हमें बेसब्री से इंतज़ार है',
      subheading: 'आपकी उपस्थिति और आशीर्वाद हमारे इस खास दिन को और भी यादगार बना देंगे',
      dates: '30 नवंबर एवं 1 दिसंबर 2026',
      withLove: 'स्नेह सहित,',
      saveTheDate: 'यह शुभ तिथि अवश्य याद रखें'
    },
    footer: {
      madeWithLove: 'हमारे इस खास दिन के लिए प्रेम और स्नेह के साथ ❤️',
      year: '2026'
    },
    controls: {
      musicOn: '🔊 संगीत चालू',
      musicOff: '🔇 संगीत बंद',
      playMusic: 'संगीत बजाएँ',
      pauseMusic: 'संगीत रोकें',
      language: 'भाषा'
    }
  }
};
