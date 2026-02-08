const availableCourses = [
    {
        id: 1,
        code: "INTRO",
        name: "مدخل الى الخوارزميات والبرمجة",
        type: "theory",
        credits: 3,
        instructor: "م.رانية رجب",
        day: "الاثنين",
        time: "09:40 - 11:20",
        room: "ش1",
        color: "#16a085"
    },
    {
        id: 2,
        code: "INTRO",
        name: "مدخل الى الخوارزميات والبرمجة",
        type: "lab",
        credits: 0,
        instructor: "ك.لينار حمود",
        day: "الاثنين",
        time: "	9:40 - 11:20",
        room: "ف 12",
        color: "#2980b9"
    },
    {
        id: 3,
        code: "INTRO",
        name: "مدخل الى الخوارزميات والبرمجة",
        type: "lab",
        credits: 0,
        instructor: "م.محمد عثمان",
        day: "الثلاثاء",
        time: "13:00 - 14:40",
        room: "ف 22",
        color: "#e67e22"
    },
    {
        id: 4,
        code: "INTRO",
        name: "مدخل الى الخوارزميات والبرمجة",
        type: "theory",
        credits: 3,
        instructor: "م.رانية رجب",
        day: "الأحد",
        time: "09:40 - 11:20",
        room: "ش 1",
        color: "#e74c3c"
    },
    {
        id: 5,
        code: "فيزياء2",
        name: "فيزياء 2",
        type: "lab",
        credits: 0,
        instructor: "أ. محمد البيطار",
        day: "الاثنين",
        time: "08:00 - 09:40",
        room: "ف11",
        color: "#27ae60"
    },
    {
        id: 6,
        code: "فيزياء2",
        name: "فيزياء 2",
        type: "lab",
        credits: 0,
        instructor: "أ. محمد البيطار",
        day: "الاثنين",
        time: "09:40 - 11:20",
        room: "ف21",
        color: "#34495e"
    },
    {
        id: 7,
        code: "فيزياء2",
        name: "فيزياء 2",
        type: "lab",
        credits: 0,
        instructor: "أ. محمد البيطار",
        day: "الاثنين",
        time: "11:20 - 13:00",
        room: "ف12",
        color: "#e74c3c"
    },
    {
        id: 8,
        code: "فيزياء2",
        name: "فيزياء 2",
        type: "lab",
        credits: 0,
        instructor: "أ. محمد البيطار",
        day: "الاثنين",
        time: "13:00 - 14:40",
        room: "ف22",
        color: "#27ae60"
    },
    {
        id: 9,
        code: "تحليل 1",
        name: "تحليل رياضي 1",
        type: "theory",
        credits: 3,
        instructor: "د. عبد الرزاق الفاضل ",
        day: "الأحد",
        time: "13:00 - 15:30",
        room: "الشعبة 1",
        color: "#16a085"
    },
    {
        id: 10,
        code: "متقطعة",
        name: "رياضيات متقطعة",
        type: "theory",
        credits: 3,
        instructor: "د. نبيل القادري ",
        day: "الاثنين",
        time: "8:00 - 10:30",
        room: "الشعبة 1",
        color: "#1abc9c"
    },
    {
        id: 11,
        code: "جبر",
        name: "جبر خطي ونظرية المصفوفات",
        type: "theory",
        credits: 3,
        instructor: "أ. ندى الطحان ",
        day: "الثلاثاء",
        time: "8:00 - 10:30",
        room: "الشعبة 3",
        color: "#3498db"
    },
    {
        id: 12,
        code: "جبر",
        name: "جبر خطي ونظرية المصفوفات",
        type: "theory",
        credits: 3,
        instructor: "أ. ندى الطحان ",
        day: "الاثنين",
        time: "8:00 - 10:30",
        room: "الشعبة 2",
        color: "#e74c3c"
    },
    {
        id: 13,
        code: "جبر",
        name: "جبر خطي ونظرية المصفوفات",
        type: "theory",
        credits: 3,
        instructor: "أ. ندى الطحان ",
        day: "الأحد",
        time: "13:00 - 15:30",
        room: "الشعبة 1",
        color: "#2ecc71"
    },
    {
        id: 14,
        code: "متقطعة",
        name: "رياضيات متقطعة",
        type: "theory",
        credits: 3,
        instructor: "د. نبيل القادري ",
        day: "الثلاثاء",
        time: "8:00 - 10:30",
        room: "الشعبة 2",
        color: "#1abc9c"
    },
    {
        id: 15,
        code: "متقطعة",
        name: "رياضيات متقطعة",
        type: "theory",
        credits: 3,
        instructor: "د. نبيل القادري ",
        day: "الثلاثاء",
        time: "10:30 - 13:00",
        room: "الشعبة 3",
        color: "#1abc9c"
    },
    {
        id: 16,
        code: "تحليل 1",
        name: "تحليل رياضي 1",
        type: "theory",
        credits: 3,
        instructor: "د. يحيى قطيش",
        day: "الثلاثاء",
        time: "8:00 - 10:30",
        room: "الشعبة 2",
        color: "#2c3e50"
    },
    {
        id: 17,
        code: "تحليل 1",
        name: "تحليل رياضي 1",
        type: "theory",
        credits: 3,
        instructor: "د. يحيى قطيش ",
        day: "الثلاثاء",
        time: "10:30 - 13:00",
        room: "الشعبة 3",
        color: "#9b59b6"
    },
    {
        id: 18,
        code: "تحليل 1",
        name: "تحليل رياضي 1",
        type: "theory",
        credits: 3,
        instructor: "د. عبد الرزاق الفاضل ",
        day: "الثلاثاء",
        time: "13:00 - 15:30",
        room: "الشعبة 4",
        color: "#d35400"
    },
    {
        id: 19,
        code: "تحليل 2",
        name: "تحليل رياضي 2",
        type: "theory",
        credits: 3,
        instructor: "أ . رائد الرفاعي",
        day: "الاثنين",
        time: "10:30 - 13:00",
        room: "ش4",
        color: "#AAE3A1"
    },
    {
        id: 20,
        code: "تحليل 2",
        name: "تحليل رياضي 2",
        type: "theory",
        credits: 3,
        instructor: "أ . رائد الرفاعي",
        day: "الأحد",
        time: "10:30 - 13:00",
        room: "ش2",
        color: "#DE9F61"
    },
    {
        id: 21,
        code: "تحليل 2",
        name: "تحليل رياضي 2",
        type: "theory",
        credits: 3,
        instructor: "أ . رائد الرفاعي",
        day: "الثلاثاء",
        time: "13:00 - 15:30",
        room: "ش6",
        color: "#06595A"
    },
    {
        id: 22,
        code: "فيزياء2",
        name: "فيزياء 2",
        type: "theory",
        credits: 3,
        instructor: "د.روز محمد",
        day: "الأحد",
        time: "08:00 - 09:40",
        room: "ش1",
        color: "#F413AA"
    },
    {
        id: 23,
        code: "فيزياء2",
        name: "فيزياء 2",
        type: "theory",
        credits: 3,
        instructor: "د.روز محمد",
        day: "الأحد",
        time: "09:40 - 11:20",
        room: "ش2",
        color: "#8430A1"
    },
    {
        id: 24,
        code: "فيزياء2",
        name: "فيزياء 2",
        type: "theory",
        credits: 3,
        instructor: "د.روز محمد",
        day: "الأحد",
        time: "11:20 - 13:00",
        room: "ش3",
        color: "#D4B84B"
    },
    {
        id: 25,
        code: "فيزياء2",
        name: "فيزياء 2",
        type: "theory",
        credits: 3,
        instructor: "د.روز محمد",
        day: "الثلاثاء",
        time: "08:00 - 09:40",
        room: "ش4",
        color: "#3A8DF5"
    },
    {
        id: 26,
        code: "فيزياء2",
        name: "فيزياء 2",
        type: "lab",
        credits: 0,
        instructor: "أ. محمد البيطار",
        day: "الأحد",
        time: "08:00 - 09:40",
        room: "ف13",
        color: "#56E341"
    },
    {
        id: 27,
        code: "فيزياء2",
        name: "فيزياء 2",
        type: "lab",
        credits: 0,
        instructor: "أ. محمد البيطار",
        day: "الأحد",
        time: "09:40-11:20",
        room: "ف23",
        color: "#54B55E"
    },
    {
        id: 28,
        code: "فيزياء2",
        name: "فيزياء 2",
        type: "lab",
        credits: 0,
        instructor: "أ. محمد البيطار",
        day: "الأحد",
        time: "11:20 - 13:00",
        room: "ف14",
        color: "#74A92D"
    },
    {
        id: 29,
        code: "فيزياء2",
        name: "فيزياء 2",
        type: "lab",
        credits: 0,
        instructor: "أ. محمد البيطار",
        day: "الأحد",
        time: "13:00 - 14:40",
        room: "ف24",
        color: "#84FE2E"
    },
    {
        id: 30,
        code: "برمجة1",
        name: "برمجة 1",
        type: "theory",
        credits: 3,
        instructor: "د. فادي ابراهيم ",
        day: "السبت",
        time: "08:00 - 9:40",
        room: "الشعبة 1",
        color: "#27ae60"
    },
    {
        id: 31,
        code: "برمجة1",
        name: "برمجة 1",
        type: "theory",
        credits: 3,
        instructor: "د. فادي ابراهيم ",
        day: "السبت",
        time: "09:40 - 11:20",
        room: "الشعبة 2",
        color: "#e67e22"
    },
    {
        id: 32,
        code: "برمجة1",
        name: "برمجة 1",
        type: "theory",
        credits: 3,
        instructor: "د. فادي ابراهيم ",
        day: "السبت",
        time: "11:20 - 13:00",
        room: "الشعبة 3",
        color: "#f39c12"
    },
    {
        id: 33,
        code: "برمجة1",
        name: "برمجة 1",
        type: "theory",
        credits: 3,
        instructor: "د. فادي ابراهيم ",
        day: "السبت",
        time: "13:00 - 14:40",
        room: "الشعبة 4",
        color: "#d35400"
    },
    {
        id: 34,
        code: "برمجة1",
        name: "برمجة 1",
        type: "theory",
        credits: 3,
        instructor: "م. محمد عثمان ",
        day: "الثلاثاء",
        time: "08:00 - 9:40",
        room: "الشعبة 5",
        color: "#f39c12"
    },
    {
        id: 35,
        code: "برمجة1",
        name: "برمجة 1",
        type: "theory",
        credits: 3,
        instructor: "م. محمد عثمان ",
        day: "الثلاثاء",
        time: "09:40 - 11:20",
        room: "الشعبة 6",
        color: "#f39c12"
    },
    {
        id: 36,
        code: "برمجة1",
        name: "برمجة 1",
        type: "theory",
        credits: 3,
        instructor: "م. محمد عثمان ",
        day: "الثلاثاء",
        time: "11:20 - 13:00",
        room: "الشعبة 7",
        color: "#16a085"
    },
    {
        id: 37,
        code: "برمجة1",
        name: "برمجة 1",
        type: "lab",
        credits: 0,
        instructor: "م. هديل عسراوي ",
        day: "السبت",
        time: "08:00 - 9:40",
        room: "فئة 17",
        color: "#34495e"
    },
    {
        id: 38,
        code: "برمجة1",
        name: "برمجة 1",
        type: "lab",
        credits: 0,
        instructor: "م. هديل عسراوي ",
        day: "السبت",
        time: "09:40 - 11:20",
        room: "فئة 27",
        color: "#d35400"
    },
    {
        id: 39,
        code: "برمجة1",
        name: "برمجة 1",
        type: "lab",
        credits: 0,
        instructor: "م. هديل عسراوي ",
        day: "السبت",
        time: "11:20 - 13:00",
        room: "فئة 16",
        color: "#34495e"
    },
    {
        id: 40,
        code: "برمجة1",
        name: "برمجة 1",
        type: "lab",
        credits: 0,
        instructor: "م. هديل عسراوي ",
        day: "السبت",
        time: "13:00 - 14:40",
        room: "فئة 26",
        color: "#3498db"
    },
    {
        id: 41,
        code: "برمجة1",
        name: "برمجة 1",
        type: "lab",
        credits: 0,
        instructor: "م. محمد سعيد دياب ",
        day: "الأحد",
        time: "08:00 - 9:40",
        room: "فئة 11",
        color: "#27ae60"
    },
    {
        id: 42,
        code: "برمجة1",
        name: "برمجة 1",
        type: "lab",
        credits: 0,
        instructor: "م. محمد سعيد دياب ",
        day: "الأحد",
        time: "09:40 - 11:20",
        room: "فئة 21",
        color: "#2980b9"
    },
    {
        id: 43,
        code: "برمجة1",
        name: "برمجة 1",
        type: "lab",
        credits: 0,
        instructor: "م. فواز عفاش",
        day: "الأحد",
        time: "11:20 - 13:00",
        room: "فئة 12",
        color: "#1abc9c"
    },
    {
        id: 44,
        code: "برمجة1",
        name: "برمجة 1",
        type: "lab",
        credits: 0,
        instructor: "م. فواز عفاش ",
        day: "الأحد",
        time: "13:00 - 14:40",
        room: "فئة 22",
        color: "#2c3e50"
    },
    {
        id: 45,
        code: "برمجة1",
        name: "برمجة 1",
        type: "lab",
        credits: 0,
        instructor: "م. محمد سعيد دياب ",
        day: "الاثنين",
        time: "08:00 - 9:40",
        room: "فئة 13",
        color: "#34495e"
    },
    {
        id: 46,
        code: "برمجة1",
        name: "برمجة 1",
        type: "lab",
        credits: 0,
        instructor: "م. محمد سعيد دياب ",
        day: "الاثنين",
        time: "09:40 - 11:20",
        room: "فئة 23 ",
        color: "#1abc9c"
    },
    {
        id: 47,
        code: "برمجة1",
        name: "برمجة 1",
        type: "lab",
        credits: 0,
        instructor: "م. محمد سعيد دياب ",
        day: "الاثنين",
        time: "11:20 - 13:00",
        room: "فئة 14",
        color: "#e74c3c"
    },
    {
        id: 48,
        code: "برمجة1",
        name: "برمجة 1",
        type: "lab",
        credits: 0,
        instructor: "م. محمد سعيد دياب ",
        day: "الاثنين",
        time: "13:00 - 14:40",
        room: "فئة 24",
        color: "#9b59b6"
    },
    {
        id: 49,
        code: "برمجة1",
        name: "برمجة 1",
        type: "lab",
        credits: 0,
        instructor: "م. محمد سعيد دياب ",
        day: "الثلاثاء",
        time: "08:00 - 9:40",
        room: "فئة 15",
        color: "#e67e22"
    },
    {
        id: 50,
        code: "برمجة1",
        name: "برمجة 1",
        type: "lab",
        credits: 0,
        instructor: "م. محمد سعيد دياب ",
        day: "الثلاثاء",
        time: "09:40 - 11:20",
        room: "فئة 25",
        color: "#2c3e50"
    },
    {
        id: 51,
        code: "برمجة1",
        name: "برمجة 1",
        type: "lab",
        credits: 0,
        instructor: "م. محمد سعيد دياب ",
        day: "الثلاثاء",
        time: "11:20 - 13:00",
        room: "فئة 18",
        color: "#2ecc71"
    },
    {
        id: 52,
        code: "برمجة1",
        name: "برمجة 1",
        type: "lab",
        credits: 0,
        instructor: "م. محمد سعيد دياب ",
        day: "الثلاثاء",
        time: "13:00 - 14:40",
        room: "فئة 28",
        color: "#e67e22"
    },
    {
        id: 53,
        code: "كهربائية",
        name: "الدارات الكهربائية 1",
        type: "theory",
        credits: 3,
        instructor: "د. هبة الله الخضور ",
        day: "الاثنين",
        time: "11:20 - 13:00",
        room: "ش 1",
        color: "#9b59b6"
    },
    {
        id: 54,
        code: "كهربائية",
        name: "الدارات الكهربائية 1",
        type: "theory",
        credits: 3,
        instructor: "د. هبة الله الخضور ",
        day: "الاثنين",
        time: "13:00 - 14:40",
        room: "ش 2 ",
        color: "#2980b9"
    },
    {
        id: 55,
        code: "كهربائية",
        name: "الدارات الكهربائية 1",
        type: "theory",
        credits: 3,
        instructor: "د. هبة الله الخضور ",
        day: "الثلاثاء",
        time: "08:00 - 09:40",
        room: "ش 3",
        color: "#2980b9"
    },
    {
        id: 56,
        code: "كهربائية",
        name: "الدارات الكهربائية 1",
        type: "theory",
        credits: 3,
        instructor: "د. هبة الله الخضور ",
        day: "الثلاثاء",
        time: "09:40 - 11:20",
        room: "ش 4",
        color: "#2c3e50"
    },
    {
        id: 57,
        code: "كهربائية",
        name: "الدارات الكهربائية 1",
        type: "theory",
        credits: 3,
        instructor: "د.حسان أحمد ",
        day: "الثلاثاء",
        time: "11:20 - 13:00",
        room: "ش 5",
        color: "#8e44ad"
    },
    {
        id: 58,
        code: "كهربائية",
        name: "الدارات الكهربائية 1",
        type: "theory",
        credits: 3,
        instructor: "د.حسان أحمد ",
        day: "الثلاثاء",
        time: "13:00 - 14:40",
        room: "ش 6",
        color: "#e67e22"
    },
    {
        id: 59,
        code: "تحليل 2",
        name: "تحليل رياضي 2",
        type: "theory",
        credits: 3,
        instructor: "د. ياسر نصر ",
        day: "الأحد",
        time: "08:00 - 10:30",
        room: "الشعبة 1",
        color: "#27ae60"
    },
    {
        id: 60,
        code: "تحليل 2",
        name: "تحليل رياضي 2",
        type: "theory",
        credits: 3,
        instructor: "د. ياسر نصر",
        day: "الاثنين",
        time: "08:00 - 10:30",
        room: "الشعبة 3",
        color: "#1abc9c"
    },
    {
        id: 61,
        code: "تحليل 2",
        name: "تحليل رياضي 2",
        type: "theory",
        credits: 3,
        instructor: "د. ياسر نصر ",
        day: "الثلاثاء",
        time: "08:00 - 10:30",
        room: "الشعبة 5",
        color: "#c0392b"
    },
    {
        id: 62,
        code: "كهربائية",
        name: "الدارات الكهربائية 1",
        type: "lab",
        credits: 0,
        instructor: "م. لجين اسعد",
        day: "السبت",
        time: "08:00 - 09:40",
        room: "ف11",
        color: "#27ae60"
    },
    {
        id: 63,
        code: "كهربائية",
        name: "الدارات الكهربائية 1",
        type: "lab",
        credits: 0,
        instructor: "م. لجين اسعد",
        day: "السبت",
        time: "09:40 - 11:20",
        room: "ف21",
        color: "#e74c3c"
    },
    {
        id: 64,
        code: "كهربائية",
        name: "الدارات الكهربائية 1",
        type: "lab",
        credits: 0,
        instructor: "م. لجين اسعد",
        day: "السبت",
        time: "11:20 - 13:00",
        room: "ف12",
        color: "#3498db"
    },
    {
        id: 65,
        code: "كهربائية",
        name: "الدارات الكهربائية 1",
        type: "lab",
        credits: 0,
        instructor: "م. لجين اسعد",
        day: "السبت",
        time: "13:00 - 14:40",
        room: "ف22",
        color: "#8e44ad"
    },
    {
        id: 66,
        code: "كهربائية",
        name: "الدارات الكهربائية 1",
        type: "lab",
        credits: 0,
        instructor: "م. حوراء خضر",
        day: "الأحد",
        time: "08:00 - 09:40",
        room: "ف13",
        color: "#e74c3c"
    },
    {
        id: 67,
        code: "كهربائية",
        name: "الدارات الكهربائية 1",
        type: "lab",
        credits: 0,
        instructor: "م. حوراء خضر",
        day: "الأحد",
        time: "09:40 - 11:20",
        room: "ف23",
        color: "#9b59b6"
    },
    {
        id: 68,
        code: "كهربائية",
        name: "الدارات الكهربائية 1",
        type: "lab",
        credits: 0,
        instructor: "م. لينار حمود",
        day: "الأحد",
        time: "11:20 - 13:00",
        room: "ف14",
        color: "#3498db"
    },
    {
        id: 69,
        code: "كهربائية",
        name: "الدارات الكهربائية 1",
        type: "lab",
        credits: 0,
        instructor: "م. لينار حمود",
        day: "الأحد",
        time: "13:00 - 14:30",
        room: "ف24",
        color: "#27ae60"
    },
    {
        id: 70,
        code: "كهربائية",
        name: "الدارات الكهربائية 1",
        type: "lab",
        credits: 0,
        instructor: "م. رانية صندوق",
        day: "الاثنين",
        time: "08:00 - 09:40",
        room: "ف15",
        color: "#f39c12"
    },
    {
        id: 71,
        code: "كهربائية",
        name: "الدارات الكهربائية 1",
        type: "lab",
        credits: 0,
        instructor: "م. رانية صندوق",
        day: "الاثنين",
        time: "09:40 - 11:20",
        room: "ف25",
        color: "#e67e22"
    },
    {
        id: 72,
        code: "كهربائية",
        name: "الدارات الكهربائية 1",
        type: "lab",
        credits: 0,
        instructor: "م. رانية صندوق",
        day: "الثلاثاء",
        time: "11:20 - 13:00",
        room: "ف16",
        color: "#27ae60"
    },
    {
        id: 73,
        code: "كهربائية",
        name: "الدارات الكهربائية 1",
        type: "lab",
        credits: 0,
        instructor: "م. رانية صندوق",
        day: "الثلاثاء",
        time: "13:00 - 14:40",
        room: "ف26",
        color: "#d35400"
    },
    {
        id: 74,
        code: "فيزياء2",
        name: "فيزياء 2",
        type: "theory",
        credits: 3,
        instructor: "د. روز محمد",
        day: "الثلاثاء",
        time: "11:20 - 13:00",
        room: "ش6",
        color: "#3498db"
    },
    {
        id: 75,
        code: "فيزياء2",
        name: "فيزياء 2",
        type: "lab",
        credits: 0,
        instructor: "أ. عمر يوسف",
        day: "الثلاثاء",
        time: "11:20 - 13:00",
        room: "ف16",
        color: "#1abc9c"
    },
    {
        id: 76,
        code: "فيزياء2",
        name: "فيزياء 2",
        type: "lab",
        credits: 0,
        instructor: "أ. عمر يوسف",
        day: "الثلاثاء",
        time: "13:00 - 14:40",
        room: "ف26",
        color: "#f39c12"
    },
    {
        id: 77,
        code: "فيزياء2",
        name: "فيزياء 2",
        type: "lab",
        credits: 0,
        instructor: "أ. عمر يوسف",
        day: "الثلاثاء",
        time: "08:00 - 09:40",
        room: "ف15",
        color: "#e74c3c"
    },
    {
        id: 78,
        code: "فيزياء2",
        name: "فيزياء 2",
        type: "lab",
        credits: 0,
        instructor: "أ. عمر يوسف",
        day: "الثلاثاء",
        time: "09:40 - 11:20",
        room: "ف25",
        color: "#27ae60"
    },
    {
        id: 79,
        code: "منطقية",
        name: "دارات منطقية",
        type: "theory",
        credits: 3,
        instructor: "إبراهيم شعيب",
        day: "السبت",
        time: "08:00 - 09:40",
        room: "1ش",
        color: "#f39c12"
    },
    {
        id: 80,
        code: "منطقية",
        name: "دارات منطقية",
        type: "theory",
        credits: 3,
        instructor: "إبراهيم شعيب",
        day: "السبت",
        time: "09:40 - 11:20",
        room: "2ش",
        color: "#2980b9"
    },
    {
        id: 81,
        code: "منطقية",
        name: "دارات منطقية",
        type: "theory",
        credits: 3,
        instructor: "عادل الكفري",
        day: "السبت",
        time: "11:20 - 13:00",
        room: "3ش",
        color: "#f39c12"
    },
    {
        id: 82,
        code: "منطقية",
        name: "دارات منطقية",
        type: "theory",
        credits: 3,
        instructor: "عادل الكفري",
        day: "السبت",
        time: "13:00 - 14:40",
        room: "4ش",
        color: "#8e44ad"
    },
    {
        id: 83,
        code: "منطقية",
        name: "دارات منطقية",
        type: "theory",
        credits: 3,
        instructor: "تقى الكيال",
        day: "الأحد",
        time: "09:40 - 11:20",
        room: "5ش",
        color: "#c0392b"
    },
    {
        id: 84,
        code: "منطقية",
        name: "دارات منطقية",
        type: "theory",
        credits: 3,
        instructor: "تقى الكيال",
        day: "الأحد",
        time: "11:20 - 13:00",
        room: "6ش",
        color: "#d35400"
    },
    {
        id: 85,
        code: "منطقية",
        name: "دارات منطقية",
        type: "theory",
        credits: 3,
        instructor: "تقى الكيال",
        day: "الأحد",
        time: "13:00 - 14:40",
        room: "7ش",
        color: "#f39c12"
    },
    {
        id: 86,
        code: "منطقية",
        name: "دارات منطقية",
        type: "lab",
        credits: 0,
        instructor: "لينار حمود",
        day: "السبت",
        time: "08:00 - 09:40",
        room: "17ف",
        color: "#34495e"
    },
    {
        id: 87,
        code: "منطقية",
        name: "دارات منطقية",
        type: "lab",
        credits: 0,
        instructor: "لينار حمود",
        day: "السبت",
        time: "09:40 - 11:20",
        room: "27ف",
        color: "#f39c12"
    },
    {
        id: 88,
        code: "منطقية",
        name: "دارات منطقية",
        type: "lab",
        credits: 0,
        instructor: "لينار حمود",
        day: "السبت",
        time: "11:20 - 13:00",
        room: "16ف",
        color: "#f39c12"
    },
    {
        id: 89,
        code: "منطقية",
        name: "دارات منطقية",
        type: "lab",
        credits: 0,
        instructor: "لينار حمود",
        day: "السبت",
        time: "13:00 - 14:40",
        room: "26",
        color: "#3498db"
    },
    {
        id: 90,
        code: "منطقية",
        name: "دارات منطقية",
        type: "lab",
        credits: 0,
        instructor: "عدي عباس",
        day: "الأحد",
        time: "08:00 - 09:40",
        room: "15ف",
        color: "#8e44ad"
    },
    {
        id: 91,
        code: "منطقية",
        name: "دارات منطقية",
        type: "lab",
        credits: 0,
        instructor: "عدي عباس",
        day: "الأحد",
        time: "09:40 - 11:20",
        room: "25ف",
        color: "#27ae60"
    },
    {
        id: 92,
        code: "منطقية",
        name: "دارات منطقية",
        type: "lab",
        credits: 0,
        instructor: "عدي عباس",
        day: "الأحد",
        time: "11:20 - 13:00",
        room: "14ف",
        color: "#16a085"
    },
    {
        id: 93,
        code: "منطقية",
        name: "دارات منطقية",
        type: "lab",
        credits: 0,
        instructor: "عدي عباس",
        day: "الأحد",
        time: "13:00 - 14:40",
        room: "24ف",
        color: "#2c3e50"
    },
    {
        id: 94,
        code: "منطقية",
        name: "دارات منطقية",
        type: "lab",
        credits: 0,
        instructor: "عدي عباس",
        day: "الاثنين",
        time: "08:00 - 09:40",
        room: "13ف",
        color: "#f39c12"
    },
    {
        id: 95,
        code: "منطقية",
        name: "دارات منطقية",
        type: "lab",
        credits: 0,
        instructor: "عدي عباس",
        day: "الاثنين",
        time: "09:40 - 11:20",
        room: "23ف",
        color: "#27ae60"
    },
    {
        id: 96,
        code: "منطقية",
        name: "دارات منطقية",
        type: "lab",
        credits: 0,
        instructor: "عدي عباس",
        day: "الاثنين",
        time: "11:20 - 13:00",
        room: "12ف",
        color: "#34495e"
    },
    {
        id: 97,
        code: "منطقية",
        name: "دارات منطقية",
        type: "lab",
        credits: 0,
        instructor: "عدي عباس",
        day: "الاثنين",
        time: "13:00 - 14:40",
        room: "22ف",
        color: "#16a085"
    },
    {
        id: 98,
        code: "منطقية",
        name: "دارات منطقية",
        type: "lab",
        credits: 0,
        instructor: "تقى الكيال",
        day: "الثلاثاء",
        time: "08:00 - 09:40",
        room: "11ف",
        color: "#e74c3c"
    },
    {
        id: 99,
        code: "منطقية",
        name: "دارات منطقية",
        type: "lab",
        credits: 0,
        instructor: "تقى الكيال",
        day: "الثلاثاء",
        time: "09:40 - 11:20",
        room: "21ف",
        color: "#2980b9"
    },
    {
        id: 100,
        code: "إحصاء",
        name: "الإحصاء والاحتمالات",
        type: "theory",
        credits: 3,
        instructor: "عزات قاسم",
        day: "السبت",
        time: "08:00 - 10:30",
        room: "1ش",
        color: "#2ecc71"
    },
    {
        id: 101,
        code: "إحصاء",
        name: "الإحصاء والاحتمالات",
        type: "theory",
        credits: 3,
        instructor: "عزات قاسم",
        day: "السبت",
        time: "10:30 - 13:00",
        room: "2ش",
        color: "#2c3e50"
    },
    {
        id: 102,
        code: "إحصاء",
        name: "الإحصاء والاحتمالات",
        type: "theory",
        credits: 3,
        instructor: "حسان عاقل",
        day: "الأحد",
        time: "13:00 - 15:30",
        room: "3ش",
        color: "#d35400"
    },
    {
        id: 103,
        code: "إحصاء",
        name: "الإحصاء والاحتمالات",
        type: "theory",
        credits: 3,
        instructor: "حسان عاقل",
        day: "الاثنين",
        time: "08:00 - 10:30",
        room: "ش4",
        color: "#3498db"
    },
    {
        id: 104,
        code: "إحصاء",
        name: "الإحصاء والاحتمالات",
        type: "theory",
        credits: 3,
        instructor: "حسان عاقل",
        day: "الثلاثاء",
        time: "08:00 - 10:30",
        room: "5ش",
        color: "#2c3e50"
    },
    {
        id: 105,
        code: "إحصاء",
        name: "الإحصاء والاحتمالات",
        type: "theory",
        credits: 3,
        instructor: "حسان عاقل",
        day: "الثلاثاء",
        time: "10:30 - 13:00",
        room: "6ش",
        color: "#2c3e50"
    },
    {
        id: 106,
        code: "انكليزي2",
        name: "انكليزي 2",
        type: "theory",
        credits: 3,
        instructor: "لمى عبد الفتاح",
        day: "الأحد",
        time: "08:00 - 10:30",
        room: "4",
        color: "#d35400"
    },
    {
        id: 107,
        code: "انكليزي2",
        name: "انكليزي 2",
        type: "theory",
        credits: 3,
        instructor: "لمى عبد الفتاح",
        day: "الأحد",
        time: "10:30 - 13:00",
        room: "5",
        color: "#9b59b6"
    },
    {
        id: 108,
        code: "انكليزي2",
        name: "انكليزي 2",
        type: "theory",
        credits: 3,
        instructor: "لمى عبد الفتاح",
        day: "الأحد",
        time: "13:00 - 15:30",
        room: "6",
        color: "#8e44ad"
    },
    {
        id: 109,
        code: "انكليزي2",
        name: "انكليزي 2",
        type: "theory",
        credits: 3,
        instructor: "راما المصري",
        day: "الأحد",
        time: "08:00 - 10:30",
        room: "1",
        color: "#16a085"
    },
    {
        id: 110,
        code: "انكليزي2",
        name: "انكليزي 2",
        type: "theory",
        credits: 3,
        instructor: "راما المصري",
        day: "الأحد",
        time: "10:30 - 13:00",
        room: "2",
        color: "#8e44ad"
    },
    {
        id: 111,
        code: "انكليزي2",
        name: "انكليزي 2",
        type: "theory",
        credits: 3,
        instructor: "راما المصري",
        day: "الأحد",
        time: "13:00 - 15:30",
        room: "3",
        color: "#e67e22"
    },
    {
        id: 112,
        code: "انكليزي2",
        name: "انكليزي 2",
        type: "theory",
        credits: 3,
        instructor: "راما المصري",
        day: "الاثنين",
        time: "08:00 - 10:30",
        room: "7",
        color: "#1abc9c"
    },
    {
        id: 113,
        code: "انكليزي2",
        name: "انكليزي 2",
        type: "theory",
        credits: 3,
        instructor: "راما المصري",
        day: "الاثنين",
        time: "10:30 - 13:00",
        room: "8",
        color: "#e74c3c"
    },
    {
        id: 114,
        code: "انكليزي2",
        name: "انكليزي 2",
        type: "theory",
        credits: 3,
        instructor: "زهير خليل",
        day: "الاثنين",
        time: "08:00 - 10:30",
        room: "9",
        color: "#27ae60"
    },
    {
        id: 115,
        code: "انكليزي2",
        name: "انكليزي 2",
        type: "theory",
        credits: 3,
        instructor: "زهير خليل",
        day: "الاثنين",
        time: "10:30 - 13:00",
        room: "10",
        color: "#16a085"
    },
    {
        id: 116,
        code: "انكليزي2",
        name: "انكليزي 2",
        type: "theory",
        credits: 3,
        instructor: "زهير خليل",
        day: "الاثنين",
        time: "13:00 - 15:30",
        room: "11",
        color: "#2980b9"
    },
    {
        id: 117,
        code: "انكليزي2",
        name: "انكليزي 2",
        type: "theory",
        credits: 3,
        instructor: "لمى عبد الفتاح",
        day: "الثلاثاء",
        time: "08:00 - 10:30",
        room: "12",
        color: "#d35400"
    },
    {
        id: 118,
        code: "انكليزي2",
        name: "انكليزي 2",
        type: "theory",
        credits: 3,
        instructor: "لمى عبد الفتاح",
        day: "الثلاثاء",
        time: "10:30 - 13:00",
        room: "13",
        color: "#3498db"
    },
    {
        id: 119,
        code: "انكليزي2",
        name: "انكليزي 2",
        type: "theory",
        credits: 3,
        instructor: "لمى عبد الفتاح",
        day: "الثلاثاء",
        time: "13:00 - 15:30",
        room: "14",
        color: "#d35400"
    },
    {
        id: 120,
        code: "فيزياء2",
        name: "فيزياء 2",
        type: "theory",
        credits: 3,
        instructor: "د. روز محمد",
        day: "الثلاثاء",
        time: "09:40 - 11:20",
        room: "ش5",
        color: "#d35400"
    },
];

