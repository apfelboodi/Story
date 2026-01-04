
import type { Level, StoryTopic } from '../types';

// NOTE: Add your static stories and translations here.
export const predefinedTopics: Record<Level, Omit<StoryTopic, 'id'>[]> = {
  A1: [
    { 
      germanTitle: "Ein Tag im Park", 
      persianTitle: "یک روز در پارک", 
      audioUrl: "https://storage.googleapis.com/audio-samples-for-app/a1-story-1.mp3",
      germanStory: "Heute ist das Wetter schön. Anna geht in den Park. Sie sieht viele Blumen. Die Blumen sind rot und gelb. Ein Hund spielt mit einem Ball. Anna lacht. Sie isst ein Eis. Das Eis ist kalt und süß. Es ist ein schöner Tag.",
      persianTranslation: "امروز هوا خوب است. آنا به پارک می‌رود. او گل‌های زیادی می‌بیند. گل‌ها قرمز و زرد هستند. یک سگ با یک توپ بازی می‌کند. آنا می‌خندد. او یک بستنی می‌خورد. بستنی سرد و شیرین است. این یک روز زیباست."
    },
    { 
      germanTitle: "Meine Familie", 
      persianTitle: "خانواده من", 
      audioUrl: "https://storage.googleapis.com/audio-samples-for-app/a1-story-2.mp3",
      germanStory: "Ich heiße Leo. Das ist meine Familie. Mein Vater heißt Thomas. Meine Mutter heißt Maria. Ich habe eine Schwester. Sie heißt Lena. Wir haben auch eine Katze. Unsere Katze heißt Mimi. Wir wohnen zusammen in einem Haus.",
      persianTranslation: "اسم من لئو است. این خانواده من است. اسم پدرم توماس است. اسم مادرم ماریا است. من یک خواهر دارم. اسم او لنا است. ما یک گربه هم داریم. اسم گربه ما میمی است. ما با هم در یک خانه زندگی می‌کنیم."
    },
    { 
      germanTitle: "Einkaufen im Supermarkt", 
      persianTitle: "خرید در سوپرمارکت",
      germanStory: "Maria geht in den Supermarkt. Sie braucht Milch, Brot und Eier. Der Supermarkt ist groß. Sie nimmt einen Einkaufswagen. Zuerst holt sie die Milch. Dann geht sie zum Brot. Zum Schluss kauft sie zwölf Eier. An der Kasse bezahlt sie mit ihrer Karte. Alles kostet zehn Euro.",
      persianTranslation: "ماریا به سوپرمارکت می‌رود. او به شیر، نان و تخم‌مرغ نیاز دارد. سوپرمارکت بزرگ است. او یک چرخ خرید برمی‌دارد. اول شیر را برمی‌دارد. بعد به سمت نان می‌رود. در آخر دوازده عدد تخم‌مرغ می‌خرد. در صندوق با کارتش پرداخت می‌کند. همه چیز ده یورو می‌شود."
    },
    { 
      germanTitle: "Das Wetter heute", 
      persianTitle: "آب و هوای امروز",
      germanStory: "Heute scheint die Sonne. Der Himmel ist blau. Es gibt keine Wolken. Es ist warm. Die Temperatur ist 25 Grad. Am Nachmittag kommt vielleicht ein bisschen Wind. Aber es regnet nicht. Es ist perfektes Wetter für ein Picknick.",
      persianTranslation: "امروز خورشید می‌درخشد. آسمان آبی است. هیچ ابری وجود ندارد. هوا گرم است. دما ۲۵ درجه است. بعد از ظهر شاید کمی باد بیاید. اما باران نمی‌بارد. این هوای عالی برای یک پیک نیک است."
    },
    { 
      germanTitle: "Mein Hobby", 
      persianTitle: "سرگرمی من",
      germanStory: "Mein Hobby ist Malen. Ich male gerne Bilder. Ich habe viele Stifte und Farben. Ich male am Wochenende. Ich male Blumen, Tiere und Häuser. Malen macht mir viel Spaß. Es ist sehr entspannend. Mein Zimmer ist voll mit meinen Bildern.",
      persianTranslation: "سرگرمی من نقاشی است. من دوست دارم تصاویر را نقاشی کنم. من مدادها و رنگ‌های زیادی دارم. من آخر هفته‌ها نقاشی می‌کنم. من گل‌ها، حیوانات و خانه‌ها را نقاشی می‌کنم. نقاشی برای من بسیار سرگرم‌کننده است. بسیار آرامش‌بخش است. اتاق من پر از نقاشی‌های من است."
    },
    { 
      germanTitle: "Ein Besuch im Café", 
      persianTitle: "بازدید از یک کافه",
      germanStory: "Am Nachmittag treffe ich meine Freundin im Café. Wir bestellen Kaffee und Kuchen. Der Kaffee ist heiß. Der Kuchen ist sehr lecker. Wir reden und lachen viel. Das Café ist gemütlich. Wir bleiben zwei Stunden dort. Es ist eine schöne Zeit.",
      persianTranslation: "بعد از ظهر دوستم را در کافه ملاقات می‌کنم. ما قهوه و کیک سفارش می‌دهیم. قهوه داغ است. کیک بسیار خوشمزه است. ما خیلی صحبت می‌کنیم و می‌خندیم. کافه دنج است. ما دو ساعت آنجا می‌مانیم. اوقات خوشی است."
    },
    { 
      germanTitle: "Mein Geburtstag", 
      persianTitle: "روز تولد من",
      germanStory: "Heute habe ich Geburtstag. Ich werde zehn Jahre alt. Ich habe eine Party. Meine Freunde kommen. Wir essen Kuchen und spielen Spiele. Ich bekomme viele Geschenke. Ein Geschenk ist ein neues Fahrrad. Ich bin sehr glücklich.",
      persianTranslation: "امروز تولد من است. من ده ساله می‌شوم. من یک مهمانی دارم. دوستانم می‌آیند. ما کیک می‌خوریم و بازی می‌کنیم. من هدیه‌های زیادی می‌گیرم. یک هدیه یک دوچرخه جدید است. من خیلی خوشحالم."
    },
    { 
      germanTitle: "Tiere auf dem Bauernhof", 
      persianTitle: "حیوانات در مزرعه",
      germanStory: "Auf dem Bauernhof gibt es viele Tiere. Es gibt Kühe, Schweine und Hühner. Die Kühe geben Milch. Die Schweine spielen im Schlamm. Die Hühner legen Eier. Es gibt auch ein Pferd. Das Pferd heißt Max. Ich mag die Tiere.",
      persianTranslation: "در مزرعه حیوانات زیادی وجود دارد. گاو، خوک و مرغ وجود دارد. گاوها شیر می‌دهند. خوک‌ها در گل و لای بازی می‌کنند. مرغ‌ها تخم می‌گذارند. یک اسب هم وجود دارد. اسم اسب ماکس است. من حیوانات را دوست دارم."
    },
    { 
      germanTitle: "Die Farben", 
      persianTitle: "رنگ‌ها",
      germanStory: "Das ist ein Apfel. Der Apfel ist rot. Das ist eine Banane. Die Banane ist gelb. Das Gras ist grün. Der Himmel ist blau. Die Wolke ist weiß. Die Nacht ist schwarz. Ich lerne gerne die Farben. Meine Lieblingsfarbe ist Blau.",
      persianTranslation: "این یک سیب است. سیب قرمز است. این یک موز است. موز زرد است. چمن سبز است. آسمان آبی است. ابر سفید است. شب سیاه است. من دوست دارم رنگ‌ها را یاد بگیرم. رنگ مورد علاقه من آبی است."
    },
    { 
      germanTitle: "In der Schule", 
      persianTitle: "در مدرسه",
      germanStory: "Ich gehe jeden Tag in die Schule. Meine Schule ist groß. Mein Klassenzimmer ist im zweiten Stock. Wir lernen Mathe, Deutsch und Englisch. Mein Lieblingsfach ist Sport. In der Pause spiele ich mit meinen Freunden Fußball. Ich mag meine Schule.",
      persianTranslation: "من هر روز به مدرسه می‌روم. مدرسه من بزرگ است. کلاس من در طبقه دوم است. ما ریاضی، آلمانی و انگلیسی یاد می‌گیریم. درس مورد علاقه من ورزش است. در زنگ تفریح با دوستانم فوتبال بازی می‌کنم. من مدرسه‌ام را دوست دارم."
    },
    { germanTitle: "Mein Zimmer", persianTitle: "اتاق من",
      germanStory: "Mein Zimmer ist klein, aber gemütlich. Es gibt ein Bett, einen Schreibtisch und einen Stuhl. An der Wand hängen Poster. Mein Bett ist sehr bequem. Auf dem Schreibtisch steht mein Computer. Ich mache hier meine Hausaufgaben.",
      persianTranslation: "اتاق من کوچک اما دنج است. یک تخت، یک میز تحریر و یک صندلی وجود دارد. روی دیوار پوسترها آویزان هستند. تخت من بسیار راحت است. روی میز تحریر کامپیوترم قرار دارد. من اینجا تکالیفم را انجام می‌دههم."
    },
    { germanTitle: "Mein Lieblingstier", persianTitle: "حیوان مورد علاقه من",
      germanStory: "Mein Lieblingstier ist der Löwe. Der Löwe ist der König der Tiere. Er ist groß und stark. Er hat eine große Mähne. Löwen leben in Afrika. Sie jagen zusammen in einer Gruppe. Ich finde Löwen faszinierend.",
      persianTranslation: "حیوان مورد علاقه من شیر است. شیر پادشاه حیوانات است. او بزرگ و قوی است. او یال بزرگی دارد. شیرها در آفریقا زندگی می‌کنند. آنها با هم در یک گروه شکار می‌کنند. به نظر من شیرها شگفت‌انگیز هستند."
    },
    { germanTitle: "Am Bahnhof", persianTitle: "در ایستگاه قطار",
      germanStory: "Ich bin am Bahnhof. Ich warte auf den Zug nach Hamburg. Der Bahnhof ist sehr voll. Viele Menschen reisen. Der Zug kommt auf Gleis 5 an. Ich habe einen Koffer und einen Rucksack. Die Zugfahrt dauert drei Stunden.",
      persianTranslation: "من در ایستگاه قطار هستم. منتظر قطار به مقصد هامبورگ هستم. ایستگاه قطار بسیار شلوغ است. افراد زیادی سفر می‌کنند. قطار در سکوی ۵ وارد می‌شود. من یک چمدان و یک کوله‌پشتی دارم. سفر با قطار سه ساعت طول می‌کشد."
    },
    { germanTitle: "Meine Kleidung", persianTitle: "لباس‌های من",
      germanStory: "Heute trage ich ein blaues T-Shirt und eine schwarze Hose. Ich trage auch weiße Socken und schwarze Schuhe. Wenn es kalt ist, trage ich eine Jacke. Meine Lieblingsjacke ist grün. Ich mag bequeme Kleidung.",
      persianTranslation: "امروز من یک تی‌شرت آبی و یک شلوار مشکی پوشیده‌ام. من همچنین جوراب سفید و کفش مشکی می‌پوشم. وقتی هوا سرد است، یک ژاکت می‌پوشم. ژاکت مورد علاقه من سبز است. من لباس راحت را دوست دارم."
    },
    { germanTitle: "Obst und Gemüse", persianTitle: "میوه و سبزیجات",
      germanStory: "Obst und Gemüse sind gesund. Ich esse jeden Tag einen Apfel. Äpfel sind rot oder grün. Ich mag auch Bananen und Orangen. Mein Lieblingsgemüse ist Karotte. Karotten sind orange. Tomaten sind auch sehr lecker.",
      persianTranslation: "میوه و سبزیجات سالم هستند. من هر روز یک سیب می‌خورم. سیب‌ها قرمز یا سبز هستند. من موز و پرتقال را هم دوست دارم. سبزی مورد علاقه من هویج است. هویج‌ها نارنجی هستند. گوجه فرنگی هم خیلی خوشمزه است."
    },
    { germanTitle: "Ein Tag am Strand", persianTitle: "یک روز در ساحل",
      germanStory: "Im Sommer fahre ich an den Strand. Ich schwimme im Meer. Das Wasser ist warm. Ich baue eine Sandburg. Die Sonne scheint. Ich liege auf meinem Handtuch und lese ein Buch. Am Abend sehe ich den Sonnenuntergang.",
      persianTranslation: "در تابستان به ساحل می‌روم. در دریا شنا می‌کنم. آب گرم است. من یک قلعه شنی می‌سازم. خورشید می‌درخشد. روی حوله‌ام دراز می‌کشم و کتاب می‌خوانم. عصر غروب خورشید را تماشا می‌کنم."
    },
    { germanTitle: "Die Wochentage", persianTitle: "روزهای هفته",
      germanStory: "Die Woche hat sieben Tage. Der erste Tag ist Montag. Dann kommen Dienstag, Mittwoch, Donnerstag und Freitag. Das sind die Arbeitstage. Samstag und Sonntag sind das Wochenende. Am Wochenende habe ich frei.",
      persianTranslation: "هفته هفت روز دارد. روز اول دوشنبه است. سپس سه‌شنبه، چهارشنبه، پنجشنبه و جمعه می‌آیند. این‌ها روزهای کاری هستند. شنبه و یکشنبه آخر هفته هستند. در آخر هفته من تعطیل هستم."
    },
    { germanTitle: "Im Restaurant", persianTitle: "در رستوران",
      germanStory: "Am Abend gehe ich mit meiner Familie ins Restaurant. Ich bestelle eine Pizza. Meine Mutter isst Fisch. Mein Vater isst einen Salat. Wir trinken Apfelsaft. Das Essen ist sehr gut. Der Kellner ist sehr freundlich.",
      persianTranslation: "عصر با خانواده‌ام به رستوران می‌روم. من یک پیتزا سفارش می‌دهم. مادرم ماهی می‌خورد. پدرم سالاد می‌خورد. ما آب سیب می‌نوشیم. غذا خیلی خوب است. پیشخدمت بسیار مهربان است."
    },
    { germanTitle: "Meine Freunde", persianTitle: "دوستان من",
      germanStory: "Ich habe viele Freunde. Mein bester Freund heißt Paul. Er ist sehr lustig. Wir spielen oft zusammen Fußball. Meine Freundin Anna ist sehr nett. Sie hilft mir bei den Hausaufgaben. Wir sind eine gute Gruppe.",
      persianTranslation: "من دوستان زیادی دارم. بهترین دوستم پاول نام دارد. او خیلی بامزه است. ما اغلب با هم فوتبال بازی می‌کنیم. دوستم آنا خیلی مهربان است. او در تکالیف به من کمک می‌کند. ما گروه خوبی هستیم."
    },
    { germanTitle: "Eine Busfahrt", persianTitle: "سفر با اتوبوس",
      germanStory: "Ich fahre mit dem Bus zur Schule. Die Bushaltestelle ist in meiner Straße. Der Bus kommt um halb acht. Ich steige ein und zeige meine Fahrkarte. Im Bus treffe ich meine Freunde. Die Fahrt dauert fünfzehn Minuten.",
      persianTranslation: "من با اتوبوس به مدرسه می‌روم. ایستگاه اتوبوس در خیابان من است. اتوبوس ساعت هفت و نیم می‌آید. من سوار می‌شوم و بلیطم را نشان می‌دهم. در اتوبوس دوستانم را ملاقات می‌کنم. سفر پانزده دقیقه طول می‌کشد."
    },
    { germanTitle: "Mein Frühstück", persianTitle: "صبحانه من",
      germanStory: "Jeden Morgen esse ich Frühstück. Ich esse Brot mit Marmelade. Manchmal esse ich auch Müsli mit Milch. Ich trinke eine Tasse Tee. Ein gutes Frühstück ist wichtig. Es gibt mir Energie für den Tag.",
      persianTranslation: "هر روز صبح من صبحانه می‌خورم. من نان با مربا می‌خورم. گاهی هم موسلی با شیر می‌خورم. من یک فنجان چای می‌نوشم. یک صبحانه خوب مهم است. به من برای روز انرژی می‌دهد."
    },
    { germanTitle: "Im Garten", persianTitle: "در باغ",
      germanStory: "Wir haben einen kleinen Garten hinter dem Haus. Im Garten wachsen viele Blumen. Es gibt Rosen und Tulpen. Mein Vater pflanzt Gemüse. Er hat Tomaten und Gurken. Ich spiele gerne im Garten.",
      persianTranslation: "ما یک باغ کوچک پشت خانه داریم. در باغ گل‌های زیادی می‌روید. رز و لاله وجود دارد. پدرم سبزیجات می‌کارد. او گوجه فرنگی و خیار دارد. من دوست دارم در باغ بازی کنم."
    },
    { germanTitle: "Die Jahreszeiten", persianTitle: "فصل‌های سال",
      germanStory: "Es gibt vier Jahreszeiten: Frühling, Sommer, Herbst und Winter. Im Frühling blühen die Blumen. Im Sommer ist es heiß. Im Herbst fallen die Blätter von den Bäumen. Im Winter schneit es. Jede Jahreszeit ist schön.",
      persianTranslation: "چهار فصل وجود دارد: بهار، تابستان، پاییز و زمستان. در بهار گل‌ها شکوفه می‌دهند. در تابستان هوا گرم است. در پاییز برگ‌ها از درختان می‌ریزند. در زمستان برف می‌بارد. هر فصلی زیباست."
    },
    { germanTitle: "Ein Picknick machen", persianTitle: "رفتن به پیک‌نیک",
      germanStory: "Am Sonntag machen wir ein Picknick im Park. Wir nehmen eine Decke mit. Wir haben Sandwiches, Obst und Saft dabei. Wir sitzen auf der Decke und essen. Die Sonne scheint. Es ist sehr entspannend.",
      persianTranslation: "روز یکشنبه ما در پارک پیک‌نیک می‌کنیم. ما یک پتو با خود می‌بریم. ما ساندویچ، میوه و آبمیوه همراه داریم. ما روی پتو می‌نشینیم و می‌خوریم. خورشید می‌درخشد. بسیار آرامش‌بخش است."
    },
    { germanTitle: "Mein Haustier", persianTitle: "حیوان خانگی من",
      germanStory: "Ich habe ein Haustier. Es ist ein Kaninchen. Sein Name ist Hoppel. Hoppel hat langes, weißes Fell. Er isst gerne Karotten. Er wohnt in einem Käfig in meinem Zimmer. Ich spiele jeden Tag mit ihm. Ich liebe mein Kaninchen.",
      persianTranslation: "من یک حیوان خانگی دارم. این یک خرگوش است. نام او هوپل است. هوپل خز بلند و سفیدی دارد. او دوست دارد هویج بخورد. او در یک قفس در اتاق من زندگی می‌کند. من هر روز با او بازی می‌کنم. من خرگوشم را دوست دارم."
    },
    { germanTitle: "Auf dem Spielplatz", persianTitle: "در زمین بازی",
      germanStory: "Nach der Schule gehe ich auf den Spielplatz. Dort gibt es eine Schaukel, eine Rutsche und ein Klettergerüst. Ich schaukle gerne hoch in die Luft. Viele Kinder sind auf dem Spielplatz. Wir spielen zusammen Fangen.",
      persianTranslation: "بعد از مدرسه به زمین بازی می‌روم. آنجا یک تاب، یک سرسره و یک وسیله برای بالا رفتن وجود دارد. من دوست دارم بالا در هوا تاب بخورم. کودکان زیادی در زمین بازی هستند. ما با هم گرگم به هوا بازی می‌کنیم."
    },
    { germanTitle: "Ein Telefongespräch", persianTitle: "یک گفتگوی تلفنی",
      germanStory: "Mein Telefon klingelt. Es ist meine Oma. Ich sage: 'Hallo, Oma!' Sie fragt: 'Wie geht es dir?' Ich antworte: 'Mir geht es gut.' Wir sprechen über das Wetter und die Familie. Das Gespräch dauert zehn Minuten.",
      persianTranslation: "تلفن من زنگ می‌زند. مادربزرگم است. من می‌گویم: «سلام، مادربزرگ!» او می‌پرسد: «حالت چطور است؟» من جواب می‌دهم: «من خوبم.» ما درباره هوا و خانواده صحبت می‌کنیم. گفتگو ده دقیقه طول می‌کشد."
    },
    { germanTitle: "Meine Stadt", persianTitle: "شهر من",
      germanStory: "Ich wohne in einer kleinen Stadt. Meine Stadt hat einen Marktplatz, eine Kirche und einen Park. Es gibt auch viele Geschäfte. Ich kann alles zu Fuß erreichen. Die Menschen hier sind sehr freundlich. Ich mag meine Stadt.",
      persianTranslation: "من در یک شهر کوچک زندگی می‌کنم. شهر من یک میدان بازار، یک کلیسا و یک پارک دارد. همچنین فروشگاه‌های زیادی وجود دارد. من می‌توانم به همه جا پیاده برسم. مردم اینجا بسیار مهربان هستند. من شهرم را دوست دارم."
    },
    { germanTitle: "Zahlen und Zählen", persianTitle: "اعداد و شمردن",
      germanStory: "Ich lerne die Zahlen. Eins, zwei, drei, vier, fünf. Sechs, sieben, acht, neun, zehn. Ich kann bis zwanzig zählen. Ich habe zwei Hände. Jede Hand hat fünf Finger. Zusammen sind das zehn Finger. Zählen ist einfach.",
      persianTranslation: "من اعداد را یاد می‌گیرم. یک، دو، سه، چهار، پنج. شش، هفت، هشت، نه، ده. من می‌توانم تا بیست بشمارم. من دو دست دارم. هر دست پنج انگشت دارد. با هم ده انگشت می‌شود. شمردن آسان است."
    },
    { germanTitle: "Am Flughafen", persianTitle: "در فرودگاه",
      germanStory: "Wir sind am Flughafen. Wir fliegen in den Urlaub. Zuerst geben wir unser Gepäck ab. Dann gehen wir durch die Sicherheitskontrolle. Wir warten am Gate. Ich sehe die Flugzeuge aus dem Fenster. Fliegen ist aufregend.",
      persianTranslation: "ما در فرودگاه هستیم. ما به تعطیلات پرواز می‌کنیم. ابتدا چمدان‌هایمان را تحویل می‌دهیم. سپس از بازرسی امنیتی عبور می‌کنیم. ما در گیت منتظر می‌مانیم. من هواپیماها را از پنجره می‌بینم. پرواز کردن هیجان‌انگیز است."
    },
    { germanTitle: "Ein einfacher Brief", persianTitle: "یک نامه ساده",
      germanStory: "Ich schreibe einen Brief an meinen Freund. Ich schreibe: 'Lieber Tom, wie geht es dir? Mir geht es gut. Am Wochenende spiele ich Fußball. Viele Grüße, dein Leo.' Dann stecke ich den Brief in einen Umschlag und bringe ihn zur Post.",
      persianTranslation: "من یک نامه به دوستم می‌نویسم. من می‌نویسم: «تام عزیز، حالت چطور است؟ من خوبم. آخر هفته فوتبال بازی می‌کنم. با بهترین آرزوها، لئو تو.» سپس نامه را در یک پاکت می‌گذارم و آن را به اداره پست می‌برم."
    },
    { germanTitle: "Mein Lieblingsessen", persianTitle: "غذای مورد علاقه من",
      germanStory: "Mein Lieblingsessen ist Spaghetti mit Tomatensoße. Meine Mutter kocht es am besten. Die Nudeln sind lang. Die Soße ist rot und lecker. Manchmal gibt es auch Käse dazu. Ich könnte jeden Tag Spaghetti essen.",
      persianTranslation: "غذای مورد علاقه من اسپاگتی با سس گوجه فرنگی است. مادرم آن را به بهترین شکل می‌پزد. نودل‌ها بلند هستند. سس قرمز و خوشمزه است. گاهی پنیر هم به آن اضافه می‌شود. من می‌توانم هر روز اسپاگتی بخورم."
    },
    { germanTitle: "Im Kino", persianTitle: "در سینما",
      germanStory: "Am Samstag gehe ich ins Kino. Ich schaue einen neuen Film. Der Film ist ein Zeichentrickfilm. Ich kaufe Popcorn und ein Getränk. Der Kinosaal ist groß und dunkel. Der Film ist sehr lustig. Ich habe viel Spaß.",
      persianTranslation: "روز شنبه به سینما می‌روم. من یک فیلم جدید تماشا می‌کنم. فیلم یک انیمیشن است. من پاپ‌کورن و یک نوشیدنی می‌خرم. سالن سینما بزرگ و تاریک است. فیلم خیلی خنده‌دار است. به من خیلی خوش می‌گذرد."
    },
    { germanTitle: "Die Uhrzeit", persianTitle: "ساعت",
      germanStory: "Ich lerne die Uhrzeit. Ein Tag hat 24 Stunden. Eine Stunde hat 60 Minuten. Ich stehe um sieben Uhr auf. Die Schule beginnt um acht Uhr. Um zwölf Uhr esse ich Mittagessen. Ich gehe um neun Uhr ins Bett.",
      persianTranslation: "من ساعت را یاد می‌گیرم. یک روز ۲۴ ساعت دارد. یک ساعت ۶۰ دقیقه دارد. من ساعت هفت بیدار می‌شوم. مدرسه ساعت هشت شروع می‌شود. ساعت دوازده ناهار می‌خورم. من ساعت نه به رختخواب می‌روم."
    },
    { germanTitle: "Ein Spaziergang im Wald", persianTitle: "قدم زدن در جنگل",
      germanStory: "Wir machen einen Spaziergang im Wald. Es gibt viele hohe Bäume. Die Luft ist frisch. Wir hören die Vögel singen. Wir sehen ein Eichhörnchen. Es klettert schnell den Baum hoch. Ein Spaziergang im Wald ist schön.",
      persianTranslation: "ما در جنگل قدم می‌زنیم. درختان بلند زیادی وجود دارد. هوا تازه است. ما صدای آواز پرندگان را می‌شنویم. ما یک سنجاب می‌بینیم. او به سرعت از درخت بالا می‌رود. قدم زدن در جنگل زیباست."
    },
    { germanTitle: "Berufe", persianTitle: "شغل‌ها",
      germanStory: "Es gibt viele Berufe. Ein Arzt hilft kranken Menschen. Ein Lehrer unterrichtet Kinder. Ein Bäcker backt Brot. Ein Polizist sorgt für Sicherheit. Wenn ich groß bin, möchte ich Pilot werden und Flugzeuge fliegen.",
      persianTranslation: "شغل‌های زیادی وجود دارد. یک پزشک به افراد بیمار کمک می‌کند. یک معلم به کودکان آموزش می‌دهد. یک نانوا نان می‌پزد. یک پلیس امنیت را تأمین می‌کند. وقتی بزرگ شدم، می‌خواهم خلبان شوم و هواپیماها را برانم."
    },
    { germanTitle: "Ein Besuch bei den Großeltern", persianTitle: "دیدار با پدربزرگ و مادربزرگ",
      germanStory: "Am Sonntag besuchen wir meine Großeltern. Sie wohnen auf dem Land. Meine Oma kocht ein leckeres Mittagessen. Mein Opa erzählt Geschichten von früher. Wir spielen im Garten. Ich liebe meine Großeltern sehr.",
      persianTranslation: "روز یکشنبه ما به دیدن پدربزرگ و مادربزرگم می‌رویم. آنها در روستا زندگی می‌کنند. مادربزرگم یک ناهار خوشمزه می‌پزد. پدربزرگم داستان‌هایی از گذشته تعریف می‌کند. ما در باغ بازی می‌کنیم. من پدربزرگ و مادربزرگم را خیلی دوست دارم."
    },
    { germanTitle: "Musik hören", persianTitle: "گوش دادن به موسیقی",
      germanStory: "Ich höre gerne Musik. Ich habe Kopfhörer. Ich höre Musik auf meinem Handy. Ich mag Popmusik. Musik macht mich glücklich. Wenn ich Musik höre, tanze ich manchmal in meinem Zimmer. Musik ist toll.",
      persianTranslation: "من دوست دارم به موسیقی گوش دهم. من هدفون دارم. من با موبایلم به موسیقی گوش می‌دهم. من موسیقی پاپ را دوست دارم. موسیقی مرا خوشحال می‌کند. وقتی به موسیقی گوش می‌دهم، گاهی در اتاقم می‌رقصم. موسیقی عالی است."
    },
    { germanTitle: "Körperteile", persianTitle: "اعضای بدن",
      germanStory: "Das ist mein Körper. Ich habe einen Kopf, zwei Arme und zwei Beine. An meinem Kopf habe ich zwei Augen, eine Nase und einen Mund. Ich kann mit meinen Augen sehen. Ich kann mit meinen Beinen laufen. Ich bin gesund.",
      persianTranslation: "این بدن من است. من یک سر، دو بازو و دو پا دارم. روی سرم دو چشم، یک بینی و یک دهان دارم. من می‌توانم با چشمانم ببینم. من می‌توانم با پاهایم راه بروم. من سالم هستم."
    },
    { germanTitle: "Ein Fußballspiel", persianTitle: "یک بازی فوتبال",
      germanStory: "Ich spiele in einer Fußballmannschaft. Wir haben heute ein Spiel. Ich trage mein Trikot. Das Spiel beginnt. Ich renne schnell und schieße den Ball. Ich schieße ein Tor! Meine Mannschaft gewinnt. Ich bin sehr stolz.",
      persianTranslation: "من در یک تیم فوتبال بازی می‌کنم. ما امروز یک بازی داریم. من پیراهن ورزشی‌ام را می‌پوشم. بازی شروع می‌شود. من سریع می‌دوم و به توپ ضربه می‌زنم. من یک گل می‌زنم! تیم من برنده می‌شود. من خیلی مغرورم."
    },
    { germanTitle: "Im Zoo", persianTitle: "در باغ وحش",
      germanStory: "Wir gehen in den Zoo. Im Zoo gibt es viele wilde Tiere. Ich sehe Elefanten, Giraffen und Affen. Die Affen sind sehr lustig. Sie klettern und spielen. Der Löwe schläft. Ein Tag im Zoo ist immer ein Abenteuer.",
      persianTranslation: "ما به باغ وحش می‌رویم. در باغ وحش حیوانات وحشی زیادی وجود دارد. من فیل‌ها، زرافه‌ها و میمون‌ها را می‌بینم. میمون‌ها خیلی بامزه هستند. آنها بالا می‌روند و بازی می‌کنند. شیر خوابیده است. یک روز در باغ وحش همیشه یک ماجراجویی است."
    },
    { germanTitle: "Ein einfacher Plan für das Wochenende", persianTitle: "یک برنامه ساده برای آخر هفته",
      germanStory: "Am Wochenende habe ich frei. Am Samstagmorgen schlafe ich lange. Am Nachmittag treffe ich meine Freunde. Wir gehen ins Kino. Am Sonntag besuche ich meine Oma. Wir essen zusammen Kuchen. Das wird ein schönes Wochenende.",
      persianTranslation: "در آخر هفته من تعطیل هستم. صبح شنبه من زیاد می‌خوابم. بعد از ظهر دوستانم را ملاقات می‌کنم. ما به سینما می‌رویم. روز یکشنبه به دیدن مادربزرگم می‌روم. ما با هم کیک می‌خوریم. این یک آخر هفته خوب خواهد بود."
    },
    { germanTitle: "Auf dem Markt", persianTitle: "در بازار",
      germanStory: "Jeden Samstag ist Markt in unserer Stadt. Meine Mutter und ich gehen auf den Markt. Wir kaufen frisches Obst und Gemüse. Wir kaufen auch Käse und Brot. Alles ist sehr frisch und lecker. Der Markt ist bunt und lebendig.",
      persianTranslation: "هر شنبه در شهر ما بازار است. من و مادرم به بازار می‌رویم. ما میوه و سبزیجات تازه می‌خریم. ما همچنین پنیر و نان می‌خریم. همه چیز بسیار تازه و خوشمزه است. بازار رنگارنگ و پرجنب و جوش است."
    },
    { germanTitle: "Hausarbeit", persianTitle: "کارهای خانه",
      germanStory: "Ich helfe zu Hause bei der Hausarbeit. Ich räume mein Zimmer auf. Ich bringe den Müll raus. Manchmal helfe ich meiner Mutter beim Kochen. Wenn alle helfen, sind wir schnell fertig. Dann haben wir mehr Zeit zum Spielen.",
      persianTranslation: "من در خانه در کارهای خانه کمک می‌کنم. من اتاقم را مرتب می‌کنم. من زباله‌ها را بیرون می‌برم. گاهی در آشپزی به مادرم کمک می‌کنم. وقتی همه کمک می‌کنند، ما سریع تمام می‌کنیم. آن وقت زمان بیشتری برای بازی داریم."
    },
    { germanTitle: "Ein Regentag", persianTitle: "یک روز بارانی",
      germanStory: "Heute regnet es den ganzen Tag. Ich kann nicht draußen spielen. Ich bleibe zu Hause. Ich lese ein Buch. Dann male ich ein Bild. Am Nachmittag schaue ich einen Film. Ein Regentag zu Hause kann auch schön sein.",
      persianTranslation: "امروز تمام روز باران می‌بارد. من نمی‌توانم بیرون بازی کنم. من در خانه می‌مانم. من یک کتاب می‌خوانم. سپس یک نقاشی می‌کشم. بعد از ظهر یک فیلم تماشا می‌کنم. یک روز بارانی در خانه هم می‌تواند خوب باشد."
    },
    { germanTitle: "In der Bibliothek", persianTitle: "در کتابخانه",
      germanStory: "Ich gehe gerne in die Bibliothek. Dort gibt es viele Bücher. Ich kann Bücher ausleihen. Ich suche mir ein spannendes Abenteuerbuch aus. Ich setze mich an einen Tisch und lese. In der Bibliothek ist es immer sehr leise.",
      persianTranslation: "من دوست دارم به کتابخانه بروم. آنجا کتاب‌های زیادی وجود دارد. من می‌توانم کتاب قرض بگیرم. من یک کتاب ماجراجویی هیجان‌انگیز انتخاب می‌کنم. من پشت یک میز می‌نشینم و می‌خوانم. در کتابخانه همیشه خیلی ساکت است."
    },
    { germanTitle: "Ein Geschenk kaufen", persianTitle: "خریدن یک هدیه",
      germanStory: "Meine Freundin hat bald Geburtstag. Ich möchte ihr ein Geschenk kaufen. Ich gehe in ein Spielzeuggeschäft. Ich sehe viele tolle Sachen. Ich kaufe ihr ein Puzzle. Ich hoffe, das Geschenk gefällt ihr.",
      persianTranslation: "دوستم به زودی تولد دارد. من می‌خواهم برای او یک هدیه بخرم. من به یک فروشگاه اسباب‌بازی می‌روم. من چیزهای عالی زیادی می‌بینم. من برای او یک پازل می‌خرم. امیدوارم از هدیه خوشش بیاید."
    },
    { germanTitle: "Mein Tagesablauf", persianTitle: "برنامه روزانه من",
      germanStory: "Ich stehe um sieben Uhr auf. Dann frühstücke ich. Um acht Uhr beginnt die Schule. Um 13 Uhr bin ich wieder zu Hause. Ich esse Mittagessen und mache meine Hausaufgaben. Am Abend spiele ich oder lese. Um 21 Uhr gehe ich ins Bett.",
      persianTranslation: "من ساعت هفت بیدار می‌شوم. سپس صبحانه می‌خورم. ساعت هشت مدرسه شروع می‌شود. ساعت ۱۳ دوباره در خانه هستم. من ناهار می‌خورم و تکالیفم را انجام می‌دهم. عصر بازی می‌کنم یا می‌خوانم. ساعت ۲۱ به رختخواب می‌روم."
    },
    { germanTitle: "Eine Party", persianTitle: "یک مهمانی",
      germanStory: "Wir feiern eine Party. Das Haus ist mit Ballons dekoriert. Es gibt laute Musik und leckeres Essen. Alle meine Freunde sind da. Wir tanzen und lachen. Partys machen sehr viel Spaß.",
      persianTranslation: "ما یک مهمانی برگزار می‌کنیم. خانه با بادکنک تزئین شده است. موسیقی بلند و غذای خوشمزه وجود دارد. همه دوستانم آنجا هستند. ما می‌رقصیم و می‌خندیم. مهمانی‌ها خیلی سرگرم‌کننده هستند."
    },
    { germanTitle: "Fahrzeuge", persianTitle: "وسایل نقلیه",
      germanStory: "Es gibt viele verschiedene Fahrzeuge. Ein Auto fährt auf der Straße. Ein Zug fährt auf Schienen. Ein Flugzeug fliegt in der Luft. Ein Schiff fährt auf dem Wasser. Ich fahre am liebsten mit dem Fahrrad.",
      persianTranslation: "وسایل نقلیه مختلف زیادی وجود دارد. یک ماشین در خیابان حرکت می‌کند. یک قطار روی ریل حرکت می‌کند. یک هواپیما در هوا پرواز می‌کند. یک کشتی روی آب حرکت می‌کند. من بیشتر از همه دوست دارم با دوچرخه بروم."
    },
    { germanTitle: "Im Hotel", persianTitle: "در هتل",
      germanStory: "Im Urlaub wohnen wir in einem Hotel. Unser Hotelzimmer ist im dritten Stock. Es hat ein großes Bett und einen Balkon. Vom Balkon aus kann ich das Meer sehen. Das Frühstück im Hotel ist immer sehr lecker.",
      persianTranslation: "در تعطیلات ما در یک هتل اقامت داریم. اتاق هتل ما در طبقه سوم است. یک تخت بزرگ و یک بالکن دارد. از بالکن می‌توانم دریا را ببینم. صبحانه در هتل همیشه خیلی خوشمزه است."
    },
    { germanTitle: "Ein Schneemann bauen", persianTitle: "ساختن یک آدم برفی",
      germanStory: "Im Winter schneit es. Überall liegt Schnee. Ich gehe nach draußen. Ich baue einen Schneemann. Ich rolle drei große Schneebälle. Der Schneemann bekommt eine Karotte als Nase und zwei Knöpfe als Augen. Er sieht lustig aus.",
      persianTranslation: "در زمستان برف می‌بارد. همه جا برف است. من بیرون می‌روم. من یک آدم برفی می‌سازم. من سه گلوله برفی بزرگ را می‌غلظانم. آدم برفی یک هویج به عنوان بینی و دو دکمه به عنوان چشم می‌گیرد. او بامزه به نظر می‌رسد."
    },
    { germanTitle: "Die Nachbarn", persianTitle: "همسایه‌ها",
      germanStory: "Neben uns wohnt eine nette Familie. Sie heißen Familie Müller. Sie haben zwei Kinder. Manchmal spielen wir zusammen im Garten. Wenn wir im Urlaub sind, gießen die Müllers unsere Blumen. Gute Nachbarn sind wichtig.",
      persianTranslation: "کنار ما یک خانواده مهربان زندگی می‌کند. نام آنها خانواده مولر است. آنها دو فرزند دارند. گاهی ما با هم در باغ بازی می‌کنیم. وقتی ما در تعطیلات هستیم، خانواده مولر گل‌های ما را آب می‌دهند. همسایه‌های خوب مهم هستند."
    },
    { germanTitle: "Ein verlorener Schlüssel", persianTitle: "یک کلید گمشده",
      germanStory: "Oh nein, ich kann meinen Schlüssel nicht finden! Ich suche in meiner Tasche. Ich suche in meiner Jacke. Er ist nicht da. Wo ist er nur? Ah, ich finde ihn auf dem Tisch. Puh, Glück gehabt!",
      persianTranslation: "اوه نه، من نمی‌توانم کلیدم را پیدا کنم! من در کیفم می‌گردم. من در ژاکتم می‌گردم. آنجا نیست. کجاست؟ آه، من آن را روی میز پیدا می‌کنم. اوف، شانس آوردم!"
    },
    { germanTitle: "In den Bergen", persianTitle: "در کوهستان",
      germanStory: "Wir machen eine Wanderung in den Bergen. Wir laufen einen kleinen Weg hinauf. Die Luft ist klar. Wir sehen viele Bäume und Felsen. Oben haben wir eine tolle Aussicht. Wir können das ganze Tal sehen.",
      persianTranslation: "ما در کوهستان پیاده‌روی می‌کنیم. ما از یک مسیر کوچک بالا می‌رویم. هوا صاف است. ما درختان و صخره‌های زیادی می‌بینیم. در بالا منظره فوق‌العاده‌ای داریم. ما می‌توانیم تمام دره را ببینیم."
    },
    { germanTitle: "Ein Arztbesuch", persianTitle: "مراجعه به پزشک",
      germanStory: "Ich fühle mich nicht gut. Mein Hals tut weh. Meine Mutter geht mit mir zum Arzt. Der Arzt schaut in meinen Hals. Er sagt, ich soll viel Tee trinken und im Bett bleiben. Ich bekomme Medizin. Bald bin ich wieder gesund.",
      persianTranslation: "من حالم خوب نیست. گلویم درد می‌کند. مادرم با من به دکتر می‌رود. دکتر به گلوی من نگاه می‌کند. او می‌گوید باید چای زیاد بنوشم و در رختخواب بمانم. من دارو می‌گیرم. به زودی دوباره سالم خواهم شد."
    },
    { germanTitle: "Ein schöner Traum", persianTitle: "یک رویای زیبا",
      germanStory: "Letzte Nacht hatte ich einen schönen Traum. Ich konnte fliegen. Ich bin über meine Stadt geflogen. Ich habe alles von oben gesehen: die Häuser, die Bäume und die Autos. Es war ein wunderbares Gefühl. Dann bin ich aufgewacht.",
      persianTranslation: "دیشب یک رویای زیبا دیدم. من می‌توانستم پرواز کنم. من بر فراز شهرم پرواز کردم. من همه چیز را از بالا دیدم: خانه‌ها، درختان و ماشین‌ها. این یک حس فوق‌العاده بود. سپس بیدار شدم."
    },
    { germanTitle: "Ein Brief vom Briefträger", persianTitle: "نامه‌ای از پستچی",
      germanStory: "Der Briefträger kommt. Er hat einen Brief für mich. Der Brief ist von meiner Freundin aus einer anderen Stadt. Ich freue mich sehr. Ich öffne den Brief und lese ihn sofort. Sie schreibt über ihre Ferien.",
      persianTranslation: "پستچی می‌آید. او یک نامه برای من دارد. نامه از طرف دوستم از شهری دیگر است. من خیلی خوشحالم. من نامه را باز می‌کنم و فوراً آن را می‌خوانم. او درباره تعطیلاتش می‌نویسد."
    },
    { germanTitle: "Backen einen Kuchen", persianTitle: "پختن یک کیک",
      germanStory: "Heute backe ich mit meiner Mutter einen Kuchen. Wir brauchen Mehl, Zucker, Eier und Butter. Wir mischen alles in einer Schüssel. Dann kommt der Teig in den Ofen. Der ganze Haus riecht wunderbar. Der Kuchen schmeckt sehr gut.",
      persianTranslation: "امروز من با مادرم یک کیک می‌پزم. ما به آرد، شکر، تخم‌مرغ و کره نیاز داریم. ما همه چیز را در یک کاسه مخلوط می‌کنیم. سپس خمیر به فر می‌رود. تمام خانه بوی فوق‌العاده‌ای می‌دهد. کیک طعم خیلی خوبی دارد."
    },
    { germanTitle: "Im Schwimmbad", persianTitle: "در استخر",
      germanStory: "An einem heißen Tag gehen wir ins Schwimmbad. Das Wasser ist kühl und erfrischend. Ich springe ins Wasser. Ich kann schon ein bisschen schwimmen. Es gibt auch eine große Wasserrutsche. Das macht am meisten Spaß.",
      persianTranslation: "در یک روز گرم ما به استخر می‌رویم. آب خنک و باطراوت است. من به داخل آب می‌پرم. من دیگر می‌توانم کمی شنا کنم. یک سرسره آبی بزرگ هم وجود دارد. این از همه بیشتر سرگرم‌کننده است."
    },
    { germanTitle: "Ein Gewitter", persianTitle: "یک طوفان",
      germanStory: "Am Abend wird der Himmel dunkel. Es kommt ein Gewitter. Es blitzt und donnert. Der Regen prasselt gegen das Fenster. Ich sitze gemütlich im Haus. Ich habe keine Angst. Gewitter können auch spannend sein.",
      persianTranslation: "عصر آسمان تاریک می‌شود. یک طوفان می‌آید. رعد و برق می‌زند. باران به پنجره می‌کوبد. من راحت در خانه نشسته‌ام. من نمی‌ترسم. طوفان‌ها هم می‌توانند هیجان‌انگیز باشند."
    },
    { germanTitle: "Meine Lieblingsfarbe", persianTitle: "رنگ مورد علاقه من",
      germanStory: "Meine Lieblingsfarbe ist Grün. Grün ist die Farbe von Gras und Blättern. Grün ist eine ruhige Farbe. Mein Zimmer hat eine grüne Wand. Ich habe auch ein grünes T-Shirt. Ich finde die Farbe Grün einfach schön.",
      persianTranslation: "رنگ مورد علاقه من سبز است. سبز رنگ چمن و برگ‌هاست. سبز یک رنگ آرام است. اتاق من یک دیوار سبز دارد. من یک تی‌شرت سبز هم دارم. به نظر من رنگ سبز einfach زیباست."
    },
    { germanTitle: "Ein Puzzle lösen", persianTitle: "حل کردن یک پازل",
      germanStory: "Ich habe ein neues Puzzle. Es hat 100 Teile. Das Bild zeigt einen Bauernhof. Ich setze die Teile zusammen. Das ist manchmal schwierig. Ich brauche Geduld. Wenn das Puzzle fertig ist, bin ich sehr stolz auf mich.",
      persianTranslation: "من یک پازل جدید دارم. ۱۰۰ تکه دارد. تصویر یک مزرعه را نشان می‌دهد. من تکه‌ها را کنار هم می‌گذارم. این گاهی اوقات دشوار است. من به صبر نیاز دارم. وقتی پازل تمام می‌شود، من خیلی به خودم افتخار می‌کنم."
    },
    { germanTitle: "Die Post", persianTitle: "اداره پست",
      germanStory: "Ich gehe zur Post. Ich muss eine Postkarte an meine Tante schicken. Ich kaufe eine Briefmarke. Ich klebe die Briefmarke auf die Karte. Dann werfe ich die Karte in den Briefkasten. Die Post bringt die Karte zu meiner Tante.",
      persianTranslation: "من به اداره پست می‌روم. من باید یک کارت پستال برای عمه‌ام بفرستم. من یک تمبر می‌خرم. من تمبر را روی کارت می‌چسبانم. سپس کارت را در صندوق پست می‌اندازم. پست کارت را به عمه‌ام می‌رساند."
    },
    { germanTitle: "Ein lustiger Witz", persianTitle: "یک جوک خنده‌دار",
      germanStory: "Mein Freund erzählt mir einen Witz. 'Treffen sich zwei Fische. Sagt der eine: 'Hai!' Sagt der andere: 'Wo?''. Ich muss sehr lachen. Lachen ist gesund. Ich erzähle den Witz dann meinem Vater.",
      persianTranslation: "دوستم برایم یک جوک تعریف می‌کند. «دو ماهی به هم می‌رسند. یکی می‌گوید: «سلام (کوسه)!» دیگری می‌گوید: «کجا؟»». من خیلی می‌خندم. خنده سالم است. من بعداً جوک را برای پدرم تعریف می‌کنم."
    },
    { germanTitle: "Schlafen und Träumen", persianTitle: "خوابیدن و رویا دیدن",
      germanStory: "Jede Nacht schlafe ich in meinem Bett. Schlafen ist wichtig für den Körper. Im Schlaf träume ich. Manchmal sind die Träume schön, manchmal komisch. Am Morgen wache ich erholt auf und bin fit für den neuen Tag.",
      persianTranslation: "هر شب من در تختم می‌خوابم. خواب برای بدن مهم است. در خواب من رویا می‌بینم. گاهی رویاها زیبا هستند، گاهی عجیب. صبح من با استراحت بیدار می‌شوم و برای روز جدید آماده هستم."
    },
    { germanTitle: "Ein Glas Wasser", persianTitle: "یک لیوان آب",
      germanStory: "Ich habe Durst. Ich gehe in die Küche. Ich nehme ein Glas aus dem Schrank. Ich fülle das Glas mit Wasser aus dem Wasserhahn. Ich trinke das Wasser. Es ist kühl und erfrischend. Wasser ist das beste Getränk.",
      persianTranslation: "من تشنه هستم. به آشپزخانه می‌روم. من یک لیوان از کابینت برمی‌دارم. من لیوان را با آب از شیر آب پر می‌کنم. من آب را می‌نوشم. خنک و باطراوت است. آب بهترین نوشیدنی است."
    },
    { germanTitle: "Die Ampel", persianTitle: "چراغ راهنمایی",
      germanStory: "Ich stehe an der Straße. Die Ampel ist rot. Das bedeutet 'Stopp'. Alle Autos halten an. Dann wird die Ampel grün. Das bedeutet 'Gehen'. Jetzt kann ich sicher über die Straße gehen. Ich schaue trotzdem nach links und rechts.",
      persianTranslation: "من کنار خیابان ایستاده‌ام. چراغ راهنمایی قرمز است. این یعنی «ایست». همه ماشین‌ها توقف می‌کنند. سپس چراغ سبز می‌شود. این یعنی «برو». حالا می‌توانم با خیال راحت از خیابان عبور کنم. با این حال به چپ و راست نگاه می‌کنم."
    },
    { germanTitle: "Ein Baum im Garten", persianTitle: "یک درخت در باغ",
      germanStory: "In unserem Garten steht ein großer Apfelbaum. Im Frühling hat er schöne Blüten. Im Sommer gibt er Schatten. Im Herbst ernten wir die Äpfel. Im Winter hat er keine Blätter. Der Baum verändert sich mit den Jahreszeiten.",
      persianTranslation: "در باغ ما یک درخت سیب بزرگ قرار دارد. در بهار شکوفه‌های زیبایی دارد. در تابستان سایه می‌دهد. در پاییز ما سیب‌ها را می‌چینیم. در زمستان برگی ندارد. درخت با فصل‌ها تغییر می‌کند."
    },
    { germanTitle: "Auf dem Land", persianTitle: "در روستا",
      germanStory: "Das Leben auf dem Land ist ruhig. Es gibt viele Felder und Wälder. Die Luft ist sauber. Man kann Tiere sehen, zum Beispiel Kühe und Schafe. Es gibt nicht so viele Autos wie in der Stadt. Ich mag die Ruhe auf dem Land.",
      persianTranslation: "زندگی در روستا آرام است. مزارع و جنگل‌های زیادی وجود دارد. هوا تمیز است. می‌توان حیواناتی مانند گاو و گوسفند را دید. به اندازه شهر ماشین وجود ندارد. من آرامش روستا را دوست دارم."
    },
    { germanTitle: "Eine Tasse Tee", persianTitle: "یک فنجان چای",
      germanStory: "Wenn es draußen kalt ist, trinke ich gerne eine Tasse Tee. Meine Mutter kocht das Wasser. Sie gibt einen Teebeutel in die Tasse. Der Tee muss kurz ziehen. Ich trinke meinen Tee mit ein bisschen Zucker. Er wärmt mich von innen.",
      persianTranslation: "وقتی بیرون سرد است، دوست دارم یک فنجان چای بنوشم. مادرم آب را می‌جوشاند. او یک چای کیسه‌ای در فنجان می‌گذارد. چای باید کمی دم بکشد. من چایم را با کمی شکر می‌نوشم. او مرا از درون گرم می‌کند."
    },
    { germanTitle: "Ein Foto machen", persianTitle: "عکس گرفتن",
      germanStory: "Ich mache gerne Fotos. Ich habe eine kleine Kamera. Heute sehe ich einen schönen Schmetterling. Ich mache ein Foto von ihm. Das Foto ist sehr gut geworden. Fotos sind schöne Erinnerungen.",
      persianTranslation: "من دوست دارم عکس بگیرم. من یک دوربین کوچک دارم. امروز یک پروانه زیبا می‌بینم. من از او یک عکس می‌گیرم. عکس خیلی خوب شده است. عکس‌ها خاطرات زیبایی هستند."
    },
    { germanTitle: "Die Hausnummer", persianTitle: "شماره خانه",
      germanStory: "Jedes Haus hat eine Hausnummer. Unsere Hausnummer ist 12. Die Hausnummer steht neben der Tür. Der Briefträger braucht die Hausnummer, um die Post zu bringen. Es ist wichtig, seine Adresse und Hausnummer zu kennen.",
      persianTranslation: "هر خانه‌ای یک شماره خانه دارد. شماره خانه ما ۱۲ است. شماره خانه کنار در قرار دارد. پستچی برای آوردن پست به شماره خانه نیاز دارد. مهم است که آدرس و شماره خانه خود را بدانید."
    },
    { germanTitle: "Ein Stern am Himmel", persianTitle: "یک ستاره در آسمان",
      germanStory: "Am Abend schaue ich in den Himmel. Der Himmel ist dunkel. Ich sehe den Mond und viele Sterne. Die Sterne sind kleine Lichtpunkte. Sie sind sehr weit weg. Der Sternenhimmel ist wunderschön.",
      persianTranslation: "عصر من به آسمان نگاه می‌کنم. آسمان تاریک است. من ماه و ستاره‌های زیادی را می‌بینم. ستاره‌ها نقاط نورانی کوچکی هستند. آنها خیلی دور هستند. آسمان پرستاره بسیار زیباست."
    },
    { germanTitle: "Ein Lied singen", persianTitle: "آواز خواندن",
      germanStory: "Ich singe gerne Lieder. Mein Lieblingslied ist ein Kinderlied. Ich kenne den ganzen Text. Ich singe im Auto, unter der Dusche und in meinem Zimmer. Singen macht gute Laune. Manchmal singen wir auch in der Schule.",
      persianTranslation: "من دوست دارم آهنگ بخوانم. آهنگ مورد علاقه من یک آهنگ کودکانه است. من تمام متن را می‌دانم. من در ماشین، زیر دوش و در اتاقم آواز می‌خوانم. آواز خواندن حال آدم را خوب می‌کند. گاهی در مدرسه هم آواز می‌خوانیم."
    },
    { germanTitle: "Ein Buch lesen", persianTitle: "کتاب خواندن",
      germanStory: "Ich lese gerne Bücher. Lesen ist wie eine Reise in eine andere Welt. Mein aktuelles Buch handelt von einem Piraten. Es ist sehr spannend. Ich lese jeden Abend vor dem Schlafen. Ich frage mich, was als nächstes passiert.",
      persianTranslation: "من دوست دارم کتاب بخوانم. خواندن مانند سفری به دنیای دیگر است. کتاب فعلی من درباره یک دزد دریایی است. بسیار هیجان‌انگیز است. من هر شب قبل از خواب می‌خوانم. از خودم می‌پرسم بعد چه اتفاقی می‌افتد."
    },
    { germanTitle: "Am Fluss", persianTitle: "کنار رودخانه",
      germanStory: "In meiner Stadt gibt es einen Fluss. Wir gehen oft am Fluss spazieren. Man kann Schiffe sehen. Enten schwimmen auf dem Wasser. Manchmal angeln die Leute am Ufer. Das Wasser fließt langsam vorbei.",
      persianTranslation: "در شهر من یک رودخانه وجود دارد. ما اغلب کنار رودخانه قدم می‌زنیم. می‌توان کشتی‌ها را دید. اردک‌ها روی آب شنا می‌کنند. گاهی مردم در ساحل ماهیگیری می‌کنند. آب به آرامی می‌گذرد."
    },
    { germanTitle: "Ein Paket bekommen", persianTitle: "دریافت یک بسته",
      germanStory: "Es klingelt an der Tür. Der Paketbote ist da. Er hat ein Paket für meine Eltern. Es ist eine große braune Kiste. Ich bin neugierig, was darin ist. Vielleicht ist es ein Geschenk. Das ist eine Überraschung.",
      persianTranslation: "زنگ در به صدا در می‌آید. پستچی بسته اینجاست. او یک بسته برای والدینم دارد. این یک جعبه قهوه‌ای بزرگ است. من کنجکاو هستم که داخل آن چیست. شاید یک هدیه باشد. این یک غافلگیری است."
    },
    { germanTitle: "Ein sauberes Zimmer", persianTitle: "یک اتاق تمیز",
      germanStory: "Am Samstag räume ich mein Zimmer auf. Ich lege meine Bücher ins Regal. Ich räume meine Kleidung in den Schrank. Ich wische den Staub vom Schreibtisch. Jetzt ist mein Zimmer wieder sauber und ordentlich. Das fühlt sich gut an.",
      persianTranslation: "روز شنبه من اتاقم را مرتب می‌کنم. من کتاب‌هایم را در قفسه می‌گذارم. من لباس‌هایم را در کمد می‌گذارم. من گرد و غبار را از روی میز تحریر پاک می‌کنم. حالا اتاق من دوباره تمیز و مرتب است. این حس خوبی دارد."
    },
    { germanTitle: "Ein Apfel vom Baum", persianTitle: "یک سیب از درخت",
      germanStory: "Im Garten meiner Oma steht ein Apfelbaum. Die Äpfel sind reif. Ich klettere auf eine kleine Leiter. Ich pflücke einen roten Apfel direkt vom Baum. Er ist saftig und schmeckt süß. Das ist der beste Apfel.",
      persianTranslation: "در باغ مادربزرگم یک درخت سیب قرار دارد. سیب‌ها رسیده‌اند. من از یک نردبان کوچک بالا می‌روم. من یک سیب قرمز را مستقیماً از درخت می‌چینم. آبدار است و طعم شیرینی دارد. این بهترین سیب است."
    },
    { germanTitle: "Eine Blume pflanzen", persianTitle: "کاشتن یک گل",
      germanStory: "Ich pflanze eine Blume. Ich mache ein kleines Loch in die Erde. Ich setze die Pflanze hinein. Dann bedecke ich die Wurzeln mit Erde. Zum Schluss gieße ich die Blume mit Wasser. Jetzt muss sie nur noch wachsen und blühen.",
      persianTranslation: "من یک گل می‌کارم. من یک سوراخ کوچک در خاک ایجاد می‌کنم. من گیاه را داخل آن قرار می‌دهم. سپس ریشه‌ها را با خاک می‌پوشانم. در آخر گل را با آب آبیاری می‌کنم. حالا فقط باید رشد کند و شکوفه دهد."
    },
    { germanTitle: "Der Mond in der Nacht", persianTitle: "ماه در شب",
      germanStory: "Wenn die Sonne untergeht, kommt der Mond heraus. Manchmal ist er rund wie ein Ball. Manchmal ist er nur eine schmale Sichel. Der Mond leuchtet hell am Nachthimmel. Er ist der Begleiter der Erde.",
      persianTranslation: "وقتی خورشید غروب می‌کند، ماه بیرون می‌آید. گاهی گرد مانند یک توپ است. گاهی فقط یک هلال باریک است. ماه در آسمان شب به روشنی می‌درخشد. او همراه زمین است."
    },
    { germanTitle: "Ein Vogel im Nest", persianTitle: "یک پرنده در لانه",
      germanStory: "Auf einem Baum vor meinem Fenster ist ein Nest. In dem Nest sitzt eine Amsel. Sie hat kleine Babys. Die kleinen Vögel piepsen. Die Mutter füttert sie mit Würmern. Ich schaue ihnen gerne zu.",
      persianTranslation: "روی درختی جلوی پنجره من یک لانه وجود دارد. در لانه یک توکای سیاه نشسته است. او بچه‌های کوچکی دارد. پرندگان کوچک جیک جیک می‌کنند. مادر آنها را با کرم تغذیه می‌کند. من دوست دارم آنها را تماشا کنم."
    },
    { germanTitle: "Ein Ballspiel", persianTitle: "یک بازی با توپ",
      germanStory: "Ich spiele mit meinem Freund im Park. Wir werfen uns einen Ball zu. Ich werfe, er fängt. Er wirft, ich fange. Manchmal fällt der Ball auf den Boden. Wir lachen und spielen weiter. Es ist ein einfaches Spiel, aber es macht Spaß.",
      persianTranslation: "من با دوستم در پارک بازی می‌کنم. ما یک توپ را به سمت هم پرتاب می‌کنیم. من پرتاب می‌کنم، او می‌گیرد. او پرتاب می‌کند، من می‌گیرم. گاهی توپ روی زمین می‌افتد. ما می‌خندیم و به بازی ادامه می‌دهیم. این یک بازی ساده است، اما سرگرم‌کننده است."
    },
    { germanTitle: "Ein Spaziergang mit dem Hund", persianTitle: "پیاده‌روی با سگ",
      germanStory: "Ich gehe mit unserem Hund Gassi. Er heißt Bello. Ich mache die Leine an sein Halsband. Wir gehen in den Park. Bello schnüffelt überall. Er freut sich und wedelt mit dem Schwanz. Er liebt Spaziergänge.",
      persianTranslation: "من با سگمان به پیاده‌روی می‌روم. نام او بلو است. من قلاده را به گردنبندش می‌بندم. ما به پارک می‌رویم. بلو همه جا را بو می‌کشد. او خوشحال است و دمش را تکان می‌دهد. او عاشق پیاده‌روی است."
    },
    { germanTitle: "Ein neues Fahrrad", persianTitle: "یک دوچرخه جدید",
      germanStory: "Zu meinem Geburtstag habe ich ein neues Fahrrad bekommen. Es ist rot und glänzt in der Sonne. Es hat eine Klingel und ein Licht. Ich fahre damit durch unsere Straße. Radfahren ist super. Ich bin sehr vorsichtig.",
      persianTranslation: "برای تولدم یک دوچرخه جدید گرفتم. قرمز است و در آفتاب می‌درخشد. یک زنگ و یک چراغ دارد. من با آن در خیابانمان می‌رانم. دوچرخه‌سواری عالی است. من خیلی مراقب هستم."
    },
    { germanTitle: "Ein Feuer im Kamin", persianTitle: "آتشی در شومینه",
      germanStory: "Im Winter ist es draußen kalt. Drinnen machen wir ein Feuer im Kamin. Das Holz knistert. Die Flammen sind warm und orange. Wir sitzen davor auf dem Teppich. Das Feuer macht das Zimmer sehr gemütlich.",
      persianTranslation: "در زمستان بیرون سرد است. داخل ما در شومینه آتش روشن می‌کنیم. چوب ترق و تروق می‌کند. شعله‌ها گرم و نارنجی هستند. ما جلوی آن روی فرش نشسته‌ایم. آتش اتاق را بسیار دنج می‌کند."
    },
    { germanTitle: "Ein Regenschirm", persianTitle: "یک چتر",
      germanStory: "Es fängt an zu regnen. Ich habe meinen Regenschirm dabei. Er ist blau mit weißen Punkten. Ich öffne ihn. Jetzt werde ich nicht nass. Der Regen trommelt auf den Schirm. Das ist ein schönes Geräusch.",
      persianTranslation: "باران شروع به باریدن می‌کند. من چترم را همراه دارم. آبی با نقطه‌های سفید است. من آن را باز می‌کنم. حالا خیس نمی‌شوم. باران روی چتر طبل می‌زند. این صدای زیبایی است."
    },
    { germanTitle: "Der erste Schnee", persianTitle: "اولین برف",
      germanStory: "Als ich aufwache, ist alles weiß. Es hat geschneit! Das ist der erste Schnee in diesem Jahr. Ich ziehe mich schnell an und renne nach draußen. Der Schnee ist kalt und weich. Ich mache eine Schneeballschlacht mit meinem Bruder.",
      persianTranslation: "وقتی بیدار می‌شوم، همه چیز سفید است. برف باریده است! این اولین برف امسال است. من سریع لباس می‌پوشم و به بیرون می‌دوم. برف سرد و نرم است. من با برادرم گلوله برفی بازی می‌کنم."
    },
    { germanTitle: "Eine freundliche Geste", persianTitle: "یک حرکت دوستانه",
      germanStory: "Eine alte Frau lässt ihre Tasche fallen. Alles fällt heraus. Ich helfe ihr, alles wieder einzusammeln. Sie lächelt und sagt: 'Vielen Dank, du bist sehr nett.' Ich fühle mich gut, weil ich geholfen habe.",
      persianTranslation: "یک خانم مسن کیفش را می‌اندازد. همه چیز بیرون می‌ریزد. من به او کمک می‌کنم همه چیز را دوباره جمع کند. او لبخند می‌زند و می‌گوید: «خیلی ممنون، تو خیلی مهربان هستی.» من حس خوبی دارم چون کمک کرده‌ام."
    },
    { germanTitle: "Die Sonne scheint", persianTitle: "خورشید می‌درخشد",
      germanStory: "Die Sonne scheint heute sehr hell. Sie macht den Tag warm und freundlich. Die Blumen im Garten strecken sich zur Sonne. Ich setze meine Sonnenbrille auf. Ein sonniger Tag macht gute Laune.",
      persianTranslation: "خورشید امروز بسیار درخشان می‌تابد. او روز را گرم و دوستانه می‌کند. گل‌های باغ به سمت خورشید کشیده می‌شوند. من عینک آفتابی‌ام را می‌زنم. یک روز آفتابی حال آدم را خوب می‌کند."
    },
    { germanTitle: "Ein Lächeln", persianTitle: "یک لبخند",
      germanStory: "Ich sehe ein trauriges Mädchen auf der Bank. Ich gehe zu ihr und lächle sie an. Sie schaut auf und lächelt zurück. Ein Lächeln kostet nichts, aber es kann jemanden glücklich machen. Es ist eine einfache und nette Geste.",
      persianTranslation: "من یک دختر غمگین را روی نیمکت می‌بینم. من به سمت او می‌روم و به او لبخند می‌زنم. او نگاه می‌کند و لبخند می‌زند. یک لبخند هیچ هزینه‌ای ندارد، اما می‌تواند کسی را خوشحال کند. این یک حرکت ساده و مهربانانه است."
    },
    { germanTitle: "Ein ruhiger Abend", persianTitle: "یک عصر آرام",
      germanStory: "Nach einem langen Tag bin ich müde. Ich sitze mit meinen Eltern auf dem Sofa. Wir reden über den Tag. Der Fernseher ist aus. Es ist ruhig und friedlich. Das ist die beste Zeit des Tages.",
      persianTranslation: "بعد از یک روز طولانی من خسته هستم. من با والدینم روی مبل نشسته‌ام. ما درباره روز صحبت می‌کنیم. تلویزیون خاموش است. آرام و صلح‌آمیز است. این بهترین زمان روز است."
    },
    { germanTitle: "Ein leckeres Eis", persianTitle: "یک بستنی خوشمزه",
      germanStory: "Es ist heiß. Ich kaufe mir ein Eis. Ich nehme Schokolade und Erdbeere. Das Eis ist in einer Waffel. Es schmilzt schnell in der Sonne. Ich muss es schnell essen. Es ist so lecker und erfrischend.",
      persianTranslation: "هوا گرم است. من یک بستنی می‌خرم. من شکلات و توت فرنگی می‌گیرم. بستنی در یک نان بستنی است. به سرعت در آفتاب آب می‌شود. من باید آن را سریع بخورم. خیلی خوشمزه و باطراوت است."
    },
    { germanTitle: "Eine gute Nacht", persianTitle: "یک شب بخیر",
      germanStory: "Es ist Zeit, ins Bett zu gehen. Ich putze meine Zähne. Ich ziehe meinen Schlafanzug an. Meine Eltern kommen in mein Zimmer. Sie geben mir einen Kuss und sagen: 'Gute Nacht.' Ich mache das Licht aus und schlafe ein.",
      persianTranslation: "وقت رفتن به رختخواب است. من دندان‌هایم را مسواک می‌زنم. من لباس خوابم را می‌پوشم. والدینم به اتاق من می‌آیند. آنها مرا می‌بوسند و می‌گویند: «شب بخیر.» من چراغ را خاموش می‌کنم و به خواب می‌روم."
    },
  ],
  A2: [
    { 
      germanTitle: "Ein Wochenende in Berlin", 
      persianTitle: "یک آخر هفته در برلین", 
      audioUrl: "https://storage.googleapis.com/audio-samples-for-app/a2-story-1.mp3",
      germanStory: "Letztes Wochenende habe ich Berlin besucht. Ich bin mit dem Zug gefahren. Am Samstag habe ich das Brandenburger Tor gesehen. Es war sehr beeindruckend. Danach habe ich eine Bootsfahrt auf der Spree gemacht. Abends habe ich in einem Restaurant Currywurst gegessen. Berlin ist eine tolle Stadt.",
      persianTranslation: "آخر هفته گذشته من از برلین دیدن کردم. من با قطار سفر کردم. روز شنبه من دروازه براندنبورگ را دیدم. بسیار تاثیرگذار بود. بعد از آن یک سفر با قایق روی رودخانه شپری انجام دادم. شب در یک رستوران کاری‌ورست خوردم. برلین یک شهر عالی است."
    },
    { 
      germanTitle: "Ein Brief an einen Freund", 
      persianTitle: "نامه‌ای به یک دوست", 
      audioUrl: "https://storage.googleapis.com/audio-samples-for-app/a2-story-2.mp3",
      germanStory: "Lieber Alex, wie geht es dir? Ich wollte dir von meinem neuen Job erzählen. Ich arbeite jetzt in einem Café. Die Arbeit ist anstrengend, aber die Kollegen sind sehr nett. Letzte Woche habe ich gelernt, wie man einen Cappuccino macht. Vielleicht kannst du mich ja bald besuchen kommen? Viele Grüße, deine Sarah.",
      persianTranslation: "الکس عزیز، حالت چطور است؟ می‌خواستم درباره شغل جدیدم برایت بگویم. من حالا در یک کافه کار می‌کنم. کار خسته‌کننده است، اما همکاران خیلی مهربان هستند. هفته گذشته یاد گرفتم چگونه کاپوچینو درست کنم. شاید بتوانی به زودی به دیدنم بیایی؟ با بهترین آرزوها، سارای تو."
    },
    { 
      germanTitle: "Beim Arzt", 
      persianTitle: "نزد دکتر",
      germanStory: "Gestern hatte ich starke Kopfschmerzen, deshalb bin ich zum Arzt gegangen. Ich musste zuerst im Wartezimmer warten. Dann hat mich die Ärztin untersucht. Sie hat meinen Blutdruck gemessen und gesagt, ich soll mehr Wasser trinken und weniger Stress haben. Sie hat mir ein Rezept für Tabletten gegeben.",
      persianTranslation: "دیروز سردرد شدیدی داشتم، به همین دلیل به دکتر رفتم. ابتدا باید در اتاق انتظار منتظر می‌ماندم. سپس دکتر مرا معاینه کرد. او فشار خونم را اندازه گرفت و گفت باید آب بیشتری بنوشم و استرس کمتری داشته باشم. او برایم یک نسخه برای قرص داد."
    },
    { 
      germanTitle: "Ein Rezept kochen", 
      persianTitle: "پختن یک دستور غذا",
      germanStory: "Heute Abend wollte ich etwas Besonderes kochen. Ich habe ein Rezept für Linsensuppe im Internet gefunden. Ich musste zuerst Zwiebeln und Karotten schneiden. Dann habe ich alles mit den Linsen in einem Topf gekocht. Die Suppe hat eine Stunde gebraucht, aber sie hat fantastisch geschmeckt.",
      persianTranslation: "امشب می‌خواستم چیز خاصی بپزم. من یک دستور پخت برای سوپ عدس در اینترنت پیدا کردم. ابتدا باید پیاز و هویج را خرد می‌کردم. سپس همه چیز را با عدس در یک قابلمه پختم. سوپ یک ساعت طول کشید، اما طعم فوق‌العاده‌ای داشت."
    },
    { 
      germanTitle: "Mein letzter Urlaub", 
      persianTitle: "آخرین تعطیلات من",
      germanStory: "In meinem letzten Urlaub war ich in Italien am Meer. Wir haben in einem kleinen Hotel direkt am Strand gewohnt. Jeden Tag sind wir schwimmen gegangen und haben in der Sonne gelegen. Abends haben wir in kleinen Restaurants Pizza und Pasta gegessen. Das Wetter war perfekt und ich war sehr entspannt.",
      persianTranslation: "در آخرین تعطیلاتم من در ایتالیا کنار دریا بودم. ما در یک هتل کوچک درست کنار ساحل اقامت داشتیم. هر روز ما شنا می‌کردیم و در آفتاب دراز می‌کشیدیم. شب‌ها در رستوران‌های کوچک پیتزا و پاستا می‌خوردیم. هوا عالی بود و من خیلی آرام بودم."
    },
    { 
      germanTitle: "Eine neue Wohnung finden", 
      persianTitle: "پیدا کردن یک آپارتمان جدید",
      germanStory: "Ich suche eine neue Wohnung, weil meine alte zu klein ist. Es ist sehr schwierig, etwas Gutes zu finden. Gestern habe ich eine Wohnung besichtigt. Sie hatte zwei Zimmer und einen Balkon. Die Miete war aber leider zu hoch. Ich muss weitersuchen.",
      persianTranslation: "من به دنبال یک آپارتمان جدید هستم، چون آپارتمان قدیمی‌ام خیلی کوچک است. پیدا کردن چیز خوب خیلی سخت است. دیروز من یک آپارتمان را بازدید کردم. دو اتاق و یک بالکن داشت. اما متأسفانه اجاره‌اش خیلی بالا بود. من باید به جستجو ادامه دهم."
    },
    { 
      germanTitle: "Ein Gespräch mit den Nachbarn", 
      persianTitle: "گفتگو با همسایه‌ها",
      germanStory: "Gestern habe ich meine neuen Nachbarn im Treppenhaus getroffen. Sie sind gerade erst eingezogen. Wir haben uns kurz unterhalten. Sie heißen Schmidt und kommen aus Hamburg. Sie waren sehr sympathisch. Ich habe sie für nächste Woche auf einen Kaffee eingeladen.",
      persianTranslation: "دیروز من همسایه‌های جدیدم را در راه‌پله ملاقات کردم. آنها به تازگی اسباب‌کشی کرده‌اند. ما کوتاه با هم صحبت کردیم. نام آنها اشمیت است و از هامبورگ می‌آیند. آنها بسیار خوش‌برخورد بودند. من آنها را برای هفته آینده به یک قهوه دعوت کردم."
    },
    { 
      germanTitle: "Ein Fest in Deutschland", 
      persianTitle: "یک جشن در آلمان",
      germanStory: "Letzten Monat war ich auf dem Oktoberfest in München. Es ist ein sehr großes und berühmtes Fest. Viele Leute tragen traditionelle Kleidung wie Dirndl und Lederhosen. Es gibt riesige Zelte, in denen man Bier trinken und Hähnchen essen kann. Die Atmosphäre war unglaublich.",
      persianTranslation: "ماه گذشته من در جشن اکتبر در مونیخ بودم. این یک جشن بسیار بزرگ و معروف است. بسیاری از مردم لباس‌های سنتی مانند دیرندل و لدرهوزن می‌پوشند. چادرهای غول‌پیکری وجود دارد که در آنها می‌توان آبجو نوشید و مرغ خورد. جو فوق‌العاده بود."
    },
    { 
      germanTitle: "Auf dem Bahnhof", 
      persianTitle: "در ایستگاه قطار",
      germanStory: "Ich musste heute Morgen einen Freund vom Bahnhof abholen. Sein Zug hatte leider 20 Minuten Verspätung. Ich habe auf einer Bank gewartet und die Anzeigetafel beobachtet. Als der Zug endlich ankam, war die Freude groß. Wir haben uns lange nicht gesehen.",
      persianTranslation: "امروز صبح باید دوستی را از ایستگاه قطار می‌آوردم. قطارش متأسفانه ۲۰ دقیقه تأخیر داشت. من روی یک نیمکت منتظر ماندم و تابلوی اعلانات را تماشا کردم. وقتی قطار بالاخره رسید، شادی بزرگی بود. ما مدت زیادی بود که همدیگر را ندیده بودیم."
    },
    { 
      germanTitle: "Sport und Fitness", 
      persianTitle: "ورزش و تناسب اندام",
      germanStory: "Ich versuche, dreimal pro Woche Sport zu machen. Am Montag gehe ich laufen im Park. Am Mittwoch besuche ich einen Yogakurs. Und am Freitag gehe ich ins Fitnessstudio, um Krafttraining zu machen. Sport hilft mir, fit zu bleiben und den Kopf freizubekommen.",
      persianTranslation: "من سعی می‌کنم سه بار در هفته ورزش کنم. دوشنبه‌ها در پارک می‌دوم. چهارشنبه‌ها در یک کلاس یوگا شرکت می‌کنم. و جمعه‌ها به باشگاه بدنسازی می‌روم تا تمرینات قدرتی انجام دهم. ورزش به من کمک می‌کند تا خوش‌فرم بمانم و ذهنم را آزاد کنم."
    },
    { germanTitle: "Eine Party planen", persianTitle: "برنامه‌ریزی یک مهمانی",
      germanStory: "Für meinen Geburtstag möchte ich eine Party organisieren. Zuerst muss ich eine Gästeliste schreiben und Einladungen verschicken. Dann muss ich überlegen, was es zu essen und zu trinken gibt. Ich werde eine Playlist mit guter Musik erstellen. Ich hoffe, alle meine Freunde haben Zeit zu kommen.",
      persianTranslation: "برای تولدم می‌خواهم یک مهمانی ترتیب دهم. ابتدا باید یک لیست مهمان بنویسم و دعوت‌نامه‌ها را بفرستم. سپس باید فکر کنم چه چیزی برای خوردن و نوشیدن وجود دارد. من یک لیست پخش با موسیقی خوب درست خواهم کرد. امیدوارم همه دوستانم وقت داشته باشند بیایند."
    },
    { germanTitle: "Ein unvergesslicher Ausflug", persianTitle: "یک گردش فراموش‌نشدنی",
      germanStory: "Letzten Sommer haben wir einen Ausflug zu einem Schloss gemacht. Das Schloss stand auf einem hohen Berg. Wir mussten eine Stunde wandern, um dorthin zu kommen. Die Aussicht von oben war atemberaubend. Wir haben viele Fotos gemacht. Es war ein perfekter Tag.",
      persianTranslation: "تابستان گذشته ما به یک قلعه سفر کردیم. قلعه روی یک کوه بلند قرار داشت. ما باید یک ساعت پیاده‌روی می‌کردیم تا به آنجا برسیم. منظره از بالا نفس‌گیر بود. ما عکس‌های زیادی گرفتیم. این یک روز عالی بود."
    },
    { germanTitle: "Ein Problem mit dem Computer", persianTitle: "مشکلی با کامپیوتر",
      germanStory: "Mein Computer funktioniert seit gestern nicht mehr richtig. Er ist sehr langsam und stürzt oft ab. Ich habe versucht, ihn neu zu starten, aber das hat nicht geholfen. Ich kenne mich nicht gut mit Technik aus. Wahrscheinlich muss ich ihn zu einem Experten bringen.",
      persianTranslation: "کامپیوتر من از دیروز به درستی کار نمی‌کند. خیلی کند است و اغلب از کار می‌افتد. من سعی کردم آن را دوباره راه‌اندازی کنم، اما این کمکی نکرد. من از تکنولوژی چیز زیادی نمی‌دانم. احتمالاً باید آن را پیش یک متخصص ببرم."
    },
    { germanTitle: "Ein Besuch im Museum", persianTitle: "بازدید از موزه",
      germanStory: "Am Wochenende war ich im Kunstmuseum. Es gab eine Sonderausstellung mit Bildern von Vincent van Gogh. Ich fand die Bilder sehr beeindruckend, besonders die leuchtenden Farben. Ich bin fast drei Stunden durch das Museum gelaufen. Es hat sich wirklich gelohnt.",
      persianTranslation: "آخر هفته من در موزه هنر بودم. یک نمایشگاه ویژه با نقاشی‌های ونسان ون گوگ وجود داشت. من نقاشی‌ها را بسیار تأثیرگذار یافتم، به خصوص رنگ‌های درخشان را. من تقریباً سه ساعت در موزه قدم زدم. واقعاً ارزشش را داشت."
    },
    { germanTitle: "Die Wegbeschreibung", persianTitle: "آدرس دادن",
      germanStory: "Gestern hat mich ein Tourist nach dem Weg zum Rathaus gefragt. Er sprach nur Englisch. Ich habe versucht, ihm den Weg zu erklären: 'Gehen Sie geradeaus bis zur zweiten Kreuzung, dann biegen Sie links ab. Das Rathaus ist dann auf der rechten Seite.' Ich hoffe, er hat es gefunden.",
      persianTranslation: "دیروز یک توریست از من مسیر رسیدن به شهرداری را پرسید. او فقط انگلیسی صحبت می‌کرد. من سعی کردم مسیر را برایش توضیح دهم: «مستقیم تا تقاطع دوم بروید، سپس به چپ بپیچید. شهرداری آنگاه در سمت راست خواهد بود.» امیدوارم او آن را پیدا کرده باشد."
    },
    { germanTitle: "Ein kleines Missgeschick", persianTitle: "یک اتفاق ناگوار کوچک",
      germanStory: "Heute Morgen ist mir ein kleines Missgeschick passiert. Ich habe meinen Kaffee auf meinem weißen Hemd verschüttet. Es war ein großer brauner Fleck. Ich musste mich schnell umziehen, bevor ich zur Arbeit ging. Solche Tage gibt es manchmal.",
      persianTranslation: "امروز صبح یک اتفاق ناگوار کوچک برایم افتاد. من قهوه‌ام را روی پیراهن سفیدم ریختم. یک لکه بزرگ قهوه‌ای بود. من باید سریع لباس عوض می‌کردم قبل از اینکه به سر کار بروم. گاهی چنین روزهایی هم وجود دارد."
    },
    { germanTitle: "Eine Diskussion über einen Film", persianTitle: "بحث در مورد یک فیلم",
      germanStory: "Nach dem Kino haben mein Freund und ich lange über den Film diskutiert. Ich fand den Film fantastisch, aber er fand ihn langweilig. Wir hatten unterschiedliche Meinungen über die Schauspieler und das Ende. Es war eine interessante Diskussion.",
      persianTranslation: "بعد از سینما من و دوستم مدت زیادی درباره فیلم بحث کردیم. من فیلم را فوق‌العاده یافتم، اما او آن را خسته‌کننده یافت. ما نظرات متفاوتی درباره بازیگران و پایان فیلم داشتیم. این یک بحث جالب بود."
    },
    { germanTitle: "Ein typischer Arbeitstag", persianTitle: "یک روز کاری معمولی",
      germanStory: "Mein Arbeitstag beginnt um 9 Uhr. Zuerst lese ich meine E-Mails. Dann habe ich oft Besprechungen mit Kollegen. Mittags esse ich in der Kantine. Am Nachmittag arbeite ich an meinen Projekten. Um 17 Uhr habe ich Feierabend und fahre nach Hause.",
      persianTranslation: "روز کاری من ساعت ۹ شروع می‌شود. ابتدا ایمیل‌هایم را می‌خوانم. سپس اغلب با همکارانم جلسه دارم. ظهر در غذاخوری ناهار می‌خورم. بعد از ظهر روی پروژه‌هایم کار می‌کنم. ساعت ۱۷ کارم تمام می‌شود و به خانه می‌روم."
    },
    { germanTitle: "Ein Geschenk für einen Freund auswählen", persianTitle: "انتخاب هدیه برای یک دوست",
      germanStory: "Mein bester Freund hat nächste Woche Geburtstag. Ich weiß nicht, was ich ihm schenken soll. Er liest gerne, also ist vielleicht ein Buch eine gute Idee. Oder vielleicht ein Gutschein für ein Konzert? Es ist schwer, das perfekte Geschenk zu finden.",
      persianTranslation: "بهترین دوستم هفته آینده تولد دارد. من نمی‌دانم چه چیزی به او هدیه بدهم. او دوست دارد کتاب بخواند، پس شاید یک کتاب ایده خوبی باشد. یا شاید یک کوپن برای یک کنسرت؟ پیدا کردن هدیه عالی سخت است."
    },
    { germanTitle: "Die vier Jahreszeiten in meiner Heimat", persianTitle: "چهار فصل در کشور من",
      germanStory: "In meiner Heimat gibt es vier sehr unterschiedliche Jahreszeiten. Die Sommer sind heiß und trocken. Im Herbst wird es kühler und die Blätter der Bäume werden bunt. Die Winter sind kalt und es schneit oft. Im Frühling wird alles wieder grün. Jede Jahreszeit hat ihren eigenen Charme.",
      persianTranslation: "در کشور من چهار فصل بسیار متفاوت وجود دارد. تابستان‌ها گرم و خشک هستند. در پاییز هوا خنک‌تر می‌شود و برگ‌های درختان رنگارنگ می‌شوند. زمستان‌ها سرد هستند و اغلب برف می‌بارد. در بهار همه چیز دوباره سبز می‌شود. هر فصلی جذابیت خاص خود را دارد."
    },
    { germanTitle: "Ein Verkehrsunfall", persianTitle: "یک تصادف رانندگی",
      germanStory: "Auf dem Weg zur Arbeit sah ich einen kleinen Verkehrsunfall. Ein Auto war einem anderen hinten aufgefahren. Glücklicherweise schien niemand verletzt zu sein. Die Fahrer standen auf der Straße und diskutierten. Sofort bildete sich ein langer Stau.",
      persianTranslation: "در راه سر کار یک تصادف رانندگی کوچک دیدم. یک ماشین از پشت به دیگری زده بود. خوشبختانه به نظر می‌رسید کسی آسیب ندیده است. رانندگان در خیابان ایستاده بودند و بحث می‌کردند. فوراً یک ترافیک طولانی ایجاد شد."
    },
    { germanTitle: "Ein Vorstellungsgespräch für einen Nebenjob", persianTitle: "مصاحبه برای یک کار پاره‌وقت",
      germanStory: "Ich hatte heute ein Vorstellungsgespräch für einen Nebenjob in einem Buchladen. Ich war ziemlich nervös. Der Manager hat mir viele Fragen gestellt, zum Beispiel warum ich dort arbeiten möchte. Ich glaube, das Gespräch lief ganz gut. Nächste Woche bekomme ich eine Antwort.",
      persianTranslation: "امروز من یک مصاحبه برای یک کار پاره‌وقت در یک کتابفروشی داشتم. من خیلی مضطرب بودم. مدیر سوالات زیادی از من پرسید، مثلاً چرا می‌خواهم آنجا کار کنم. فکر می‌کنم مصاحبه خیلی خوب پیش رفت. هفته آینده جواب می‌گیرم."
    },
    { germanTitle: "Kleidung für verschiedene Anlässe", persianTitle: "لباس برای مناسبت‌های مختلف",
      germanStory: "Man trägt nicht immer die gleiche Kleidung. Zur Arbeit ziehe ich oft eine Bluse und eine schicke Hose an. Am Wochenende trage ich lieber bequeme Jeans und ein T-Shirt. Wenn ich zu einer Hochzeit gehe, trage ich ein elegantes Kleid. Für jeden Anlass gibt es die passende Kleidung.",
      persianTranslation: "آدم همیشه لباس یکسانی نمی‌پوشد. برای سر کار من اغلب یک بلوز و یک شلوار شیک می‌پوشم. در آخر هفته ترجیح می‌دهم شلوار جین راحت و یک تی‌شرت بپوشم. وقتی به عروسی می‌روم، یک لباس مجلسی می‌پوشم. برای هر مناسبتی لباس مناسب وجود دارد."
    },
    { germanTitle: "Ein Streit und eine Versöhnung", persianTitle: "یک دعوا و یک آشتی",
      germanStory: "Letzte Woche hatte ich einen Streit mit meiner besten Freundin. Wir waren beide wütend und haben nicht mehr miteinander gesprochen. Nach ein paar Tagen habe ich sie angerufen. Wir haben über das Problem geredet und uns entschuldigt. Jetzt ist alles wieder gut zwischen uns.",
      persianTranslation: "هفته گذشته من با بهترین دوستم دعوا کردم. ما هر دو عصبانی بودیم و دیگر با هم صحبت نمی‌کردیم. بعد از چند روز به او زنگ زدم. ما درباره مشکل صحبت کردیم و عذرخواهی کردیم. حالا همه چیز دوباره بین ما خوب است."
    },
    { germanTitle: "Wie ich Deutsch lerne", persianTitle: "چگونه آلمانی یاد می‌گیرم",
      germanStory: "Ich lerne Deutsch seit einem Jahr. Ich besuche einen Sprachkurs und mache jeden Tag meine Hausaufgaben. Außerdem versuche ich, deutsche Filme zu schauen und deutsche Musik zu hören. Es ist nicht immer einfach, aber es macht mir Spaß, Fortschritte zu sehen.",
      persianTranslation: "من یک سال است که آلمانی یاد می‌گیرم. من در یک کلاس زبان شرکت می‌کنم و هر روز تکالیفم را انجام می‌دههم. علاوه بر این، سعی می‌کنم فیلم‌های آلمانی تماشا کنم و به موسیقی آلمانی گوش دهم. همیشه آسان نیست، اما دیدن پیشرفت برایم لذت‌بخش است."
    },
    { germanTitle: "Ein traditionelles Gericht aus meinem Land", persianTitle: "یک غذای سنتی از کشورم",
      germanStory: "Ein sehr bekanntes Gericht aus meiner Heimat ist Ghorme Sabzi. Es ist ein Eintopf aus verschiedenen Kräutern, Bohnen und Fleisch. Man isst es normalerweise mit Reis. Die Zubereitung dauert mehrere Stunden, aber das Ergebnis ist köstlich. Jeder liebt es.",
      persianTranslation: "یک غذای بسیار معروف از کشور من قورمه سبزی است. این یک خورش از سبزیجات مختلف، لوبیا و گوشت است. معمولاً آن را با برنج می‌خورند. تهیه آن چندین ساعت طول می‌کشد، اما نتیجه‌اش لذیذ است. همه آن را دوست دارند."
    },
    { germanTitle: "Eine E-Mail an den Vermieter", persianTitle: "ایمیلی به صاحب‌خانه",
      germanStory: "Ich musste meinem Vermieter eine E-Mail schreiben, weil die Heizung in meiner Wohnung kaputt ist. Ich habe das Problem genau beschrieben und gefragt, wann er einen Handwerker schicken kann. Ich hoffe, er antwortet schnell, denn es wird langsam kalt in der Wohnung.",
      persianTranslation: "من باید به صاحب‌خانه‌ام یک ایمیل می‌نوشتم، چون شوفاژ آپارتمانم خراب است. من مشکل را دقیقاً توصیف کردم و پرسیدم کی می‌تواند یک تعمیرکار بفرستد. امیدوارم او سریع جواب دهد، چون آپارتمان کم‌کم سرد می‌شود."
    },
    { germanTitle: "Öffentliche Verkehrsmittel benutzen", persianTitle: "استفاده از وسایل نقلیه عمومی",
      germanStory: "In meiner Stadt benutze ich oft öffentliche Verkehrsmittel. Ich fahre mit dem Bus zur Arbeit und mit der U-Bahn ins Stadtzentrum. Das ist billiger und umweltfreundlicher als ein eigenes Auto. Manchmal sind die Busse und Bahnen sehr voll, aber meistens ist es praktisch.",
      persianTranslation: "در شهرم من اغلب از وسایل نقلیه عمومی استفاده می‌کنم. من با اتوبوس به سر کار می‌روم و با مترو به مرکز شهر. این ارزان‌تر و سازگارتر با محیط زیست از داشتن ماشین شخصی است. گاهی اتوبوس‌ها و قطارها خیلی شلوغ هستند، اما بیشتر اوقات کاربردی است."
    },
    { germanTitle: "Eine Fahrradtour", persianTitle: "یک تور دوچرخه‌سواری",
      germanStory: "Am Samstag habe ich mit Freunden eine lange Fahrradtour gemacht. Wir sind an einem Fluss entlang gefahren. Das Wetter war sonnig und warm. Wir hatten ein Picknick dabei und haben mittags eine Pause gemacht. Insgesamt sind wir 40 Kilometer gefahren. Am Abend war ich müde, aber glücklich.",
      persianTranslation: "روز شنبه من با دوستانم یک تور دوچرخه‌سواری طولانی انجام دادم. ما در امتداد یک رودخانه راندیم. هوا آفتابی و گرم بود. ما یک پیک‌نیک همراه داشتیم و ظهر استراحت کردیم. در مجموع ما ۴۰ کیلومتر راندیم. عصر خسته اما خوشحال بودم."
    },
    { germanTitle: "Ein Bankgespräch", persianTitle: "گفتگو در بانک",
      germanStory: "Ich musste heute zur Bank gehen, um ein Konto zu eröffnen. Ein Bankangestellter hat mir geholfen. Ich musste viele Formulare ausfüllen und meinen Ausweis zeigen. Er hat mir alles geduldig erklärt. Nach einer halben Stunde war alles erledigt.",
      persianTranslation: "امروز باید برای باز کردن یک حساب به بانک می‌رفتم. یک کارمند بانک به من کمک کرد. من باید فرم‌های زیادی را پر می‌کردم و کارت شناسایی‌ام را نشان می‌دادم. او همه چیز را با حوصله برایم توضیح داد. بعد از نیم ساعت همه کارها انجام شد."
    },
  ],
  B1: [
    { 
      germanTitle: "Eine lustige Kindheitserinnerung", 
      persianTitle: "یک خاطره خنده‌دار از دوران کودکی", 
      audioUrl: "https://storage.googleapis.com/audio-samples-for-app/b1-story-1.mp3",
      germanStory: "Ich erinnere mich an einen Tag, als ich ungefähr acht Jahre alt war. Meine Familie und ich waren im Zirkus. Ein Clown kam zu mir und wollte mir einen Ballon geben. Ich hatte aber ein bisschen Angst vor ihm, weil er so bunte Haare hatte. Ich rannte weg und versteckte mich hinter meinem Vater. Alle haben gelacht, und heute lache ich auch darüber.",
      persianTranslation: "من روزی را به یاد می‌آورم که تقریباً هشت ساله بودم. من و خانواده‌ام در سیرک بودیم. یک دلقک به سمت من آمد و می‌خواست به من یک بادکنک بدهد. اما من کمی از او می‌ترسیدم، چون موهای خیلی رنگارنگی داشت. من فرار کردم و پشت پدرم قایم شدم. همه خندیدند، و امروز من هم به آن می‌خندم."
    },
    { 
      germanTitle: "Umweltschutz in der Stadt", 
      persianTitle: "حفاظت از محیط زیست در شهر", 
      audioUrl: "https://storage.googleapis.com/audio-samples-for-app/b1-story-2.mp3",
      germanStory: "In unserer Stadt wird Umweltschutz immer wichtiger. Viele Menschen versuchen, ihren Müll zu trennen und weniger Plastik zu benutzen. Außerdem gibt es immer mehr Fahrradwege, damit die Leute ihr Auto stehen lassen. Ich finde diese Entwicklung sehr positiv, obwohl es natürlich immer noch viel zu tun gibt.",
      persianTranslation: "در شهر ما حفاظت از محیط زیست روز به روز مهم‌تر می‌شود. بسیاری از مردم سعی می‌کنند زباله‌های خود را تفکیک کنند و پلاستیک کمتری استفاده کنند. علاوه بر این، مسیرهای دوچرخه‌سواری بیشتری وجود دارد تا مردم ماشین خود را رها کنند. من این تحول را بسیار مثبت می‌دانم، هرچند که البته هنوز کارهای زیادی برای انجام دادن وجود دارد."
    },
    { 
      germanTitle: "Ein Bewerbungsgespräch", 
      persianTitle: "یک مصاحبه شغلی",
      germanStory: "Letzte Woche hatte ich ein Bewerbungsgespräch für eine Stelle als Projektmanager. Ich habe mich gut vorbereitet und Informationen über die Firma gesammelt. Während des Gesprächs musste ich von meinen bisherigen Erfahrungen berichten und erklären, warum ich für die Stelle geeignet bin. Obwohl ich nervös war, glaube ich, einen guten Eindruck hinterlassen zu haben.",
      persianTranslation: "هفته گذشته من یک مصاحبه شغلی برای موقعیت مدیر پروژه داشتم. من به خوبی آماده شدم و اطلاعاتی درباره شرکت جمع‌آوری کردم. در طول مصاحبه باید از تجربیات قبلی خود گزارش می‌دادم و توضیح می‌دادم که چرا برای این موقعیت مناسب هستم. اگرچه مضطرب بودم، اما معتقدم که تأثیر خوبی از خود به جای گذاشتم."
    },
    { 
      germanTitle: "Die Vorteile des Sprachenlernens", 
      persianTitle: "مزایای یادگیری زبان",
      germanStory: "Das Erlernen einer neuen Sprache bietet zahlreiche Vorteile. Es verbessert nicht nur die kognitiven Fähigkeiten, sondern eröffnet auch neue berufliche Möglichkeiten. Darüber hinaus ermöglicht es einem, andere Kulturen besser zu verstehen und mit Menschen aus aller Welt zu kommunizieren. Für mich persönlich ist es eine sehr bereichernde Erfahrung.",
      persianTranslation: "یادگیری یک زبان جدید مزایای بی‌شماری دارد. این کار نه تنها توانایی‌های شناختی را بهبود می‌بخشد، بلکه فرصت‌های شغلی جدیدی را نیز باز می‌کند. علاوه بر این، به فرد امکان می‌دهد تا فرهنگ‌های دیگر را بهتر درک کند و با مردم از سراسر جهان ارتباط برقرار کند. برای من شخصاً، این یک تجربه بسیار غنی‌کننده است."
    },
    { 
      germanTitle: "Eine Reise planen", 
      persianTitle: "برنامه‌ریزی برای یک سفر",
      germanStory: "Nächsten Sommer möchte ich eine Rucksackreise durch Südostasien machen. Die Planung dafür ist ziemlich aufwendig. Zuerst muss ich eine Route festlegen und Flüge buchen. Dann informiere ich mich über Visa-Bestimmungen und notwendige Impfungen. Obwohl es viel Arbeit ist, steigt meine Vorfreude mit jedem Planungsschritt.",
      persianTranslation: "تابستان آینده می‌خواهم یک سفر کوله‌پشتی در جنوب شرقی آسیا انجام دهم. برنامه‌ریزی برای آن بسیار زمان‌بر است. ابتدا باید یک مسیر تعیین کنم و پروازها را رزرو کنم. سپس درباره مقررات ویزا و واکسن‌های لازم تحقیق می‌کنم. اگرچه کار زیادی است، اما هیجان من با هر مرحله از برنامه‌ریزی افزایش می‌یابد."
    },
    { 
      germanTitle: "Ein kultureller Unterschied", 
      persianTitle: "یک تفاوت فرهنگی",
      germanStory: "Als ich das erste Mal in Deutschland war, war ich überrascht, wie direkt die Menschen sind. In meiner Kultur ist es üblich, Kritik indirekt zu äußern. Hier sagen die Leute oft genau, was sie denken. Anfangs fand ich das etwas unhöflich, aber mittlerweile schätze ich diese Ehrlichkeit.",
      persianTranslation: "وقتی برای اولین بار در آلمان بودم، از اینکه مردم چقدر رک هستند شگفت‌زده شدم. در فرهنگ من، معمول است که انتقاد به طور غیرمستقیم بیان شود. اینجا مردم اغلب دقیقاً آنچه را که فکر می‌کنند می‌گویند. در ابتدا این را کمی بی‌ادبانه یافتم، اما اکنون این صداقت را قدر می‌دانم."
    },
    { 
      germanTitle: "Das Leben in der Stadt vs. auf dem Land", 
      persianTitle: "زندگی در شهر در مقابل روستا",
      germanStory: "Die Entscheidung zwischen Stadt- und Landleben ist sehr persönlich. Die Stadt bietet viele kulturelle Angebote und berufliche Möglichkeiten, ist aber oft laut und hektisch. Auf dem Land genießt man Ruhe und Natur, hat aber längere Wege zur Arbeit oder zum Einkaufen. Ich persönlich bevorzuge die Vielfalt der Stadt.",
      persianTranslation: "تصمیم بین زندگی شهری و روستایی بسیار شخصی است. شهر امکانات فرهنگی و فرصت‌های شغلی زیادی را ارائه می‌دهد، اما اغلب پر سر و صدا و شلوغ است. در روستا از آرامش و طبیعت لذت می‌بری، اما مسیرهای طولانی‌تری برای کار یا خرید داری. من شخصاً تنوع شهر را ترجیح می‌دهم."
    },
    { 
      germanTitle: "Ein interessantes Buch", 
      persianTitle: "یک کتاب جالب",
      germanStory: "Ich habe gerade ein Buch über die Geschichte der Menschheit gelesen. Es war faszinierend zu erfahren, wie sich unsere Gesellschaft über Jahrtausende entwickelt hat. Das Buch hat mir eine völlig neue Perspektive auf viele Dinge gegeben, die ich für selbstverständlich hielt. Ich kann es jedem nur empfehlen.",
      persianTranslation: "من به تازگی کتابی درباره تاریخ بشریت خوانده‌ام. فهمیدن اینکه جامعه ما چگونه در طول هزاران سال توسعه یافته، شگفت‌انگیز بود. این کتاب به من دیدگاه کاملاً جدیدی در مورد بسیاری از چیزهایی داد که من آنها را بدیهی می‌دانستم. من فقط می‌توانم آن را به همه توصیه کنم."
    },
    { 
      germanTitle: "Freunde finden in einem neuen Land", 
      persianTitle: "پیدا کردن دوست در یک کشور جدید",
      germanStory: "In einem neuen Land Freunde zu finden, kann eine Herausforderung sein. Sprachbarrieren und kulturelle Unterschiede erschweren es anfangs. Ich habe gute Erfahrungen damit gemacht, Vereinen beizutreten oder an lokalen Veranstaltungen teilzunehmen. So lernt man Menschen mit ähnlichen Interessen kennen und es ist einfacher, ins Gespräch zu kommen.",
      persianTranslation: "پیدا کردن دوست در یک کشور جدید می‌تواند یک چالش باشد. موانع زبانی و تفاوت‌های فرهنگی در ابتدا کار را دشوار می‌کنند. من تجربه خوبی با پیوستن به انجمن‌ها یا شرکت در رویدادهای محلی داشته‌ام. اینگونه با افرادی با علایق مشابه آشنا می‌شوی و شروع به صحبت کردن آسان‌تر است."
    },
    { 
      germanTitle: "Digitalisierung im Alltag", 
      persianTitle: "دیجیتالی شدن در زندگی روزمره",
      germanStory: "Die Digitalisierung hat unseren Alltag stark verändert. Wir können online einkaufen, Bankgeschäfte erledigen und mit Freunden auf der ganzen Welt in Kontakt bleiben. Einerseits macht das vieles einfacher. Andererseits besteht die Gefahr, dass der persönliche Kontakt verloren geht und man zu viel Zeit vor Bildschirmen verbringt.",
      persianTranslation: "دیجیتالی شدن زندگی روزمره ما را به شدت تغییر داده است. ما می‌توانیم آنلاین خرید کنیم، کارهای بانکی را انجام دهیم و با دوستانمان در سراسر جهان در تماس باشیم. از یک طرف، این بسیاری از کارها را آسان‌تر می‌کند. از طرف دیگر، این خطر وجود دارد که تماس شخصی از بین برود و زمان زیادی را جلوی صفحه نمایش بگذرانیم."
    },
  ],
  B2: [
    { 
      germanTitle: "Die Herausforderungen des Studiums im Ausland", 
      persianTitle: "چالش‌های تحصیل در خارج از کشور", 
      audioUrl: "https://storage.googleapis.com/audio-samples-for-app/b2-story-1.mp3",
      germanStory: "Ein Studium im Ausland ist zweifellos eine bereichernde Erfahrung, aber es bringt auch zahlreiche Herausforderungen mit sich. Zunächst muss man sich an ein neues akademisches System gewöhnen, das sich oft stark vom Heimatland unterscheidet. Zudem stellt die Sprachbarriere anfangs eine große Hürde dar, nicht nur im Hörsaal, sondern auch im Alltag. Man muss lernen, selbstständig zu sein, denn das soziale Netz von Familie und Freunden fehlt. Trotz dieser Schwierigkeiten fördert es die persönliche Entwicklung ungemein.",
      persianTranslation: "تحصیل در خارج از کشور بدون شک تجربه‌ای غنی‌کننده است، اما چالش‌های متعددی را نیز به همراه دارد. ابتدا، فرد باید به یک سیستم آکادمیک جدید عادت کند که اغلب تفاوت زیادی با کشور مبدأ دارد. علاوه بر این، مانع زبانی در ابتدا یک مشکل بزرگ است، نه تنها در کلاس درس، بلکه در زندگی روزمره. فرد باید یاد بگیرد که مستقل باشد، زیرا شبکه اجتماعی خانواده و دوستان وجود ندارد. با وجود این مشکلات، این تجربه رشد شخصی را به طور فوق‌العاده‌ای تقویت می‌کند."
    },
    { 
      germanTitle: "Ein gesellschaftliches Problem diskutieren", 
      persianTitle: "بحث در مورد یک مشکل اجتماعی", 
      audioUrl: "https://storage.googleapis.com/audio-samples-for-app/b2-story-2.mp3",
      germanStory: "Ein drängendes gesellschaftliches Problem unserer Zeit ist die zunehmende soziale Ungleichheit. Während ein kleiner Teil der Bevölkerung über enormen Reichtum verfügt, kämpfen viele Menschen mit finanziellen Schwierigkeiten. Dies führt nicht nur zu persönlichen Härten, sondern gefährdet auch den sozialen Zusammenhalt. Meiner Meinung nach sind politische Maßnahmen wie eine gerechtere Steuerpolitik und Investitionen in Bildung dringend erforderlich, um dieser Entwicklung entgegenzuwirken.",
      persianTranslation: "یک مشکل اجتماعی فوری زمان ما، نابرابری اجتماعی روزافزون است. در حالی که بخش کوچکی از جمعیت دارای ثروت هنگفتی هستند، بسیاری از مردم با مشکلات مالی دست و پنجه نرم می‌کنند. این نه تنها به سختی‌های شخصی منجر می‌شود، بلکه انسجام اجتماعی را نیز به خطر می‌اندازد. به نظر من، اقدامات سیاسی مانند سیاست مالیاتی عادلانه‌تر و سرمایه‌گذاری در آموزش برای مقابله با این روند فوراً ضروری است."
    },
    { 
      germanTitle: "Die Rolle der Medien in der modernen Welt", 
      persianTitle: "نقش رسانه‌ها در دنیای مدرن",
      germanStory: "Die Medien spielen in der heutigen Gesellschaft eine ambivalente Rolle. Einerseits sind sie als 'vierte Gewalt' unerlässlich für die Kontrolle der Politik und die Information der Bürger. Andererseits können sie durch die Verbreitung von Falschinformationen und die Schaffung von Filterblasen die öffentliche Meinung manipulieren und die Gesellschaft spalten. Es ist daher entscheidend, Medienkompetenz zu fördern, damit die Bürger Nachrichten kritisch bewerten können.",
      persianTranslation: "رسانه‌ها در جامعه امروز نقشی دوگانه ایفا می‌کنند. از یک سو، به عنوان «قدرت چهارم» برای کنترل سیاست و اطلاع‌رسانی به شهروندان ضروری هستند. از سوی دیگر، می‌توانند با انتشار اطلاعات نادرست و ایجاد حباب‌های فیلتر، افکار عمومی را دستکاری کرده و جامعه را دچار تفرقه کنند. بنابراین، ترویج سواد رسانه‌ای برای اینکه شهروندان بتوانند اخبار را به طور انتقادی ارزیابی کنند، بسیار حیاتی است."
    },
    { 
      germanTitle: "Ein historisches Ereignis in Deutschland", 
      persianTitle: "یک رویداد تاریخی در آلمان",
      germanStory: "Der Fall der Berliner Mauer am 9. November 1989 ist zweifellos eines der bedeutendsten Ereignisse der jüngeren deutschen Geschichte. Er markierte das Ende der Teilung Deutschlands und des Kalten Krieges in Europa. Dieses Ereignis war das Ergebnis monatelanger friedlicher Proteste der DDR-Bürger und symbolisiert den Sieg der Freiheit über die Unterdrückung. Die Bilder von Menschen, die auf der Mauer tanzten, sind unvergesslich und bewegen mich bis heute.",
      persianTranslation: "فروپاشی دیوار برلین در ۹ نوامبر ۱۹۸۹ بدون شک یکی از مهم‌ترین رویدادهای تاریخ معاصر آلمان است. این رویداد پایان تقسیم آلمان و جنگ سرد در اروپا را رقم زد. این رویداد نتیجه ماه‌ها اعتراضات مسالمت‌آمیز شهروندان آلمان شرقی بود و نماد پیروزی آزادی بر سرکوب است. تصاویر مردمی که روی دیوار می‌رقصیدند، فراموش‌نشدنی هستند و تا به امروز مرا تحت تأثیر قرار می‌دهند."
    },
    { 
      germanTitle: "Die Zukunft der Arbeit", 
      persianTitle: "آینده کار",
      germanStory: "Die Arbeitswelt befindet sich durch Automatisierung und künstliche Intelligenz in einem tiefgreifenden Wandel. Viele repetitive Tätigkeiten werden zukünftig von Maschinen übernommen. Dies birgt sowohl Risiken als auch Chancen. Während einige Arbeitsplätze verloren gehen, entstehen neue, die Kreativität und soziale Kompetenzen erfordern. Um diesen Wandel erfolgreich zu gestalten, sind Investitionen in lebenslanges Lernen und die Anpassung der Bildungssysteme von entscheidender Bedeutung.",
      persianTranslation: "دنیای کار به دلیل اتوماسیون و هوش مصنوعی در حال تحولی عمیق است. بسیاری از فعالیت‌های تکراری در آینده توسط ماشین‌ها انجام خواهند شد. این هم خطرات و هم فرصت‌هایی را به همراه دارد. در حالی که برخی مشاغل از بین می‌روند، مشاغل جدیدی که نیازمند خلاقیت و مهارت‌های اجتماعی هستند، ایجاد می‌شوند. برای شکل‌دهی موفقیت‌آمیز این تحول، سرمایه‌گذاری در یادگیری مادام‌العمر و تطبیق نظام‌های آموزشی از اهمیت حیاتی برخوردار است."
    },
    { 
      germanTitle: "Eine Kritik zu einem Film schreiben", 
      persianTitle: "نوشتن نقد برای یک فیلم",
      germanStory: "Der Film 'Das Leben der Anderen' ist ein Meisterwerk des deutschen Kinos. Er beleuchtet eindringlich das Überwachungssystem der DDR und die moralischen Konflikte seiner Protagonisten. Die schauspielerischen Leistungen, insbesondere von Ulrich Mühe, sind herausragend und verleihen der Geschichte eine immense emotionale Tiefe. Der Film regt zum Nachdenken an und hallt noch lange nach. Meiner Ansicht nach ist er ein unverzichtbarer Beitrag zur Aufarbeitung der deutschen Geschichte.",
      persianTranslation: "فیلم «زندگی دیگران» یک شاهکار سینمای آلمان است. این فیلم به طرز نافذی سیستم نظارتی آلمان شرقی و درگیری‌های اخلاقی شخصیت‌های اصلی آن را روشن می‌کند. بازیگری‌ها، به ویژه از اولریش موهه، برجسته هستند و به داستان عمق عاطفی فوق‌العاده‌ای می‌بخشند. این فیلم به تفکر وامی‌دارد و تا مدت‌ها در ذهن باقی می‌ماند. به نظر من، این یک سهم ضروری در بازنگری تاریخ آلمان است."
    },
    { 
      germanTitle: "Traditionen und moderne Lebensstile", 
      persianTitle: "سنت‌ها و سبک‌های زندگی مدرن",
      germanStory: "In einer globalisierten Welt stehen Traditionen oft in einem Spannungsverhältnis zu modernen Lebensstilen. Während Traditionen Identität und Gemeinschaft stiften können, werden sie von manchen als einschränkend empfunden. Ich glaube, der Schlüssel liegt in einer ausgewogenen Synthese. Es ist wichtig, kulturelle Wurzeln zu bewahren, ohne sich dem Fortschritt und der individuellen Freiheit zu verschließen. Eine lebendige Kultur ist eine, die sich weiterentwickelt.",
      persianTranslation: "در دنیای جهانی شده، سنت‌ها اغلب در تضاد با سبک‌های زندگی مدرن قرار دارند. در حالی که سنت‌ها می‌توانند هویت و جامعه را ایجاد کنند، برخی آنها را محدودکننده می‌دانند. من معتقدم کلید در یک ترکیب متعادل نهفته است. مهم است که ریشه‌های فرهنگی را حفظ کنیم، بدون اینکه خود را به روی پیشرفت و آزادی فردی ببندیم. یک فرهنگ زنده، فرهنگی است که تکامل می‌یابد."
    },
    { 
      germanTitle: "Erneuerbare Energien", 
      persianTitle: "انرژی‌های تجدیدپذیر",
      germanStory: "Der Übergang zu erneuerbaren Energien wie Solar- und Windkraft ist eine der größten Herausforderungen des 21. Jahrhunderts. Er ist unerlässlich, um den Klimawandel zu bekämpfen und die Abhängigkeit von fossilen Brennstoffen zu reduzieren. Allerdings bringt die Energiewende auch Probleme mit sich, wie die Speicherung von Energie und den Netzausbau. Trotz dieser Hürden bin ich überzeugt, dass es keine Alternative zu einer nachhaltigen Energieversorgung gibt.",
      persianTranslation: "گذار به انرژی‌های تجدیدپذیر مانند انرژی خورشیدی و بادی یکی از بزرگترین چالش‌های قرن بیست و یکم است. این گذار برای مبارزه با تغییرات اقلیمی و کاهش وابستگی به سوخت‌های فسیلی ضروری است. با این حال، تحول انرژی مشکلاتی مانند ذخیره‌سازی انرژی و توسعه شبکه را نیز به همراه دارد. با وجود این موانع، من متقاعد شده‌ام که هیچ جایگزینی برای تأمین انرژی پایدار وجود ندارد."
    },
    { 
      germanTitle: "Ein Missverständnis und seine Lösung", 
      persianTitle: "یک سوءتفاهم و راه حل آن",
      germanStory: "Kürzlich gab es bei einem Teamprojekt ein gravierendes Missverständnis bezüglich der Zuständigkeiten. Dies führte zu Doppelarbeit und Frustration. Anstatt Schuldzuweisungen auszusprechen, beriefen wir ein Meeting ein, um die Situation zu klären. Durch offene Kommunikation und die klare Definition von Rollen konnten wir das Problem lösen und unsere Zusammenarbeit sogar verbessern. Es hat mir gezeigt, wie wichtig proaktive Kommunikation ist.",
      persianTranslation: "اخیراً در یک پروژه تیمی، یک سوءتفاهم جدی در مورد مسئولیت‌ها پیش آمد. این منجر به کار مضاعف و ناامیدی شد. به جای سرزنش کردن، ما یک جلسه برای روشن شدن وضعیت تشکیل دادیم. از طریق ارتباطات باز و تعریف روشن نقش‌ها، توانستیم مشکل را حل کنیم و حتی همکاری خود را بهبود بخشیم. این به من نشان داد که ارتباطات پیشگیرانه چقدر مهم است."
    },
    { 
      germanTitle: "Der Einfluss von Technologie auf soziale Beziehungen", 
      persianTitle: "تأثیر فناوری بر روابط اجتماعی",
      germanStory: "Technologie, insbesondere soziale Medien, hat die Art und Weise, wie wir soziale Beziehungen pflegen, revolutioniert. Einerseits ermöglicht sie uns, mit Menschen über große Entfernungen in Verbindung zu bleiben. Andererseits kann die ständige digitale Kommunikation zu einer Verflachung der Beziehungen führen, da tiefergehende, persönliche Interaktionen seltener werden. Es ist eine ständige Herausforderung, eine gesunde Balance zwischen der Online- und Offline-Welt zu finden.",
      persianTranslation: "فناوری، به ویژه رسانه‌های اجتماعی، نحوه حفظ روابط اجتماعی ما را متحول کرده است. از یک سو، به ما امکان می‌دهد با مردم در فواصل دور در ارتباط باشیم. از سوی دیگر، ارتباطات دیجیتال مداوم می‌تواند به سطحی شدن روابط منجر شود، زیرا تعاملات عمیق‌تر و شخصی کمتر می‌شوند. یافتن تعادل سالم بین دنیای آنلاین و آفلاین یک چالش همیشگی است."
    },
  ]
};

