import { InviteConfig, InviteType, WeddingCoupleInfo, WeddingDay, WeddingTranslations } from '../models/wedding-event.model';

export const WEDDING_COUPLE: WeddingCoupleInfo = {
  groom: 'Palash',
  groomHi: 'पलाश',
  bride: 'Sonam',
  brideHi: 'सोनम',
  weddingDatesEn: '30 November & 1 December 2026',
  weddingDatesHi: '३० नवंबर एवं १ दिसंबर २०२६',
  targetCountdownDate: '2026-11-30T10:00:00',
  venueCity: 'Udaipur, Rajasthan',
  venueCityHi: 'उदयपुर, राजस्थान'
};

/* Day 1: 30 November Events */
const DAY_1_EVENTS: WeddingDay = {
  date: '30 November 2026',
  dateKey: '2026-11-30',
  dateFormattedEn: 'Monday, 30 November 2026',
  dateFormattedHi: 'सोमवार, ३० नवंबर २०२६',
  dayNameEn: 'Day 1 — Sacred Beginnings & Sangeet',
  dayNameHi: 'प्रथम दिवस — मांगलिक अनुष्ठान, भात एवं संगीत संध्या',
  events: [
    {
      id: 'mata-poojan',
      time: '10:00 AM',
      timeHi: 'प्रातः १०:०० बजे',
      title: 'Mata Poojan',
      titleHi: 'माता पूजन',
      description: 'Invoking divine blessings for an auspicious start to our sacred journey.',
      descriptionHi: 'विवाह उत्सव के निर्विघ्न शुभारंभ हेतु कुलदेवी एवं श्री गणेश जी का पावन पूजन व आशीर्वाद।',
      iconType: 'diya'
    },
    {
      id: 'mamera',
      time: '1:00 PM',
      timeHi: 'दोपहर ०१:०० बजे',
      title: 'Mamera',
      titleHi: 'मामेरा (भात)',
      description: 'Traditional maternal blessing ceremony welcoming beloved family and gifts.',
      descriptionHi: 'मातृपक्ष (नानिहाल) द्वारा स्नेह, चुनरी, उपहारों एवं मंगल आशीर्वाद की पारंपरिक रस्म।',
      iconType: 'gift'
    },
    {
      id: 'mahela-sangeet',
      time: '7:00 PM',
      timeHi: 'सायं ०७:०० बजे',
      title: 'Mahela Sangeet',
      titleHi: 'महिला संगीत',
      description: 'An evening of rhythm, vibrant dance performances, music, and boundless joy.',
      descriptionHi: 'पारिवारिक नृत्य प्रस्तुतियों, ढोलक की मधुर थाप और सुरमयी गीतों से सजी यादगार संध्या।',
      iconType: 'music'
    }
  ]
};

/* Day 2: 1 December Complete Events */
const DAY_2_ALL_EVENTS: WeddingDay = {
  date: '1 December 2026',
  dateKey: '2026-12-01',
  dateFormattedEn: 'Tuesday, 1 December 2026',
  dateFormattedHi: 'मंगलवार, १ दिसंबर २०२६',
  dayNameEn: 'Day 2 — Auspicious Unions & Royal Celebrations',
  dayNameHi: 'द्वितीय दिवस — सगाई, हल्दी, वर निकासी एवं शाही प्रीतिभोज',
  events: [
    {
      id: 'engagement',
      time: '10:30 AM',
      timeHi: 'प्रातः १०:३० बजे',
      title: 'Engagement',
      titleHi: 'सगाई समारोह',
      description: 'Exchanging rings of love and eternal promises of companionship.',
      descriptionHi: 'एक-दूसरे को मुद्रिका (अंगूठी) पहनाकर जीवन भर साथ निभाने का पावन एवं स्नेहिल संकल्प।',
      iconType: 'ring'
    },
    {
      id: 'haldi',
      time: '1:00 PM',
      timeHi: 'दोपहर ०१:०० बजे',
      title: 'Haldi',
      titleHi: 'हल्दी उत्सव',
      description: 'Golden hues of turmeric, laughter, floral showers, and playful moments.',
      descriptionHi: 'शुभ शगुन की पीली हल्दी, सुगंधित पुष्प वर्षा और परिजनों के अगाध लाड़-प्यार की रंगारंग रस्म।',
      iconType: 'haldi'
    },
    {
      id: 'var-nikasi',
      time: '6:00 PM',
      timeHi: 'सायं ०६:०० बजे',
      title: 'Var Nikasi',
      titleHi: 'वर निकासी',
      description: 'The royal groom procession accompanied by traditional festive fanfare.',
      descriptionHi: 'पारंपरिक ढोल-नगाड़ों, बैंड-बाजे और शाही ठाठ-बाट के साथ बारात का शुभ प्रस्थान।',
      iconType: 'horse'
    },
    {
      id: 'reception',
      time: '7:00 PM onwards',
      timeHi: 'सायं ०७:०० बजे से',
      title: 'Reception / Dinner',
      titleHi: 'शाही प्रीतिभोज (रिसेप्शन)',
      description: 'A sumptuous royal culinary feast to celebrate togetherness with family and friends.',
      descriptionHi: 'नवदंपति के शुभाशीर्वाद एवं स्नेहीजनों के सत्कार हेतु आयोजित सुरुचिपूर्ण शाही भोज।',
      iconType: 'dining'
    }
  ]
};