// المتغيرات العامة
let registeredCourses = [];
let timeSlots = [
    "08:00 - 08:50",
    "08:50 - 09:40", 
    "09:40 - 10:30",
    "10:30 - 11:20",
    "11:20 - 12:10",
    "12:10 - 13:00",
    "13:00 - 13:50",
    "13:50 - 14:40",
    "14:40 - 15:30",
    "15:30 - 16:20"
];

// تحويل وقت النص إلى دقائق من بداية اليوم
function timeToMinutes(timeStr) {
    if (!timeStr) return { start: 0, end: 0 };
    
    // تنظيف النص وإزالة المسافات الزائدة
    const cleanTime = timeStr.replace(/\s/g, '');
    
    // البحث عن الأوقات في الصيغ المختلفة
    const timeMatch = cleanTime.match(/(\d{1,2}):(\d{2})\s*[-–]\s*(\d{1,2}):(\d{2})/);
    if (timeMatch) {
        const [, startHour, startMin, endHour, endMin] = timeMatch;
        let start = parseInt(startHour) * 60 + parseInt(startMin);
        let end = parseInt(endHour) * 60 + parseInt(endMin);
        
        // تعديل الأوقات لتتناسب مع النظام الجديد
        if (endMin === 20) end += 10; // 16:20 تصبح 16:30 للتسهيل
        if (endMin === 40) end += 10; // 14:40 تصبح 14:50 للتسهيل
        
        return { start, end };
    }
    
    // محاولة أخرى بصيغ مختلفة
    const parts = cleanTime.split(/[-–]/);
    if (parts.length === 2) {
        const parsePart = (part) => {
            const [hour, min] = part.split(':');
            let result = parseInt(hour || 0) * 60 + parseInt(min || 0);
            
            // تعديل الأوقات لتتناسب مع النظام الجديد
            const minutes = parseInt(min || 0);
            if (minutes === 20) result += 10; // 16:20 تصبح 16:30
            if (minutes === 40) result += 10; // 14:40 تصبح 14:50
            
            return result;
        };
        return { start: parsePart(parts[0]), end: parsePart(parts[1]) };
    }
    
    return { start: 0, end: 0 };
}