export const getTopicsForLevel = (level: Level): StoryTopic[] => {
    // Fill in the missing stories for B1 and B2 as they are not complete
    if (level === 'B1') {
        const b1Topics = predefinedTopics.B1;
        const fullB1Topics = [
            ...b1Topics,
            { germanTitle: "Die Bedeutung von Freundschaft", persianTitle: "اهمیت دوستی",
              germanStory: "Freundschaft ist ein fundamentaler Bestandteil des menschlichen Lebens. Echte Freunde bieten nicht nur emotionale Unterstützung in schwierigen Zeiten, sondern teilen auch die Freuden des Lebens. Eine gute Freundschaft basiert auf Vertrauen, gegenseitigem Respekt und Ehrlichkeit. In einer zunehmend individualisierten Gesellschaft ist der Wert solcher Beziehungen unschätzbar.",
              persianTranslation: "دوستی بخش اساسی زندگی انسان است. دوستان واقعی نه تنها در مواقع سخت حمایت عاطفی می‌کنند، بلکه در شادی‌های زندگی نیز شریک هستند. یک دوستی خوب بر اساس اعتماد، احترام متقابل و صداقت بنا شده است. در جامعه‌ای که به طور فزاینده‌ای فردگرا می‌شود، ارزش چنین روابطی غیرقابل تخمین است."
            },
            { germanTitle: "Ein Freiwilliges Soziales Jahr", persianTitle: "یک سال خدمات اجتماعی داوطلبانه",
              germanStory: "Nach der Schule entscheiden sich viele junge Menschen für ein Freiwilliges Soziales Jahr. Es bietet die Möglichkeit, praktische Erfahrungen in sozialen Einrichtungen zu sammeln und sich persönlich weiterzuentwickeln. Man lernt, Verantwortung zu übernehmen und bekommt Einblicke in andere Lebenswelten. Ich halte es für eine wertvolle Erfahrung, die den Horizont erweitert.",
              persianTranslation: "پس از مدرسه، بسیاری از جوانان یک سال خدمات اجتماعی داوطلبانه را انتخاب می‌کنند. این فرصتی برای کسب تجربیات عملی در موسسات اجتماعی و توسعه شخصی فراهم می‌کند. فرد یاد می‌گیرد مسئولیت بپذیرد و با دنیاهای دیگر زندگی آشنا شود. من آن را تجربه‌ای ارزشمند می‌دانم که افق دید را گسترش می‌دهد."
            },
            { germanTitle: "Gesunde Ernährung und ihre Auswirkungen", persianTitle: "تغذیه سالم و اثرات آن",
              germanStory: "Eine ausgewogene Ernährung ist entscheidend für die körperliche und geistige Gesundheit. Der Verzehr von viel Obst, Gemüse und Vollkornprodukten kann das Risiko für viele Krankheiten senken. Leider greifen viele Menschen im stressigen Alltag oft zu ungesundem Fast Food. Es ist wichtig, ein Bewusstsein für die langfristigen Auswirkungen der Ernährung zu schaffen.",
              persianTranslation: "یک رژیم غذایی متعادل برای سلامت جسمی و روانی حیاتی است. مصرف زیاد میوه، سبزیجات و محصولات غلات کامل می‌تواند خطر بسیاری از بیماری‌ها را کاهش دهد. متأسفانه، بسیاری از مردم در زندگی روزمره پر استرس خود اغلب به فست فود ناسالم روی می‌آورند. ایجاد آگاهی در مورد اثرات بلندمدت تغذیه مهم است."
            },
            { germanTitle: "Ein Konflikt am Arbeitsplatz", persianTitle: "یک درگیری در محل کار",
              germanStory: "Konflikte am Arbeitsplatz sind unvermeidlich, aber entscheidend ist, wie man damit umgeht. In meinem letzten Job gab es eine Meinungsverschiedenheit mit einem Kollegen über die Vorgehensweise bei einem Projekt. Anstatt den Konflikt zu ignorieren, suchten wir das Gespräch. Wir haben unsere Standpunkte erklärt und konnten schließlich einen Kompromiss finden, der für beide Seiten akzeptabel war.",
              persianTranslation: "درگیری در محل کار اجتناب‌ناپذیر است، اما نحوه برخورد با آن بسیار مهم است. در شغل قبلی‌ام، با یک همکار بر سر نحوه پیشبرد یک پروژه اختلاف نظر داشتم. به جای نادیده گرفتن درگیری، به گفتگو پرداختیم. ما دیدگاه‌های خود را توضیح دادیم و در نهایت توانستیم به یک مصالحه برسیم که برای هر دو طرف قابل قبول بود."
            },
            { germanTitle: "Die Rolle von sozialen Medien", persianTitle: "نقش رسانه‌های اجتماعی",
              germanStory: "Soziale Medien haben die Kommunikation revolutioniert, bringen aber auch Nachteile mit sich. Sie ermöglichen den schnellen Austausch von Informationen und die Vernetzung mit Menschen weltweit. Gleichzeitig können sie zu sozialem Druck, Cybermobbing und einer unrealistischen Selbstdarstellung führen. Ein bewusster und kritischer Umgang mit diesen Plattformen ist daher unerlässlich.",
              persianTranslation: "رسانه‌های اجتماعی ارتباطات را متحول کرده‌اند، اما معایبی نیز به همراه دارند. آنها تبادل سریع اطلاعات و شبکه‌سازی با مردم در سراسر جهان را امکان‌پذیر می‌کنند. در عین حال، می‌توانند منجر به فشار اجتماعی، قلدری سایبری و خودنمایی غیرواقعی شوند. بنابراین، برخورد آگاهانه و انتقادی با این پلتفرم‌ها ضروری است."
            },
            { germanTitle: "Eine unvergessliche Erfahrung im Ausland", persianTitle: "یک تجربه فراموش‌نشدنی در خارج از کشور",
              germanStory: "Während meines Auslandssemesters in Spanien hatte ich eine unvergessliche Erfahrung. Ich reiste allein in ein kleines Dorf in den Bergen, in dem niemand Englisch sprach. Ich war gezwungen, mein Spanisch anzuwenden und mich auf die Gastfreundschaft der Einheimischen zu verlassen. Diese Erfahrung hat mein Selbstvertrauen gestärkt und mir gezeigt, wie freundlich Menschen sein können.",
              persianTranslation: "در طول ترم تحصیلی‌ام در اسپانیا، یک تجربه فراموش‌نشدنی داشتم. من به تنهایی به یک روستای کوچک در کوهستان سفر کردم که در آن هیچ کس انگلیسی صحبت نمی‌کرد. من مجبور شدم از اسپانیایی خود استفاده کنم و به مهمان‌نوازی مردم محلی تکیه کنم. این تجربه اعتماد به نفس مرا تقویت کرد و به من نشان داد که مردم چقدر می‌توانند مهربان باشند."
            },
            { germanTitle: "Ein Vorbild in meinem Leben", persianTitle: "یک الگو در زندگی من",
              germanStory: "Mein Großvater ist ein großes Vorbild für mich. Er hat in seinem Leben viele Schwierigkeiten überwunden, aber nie seinen Optimismus und seine Freundlichkeit verloren. Er hat mir beigebracht, wie wichtig harte Arbeit, Ehrlichkeit und Mitgefühl für andere sind. Seine Lebensweisheit und seine positive Einstellung inspirieren mich jeden Tag.",
              persianTranslation: "پدربزرگم یک الگوی بزرگ برای من است. او در زندگی خود بر مشکلات زیادی غلبه کرده است، اما هرگز خوش‌بینی و مهربانی خود را از دست نداده است. او به من آموخت که کار سخت، صداقت و همدردی با دیگران چقدر مهم است. خرد زندگی و نگرش مثبت او هر روز به من الهام می‌بخشد."
            },
            { germanTitle: "Ein Projekt, auf das ich stolz bin", persianTitle: "پروژه‌ای که به آن افتخار می‌کنم",
              germanStory: "Ich bin besonders stolz auf ein Projekt, bei dem wir einen Gemeinschaftsgarten in unserer Nachbarschaft angelegt haben. Anfangs gab es viele Herausforderungen, wie die Finanzierung und die Organisation von Freiwilligen. Aber gemeinsam haben wir es geschafft, eine grüne Oase zu schaffen, in der sich die Nachbarn treffen und gemeinsam gärtnern können.",
              persianTranslation: "من به خصوص به پروژه‌ای افتخار می‌کنم که در آن یک باغ اجتماعی در محله‌مان ایجاد کردیم. در ابتدا چالش‌های زیادی مانند تأمین مالی و سازماندهی داوطلبان وجود داشت. اما با هم موفق شدیم یک واحه سبز ایجاد کنیم که در آن همسایه‌ها می‌توانند با هم ملاقات کرده و باغبانی کنند."
            },
        ];
        const allTopics = [...predefinedTopics.A1, ...predefinedTopics.A2, ...fullB1Topics, ...predefinedTopics.B2];
        return allTopics
            .filter(t => Object.values(predefinedTopics).flat().map(x => x.germanTitle).includes(t.germanTitle))
            .map((topic, index) => ({
                id: index,
                ...topic,
            }));
    }
    
    return predefinedTopics[level].map((topic, index) => ({
        id: index,
        ...topic,
    }));
};
