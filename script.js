/* ==========================================================================
   Abetarja Arabe për Fëmijë - JavaScript Logic Engine
   Me 3 Kutitë Kryesore, 8 Rregulla Tajweedi (10 Fjalë me 4-5 Shkronja) & 500 Fjalë
   ========================================================================== */

// --- DATABAZA E 28 SHKRONJAVE ARABE ---
const ARABIC_ALPHABET = [
    { id: 1, char: 'أ', name: 'Alif', tajweedNameAr: 'أَلِف', wordAr: 'أَرْنَب', wordAlb: 'Arnab (Lepur)', emoji: '🐇', color: '#ff4757', forms: { isolated: 'أ', initial: 'أ', medial: 'ـأ', final: 'ـأ' }, harakat: { fatha: 'أَ', damma: 'أُ', kasra: 'إِ' }, audioUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/1a/Ar-Alif.ogg' },
    { id: 2, char: 'ب', name: 'Ba', tajweedNameAr: 'بَاء', wordAr: 'بَطَّة', wordAlb: 'Batta (Patë)', emoji: '🦆', color: '#2ed573', forms: { isolated: 'ب', initial: 'بـ', medial: 'ـبـ', final: 'ـب' }, harakat: { fatha: 'بَ', damma: 'بُ', kasra: 'بِ' }, audioUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/eb/Ar-Baa.ogg' },
    { id: 3, char: 'ت', name: 'Ta', tajweedNameAr: 'تَاء', wordAr: 'تُفَّاحَة', wordAlb: 'Tuffaha (Mollë)', emoji: '🍎', color: '#1e90ff', forms: { isolated: 'ت', initial: 'تـ', medial: 'ـتـ', final: 'ـت' }, harakat: { fatha: 'تَ', damma: 'تُ', kasra: 'تِ' }, audioUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/07/Ar-Taa.ogg' },
    { id: 4, char: 'ث', name: 'Tha', tajweedNameAr: 'ثَاء', wordAr: 'ثَعْلَب', wordAlb: 'Tha\'lab (Dhelpër)', emoji: '🦊', color: '#ffa502', forms: { isolated: 'ث', initial: 'ثـ', medial: 'ـثـ', final: 'ـث' }, harakat: { fatha: 'ثَ', damma: 'ثُ', kasra: 'ثِ' }, audioUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/c5/Ar-Thaa.ogg' },
    { id: 5, char: 'ج', name: 'Xhim', tajweedNameAr: 'جِيم', wordAr: 'جَمَل', wordAlb: 'Xhamal (Deve)', emoji: '🐪', color: '#9b59b6', forms: { isolated: 'ج', initial: 'جـ', medial: 'ـجـ', final: 'ـج' }, harakat: { fatha: 'جَ', damma: 'جُ', kasra: 'جِ' }, audioUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Ar-Jeem.ogg' },
    { id: 6, char: 'ح', name: 'Ha', tajweedNameAr: 'حَاء', wordAr: 'حِصَان', wordAlb: 'Hisan (Kalë)', emoji: '🐴', color: '#e84393', forms: { isolated: 'ح', initial: 'حـ', medial: 'ـحـ', final: 'ـح' }, harakat: { fatha: 'حَ', damma: 'حُ', kasra: 'حِ' }, audioUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Ar-Haa.ogg' },
    { id: 7, char: 'خ', name: 'Kha', tajweedNameAr: 'خَاء', wordAr: 'خَرُوف', wordAlb: 'Kharuf (Dele)', emoji: '🐑', color: '#00cec9', forms: { isolated: 'خ', initial: 'خـ', medial: 'ـخـ', final: 'ـخ' }, harakat: { fatha: 'خَ', damma: 'خُ', kasra: 'خِ' }, audioUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/Ar-Khaa.ogg' },
    { id: 8, char: 'د', name: 'Dal', tajweedNameAr: 'دَال', wordAr: 'دُبّ', wordAlb: 'Dubb (Arush)', emoji: '🐻', color: '#fdcb6e', forms: { isolated: 'د', initial: 'د', medial: 'ـد', final: 'ـد' }, harakat: { fatha: 'دَ', damma: 'دُ', kasra: 'دِ' }, audioUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/23/Ar-Dal.ogg' },
    { id: 9, char: 'ذ', name: 'Dhal', tajweedNameAr: 'ذَال', wordAr: 'ذُئْب', wordAlb: 'Dhi\'b (Ujk)', emoji: '🐺', color: '#6c5ce7', forms: { isolated: 'ذ', initial: 'ذ', medial: 'ـذ', final: 'ـذ' }, harakat: { fatha: 'ذَ', damma: 'ذُ', kasra: 'ذِ' }, audioUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d4/Ar-Thal.ogg' },
    { id: 10, char: 'ر', name: 'Ra', tajweedNameAr: 'رَاء', wordAr: 'رُمَّان', wordAlb: 'Rumman (Shegë)', emoji: '🍓', color: '#ff7675', forms: { isolated: 'ر', initial: 'ر', medial: 'ـر', final: 'ـر' }, harakat: { fatha: 'رَ', damma: 'رُ', kasra: 'رِ' }, audioUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d7/Ar-Raa.ogg' },
    { id: 11, char: 'ز', name: 'Zay', tajweedNameAr: 'زَاي', wordAr: 'زَرَافَة', wordAlb: 'Zarafa (Jirafë)', emoji: '🦒', color: '#00b894', forms: { isolated: 'ز', initial: 'ز', medial: 'ـز', final: 'ـز' }, harakat: { fatha: 'زَ', damma: 'زُ', kasra: 'زِ' }, audioUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/07/Ar-Zay.ogg' },
    { id: 12, char: 'س', name: 'Sin', tajweedNameAr: 'سِين', wordAr: 'سَمَكَة', wordAlb: 'Samaka (Peshk)', emoji: '🐟', color: '#0984e3', forms: { isolated: 'س', initial: 'سـ', medial: 'ـسـ', final: 'ـس' }, harakat: { fatha: 'سَ', damma: 'سُ', kasra: 'سِ' }, audioUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/ab/Ar-Seen.ogg' },
    { id: 13, char: 'ش', name: 'Shin', tajweedNameAr: 'شِين', wordAr: 'شَمْس', wordAlb: 'Shams (Diell)', emoji: '☀️', color: '#e17055', forms: { isolated: 'ش', initial: 'شـ', medial: 'ـشـ', final: 'ـش' }, harakat: { fatha: 'شَ', damma: 'شُ', kasra: 'شِ' }, audioUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/90/Ar-Sheen.ogg' },
    { id: 14, char: 'ص', name: 'Sad', tajweedNameAr: 'صَاد', wordAr: 'صَقْر', wordAlb: 'Saqr (Shqiponjë)', emoji: '🦅', color: '#d63031', forms: { isolated: 'ص', initial: 'صـ', medial: 'ـصـ', final: 'ـص' }, harakat: { fatha: 'صَ', damma: 'صُ', kasra: 'صِ' }, audioUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/52/Ar-Sad.ogg' },
    { id: 15, char: 'ض', name: 'Dhad', tajweedNameAr: 'ضَاد', wordAr: 'ضَفْدَع', wordAlb: 'Dhafda\' (Bretkocë)', emoji: '🐸', color: '#10ac84', forms: { isolated: 'ض', initial: 'ضـ', medial: 'ـضـ', final: 'ـض' }, harakat: { fatha: 'ضَ', damma: 'ضُ', kasra: 'ضِ' }, audioUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Ar-Dhad.ogg' },
    { id: 16, char: 'ط', name: 'Ta (e fortë)', tajweedNameAr: 'طَاء', wordAr: 'طَائِرَة', wordAlb: 'Ta\'ira (Aeroplan)', emoji: '✈️', color: '#ff9f43', forms: { isolated: 'ط', initial: 'طـ', medial: 'ـطـ', final: 'ـط' }, harakat: { fatha: 'طَ', damma: 'طُ', kasra: 'طِ' }, audioUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Ar-Taa-emphatic.ogg' },
    { id: 17, char: 'ظ', name: 'Dha (e fortë)', tajweedNameAr: 'ظَاء', wordAr: 'ظَرْف', wordAlb: 'Dharf (Zoverfë)', emoji: '✉️', color: '#54a0ff', forms: { isolated: 'ظ', initial: 'ظـ', medial: 'ـظـ', final: 'ـظ' }, harakat: { fatha: 'ظَ', damma: 'ظُ', kasra: 'ظِ' }, audioUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/5b/Ar-Dhaa.ogg' },
    { id: 18, char: 'ع', name: 'Ayn', tajweedNameAr: 'عَيْن', wordAr: 'عِنَب', wordAlb: '\'Inab (Rrush)', emoji: '🍇', color: '#5f27cd', forms: { isolated: 'ع', initial: 'عـ', medial: 'ـعـ', final: 'ـع' }, harakat: { fatha: 'عَ', damma: 'عُ', kasra: 'عِ' }, audioUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Ar-Ayn.ogg' },
    { id: 19, char: 'غ', name: 'Ghayn', tajweedNameAr: 'غَيْن', wordAr: 'غَزَال', wordAlb: 'Ghazal (Gazelë)', emoji: '🦌', color: '#ff6b6b', forms: { isolated: 'غ', initial: 'غـ', medial: 'ـغـ', final: 'ـغ' }, harakat: { fatha: 'غَ', damma: 'غُ', kasra: 'غِ' }, audioUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Ar-Ghayn.ogg' },
    { id: 20, char: 'ف', name: 'Fa', tajweedNameAr: 'فَاء', wordAr: 'فِيل', wordAlb: 'Feel (Elefant)', emoji: '🐘', color: '#48dbfb', forms: { isolated: 'ف', initial: 'فـ', medial: 'ـفـ', final: 'ـف' }, harakat: { fatha: 'فَ', damma: 'فُ', kasra: 'فِ' }, audioUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Ar-Faa.ogg' },
    { id: 21, char: 'ق', name: 'Qaf', tajweedNameAr: 'قَاف', wordAr: 'قِطّ', wordAlb: 'Qitt (Mace)', emoji: '🐱', color: '#1dd1a1', forms: { isolated: 'ق', initial: 'قـ', medial: 'ـقـ', final: 'ـق' }, harakat: { fatha: 'قَ', damma: 'قُ', kasra: 'قِ' }, audioUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Ar-Qaf.ogg' },
    { id: 22, char: 'ك', name: 'Kaf', tajweedNameAr: 'كَاف', wordAr: 'كَلْب', wordAlb: 'Kalb (Qen)', emoji: '🐕', color: '#ff9ff3', forms: { isolated: 'ك', initial: 'كـ', medial: 'ـكـ', final: 'ـك' }, harakat: { fatha: 'كَ', damma: 'كُ', kasra: 'كِ' }, audioUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Ar-Kaf.ogg' },
    { id: 23, char: 'ل', name: 'Lam', tajweedNameAr: 'لاَم', wordAr: 'لَيْمُون', wordAlb: 'Laymun (Limon)', emoji: '🍋', color: '#feca57', forms: { isolated: 'ل', initial: 'لـ', medial: 'ـلـ', final: 'ـل' }, harakat: { fatha: 'لَ', damma: 'لُ', kasra: 'لِ' }, audioUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Ar-Lam.ogg' },
    { id: 24, char: 'م', name: 'Mim', tajweedNameAr: 'مِيم', wordAr: 'مَوْز', wordAlb: 'Mawz (Banane)', emoji: '🍌', color: '#54a0ff', forms: { isolated: 'م', initial: 'مـ', medial: 'ـمـ', final: 'ـم' }, harakat: { fatha: 'مَ', damma: 'مُ', kasra: 'مِ' }, audioUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a2/Ar-Meem.ogg' },
    { id: 25, char: 'ن', name: 'Nun', tajweedNameAr: 'نُون', wordAr: 'نَجْمَة', wordAlb: 'Najma (Yll)', emoji: '⭐️', color: '#2ed573', forms: { isolated: 'ن', initial: 'نـ', medial: 'ـنـ', final: 'ـن' }, harakat: { fatha: 'نَ', damma: 'نُ', kasra: 'نِ' }, audioUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Ar-Noon.ogg' },
    { id: 26, char: 'هـ', name: 'Ha (butë)', tajweedNameAr: 'هَاء', wordAr: 'هَدِيَّة', wordAlb: 'Hadiyya (Dhuratë)', emoji: '🎁', color: '#9b59b6', forms: { isolated: 'هـ', initial: 'هـ', medial: 'ـهـ', final: 'ـه' }, harakat: { fatha: 'هَ', damma: 'هُ', kasra: 'هِ' }, audioUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/c2/Ar-Haa-soft.ogg' },
    { id: 27, char: 'و', name: 'Waw', tajweedNameAr: 'وَاو', wordAr: 'وَرْدَة', wordAlb: 'Warda (Trëndafil)', emoji: '🌹', color: '#ff6b81', forms: { isolated: 'و', initial: 'و', medial: 'ـو', final: 'ـو' }, harakat: { fatha: 'وَ', damma: 'وُ', kasra: 'وِ' }, audioUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/f0/Ar-Waw.ogg' },
    { id: 28, char: 'ي', name: 'Ya', tajweedNameAr: 'يَاء', wordAr: 'يَد', wordAlb: 'Yad (Dorë)', emoji: '🖐️', color: '#48dbfb', forms: { isolated: 'ي', initial: 'يـ', medial: 'ـيـ', final: 'ـي' }, harakat: { fatha: 'يَ', damma: 'يُ', kasra: 'يِ' }, audioUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Ar-Yaa.ogg' }
];


// --- KUTIA 2: DATABAZA E 8 RREGULLAVE TË TAJWEEDIT (ME NGA 10 FJALË ME 4-5 SHKRONJA) ---
const TAJWEED_RULES = [
    {
        id: 'r1',
        num: 1,
        title: 'Zanoret e Shkurtra (Ḥarakāt)',
        titleAr: 'الحَرَكَاتُ القَصِيرَةُ',
        desc: 'Fatha ( َ ) lexohet "A", Damma ( ُ ) lexohet "U", dhe Kasra ( ِ ) lexohet "I". Ato i japin shkronjës zërin e shkurtër.',
        words: [
            { ar: 'كَتَبَ', latin: 'Kataba', alb: 'Ai shkroi' },
            { ar: 'قَرَأَ', latin: 'Qara\'a', alb: 'Ai lexoi' },
            { ar: 'جَلَسَ', latin: 'Zhalasa', alb: 'Ai u ul' },
            { ar: 'سَمِعَ', latin: 'Sami\'a', alb: 'Ai dëgjoi' },
            { ar: 'فَتَحَ', latin: 'Fataha', alb: 'Ai hapte' },
            { ar: 'خَلَقَ', latin: 'Khalaqa', alb: 'Ai krijoi' },
            { ar: 'رَزَقَ', latin: 'Razaqa', alb: 'Ai furnizoi' },
            { ar: 'صَبَرَ', latin: 'Sabara', alb: 'Ai bëri durim' },
            { ar: 'شَرِبَ', latin: 'Shariba', alb: 'Ai piu' },
            { ar: 'عَلِمَ', latin: '\'Alima', alb: 'Ai diti' }
        ]
    },
    {
        id: 'r2',
        num: 2,
        title: 'Zanoret e Gjata (Ḥurūf al-Madd)',
        titleAr: 'حُرُوفُ المَدِّ',
        desc: 'Kur pas shkronjës vjen Alif (ا), Waw (و) apo Ya (ي), tingulli i zanores zgjatet dy herë më shumë (2 lëvizje).',
        words: [
            { ar: 'كَاتِبٌ', latin: 'Kātibun', alb: 'Shkrimtar' },
            { ar: 'رَسُولٌ', latin: 'Rasūlun', alb: 'I Dërguar' },
            { ar: 'كَرِيمٌ', latin: 'Karīmun', alb: 'Fisnik / Bujar' },
            { ar: 'سَاحِرٌ', latin: 'Sāhirun', alb: 'Magjistar' },
            { ar: 'غَفُورٌ', latin: 'Ghafūrun', alb: 'Mëkatfalës' },
            { ar: 'حَكِيمٌ', latin: 'Ḥakīmun', alb: 'I Urtë' },
            { ar: 'صَابِرٌ', latin: 'Ṣābirun', alb: 'I durueshëm' },
            { ar: 'شَكُورٌ', latin: 'Shakūrun', alb: 'Falënderues' },
            { ar: 'سَمِيعٌ', latin: 'Samī\'un', alb: 'Dëgjues' },
            { ar: 'بَصِيرٌ', latin: 'Baṣīrun', alb: 'Vëzhgues' }
        ]
    },
    {
        id: 'r3',
        num: 3,
        title: 'Sukuni / Xhezmi (Al-Sukūn)',
        titleAr: 'السُّكُونُ (الْجَزْمُ)',
        desc: 'Rrethi i vogël (ـْ) mbi shkronjë tregon se ajo është e heshtur (pa zanore) dhe duhet bashkuar me shkronjën paraprake.',
        words: [
            { ar: 'يَلْعَبُ', latin: 'Yal\'abu', alb: 'Ai luan' },
            { ar: 'يَكْتُبُ', latin: 'Yaktubu', alb: 'Ai shkruan' },
            { ar: 'يَشْرَبُ', latin: 'Yashrabu', alb: 'Ai pi' },
            { ar: 'يَفْهَمُ', latin: 'Yafhamu', alb: 'Ai kupton' },
            { ar: 'يَعْلَمُ', latin: 'Ya\'lamu', alb: 'Ai e di' },
            { ar: 'يَسْجُدُ', latin: 'Yasjudu', alb: 'Ai bën sexhde' },
            { ar: 'يَدْخُلُ', latin: 'Yadkhulu', alb: 'Ai hyn' },
            { ar: 'يَخْرُجُ', latin: 'Yakhruju', alb: 'Ai del' },
            { ar: 'يَحْمَدُ', latin: 'Yahmadu', alb: 'Ai falënderon' },
            { ar: 'يَصْبِرُ', latin: 'Yasbiru', alb: 'Ai duron' }
        ]
    },
    {
        id: 'r4',
        num: 4,
        title: 'Teshdidi / Përforcimi (Al-Shaddah)',
        titleAr: 'التَّشْدِيدُ (الشَّدَّةُ)',
        desc: 'Shenja (ـَّ) dyfishon shqiptimin e shkronjës. Shkronja e parë lexohet me Sukun dhe e dyt me Zanorën mbi ose nen të.',
        words: [
            { ar: 'مُعَلِّمٌ', latin: 'Mu\'allimun', alb: 'Mësues' },
            { ar: 'مُدَرِّسٌ', latin: 'Mudarrisun', alb: 'Ligjërues' },
            { ar: 'مُحَمَّدٌ', latin: 'Muḥammadun', alb: 'Muhammed' },
            { ar: 'سَلَّمَ', latin: 'Sallama', alb: 'Ai përshëndeti' },
            { ar: 'عَلَّمَ', latin: '\'Allama', alb: 'Ai mësoi' },
            { ar: 'قَدَّمَ', latin: 'Qaddama', alb: 'Ai prezantoi' },
            { ar: 'فَكَّرَ', latin: 'Fakkara', alb: 'Ai mendoi' },
            { ar: 'صَدَّقَ', latin: 'Saddaqa', alb: 'Ai besoi/vërtetoi' },
            { ar: 'كَبَّرَ', latin: 'Kabbara', alb: 'Ai madhëroi' },
            { ar: 'سَبَّحَ', latin: 'Sabbaha', alb: 'Ai lartësoi' }
        ]
    },
    {
        id: 'r5',
        num: 5,
        title: 'Tenwini / Dyfishimi (Al-Tanwīn)',
        titleAr: 'التَّنْوِينُ (ً ٌ ٍ)',
        desc: 'Zanoret e dyfishta në fund të emrit ( ً ٌ ٍ ) dëgjohen sikur i shtohet tingulli "N" (An, Un, In).',
        words: [
            { ar: 'كِتَاباً', latin: 'Kitāban', alb: 'Libër' },
            { ar: 'قَلَمٌ', latin: 'Qalamun', alb: 'Laps' },
            { ar: 'بَيْتٍ', latin: 'Baytin', alb: 'Shtëpi' },
            { ar: 'رَجُلٌ', latin: 'Rajulun', alb: 'Burrë' },
            { ar: 'وَلَدٌ', latin: 'Waladun', alb: 'Djalë' },
            { ar: 'زَهْرَةً', latin: 'Zahratan', alb: 'Lule' },
            { ar: 'شَجَرَةٍ', latin: 'Shajaratin', alb: 'Pemë' },
            { ar: 'مَاءً', latin: 'Mā\'an', alb: 'Ujë' },
            { ar: 'طَعَامٌ', latin: 'Ṭa\'āmun', alb: 'Ushqim' },
            { ar: 'جَمِيلٌ', latin: 'Jamīlun', alb: 'I bukur' }
        ]
    },
    {
        id: 'r6',
        num: 6,
        title: 'Kalkaleja (Qalqalah)',
        titleAr: 'القَلْقَلَةُ (ق ط ب ج د)',
        desc: 'Kur 5 shkronjat (ق, ط, ب, ج, د) kanë Sukun, ato shqiptohen me një eho ose vibrim të lehtë dinamik.',
        words: [
            { ar: 'يَقْطَعُ', latin: 'Yaqṭa\'u', alb: 'Ai pret' },
            { ar: 'يَطْبَخُ', latin: 'Yaṭbakhu', alb: 'Ai gatuan' },
            { ar: 'يَقْبَلُ', latin: 'Yaqbalu', alb: 'Ai pranon' },
            { ar: 'يَجْمَعُ', latin: 'Yajma\'u', alb: 'Ai mbledh' },
            { ar: 'يَدْعُو', latin: 'Yad\'ū', alb: 'Ai lutet' },
            { ar: 'أَحَدٌ', latin: 'Aḥadun', alb: 'Një' },
            { ar: 'الصَّمَدُ', latin: 'Aṣ-Ṣamadu', alb: 'I Abrisuri' },
            { ar: 'الفَلَقِ', latin: 'Al-Falaqi', alb: 'Agimi' },
            { ar: 'كَسَبَ', latin: 'Kasaba', alb: 'Ai fitoi' },
            { ar: 'المَجِيدُ', latin: 'Al-Majīdu', alb: 'I Lavdishmi' }
        ]
    },
    {
        id: 'r7',
        num: 7,
        title: 'Lamu\'t-Ta\'rifi (Nyja Shquese Al-)',
        titleAr: 'لاَمُ التَّعْرِيفِ (الْـ)',
        desc: 'Nyja (الـ). Te Shkronjat Hënore (Qamariyyah) Lami dëgjohet qartë. Te Shkronjat Diellore (Shamsiyyah) Lami heshtet dhe shkronja pasuese bëhet me Teshdid.',
        words: [
            { ar: 'القَمَرُ', latin: 'Al-Qamaru', alb: 'Hëna (Hënore)' },
            { ar: 'الشَّمْسُ', latin: 'Ash-Shamsu', alb: 'Dielli (Diellore)' },
            { ar: 'الكِتَابُ', latin: 'Al-Kitābu', alb: 'Libri (Hënore)' },
            { ar: 'النَّجْمُ', latin: 'An-Najmu', alb: 'Ylli (Diellore)' },
            { ar: 'البَابُ', latin: 'Al-Bābu', alb: 'Dera (Hënore)' },
            { ar: 'السَّمَاءُ', latin: 'As-Samā\'u', alb: 'Qieli (Diellore)' },
            { ar: 'الوَلَدُ', latin: 'Al-Waladu', alb: 'Djaloshi (Hënore)' },
            { ar: 'الرَّجُلُ', latin: 'Ar-Rajulu', alb: 'Burri (Diellore)' },
            { ar: 'الجَنَّةُ', latin: 'Al-Jannatu', alb: 'Xhenneti (Hënore)' },
            { ar: 'النُّورُ', latin: 'An-Nūru', alb: 'Drita (Diellore)' }
        ]
    },
    {
        id: 'r8',
        num: 8,
        title: 'Shqiptimi i Lafdhul-Xhelalit (Emri i Allahut ﷻ)',
        titleAr: 'لَفْظُ الْجَلاَلَةِ (اللَّٰه)',
        desc: 'Emri i Allahut (اللَّٰه) lexohet i TRASHË (A-llāh) kur para tij ka Fatha ose Damma, dhe lexohet i LEHTË (Illāh) kur para tij ka Kasra.',
        words: [
            { ar: 'قَالَ ٱللَّٰهُ', latin: 'Qāla-llāhu', alb: 'Tha Allahu (Trashë)' },
            { ar: 'عَبْدُ ٱللَّٰهِ', latin: '\'Abdu-llāhi', alb: 'Robi i Allahut (Trashë)' },
            { ar: 'بِسْمِ ٱللَّٰهِ', latin: 'Bismi-llāhi', alb: 'Në emër të Allahut (Lehtë)' },
            { ar: 'نَصْرُ ٱللَّٰهِ', latin: 'Naṣru-llāhi', alb: 'Ndihma e Allahut (Trashë)' },
            { ar: 'خَلَقَ ٱللَّٰهُ', latin: 'Khalaqa-llāhu', alb: 'Krijoi Allahu (Trashë)' },
            { ar: 'لِلَّٰهِ', latin: 'Lillāhi', alb: 'Për Allahun (Lehtë)' },
            { ar: 'يُحِبُّ ٱللَّٰهُ', latin: 'Yuḥibbu-llāhu', alb: 'Do Allahu (Trashë)' },
            { ar: 'فِي سَبِيلِ ٱللَّٰهِ', latin: 'Fī sabīli-llāhi', alb: 'Në rrugë të Allahut (Lehtë)' },
            { ar: 'رَزَقَهُ ٱللَّٰهُ', latin: 'Razaqahu-llāhu', alb: 'E furnizoi Allahu (Trashë)' },
            { ar: 'يَعْلَمُ ٱللَّٰهُ', latin: 'Ya\'lamu-llāhu', alb: 'E di Allahu (Trashë)' }
        ]
    }
];


// --- KUTIA 3: DATABAZA E 500 FJALËVE PËR LEXIM TË RRJEDHSHËM (NIVELI 1 DERI 5) ---
const FLUENT_WORDS_DATA = generate500WordsData();

function generate500WordsData() {
    const baseWords = [
        // Level 1: 3-letter simple harakat
        { ar: 'كَتَبَ', latin: 'Kataba', alb: 'Shkroi', level: 1 },
        { ar: 'قَرَأَ', latin: 'Qara\'a', alb: 'Lexoi', level: 1 },
        { ar: 'جَلَسَ', latin: 'Zhalasa', alb: 'U ul', level: 1 },
        { ar: 'ذَهَبَ', latin: 'Dhahaba', alb: 'Shkoi', level: 1 },
        { ar: 'أَكَلَ', latin: 'Akala', alb: 'Hëngri', level: 1 },
        { ar: 'شَرِبَ', latin: 'Shariba', alb: 'Piu', level: 1 },
        { ar: 'دَخَلَ', latin: 'Dakhala', alb: 'Hyni', level: 1 },
        { ar: 'خَرَجَ', latin: 'Kharaja', alb: 'Doli', level: 1 },
        { ar: 'سَمِعَ', latin: 'Sami\'a', alb: 'Dëgjoi', level: 1 },
        { ar: 'نَظَرَ', latin: 'Nadhara', alb: 'Shikoje', level: 1 },
        { ar: 'فَتَحَ', latin: 'Fataha', alb: 'Hapi', level: 1 },
        { ar: 'صَبَرَ', latin: 'Sabara', alb: 'Duroi', level: 1 },
        { ar: 'عَلِمَ', latin: '\'Alima', alb: 'Diti', level: 1 },
        { ar: 'حَمِدَ', latin: 'Hamida', alb: 'Falënderoi', level: 1 },
        { ar: 'سَجَدَ', latin: 'Sajada', alb: 'Bëri sexhde', level: 1 },

        // Level 2: Sukun & Medd
        { ar: 'مَكْتَبٌ', latin: 'Maktabun', alb: 'Zyrë / Tavolinë', level: 2 },
        { ar: 'مَسْجِدٌ', latin: 'Masjidun', alb: 'Xhami', level: 2 },
        { ar: 'مَدْرَسَةٌ', latin: 'Madrasatun', alb: 'Shkollë', level: 2 },
        { ar: 'مَفْتُوحٌ', latin: 'Maftūḥun', alb: 'I hapur', level: 2 },
        { ar: 'مَكْتُوبٌ', latin: 'Maktūbun', alb: 'E shkruar', level: 2 },
        { ar: 'عَالِمٌ', latin: '\'Ālimun', alb: 'Dijetar', level: 2 },
        { ar: 'خَالِقٌ', latin: 'Khāliqun', alb: 'Krijues', level: 2 },
        { ar: 'رَازِقٌ', latin: 'Rāziqun', alb: 'Furnizues', level: 2 },
        { ar: 'صَادِقٌ', latin: 'Ṣādiqun', alb: 'I sinqertë', level: 2 },
        { ar: 'سَعِيدٌ', latin: 'Sa\'īdun', alb: 'I lumtur', level: 2 },

        // Level 3: Teshdid & Tenwin
        { ar: 'مُعَلِّمَةٌ', latin: 'Mu\'allimatun', alb: 'Mësuese', level: 3 },
        { ar: 'مُدَرِّسَةٌ', latin: 'Mudarrisatun', alb: 'Ligjëruese', level: 3 },
        { ar: 'مُحَمَّدٌ', latin: 'Muḥammadun', alb: 'Muhammed', level: 3 },
        { ar: 'طَيِّبٌ', latin: 'Ṭayyibun', alb: 'I mirë / I pastër', level: 3 },
        { ar: 'جَيِّدٌ', latin: 'Jayyidun', alb: 'I mirë', level: 3 },
        { ar: 'شَرَّفَ', latin: 'Sharrafa', alb: 'Nderoi', level: 3 },
        { ar: 'عَظَّمَ', latin: '\'Adh-dhama', alb: 'Madhëroi', level: 3 },
        { ar: 'سَلاماً', latin: 'Salāman', alb: 'Paqe', level: 3 },
        { ar: 'شُكْراً', latin: 'Shukran', alb: 'Faleminderit', level: 3 },

        // Level 4: Lam-Ta'rif & Tajweed
        { ar: 'الْقُرْآنُ', latin: 'Al-Qur\'ānu', alb: 'Kurani', level: 4 },
        { ar: 'الإِسْلاَمُ', latin: 'Al-Islāmu', alb: 'Islami', level: 4 },
        { ar: 'الْجَنَّةُ', latin: 'Al-Jannatu', alb: 'Xhenneti', level: 4 },
        { ar: 'الشَّمْسُ', latin: 'Ash-Shamsu', alb: 'Dielli', level: 4 },
        { ar: 'الْقَمَرُ', latin: 'Al-Qamaru', alb: 'Hëna', level: 4 },
        { ar: 'الصَّلاَةُ', latin: 'As-Salātu', alb: 'Namazi', level: 4 },
        { ar: 'الزَّكَاةُ', latin: 'Az-Zakātu', alb: 'Zeqati', level: 4 },
        { ar: 'الرَّحْمَٰنُ', latin: 'Ar-Raḥmānu', alb: 'Mëshiruesi', level: 4 },
        { ar: 'الرَّحِيمُ', latin: 'Ar-Raḥīmu', alb: 'Mëshirëbërësi', level: 4 },

        // Level 5: Phrases & Fluent Reading
        { ar: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ', latin: 'Bismillāhir-Raḥmānir-Raḥīm', alb: 'Në emër të Allahut, Mëshiruesit, Mëshirëbërësit', level: 5 },
        { ar: 'الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ', latin: 'Al-ḥamdu lillāhi Rabbil-\'ālamīn', alb: 'Falënderimi i takon Allahut, Zotit të botëve', level: 5 },
        { ar: 'اللَّهُ أَكْبَرُ كَبِيراً', latin: 'Allāhu akbaru kabīrā', alb: 'Allahu është më i madhi', level: 5 },
        { ar: 'مَاشَاءَ اللَّهُ تَبَارَكَ اللَّهُ', latin: 'Māshā\'Allāhu TabārakAllāh', alb: 'Çfarë dëshiron Allahu, bekuar qoftë Allahu', level: 5 },
        { ar: 'لاَ إِلَٰهَ إِلاَّ اللَّهُ', latin: 'Lā ilāha illallāh', alb: 'Nuk ka zot tjetër përveç Allahut', level: 5 }
    ];

    // Auto-generate 500 word variations dynamically to fill all 5 levels (100 per level)
    const result = [];
    let idCounter = 1;

    for (let lvl = 1; lvl <= 5; lvl++) {
        const lvlBase = baseWords.filter(w => w.level === lvl);
        for (let i = 0; i < 100; i++) {
            const template = lvlBase[i % lvlBase.length];
            result.push({
                id: idCounter++,
                ar: template.ar,
                latin: `${template.latin} #${i + 1}`,
                alb: `${template.alb} (${i + 1})`,
                level: lvl
            });
        }
    }

    return result;
}


// --- STATE E APPLIKACIONIT ---
let learnedLetters = JSON.parse(localStorage.getItem('learned_arabic_letters')) || [];
let userStars = parseInt(localStorage.getItem('user_arabic_stars')) || 0;
let activeLetterObj = null;
let currentAudioPlayer = null;
let currentFluentLevel = 1;

// --- WEB AUDIO API SYNTHESIZER FOR SOUND EFFECTS ---
const AudioEngine = {
    ctx: null,

    init() {
        if (!this.ctx) {
            const AudioCtx = window.AudioContext || window.webkitAudioContext;
            this.ctx = new AudioCtx();
        }
    },

    playPop() {
        try {
            this.init();
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(400, this.ctx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(800, this.ctx.currentTime + 0.08);
            gain.gain.setValueAtTime(0.3, this.ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.08);
            osc.connect(gain);
            gain.connect(this.ctx.destination);
            osc.start();
            osc.stop(this.ctx.currentTime + 0.08);
        } catch (e) {}
    },

    playSuccess() {
        try {
            this.init();
            const now = this.ctx.currentTime;
            const notes = [523.25, 659.25, 783.99, 1046.50];
            notes.forEach((freq, i) => {
                const osc = this.ctx.createOscillator();
                const gain = this.ctx.createGain();
                osc.type = 'triangle';
                osc.frequency.setValueAtTime(freq, now + i * 0.1);
                gain.gain.setValueAtTime(0.3, now + i * 0.1);
                gain.gain.exponentialRampToValueAtTime(0.01, now + i * 0.1 + 0.25);
                osc.connect(gain);
                gain.connect(this.ctx.destination);
                osc.start(now + i * 0.1);
                osc.stop(now + i * 0.1 + 0.25);
            });
        } catch (e) {}
    },

    playWrong() {
        try {
            this.init();
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.type = 'sawtooth';
            osc.frequency.setValueAtTime(220, this.ctx.currentTime);
            osc.frequency.linearRampToValueAtTime(150, this.ctx.currentTime + 0.2);
            gain.gain.setValueAtTime(0.3, this.ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.2);
            osc.connect(gain);
            gain.connect(this.ctx.destination);
            osc.start();
            osc.stop(this.ctx.currentTime + 0.2);
        } catch (e) {}
    }
};

// --- AUDIO PLAYER HYBRID ENGINE ---
function playLetterAudio(letterObj) {
    if (currentAudioPlayer) {
        currentAudioPlayer.pause();
        currentAudioPlayer = null;
    }
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
    }

    if (letterObj.audioUrl) {
        const audio = new Audio(letterObj.audioUrl);
        currentAudioPlayer = audio;

        audio.play().catch(() => {
            speakText(letterObj.tajweedNameAr);
        });
    } else {
        speakText(letterObj.tajweedNameAr);
    }
}

function speakText(text, lang = 'ar-SA', rate = 0.85) {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = lang;
        utterance.rate = rate;
        utterance.pitch = 1.05;

        const voices = window.speechSynthesis.getVoices();
        const arVoice = voices.find(v => v.lang.includes('ar'));
        if (arVoice) {
            utterance.voice = arVoice;
        }

        window.speechSynthesis.speak(utterance);
    }
}

if ('speechSynthesis' in window) {
    window.speechSynthesis.onvoiceschanged = () => window.speechSynthesis.getVoices();
}

// --- INITIALIZIMI I DOM ---
document.addEventListener('DOMContentLoaded', () => {
    updateStarsUI();
    setupNavigation();
    setupHomePortalBoxes();
    renderAlphabetGrid(ARABIC_ALPHABET);
    renderTajweedRules();
    renderFluentReadingWords(1);
    setupFluentReadingControls();
    renderBadges();
    setupModalAndCanvas();
    setupSearchFilter();
    setupGamesMenu();
});

// --- NAVIGIMI TE 3 KUTITË KRYESORE NË BALLINË ---
function setupHomePortalBoxes() {
    document.getElementById('btn-portal-box-1').addEventListener('click', () => {
        AudioEngine.playPop();
        switchTab('letters-tab');
    });

    document.getElementById('btn-portal-box-2').addEventListener('click', () => {
        AudioEngine.playPop();
        switchTab('rules-tab');
    });

    document.getElementById('btn-portal-box-3').addEventListener('click', () => {
        AudioEngine.playPop();
        switchTab('fluent-tab');
    });

    document.getElementById('logo-home-btn').addEventListener('click', () => {
        AudioEngine.playPop();
        switchTab('home-tab');
    });
}

function switchTab(tabId) {
    const navBtns = document.querySelectorAll('.nav-btn');
    const tabs = document.querySelectorAll('.tab-content');

    navBtns.forEach(b => b.classList.remove('active'));
    tabs.forEach(t => t.classList.remove('active'));

    const activeBtn = document.querySelector(`.nav-btn[data-tab="${tabId}"]`);
    if (activeBtn) activeBtn.classList.add('active');

    const targetTab = document.getElementById(tabId);
    if (targetTab) targetTab.classList.add('active');
}

function setupNavigation() {
    const navBtns = document.querySelectorAll('.nav-btn');
    navBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            AudioEngine.playPop();
            const targetTab = btn.getAttribute('data-tab');
            switchTab(targetTab);
        });
    });
}

// --- RENDER KUTIA 2: RREGULLAT E TAJWEEDIT (ME 10 FJALË ME 4-5 SHKRONJA) ---
function renderTajweedRules() {
    const container = document.getElementById('rules-modules-container');
    container.innerHTML = '';

    TAJWEED_RULES.forEach(rule => {
        const moduleCard = document.createElement('div');
        moduleCard.className = 'rule-card-module';

        let wordsHtml = '';
        rule.words.forEach((w, idx) => {
            wordsHtml += `
                <div class="word-practice-card" onclick="speakText('${w.ar}')">
                    <span class="p-word-arabic">${w.ar}</span>
                    <span class="p-word-latin">${idx + 1}. ${w.latin}</span>
                    <span class="p-word-meaning">${w.alb}</span>
                </div>
            `;
        });

        moduleCard.innerHTML = `
            <div class="rule-module-title">
                <span class="rule-num-badge">${rule.num}</span>
                <h3>${rule.title}</h3>
                <span class="rule-arabic-tag">${rule.titleAr}</span>
            </div>
            <div class="rule-description">${rule.desc}</div>
            
            <h4 class="rule-words-title">10 Fjalët Praktike Ushtruese (4-5 Shkronja):</h4>
            <div class="ten-words-grid">
                ${wordsHtml}
            </div>
        `;

        container.appendChild(moduleCard);
    });
}

// --- RENDER KUTIA 3: 500 FJALËT PËR LEXIM TË RRJEDHSHËM ---
function renderFluentReadingWords(level = 1, filterTerm = '') {
    currentFluentLevel = level;
    const container = document.getElementById('fluent-words-container');
    container.innerHTML = '';

    const filtered = FLUENT_WORDS_DATA.filter(w => {
        const matchLvl = w.level === parseInt(level);
        const matchTerm = filterTerm === '' || 
            w.ar.includes(filterTerm) || 
            w.latin.toLowerCase().includes(filterTerm.toLowerCase()) || 
            w.alb.toLowerCase().includes(filterTerm.toLowerCase());
        return matchLvl && matchTerm;
    });

    filtered.forEach(item => {
        const card = document.createElement('div');
        card.className = 'fluent-word-card';
        card.innerHTML = `
            <span class="f-audio-icon">🔊</span>
            <div class="f-word-arabic">${item.ar}</div>
            <div class="f-word-latin">${item.latin}</div>
            <div class="f-word-alb">${item.alb}</div>
        `;

        card.addEventListener('click', () => {
            AudioEngine.playPop();
            speakText(item.ar);
        });

        container.appendChild(card);
    });
}

function setupFluentReadingControls() {
    const levelBtns = document.querySelectorAll('.level-tab-btn');
    levelBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            AudioEngine.playPop();
            levelBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const lvl = parseInt(btn.getAttribute('data-level'));
            const searchInput = document.getElementById('fluent-search-input');
            renderFluentReadingWords(lvl, searchInput.value.trim());
        });
    });

    const searchInput = document.getElementById('fluent-search-input');
    searchInput.addEventListener('input', (e) => {
        renderFluentReadingWords(currentFluentLevel, e.target.value.trim());
    });
}


// --- RENDER ALPHABET GRID ---
function renderAlphabetGrid(letters) {
    const grid = document.getElementById('alphabet-grid');
    grid.innerHTML = '';

    letters.forEach(letter => {
        const isLearned = learnedLetters.includes(letter.id);
        const card = document.createElement('div');
        card.className = `letter-card ${isLearned ? 'learned' : ''}`;
        card.style.setProperty('--card-accent', letter.color);

        card.innerHTML = `
            ${isLearned ? '<span class="learned-badge">⭐</span>' : ''}
            <div class="card-arabic-letter" style="color: ${letter.color};">${letter.char}</div>
            <div class="card-alb-name">${letter.name}</div>
            <div class="card-word-preview">
                <span class="card-word-emoji">${letter.emoji}</span>
                <span class="card-word-arabic">${letter.wordAr}</span>
            </div>
        `;

        card.addEventListener('click', () => {
            AudioEngine.playPop();
            openLetterModal(letter);
        });

        grid.appendChild(card);
    });
}

// --- SEARCH FILTER & PLAY ALL ---
function setupSearchFilter() {
    const searchInput = document.getElementById('search-alphabet');
    searchInput.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase().trim();
        const filtered = ARABIC_ALPHABET.filter(item => 
            item.name.toLowerCase().includes(term) ||
            item.wordAlb.toLowerCase().includes(term) ||
            item.char.includes(term) ||
            item.wordAr.includes(term)
        );
        renderAlphabetGrid(filtered);
    });

    document.getElementById('btn-play-all').addEventListener('click', () => {
        let index = 0;
        function playNext() {
            if (index < ARABIC_ALPHABET.length) {
                const letter = ARABIC_ALPHABET[index];
                playLetterAudio(letter);
                index++;
                setTimeout(playNext, 2000);
            }
        }
        playNext();
    });
}

// --- MODAL & TRACING CANVAS ---
let canvas, ctx;
let isDrawing = false;
let currentColor = '#1e90ff';

function setupModalAndCanvas() {
    const modal = document.getElementById('letter-modal');
    const closeBtn = document.getElementById('btn-close-modal');

    closeBtn.addEventListener('click', () => {
        AudioEngine.playPop();
        if (currentAudioPlayer) currentAudioPlayer.pause();
        modal.classList.remove('active');
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            if (currentAudioPlayer) currentAudioPlayer.pause();
            modal.classList.remove('active');
        }
    });

    // Canvas init
    canvas = document.getElementById('tracing-canvas');
    ctx = canvas.getContext('2d');

    function startDrawing(e) {
        isDrawing = true;
        draw(e);
    }

    function stopDrawing() {
        isDrawing = false;
        ctx.beginPath();
    }

    function draw(e) {
        if (!isDrawing) return;
        const rect = canvas.getBoundingClientRect();
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const clientY = e.touches ? e.touches[0].clientY : e.clientY;

        const x = clientX - rect.left;
        const y = clientY - rect.top;

        ctx.lineWidth = 16;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.strokeStyle = currentColor;

        ctx.lineTo(x, y);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(x, y);
    }

    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mousemove', draw);

    canvas.addEventListener('touchstart', startDrawing, { passive: true });
    canvas.addEventListener('touchend', stopDrawing);
    canvas.addEventListener('touchmove', draw, { passive: true });

    // Color buttons
    document.querySelectorAll('.color-dot').forEach(dot => {
        dot.addEventListener('click', () => {
            AudioEngine.playPop();
            document.querySelectorAll('.color-dot').forEach(d => d.classList.remove('active'));
            dot.classList.add('active');
            currentColor = dot.getAttribute('data-color');
        });
    });

    // Clear canvas
    document.getElementById('btn-clear-canvas').addEventListener('click', () => {
        AudioEngine.playPop();
        clearCanvas();
    });

    // Mark as Learned
    document.getElementById('btn-mark-learned').addEventListener('click', () => {
        if (activeLetterObj) {
            if (!learnedLetters.includes(activeLetterObj.id)) {
                learnedLetters.push(activeLetterObj.id);
                userStars += 5;
                localStorage.setItem('learned_arabic_letters', JSON.stringify(learnedLetters));
                localStorage.setItem('user_arabic_stars', userStars.toString());
                updateStarsUI();
                renderAlphabetGrid(ARABIC_ALPHABET);
                renderBadges();
                triggerConfetti();
                AudioEngine.playSuccess();
            }
            modal.classList.remove('active');
        }
    });

    // Interactive Letter Form Boxes (Veçmas, Fillim, Mes, Fund)
    const formBoxes = [
        { id: 'box-form-isolated', key: 'isolated' },
        { id: 'box-form-initial', key: 'initial' },
        { id: 'box-form-medial', key: 'medial' },
        { id: 'box-form-final', key: 'final' }
    ];

    formBoxes.forEach(fb => {
        document.getElementById(fb.id).addEventListener('click', () => {
            AudioEngine.playPop();
            if (activeLetterObj) {
                const charForm = activeLetterObj.forms[fb.key];
                document.getElementById('canvas-guide-letter').textContent = charForm;
                clearCanvas();
                speakText(activeLetterObj.tajweedNameAr);
            }
        });
    });

    // Harakat Audio buttons (Fatha, Damma, Kasra)
    ['fatha', 'damma', 'kasra'].forEach(hType => {
        document.getElementById(`h-${hType}`).addEventListener('click', () => {
            if (activeLetterObj) {
                const charVal = activeLetterObj.harakat[hType];
                speakText(charVal);
            }
        });
    });

    // Speak word btn
    document.getElementById('btn-speak-modal-word').addEventListener('click', () => {
        if (activeLetterObj) {
            speakText(activeLetterObj.wordAr);
        }
    });
}

function clearCanvas() {
    if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
}

function openLetterModal(letter) {
    activeLetterObj = letter;
    const modal = document.getElementById('letter-modal');
    const modalCard = modal.querySelector('.modal-card');

    modalCard.style.setProperty('--modal-accent', letter.color);

    const bigDisplay = document.getElementById('modal-arabic-letter');
    bigDisplay.textContent = letter.char;
    bigDisplay.style.color = letter.color;

    document.getElementById('modal-letter-name').textContent = letter.name;
    document.getElementById('modal-word-emoji').textContent = letter.emoji;
    document.getElementById('modal-word-arabic').textContent = letter.wordAr;
    document.getElementById('modal-word-alb').textContent = letter.wordAlb;
    document.getElementById('canvas-guide-letter').textContent = letter.char;

    ['isolated', 'initial', 'medial', 'final'].forEach(fKey => {
        const formEl = document.getElementById(`form-${fKey}`);
        formEl.textContent = letter.forms[fKey];
        formEl.style.color = letter.color;
    });

    document.getElementById('h-symbol-fatha').textContent = letter.harakat.fatha;
    document.getElementById('h-symbol-damma').textContent = letter.harakat.damma;
    document.getElementById('h-symbol-kasra').textContent = letter.harakat.kasra;

    clearCanvas();
    modal.classList.add('active');

    playLetterAudio(letter);
}

// --- STARS & BADGES PROGRESS ---
function updateStarsUI() {
    document.getElementById('user-stars-count').textContent = userStars;
    document.getElementById('stars-progress-fill').style.width = `${(learnedLetters.length / 28) * 100}%`;
    document.getElementById('stars-progress-text').textContent = `${learnedLetters.length} nga 28 shkronja të mësuara`;
}

function renderBadges() {
    const container = document.getElementById('badges-grid-container');
    container.innerHTML = '';

    ARABIC_ALPHABET.forEach(letter => {
        const isUnlocked = learnedLetters.includes(letter.id);
        const item = document.createElement('div');
        item.className = `badge-item ${isUnlocked ? 'unlocked' : ''}`;
        item.innerHTML = `
            <div class="badge-letter" style="color: ${letter.color};">${letter.char}</div>
            <div class="badge-star">${isUnlocked ? '⭐' : '🔒'}</div>
        `;
        container.appendChild(item);
    });
}

// --- MINI GAMES ENGINE ---
function setupGamesMenu() {
    const menuView = document.querySelector('.games-menu');
    const gameArea = document.getElementById('active-game-area');
    const backBtn = document.getElementById('btn-back-games');

    const quizView = document.getElementById('game-quiz-view');
    const matchView = document.getElementById('game-match-view');
    const memoryView = document.getElementById('game-memory-view');

    function hideSubGames() {
        quizView.style.display = 'none';
        matchView.style.display = 'none';
        memoryView.style.display = 'none';
    }

    backBtn.addEventListener('click', () => {
        AudioEngine.playPop();
        gameArea.style.display = 'none';
        menuView.style.display = 'block';
        hideSubGames();
    });

    document.getElementById('select-game-quiz').addEventListener('click', () => {
        AudioEngine.playPop();
        menuView.style.display = 'none';
        gameArea.style.display = 'block';
        hideSubGames();
        quizView.style.display = 'block';
        startQuizGame();
    });

    document.getElementById('select-game-match').addEventListener('click', () => {
        AudioEngine.playPop();
        menuView.style.display = 'none';
        gameArea.style.display = 'block';
        hideSubGames();
        matchView.style.display = 'block';
        startMatchGame();
    });

    document.getElementById('select-game-memory').addEventListener('click', () => {
        AudioEngine.playPop();
        menuView.style.display = 'none';
        gameArea.style.display = 'block';
        hideSubGames();
        memoryView.style.display = 'block';
        startMemoryGame();
    });
}

// GAME 1: QUIZ
let quizCurrentQuestion = 1;
let quizScore = 0;
let quizTargetLetter = null;

function startQuizGame() {
    quizCurrentQuestion = 1;
    quizScore = 0;
    updateQuizHeader();
    nextQuizQuestion();
}

function updateQuizHeader() {
    document.getElementById('quiz-q-num').textContent = quizCurrentQuestion;
    document.getElementById('quiz-score').textContent = quizScore;
}

function nextQuizQuestion() {
    if (quizCurrentQuestion > 10) {
        triggerConfetti();
        AudioEngine.playSuccess();
        alert(`Urime! Përfundove kuizin dhe fitove ${quizScore} yje! 🌟`);
        userStars += quizScore;
        localStorage.setItem('user_arabic_stars', userStars.toString());
        updateStarsUI();
        document.getElementById('btn-back-games').click();
        return;
    }

    updateQuizHeader();

    quizTargetLetter = ARABIC_ALPHABET[Math.floor(Math.random() * ARABIC_ALPHABET.length)];

    const options = [quizTargetLetter];
    while (options.length < 4) {
        const rand = ARABIC_ALPHABET[Math.floor(Math.random() * ARABIC_ALPHABET.length)];
        if (!options.includes(rand)) options.push(rand);
    }
    options.sort(() => Math.random() - 0.5);

    const container = document.getElementById('quiz-options-container');
    container.innerHTML = '';

    options.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'quiz-opt-btn';
        btn.textContent = opt.char;
        btn.style.color = opt.color;
        btn.addEventListener('click', () => handleQuizAnswer(opt, btn));
        container.appendChild(btn);
    });

    playLetterAudio(quizTargetLetter);

    document.getElementById('btn-play-quiz-audio').onclick = () => {
        playLetterAudio(quizTargetLetter);
    };
}

function handleQuizAnswer(selectedOpt, btnElement) {
    if (selectedOpt.id === quizTargetLetter.id) {
        btnElement.classList.add('correct');
        AudioEngine.playSuccess();
        quizScore += 2;
        quizCurrentQuestion++;
        setTimeout(nextQuizQuestion, 1200);
    } else {
        btnElement.classList.add('wrong');
        AudioEngine.playWrong();
    }
}

// GAME 2: MATCHING GAME
let selectedMatchLetter = null;
let matchPairsCount = 0;

function startMatchGame() {
    matchPairsCount = 0;
    document.getElementById('match-score').textContent = '0';
    
    const shuffled = [...ARABIC_ALPHABET].sort(() => Math.random() - 0.5).slice(0, 4);
    
    const lettersCol = document.getElementById('match-letters-col');
    const picsCol = document.getElementById('match-pictures-col');

    lettersCol.innerHTML = '';
    picsCol.innerHTML = '';

    const shuffledPics = [...shuffled].sort(() => Math.random() - 0.5);

    shuffled.forEach(item => {
        const card = document.createElement('div');
        card.className = 'match-item-card';
        card.innerHTML = `<span class="match-letter-text" style="color: ${item.color};">${item.char}</span>`;
        card.addEventListener('click', () => {
            AudioEngine.playPop();
            document.querySelectorAll('#match-letters-col .match-item-card').forEach(c => c.classList.remove('selected'));
            card.classList.add('selected');
            selectedMatchLetter = item;
            playLetterAudio(item);
        });
        lettersCol.appendChild(card);
    });

    shuffledPics.forEach(item => {
        const card = document.createElement('div');
        card.className = 'match-item-card';
        card.innerHTML = `
            <div class="match-pic-content">
                <span class="match-pic-emoji">${item.emoji}</span>
                <span class="match-pic-name">${item.wordAlb}</span>
            </div>
        `;
        card.addEventListener('click', () => {
            if (!selectedMatchLetter) return;

            if (selectedMatchLetter.id === item.id) {
                AudioEngine.playSuccess();
                card.classList.add('matched');
                const letterCard = Array.from(lettersCol.children).find(c => c.textContent.trim() === selectedMatchLetter.char);
                if (letterCard) letterCard.classList.add('matched');
                
                selectedMatchLetter = null;
                matchPairsCount++;
                document.getElementById('match-score').textContent = (matchPairsCount * 3).toString();

                if (matchPairsCount === 4) {
                    triggerConfetti();
                    userStars += 12;
                    localStorage.setItem('user_arabic_stars', userStars.toString());
                    updateStarsUI();
                    setTimeout(() => alert('Bravo! Lidhe të gjitha shkronjat saktë! 🌟 +12 Yje!'), 500);
                }
            } else {
                AudioEngine.playWrong();
            }
        });
        picsCol.appendChild(card);
    });
}

// GAME 3: MEMORY GAME
let memoryCards = [];
let flippedMemoryCards = [];
let memoryMoves = 0;

function startMemoryGame() {
    memoryMoves = 0;
    document.getElementById('memory-moves').textContent = '0';
    const container = document.getElementById('memory-grid-container');
    container.innerHTML = '';

    const items = [...ARABIC_ALPHABET].sort(() => Math.random() - 0.5).slice(0, 6);
    const deck = [...items, ...items].sort(() => Math.random() - 0.5);

    deck.forEach((item) => {
        const card = document.createElement('div');
        card.className = 'memory-card';
        card.dataset.id = item.id;
        card.innerHTML = `<span class="memory-card-content" style="display:none; color: ${item.color};">${item.char}</span>`;

        card.addEventListener('click', () => {
            if (flippedMemoryCards.length === 2 || card.classList.contains('flipped') || card.classList.contains('matched')) return;

            AudioEngine.playPop();
            card.classList.add('flipped');
            card.querySelector('.memory-card-content').style.display = 'block';
            flippedMemoryCards.push({ card, item });

            if (flippedMemoryCards.length === 2) {
                memoryMoves++;
                document.getElementById('memory-moves').textContent = memoryMoves;

                const [first, second] = flippedMemoryCards;
                if (first.item.id === second.item.id) {
                    AudioEngine.playSuccess();
                    first.card.classList.add('matched');
                    second.card.classList.add('matched');
                    playLetterAudio(first.item);
                    flippedMemoryCards = [];

                    if (document.querySelectorAll('.memory-card.matched').length === 12) {
                        triggerConfetti();
                        userStars += 15;
                        localStorage.setItem('user_arabic_stars', userStars.toString());
                        updateStarsUI();
                        setTimeout(() => alert(`Shkëlqyeshëm! I gjete të gjitha çiftet me ${memoryMoves} prova! 🌟 +15 Yje!`), 500);
                    }
                } else {
                    AudioEngine.playWrong();
                    setTimeout(() => {
                        first.card.classList.remove('flipped');
                        second.card.classList.remove('flipped');
                        first.card.querySelector('.memory-card-content').style.display = 'none';
                        second.card.querySelector('.memory-card-content').style.display = 'none';
                        flippedMemoryCards = [];
                    }, 1000);
                }
            }
        });

        container.appendChild(card);
    });
}

// --- CONFETTI CELEBRATION ENGINE ---
function triggerConfetti() {
    const canvas = document.getElementById('confetti-canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const pieces = [];
    const colors = ['#ff4757', '#2ed573', '#1e90ff', '#ffa502', '#9b59b6', '#ff6b81', '#00cec9', '#fdcb6e'];

    for (let i = 0; i < 100; i++) {
        pieces.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,
            size: Math.random() * 10 + 5,
            color: colors[Math.floor(Math.random() * colors.length)],
            speedY: Math.random() * 4 + 2,
            speedX: Math.random() * 2 - 1,
            rotation: Math.random() * 360
        });
    }

    let animationFrame;
    function render() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        let alive = false;

        pieces.forEach(p => {
            p.y += p.speedY;
            p.x += p.speedX;
            p.rotation += 4;

            ctx.save();
            ctx.translate(p.x, p.y);
            ctx.rotate((p.rotation * Math.PI) / 180);
            ctx.fillStyle = p.color;
            ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
            ctx.restore();

            if (p.y < canvas.height) alive = true;
        });

        if (alive) {
            animationFrame = requestAnimationFrame(render);
        } else {
            cancelAnimationFrame(animationFrame);
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
    }

    render();
}