// دالة مساعدة للحصول على جميع الأوقات الفرعية للمادة
function getCourseTimeSlots(course) {
    const courseTime = timeToMinutes(course.time);
    const slots = [];
    
    timeSlots.forEach(slot => {
        const slotTime = timeToMinutes(slot);
        // إذا كان وقت الحصة يقع ضمن وقت المادة
        if (slotTime.start >= courseTime.start && slotTime.end <= courseTime.end) {
            slots.push(slot);
        }
    });
    
    return slots;
}

// التحقق من تداخل الأوقات
function checkConflict(newCourse) {
    const newTime = timeToMinutes(newCourse.time);
    if (newTime.start === 0 && newTime.end === 0) return false;
    
    return registeredCourses.some(course => {
        // إذا كان اليوم مختلفاً، لا يوجد تداخل
        if (course.day !== newCourse.day) return false;
        
        const existingTime = timeToMinutes(course.time);
        if (existingTime.start === 0 && existingTime.end === 0) return false;
        
        // التحقق من التداخل
        const timeConflict = (
            (newTime.start < existingTime.end && newTime.end > existingTime.start)
        );
        
        return timeConflict;
    });
}

// الحصول على المادة المتداخلة
function getConflictCourse(newCourse) {
    const newTime = timeToMinutes(newCourse.time);
    if (newTime.start === 0 && newTime.end === 0) return null;
    
    return registeredCourses.find(course => {
        if (course.day !== newCourse.day) return false;
        
        const existingTime = timeToMinutes(course.time);
        if (existingTime.start === 0 && existingTime.end === 0) return false;
        
        const timeConflict = (
            (newTime.start < existingTime.end && newTime.end > existingTime.start)
        );
        
        return timeConflict;
    });
}