/* Day 2 (When displayed alone): 1 December Complete Events */
const DAY_2_SOLO_EVENTS: WeddingDay = {
  date: '1 December 2026',
  dateKey: '2026-12-01',
  dateFormattedEn: 'Tuesday, 1 December 2026',
  dateFormattedHi: 'मंगलवार, १ दिसंबर २०२६',
  dayNameEn: '1 December — Auspicious Celebrations & Reception',
  dayNameHi: '१ दिसंबर — शुभ विवाह अनुष्ठान एवं प्रीतिभोज',
  events: DAY_2_ALL_EVENTS.events
};

/* Reception Only Event */
const DAY_RECEPTION_ONLY: WeddingDay = {
  date: '1 December 2026',
  dateKey: '2026-12-01',
  dateFormattedEn: 'Tuesday, 1 December 2026',
  dateFormattedHi: 'मंगलवार, १ दिसंबर २०२६',
  dayNameEn: 'Wedding Reception & Dinner Feast',
  dayNameHi: 'शाही प्रीतिभोज एवं स्नेह मिलन',
  events: [
    {
      id: 'reception-only',
      time: '7:00 PM onwards',
      timeHi: 'सायं ०७:०० बजे से',
      title: 'Reception / Dinner',
      titleHi: 'शाही प्रीतिभोज (रिसेप्शन)',
      description: 'A joyous evening of celebration, delicious royal cuisine, and heartfelt blessings.',
      descriptionHi: 'नवदंपति को पावन शुभाशीर्वाद एवं स्नेहीजनों के सम्मान में आयोजित भव्य सुरुचिपूर्ण शाही भोज।',
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
    weddingDatesHi: '३० नवंबर एवं १ दिसंबर २०२६',
    targetCountdownDate: '2026-11-30T10:00:00',
    eventsSubheadingEn: 'Two unforgettable days of sacred traditions, laughter & love',
    eventsSubheadingHi: 'मांगलिक परंपराओं, सुरमयी संगीत और उल्लास से सजे दो पावन दिवस',
    highlightDate1Num: '30',
    highlightDate1Month: 'November',
    highlightDate2Num: '01',
    highlightDate2Month: 'December',
    highlightYear: '2026',
    highlightTaglineEn: 'Underneath golden skies and glowing lanterns, our forever takes flight.',
    highlightTaglineHi: 'दीपों की मनमोहक रोशनी और राजस्थान की सुरमयी छटा में, शुरू हो रहा है हमारा हमेशा का सफर।',
    days: [DAY_1_EVENTS, DAY_2_ALL_EVENTS]
  },
  dec1: {
    type: 'dec1',
    titleEn: '1 December Wedding Celebration',
    titleHi: '१ दिसंबर शुभ विवाह समारोह',
    weddingDatesEn: '1 December 2026',
    weddingDatesHi: '१ दिसंबर २०२६',
    targetCountdownDate: '2026-12-01T10:30:00',
    eventsSubheadingEn: 'An auspicious day of Engagement, Haldi, Var Nikasi & Royal Reception',
    eventsSubheadingHi: 'सगाई, शुभ हल्दी, वर निकासी एवं शाही प्रीतिभोज का मंगल दिवस',
    highlightDate1Num: 'TUE',
    highlightDate1Month: '01 Dec',
    highlightDate2Num: '01',
    highlightDate2Month: 'December',
    highlightYear: '2026',
    highlightTaglineEn: 'A magical day filled with sacred rituals, joy, music and royal celebration.',
    highlightTaglineHi: 'सगाई, हल्दी की खुशबू, शाही बारात और प्रीतिभोज से सजी एक अविस्मरणीय शाम।',
    days: [DAY_2_SOLO_EVENTS]
  },
  reception: {
    type: 'reception',
    titleEn: 'Wedding Reception Invitation',
    titleHi: 'शाही प्रीतिभोज निमंत्रण',
    weddingDatesEn: '1 December 2026 • 7:00 PM onwards',
    weddingDatesHi: '१ दिसंबर २०२६ • सायं ०७:०० बजे से',
    targetCountdownDate: '2026-12-01T19:00:00',
    eventsSubheadingEn: 'Join us for a magical evening of royal reception, dinner feast & blessings',
    eventsSubheadingHi: 'स्नेह मिलन, शाही प्रीतिभोज एवं पावन आशीर्वाद की यादगार संध्या',
    highlightDate1Num: '7:00',
    highlightDate1Month: 'PM Onwards',
    highlightDate2Num: '01',
    highlightDate2Month: 'December',
    highlightYear: '2026',
    highlightTaglineEn: 'Your gracious presence and blessings will make our celebration complete.',
    highlightTaglineHi: 'आपकी गरिमामयी उपस्थिति और पावन शुभाशीर्वाद हमारे इस उत्सव को यादगार बनाएंगे।',
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
      scheduleNote: 'All events will be hosted at the royal palace grounds.'
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
      areGettingMarried: 'परिणय सूत्र में बंधने जा रहे हैं',
      dates: '३० नवंबर एवं १ दिसंबर २०२६',
      viewInvitationBtn: 'शुभ निमंत्रण देखें',
      scrollHint: 'नीचे देखें'
    },
    welcome: {
      heading: 'स्नेहिल स्वागत एवं वंदन',
      subheading: 'दो परिवारों का पावन संगम एवं नव-जीवन का शुभारंभ',
      message: 'ईश्वर की असीम अनुकंपा एवं बड़ों के शुभाशीर्वाद से, हम अपने जीवन की नई और पावन यात्रा शुरू करने जा रहे हैं। इस मांगलिक अवसर पर आपकी गरिमामयी उपस्थिति हमारे लिए अत्यंत हर्ष का विषय होगी।',
      blessing: 'आइए, हमारे इस विशेष मांगलिक पर्व पर पधारकर अपने पावन स्नेह एवं शुभाशीर्वाद से नव-युगल का जीवन मंगलमय बनाएं।'
    },
    countdown: {
      heading: 'शुभ लग्न एवं मांगलिक घड़ी की प्रतीक्षा',
      subheading: 'पावन परिणय के शुभ मुहूर्त तक के अनमोल पल',
      days: 'दिन',
      hours: 'घंटे',
      minutes: 'मिनट',
      seconds: 'सेकंड',
      celebrationStarted: 'मांगलिक उत्सव का शुभारंभ हो चुका है! ❤️'
    },
    events: {
      heading: 'मांगलिक कार्यक्रम एवं उत्सव',
      subheading: 'पारंपरिक रीति-रिवाजों, उल्लास और संगीत से सजे पावन उत्सव',
      scheduleNote: 'समस्त कार्यक्रम भव्य शाही प्रांगण में संपन्न होंगे।'
    },
    story: {
      heading: 'दो आत्माओं का पावन सफर',
      subheading: 'पहली सहज मुलाकात से लेकर सात जन्मों के अटूट बंधन तक',
      captions: {
        twoHearts: 'दो स्नेहमयी हृदय',
        oneJourney: 'एक पावन जीवन यात्रा',
        foreverBegins: 'सदा-सर्वदा के लिए एक संगम'
      },
      description1: 'अनंत संभावनाओं से भरी इस दुनिया में हमारी राहें मिलीं और विश्वास, अगाध प्रेम व अपनत्व के एक अटूट रिश्ते में बंध गईं।',
      description2: 'माता-पिता एवं पूज्य गुरुजनों के मंगल आशीर्वाद को साक्षी मानकर, हम एक-दूसरे का हाथ थामे दांपत्य जीवन के सुंदर सफर की ओर अग्रसर हैं।'
    },
    highlight: {
      heading: 'प्रेम, परंपरा और उल्लास से सजे मांगलिक दिवस',
      subheading: 'शाही आभा और सुनहरी किरणों से सजा एक उत्सव',
      date1: '३० नवंबर',
      date2: '०१ दिसंबर',
      year: '२०२६',
      tagline: 'दीपों की मनमोहक रोशनी और राजस्थान की सुरमयी छटा में, शुरू हो रहा है हमारा हमेशा का सफर।'
    },
    closing: {
      heading: 'आपकी गरिमामयी उपस्थिति की हमें हार्दिक प्रतीक्षा रहेगी',
      subheading: 'आपका स्नेह एवं शुभाशीर्वाद ही हमारे इस उत्सव की सबसे बड़ी शोभा है',
      dates: '३० नवंबर एवं १ दिसंबर २०२६',
      withLove: 'स्नेह सहित,',
      saveTheDate: 'शुभ तिथि अवश्य स्मरण रखें'
    },
    footer: {
      madeWithLove: 'नव-जीवन की पावन शुरुआत के उपलक्ष्य में सादर समर्पित ❤️',
      year: '२०२६'
    },
    controls: {
      musicOn: '🔊 संगीत चालू',
      musicOff: '🔇 संगीत बंद',
      playMusic: 'संगीत बजाएं',
      pauseMusic: 'संगीत रोकें',
      language: 'भाषा'
    }
  }
};
