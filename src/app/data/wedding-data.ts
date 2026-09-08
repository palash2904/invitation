import { WeddingCoupleInfo, WeddingDay, WeddingTranslations } from '../models/wedding-event.model';

export const WEDDING_COUPLE: WeddingCoupleInfo = {
  groom: 'Palash',
  groomHi: 'पलाश',
  // You can easily replace the bride name below with your bride's name:
  bride: 'Sonam',
  brideHi: 'सोनम',
  weddingDatesEn: '30 November & 1 December 2026',
  weddingDatesHi: '३० नवंबर एवं १ दिसंबर २०२६',
  targetCountdownDate: '2026-11-30T10:00:00',
  venueCity: 'Udaipur, Rajasthan',
  venueCityHi: 'उदयपुर, राजस्थान'
};

export const WEDDING_DAYS: WeddingDay[] = [
  {
    date: '30 November 2026',
    dateKey: '2026-11-30',
    dateFormattedEn: 'Monday, 30 November 2026',
    dateFormattedHi: 'सोमवार, ३० नवंबर २०२६',
    dayNameEn: 'Day 1 — Sacred Beginnings & Sangeet',
    dayNameHi: 'प्रथम दिवस — मांगलिक अनुष्ठान एवं संगीत',
    events: [
      {
        id: 'mata-poojan',
        time: '10:00 AM',
        timeHi: 'प्रातः १०:०० बजे',
        title: 'Mata Poojan',
        titleHi: 'माता पूजन',
        description: 'Invoking divine blessings for an auspicious start to our sacred journey.',
        descriptionHi: 'शुभ शुरुआत के लिए कुलदेवी एवं ईश्वर का पावन आशीर्वाद।',
        iconType: 'diya'
      },
      {
        id: 'mamera',
        time: '1:00 PM',
        timeHi: 'दोपहर ०१:०० बजे',
        title: 'Mamera',
        titleHi: 'मामेरा (भात)',
        description: 'Traditional maternal blessing ceremony welcoming beloved family and gifts.',
        descriptionHi: 'मातृपक्ष द्वारा आशीर्वाद, स्नेह एवं उपहारों का पारंपरिक उत्सव।',
        iconType: 'gift'
      },
      {
        id: 'mahela-sangeet',
        time: '7:00 PM',
        timeHi: 'सायं ०७:०० बजे',
        title: 'Mahela Sangeet',
        titleHi: 'महिला संगीत',
        description: 'An evening of rhythm, vibrant dance performances, music, and boundless joy.',
        descriptionHi: 'गीत, संगीत, ढोलक की थाप और रंगारंग नृत्यों की यादगार शाम।',
        iconType: 'music'
      }
    ]
  },
  {
    date: '1 December 2026',
    dateKey: '2026-12-01',
    dateFormattedEn: 'Tuesday, 1 December 2026',
    dateFormattedHi: 'मंगलवार, १ दिसंबर २०२६',
    dayNameEn: 'Day 2 — Auspicious Unions & Royal Celebrations',
    dayNameHi: 'द्वितीय दिवस — शुभ लग्न एवं शाही उत्सव',
    events: [
      {
        id: 'engagement',
        time: '10:30 AM',
        timeHi: 'प्रातः १०:३० बजे',
        title: 'Engagement',
        titleHi: 'सगाई समारोह (रिंग सेरेमनी)',
        description: 'Exchanging rings of love and eternal promises of companionship.',
        descriptionHi: 'अंगूठी पहनाकर एक-दूजे के संग जीवन बिताने का पावन संकल्प।',
        iconType: 'ring'
      },
      {
        id: 'haldi',
        time: '1:00 PM',
        timeHi: 'दोपहर ०१:०० बजे',
        title: 'Haldi',
        titleHi: 'हल्दी उत्सव',
        description: 'Golden hues of turmeric, laughter, floral showers, and playful moments.',
        descriptionHi: 'शुभ हल्दी, सुगंधित पुष्प वर्षा और अपनों के साथ आनंदमय पल।',
        iconType: 'haldi'
      },
      {
        id: 'var-nikasi',
        time: '6:00 PM',
        timeHi: 'सायं ०६:०० बजे',
        title: 'Var Nikasi',
        titleHi: 'वर निकासी (शाही बारात)',
        description: 'The royal groom procession accompanied by traditional festive fanfare.',
        descriptionHi: 'बैंड-बाजे एवं शाही ठाठ-बाट के साथ वर की प्रस्थान बारात।',
        iconType: 'horse'
      },
      {
        id: 'lunch',
        time: '7:00 PM onwards',
        timeHi: 'सायं ०७:०० बजे से',
        title: 'Lunch',
        titleHi: 'प्रीतिभोज (शाही दावत)',
        description: 'A sumptuous royal culinary feast to celebrate togetherness with family and friends.',
        descriptionHi: 'स्नेहीजनों के सम्मान में आयोजित सुरुचिपूर्ण एवं स्वादिष्ट शाही भोज।',
        iconType: 'dining'
      }
    ]
  }
];

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
      togetherWithFamilies: 'सपरिवार सादर आमंत्रित हैं',
      areGettingMarried: 'विवाह बंधन में बंधने जा रहे हैं',
      dates: '३० नवंबर एवं १ दिसंबर २०२६',
      viewInvitationBtn: 'शुभ निमंत्रण देखें',
      scrollHint: 'नीचे स्क्रॉल करें'
    },
    welcome: {
      heading: 'प्यार से भरे दिल के साथ',
      subheading: 'दो दिलों और परिवारों का पावन मिलन',
      message: 'हमारे जीवन की इस खूबसूरत नई शुरुआत में आपका आना और हमें अपना आशीर्वाद देना हमारे लिए बहुत खास होगा।',
      blessing: 'आपकी मंगलमयी उपस्थिति और स्नेह हमारे इस उत्सव को और अधिक आनंदमय बनाएगी।'
    },
    countdown: {
      heading: 'हमारे खास दिन का इंतज़ार',
      subheading: 'शुभ घड़ी के आगमन तक के अनमोल क्षण',
      days: 'दिन',
      hours: 'घंटे',
      minutes: 'मिनट',
      seconds: 'सेकंड',
      celebrationStarted: 'खुशियों का जश्न शुरू हो गया है! ❤️'
    },
    events: {
      heading: 'हमारे विवाह समारोह',
      subheading: 'दो दिवसीय मांगलिक एवं मांगलिक अनुष्ठान व हर्षोल्लास का उत्सव',
      scheduleNote: 'समस्त कार्यक्रम भव्य शाही प्रांगण में संपन्न होंगे।'
    },
    story: {
      heading: 'हमारी खूबसूरत कहानी',
      subheading: 'पहली सौम्य मुलाकात से अनंत के सफर तक',
      captions: {
        twoHearts: 'दो दिल',
        oneJourney: 'एक खूबसूरत सफ़र',
        foreverBegins: 'यहीं से हमेशा की शुरुआत'
      },
      description1: 'अनंत संभावनाओं से भरी इस दुनिया में हमारी राहें मिलीं और विश्वास, स्नेह व अपनत्व के एक अटूट रिश्ते में तब्दील हो गईं।',
      description2: 'अपने प्रियजनों एवं बड़ों के शुभाशीर्वाद से, हम हाथ थामकर जीवन के नए अध्याय में कदम रख रहे हैं।'
    },
    highlight: {
      heading: 'दो दिन प्यार, खुशियों और उत्सव के',
      subheading: 'शाही आभा और सुनहरी किरणों से सजा एक उत्सव',
      date1: '३० नवंबर',
      date2: '१ दिसंबर',
      year: '२०२६',
      tagline: 'दीपों की रोशनी और सुरमयी हवाओं के बीच, शुरू हो रहा है हमारा हमेशा का सफर।'
    },
    closing: {
      heading: 'आपके साथ इस खुशी को मनाने का हमें बेसब्री से इंतज़ार है',
      subheading: 'आपकी गरिमामयी उपस्थिति ही हमारे लिए सबसे बड़ा उपहार है',
      dates: '३० नवंबर एवं १ दिसंबर २०२६',
      withLove: 'स्नेहपूर्वक,',
      saveTheDate: 'शुभ तिथि याद रखें'
    },
    footer: {
      madeWithLove: 'हमारे इस खास दिन के लिए प्यार से निर्मित ❤️',
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