// دالة لتهيئة التطبيق
function initApp() {
    // أولاً، عدل أيام الفلترات
    setupDaysFilter();
    
    // ثم عرض كل شيء
    displayAvailableCourses();
    displayRegisteredCourses();
    displayTimetable();
    updateStats();
    setupEventListeners();
}

// إعداد فلتر الأيام (السبت-الثلاثاء فقط)
function setupDaysFilter() {
    const daysOrder = ["السبت", "الأحد", "الاثنين", "الثلاثاء"];
    
    // إزالة الأيام القديمة
    const filterGroup = document.querySelector('.filter-group:last-child');
    filterGroup.innerHTML = '';
    
    // إضافة الأيام الجديدة
    daysOrder.forEach(day => {
        const label = document.createElement('label');
        label.innerHTML = `
            <input type="checkbox" id="filter-${day}" checked> ${day}
        `;
        filterGroup.appendChild(label);
        
        // إضافة مستمع الحدث
        document.getElementById(`filter-${day}`).addEventListener('change', displayAvailableCourses);
    });
}

// عرض المواد المتاحة
function displayAvailableCourses() {
    const container = document.getElementById('available-courses');
    container.innerHTML = '';
    
    const searchTerm = document.getElementById('search').value.toLowerCase();
    const showTheory = document.getElementById('filter-theory').checked;
    const showLab = document.getElementById('filter-lab').checked;
    const daysFilter = getSelectedDays();
    
    const filteredCourses = availableCourses.filter(course => {
        // البحث
        const matchesSearch = course.name.toLowerCase().includes(searchTerm) || 
                             course.code.toLowerCase().includes(searchTerm) ||
                             course.instructor.toLowerCase().includes(searchTerm);
        
        // النوع
        const matchesType = (course.type === 'theory' && showTheory) || 
                           (course.type === 'lab' && showLab);
        
        // اليوم
        const matchesDay = daysFilter.includes(course.day);
        
        // التحقق إذا كانت مسجلة مسبقاً
        const isRegistered = registeredCourses.some(reg => reg.id === course.id);
        
        return matchesSearch && matchesType && matchesDay && !isRegistered;
    });
    
    if (filteredCourses.length === 0) {
        container.innerHTML = '<p class="no-courses">لا توجد مواد مطابقة للبحث</p>';
        return;
    }
    
    filteredCourses.forEach(course => {
        const card = createCourseCard(course, false);
        container.appendChild(card);
    });
}

