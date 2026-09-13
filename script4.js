const courses = [
  // ================= يوم السبت =================
  {
    id: 1,
    code: "أساسيات قواعد البيانات / ش 1",
    name: "أساسيات قواعد البيانات / ش 1",
    type: "theory",
    credits: 0,
    instructor: "د. بسيم برهوم",
    day: "السبت",
    time: "08:00 - 09:40",
    room: "AI-01",
    color: "#27ae60"
  },
  {
    id: 2,
    code: "أساسيات قواعد البيانات / ش 2",
    name: "أساسيات قواعد البيانات / ش 2",
    type: "theory",
    credits: 0,
    instructor: "د. بسيم برهوم",
    day: "السبت",
    time: "09:40 - 11:20",
    room: "AI-01",
    color: "#27ae60"
  },
  {
    id: 3,
    code: "أساسيات قواعد البيانات / ش 3",
    name: "أساسيات قواعد البيانات / ش 3",
    type: "theory",
    credits: 0,
    instructor: "د. بسيم برهوم",
    day: "السبت",
    time: "11:20 - 13:00",
    room: "AI-01",
    color: "#27ae60"
  },
  {
    id: 4,
    code: "أساسيات قواعد البيانات / ش 4",
    name: "أساسيات قواعد البيانات / ش 4",
    type: "theory",
    credits: 0,
    instructor: "د. بسيم برهوم",
    day: "السبت",
    time: "13:00 - 14:40",
    room: "AI-01",
    color: "#27ae60"
  },
  {
    id: 5,
    code: "بنيان البرمجيات",
    name: "بنيان البرمجيات",
    type: "theory",
    credits: 0,
    instructor: "د. رياض سنبل",
    day: "السبت",
    time: "08:00 - 09:40",
    room: "AI-02",
    color: "#27ae60"
  },
  {
    id: 6,
    code: "تصميم نظم البرمجيات",
    name: "تصميم نظم البرمجيات",
    type: "theory",
    credits: 0,
    instructor: "د. رياض سنبل",
    day: "السبت",
    time: "09:40 - 11:20",
    room: "AI-02",
    color: "#27ae60"
  },
  {
    id: 7,
    code: "الذكاء الصنعي العملي / مدخل إلى التعلم العميق",
    name: "الذكاء الصنعي العملي / مدخل إلى التعلم العميق",
    type: "theory",
    credits: 0,
    instructor: "د. رياض سنبل",
    day: "السبت",
    time: "11:20 - 13:00",
    room: "AI-02",
    color: "#27ae60"
  },
  {
    id: 8,
    code: "مدخل إلى الرؤية الحاسوبية / ش 1",
    name: "مدخل إلى الرؤية الحاسوبية / ش 1",
    type: "theory",
    credits: 0,
    instructor: "د. نسرين سليمان",
    day: "السبت",
    time: "08:00 - 09:40",
    room: "AI-03",
    color: "#27ae60"
  },
  {
    id: 9,
    code: "مدخل إلى الرؤية الحاسوبية / ش 2",
    name: "مدخل إلى الرؤية الحاسوبية / ش 2",
    type: "theory",
    credits: 0,
    instructor: "د. نسرين سليمان",
    day: "السبت",
    time: "09:40 - 11:20",
    room: "AI-03",
    color: "#27ae60"
  },
  {
    id: 10,
    code: "معالجة الصور وتحليلها / ش 1 + ش 2",
    name: "معالجة الصور وتحليلها / ش 1 + ش 2",
    type: "theory",
    credits: 0,
    instructor: "د. نسرين سليمان",
    day: "السبت",
    time: "11:20 - 13:00",
    room: "AI-03",
    color: "#27ae60"
  },
  {
    id: 11,
    code: "الخوارزميات وبنى المعطيات / ش 1",
    name: "الخوارزميات وبنى المعطيات / ش 1",
    type: "theory",
    credits: 0,
    instructor: "د. مدين عبد الحميد / م. سعيد دياب",
    day: "السبت",
    time: "08:00 - 09:40",
    room: "AI-04",
    color: "#27ae60"
  },
  {
    id: 12,
    code: "إدارة المشاريع البرمجية / الخوارزميات وبنى المعطيات ش 2",
    name: "إدارة المشاريع البرمجية / الخوارزميات وبنى المعطيات ش 2",
    type: "theory",
    credits: 0,
    instructor: "د. مدين عبد الحميد",
    day: "السبت",
    time: "11:20 - 13:00",
    room: "AI-04",
    color: "#27ae60"
  },
  {
    id: 13,
    code: "البرمجة بلغة بايثون / ش 1",
    name: "البرمجة بلغة بايثون / ش 1",
    type: "theory",
    credits: 0,
    instructor: "د. وسام النبكي",
    day: "السبت",
    time: "08:00 - 09:40",
    room: "AI-05",
    color: "#27ae60"
  },
  {
    id: 14,
    code: "البرمجة بلغة بايثون / ش 2",
    name: "البرمجة بلغة بايثون / ش 2",
    type: "theory",
    credits: 0,
    instructor: "د. وسام النبكي",
    day: "السبت",
    time: "09:40 - 11:20",
    room: "AI-05",
    color: "#27ae60"
  },
  {
    id: 15,
    code: "البرمجة بلغة بايثون / ش 3 / الكيمياء الحيوية",
    name: "البرمجة بلغة بايثون / ش 3 / الكيمياء الحيوية",
    type: "theory",
    credits: 0,
    instructor: "د. وسام النبكي / د. يمن الأناسي",
    day: "السبت",
    time: "11:20 - 13:00",
    room: "AI-05",
    color: "#27ae60"
  },
  {
    id: 16,
    code: "أمن الاتصالات",
    name: "أمن الاتصالات",
    type: "theory",
    credits: 0,
    instructor: "د. نادر خضرو",
    day: "السبت",
    time: "08:00 - 09:40",
    room: "AI-07",
    color: "#27ae60"
  },
  {
    id: 17,
    code: "نمذجة شبكات الاتصالات / أساسيات أمن الحواسيب ش 3",
    name: "نمذجة شبكات الاتصالات / أساسيات أمن الحواسيب ش 3",
    type: "theory",
    credits: 0,
    instructor: "د. نادر خضرو",
    day: "السبت",
    time: "11:20 - 13:00",
    room: "AI-07",
    color: "#27ae60"
  },
  {
    id: 18,
    code: "إدارة تشكيلة البرمجيات / عملي + التحليل العددي ش 1",
    name: "إدارة تشكيلة البرمجيات / عملي + التحليل العددي ش 1",
    type: "theory",
    credits: 0,
    instructor: "م. أنس عبد العزيز / د. معاذ عبد المجيد",
    day: "السبت",
    time: "08:00 - 09:40",
    room: "AI-08/AI-09",
    color: "#27ae60"
  },
  {
    id: 19,
    code: "بنيان البرمجيات / عملي",
    name: "بنيان البرمجيات / عملي",
    type: "lab",
    credits: 0,
    instructor: "م. أنس عبد العزيز",
    day: "السبت",
    time: "09:40 - 11:20",
    room: "AI-08/AI-09",
    color: "#27ae60"
  },
  {
    id: 20,
    code: "تصميم نظم البرمجيات عملي / اختبار البرمجيات / التحليل العددي ش2، ش3",
    name: "تصميم نظم البرمجيات عملي / اختبار البرمجيات / التحليل العددي ش2، ش3",
    type: "theory",
    credits: 0,
    instructor: "م. أنس عبد العزيز / د. مهيب النقري / د. معاذ",
    day: "السبت",
    time: "11:20 - 13:00",
    room: "AI-08/AI-09",
    color: "#27ae60"
  },
  {
    id: 21,
    code: "الإحصاء والاحتمالات / ش 1",
    name: "الإحصاء والاحتمالات / ش 1",
    type: "theory",
    credits: 0,
    instructor: "د. عزات قاسم",
    day: "السبت",
    time: "08:00 - 09:40",
    room: "AI-10",
    color: "#27ae60"
  },
  {
    id: 22,
    code: "الإحصاء والاحتمالات / ش 2 وش 3",
    name: "الإحصاء والاحتمالات / ش 2 وش 3",
    type: "theory",
    credits: 0,
    instructor: "د. عزات قاسم",
    day: "السبت",
    time: "11:20 - 13:00",
    room: "AI-10",
    color: "#27ae60"
  },
  {
    id: 23,
    code: "الإحصاء والاحتمالات / ش 4",
    name: "الإحصاء والاحتمالات / ش 4",
    type: "theory",
    credits: 0,
    instructor: "د. حسان عاقل",
    day: "السبت",
    time: "08:00 - 09:40",
    room: "AI-11",
    color: "#27ae60"
  },
  {
    id: 24,
    code: "الدارات المنطقية / ش 1",
    name: "الدارات المنطقية / ش 1",
    type: "theory",
    credits: 0,
    instructor: "د. إبراهيم شعيب",
    day: "السبت",
    time: "09:40 - 11:20",
    room: "AI-11",
    color: "#27ae60"
  },
  {
    id: 25,
    code: "الإحصاء والاحتمالات / ش 5 وش 6",
    name: "الإحصاء والاحتمالات / ش 5 وش 6",
    type: "theory",
    credits: 0,
    instructor: "د. حسان عاقل",
    day: "السبت",
    time: "11:20 - 13:00",
    room: "AI-11",
    color: "#27ae60"
  },
  {
    id: 26,
    code: "الدارات الإلكترونية 1 / 1",
    name: "الدارات الإلكترونية 1 / 1",
    type: "theory",
    credits: 0,
    instructor: "د. ولاء سفور",
    day: "السبت",
    time: "11:20 - 13:00",
    room: "AI-13",
    color: "#27ae60"
  },
  {
    id: 27,
    code: "أساسيات أمن الحواسيب / ش 2",
    name: "أساسيات أمن الحواسيب / ش 2",
    type: "theory",
    credits: 0,
    instructor: "د. خالد النجار",
    day: "السبت",
    time: "09:40 - 11:20",
    room: "AI-13",
    color: "#27ae60"
  },
  {
    id: 28,
    code: "أمن الشبكات والأمن السيبراني",
    name: "أمن الشبكات والأمن السيبراني",
    type: "theory",
    credits: 0,
    instructor: "د. خالد النجار",
    day: "السبت",
    time: "11:20 - 13:00",
    room: "AI-13",
    color: "#27ae60"
  },
  {
    id: 29,
    code: "الجبر الخطي ونظرية المصفوفات / ش 2",
    name: "الجبر الخطي ونظرية المصفوفات / ش 2",
    type: "theory",
    credits: 0,
    instructor: "أ. ندى الطحان",
    day: "السبت",
    time: "08:00 - 09:40",
    room: "AI-15",
    color: "#27ae60"
  },
  {
    id: 30,
    code: "الجبر الخطي ونظرية المصفوفات / ش 1 وقديم ش 1",
    name: "الجبر الخطي ونظرية المصفوفات / ش 1 وقديم ش 1",
    type: "theory",
    credits: 0,
    instructor: "أ. ندى الطحان",
    day: "السبت",
    time: "11:20 - 13:00",
    room: "AI-15",
    color: "#27ae60"
  },
  {
    id: 31,
    code: "شبكات الحاسوب / ش 1",
    name: "شبكات الحاسوب / ش 1",
    type: "theory",
    credits: 0,
    instructor: "د. بسام محمد",
    day: "السبت",
    time: "08:00 - 09:40",
    room: "AI-16",
    color: "#27ae60"
  },
  {
    id: 32,
    code: "شبكات الحاسوب / ش 2",
    name: "شبكات الحاسوب / ش 2",
    type: "theory",
    credits: 0,
    instructor: "د. بسام محمد",
    day: "السبت",
    time: "09:40 - 11:20",
    room: "AI-16",
    color: "#27ae60"
  },
  {
    id: 33,
    code: "شبكات الحاسوب / ش 3",
    name: "شبكات الحاسوب / ش 3",
    type: "theory",
    credits: 0,
    instructor: "د. بسام محمد",
    day: "السبت",
    time: "11:20 - 13:00",
    room: "AI-16",
    color: "#27ae60"
  },
  {
    id: 34,
    code: "مدخل إلى الخوارزميات والبرمجة / ش 1",
    name: "مدخل إلى الخوارزميات والبرمجة / ش 1",
    type: "theory",
    credits: 0,
    instructor: "د. فادي إبراهيم",
    day: "السبت",
    time: "08:00 - 09:40",
    room: "AI-17",
    color: "#27ae60"
  },
  {
    id: 35,
    code: "مدخل إلى الخوارزميات والبرمجة / ش 5",
    name: "مدخل إلى الخوارزميات والبرمجة / ش 5",
    type: "theory",
    credits: 0,
    instructor: "د. فادي إبراهيم",
    day: "السبت",
    time: "09:40 - 11:20",
    room: "AI-17",
    color: "#27ae60"
  },
  {
    id: 36,
    code: "مدخل إلى الخوارزميات والبرمجة / ش 2 وقديم",
    name: "مدخل إلى الخوارزميات والبرمجة / ش 2 وقديم",
    type: "theory",
    credits: 0,
    instructor: "د. فادي إبراهيم",
    day: "السبت",
    time: "11:20 - 13:00",
    room: "AI-17",
    color: "#27ae60"
  },
  {
    id: 37,
    code: "نظم التشغيل 1/2",
    name: "نظم التشغيل 1/2",
    type: "theory",
    credits: 0,
    instructor: "م. روان كردي",
    day: "السبت",
    time: "08:00 - 09:40",
    room: "AI-18",
    color: "#27ae60"
  },
  {
    id: 38,
    code: "نظم التشغيل 1/1",
    name: "نظم التشغيل 1/1",
    type: "theory",
    credits: 0,
    instructor: "م. روان كردي",
    day: "السبت",
    time: "09:40 - 11:20",
    room: "AI-18",
    color: "#27ae60"
  },
  {
    id: 39,
    code: "برمجة نظم التشغيل / النظم الموزعة والحوسبة السحابية ش 1",
    name: "برمجة نظم التشغيل / النظم الموزعة والحوسبة السحابية ش 1",
    type: "theory",
    credits: 0,
    instructor: "م. روان كردي",
    day: "السبت",
    time: "11:20 - 13:00",
    room: "AI-18",
    color: "#27ae60"
  },
  {
    id: 40,
    code: "الدارات الكهربائية 2 / عملي ونظري",
    name: "الدارات الكهربائية 2 / عملي ونظري",
    type: "theory",
    credits: 0,
    instructor: "د. محمود عبد اللطيف",
    day: "السبت",
    time: "08:00 - 11:20",
    room: "AI-ACN-1",
    color: "#27ae60"
  },
  {
    id: 41,
    code: "الآلات الكهربائية / عملي ونظري",
    name: "الآلات الكهربائية / عملي ونظري",
    type: "theory",
    credits: 0,
    instructor: "د. محمود عبد اللطيف",
    day: "السبت",
    time: "11:20 - 14:40",
    room: "AI-ACN-1",
    color: "#27ae60"
  },
  {
    id: 42,
    code: "بنيان الحواسيب 1/2",
    name: "بنيان الحواسيب 1/2",
    type: "theory",
    credits: 0,
    instructor: "د. محمد الحمامي",
    day: "السبت",
    time: "08:00 - 09:40",
    room: "UR9",
    color: "#27ae60"
  },
  {
    id: 43,
    code: "بنيان الحواسيب 2/2",
    name: "بنيان الحواسيب 2/2",
    type: "theory",
    credits: 0,
    instructor: "د. محمد الحمامي",
    day: "السبت",
    time: "09:40 - 11:20",
    room: "UR9",
    color: "#27ae60"
  },
  {
    id: 44,
    code: "بنيان الحواسيب 2/3",
    name: "بنيان الحواسيب 2/3",
    type: "theory",
    credits: 0,
    instructor: "د. محمد الحمامي",
    day: "السبت",
    time: "11:20 - 13:00",
    room: "UR9",
    color: "#27ae60"
  },
  {
    id: 45,
    code: "البرمجة / 3 عملي ف 11",
    name: "البرمجة / 3 عملي ف 11",
    type: "lab",
    credits: 0,
    instructor: "م. شادي بليدي / م. الحسين طفيلية",
    day: "السبت",
    time: "08:00 - 09:40",
    room: "AI-L-C1",
    color: "#27ae60"
  },
  {
    id: 46,
    code: "البرمجة / 3 عملي ف 21",
    name: "البرمجة / 3 عملي ف 21",
    type: "lab",
    credits: 0,
    instructor: "م. شادي بليدي / م. الحسين طفيلية",
    day: "السبت",
    time: "09:40 - 11:20",
    room: "AI-L-C1",
    color: "#27ae60"
  },
  {
    id: 47,
    code: "البرمجة / 3 عملي ف 12",
    name: "البرمجة / 3 عملي ف 12",
    type: "lab",
    credits: 0,
    instructor: "م. شادي بليدي / م. الحسين طفيلية",
    day: "السبت",
    time: "11:20 - 13:00",
    room: "AI-L-C1",
    color: "#27ae60"
  },
  {
    id: 48,
    code: "البرمجة / 3 عملي ف 22",
    name: "البرمجة / 3 عملي ف 22",
    type: "lab",
    credits: 0,
    instructor: "م. شادي بليدي / م. الحسين طفيلية",
    day: "السبت",
    time: "13:00 - 14:40",
    room: "AI-L-C1",
    color: "#27ae60"
  },
  {
    id: 49,
    code: "مدخل إلى الذكاء الاصطناعي / عملي ف 11",
    name: "مدخل إلى الذكاء الاصطناعي / عملي ف 11",
    type: "lab",
    credits: 0,
    instructor: "د. فتاة صالح / م. رفاه سنجقدار",
    day: "السبت",
    time: "08:00 - 09:40",
    room: "AI-L-C2",
    color: "#27ae60"
  },
  {
    id: 50,
    code: "مدخل إلى الذكاء الاصطناعي / عملي ف 21",
    name: "مدخل إلى الذكاء الاصطناعي / عملي ف 21",
    type: "lab",
    credits: 0,
    instructor: "د. فتاة صالح / م. رفاه سنجقدار",
    day: "السبت",
    time: "09:40 - 11:20",
    room: "AI-L-C2",
    color: "#27ae60"
  },
  {
    id: 51,
    code: "مدخل إلى الذكاء الاصطناعي / عملي ف 12",
    name: "مدخل إلى الذكاء الاصطناعي / عملي ف 12",
    type: "lab",
    credits: 0,
    instructor: "د. فتاة صالح / م. رفاه سنجقدار",
    day: "السبت",
    time: "11:20 - 13:00",
    room: "AI-L-C2",
    color: "#27ae60"
  },
  {
    id: 52,
    code: "مدخل إلى الذكاء الاصطناعي / عملي ف 22",
    name: "مدخل إلى الذكاء الاصطناعي / عملي ف 22",
    type: "lab",
    credits: 0,
    instructor: "د. فتاة صالح / م. رفاه سنجقدار",
    day: "السبت",
    time: "13:00 - 14:40",
    room: "AI-L-C2",
    color: "#27ae60"
  },
  {
    id: 53,
    code: "البرمجة بلغة بايثون / عملي ف 11",
    name: "البرمجة بلغة بايثون / عملي ف 11",
    type: "lab",
    credits: 0,
    instructor: "م. إسراء سهلي / م. تقى الزعبي",
    day: "السبت",
    time: "08:00 - 09:40",
    room: "AI-L-C3",
    color: "#27ae60"
  },
  {
    id: 54,
    code: "البرمجة بلغة بايثون / عملي ف 21",
    name: "البرمجة بلغة بايثون / عملي ف 21",
    type: "lab",
    credits: 0,
    instructor: "م. إسراء سهلي / م. تقى الزعبي",
    day: "السبت",
    time: "09:40 - 11:20",
    room: "AI-L-C3",
    color: "#27ae60"
  },
  {
    id: 55,
    code: "البرمجة بلغة بايثون / عملي ف 12",
    name: "البرمجة بلغة بايثون / عملي ف 12",
    type: "lab",
    credits: 0,
    instructor: "م. إسراء سهلي / م. تقى الزعبي",
    day: "السبت",
    time: "11:20 - 13:00",
    room: "AI-L-C3",
    color: "#27ae60"
  },
  {
    id: 56,
    code: "البرمجة بلغة بايثون / عملي ف 22",
    name: "البرمجة بلغة بايثون / عملي ف 22",
    type: "lab",
    credits: 0,
    instructor: "م. إسراء سهلي / م. تقى الزعبي",
    day: "السبت",
    time: "13:00 - 14:40",
    room: "AI-L-C3",
    color: "#27ae60"
  },
  {
    id: 57,
    code: "البرمجة 2 / عملي ف 11",
    name: "البرمجة 2 / عملي ف 11",
    type: "lab",
    credits: 0,
    instructor: "م. محمد عثمان / م. هديل عسراوي",
    day: "السبت",
    time: "08:00 - 09:40",
    room: "AI-L-C4",
    color: "#27ae60"
  },
  {
    id: 58,
    code: "البرمجة 2 / عملي ف 21",
    name: "البرمجة 2 / عملي ف 21",
    type: "lab",
    credits: 0,
    instructor: "م. محمد عثمان / م. هديل عسراوي",
    day: "السبت",
    time: "09:40 - 11:20",
    room: "AI-L-C4",
    color: "#27ae60"
  },
  {
    id: 59,
    code: "البرمجة 2 / عملي ف 22",
    name: "البرمجة 2 / عملي ف 22",
    type: "lab",
    credits: 0,
    instructor: "م. محمد عثمان / م. هديل عسراوي",
    day: "السبت",
    time: "13:00 - 14:40",
    room: "AI-L-C4",
    color: "#27ae60"
  },
  {
    id: 60,
    code: "نظم التشغيل 1 / عملي ف 11",
    name: "نظم التشغيل 1 / عملي ف 11",
    type: "lab",
    credits: 0,
    instructor: "م. فراس خير بك / م. موفق العضل",
    day: "السبت",
    time: "08:00 - 09:40",
    room: "AI-L-C5",
    color: "#27ae60"
  },
  {
    id: 61,
    code: "نظم التشغيل 1 / عملي ف 21",
    name: "نظم التشغيل 1 / عملي ف 21",
    type: "lab",
    credits: 0,
    instructor: "م. فراس خير بك / م. موفق العضل",
    day: "السبت",
    time: "09:40 - 11:20",
    room: "AI-L-C5",
    color: "#27ae60"
  },
  {
    id: 62,
    code: "نظم التشغيل 1 / عملي ف 12",
    name: "نظم التشغيل 1 / عملي ف 12",
    type: "lab",
    credits: 0,
    instructor: "م. فراس خير بك / م. موفق العضل",
    day: "السبت",
    time: "11:20 - 13:00",
    room: "AI-L-C5",
    color: "#27ae60"
  },
  {
    id: 63,
    code: "نظم التشغيل 1 / عملي ف 22",
    name: "نظم التشغيل 1 / عملي ف 22",
    type: "lab",
    credits: 0,
    instructor: "م. فراس خير بك / م. موفق العضل",
    day: "السبت",
    time: "13:00 - 14:40",
    room: "AI-L-C5",
    color: "#27ae60"
  },
  {
    id: 64,
    code: "أساسيات قواعد البيانات / عملي ف 11 إلى ف 22",
    name: "أساسيات قواعد البيانات / عملي ف 11 إلى ف 22",
    type: "lab",
    credits: 0,
    instructor: "م. رزان رزق / م. هبة ريمان",
    day: "السبت",
    time: "08:00 - 14:40",
    room: "AI-L-ADB",
    color: "#27ae60"
  },
  {
    id: 65,
    code: "أمن نظم قواعد البيانات / عملي ف 11 وف 21",
    name: "أمن نظم قواعد البيانات / عملي ف 11 وف 21",
    type: "lab",
    credits: 0,
    instructor: "م. محمد يامن الحلاق / م. أحمد شيخة",
    day: "السبت",
    time: "08:00 - 11:20",
    room: "AI-L-SEC",
    color: "#27ae60"
  },
  {
    id: 66,
    code: "أساسيات أمن الحواسيب / عملي ف 11 وف 21",
    name: "أساسيات أمن الحواسيب / عملي ف 11 وف 21",
    type: "lab",
    credits: 0,
    instructor: "م. محمد يامن الحلاق / م. أحمد شيخة",
    day: "السبت",
    time: "11:20 - 14:40",
    room: "AI-L-SEC",
    color: "#27ae60"
  },
  {
    id: 67,
    code: "النظم الموزعة والحوسبة السحابية / عملي ف 11 وف 21",
    name: "النظم الموزعة والحوسبة السحابية / عملي ف 11 وف 21",
    type: "lab",
    credits: 0,
    instructor: "د. وسيم الجنيدي / م. جعفر محفوض",
    day: "السبت",
    time: "08:00 - 11:20",
    room: "AI-L-ACN",
    color: "#27ae60"
  },
  {
    id: 68,
    code: "نظم التشغيل 1 / عملي ف 31",
    name: "نظم التشغيل 1 / عملي ف 31",
    type: "lab",
    credits: 0,
    instructor: "د. وسيم الجنيدي / م. جعفر محفوض",
    day: "السبت",
    time: "11:20 - 13:00",
    room: "AI-L-ACN",
    color: "#27ae60"
  },
  {
    id: 69,
    code: "إدارة المخاطر والامتثال / عملي",
    name: "إدارة المخاطر والامتثال / عملي",
    type: "lab",
    credits: 0,
    instructor: "د. نبيل القادري / م. جعفر محفوض",
    day: "السبت",
    time: "13:00 - 14:40",
    room: "AI-L-ACN",
    color: "#27ae60"
  },

  // ================= يوم الأحد =================
  {
    id: 70,
    code: "مدخل إلى الخوارزميات والبرمجة / ش 3، ش 4",
    name: "مدخل إلى الخوارزميات والبرمجة / ش 3، ش 4",
    type: "theory",
    credits: 0,
    instructor: "د. مجدي سكر",
    day: "الأحد",
    time: "08:00 - 09:40",
    room: "AI-01",
    color: "#27ae60"
  },
  {
    id: 71,
    code: "مدخل إلى تعلم الآلة / ش 2",
    name: "مدخل إلى تعلم الآلة / ش 2",
    type: "theory",
    credits: 0,
    instructor: "د. آصف جعفر",
    day: "الأحد",
    time: "09:40 - 11:20",
    room: "AI-01",
    color: "#27ae60"
  },
  {
    id: 72,
    code: "هندسة البرمجيات المتقدمة",
    name: "هندسة البرمجيات المتقدمة",
    type: "theory",
    credits: 0,
    instructor: "د. أكرم مسوح",
    day: "الأحد",
    time: "11:20 - 13:00",
    room: "AI-01",
    color: "#27ae60"
  },
  {
    id: 73,
    code: "مدخل إلى تعلم الآلة / ش 1 + جوانب عملية",
    name: "مدخل إلى تعلم الآلة / ش 1 + جوانب عملية",
    type: "theory",
    credits: 0,
    instructor: "د. آصف جعفر / م. وسام السحلي",
    day: "الأحد",
    time: "08:00 - 09:40",
    room: "AI-02",
    color: "#27ae60"
  },
  {
    id: 74,
    code: "معالجة اللغات الطبيعية / عملي",
    name: "معالجة اللغات الطبيعية / عملي",
    type: "lab",
    credits: 0,
    instructor: "م. وسام السحلي",
    day: "الأحد",
    time: "09:40 - 11:20",
    room: "AI-02",
    color: "#27ae60"
  },
  {
    id: 75,
    code: "الذكاء الصنعي العملي / عملي",
    name: "الذكاء الصنعي العملي / عملي",
    type: "lab",
    credits: 0,
    instructor: "م. وسام السحلي",
    day: "الأحد",
    time: "11:20 - 13:00",
    room: "AI-02",
    color: "#27ae60"
  },
  {
    id: 76,
    code: "معالجة اللغات الطبيعية / البرمجة بلغة بايثون ش 4",
    name: "معالجة اللغات الطبيعية / البرمجة بلغة بايثون ش 4",
    type: "theory",
    credits: 0,
    instructor: "د. وسام النبكي",
    day: "الأحد",
    time: "08:00 - 09:40",
    room: "AI-03",
    color: "#27ae60"
  },
  {
    id: 77,
    code: "البرمجة بلغة بايثون / ش 5",
    name: "البرمجة بلغة بايثون / ش 5",
    type: "theory",
    credits: 0,
    instructor: "د. وسام النبكي",
    day: "الأحد",
    time: "09:40 - 11:20",
    room: "AI-03",
    color: "#27ae60"
  },
  {
    id: 78,
    code: "هندسة البرمجيات",
    name: "هندسة البرمجيات",
    type: "theory",
    credits: 0,
    instructor: "د. كادان الجمعة",
    day: "الأحد",
    time: "11:20 - 13:00",
    room: "AI-03",
    color: "#27ae60"
  },
  {
    id: 79,
    code: "نظرية الحوسبة / ش 1",
    name: "نظرية الحوسبة / ش 1",
    type: "theory",
    credits: 0,
    instructor: "د. أكرم مسوح",
    day: "الأحد",
    time: "08:00 - 09:40",
    room: "AI-04",
    color: "#27ae60"
  },
  {
    id: 80,
    code: "مدخل إلى هندسة البرمجيات / ش 1",
    name: "مدخل إلى هندسة البرمجيات / ش 1",
    type: "theory",
    credits: 0,
    instructor: "م. ثراء أصلان",
    day: "الأحد",
    time: "09:40 - 11:20",
    room: "AI-04",
    color: "#27ae60"
  },
  {
    id: 81,
    code: "مدخل إلى هندسة البرمجيات / ش 2",
    name: "مدخل إلى هندسة البرمجيات / ش 2",
    type: "theory",
    credits: 0,
    instructor: "م. ثراء أصلان",
    day: "الأحد",
    time: "11:20 - 13:00",
    room: "AI-04",
    color: "#27ae60"
  },
  {
    id: 82,
    code: "مدخل إلى الذكاء الصنعي / ش 1 وش 2",
    name: "مدخل إلى الذكاء الصنعي / ش 1 وش 2",
    type: "theory",
    credits: 0,
    instructor: "د. فتاة صالح",
    day: "الأحد",
    time: "08:00 - 09:40",
    room: "AI-05",
    color: "#27ae60"
  },
  {
    id: 83,
    code: "مدخل إلى التعلم العميق / عملي",
    name: "مدخل إلى التعلم العميق / عملي",
    type: "lab",
    credits: 0,
    instructor: "د. رواد ملحم",
    day: "الأحد",
    time: "09:40 - 11:20",
    room: "AI-05",
    color: "#27ae60"
  },
  {
    id: 84,
    code: "الاتصالات النقالة واللاسلكية / ش 1",
    name: "الاتصالات النقالة واللاسلكية / ش 1",
    type: "theory",
    credits: 0,
    instructor: "د. رواد ملحم",
    day: "الأحد",
    time: "11:20 - 13:00",
    room: "AI-05",
    color: "#27ae60"
  },
  {
    id: 85,
    code: "الرياضيات المنقطعة / ش 5",
    name: "الرياضيات المنقطعة / ش 5",
    type: "theory",
    credits: 0,
    instructor: "د. نبيل القادري",
    day: "الأحد",
    time: "08:00 - 09:40",
    room: "AI-17",
    color: "#27ae60"
  },
  {
    id: 86,
    code: "بنيان الحواسيب 1 / ش 2",
    name: "بنيان الحواسيب 1 / ش 2",
    type: "theory",
    credits: 0,
    instructor: "د. محمد الحمامي",
    day: "الأحد",
    time: "09:40 - 11:20",
    room: "AI-17",
    color: "#27ae60"
  },
  {
    id: 87,
    code: "الرياضيات الترميمية / عملي ف 5",
    name: "الرياضيات الترميمية / عملي ف 5",
    type: "lab",
    credits: 0,
    instructor: "أ. عمر يوسف",
    day: "الأحد",
    time: "11:20 - 13:00",
    room: "AI-17",
    color: "#27ae60"
  },
  {
    id: 88,
    code: "البرمجة بلغة بايثون / عملي ف 15",
    name: "البرمجة بلغة بايثون / عملي ف 15",
    type: "lab",
    credits: 0,
    instructor: "د. رواد ملحم / م. رفاه سنجقدار",
    day: "الأحد",
    time: "08:00 - 09:40",
    room: "AI-L-C1",
    color: "#27ae60"
  },
  {
    id: 89,
    code: "البرمجة بلغة بايثون / عملي ف 25",
    name: "البرمجة بلغة بايثون / عملي ف 25",
    type: "lab",
    credits: 0,
    instructor: "د. رواد ملحم / م. رفاه سنجقدار",
    day: "الأحد",
    time: "09:40 - 11:20",
    room: "AI-L-C1",
    color: "#27ae60"
  },
  {
    id: 90,
    code: "تطوير تطبيقات الموبايل / عملي",
    name: "تطوير تطبيقات الموبايل / عملي",
    type: "lab",
    credits: 0,
    instructor: "م. شادي بليدي / م. هديل عسراوي",
    day: "الأحد",
    time: "11:20 - 13:00",
    room: "AI-L-C1",
    color: "#27ae60"
  },
  {
    id: 91,
    code: "البرمجة 1 / عملي ف 11",
    name: "البرمجة 1 / عملي ف 11",
    type: "lab",
    credits: 0,
    instructor: "م. محمد عثمان / م. هبة ريمان",
    day: "الأحد",
    time: "08:00 - 09:40",
    room: "AI-L-C2",
    color: "#27ae60"
  },
  {
    id: 92,
    code: "مدخل إلى الخوارزميات والبرمجة / عملي ف 14",
    name: "مدخل إلى الخوارزميات والبرمجة / عملي ف 14",
    type: "lab",
    credits: 0,
    instructor: "م. محمد عثمان / م. هبة ريمان",
    day: "الأحد",
    time: "09:40 - 11:20",
    room: "AI-L-C2",
    color: "#27ae60"
  },
  {
    id: 93,
    code: "مدخل إلى الخوارزميات والبرمجة / عملي ف 13",
    name: "مدخل إلى الخوارزميات والبرمجة / عملي ف 13",
    type: "lab",
    credits: 0,
    instructor: "م. محمد عثمان / م. عبد الرحمن عرار",
    day: "الأحد",
    time: "11:20 - 13:00",
    room: "AI-L-C2",
    color: "#27ae60"
  },
  {
    id: 94,
    code: "شبكات الحاسوب / عملي ف 11",
    name: "شبكات الحاسوب / عملي ف 11",
    type: "lab",
    credits: 0,
    instructor: "م. رزان رزق / م. فواز عفاش",
    day: "الأحد",
    time: "08:00 - 09:40",
    room: "AI-L-C4",
    color: "#27ae60"
  },
  {
    id: 95,
    code: "شبكات الحاسوب / عملي ف 21",
    name: "شبكات الحاسوب / عملي ف 21",
    type: "lab",
    credits: 0,
    instructor: "م. رزان رزق / م. فواز عفاش",
    day: "الأحد",
    time: "09:40 - 11:20",
    room: "AI-L-C4",
    color: "#27ae60"
  },
  {
    id: 96,
    code: "شبكات الحاسوب / عملي ف 12",
    name: "شبكات الحاسوب / عملي ف 12",
    type: "lab",
    credits: 0,
    instructor: "م. رزان رزق / م. نغم الأشقر",
    day: "الأحد",
    time: "11:20 - 13:00",
    room: "AI-L-C4",
    color: "#27ae60"
  },
  {
    id: 97,
    code: "شبكات الحاسوب / عملي ف 22",
    name: "شبكات الحاسوب / عملي ف 22",
    type: "lab",
    credits: 0,
    instructor: "م. رزان رزق / م. نغم الأشقر",
    day: "الأحد",
    time: "13:00 - 14:40",
    room: "AI-L-C4",
    color: "#27ae60"
  },

  // ================= يوم الاثنين =================
  {
    id: 98,
    code: "إدارة المخاطر والامتثال / الرياضيات المتقطعة قديم ش 1",
    name: "إدارة المخاطر والامتثال / الرياضيات المتقطعة قديم ش 1",
    type: "theory",
    credits: 0,
    instructor: "د. نبيل القادري",
    day: "الاثنين",
    time: "08:00 - 09:40",
    room: "AI-01",
    color: "#27ae60"
  },
  {
    id: 99,
    code: "الرياضيات المتقطعة / قديم ش 2",
    name: "الرياضيات المتقطعة / قديم ش 2",
    type: "theory",
    credits: 0,
    instructor: "د. نبيل القادري",
    day: "الاثنين",
    time: "11:20 - 13:00",
    room: "AI-01",
    color: "#27ae60"
  },
  {
    id: 100,
    code: "جوانب عملية في تعلم الآلة / الذكاء الصنعي المتقدم / الشبكات اللاسلكية",
    name: "جوانب عملية في تعلم الآلة / الذكاء الصنعي المتقدم / الشبكات اللاسلكية",
    type: "theory",
    credits: 0,
    instructor: "د. آصف جعفر / د. محمد الشايطة",
    day: "الاثنين",
    time: "08:00 - 09:40",
    room: "AI-02",
    color: "#27ae60"
  },
  {
    id: 101,
    code: "الذكاء الصنعي المتقدم / عملي",
    name: "الذكاء الصنعي المتقدم / عملي",
    type: "lab",
    credits: 0,
    instructor: "د. رواد ملحم",
    day: "الاثنين",
    time: "11:20 - 13:00",
    room: "AI-02",
    color: "#27ae60"
  },
  {
    id: 102,
    code: "المتحكمات الصغرية والنظم المضمنة / ش 1 + مدخل إلى الروبوتية",
    name: "المتحكمات الصغرية والنظم المضمنة / ش 1 + مدخل إلى الروبوتية",
    type: "theory",
    credits: 0,
    instructor: "د. بشار محمد",
    day: "الاثنين",
    time: "08:00 - 09:40",
    room: "AI-03",
    color: "#27ae60"
  },
  {
    id: 103,
    code: "المتحكمات الصغرية والنظم المضمنة / ش 2",
    name: "المتحكمات الصغرية والنظم المضمنة / ش 2",
    type: "theory",
    credits: 0,
    instructor: "د. بشار محمد",
    day: "الاثنين",
    time: "11:20 - 13:00",
    room: "AI-03",
    color: "#27ae60"
  },
  {
    id: 104,
    code: "الرياضيات المنقطعة / ش 3، ش 4",
    name: "الرياضيات المنقطعة / ش 3، ش 4",
    type: "theory",
    credits: 0,
    instructor: "د. يحيى قطيش",
    day: "الاثنين",
    time: "08:00 - 09:40",
    room: "AI-09",
    color: "#27ae60"
  },
  {
    id: 105,
    code: "الرياضيات المنقطعة / ش 2",
    name: "الرياضيات المنقطعة / ش 2",
    type: "theory",
    credits: 0,
    instructor: "د. يحيى قطيش",
    day: "الاثنين",
    time: "11:20 - 13:00",
    room: "AI-09",
    color: "#27ae60"
  },
  {
    id: 106,
    code: "معالجة الصور وتحليلها / عملي ف 11",
    name: "معالجة الصور وتحليلها / عملي ف 11",
    type: "lab",
    credits: 0,
    instructor: "م. إسراء سهلي / م. زينب بغدادي",
    day: "الاثنين",
    time: "08:00 - 09:40",
    room: "AI-L-C2",
    color: "#27ae60"
  },
  {
    id: 107,
    code: "معالجة الصور وتحليلها / عملي ف 21",
    name: "معالجة الصور وتحليلها / عملي ف 21",
    type: "lab",
    credits: 0,
    instructor: "م. إسراء سهلي / م. زينب بغدادي",
    day: "الاثنين",
    time: "09:40 - 11:20",
    room: "AI-L-C2",
    color: "#27ae60"
  },
  {
    id: 108,
    code: "مدخل إلى الرؤية الحاسوبية / عملي ف 11",
    name: "مدخل إلى الرؤية الحاسوبية / عملي ف 11",
    type: "lab",
    credits: 0,
    instructor: "م. إسراء سهلي / م. زينب بغدادي",
    day: "الاثنين",
    time: "11:20 - 13:00",
    room: "AI-L-C2",
    color: "#27ae60"
  },
  {
    id: 109,
    code: "مدخل إلى الرؤية الحاسوبية / عملي ف 21",
    name: "مدخل إلى الرؤية الحاسوبية / عملي ف 21",
    type: "lab",
    credits: 0,
    instructor: "م. إسراء سهلي / م. زينب بغدادي",
    day: "الاثنين",
    time: "13:00 - 14:40",
    room: "AI-L-C2",
    color: "#27ae60"
  },
  {
    id: 110,
    code: "شبكات الحاسوب / عملي ف 13",
    name: "شبكات الحاسوب / عملي ف 13",
    type: "lab",
    credits: 0,
    instructor: "م. محمد عثمان / م. موفق العضل",
    day: "الاثنين",
    time: "08:00 - 09:40",
    room: "AI-L-C5",
    color: "#27ae60"
  },
  {
    id: 111,
    code: "شبكات الحاسوب / عملي ف 23",
    name: "شبكات الحاسوب / عملي ف 23",
    type: "lab",
    credits: 0,
    instructor: "م. محمد عثمان / م. موفق العضل",
    day: "الاثنين",
    time: "09:40 - 11:20",
    room: "AI-L-C5",
    color: "#27ae60"
  },
  {
    id: 112,
    code: "شبكات الحاسوب / عملي ف 14",
    name: "شبكات الحاسوب / عملي ف 14",
    type: "lab",
    credits: 0,
    instructor: "م. محمد عثمان / م. موفق العضل",
    day: "الاثنين",
    time: "11:20 - 13:00",
    room: "AI-L-C5",
    color: "#27ae60"
  },
  {
    id: 113,
    code: "شبكات الحاسوب / عملي ف 24",
    name: "شبكات الحاسوب / عملي ف 24",
    type: "lab",
    credits: 0,
    instructor: "م. محمد عثمان / م. موفق العضل",
    day: "الاثنين",
    time: "13:00 - 14:40",
    room: "AI-L-C5",
    color: "#27ae60"
  },

  // ================= يوم الثلاثاء =================
  {
    id: 114,
    code: "مدخل إلى الذكاء الصنعي / ش 3 وش 4",
    name: "مدخل إلى الذكاء الصنعي / ش 3 وش 4",
    type: "theory",
    credits: 0,
    instructor: "د. فتاة صالح",
    day: "الثلاثاء",
    time: "08:00 - 09:40",
    room: "AI-14",
    color: "#27ae60"
  },
  {
    id: 115,
    code: "مدخل إلى الذكاء الصنعي / ش 5 وش 6",
    name: "مدخل إلى الذكاء الصنعي / ش 5 وش 6",
    type: "theory",
    credits: 0,
    instructor: "د. مجدي سكر",
    day: "الثلاثاء",
    time: "09:40 - 13:00",
    room: "AI-14",
    color: "#27ae60"
  },
  {
    id: 116,
    code: "النظم الموزعة والحوسبة السحابية / عملي ف 13",
    name: "النظم الموزعة والحوسبة السحابية / عملي ف 13",
    type: "lab",
    credits: 0,
    instructor: "م. بشار خدوج / م. فواز عفاش",
    day: "الثلاثاء",
    time: "08:00 - 09:40",
    room: "AI-L-C1",
    color: "#27ae60"
  },
  {
    id: 117,
    code: "النظم الموزعة والحوسبة السحابية / عملي ف 23",
    name: "النظم الموزعة والحوسبة السحابية / عملي ف 23",
    type: "lab",
    credits: 0,
    instructor: "م. بشار خدوج / م. فواز عفاش",
    day: "الثلاثاء",
    time: "09:40 - 11:20",
    room: "AI-L-C1",
    color: "#27ae60"
  },
  {
    id: 118,
    code: "البرمجة / 3 عملي ف 14",
    name: "البرمجة / 3 عملي ف 14",
    type: "lab",
    credits: 0,
    instructor: "د. مضر كيوان / م. فواز عفاش",
    day: "الثلاثاء",
    time: "11:20 - 13:00",
    room: "AI-L-C1",
    color: "#27ae60"
  },
  {
    id: 119,
    code: "البرمجة / 3 عملي ف 24",
    name: "البرمجة / 3 عملي ف 24",
    type: "lab",
    credits: 0,
    instructor: "م. بشار خدوج / م. فواز عفاش",
    day: "الثلاثاء",
    time: "13:00 - 14:40",
    room: "AI-L-C1",
    color: "#27ae60"
  },
  {
    id: 120,
    code: "تطوير تطبيقات الويب / عملي ف 1",
    name: "تطوير تطبيقات الويب / عملي ف 1",
    type: "lab",
    credits: 0,
    instructor: "م. لجين أسعد / م. هديل عسراوي",
    day: "الثلاثاء",
    time: "08:00 - 09:40",
    room: "AI-L-C5",
    color: "#27ae60"
  },
  {
    id: 121,
    code: "تطوير تطبيقات الويب / عملي ف 2",
    name: "تطوير تطبيقات الويب / عملي ف 2",
    type: "lab",
    credits: 0,
    instructor: "م. لجين أسعد / م. هديل عسراوي",
    day: "الثلاثاء",
    time: "09:40 - 11:20",
    room: "AI-L-C5",
    color: "#27ae60"
  },
  {
    id: 122,
    code: "تطوير تطبيقات الويب / عملي ف 3",
    name: "تطوير تطبيقات الويب / عملي ف 3",
    type: "lab",
    credits: 0,
    instructor: "م. لجين أسعد",
    day: "الثلاثاء",
    time: "11:20 - 13:00",
    room: "AI-L-C5",
    color: "#27ae60"
  },
  {
    id: 123,
    code: "أمن نظم المعلومات / عملي",
    name: "أمن نظم المعلومات / عملي",
    type: "lab",
    credits: 0,
    instructor: "د. محمد الشايطة / م. فرح فارس",
    day: "الثلاثاء",
    time: "13:00 - 14:40",
    room: "AI-L-C5",
    color: "#27ae60"
  },
  {
    id: 124,
    code: "أمن نظم التشغيل / عملي ف 1",
    name: "أمن نظم التشغيل / عملي ف 1",
    type: "lab",
    credits: 0,
    instructor: "م. محمد يامن الحلاق / م. نغم أشقر",
    day: "الثلاثاء",
    time: "08:00 - 09:40",
    room: "AI-L-SEC",
    color: "#27ae60"
  },
  {
    id: 125,
    code: "أمن نظم التشغيل / عملي ف 2",
    name: "أمن نظم التشغيل / عملي ف 2",
    type: "lab",
    credits: 0,
    instructor: "م. محمد يامن الحلاق / م. نغم أشقر",
    day: "الثلاثاء",
    time: "09:40 - 11:20",
    room: "AI-L-SEC",
    color: "#27ae60"
  },
  {
    id: 126,
    code: "الاختراق الأخلاقي والدفاع عن الأنظمة / عملي",
    name: "الاختراق الأخلاقي والدفاع عن الأنظمة / عملي",
    type: "lab",
    credits: 0,
    instructor: "م. محمد يامن الحلاق / م. نغم أشقر",
    day: "الثلاثاء",
    time: "11:20 - 13:00",
    room: "AI-L-SEC",
    color: "#27ae60"
  },
  {
    id: 127,
    code: "الشبكات اللاسلكية / عملي",
    name: "الشبكات اللاسلكية / عملي",
    type: "lab",
    credits: 0,
    instructor: "م. لجين أسعد / م. نغم أشقر",
    day: "الثلاثاء",
    time: "13:00 - 14:40",
    room: "AI-L-SEC",
    color: "#27ae60"
  }
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




