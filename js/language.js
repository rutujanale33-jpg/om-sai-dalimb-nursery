/* =========================================================
   OM SAI DALIMB NURSERY
   Multilingual Website
   Languages: English | Marathi | Hindi

   Supports:
   - Home
   - About
   - Varieties
   - Gallery
   - Contact
   - Navigation and footer
   - Image alt text
   - Form placeholders
   - Select options
   - Accessibility labels
   - Dynamic language switching
========================================================= */

(function () {
    "use strict";

    const STORAGE_KEY = "omSaiNurseryLanguage";
    const DEFAULT_LANGUAGE = "en";

    /* =====================================================
       TRANSLATION DICTIONARIES
       Keys must match the original English website text.
    ===================================================== */

    const translations = {

        /* =================================================
           MARATHI
        ================================================= */

        mr: {
            // About Page
aboutHeroEyebrow: "आमच्याबद्दल",
aboutHeroTitle: "ओम साई डाळिंब नर्सरी",
aboutHeroDescription: "तुमच्या शेतीसाठी दर्जेदार आणि निरोगी डाळिंबाची रोपे.",
aboutIntroTitle: "आमच्याबद्दल जाणून घ्या",
aboutIntroParagraph1: "ओम साई डाळिंब नर्सरीमध्ये आम्ही शेतकऱ्यांना दर्जेदार डाळिंबाची रोपे उपलब्ध करून देतो.",
aboutIntroParagraph2: "आमच्याकडे भगवा, सुपर भगवा आणि शारद किंग या डाळिंबाच्या जातींची एअर-लेयरिंग पद्धतीने तयार केलेली रोपे उपलब्ध आहेत.",
aboutIntroParagraph3: "चांगल्या गुणवत्तेची रोपे, विश्वासार्ह सेवा आणि शेतकऱ्यांचे समाधान यांना आम्ही प्राधान्य देतो.",
whoWeAre: "आम्ही कोण आहोत?",
ourFocus: "आमचे ध्येय",
focusTitle: "आमचे लक्ष",
focusDescription: "शेतकऱ्यांना निरोगी आणि दर्जेदार डाळिंबाची रोपे उपलब्ध करून देणे.",
focusVarietiesTitle: "डाळिंबाच्या अस्सल जाती",
focusVarietiesDescription: "भगवा, सुपर भगवा आणि शारद किंग या जातींची रोपे.",
ourPomegranateSelection: "आमच्या डाळिंबाच्या रोपांची निवड",
exploreVarietyDetails: "रोपांच्या जातींबद्दल अधिक जाणून घ्या",
aboutCtaEyebrow: "तुमच्या शेतीसाठी",
aboutCtaTitle: "डाळिंबाची रोपे खरेदी करायची आहेत?",
aboutCtaDescription: "रोपांची उपलब्धता आणि घाऊक दर जाणून घेण्यासाठी आजच संपर्क साधा.",
aboutWhatsAppButton: "WhatsApp वर संपर्क साधा",
plantRequirementsTitle: "तुमच्या रोपांच्या गरजा",
plantRequirementsDescription: "तुमच्या गरजेनुसार रोपे आणि उपलब्ध जातींबद्दल अधिक माहितीसाठी आमच्याशी संपर्क साधा.",
convenientContactTitle: "संपर्क साधणे सोपे",
convenientContactDescription: "फोन किंवा WhatsApp द्वारे आमच्याशी संपर्क साधा.",
emailNursery: "नर्सरीचा ईमेल",
enquiryVarietiesTitle: "डाळिंबाच्या जातींबद्दल चौकशी",
enquiryVarietiesDescription: "उपलब्ध जाती, रोपांचे दर आणि घाऊक ऑर्डरबद्दल माहिती मिळवा.",
makeEnquiry: "चौकशी करा",
contactDetails: "संपर्क तपशील",
contactUs: "आमच्याशी संपर्क साधा",
whatsappUs: "WhatsApp वर संपर्क साधा",
contactFurtherInformation: "अधिक माहितीसाठी संपर्क साधा",
quickLinks: "महत्त्वाच्या लिंक्स",
allRightsReserved: "सर्व हक्क राखीव",
footerDescription: "ओम साई डाळिंब नर्सरी — तुमच्या शेतीसाठी दर्जेदार डाळिंबाची रोपे.",
footerTagline: "निरोगी रोपे, विश्वासाचे नाते",
callNow: "आत्ताच कॉल करा",
contact: "संपर्क",
home: "मुख्यपृष्ठ",
about: "आमच्याबद्दल",
gallery: "गॅलरी",
varieties: "डाळिंबाचे वाण",

// Gallery Page
galleryEyebrow: "आमची गॅलरी",
galleryHeroDescription: "आमच्या नर्सरीतील रोपे, परिसर आणि डाळिंबाच्या बागेची छायाचित्रे पाहा.",
galleryIntroduction: "आमच्या नर्सरीची आणि रोपांची झलक पाहा.",
discoverNurseryCollection: "आमच्या नर्सरीचा संग्रह पाहा",
exploreGallery: "गॅलरी पाहा",
exploreNurseryPhotographs: "नर्सरीची छायाचित्रे पाहा",
exploreOrchardPhotographs: "डाळिंबाच्या बागेची छायाचित्रे पाहा",
nursery: "नर्सरी",
orchard: "डाळिंबाची बाग",
nurseryAndOrchard: "नर्सरी आणि डाळिंबाची बाग",
nurseryView: "नर्सरीचे दृश्य",
orchardView: "बागेचे दृश्य",
anotherOrchardView: "बागेचे आणखी एक दृश्य",
growingEnvironment: "रोपांच्या वाढीसाठी अनुकूल वातावरण",
nurseryPremises: "नर्सरीचा परिसर",
nurseryHighlight: "नर्सरीची वैशिष्ट्ये",
nurseryActivities: "नर्सरीतील कामकाज",
nurseryPhotographsDescription: "आमच्या नर्सरीतील रोपे आणि परिसराची छायाचित्रे.",
orchardPhotographsDescription: "डाळिंबाच्या बागेची छायाचित्रे पाहा.",
lookAroundNursery: "नर्सरीचा परिसर पाहा",
lookAtOrchard: "डाळिंबाची बाग पाहा",
moreNurseryPhotographs: "नर्सरीची आणखी छायाचित्रे",
seeNurseryPhotographs: "नर्सरीची छायाचित्रे पहा",
ourNursery: "आमची नर्सरी",
exploreOurNursery: "आमची नर्सरी पाहा",
exploreMoreNursery: "नर्सरीबद्दल आणखी जाणून घ्या",
fromOurNursery: "आमच्या नर्सरीतून",
fromNurseryCollection: "नर्सरीच्या संग्रहातून",
fromOrchardCollection: "बागेच्या संग्रहातून",
fromPlantCollection: "रोपांच्या संग्रहातून",
fromPhotographCollection: "छायाचित्रांच्या संग्रहातून",
fromOmSaiNursery: "ओम साई नर्सरीतून",
plants: "रोपे",
plantCollection: "रोपांचा संग्रह",
plantCollectionDescription: "आमच्या नर्सरीतील डाळिंबाची रोपे पाहा.",
plantsAtNursery: "नर्सरीतील रोपे",
plantsFromNursery: "नर्सरीमधील रोपे",
closerLookPlants: "रोपांचे जवळून दर्शन",
pomegranatePlants: "डाळिंबाची रोपे",
plantsAvailable: "उपलब्ध रोपे",
ourAvailableVarieties: "आमच्याकडे उपलब्ध असलेल्या जाती",
availableVarietiesDescription: "भगवा, सुपर भगवा आणि शारद किंग या जातींची रोपे उपलब्ध आहेत.",
variety: "जात",
varieties: "डाळिंबाचे वाण",
ourVarieties: "आमच्या डाळिंबाच्या जाती",
plantDetails: "रोपांची माहिती",
viewVarietyDetails: "जातींची माहिती पाहा",
contactVarietyDetails: "जातींच्या माहितीसाठी संपर्क साधा",
contactAvailability: "उपलब्धतेबद्दल संपर्क साधा",
galleryContactNote: "रोपांची उपलब्धता आणि दर जाणून घेण्यासाठी आमच्याशी संपर्क साधा.",
interestedInPlants: "रोपे खरेदी करण्यात स्वारस्य आहे?",
lookingForPomegranatePlants: "डाळिंबाची रोपे शोधत आहात?",
planningToBuy: "रोपे खरेदी करण्याचा विचार करत आहात?",
contactUs: "आमच्याशी संपर्क साधा",
enquireWhatsApp: "WhatsApp वर चौकशी करा",
chatWhatsApp: "WhatsApp वर चॅट करा",
videos: "व्हिडिओ",
videoFromNursery: "नर्सरीतील व्हिडिओ",
nurseryVideo1: "नर्सरीचा व्हिडिओ १",
nurseryVideo2: "नर्सरीचा व्हिडिओ २",
watchNurseryVideos: "नर्सरीचे व्हिडिओ पाहा",
copyrightText: "© ओम साई डाळिंब नर्सरी. सर्व हक्क राखीव.",
// Contact page — Marathi
contactHeroEyebrow: "आम्ही मदतीसाठी येथे आहोत",
contactHeroTitle: "आमच्याशी संपर्क साधा",
contactHeroDescription: "आमच्या डाळिंबाच्या रोपांबद्दल, किमतींबद्दल किंवा घाऊक ऑर्डरबद्दल काही प्रश्न आहेत का? आम्हाला संपर्क करा किंवा चौकशी पाठवा. आम्हाला तुम्हाला मदत करायला आनंद होईल.",
sendEnquiry: "चौकशी पाठवा",

contactHelpTitle: "आम्ही तुम्हाला कशी मदत करू शकतो?",
contactHelpDescription: "खालीलपैकी कोणत्याही पर्यायाद्वारे आमच्याशी संपर्क साधा.",
callUs: "आम्हाला फोन करा",
callUsDescription: "रोपांची उपलब्धता, किंमत आणि ऑर्डर यांसाठी फोन करा.",
whatsappUs: "WhatsApp वर संपर्क करा",
whatsappDescription: "चौकशी आणि घाऊक ऑर्डरसाठी आम्हाला संदेश पाठवा.",
chatOnWhatsApp: "WhatsApp वर संदेश पाठवा",
visitNursery: "आमच्या रोपवाटिकेला भेट द्या",
getDirections: "मार्ग पहा",

sendUsEnquiry: "आम्हाला चौकशी पाठवा",
enquiryFormDescription: "खाली तुमची माहिती भरा. चौकशी WhatsApp मध्ये उघडेल. ती पाठवण्यासाठी WhatsApp मधील Send बटण दाबा.",
fullName: "पूर्ण नाव *",
fullNamePlaceholder: "तुमचे पूर्ण नाव लिहा",
mobileNumber: "मोबाईल क्रमांक *",
mobilePlaceholder: "तुमचा १० अंकी मोबाईल क्रमांक लिहा",
validMobileTitle: "कृपया योग्य मोबाईल क्रमांक लिहा.",
plantVariety: "रोपांची जात *",
selectVariety: "रोपांची जात निवडा",
multipleVarieties: "एकापेक्षा जास्त जाती",
otherNeedGuidance: "इतर / मार्गदर्शन हवे आहे",
requiredQuantity: "आवश्यक रोपांची संख्या *",
quantityPlaceholder: "रोपांची संख्या लिहा",
additionalMessage: "अतिरिक्त संदेश",
messagePlaceholder: "तुमची आवश्यकता येथे लिहा",
sendEnquiryWhatsApp: "WhatsApp वर चौकशी पाठवा",
whatsappPrivacyNote: "तुमचा संदेश WhatsApp मध्ये उघडेल. कृपया तो तपासून Send दाबा.",

rightVarietyTitle: "तुम्हाला योग्य डाळिंबाची जात हवी आहे का?",
rightVarietyDescription: "आमच्याकडे भगवा, सुपर भगवा आणि शार्ड किंग या डाळिंबाच्या जातींची रोपे उपलब्ध आहेत. उपलब्धता आणि घाऊक ऑर्डरबद्दल अधिक माहितीसाठी संपर्क साधा.",
exploreOurVarieties: "आमच्या जाती पहा",

contactErrorName: "कृपया तुमचे पूर्ण नाव लिहा.",
contactErrorMobile: "कृपया योग्य मोबाईल क्रमांक लिहा.",
contactErrorVariety: "कृपया रोपांची जात निवडा.",
contactErrorQuantity: "कृपया किमान एक रोप अशी योग्य संख्या लिहा.",
contactSuccessMessage: "तुमची चौकशी WhatsApp मध्ये तयार आहे. ती तपासा आणि Send दाबा.",
contactPopupMessage: "WhatsApp आपोआप उघडले नाही. कृपया पॉप-अपला परवानगी द्या किंवा वरील WhatsApp बटण वापरा."

           
        },

        /* =================================================
           HINDI
        ================================================= */

        hi: {

            /* Common navigation */

            // About Page
aboutHeroEyebrow: "हमारे बारे में",
aboutHeroTitle: "ओम साई अनार नर्सरी",
aboutHeroDescription: "आपकी खेती के लिए गुणवत्तापूर्ण और स्वस्थ अनार के पौधे।",
aboutIntroTitle: "हमारे बारे में जानें",
aboutIntroParagraph1: "ओम साई अनार नर्सरी में हम किसानों को गुणवत्तापूर्ण अनार के पौधे उपलब्ध कराते हैं।",
aboutIntroParagraph2: "हमारे यहाँ भगवा, सुपर भगवा और शारद किंग किस्मों के एयर-लेयरिंग से तैयार किए गए पौधे उपलब्ध हैं।",
aboutIntroParagraph3: "हम पौधों की गुणवत्ता, भरोसेमंद सेवा और किसानों की संतुष्टि को प्राथमिकता देते हैं।",
whoWeAre: "हम कौन हैं?",
ourFocus: "हमारा उद्देश्य",
focusTitle: "हमारा ध्यान",
focusDescription: "किसानों को स्वस्थ और गुणवत्तापूर्ण अनार के पौधे उपलब्ध कराना।",
focusVarietiesTitle: "अनार की असली किस्में",
focusVarietiesDescription: "भगवा, सुपर भगवा और शारद किंग किस्मों के पौधे।",
ourPomegranateSelection: "हमारे अनार के पौधों का संग्रह",
exploreVarietyDetails: "पौधों की किस्मों के बारे में जानें",
aboutCtaEyebrow: "आपकी खेती के लिए",
aboutCtaTitle: "अनार के पौधे खरीदना चाहते हैं?",
aboutCtaDescription: "पौधों की उपलब्धता और थोक दरों की जानकारी के लिए आज ही संपर्क करें।",
aboutWhatsAppButton: "WhatsApp पर संपर्क करें",
plantRequirementsTitle: "आपकी पौधों की जरूरतें",
plantRequirementsDescription: "अपनी जरूरत के अनुसार पौधों और उपलब्ध किस्मों की जानकारी के लिए हमसे संपर्क करें।",
convenientContactTitle: "संपर्क करना आसान",
convenientContactDescription: "फोन या WhatsApp के माध्यम से हमसे संपर्क करें।",
emailNursery: "नर्सरी का ईमेल",
enquiryVarietiesTitle: "अनार की किस्मों के बारे में पूछताछ",
enquiryVarietiesDescription: "उपलब्ध किस्मों, पौधों की कीमतों और थोक ऑर्डर की जानकारी प्राप्त करें।",
makeEnquiry: "पूछताछ करें",
contactDetails: "संपर्क विवरण",
contactUs: "हमसे संपर्क करें",
whatsappUs: "WhatsApp पर संपर्क करें",
contactFurtherInformation: "अधिक जानकारी के लिए संपर्क करें",
quickLinks: "महत्वपूर्ण लिंक",
allRightsReserved: "सर्वाधिकार सुरक्षित",
footerDescription: "ओम साई अनार नर्सरी — आपकी खेती के लिए गुणवत्तापूर्ण अनार के पौधे।",
footerTagline: "स्वस्थ पौधे, भरोसे का रिश्ता",
callNow: "अभी कॉल करें",
contact: "संपर्क",
home: "मुखपृष्ठ",
about: "हमारे बारे में",
gallery: "गैलरी",
varieties: "अनार की किस्में",

// Gallery Page
galleryEyebrow: "हमारी गैलरी",
galleryHeroDescription: "हमारी नर्सरी के पौधों, परिसर और अनार के बगीचे की तस्वीरें देखें।",
galleryIntroduction: "हमारी नर्सरी और पौधों की एक झलक देखें।",
discoverNurseryCollection: "हमारी नर्सरी का संग्रह देखें",
exploreGallery: "गैलरी देखें",
exploreNurseryPhotographs: "नर्सरी की तस्वीरें देखें",
exploreOrchardPhotographs: "अनार के बगीचे की तस्वीरें देखें",
nursery: "नर्सरी",
orchard: "अनार का बगीचा",
nurseryAndOrchard: "नर्सरी और अनार का बगीचा",
nurseryView: "नर्सरी का दृश्य",
orchardView: "बगीचे का दृश्य",
anotherOrchardView: "बगीचे का एक और दृश्य",
growingEnvironment: "पौधों की वृद्धि के लिए अनुकूल वातावरण",
nurseryPremises: "नर्सरी परिसर",
nurseryHighlight: "नर्सरी की विशेषताएँ",
nurseryActivities: "नर्सरी की गतिविधियाँ",
nurseryPhotographsDescription: "हमारी नर्सरी के पौधों और परिसर की तस्वीरें।",
orchardPhotographsDescription: "अनार के बगीचे की तस्वीरें देखें।",
lookAroundNursery: "नर्सरी का परिसर देखें",
lookAtOrchard: "अनार का बगीचा देखें",
moreNurseryPhotographs: "नर्सरी की और तस्वीरें",
seeNurseryPhotographs: "नर्सरी की तस्वीरें देखें",
ourNursery: "हमारी नर्सरी",
exploreOurNursery: "हमारी नर्सरी देखें",
exploreMoreNursery: "नर्सरी के बारे में और जानें",
fromOurNursery: "हमारी नर्सरी से",
fromNurseryCollection: "नर्सरी के संग्रह से",
fromOrchardCollection: "बगीचे के संग्रह से",
fromPlantCollection: "पौधों के संग्रह से",
fromPhotographCollection: "तस्वीरों के संग्रह से",
fromOmSaiNursery: "ओम साई नर्सरी से",
plants: "पौधे",
plantCollection: "पौधों का संग्रह",
plantCollectionDescription: "हमारी नर्सरी के अनार के पौधे देखें।",
plantsAtNursery: "नर्सरी में पौधे",
plantsFromNursery: "नर्सरी के पौधे",
closerLookPlants: "पौधों को करीब से देखें",
pomegranatePlants: "अनार के पौधे",
plantsAvailable: "उपलब्ध पौधे",
ourAvailableVarieties: "हमारे यहाँ उपलब्ध किस्में",
availableVarietiesDescription: "भगवा, सुपर भगवा और शारद किंग किस्मों के पौधे उपलब्ध हैं।",
variety: "किस्म",
varieties: "अनार की किस्में",
ourVarieties: "हमारी अनार की किस्में",
plantDetails: "पौधों की जानकारी",
viewVarietyDetails: "किस्मों की जानकारी देखें",
contactVarietyDetails: "किस्मों की जानकारी के लिए संपर्क करें",
contactAvailability: "उपलब्धता के लिए संपर्क करें",
galleryContactNote: "पौधों की उपलब्धता और कीमत जानने के लिए हमसे संपर्क करें।",
interestedInPlants: "क्या आप पौधे खरीदने में रुचि रखते हैं?",
lookingForPomegranatePlants: "क्या आप अनार के पौधे ढूँढ़ रहे हैं?",
planningToBuy: "क्या आप पौधे खरीदने की योजना बना रहे हैं?",
contactUs: "हमसे संपर्क करें",
enquireWhatsApp: "WhatsApp पर पूछताछ करें",
chatWhatsApp: "WhatsApp पर चैट करें",
videos: "वीडियो",
videoFromNursery: "नर्सरी का वीडियो",
nurseryVideo1: "नर्सरी का वीडियो १",
nurseryVideo2: "नर्सरी का वीडियो २",
watchNurseryVideos: "नर्सरी के वीडियो देखें",
copyrightText: "© ओम साई अनार नर्सरी। सर्वाधिकार सुरक्षित।"
        }
    };

    /* =====================================================
       KEYED TRANSLATIONS
       Used by elements containing data-i18n="key".
       Add new keys here when adding keyed HTML elements.
    ===================================================== */

    const keyedTranslations = {

        mr: {
            location: "अस्तगाव फाटा, शिर्डीजवळ, महाराष्ट्र",
            topLocation: "अस्तगाव फाटा, शिर्डीजवळ, महाराष्ट्र",
            brandTagline: "निरोगी रोपे, विश्वासाचे नाते",

            home: "मुख्यपृष्ठ",
            about: "आमच्याबद्दल",
            varieties: "डाळिंबाचे वाण",
            gallery: "गॅलरी",
            contact: "संपर्क",
            chooseLanguage: "वेबसाइटची भाषा निवडा",
            openMenu: "नेव्हिगेशन मेनू उघडा",

            heroBadge: "दर्जेदार डाळिंब रोपे",
            heroEyebrow: "तुमच्या डाळिंबाच्या बागेसाठी",
            heroTitle: "उत्तम शेतीसाठी",
            heroTitleHighlight: "दर्जेदार डाळिंब रोपे",
            heroDescription: "भगवा, सुपर भगवा आणि शारद किंग जातींची निरोगी एअर-लेयरिंग रोपे.",
            exploreVarieties: "डाळिंबाचे वाण पहा",
            whatsappEnquiry: "WhatsApp वर चौकशी करा",
            heroPoint1: "निरोगी रोपे",
            heroPoint2: "अस्सल वाण",
            heroPoint3: "घाऊक पुरवठा",

            trustPlants: "निरोगी रोपे",
            trustPlantsSub: "उत्तम दर्जाची रोपे",
            trustVarieties: "अस्सल वाण",
            trustVarietiesSub: "विश्वासार्ह जाती",
            trustBulk: "घाऊक पुरवठा",
            trustBulkSub: "मोठ्या ऑर्डरसाठी",
            trustLocation: "शिर्डीजवळ",
            trustLocationSub: "अस्तगाव फाटा",

            plantsEyebrow: "आमचे रोपांचे संग्रह",
            exploreOurVarieties: "आमचे डाळिंबाचे वाण पहा",
            varietiesDescription: "तुमच्या शेतीसाठी योग्य डाळिंबाची रोपे निवडा.",

            variety01: "वाण ०१",
            bhagwaTitle: "भगवा",
            bhagwaDescription: "शेतीसाठी भगवा डाळिंबाची रोपे.",
            enquireBhagwa: "भगवा वाणासाठी चौकशी करा",

            variety02: "वाण ०२",
            superBhagwaTitle: "सुपर भगवा",
            superBhagwaDescription: "सुपर भगवा डाळिंबाची रोपे.",
            enquireSuperBhagwa: "सुपर भगवा वाणासाठी चौकशी करा",

            variety03: "वाण ०३",
            shardKingTitle: "शारद किंग",
            shardKingDescription: "शारद किंग डाळिंबाची रोपे.",
            enquireShardKing: "शारद किंग वाणासाठी चौकशी करा",

            viewAllVarieties: "सर्व वाण पहा",

            aboutEyebrow: "आमच्याबद्दल",
            aboutTitle: "ओम साई डाळिंब नर्सरी",
            aboutParagraph1: "आम्ही डाळिंबाची दर्जेदार रोपे उपलब्ध करून देण्यावर लक्ष केंद्रित करतो.",
            aboutParagraph2: "भगवा, सुपर भगवा आणि शारद किंग या जातींबद्दल चौकशी करण्यासाठी आमच्याशी संपर्क साधा.",

            feature1Title: "उत्तम दर्जा",
            feature1Description: "रोपांच्या गुणवत्तेला प्राधान्य.",
            feature2Title: "अस्सल वाण",
            feature2Description: "डाळिंबाच्या विविध जाती.",
            feature3Title: "ग्राहक सेवा",
            feature3Description: "तुमच्या चौकशीसाठी मदत.",

            learnAboutUs: "आमच्याबद्दल जाणून घ्या",

            galleryEyebrow: "आमची गॅलरी",
            plantsSectionTitle: "आमची डाळिंब रोपे",
            galleryDescription: "आमच्या नर्सरीतील रोपांची छायाचित्रे पहा.",
            ourNursery: "आमची नर्सरी",
            bhagwa: "भगवा",
            exploreGallery: "गॅलरी पहा",

            ctaEyebrow: "आजच चौकशी करा",
            ctaTitle: "डाळिंबाची रोपे हवी आहेत?",
            ctaDescription: "उपलब्धता, किंमत आणि घाऊक पुरवठ्यासाठी आमच्याशी संपर्क साधा.",
            enquireWhatsApp: "WhatsApp वर चौकशी करा",
            callNursery: "नर्सरीला कॉल करा",

            faqEyebrow: "सामान्य प्रश्न",
            faqTitle: "वारंवार विचारले जाणारे प्रश्न",
            faqQuestion1: "कोणत्या जातींची रोपे उपलब्ध आहेत?",
            faqAnswer1: "भगवा, सुपर भगवा आणि शारद किंग जातींबद्दल चौकशी करू शकता.",
            faqQuestion2: "घाऊक दर उपलब्ध आहेत का?",
            faqAnswer2: "घाऊक दरांसाठी थेट नर्सरीशी संपर्क साधा.",
            faqQuestion3: "रोपांचे बुकिंग करता येते का?",
            faqAnswer3: "बुकिंग आणि उपलब्धतेबद्दल नर्सरीशी संपर्क साधा.",
            faqQuestion4: "नर्सरी कुठे आहे?",
            faqAnswer4: "अस्तगाव फाटा, शिर्डीजवळ, महाराष्ट्र.",

            footerTagline: "निरोगी रोपे, विश्वासाचे नाते",
            footerDescription: "शिर्डीजवळ डाळिंबाची रोपे मिळवण्यासाठी आमच्याशी संपर्क साधा.",
            quickLinks: "महत्त्वाचे दुवे",
            ourVarieties: "आमचे वाण",
            contactUs: "संपर्क",
            emailNursery: "नर्सरीला ईमेल करा",
            locationFooter: "अस्तगाव फाटा, शिर्डीजवळ, महाराष्ट्र",
            copyright: "सर्व हक्क राखीव",

            aboutHeroEyebrow: "ओम साई डाळिंब नर्सरी",
            aboutHeroTitle: "आमच्याबद्दल",
            aboutHeroDescription: "आमच्या नर्सरीबद्दल आणि डाळिंबाच्या रोपांबद्दल जाणून घ्या.",
            whoWeAre: "आम्ही कोण आहोत?",
            aboutIntroTitle: "आमच्या नर्सरीची ओळख",
            aboutIntroParagraph1: "आम्ही डाळिंबाच्या रोपांसाठी चौकशी स्वीकारतो.",
            aboutIntroParagraph2: "भगवा, सुपर भगवा आणि शारद किंग या जातींबद्दल माहिती मिळवा.",
            aboutIntroParagraph3: "उपलब्धता आणि किंमतीसाठी संपर्क साधा.",
            aboutWhatsAppButton: "WhatsApp वर संपर्क साधा",

            ourFocus: "आमचे ध्येय",
            focusTitle: "गुणवत्तेवर लक्ष",
            focusDescription: "डाळिंबाच्या रोपांबद्दल माहिती आणि चौकशीसाठी मदत.",
            focusVarietiesTitle: "डाळिंबाचे वाण",
            focusVarietiesDescription: "उपलब्ध जातींबद्दल चौकशी करा.",
            exploreVarietiesArrow: "वाण पहा →",
            plantRequirementsTitle: "रोपांची आवश्यकता",
            plantRequirementsDescription: "तुमच्या रोपांच्या गरजांबद्दल आमच्याशी चर्चा करा.",
            makeEnquiry: "चौकशी करा",
            convenientContactTitle: "सोप्या पद्धतीने संपर्क",
            convenientContactDescription: "फोन किंवा WhatsApp द्वारे संपर्क साधा.",
            contactDetails: "संपर्क तपशील",
            enquiryVarietiesTitle: "डाळिंबाच्या जाती",
            enquiryVarietiesDescription: "भगवा, सुपर भगवा आणि शारद किंगबद्दल चौकशी करा.",
            exploreVarietyDetails: "वाणांची माहिती पहा",
            aboutCtaEyebrow: "आमच्याशी संपर्क साधा",
            aboutCtaTitle: "डाळिंबाची रोपे हवी आहेत?",
            aboutCtaDescription: "उपलब्धता आणि घाऊक दरांसाठी चौकशी करा.",
            whatsappUs: "WhatsApp वर संपर्क साधा",
            callNow: "आत्ताच कॉल करा",
            allRightsReserved: "सर्व हक्क राखीव",
            // Contact form — Marathi
sendUsEnquiry: "आम्हाला चौकशी पाठवा",
enquiryFormDescription: "खाली तुमची माहिती भरा. तुमची चौकशी WhatsApp मध्ये उघडेल. ती पाठवण्यासाठी WhatsApp मधील Send बटण दाबा.",

fullName: "पूर्ण नाव",
fullNamePlaceholder: "तुमचे पूर्ण नाव लिहा",

mobileNumber: "मोबाईल क्रमांक",
mobilePlaceholder: "तुमचा मोबाईल क्रमांक लिहा",
validMobileTitle: "कृपया योग्य मोबाईल क्रमांक लिहा.",

plantVariety: "रोपांची जात",
selectVariety: "रोपांची जात निवडा",
multipleVarieties: "एकापेक्षा जास्त जाती",
otherNeedGuidance: "इतर / मार्गदर्शन हवे आहे",

requiredQuantity: "आवश्यक रोपांची संख्या",
quantityPlaceholder: "रोपांची संख्या लिहा",

additionalMessage: "अतिरिक्त संदेश",
messagePlaceholder: "तुमची गरज, ठिकाण किंवा घाऊक ऑर्डरबद्दल माहिती लिहा.",

sendEnquiryWhatsApp: "WhatsApp वर चौकशी पाठवा",
whatsappPrivacyNote: "तुमची चौकशी WhatsApp मध्ये तयार होईल. तुम्ही ती तपासून पाठवू शकता.",

rightVarietyTitle: "तुम्हाला योग्य डाळिंबाची जात हवी आहे का?",
rightVarietyDescription: "चौकशी करण्यापूर्वी भगवा, सुपर भगवा आणि शार्ड किंग या आमच्या डाळिंबाच्या जाती पाहा.",
exploreOurVarieties: "आमच्या जाती पहा",
contactHeroEyebrow: "आम्ही मदतीसाठी येथे आहोत",
contactHeroTitle: "आमच्याशी संपर्क साधा",
contactHeroDescription: "डाळिंबाच्या रोपांबद्दल, किमतींबद्दल किंवा घाऊक ऑर्डरबद्दल काही प्रश्न आहेत का? आम्हाला संपर्क करा. आम्हाला मदत करायला आनंद होईल.",
sendEnquiry: "चौकशी पाठवा",

contactHelpTitle: "आम्ही तुम्हाला कशी मदत करू शकतो?",
contactHelpDescription: "खालीलपैकी कोणत्याही पर्यायाद्वारे आमच्याशी संपर्क साधा.",
callUs: "आम्हाला फोन करा",
callUsDescription: "रोपांची उपलब्धता, किंमत आणि ऑर्डरसाठी फोन करा.",
whatsappDescription: "चौकशी आणि घाऊक ऑर्डरसाठी आम्हाला संदेश पाठवा.",
chatOnWhatsApp: "WhatsApp वर संदेश पाठवा",
visitNursery: "आमच्या नर्सरीला भेट द्या",
getDirections: "मार्ग पहा",

contactErrorName: "कृपया तुमचे पूर्ण नाव लिहा.",
contactErrorMobile: "कृपया योग्य मोबाईल क्रमांक लिहा.",
contactErrorVariety: "कृपया रोपांची जात निवडा.",
contactErrorQuantity: "कृपया किमान एक रोप अशी योग्य संख्या लिहा.",
contactSuccessMessage: "तुमची चौकशी WhatsApp मध्ये तयार आहे. ती तपासून Send दाबा.",
contactPopupMessage: "WhatsApp आपोआप उघडले नाही. कृपया पॉप-अपला परवानगी द्या किंवा WhatsApp बटण वापरा.",
navHome: "मुख्यपृष्ठ", 
navVarieties: "वाण", 
navGallery: "छायाचित्रे", 
navAbout: "आमच्याबद्दल", navContact: "संपर्क", navEnquire: "चौकशी करा", varietiesHeroEyebrow: "आमच्या रोपांचा संग्रह", varietiesHeroTitle: "डाळिंबाच्या रोपांचे वाण", varietiesIntroEyebrow: "तुमचा वाण निवडा", varietiesIntroTitle: "आमची डाळिंबाची रोपे पाहा", bhagwaLabel: "वाण ०१", bhagwaTitle: "भगवा", bhagwaEnquire: "भगवा रोपांबद्दल चौकशी करा →", superBhagwaLabel: "वाण ०२", superBhagwaTitle: "सुपर भगवा", superBhagwaEnquire: "सुपर भगवा रोपांबद्दल चौकशी करा →", shardKingLabel: "वाण ०३", shardKingTitle: "शार्द किंग", shardKingEnquire: "शार्द किंग रोपांबद्दल चौकशी करा →", orchardEyebrow: "तुमच्या बागेचे नियोजन", orchardTitle: "तुमच्या गरजांबद्दल चर्चा करूया", varietyEnquiriesTitle: "वाणांबद्दल चौकशी", quantityRequirementsTitle: "रोपांची संख्या", pricingInformationTitle: "किंमतीची माहिती", discussWhatsApp: "व्हॉट्सॲपवर चर्चा करा", lookingPlantsTitle: "डाळिंबाची रोपे हवी आहेत का?", varietiesCtaTitle: "आमच्या रोपांबद्दल प्रश्न आहेत का?", whatsappUs: "व्हॉट्सॲपवर संपर्क साधा", contactDetails: "संपर्काची माहिती", footerQuickLinks: "महत्त्वाच्या लिंक्स", footerPlantVarieties: "रोपांचे वाण", footerContact: "संपर्क", footerEmail: "ईमेल करा"
        },

        hi: {
            location: "अस्तगाँव फाटा, शिरडी के पास, महाराष्ट्र",
            topLocation: "अस्तगाँव फाटा, शिरडी के पास, महाराष्ट्र",
            brandTagline: "स्वस्थ पौधे, विश्वास का रिश्ता",

            home: "मुखपृष्ठ",
            about: "हमारे बारे में",
            varieties: "अनार के पौधों की किस्में",
            gallery: "गैलरी",
            contact: "संपर्क",
            chooseLanguage: "वेबसाइट की भाषा चुनें",
            openMenu: "नेविगेशन मेनू खोलें",

            heroBadge: "उच्च गुणवत्ता वाले अनार के पौधे",
            heroEyebrow: "आपके अनार के बाग के लिए",
            heroTitle: "बेहतर खेती के लिए",
            heroTitleHighlight: "उच्च गुणवत्ता वाले अनार के पौधे",
            heroDescription: "भगवा, सुपर भगवा और शारद किंग किस्मों के स्वस्थ एयर-लेयरिंग पौधे।",
            exploreVarieties: "पौधों की किस्में देखें",
            whatsappEnquiry: "WhatsApp पर पूछताछ करें",
            heroPoint1: "स्वस्थ पौधे",
            heroPoint2: "असली किस्में",
            heroPoint3: "थोक आपूर्ति",

            trustPlants: "स्वस्थ पौधे",
            trustPlantsSub: "उच्च गुणवत्ता वाले पौधे",
            trustVarieties: "असली किस्में",
            trustVarietiesSub: "विश्वसनीय किस्में",
            trustBulk: "थोक आपूर्ति",
            trustBulkSub: "बड़े ऑर्डर के लिए",
            trustLocation: "शिरडी के पास",
            trustLocationSub: "अस्तगाँव फाटा",

            plantsEyebrow: "हमारे पौधों का संग्रह",
            exploreOurVarieties: "हमारी अनार की किस्में देखें",
            varietiesDescription: "अपनी खेती के लिए सही अनार के पौधे चुनें।",

            variety01: "किस्म 01",
            bhagwaTitle: "भगवा",
            bhagwaDescription: "खेती के लिए भगवा अनार के पौधे।",
            enquireBhagwa: "भगवा किस्म के लिए पूछताछ करें",

            variety02: "किस्म 02",
            superBhagwaTitle: "सुपर भगवा",
            superBhagwaDescription: "सुपर भगवा अनार के पौधे।",
            enquireSuperBhagwa: "सुपर भगवा के लिए पूछताछ करें",

            variety03: "किस्म 03",
            shardKingTitle: "शारद किंग",
            shardKingDescription: "शारद किंग अनार के पौधे।",
            enquireShardKing: "शारद किंग के लिए पूछताछ करें",

            viewAllVarieties: "सभी किस्में देखें",

            aboutEyebrow: "हमारे बारे में",
            aboutTitle: "ओम साई डाळिंब नर्सरी",
            aboutParagraph1: "हम उच्च गुणवत्ता वाले अनार के पौधों की जानकारी और पूछताछ में सहायता करते हैं।",
            aboutParagraph2: "भगवा, सुपर भगवा और शारद किंग किस्मों के बारे में पूछताछ करने के लिए संपर्क करें।",

            feature1Title: "उच्च गुणवत्ता",
            feature1Description: "पौधों की गुणवत्ता को प्राथमिकता।",
            feature2Title: "असली किस्में",
            feature2Description: "अनार की विभिन्न किस्में।",
            feature3Title: "ग्राहक सहायता",
            feature3Description: "आपकी पूछताछ में सहायता।",

            learnAboutUs: "हमारे बारे में जानें",

            galleryEyebrow: "हमारी गैलरी",
            plantsSectionTitle: "हमारे अनार के पौधे",
            galleryDescription: "हमारी नर्सरी के पौधों की तस्वीरें देखें।",
            ourNursery: "हमारी नर्सरी",
            bhagwa: "भगवा",
            exploreGallery: "गैलरी देखें",

            ctaEyebrow: "आज ही पूछताछ करें",
            ctaTitle: "अनार के पौधे चाहिए?",
            ctaDescription: "उपलब्धता, कीमत और थोक आपूर्ति के लिए संपर्क करें।",
            enquireWhatsApp: "WhatsApp पर पूछताछ करें",
            callNursery: "नर्सरी में कॉल करें",

            faqEyebrow: "सामान्य प्रश्न",
            faqTitle: "अक्सर पूछे जाने वाले प्रश्न",
            faqQuestion1: "कौन-सी किस्में उपलब्ध हैं?",
            faqAnswer1: "भगवा, सुपर भगवा और शारद किंग किस्मों के बारे में पूछताछ कर सकते हैं।",
            faqQuestion2: "क्या थोक दरें उपलब्ध हैं?",
            faqAnswer2: "थोक दरों के लिए सीधे नर्सरी से संपर्क करें।",
            faqQuestion3: "क्या पौधों की बुकिंग कर सकते हैं?",
            faqAnswer3: "बुकिंग और उपलब्धता के लिए नर्सरी से संपर्क करें।",
            faqQuestion4: "नर्सरी कहाँ है?",
            faqAnswer4: "अस्तगाँव फाटा, शिरडी के पास, महाराष्ट्र।",

            footerTagline: "स्वस्थ पौधे, विश्वास का रिश्ता",
            footerDescription: "शिरडी के पास अनार के पौधों के लिए हमसे संपर्क करें।",
            quickLinks: "महत्वपूर्ण लिंक",
            ourVarieties: "हमारी किस्में",
            contactUs: "संपर्क करें",
            emailNursery: "नर्सरी को ईमेल करें",
            locationFooter: "अस्तगाँव फाटा, शिरडी के पास, महाराष्ट्र",
            copyright: "सर्वाधिकार सुरक्षित",

            aboutHeroEyebrow: "ओम साई डाळिंब नर्सरी",
            aboutHeroTitle: "हमारे बारे में",
            aboutHeroDescription: "हमारी नर्सरी और अनार के पौधों के बारे में जानें।",
            whoWeAre: "हम कौन हैं?",
            aboutIntroTitle: "हमारी नर्सरी का परिचय",
            aboutIntroParagraph1: "हम अनार के पौधों के लिए पूछताछ स्वीकार करते हैं।",
            aboutIntroParagraph2: "भगवा, सुपर भगवा और शारद किंग किस्मों की जानकारी प्राप्त करें।",
            aboutIntroParagraph3: "उपलब्धता और कीमतों के लिए संपर्क करें।",
            aboutWhatsAppButton: "WhatsApp पर संपर्क करें",

            ourFocus: "हमारा उद्देश्य",
            focusTitle: "गुणवत्ता पर ध्यान",
            focusDescription: "अनार के पौधों की जानकारी और पूछताछ में सहायता।",
            focusVarietiesTitle: "अनार की किस्में",
            focusVarietiesDescription: "उपलब्ध किस्मों के बारे में पूछताछ करें।",
            exploreVarietiesArrow: "किस्में देखें →",
            plantRequirementsTitle: "पौधों की आवश्यकता",
            plantRequirementsDescription: "अपनी पौधों की ज़रूरतों पर चर्चा करें।",
            makeEnquiry: "पूछताछ करें",
            convenientContactTitle: "आसानी से संपर्क करें",
            convenientContactDescription: "फोन या WhatsApp के माध्यम से संपर्क करें।",
            contactDetails: "संपर्क विवरण",
            enquiryVarietiesTitle: "अनार की किस्में",
            enquiryVarietiesDescription: "भगवा, सुपर भगवा और शारद किंग के बारे में पूछें।",
            exploreVarietyDetails: "किस्मों की जानकारी देखें",
            aboutCtaEyebrow: "हमसे संपर्क करें",
            aboutCtaTitle: "अनार के पौधे चाहिए?",
            aboutCtaDescription: "उपलब्धता और थोक दरों के लिए पूछताछ करें।",
            whatsappUs: "WhatsApp पर संपर्क करें",
            callNow: "अभी कॉल करें",
            allRightsReserved: "सर्वाधिकार सुरक्षित",
                        /* Gallery page — Hindi */
            galleryEyebrow: "हमारी नर्सरी की एक झलक",
            ourNursery: "हमारी नर्सरी",
            galleryHeroDescription: "ओम साई डाळिंब नर्सरी के अनार के पौधे, नर्सरी की तस्वीरें और बगीचे का परिसर देखें।",
            fromOurNursery: "हमारी नर्सरी से",
            exploreOur: "देखें हमारा",
            collection: "संग्रह",
            galleryIntroduction: "हमारे अनार के पौधों, नर्सरी की सुविधाओं और बगीचे की तस्वीरों को करीब से देखें। नीचे तस्वीरों और वीडियो का संग्रह देखें।",
            our: "हमारे",
            plants: "पौधे",
            plantCollectionDescription: "हमारे अनार के पौधों के संग्रह की तस्वीरें।",
            pomegranatePlants: "अनार के पौधे",
            fromPlantCollection: "हमारे पौधों के संग्रह से।",
            plantCollection: "पौधों का संग्रह",
            exploreNurseryPlants: "हमारी नर्सरी के पौधे देखें।",
            plantsAvailable: "हमारी नर्सरी में उपलब्ध पौधे।",
            plantDetails: "पौधों की जानकारी",
            closerLookPlants: "हमारे पौधों को करीब से देखें।",
            fromNurseryCollection: "हमारी नर्सरी के संग्रह से।",
            contactVarietyDetails: "किस्मों की जानकारी के लिए संपर्क करें।",
            explorePlantCollection: "हमारे पौधों का संग्रह देखें।",
            plantsFromNursery: "हमारी नर्सरी के पौधे।",
            contactAvailability: "उपलब्धता के लिए संपर्क करें।",
            exploreAvailablePlants: "उपलब्ध पौधे देखें।",
            seeNurseryPhotographs: "हमारी नर्सरी की तस्वीरें देखें।",
            plantsAtNursery: "ओम साई डाळिंब नर्सरी के पौधे।",
            contactFurtherInformation: "अधिक जानकारी के लिए संपर्क करें।",
            nursery: "नर्सरी",
            nurseryPhotographsDescription: "हमारी नर्सरी और पौधे उगाने वाले क्षेत्रों की तस्वीरें।",
            nurseryView: "नर्सरी का दृश्य",
            glimpseNursery: "हमारी नर्सरी की एक झलक।",
            nurseryPremises: "हमारी नर्सरी के परिसर से।",
            nurseryActivities: "नर्सरी की गतिविधियाँ",
            lookAroundNursery: "हमारी नर्सरी का परिसर देखें।",
            growingEnvironment: "हमारे पौधे उगाने वाले क्षेत्र का दृश्य।",
            exploreNurseryPhotographs: "हमारी नर्सरी की तस्वीरें देखें।",
            nurseryAndOrchard: "नर्सरी और बगीचा",
            fromOmSaiNursery: "ओम साई डाळिंब नर्सरी से।",
            orchard: "बगीचा",
            orchardPhotographsDescription: "हमारे बगीचे के संग्रह की तस्वीरें।",
            orchardView: "बगीचे का दृश्य",
            lookAtOrchard: "हमारे बगीचे की एक झलक।",
            fromOrchardCollection: "हमारे बगीचे के संग्रह से।",
            exploreOrchardPhotographs: "बगीचे की तस्वीरें देखें।",
            orchardCollection: "बगीचे का संग्रह",
            anotherOrchardView: "हमारे संग्रह का एक और दृश्य।",
            highlights: "मुख्य झलकियाँ",
            moreNurseryPhotographs: "हमारी नर्सरी के संग्रह की और तस्वीरें।",
            nurseryHighlight: "नर्सरी की खास झलक",
            fromPhotographCollection: "हमारी तस्वीरों के संग्रह से।",
            exploreOurNursery: "हमारी नर्सरी देखें।",
            discoverNurseryCollection: "हमारी नर्सरी का संग्रह देखें।",
            videos: "वीडियो",
            watchNurseryVideos: "ओम साई डाळिंब नर्सरी के वीडियो देखें।",
            nurseryVideo1: "नर्सरी वीडियो 1",
            videoFromNursery: "हमारी नर्सरी के संग्रह का एक वीडियो।",
            nurseryVideo2: "नर्सरी वीडियो 2",
            exploreMoreNursery: "हमारी नर्सरी को और करीब से देखें।",
            interestedInPlants: "हमारे पौधों में रुचि है?",
            galleryContactNote: "पौधों की उपलब्धता, थोक दरों और बुकिंग के लिए ओम साई डाळिंब नर्सरी से संपर्क करें।",
            ourAvailableVarieties: "हमारी उपलब्ध किस्में",
            findTheRight: "सही",
            variety: "किस्म चुनें",
            availableVarietiesDescription: "भगवा, सुपर भगवा और शारद किंग अनार के पौधों के बारे में पूछताछ करने के लिए संपर्क करें।",
            viewVarietyDetails: "किस्म की जानकारी देखें",
            planningToBuy: "खरीदने की योजना बना रहे हैं?",
            lookingForPomegranatePlants: "अनार के पौधे चाहिए?",
            galleryCtaDescription: "पौधों की उपलब्धता, थोक दरों और बुकिंग के लिए ओम साई डाळिंब नर्सरी से संपर्क करें।",
            enquireWhatsApp: "WhatsApp पर पूछताछ करें",
            contactDetails: "संपर्क विवरण",
            footerDescription: "शिरडी के पास अनार के पौधों के लिए हमसे संपर्क करें।",
            nurseryAddress: "📍 अस्तगाँव फाटा, शिरडी के पास, महाराष्ट्र 423107",
            chatWhatsApp: "WhatsApp पर चैट करें →",
            copyrightText: "ओम साई डाळिंब नर्सरी। सर्वाधिकार सुरक्षित।",
            videoFallback: "आपका ब्राउज़र वीडियो चलाने का समर्थन नहीं करता है।",
            // Contact page — Hindi
contactHeroEyebrow: "हम आपकी सहायता के लिए यहाँ हैं",
contactHeroTitle: "हमसे संपर्क करें",
contactHeroDescription: "हमारे अनार के पौधों, कीमतों या थोक ऑर्डर के बारे में कोई सवाल है? हमसे संपर्क करें या अपनी पूछताछ भेजें। हमें आपकी सहायता करके खुशी होगी।",
sendEnquiry: "पूछताछ भेजें",

contactHelpTitle: "हम आपकी कैसे मदद कर सकते हैं?",
contactHelpDescription: "नीचे दिए गए किसी भी विकल्प से हमसे संपर्क करें।",
callUs: "हमें कॉल करें",
callUsDescription: "पौधों की उपलब्धता, कीमत और ऑर्डर के लिए कॉल करें।",
whatsappUs: "WhatsApp पर संपर्क करें",
whatsappDescription: "पूछताछ और थोक ऑर्डर के लिए हमें संदेश भेजें।",
chatOnWhatsApp: "WhatsApp पर संदेश भेजें",
visitNursery: "हमारी नर्सरी में आएँ",
getDirections: "रास्ता देखें",

sendUsEnquiry: "हमें पूछताछ भेजें",
enquiryFormDescription: "नीचे अपनी जानकारी भरें। आपकी पूछताछ WhatsApp में खुलेगी। उसे भेजने के लिए WhatsApp में Send बटन दबाएँ।",
fullName: "पूरा नाम *",
fullNamePlaceholder: "अपना पूरा नाम दर्ज करें",
mobileNumber: "मोबाइल नंबर *",
mobilePlaceholder: "अपना 10 अंकों का मोबाइल नंबर दर्ज करें",
validMobileTitle: "कृपया सही मोबाइल नंबर दर्ज करें।",
plantVariety: "पौधों की किस्म *",
selectVariety: "किस्म चुनें",
multipleVarieties: "एक से अधिक किस्में",
otherNeedGuidance: "अन्य / मार्गदर्शन चाहिए",
requiredQuantity: "आवश्यक पौधों की संख्या *",
quantityPlaceholder: "पौधों की संख्या दर्ज करें",
additionalMessage: "अतिरिक्त संदेश",
messagePlaceholder: "अपनी आवश्यकता के बारे में बताएँ",
sendEnquiryWhatsApp: "WhatsApp पर पूछताछ भेजें",
whatsappPrivacyNote: "आपका संदेश WhatsApp में खुलेगा। कृपया उसे जाँचकर Send दबाएँ।",

rightVarietyTitle: "क्या आप अनार की सही किस्म ढूँढ रहे हैं?",
rightVarietyDescription: "हम भगवा, सुपर भगवा और शार्ड किंग अनार के पौधे उपलब्ध कराते हैं। उपलब्धता और थोक ऑर्डर की जानकारी के लिए संपर्क करें।",
exploreOurVarieties: "हमारी किस्में देखें",

contactErrorName: "कृपया अपना पूरा नाम दर्ज करें।",
contactErrorMobile: "कृपया सही मोबाइल नंबर दर्ज करें।",
contactErrorVariety: "कृपया पौधों की किस्म चुनें।",
contactErrorQuantity: "कृपया कम से कम एक पौधे की सही संख्या दर्ज करें।",
contactSuccessMessage: "आपकी पूछताछ WhatsApp में तैयार है। कृपया उसे जाँचें और Send दबाएँ।",
contactPopupMessage: "WhatsApp अपने आप नहीं खुला। कृपया पॉप-अप की अनुमति दें या ऊपर दिया गया WhatsApp बटन इस्तेमाल करें।",
navHome: "होम", navVarieties: "किस्में", navGallery: "गैलरी", navAbout: "हमारे बारे में", navContact: "संपर्क", navEnquire: "पूछताछ करें", varietiesHeroEyebrow: "हमारे पौधों का संग्रह", varietiesHeroTitle: "अनार के पौधों की किस्में", varietiesIntroEyebrow: "अपनी किस्म चुनें", varietiesIntroTitle: "हमारे अनार के पौधे देखें", bhagwaLabel: "किस्म ०१", bhagwaTitle: "भगवा", bhagwaEnquire: "भगवा पौधों के बारे में पूछताछ करें →", superBhagwaLabel: "किस्म ०२", superBhagwaTitle: "सुपर भगवा", superBhagwaEnquire: "सुपर भगवा पौधों के बारे में पूछताछ करें →", shardKingLabel: "किस्म ०३", shardKingTitle: "शार्द किंग", shardKingEnquire: "शार्द किंग पौधों के बारे में पूछताछ करें →", orchardEyebrow: "अपने बगीचे की योजना बनाएं", orchardTitle: "आइए, आपकी ज़रूरतों पर चर्चा करें", varietyEnquiriesTitle: "किस्मों के बारे में पूछताछ", quantityRequirementsTitle: "पौधों की संख्या", pricingInformationTitle: "कीमत की जानकारी", discussWhatsApp: "व्हाट्सऐप पर चर्चा करें", lookingPlantsTitle: "अनार के पौधे चाहिए?", varietiesCtaTitle: "हमारे पौधों के बारे में सवाल हैं?", whatsappUs: "व्हाट्सऐप पर संपर्क करें", contactDetails: "संपर्क जानकारी", footerQuickLinks: "महत्वपूर्ण लिंक", footerPlantVarieties: "पौधों की किस्में", footerContact: "संपर्क", footerEmail: "ईमेल करें"
    }
    };

    /* =====================================================
       HELPER FUNCTIONS
    ===================================================== */

    function getCurrentLanguage() {
        try {
            const savedLanguage = localStorage.getItem(STORAGE_KEY);

            if (["en", "mr", "hi"].includes(savedLanguage)) {
                return savedLanguage;
            }
        } catch (error) {
            console.warn("Could not read saved language preference.", error);
        }

        return DEFAULT_LANGUAGE;
    }

    function normalizeText(text) {
        return String(text).replace(/\s+/g, " ").trim();
    }

    function translateText(originalText, language) {
        if (language === "en") {
            return originalText;
        }

        const key = normalizeText(originalText);

        if (!key) {
            return originalText;
        }

        const dictionary = translations[language];

        if (!dictionary) {
            return originalText;
        }

        return dictionary[key] !== undefined
            ? dictionary[key]
            : originalText;
    }

    /* =====================================================
       DATA-I18N KEY TRANSLATIONS
    ===================================================== */

    function translateKeyedElements(language) {
    const dictionary = keyedTranslations[language] || {};

    document.querySelectorAll("[data-i18n]").forEach(function (element) {
        const key = element.getAttribute("data-i18n");

        if (!key) return;

        if (element.dataset.originalI18nHTML === undefined) {
            element.dataset.originalI18nHTML = element.innerHTML;
        }

        const originalHTML = element.dataset.originalI18nHTML;

        if (language === "en") {
            element.innerHTML = originalHTML;
            return;
        }

        if (dictionary[key] === undefined) {
            element.innerHTML = originalHTML;
            return;
        }

        /*
         * Simple elements can be translated directly.
         * For elements containing HTML, preserve the markup
         * and translate their direct text nodes only.
         */
        if (element.children.length === 0) {
            element.textContent = dictionary[key];
        } else {
            element.innerHTML = originalHTML;

            const walker = document.createTreeWalker(
                element,
                NodeFilter.SHOW_TEXT,
                {
                    acceptNode: function (node) {
                        return node.parentElement === element &&
                            node.nodeValue.trim()
                            ? NodeFilter.FILTER_ACCEPT
                            : NodeFilter.FILTER_REJECT;
                    }
                }
            );

            const textNodes = [];

            while (walker.nextNode()) {
                textNodes.push(walker.currentNode);
            }

            if (textNodes.length === 1) {
                textNodes[0].nodeValue = dictionary[key];
            }
        }
    });

    document.querySelectorAll("[data-i18n-aria-label]").forEach(
        function (element) {
            const key = element.getAttribute("data-i18n-aria-label");

            if (element.dataset.originalAriaLabel === undefined) {
                element.dataset.originalAriaLabel =
                    element.getAttribute("aria-label") || "";
            }

            if (language === "en") {
                element.setAttribute(
                    "aria-label",
                    element.dataset.originalAriaLabel
                );
            } else if (dictionary[key] !== undefined) {
                element.setAttribute("aria-label", dictionary[key]);
            }
        }
    );
}

    /* =====================================================
       PLAIN HTML TEXT SUPPORT
       Translates text nodes without replacing HTML elements.
    ===================================================== */

    function translatePlainText(language) {
        const walker = document.createTreeWalker(
            document.body,
            NodeFilter.SHOW_TEXT,
            {
                acceptNode: function (node) {
                    if (!node.nodeValue || !node.nodeValue.trim()) {
                        return NodeFilter.FILTER_REJECT;
                    }

                    const parent = node.parentElement;

                    if (!parent) {
                        return NodeFilter.FILTER_REJECT;
                    }

                    const tag = parent.tagName.toLowerCase();

                    if (
                        tag === "script" ||
                        tag === "style" ||
                        tag === "noscript" ||
                        tag === "textarea"
                    ) {
                        return NodeFilter.FILTER_REJECT;
                    }

                    if (parent.closest("[data-i18n]")) {
                        return NodeFilter.FILTER_REJECT;
                    }

                    return NodeFilter.FILTER_ACCEPT;
                }
            }
        );

        const textNodes = [];

        while (walker.nextNode()) {
            textNodes.push(walker.currentNode);
        }

        textNodes.forEach(function (node) {
            if (node.__originalText === undefined) {
                node.__originalText = node.nodeValue;
            }

            const original = node.__originalText;

            const leadingWhitespace = original.match(/^\s*/)?.[0] || "";
            const trailingWhitespace = original.match(/\s*$/)?.[0] || "";
            const trimmed = original.trim();

            const translated = translateText(trimmed, language);

            node.nodeValue =
                leadingWhitespace + translated + trailingWhitespace;
        });
    }

    /* =====================================================
       RESTORE ORIGINAL ENGLISH TEXT
    ===================================================== */

    function restoreOriginalText() {
        const walker = document.createTreeWalker(
            document.body,
            NodeFilter.SHOW_TEXT
        );

        while (walker.nextNode()) {
            const node = walker.currentNode;

            if (node.__originalText !== undefined) {
                node.nodeValue = node.__originalText;
            }
        }
    }

    /* =====================================================
       PLACEHOLDER, ALT, TITLE AND SELECT OPTION SUPPORT
    ===================================================== */

    function translateAttributes(language) {
        const attributeNames = [
            "placeholder",
            "title",
            "alt",
            "aria-label"
        ];

        document.querySelectorAll("*").forEach(function (element) {
            attributeNames.forEach(function (attribute) {
                if (!element.hasAttribute(attribute)) {
                    return;
                }

                const storageKey =
                    "original_" + attribute.replace("-", "_");

                if (element.dataset[storageKey] === undefined) {
                    element.dataset[storageKey] =
                        element.getAttribute(attribute);
                }

                const original = element.dataset[storageKey];

                if (language === "en") {
                    element.setAttribute(attribute, original);
                } else {
                    element.setAttribute(
                        attribute,
                        translateText(original, language)
                    );
                }
            });
        });

        document.querySelectorAll("option").forEach(function (option) {
            if (option.dataset.originalOptionText === undefined) {
                option.dataset.originalOptionText = option.textContent;
            }

            const original = option.dataset.originalOptionText;

            option.textContent =
                language === "en"
                    ? original
                    : translateText(original, language);
        });
    }

    /* =====================================================
       LANGUAGE SELECTOR
    ===================================================== */

    function updateSelectors(language) {
        document.querySelectorAll("[data-language-selector]").forEach(
            function (selector) {
                selector.value = language;
            }
        );

        const commonSelector =
            document.getElementById("languageSelector");

        if (commonSelector) {
            commonSelector.value = language;
        }
    }

    /* =====================================================
       UPDATE DOCUMENT LANGUAGE AND TITLE
    ===================================================== */

    function updateDocumentLanguage(language) {
        document.documentElement.lang = language;

        if (!document.documentElement.dataset.originalTitle) {
            document.documentElement.dataset.originalTitle =
                document.title;
        }

        const originalTitle =
            document.documentElement.dataset.originalTitle;

        const pageTitles = {
            en: originalTitle,
            mr: "ओम साई डाळिंब नर्सरी",
            hi: "ओम साई डाळिंब नर्सरी"
        };

        document.title = pageTitles[language] || originalTitle;
    }

    /* =====================================================
       APPLY SELECTED LANGUAGE
    ===================================================== */

    function applyLanguage(language) {
        if (!["en", "mr", "hi"].includes(language)) {
            language = DEFAULT_LANGUAGE;
        }

        try {
            localStorage.setItem(STORAGE_KEY, language);
        } catch (error) {
            console.warn("Could not save language preference.", error);
        }

        /*
         * Restore original English text first.
         * This prevents translations from being applied on top
         * of previously translated text when switching languages.
         */

        restoreOriginalText();

        document.querySelectorAll("[data-i18n]").forEach(function (element) {
            if (
                element.dataset.originalI18nText !== undefined &&
                element.children.length === 0
            ) {
                element.textContent = element.dataset.originalI18nText;
            }
        });

        translateKeyedElements(language);
        translatePlainText(language);
        translateAttributes(language);
        updateSelectors(language);
        updateDocumentLanguage(language);

        document.dispatchEvent(
            new CustomEvent("nurseryLanguageChanged", {
                detail: {
                    language: language
                }
            })
        );
    }

    /* =====================================================
       INITIALIZE LANGUAGE SWITCHER
    ===================================================== */

    function initializeLanguage() {
        const language = getCurrentLanguage();

        document.querySelectorAll("[data-language-selector]").forEach(
            function (selector) {
                selector.addEventListener("change", function () {
                    applyLanguage(selector.value);
                });
            }
        );

        const commonSelector =
            document.getElementById("languageSelector");

        if (
            commonSelector &&
            !commonSelector.hasAttribute("data-language-selector")
        ) {
            commonSelector.addEventListener("change", function () {
                applyLanguage(commonSelector.value);
            });
        }

        applyLanguage(language);
    }

    if (document.readyState === "loading") {
        document.addEventListener(
            "DOMContentLoaded",
            initializeLanguage
        );
    } else {
        initializeLanguage();
    }

    /* =====================================================
       PUBLIC FUNCTION
       Allows other scripts to change the website language.
    ===================================================== */

    window.setNurseryLanguage = applyLanguage;

})();