// الحصول على الأيام المختارة في الفلتر
function getSelectedDays() {
    const days = ['السبت', 'الأحد', 'الاثنين', 'الثلاثاء'];
    const selected = [];
    
    days.forEach(day => {
        const checkbox = document.getElementById(`filter-${day}`);
        if (checkbox && checkbox.checked) {
            selected.push(day);
        }
    });
    
    return selected;
}

// إنشاء بطاقة مادة
function createCourseCard(course, isRegistered) {
    const card = document.createElement('div');
    card.className = `course-card ${isRegistered ? 'registered' : ''}`;
    card.dataset.id = course.id;
    
    // التحقق من التداخل إذا كانت مسجلة
    if (isRegistered) {
        const hasConflict = checkConflict(course);
        if (hasConflict) {
            card.classList.add('conflict');
            const conflictCourse = getConflictCourse(course);
            if (conflictCourse) {
                card.title = `متتداخل مع: ${conflictCourse.name} (${conflictCourse.time})`;
            }
        }
    }
    
    // حساب عدد الحصص
    const courseTime = timeToMinutes(course.time);
    const duration = courseTime.end - courseTime.start;
    const numberOfSlots = Math.ceil(duration / 50);
    
    card.innerHTML = `
        <div class="course-code">${course.code}</div>
        <div class="course-name">${course.name}</div>
        <div class="course-details">
            <span class="course-detail">
                <i class="fas fa-user-tie"></i> ${course.instructor}
            </span>
            <span class="course-detail">
                <i class="fas ${course.type === 'theory' ? 'fa-chalkboard-teacher' : 'fa-flask'}"></i> 
                ${course.type === 'theory' ? 'نظري' : 'عملي'}
            </span>
            <span class="course-detail">
                <i class="fas fa-clock"></i> ${course.time} (${numberOfSlots} حصة)
            </span>
            <span class="course-detail">
                <i class="fas fa-calendar-day"></i> ${course.day}
            </span>
            <span class="course-detail">
                <i class="fas fa-door-open"></i> ${course.room}
            </span>
            <span class="course-detail">
                <i class="fas fa-credit-card"></i> ${course.credits} ساعة
            </span>
        </div>
    `;
    
    card.addEventListener('click', () => {
        if (isRegistered) {
            unregisterCourse(course.id);
        } else {
            registerCourse(course.id);
        }
    });
    
    return card;
}

// تسجيل مادة
function registerCourse(courseId) {
    const course = availableCourses.find(c => c.id === courseId);
    if (!course) return;
    
    // التحقق من التداخل
    const conflictCourse = getConflictCourse(course);
    if (conflictCourse) {
        showAlert('تداخل في الوقت', 
            `هذه المادة تتداخل مع:<br>
            <strong>${conflictCourse.name}</strong><br>
            ${conflictCourse.day} ${conflictCourse.time}<br>
            ${conflictCourse.instructor} - ${conflictCourse.room}`);
        return;
    }
    
    // التحقق من الحد الأقصى للساعات
    const currentCredits = registeredCourses.reduce((sum, c) => sum + c.credits, 0);
    if (currentCredits + course.credits > 18) {
        showAlert('تجاوز الحد الأقصى', 'لا يمكنك تسجيل أكثر من 18 ساعة معتمدة');
        return;
    }
    
    registeredCourses.push(course);
    updateAllDisplays();
    showAlert('تم التسجيل', `تم تسجيل مادة ${course.name} بنجاح!`, 'success');
}

// إلغاء تسجيل مادة
function unregisterCourse(courseId) {
    registeredCourses = registeredCourses.filter(c => c.id !== courseId);
    updateAllDisplays();
}

// عرض المواد المسجلة
function displayRegisteredCourses() {
    const container = document.getElementById('registered-courses');
    container.innerHTML = '';
    
    if (registeredCourses.length === 0) {
        container.innerHTML = '<p class="no-courses">لا توجد مواد مسجلة بعد</p>';
        return;
    }
    
    registeredCourses.forEach(course => {
        const card = createCourseCard(course, true);
        container.appendChild(card);
    });
}

// عرض الجدول الأسبوعي
function displayTimetable() {
    const container = document.getElementById('timetable-body');
    container.innerHTML = '';
    
    // إعادة ترتيب الأيام: السبت، الأحد، الإثنين، الثلاثاء
    const days = ['السبت', 'الأحد', 'الاثنين', 'الثلاثاء'];
    
    // تحديث رأس الجدول
    const timetableHeader = document.querySelector('.timetable-header');
    timetableHeader.innerHTML = `
        <div class="time-slot">الوقت</div>
        <div class=day>السبت</div>
        <div class=day>الأحد</div>
        <div class=day>الإثنين</div>
        <div class=day>الثلاثاء</div>
    `;
    
    // إضافة CSS الخاص بالجدول الجديد
    addTimetableStyles();
    
    // إنشاء جميع الخلايا أولاً
    timeSlots.forEach(time => {
        // خلية الوقت
        const timeCell = document.createElement('div');
        timeCell.className = 'time-cell';
        timeCell.textContent = time;
        container.appendChild(timeCell);
        
        // خلايا الأيام لهذا الوقت
        days.forEach(day => {
            const dayCell = document.createElement('div');
            dayCell.className = 'day-cell';
            dayCell.dataset.day = day;
            dayCell.dataset.time = time;
            dayCell.style.position = 'relative';
            container.appendChild(dayCell);
        });
    });
    
    // الآن إضافة المواد إلى الجدول
    registeredCourses.forEach(course => {
        if (course.day && days.includes(course.day)) {
            const dayIndex = days.indexOf(course.day);
            
            // الحصول على جميع الأوقات الفرعية للمادة
            const courseSlots = getCourseTimeSlots(course);
            
            if (courseSlots.length > 0) {
                const firstSlot = courseSlots[0];
                const firstSlotIndex = timeSlots.indexOf(firstSlot);
                
                if (firstSlotIndex !== -1) {
                    // حساب عدد الخلايا التي تحتاجها المادة
                    const slotsCount = courseSlots.length;
                    
                    // العثور على الخلية الأولى للمادة
                    // كل صف به 5 خلايا (1 للوقت + 4 للأيام)
                    const cellIndex = (firstSlotIndex * (days.length + 1)) + (dayIndex + 1);
                    const firstCell = container.children[cellIndex];
                    
                    if (firstCell) {
                        // إزالة أي محتوى سابق في الخلية
                        firstCell.innerHTML = '';
                        
                        // إنشاء عنصر المادة
                        const courseElement = document.createElement('div');
                        courseElement.className = `course-in-timetable ${course.type}`;
                        courseElement.style.backgroundColor = course.color;
                        courseElement.style.height = `calc(${slotsCount * 60}px - 4px)`;
                        courseElement.innerHTML = `
                            <div class="course-timetable-code">${course.code}</div>
                            <div class="course-timetable-details">
                                ${course.instructor}<br>
                                ${course.room}
                            </div>
                        `;
                        courseElement.addEventListener('click', (e) => {
                            e.stopPropagation();
                            unregisterCourse(course.id);
                        });
                        firstCell.appendChild(courseElement);
                    }
                }
            }
        }
    });
}

// إضافة أنماط CSS للجدول
function addTimetableStyles() {
    const styleId = 'timetable-styles';
    if (document.getElementById(styleId)) {
        document.getElementById(styleId).remove();
    }
    
    const style = document.createElement('style');
    style.id = styleId;
    style.textContent = `
        #timetable-body {
            display: grid;
            grid-template-columns: 100px repeat(4, 1fr);
            grid-auto-rows: 60px;
            gap: 1px;
            background-color: #ddd;
        }
        
        .time-cell, .day-cell {
            background-color: white;
            padding: 5px;
            position: relative;
            border: 1px solid #ddd;
        }
        
        .time-cell {
            font-weight: bold;
            text-align: center;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #f8f9fa;
        }
        
        .day-cell {
            min-height: 60px;
        }
        
        .course-in-timetable {
            position: absolute;
            top: 2px;
            left: 2px;
            right: 2px;
            bottom: 2px;
            padding: 5px;
            border-radius: 4px;
            color: white;
            font-size: 11px;
            overflow: hidden;
            cursor: pointer;
            z-index: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            transition: transform 0.2s;
        }
        
        .course-in-timetable:hover {
            transform: scale(1.02);
            box-shadow: 0 4px 8px rgba(0,0,0,0.2);
        }
        
        .course-timetable-code {
            font-weight: bold;
            font-size: 12px;
            margin-bottom: 2px;
        }
        
        .course-timetable-details {
            font-size: 10px;
            line-height: 1.2;
        }
    `;
    document.head.appendChild(style);
}

// تحديث الإحصائيات
function updateStats() {
    const totalHours = registeredCourses.reduce((sum, course) => sum + course.credits, 0);
    const totalCourses = registeredCourses.length;
    
    document.getElementById('total-hours').textContent = totalHours;
    document.getElementById('total-courses').textContent = totalCourses;
}

// تحديث جميع العروض
function updateAllDisplays() {
    displayAvailableCourses();
    displayRegisteredCourses();
    displayTimetable();
    updateStats();
}

// إعداد مستمعي الأحداث
function setupEventListeners() {
    // البحث والتصفية
    document.getElementById('search').addEventListener('input', displayAvailableCourses);
    document.getElementById('filter-theory').addEventListener('change', displayAvailableCourses);
    document.getElementById('filter-lab').addEventListener('change', displayAvailableCourses);
    
    // الأزرار
    document.getElementById('save-btn').addEventListener('click', saveRegistration);
    document.getElementById('clear-btn').addEventListener('click', clearAll);
    document.getElementById('print-btn').addEventListener('click', printTimetable);
    
    // النافذة المنبثقة
    document.querySelector('.close').addEventListener('click', () => {
        document.getElementById('alert-modal').style.display = 'none';
    });
    
    document.getElementById('alert-ok').addEventListener('click', () => {
        document.getElementById('alert-modal').style.display = 'none';
    });
    
    // إضافة أيام الفلتر بعد إنشائها
    setTimeout(() => {
        ['السبت', 'الأحد', 'الاثنين', 'الثلاثاء'].forEach(day => {
            const checkbox = document.getElementById(`filter-${day}`);
            if (checkbox) {
                checkbox.addEventListener('change', displayAvailableCourses);
            }
        });
    }, 100);
}

// حفظ التسجيل
function saveRegistration() {
    if (registeredCourses.length === 0) {
        showAlert('لا توجد مواد', 'لم تقم بتسجيل أي مواد بعد');
        return;
    }
    
    // إنشاء بيانات لحفظها
    const registrationData = {
        student: "طالب SPU",
        semester: "الفصل الثاني 2025-2026",
        date: new Date().toLocaleDateString('ar-SA'),
        courses: registeredCourses,
        totalCredits: registeredCourses.reduce((sum, c) => sum + c.credits, 0)
    };
    
    // حفظ في LocalStorage
    localStorage.setItem('spu_registration', JSON.stringify(registrationData));
    
    // تنزيل كملف JSON
    const dataStr = JSON.stringify(registrationData, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    const exportFileDefaultName = 'تسجيل_المواد_SPU.json';
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
    
    showAlert('تم الحفظ', 'تم حفظ جدولك بنجاح وتم تنزيل ملف التسجيل!', 'success');
}

// مسح الكل
function clearAll() {
    if (registeredCourses.length === 0) return;
    
    if (confirm('هل أنت متأكد من مسح جميع المواد المسجلة؟')) {
        registeredCourses = [];
        updateAllDisplays();
        showAlert('تم المسح', 'تم مسح جميع المواد المسجلة', 'info');
    }
}

// طباعة الجدول
function printTimetable() {
    if (registeredCourses.length === 0) {
        showAlert('لا يوجد جدول', 'لا يوجد جدول لطباعته');
        return;
    }
    
    // إنشاء نافذة طباعة
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
        <!DOCTYPE html>
        <html dir="rtl" lang="ar">
        <head>
            <meta charset="UTF-8">
            <title>جدولي الأسبوعي - SPU</title>
            <style>
                body { font-family: Arial, sans-serif; padding: 20px; direction: rtl; }
                h1 { color: #2C3E50; text-align: center; }
                h2 { color: #3498db; }
                .header { text-align: center; margin-bottom: 30px; }
                .timetable { width: 100%; border-collapse: collapse; margin-top: 20px; }
                .timetable th, .timetable td { border: 1px solid #ddd; padding: 8px; text-align: center; vertical-align: top; }
                .timetable th { background-color: #2C3E50; color: white; }
                .course-cell { padding: 5px; border-radius: 4px; color: white; margin: 2px; }
                .course-list { margin-top: 30px; }
                .course-item { padding: 10px; border-bottom: 1px solid #eee; }
                @media print {
                    .no-print { display: none; }
                    body { font-size: 11pt; }
                }
            </style>
        </head>
        <body>
            <div class="header">
                <h1>الجامعة السورية الخاصة</h1>
                <h2>كلية هندسة الذكاء الاصطناعي</h2>
                <h3>الفصل الثاني 2025-2026</h3>
                <p>تاريخ الطباعة: ${new Date().toLocaleDateString('ar-SA')}</p>
            </div>
            
            <h2>الجدول الأسبوعي</h2>
            ${generatePrintableTimetable()}
            
            <div class="course-list">
                <h2>المواد المسجلة</h2>
                ${generatePrintableCoursesList()}
            </div>
            
            <div class="no-print" style="margin-top: 50px; text-align: center;">
                <button onclick="window.print()" style="padding: 10px 20px; background: #3498db; color: white; border: none; border-radius: 5px; cursor: pointer;">
                    طباعة الجدول
                </button>
                <button onclick="window.close()" style="padding: 10px 20px; background: #e74c3c; color: white; border: none; border-radius: 5px; cursor: pointer; margin-right: 10px;">
                    إغلاق
                </button>
            </div>
        </body>
        </html>
    `);
    printWindow.document.close();
}

// توليد جدول للطباعة
function generatePrintableTimetable() {
    const days = ['السبت', 'الأحد', 'الاثنين', 'الثلاثاء'];
    let html = '<table class="timetable">';
    
    // الرأس
    html += '<tr><th>الوقت</th>';
    days.forEach(day => html += `<th>${day}</th>`);
    html += '</tr>';
    
    // إنشاء مصفوفة لتتبع الخلايا المدمجة
    const rowspanTracker = {};
    
    // الصفوف
    timeSlots.forEach((time, timeIndex) => {
        html += `<tr><td style="background-color:#f8f9fa; font-weight:bold;">${time}</td>`;
        
        days.forEach(day => {
            // تحقق إذا كانت هذه الخلية جزء من خلية مدمجة
            if (rowspanTracker[`${day}-${timeIndex}`]) {
                return; // تخطي هذه الخلية
            }
            
            let courseForThisSlot = null;
            let slotsCount = 1;
            
            // البحث عن مادة في هذا اليوم وهذا الوقت
            registeredCourses.forEach(course => {
                if (course.day === day) {
                    const courseTime = timeToMinutes(course.time);
                    const slotTime = timeToMinutes(time);
                    
                    // إذا كان وقت الحصة ضمن وقت المادة
                    if (slotTime.start >= courseTime.start && slotTime.end <= courseTime.end) {
                        const allSlots = getCourseTimeSlots(course);
                        // فقط عرض المادة في أول حصة لها
                        if (time === allSlots[0]) {
                            slotsCount = allSlots.length;
                            courseForThisSlot = course;
                            
                            // تتبع الخلايا المدمجة
                            for (let i = 1; i < slotsCount; i++) {
                                rowspanTracker[`${day}-${timeIndex + i}`] = true;
                            }
                        }
                    }
                }
            });
            
            if (courseForThisSlot) {
                html += `<td rowspan="${slotsCount}" style="background-color:${courseForThisSlot.color}; color:white; vertical-align:middle;">
                    <div style="padding:10px;">
                        <strong style="font-size:14px;">${courseForThisSlot.code}</strong><br>
                        <span style="font-size:12px;">${courseForThisSlot.instructor}</span><br>
                        <span style="font-size:11px;">${courseForThisSlot.room}</span>
                    </div>
                </td>`;
            } else {
                html += '<td></td>';
            }
        });
        html += '</tr>';
    });
    
    html += '</table>';
    return html;
}

// توليد قائمة المواد للطباعة
function generatePrintableCoursesList() {
    let html = '';
    const groupedCourses = {};
    
    registeredCourses.forEach(course => {
        if (!groupedCourses[course.code]) {
            groupedCourses[course.code] = {
                name: course.name,
                credits: course.credits,
                instances: []
            };
        }
        groupedCourses[course.code].instances.push(course);
    });
    
    for (const [code, data] of Object.entries(groupedCourses)) {
        html += `<div class="course-item">
            <h3>${code} - ${data.name} (${data.credits} ساعة)</h3>`;
        
        data.instances.forEach(instance => {
            const courseSlots = getCourseTimeSlots(instance);
            const slotsCount = courseSlots.length;
            
            html += `<p>${instance.day} ${instance.time} (${slotsCount} حصة) - ${instance.room} - ${instance.instructor} - ${instance.type === 'theory' ? 'نظري' : 'عملي'}</p>`;
        });
        
        html += '</div>';
    }
    
    // المجموع
    const totalCredits = registeredCourses.reduce((sum, c) => sum + c.credits, 0);
    html += `<div style="margin-top:20px; padding:15px; background:#f8f9fa; border-radius:5px;">
        <strong>المجموع: ${registeredCourses.length} مادة - ${totalCredits} ساعة معتمدة</strong>
    </div>`;
    
    return html;
}

// عرض التنبيهات
function showAlert(title, message, type = 'warning') {
    document.getElementById('alert-title').textContent = title;
    document.getElementById('alert-message').innerHTML = message;
    
    const modal = document.getElementById('alert-modal');
    modal.style.display = 'block';
    
    // تغيير لون الزر حسب النوع
    const okBtn = document.getElementById('alert-ok');
    if (type === 'success') {
        okBtn.style.background = 'linear-gradient(135deg, #2ecc71, #27ae60)';
    } else if (type === 'info') {
        okBtn.style.background = 'linear-gradient(135deg, #3498db, #2980b9)';
    } else {
        okBtn.style.background = 'linear-gradient(135deg, #e74c3c, #c0392b)';
    }
}

// تهيئة التطبيق عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', initApp);




