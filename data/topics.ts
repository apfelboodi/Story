
import type { Level, StoryTopic } from '../types';

// NOTE: Add your static stories and translations here.
export const predefinedTopics: Record<Level, Omit<StoryTopic, 'id'>[]> = {
  A1: [
    { 
      germanTitle: "Ein Tag im Park", 
      persianTitle: "یک روز در پارک", 
      audioUrl: "https://storage.googleapis.com/audio-samples-for-app/a1-story-1.mp3",
      germanStory: "Heute ist das Wetter sehr schön, also geht Anna in den Park. Sie spaziert und sieht viele bunte Blumen. Die Blumen sind rot und gelb. Plötzlich sieht sie einen Hund, der mit einem Ball spielt. Anna muss lachen. Später kauft sie sich ein Eis. Das Eis ist kalt und schmeckt süß. Es ist ein wirklich schöner Tag.",
      persianTranslation: "امروز هوا خیلی خوب است، برای همین آنا به پارک می‌رود. او قدم می‌زند و گل‌های رنگارنگ زیادی می‌بیند. گل‌ها قرمز و زرد هستند. ناگهان سگی را می‌بیند که با یک توپ بازی می‌کند. آنا خنده‌اش می‌گیرد. بعداً برای خودش یک بستنی می‌خرد. بستنی سرد است و طعم شیرینی دارد. این واقعاً یک روز زیباست."
    },
    { 
      germanTitle: "Meine Familie", 
      persianTitle: "خانواده من", 
      audioUrl: "https://storage.googleapis.com/audio-samples-for-app/a1-story-2.mp3",
      germanStory: "Hallo, ich heiße Leo und das ist meine Familie. Mein Vater heißt Thomas und meine Mutter heißt Maria. Ich habe auch eine Schwester, sie heißt Lena. Wir sind nicht allein, denn wir haben eine Katze. Unsere Katze heißt Mimi und ist sehr süß. Wir wohnen alle zusammen in einem gemütlichen Haus.",
      persianTranslation: "سلام، اسم من لئو است و این خانواده من است. اسم پدرم توماس و اسم مادرم ماریا است. من یک خواهر هم دارم، اسم او لنا است. ما تنها نیستیم، چون یک گربه داریم. اسم گربه ما میمی است و خیلی شیرین است. ما همه با هم در یک خانه دنج زندگی می‌کنیم."
    },
    { 
      germanTitle: "Einkaufen im Supermarkt", 
      persianTitle: "خرید در سوپرمارکت",
      germanStory: "Maria geht heute in den Supermarkt, denn sie braucht ein paar Dinge. Sie braucht Milch, Brot und Eier. Der Supermarkt ist sehr groß. Sie nimmt einen Einkaufswagen. Zuerst holt sie die Milch aus dem Kühlregal. Dann geht sie zum Bäcker für das Brot. Zum Schluss kauft sie noch zwölf Eier. An der Kasse bezahlt sie zehn Euro mit ihrer Karte.",
      persianTranslation: "ماریا امروز به سوپرمارکت می‌رود، چون به چند چیز نیاز دارد. او به شیر، نان و تخم‌مرغ نیاز دارد. سوپرمارکت خیلی بزرگ است. او یک چرخ خرید برمی‌دارد. اول شیر را از قفسه یخچال برمی‌دارد. بعد برای نان به سمت نانوایی می‌رود. در آخر دوازده عدد تخم‌مرغ هم می‌خرد. در صندوق با کارتش ده یورو پرداخت می‌کند."
    },
    { 
      germanTitle: "Das Wetter heute", 
      persianTitle: "آب و هوای امروز",
      germanStory: "Heute scheint die Sonne und der Himmel ist strahlend blau. Es gibt keine einzige Wolke zu sehen. Es ist angenehm warm, die Temperatur liegt bei 25 Grad. Am Nachmittag kommt vielleicht ein bisschen Wind auf, aber es wird nicht regnen. Das ist das perfekte Wetter, um ein Picknick im Park zu machen.",
      persianTranslation: "امروز خورشید می‌درخشد و آسمان آبی روشن است. حتی یک ابر هم دیده نمی‌شود. هوا به طور خوشایندی گرم است، دما ۲۵ درجه است. بعد از ظهر شاید کمی باد بیاید، اما باران نخواهد بارید. این هوای عالی برای یک پیک نیک در پارک است."
    },
    { 
      germanTitle: "Mein Hobby", 
      persianTitle: "سرگرمی من",
      germanStory: "Mein Hobby ist Malen. Ich liebe es, Bilder zu malen. Zu Hause habe ich viele bunte Stifte und Farben. Ich male am liebsten am Wochenende, wenn ich viel Zeit habe. Dann male ich Blumen, Tiere und manchmal auch Häuser. Das Malen macht mir sehr viel Spaß und ist total entspannend. Mein Zimmer ist schon voll mit meinen Bildern.",
      persianTranslation: "سرگرمی من نقاشی است. من عاشق نقاشی کشیدن هستم. در خانه مدادها و رنگ‌های رنگارنگ زیادی دارم. من بیشتر دوست دارم آخر هفته‌ها نقاشی کنم که وقت زیادی دارم. آن وقت گل‌ها، حیوانات و گاهی هم خانه‌ها را نقاشی می‌کنم. نقاشی برای من بسیار سرگرم‌کننده است و کاملاً آرامش‌بخش است. اتاقم دیگر پر از نقاشی‌های من شده است."
    },
    { 
      germanTitle: "Ein Besuch im Café", 
      persianTitle: "بازدید از یک کافه",
      germanStory: "Am Nachmittag treffe ich meine Freundin in einem kleinen Café. Wir suchen uns einen schönen Platz am Fenster. Wir bestellen beide einen Kaffee und ein Stück Kuchen. Der Kaffee ist heiß und duftet gut. Der Kuchen ist sehr lecker. Wir reden viel und lachen. Das Café ist sehr gemütlich, deshalb bleiben wir fast zwei Stunden dort. Es ist eine schöne Zeit zusammen.",
      persianTranslation: "بعد از ظهر دوستم را در یک کافه کوچک ملاقات می‌کنم. ما یک جای خوب کنار پنجره برای خودمان پیدا می‌کنیم. ما هر دو یک قهوه و یک تکه کیک سفارش می‌دهیم. قهوه داغ است و بوی خوبی می‌دهد. کیک بسیار خوشمزه است. ما خیلی صحبت می‌کنیم و می‌خندیم. کافه خیلی دنج است، برای همین تقریباً دو ساعت آنجا می‌مانیم. این اوقات خوشی با هم است."
    },
    { 
      germanTitle: "Mein Geburtstag", 
      persianTitle: "روز تولد من",
      germanStory: "Heute ist ein besonderer Tag, denn ich habe Geburtstag! Ich werde zehn Jahre alt. Am Nachmittag habe ich eine Party. Alle meine Freunde kommen zu mir nach Hause. Wir essen einen großen Schokoladenkuchen und spielen lustige Spiele. Ich bekomme auch viele Geschenke. Das größte Geschenk ist ein neues Fahrrad. Ich bin sehr glücklich heute.",
      persianTranslation: "امروز یک روز خاص است، چون تولد من است! من ده ساله می‌شوم. بعد از ظهر یک مهمانی دارم. همه دوستانم به خانه من می‌آیند. ما یک کیک شکلاتی بزرگ می‌خوریم و بازی‌های سرگرم‌کننده انجام می‌دهیم. من هدیه‌های زیادی هم می‌گیرم. بزرگترین هدیه یک دوچرخه جدید است. من امروز خیلی خوشحالم."
    },
    { 
      germanTitle: "Tiere auf dem Bauernhof", 
      persianTitle: "حیوانات در مزرعه",
      germanStory: "Auf dem Bauernhof von meinem Onkel gibt es viele Tiere. Man kann die Kühe auf der Wiese sehen. Die Kühe geben uns frische Milch. Die Schweine sind lustig, sie spielen gerne im Schlamm. Die Hühner laufen herum und legen jeden Tag Eier. Es gibt auch ein großes Pferd. Das Pferd heißt Max und ich mag die Tiere auf dem Bauernhof sehr.",
      persianTranslation: "در مزرعه عمویم حیوانات زیادی وجود دارد. می‌توان گاوها را در چمنزار دید. گاوها به ما شیر تازه می‌دهند. خوک‌ها بامزه هستند، آنها دوست دارند در گل و لای بازی کنند. مرغ‌ها این طرف و آن طرف می‌دوند و هر روز تخم می‌گذارند. یک اسب بزرگ هم وجود دارد. اسم اسب ماکس است و من حیوانات مزرعه را خیلی دوست دارم."
    },
    { 
      germanTitle: "Die Farben", 
      persianTitle: "رنگ‌ها",
      germanStory: "Heute lerne ich die Farben in meinem Buch. Ich sehe ein Bild von einem Apfel. Der Apfel ist schön rot. Daneben ist eine Banane, sie ist ganz gelb. Ich schaue aus dem Fenster. Das Gras im Garten ist grün und der große Himmel ist blau. Eine kleine, weiße Wolke schwimmt am Himmel. Bald wird es Nacht, dann ist alles schwarz. Von allen Farben mag ich Blau am liebsten.",
      persianTranslation: "امروز من رنگ‌ها را در کتابم یاد می‌گیرم. من یک عکس از یک سیب می‌بینم. سیب به زیبایی قرمز است. کنار آن یک موز است، کاملاً زرد است. من از پنجره به بیرون نگاه می‌کنم. چمن در باغ سبز است و آسمان بزرگ آبی است. یک ابر کوچک و سفید در آسمان شناور است. به زودی شب می‌شود، آن وقت همه چیز سیاه است. از بین همه رنگ‌ها، من آبی را بیشتر از همه دوست دارم."
    },
    { 
      germanTitle: "In der Schule", 
      persianTitle: "در مدرسه",
      germanStory: "Ich gehe jeden Morgen in die Schule. Meine Schule ist ein großes Gebäude. Mein Klassenzimmer ist im zweiten Stock. In der Schule lernen wir viele Fächer, zum Beispiel Mathe, Deutsch und Englisch. Mein Lieblingsfach ist Sport, weil wir rennen und spielen. In der Pause spiele ich mit meinen Freunden Fußball auf dem Schulhof. Ich mag meine Schule.",
      persianTranslation: "من هر روز صبح به مدرسه می‌روم. مدرسه من یک ساختمان بزرگ است. کلاس من در طبقه دوم است. در مدرسه ما درس‌های زیادی یاد می‌گیریم، برای مثال ریاضی، آلمانی و انگلیسی. درس مورد علاقه من ورزش است، چون ما می‌دویم و بازی می‌کن کنیم. در زنگ تفریح با دوستانم در حیاط مدرسه فوتبال بازی می‌کنم. من مدرسه‌ام را دوست دارم."
    },
    { germanTitle: "Mein Zimmer", persianTitle: "اتاق من",
      germanStory: "Ich möchte dir mein Zimmer zeigen. Es ist nicht sehr groß, aber sehr gemütlich. In der Mitte steht mein Bett, es ist sehr bequem. An der Wand hängt ein Poster von meiner Lieblingsband. Neben dem Fenster steht mein Schreibtisch mit einem Stuhl. Auf dem Schreibtisch steht mein Computer. Hier mache ich meine Hausaufgaben und spiele.",
      persianTranslation: "می‌خواهم اتاقم را به تو نشان دهم. خیلی بزرگ نیست، اما خیلی دنج است. در وسط تختم قرار دارد، خیلی راحت است. روی دیوار یک پوستر از گروه موسیقی مورد علاقه‌ام آویزان است. کنار پنجره میز تحریرم با یک صندلی قرار دارد. روی میز تحریر کامپیوترم است. من اینجا تکالیفم را انجام می‌دههم و بازی می‌کنم."
    },
    { germanTitle: "Mein Lieblingstier", persianTitle: "حیوان مورد علاقه من",
      germanStory: "Mein Lieblingstier ist der Löwe. Man nennt ihn auch den 'König der Tiere'. Ein Löwe ist sehr groß und stark. Er hat eine große, braune Mähne. Löwen leben in den warmen Ländern von Afrika. Sie jagen oft zusammen in einer großen Gruppe. Ich finde Löwen sehr faszinierend und majestätisch.",
      persianTranslation: "حیوان مورد علاقه من شیر است. به او «پادشاه حیوانات» هم می‌گویند. یک شیر بسیار بزرگ و قوی است. او یال بزرگ و قهوه‌ای دارد. شیرها در کشورهای گرم آفریقا زندگی می‌کنند. آنها اغلب با هم در یک گروه بزرگ شکار می‌کنند. به نظر من شیرها بسیار شگفت‌انگیز و باشکوه هستند."
    },
    { germanTitle: "Am Bahnhof", persianTitle: "در ایستگاه قطار",
      germanStory: "Heute bin ich am Bahnhof, weil ich nach Hamburg fahre. Der Bahnhof ist sehr groß und voll. Viele Menschen reisen mit dem Zug. Mein Zug kommt auf Gleis 5 an. Ich habe einen schweren Koffer und einen Rucksack dabei. Die Reise mit dem Zug dauert drei Stunden, aber ich habe ein Buch zum Lesen dabei.",
      persianTranslation: "امروز من در ایستگاه قطار هستم، چون به هامبورگ سفر می‌کنم. ایستگاه قطار بسیار بزرگ و شلوغ است. افراد زیادی با قطار سفر می‌کنند. قطار من در سکوی ۵ وارد می‌شود. من یک چمدان سنگین و یک کوله‌پشتی همراه دارم. سفر با قطار سه ساعت طول می‌کشد، اما من یک کتاب برای خواندن همراه دارم."
    },
    { germanTitle: "Meine Kleidung", persianTitle: "لباس‌های من",
      germanStory: "Heute ist es warm, deshalb trage ich ein blaues T-Shirt und eine schwarze Hose. An den Füßen trage ich weiße Socken und schwarze Schuhe. Wenn es draußen kalt ist, ziehe ich eine dicke Jacke an. Meine Lieblingsjacke ist grün. Ich mag bequeme Kleidung, in der ich gut spielen kann.",
      persianTranslation: "امروز هوا گرم است، برای همین من یک تی‌شرت آبی و یک شلوار مشکی پوشیده‌ام. در پاهایم جوراب سفید و کفش مشکی پوشیده‌ام. وقتی بیرون سرد است، یک ژاکت کلفت می‌پوشم. ژاکت مورد علاقه من سبز است. من لباس راحت را دوست دارم که در آن بتوانم خوب بازی کنم."
    },
    { germanTitle: "Obst und Gemüse", persianTitle: "میوه و سبزیجات",
      germanStory: "Meine Mutter sagt, Obst und Gemüse sind sehr gesund. Deshalb esse ich jeden Tag einen Apfel. Äpfel sind meistens rot oder grün. Ich mag auch süße Bananen und saftige Orangen. Mein Lieblingsgemüse sind Karotten. Sie sind orange und gut für die Augen. Tomaten sind auch ein Gemüse und sehr lecker im Salat.",
      persianTranslation: "مادرم می‌گوید میوه و سبزیجات خیلی سالم هستند. برای همین من هر روز یک سیب می‌خورم. سیب‌ها بیشتر قرمز یا سبز هستند. من موزهای شیرین و پرتقال‌های آبدار را هم دوست دارم. سبزی مورد علاقه من هویج است. آنها نارنجی هستند و برای چشم خوبند. گوجه فرنگی هم یک سبزی است و در سالاد خیلی خوشمزه است."
    },
    { germanTitle: "Ein Tag am Strand", persianTitle: "یک روز در ساحل",
      germanStory: "Im Sommer fahren wir oft an den Strand. Ich liebe es, im Meer zu schwimmen. Das Wasser ist angenehm warm. Nach dem Schwimmen baue ich eine große Sandburg. Die Sonne scheint hell. Ich liege auf meinem Handtuch, trockne mich und lese ein spannendes Buch. Am Abend beobachten wir den wunderschönen Sonnenuntergang.",
      persianTranslation: "در تابستان ما اغلب به ساحل می‌رویم. من عاشق شنا کردن در دریا هستم. آب به طور خوشایندی گرم است. بعد از شنا، من یک قلعه شنی بزرگ می‌سازم. خورشید به روشنی می‌تابد. من روی حوله‌ام دراز می‌کشم، خودم را خشک می‌کنم و یک کتاب هیجان‌انگیز می‌خوانم. عصر ما غروب زیبای خورشید را تماشا می‌کنیم."
    },
    { germanTitle: "Die Wochentage", persianTitle: "روزهای هفته",
      germanStory: "Mein Kalender zeigt mir die Woche. Eine Woche hat immer sieben Tage. Der erste Tag ist der Montag. Dann kommen Dienstag, Mittwoch, Donnerstag und Freitag. An diesen Tagen gehe ich zur Schule. Aber dann kommt das Beste: Samstag und Sonntag! Das ist das Wochenende. Da habe ich frei und kann lange spielen.",
      persianTranslation: "تقویم من هفته را به من نشان می‌دهد. یک هفته همیشه هفت روز دارد. روز اول دوشنبه است. سپس سه‌شنبه، چهارشنبه، پنجشنبه و جمعه می‌آیند. در این روزها من به مدرسه می‌روم. اما بعد بهترین قسمت می‌آید: شنبه و یکشنبه! این آخر هفته است. آن وقت من تعطیل هستم و می‌توانم زیاد بازی کنم."
    },
    { germanTitle: "Im Restaurant", persianTitle: "در رستوران",
      germanStory: "Am Abend gehe ich mit meiner Familie in ein italienisches Restaurant. Ich bestelle meine Lieblingspizza mit Salami. Meine Mutter isst lieber Fisch und mein Vater einen großen Salat. Zum Trinken bestellen wir alle Apfelsaft. Das Essen hier ist sehr gut. Der Kellner ist auch sehr freundlich und lacht viel.",
      persianTranslation: "عصر با خانواده‌ام به یک رستوران ایتالیایی می‌روم. من پیتزای مورد علاقه‌ام با سالامی را سفارش می‌دهم. مادرم ترجیح می‌دهد ماهی بخورد و پدرم یک سالاد بزرگ. برای نوشیدن همه ما آب سیب سفارش می‌دهیم. غذای اینجا خیلی خوب است. پیشخدمت هم خیلی مهربان است و زیاد می‌خندد."
    },
    { germanTitle: "Meine Freunde", persianTitle: "دوستان من",
      germanStory: "Ich habe viele gute Freunde in der Schule. Mein bester Freund heißt Paul. Er ist sehr lustig und wir lachen immer viel. Wir spielen oft zusammen Fußball in der Pause. Meine Freundin Anna ist sehr nett. Sie ist klug und hilft mir manchmal bei den Hausaufgaben. Zusammen sind wir eine super Gruppe.",
      persianTranslation: "من دوستان خوب زیادی در مدرسه دارم. بهترین دوستم پاول نام دارد. او خیلی بامزه است و ما همیشه زیاد می‌خندیم. ما اغلب در زنگ تفریح با هم فوتبال بازی می‌کنیم. دوستم آنا خیلی مهربان است. او باهوش است و گاهی در تکالیف به من کمک می‌کند. با هم ما یک گروه عالی هستیم."
    },
    { germanTitle: "Eine Busfahrt", persianTitle: "سفر با اتوبوس",
      germanStory: "Jeden Morgen fahre ich mit dem Bus zur Schule. Die Bushaltestelle ist direkt in meiner Straße. Der große gelbe Bus kommt immer um halb acht. Ich steige ein und zeige dem Fahrer meine Fahrkarte. Im Bus treffe ich oft meine Freunde und wir reden. Die Fahrt zur Schule dauert nur fünfzehn Minuten.",
      persianTranslation: "هر روز صبح من با اتوبوس به مدرسه می‌روم. ایستگاه اتوبوس درست در خیابان من است. اتوبوس بزرگ زرد همیشه ساعت هفت و نیم می‌آید. من سوار می‌شوم و به راننده بلیطم را نشان می‌دهم. در اتوبوس اغلب دوستانم را ملاقات می‌کنم و ما صحبت می‌کنیم. سفر به مدرسه فقط پانزده دقیقه طول می‌کشد."
    },
    { germanTitle: "Mein Frühstück", persianTitle: "صبحانه من",
      germanStory: "Jeden Morgen, bevor ich zur Schule gehe, esse ich Frühstück. Meistens esse ich ein Brot mit süßer Marmelade. Manchmal esse ich auch Müsli mit kalter Milch. Dazu trinke ich gerne eine Tasse warmen Tee. Ein gutes Frühstück ist wichtig, denn es gibt mir viel Energie für den ganzen Vormittag.",
      persianTranslation: "هر روز صبح، قبل از اینکه به مدرسه بروم، صبحانه می‌خورم. بیشتر اوقات یک نان با مربای شیرین می‌خورم. گاهی هم موسلی با شیر سرد می‌خورم. با آن دوست دارم یک فنجان چای گرم بنوشم. یک صبحانه خوب مهم است، چون به من انرژی زیادی برای تمام صبح می‌دهد."
    },
    { germanTitle: "Im Garten", persianTitle: "در باغ",
      germanStory: "Wir haben einen kleinen Garten direkt hinter unserem Haus. Im Frühling wachsen dort viele bunte Blumen. Es gibt rote Rosen und gelbe Tulpen. Mein Vater pflanzt auch Gemüse an. Er hat Tomaten und Gurken. Ich spiele sehr gerne im Gras oder helfe Papa beim Gießen.",
      persianTranslation: "ما یک باغ کوچک درست پشت خانه‌مان داریم. در بهار گل‌های رنگارنگ زیادی آنجا می‌رویند. رزهای قرمز و لاله‌های زرد وجود دارد. پدرم سبزیجات هم می‌کارد. او گوجه فرنگی و خیار دارد. من خیلی دوست دارم در چمن بازی کنم یا به پدر در آبیاری کمک کنم."
    },
    { germanTitle: "Die Jahreszeiten", persianTitle: "فصل‌های سال",
      germanStory: "Ein Jahr hat vier bunte Jahreszeiten. Es beginnt mit dem Frühling, wenn die Blumen blühen. Dann kommt der heiße Sommer und wir gehen schwimmen. Im Herbst fallen die Blätter von den Bäumen und sind rot und gelb. Und im kalten Winter schneit es manchmal. Ich finde jede Jahreszeit hat etwas Schönes.",
      persianTranslation: "یک سال چهار فصل رنگارنگ دارد. با بهار شروع می‌شود، وقتی گل‌ها شکوفه می‌ده دهند. سپس تابستان گرم می‌آید و ما به شنا می‌رویم. در پاییز برگ‌ها از درختان می‌ریزند و قرمز و زرد هستند. و در زمستان سرد گاهی برف می‌بارد. به نظر من هر فصلی چیز زیبایی دارد."
    },
    { germanTitle: "Ein Picknick machen", persianTitle: "رفتن به پیک‌نیک",
      germanStory: "Am Sonntag machen wir ein Picknick, weil das Wetter so gut ist. Wir fahren in den Park und nehmen eine große Decke mit. Mama hat Sandwiches, Obst und Saft eingepackt. Wir sitzen auf der Decke unter einem Baum und essen. Die Sonne scheint und es ist sehr entspannend in der Natur.",
      persianTranslation: "روز یکشنبه ما پیک‌نیک می‌کنیم، چون هوا خیلی خوب است. ما به پارک می‌رویم و یک پتوی بزرگ با خود می‌بریم. مادر ساندویچ، میوه و آبمیوه بسته‌بندی کرده است. ما روی پتو زیر یک درخت می‌نشینیم و می‌خوریم. خورشید می‌درخشد و در طبیعت بودن بسیار آرامش‌بخش است."
    },
    { germanTitle: "Mein Haustier", persianTitle: "حیوان خانگی من",
      germanStory: "Ich habe ein süßes Haustier. Es ist ein Kaninchen und sein Name ist Hoppel. Hoppel hat langes, weißes Fell und lustige Ohren. Er isst am liebsten Karotten. Er wohnt in einem Käfig in meinem Zimmer, aber ich spiele jeden Tag mit ihm auf dem Boden. Ich liebe mein kleines Kaninchen sehr.",
      persianTranslation: "من یک حیوان خانگی شیرین دارم. این یک خرگوش است و نام او هوپل است. هوپل خز بلند و سفیدی و گوش‌های بامزه‌ای دارد. او بیشتر از همه دوست دارد هویج بخورد. او در یک قفس در اتاق من زندگی می‌کند، اما من هر روز با او روی زمین بازی می‌کنم. من خرگوش کوچکم را خیلی دوست دارم."
    },
    { germanTitle: "Auf dem Spielplatz", persianTitle: "در زمین بازی",
      germanStory: "Nach der Schule gehe ich oft auf den Spielplatz. Dort gibt es viele tolle Spielgeräte. Ich schaukle gerne sehr hoch in die Luft. Ich mag auch die schnelle Rutsche. Viele andere Kinder sind auch auf dem Spielplatz. Manchmal spielen wir zusammen Fangen. Das macht großen Spaß.",
      persianTranslation: "بعد از مدرسه من اغلب به زمین بازی می‌روم. آنجا وسایل بازی عالی زیادی وجود دارد. من دوست دارم خیلی بالا در هوا تاب بخورم. من سرسره سریع را هم دوست دارم. کودکان زیاد دیگری هم در زمین بازی هستند. گاهی ما با هم گرگم به هوا بازی می‌کنیم. این خیلی سرگرم‌کننده است."
    },
    { germanTitle: "Ein Telefongespräch", persianTitle: "یک گفتگوی تلفنی",
      germanStory: "Plötzlich klingelt mein Telefon. Ich schaue auf das Display und sehe: Es ist meine Oma! Ich gehe ran und sage: 'Hallo, Oma!' Sie fragt, wie es mir geht. Ich antworte, dass bei mir alles gut ist. Wir sprechen ein bisschen über das Wetter und die Familie. Das Gespräch dauert ungefähr zehn Minuten.",
      persianTranslation: "ناگهان تلفن من زنگ می‌زند. به صفحه نمایش نگاه می‌کنم و می‌بینم: مادربزرگم است! من جواب می‌دهم و می‌گویم: «سلام، مادربزرگ!» او می‌پرسد حالم چطور است. من جواب می‌دهم که همه چیز برای من خوب است. ما کمی درباره هوا و خانواده صحبت می‌کنیم. گفتگو تقریباً ده دقیقه طول می‌کشد."
    },
    { germanTitle: "Meine Stadt", persianTitle: "شهر من",
      germanStory: "Ich wohne in einer kleinen, aber schönen Stadt. Im Zentrum gibt es einen alten Marktplatz mit einer Kirche. Dort gibt es auch viele kleine Geschäfte. Ich kann alles gut zu Fuß erreichen. Die Menschen, die hier leben, sind sehr freundlich. Ich wohne gerne in meiner Stadt.",
      persianTranslation: "من در یک شهر کوچک اما زیبا زندگی می‌کنم. در مرکز یک میدان بازار قدیمی با یک کلیسا وجود دارد. آنجا همچنین مغازه‌های کوچک زیادی وجود دارد. من می‌توانم به راحتی به همه جا پیاده برسم. مردمی که اینجا زندگی می‌کنند بسیار مهربان هستند. من دوست دارم در شهرم زندگی کنم."
    },
    { germanTitle: "Zahlen und Zählen", persianTitle: "اعداد و شمردن",
      germanStory: "Ich sitze auf dem Teppich und zähle meine Spielzeuge. Ich habe ein rotes Auto, das ist eins. Ich habe zwei blaue Bälle, das sind zwei und drei. Dann zähle ich meine Finger. An einer Hand habe ich fünf Finger. An beiden Händen habe ich zusammen zehn Finger! Zählen macht Spaß.",
      persianTranslation: "من روی فرش نشسته‌ام و اسباب‌بازی‌هایم را می‌شمارم. من یک ماشین قرمز دارم، این یکی است. من دو توپ آبی دارم، اینها دو و سه هستند. بعد انگشتانم را می‌شمارم. روی یک دست پنج انگشت دارم. روی هر دو دستم با هم ده انگشت دارم! شمردن سرگرم‌کننده است."
    },
    { germanTitle: "Am Flughafen", persianTitle: "در فرودگاه",
      germanStory: "Heute sind wir am Flughafen, denn wir fliegen in den Urlaub. Der Flughafen ist riesig! Zuerst geben wir unser Gepäck ab. Dann gehen wir durch die Sicherheitskontrolle. Wir warten am Gate auf unser Flugzeug. Ich schaue aus dem großen Fenster und sehe die Flugzeuge starten und landen. Fliegen ist sehr aufregend.",
      persianTranslation: "امروز ما در فرودگاه هستیم، چون به تعطیلات پرواز می‌کنیم. فرودگاه غول‌پیکر است! ابتدا چمدان‌هایمان را تحویل می‌دهیم. سپس از بازرسی امنیتی عبور می‌کنیم. ما در گیت منتظر هواپیمایمان هستیم. من از پنجره بزرگ به بیرون نگاه می‌کنم و هواپیماها را در حال بلند شدن و فرود آمدن می‌بینم. پرواز کردن بسیار هیجان‌انگیز است."
    },
    { germanTitle: "Ein einfacher Brief", persianTitle: "یک نامه ساده",
      germanStory: "Ich möchte meinem Freund Tom einen Brief schreiben. Ich nehme ein Blatt Papier und einen Stift. Ich schreibe: 'Lieber Tom, wie geht es dir? Mir geht es gut.' Ich erzähle ihm, dass ich am Wochenende Fußball spiele. Zum Schluss schreibe ich 'Viele Grüße, dein Leo.' Dann stecke ich den Brief in einen Umschlag und bringe ihn zur Post.",
      persianTranslation: "من می‌خواهم به دوستم تام یک نامه بنویسم. یک ورق کاغذ و یک خودکار برمی‌دارم. من می‌نویسم: «تام عزیز، حالت چطور است؟ من خوبم.» به او می‌گویم که آخر هفته فوتبال بازی می‌کنم. در آخر می‌نویسم «با بهترین آرزوها، لئو تو.» سپس نامه را در یک پاکت می‌گذارم و آن را به اداره پست می‌برم."
    },
    { germanTitle: "Mein Lieblingsessen", persianTitle: "غذای مورد علاقه من",
      germanStory: "Mein absolutes Lieblingsessen ist Spaghetti mit Tomatensoße. Meine Mutter kocht es am allerbesten. Die Nudeln sind lang und man kann sie lustig auf die Gabel drehen. Die Soße ist schön rot und schmeckt super lecker. Manchmal reiben wir noch etwas Käse darüber. Ich könnte jeden Tag Spaghetti essen.",
      persianTranslation: "غذای مورد علاقه مطلق من اسپاگتی با سس گوجه فرنگی است. مادرم آن را از همه بهتر می‌پزد. نودل‌ها بلند هستند و می‌توان آنها را به طور بامزه‌ای روی چنگال پیچاند. سس به زیبایی قرمز است و طعم فوق‌العاده‌ای دارد. گاهی اوقات کمی پنیر هم روی آن رنده می‌کنیم. من می‌توانم هر روز اسپاگتی بخورم."
    },
    { germanTitle: "Im Kino", persianTitle: "در سینما",
      germanStory: "Am Samstag gehe ich mit Papa ins Kino. Wir schauen einen neuen Zeichentrickfilm. An der Kasse kaufe ich eine große Tüte Popcorn und ein Getränק. Der Kinosaal ist sehr groß und es wird ganz dunkel. Der Film ist sehr lustig und spannend. Ich habe im Kino immer viel Spaß.",
      persianTranslation: "روز شنبه با پدرم به سینما می‌روم. ما یک انیمیشن جدید تماشا می‌کنیم. در گیشه من یک کیسه بزرگ پاپ‌کورن و یک نوشیدنی می‌خرم. سالن سینما خیلی بزرگ است و کاملاً تاریک می‌شود. فیلم خیلی خنده‌دار و هیجان‌انگیز است. من همیشه در سینما خیلی خوش می‌گذرانم."
    },
    { germanTitle: "Die Uhrzeit", persianTitle: "ساعت",
      germanStory: "Ich lerne gerade die Uhrzeit. Mein Wecker zeigt mir die Zahlen. Ein Tag hat 24 Stunden und eine Stunde hat 60 Minuten. Ich stehe jeden Morgen um sieben Uhr auf. Die Schule beginnt um acht Uhr. Um zwölf Uhr mittags essen wir. Abends um neun Uhr gehe ich müde ins Bett.",
      persianTranslation: "من در حال یادگیری ساعت هستم. ساعت زنگ‌دارم اعداد را به من نشان می‌دهد. یک روز ۲۴ ساعت دارد و یک ساعت ۶۰ دقیقه. من هر روز صبح ساعت هفت بیدار می‌شوم. مدرسه ساعت هشت شروع می‌شود. ساعت دوازده ظهر ما غذا می‌خوریم. عصر ساعت نه خسته به رختخواب می‌روم."
    },
    { germanTitle: "Ein Spaziergang im Wald", persianTitle: "قدم زدن در جنگل",
      germanStory: "Am Wochenende machen wir einen Spaziergang im Wald. Dort gibt es viele hohe Bäume. Die Luft im Wald ist frisch und riecht gut. Wir hören die Vögel in den Bäumen singen. Plötzlich sehen wir ein kleines Eichhörnchen. Es klettert ganz schnell einen Baum hoch. Ein Spaziergang im Wald ist immer schön.",
      persianTranslation: "آخر هفته ما در جنگل قدم می‌زنیم. آنجا درختان بلند زیادی وجود دارد. هوای جنگل تازه است و بوی خوبی می‌دهد. ما صدای آواز پرندگان را در درختان می‌شنویم. ناگهان یک سنجاب کوچک می‌بینیم. او خیلی سریع از یک درخت بالا می‌رود. قدم زدن در جنگل همیشه زیباست."
    },
    { germanTitle: "Berufe", persianTitle: "شغل‌ها",
      germanStory: "Es gibt so viele verschiedene Berufe. Ein Arzt im Krankenhaus hilft kranken Menschen. Ein Lehrer in der Schule unterrichtet die Kinder. Ein Bäcker steht früh auf und backt leckeres Brot. Ein Polizist sorgt auf der Straße für Sicherheit. Wenn ich groß bin, möchte ich vielleicht Pilot werden und große Flugzeuge fliegen.",
      persianTranslation: "شغل‌های مختلف زیادی وجود دارد. یک پزشک در بیمارستان به افراد بیمار کمک می‌کند. یک معلم در مدرسه به کودکان آموزش می‌دهد. یک نانوا زود بیدار می‌شود و نان خوشمزه می‌پزد. یک پلیس در خیابان امنیت را تأمین می‌کند. وقتی بزرگ شدم، شاید بخواهم خلبان شوم و هواپیماهای بزرگ را برانم."
    },
    { germanTitle: "Ein Besuch bei den Großeltern", persianTitle: "دیدار با پدربزرگ و مادربزرگ",
      germanStory: "Am Sonntag besuchen wir meine Großeltern. Sie wohnen in einem kleinen Haus auf dem Land. Meine Oma kocht immer ein sehr leckeres Mittagessen für uns. Nach dem Essen erzählt mein Opa spannende Geschichten von früher. Wir spielen auch im großen Garten. Ich liebe meine Großeltern sehr und besuche sie gerne.",
      persianTranslation: "روز یکشنبه ما به دیدن پدربزرگ و مادربزرگم می‌رویم. آنها در یک خانه کوچک در روستا زندگی می‌کنند. مادربزرگم همیشه یک ناهار خیلی خوشمزه برای ما می‌پزد. بعد از غذا، پدربزرگم داستان‌های هیجان‌انگیزی از گذشته تعریف می‌کند. ما در باغ بزرگ هم بازی می‌کنیم. من پدربزرگ و مادربزرگم را خیلی دوست دارم و دوست دارم به دیدنشان بروم."
    },
    { germanTitle: "Musik hören", persianTitle: "گوش دادن به موسیقی",
      germanStory: "Ich höre sehr gerne Musik. Ich habe große Kopfhörer, die ich aufsetze. Ich höre die Musik meistens auf meinem Handy. Am liebsten mag ich fröhliche Popmusik. Musik macht mich immer glücklich. Wenn ich ein gutes Lied höre, tanze ich manchmal lustig in meinem Zimmer. Musik ist einfach toll.",
      persianTranslation: "من خیلی دوست دارم به موسیقی گوش دهم. من هدفون‌های بزرگی دارم که روی گوشم می‌گذارم. من بیشتر با موبایلم به موسیقی گوش می‌دهم. بیشتر از همه موسیقی پاپ شاد را دوست دارم. موسیقی همیشه مرا خوشحال می‌کند. وقتی یک آهنگ خوب می‌شنوم، گاهی به طور بامزه‌ای در اتاقم می‌رقصم. موسیقی واقعاً عالی است."
    },
    { germanTitle: "Körperteile", persianTitle: "اعضای بدن",
      germanStory: "Heute lerne ich etwas über meinen Körper. Ich stelle mich vor den Spiegel. Ganz oben ist mein Kopf. Mit meinen zwei Augen kann ich alles sehen. Mit meiner Nase rieche ich die Blumen. Und mit meinem Mund kann ich lachen. Ich habe auch zwei Arme zum Winken und zwei Beine zum Laufen. Es ist toll, einen gesunden Körper zu haben.",
      persianTranslation: "امروز من چیزی در مورد بدنم یاد می‌گیرم. من جلوی آینه می‌ایستم. در بالاترین قسمت سرم قرار دارد. با دو چشمم می‌توانم همه چیز را ببینم. با بینی‌ام بوی گل‌ها را حس می‌کنم. و با دهانم می‌توانم بخندم. من دو بازو برای دست تکان دادن و دو پا برای راه رفتن هم دارم. داشتن یک بدن سالم عالی است."
    },
    { germanTitle: "Ein Fußballspiel", persianTitle: "یک بازی فوتبال",
      germanStory: "Ich spiele in einer Fußballmannschaft. Heute haben wir ein wichtiges Spiel. Ich trage mein rotes Trikot. Das Spiel beginnt und alle rennen. Ich renne schnell dem Ball hinterher. Plötzlich schieße ich den Ball in Richtung Tor. Und... Tor! Ich habe ein Tor geschossen! Meine Mannschaft gewinnt am Ende. Ich bin sehr stolz.",
      persianTranslation: "من در یک تیم فوتبال بازی می‌کنم. امروز ما یک بازی مهم داریم. من پیراهن قرمز ورزشی‌ام را می‌پوشم. بازی شروع می‌شود و همه می‌دوند. من سریع به دنبال توپ می‌دوم. ناگهان توپ را به سمت دروازه شوت می‌کنم. و... گل! من یک گل زدم! تیم من در نهایت برنده می‌شود. من خیلی مغرورم."
    },
    { germanTitle: "Im Zoo", persianTitle: "در باغ وحش",
      germanStory: "Am Wochenende gehen wir in den Zoo. Ein Zoo ist ein großer Park mit vielen wilden Tieren. Ich sehe die großen Elefanten und die langen Giraffen. Die Affen sind am lustigsten. Sie klettern und spielen den ganzen Tag. Der Löwe liegt in der Sonne und schläft. Ein Tag im Zoo ist immer ein tolles Abenteuer.",
      persianTranslation: "آخر هفته ما به باغ وحش می‌رویم. باغ وحش یک پارک بزرگ با حیوانات وحشی زیاد است. من فیل‌های بزرگ و زرافه‌های بلند را می‌بینم. میمون‌ها از همه بامزه‌تر هستند. آنها تمام روز بالا می‌روند و بازی می‌کنند. شیر در آفتاب دراز کشیده و خوابیده است. یک روز در باغ وحش همیشه یک ماجراجویی عالی است."
    },
    { germanTitle: "Ein einfacher Plan für das Wochenende", persianTitle: "یک برنامه ساده برای آخر هفته",
      germanStory: "Ich freue mich auf das Wochenende, denn dann habe ich frei. Am Samstagmorgen möchte ich lange schlafen. Am Nachmittag treffe ich meine Freunde im Park. Vielleicht gehen wir später noch ins Kino. Am Sonntag möchte ich meine Oma besuchen. Wir essen zusammen Kuchen. Das wird bestimmt ein schönes Wochenende.",
      persianTranslation: "من برای آخر هفته خوشحالم، چون آن وقت تعطیل هستم. صبح شنبه می‌خواهم زیاد بخوابم. بعد از ظهر دوستانم را در پارک ملاقات می‌کنم. شاید بعداً به سینما هم برویم. روز یکشنبه می‌خواهم به دیدن مادربزرگم بروم. ما با هم کیک می‌خوریم. این حتماً یک آخر هفته خوب خواهد بود."
    },
    { germanTitle: "Auf dem Markt", persianTitle: "در بازار",
      germanStory: "Jeden Samstagmorgen ist in unserer Stadt ein großer Markt. Meine Mutter und ich gehen oft zusammen dorthin. Wir kaufen frisches Obst und Gemüse direkt vom Bauern. Wir kaufen auch leckeren Käse und frisches Brot. Alles auf dem Markt ist sehr frisch. Ich mag die vielen bunten Stände und die vielen Leute.",
      persianTranslation: "هر روز صبح شنبه در شهر ما یک بازار بزرگ برپا می‌شود. من و مادرم اغلب با هم به آنجا می‌رویم. ما میوه و سبزیجات تازه را مستقیماً از کشاورز می‌خریم. ما همچنین پنیر خوشمزه و نان تازه می‌خریم. همه چیز در بازار خیلی تازه است. من غرفه‌های رنگارنگ زیاد و جمعیت زیاد را دوست دارم."
    },
    { germanTitle: "Hausarbeit", persianTitle: "کارهای خانه",
      germanStory: "Zu Hause müssen alle ein bisschen bei der Hausarbeit helfen. Meine Aufgabe ist es, mein Zimmer aufzuräumen. Ich bringe auch jeden Abend den Müll raus. Manchmal helfe ich meiner Mutter beim Tischdecken vor dem Essen. Wenn alle mithelfen, sind wir schnell fertig. Dann haben wir mehr Zeit zum gemeinsamen Spielen.",
      persianTranslation: "در خانه همه باید کمی در کارهای خانه کمک کنند. وظیفه من مرتب کردن اتاقم است. من همچنین هر شب زباله‌ها را بیرون می‌برم. گاهی قبل از غذا در چیدن میز به مادرم کمک می‌کنم. وقتی همه کمک می‌کنند، ما سریع تمام می‌کنیم. آن وقت زمان بیشتری برای بازی با هم داریم."
    },
    { germanTitle: "Ein Regentag", persianTitle: "یک روز بارانی",
      germanStory: "Heute regnet es den ganzen Tag. Ich kann leider nicht draußen spielen. Also bleibe ich gemütlich zu Hause. Zuerst lese ich ein spannendes Buch. Dann hole ich meine Stifte und male ein buntes Bild. Am Nachmittag schaue ich mit meiner Familie einen Film. Ein Regentag zu Hause kann also auch sehr schön sein.",
      persianTranslation: "امروز تمام روز باران می‌بارد. متأسفانه نمی‌توانم بیرون بازی کنم. برای همین راحت در خانه می‌مانم. اول یک کتاب هیجان‌انگیز می‌خوانم. بعد مدادهایم را برمی‌دارم و یک نقاشی رنگارنگ می‌کشم. بعد از ظهر با خانواده‌ام یک فیلم تماشا می‌کنم. پس یک روز بارانی در خانه هم می‌تواند خیلی زیبا باشد."
    },
    { germanTitle: "In der Bibliothek", persianTitle: "در کتابخانه",
      germanStory: "Ich gehe sehr gerne in die Stadtbibliothek. Dort gibt es Regale voller Bücher. Man kann die Bücher kostenlos ausleihen. Ich suche mir heute ein spannendes Abenteuerbuch aus. Dann setze ich mich an einen Tisch und fange an zu lesen. In der Bibliothek muss man immer ganz leise sein.",
      persianTranslation: "من خیلی دوست دارم به کتابخانه شهر بروم. آنجا قفسه‌هایی پر از کتاب وجود دارد. می‌توان کتاب‌ها را رایگان قرض گرفت. من امروز یک کتاب ماجراجویی هیجان‌انگیز برای خودم انتخاب می‌کنم. بعد پشت یک میز می‌نشینم و شروع به خواندن می‌کنم. در کتابخانه باید همیشه کاملاً ساکت بود."
    },
    { germanTitle: "Ein Geschenk kaufen", persianTitle: "خریدن یک هدیه",
      germanStory: "Meine beste Freundin Anna hat bald Geburtstag. Ich möchte ihr ein schönes Geschenk kaufen. Deshalb gehe ich heute in ein Spielzeuggeschäft. Ich sehe viele tolle Sachen: Puppen, Autos und Spiele. Ich entscheide mich für ein Puzzle mit 50 Teilen. Ich hoffe, das Geschenk gefällt Anna.",
      persianTranslation: "بهترین دوستم آنا به زودی تولد دارد. من می‌خواهم برای او یک هدیه زیبا بخرم. برای همین امروز به یک فروشگاه اسباب‌بازی می‌روم. من چیزهای عالی زیادی می‌بینم: عروسک‌ها، ماشین‌ها و بازی‌ها. من یک پازل ۵۰ تکه را انتخاب می‌کنم. امیدوارم آنا از هدیه خوشش بیاید."
    },
    { germanTitle: "Mein Tagesablauf", persianTitle: "برنامه روزانه من",
      germanStory: "Mein Tag hat eine feste Struktur. Ich stehe um sieben Uhr auf und frühstücke. Um acht Uhr beginnt die Schule. Um 13 Uhr komme ich wieder nach Hause. Dann esse ich Mittagessen und mache meine Hausaufgaben. Am Abend spiele ich oder lese ein Buch. Um 21 Uhr bin ich müde und gehe ins Bett.",
      persianTranslation: "روز من یک ساختار ثابت دارد. من ساعت هفت بیدار می‌شوم و صبحانه می‌خورم. ساعت هشت مدرسه شروع می‌شود. ساعت ۱۳ دوباره به خانه می‌آیم. بعد ناهار می‌خورم و تکالیفم را انجام می‌دههم. عصر بازی می‌کنم یا یک کتاب می‌خوانم. ساعت ۲۱ خسته هستم و به رختخواب می‌روم."
    },
    { germanTitle: "Eine Party", persianTitle: "یک مهمانی",
      germanStory: "Am Samstag feiern wir eine große Party. Das ganze Haus ist mit bunten Ballons und Girlanden dekoriert. Es läuft laute Musik und es gibt leckeres Essen. Alle meine Freunde sind eingeladen. Wir tanzen im Wohnzimmer und lachen viel. Partys machen immer sehr viel Spaß.",
      persianTranslation: "روز شنبه ما یک مهمانی بزرگ برگزار می‌کنیم. تمام خانه با بادکنک‌ها و ریسه‌های رنگارنگ تزئین شده است. موسیقی بلند پخش می‌شود و غذای خوشمزه وجود دارد. همه دوستانم دعوت شده‌اند. ما در اتاق نشیمن می‌رقصیم و زیاد می‌خندیم. مهمانی‌ها همیشه خیلی سرگرم‌کننده هستند."
    },
    { germanTitle: "Fahrzeuge", persianTitle: "وسایل نقلیه",
      germanStory: "Es gibt so viele verschiedene Fahrzeuge! Auf der Straße sehe ich ein schnelles Auto. Am Bahnhof wartet ein langer Zug auf den Schienen. Hoch oben am Himmel fliegt ein großes Flugzeug. Und auf dem Fluss fährt ein langsames Schiff. Aber am liebsten fahre ich mit meinem eigenen kleinen Fahrrad.",
      persianTranslation: "وسایل نقلیه مختلف زیادی وجود دارد! در خیابان یک ماشین سریع می‌بینم. در ایستگاه قطار یک قطار طولانی روی ریل‌ها منتظر است. بالا در آسمان یک هواپیمای بزرگ پرواز می‌کند. و روی رودخانه یک کشتی آهسته حرکت می‌کند. اما من بیشتر از همه دوست دارم با دوچرخه کوچک خودم بروم."
    },
    { germanTitle: "Im Hotel", persianTitle: "در هتل",
      germanStory: "Wenn wir im Urlaub sind, wohnen wir manchmal in einem Hotel. Unser Hotelzimmer ist im dritten Stock. Es hat ein großes, weiches Bett und einen Balkon. Vom Balkon aus kann ich das Meer sehen. Am Morgen gehen wir zum Frühstück. Das Frühstück im Hotel ist immer besonders lecker.",
      persianTranslation: "وقتی ما در تعطیلات هستیم، گاهی در یک هتل اقامت می‌کنیم. اتاق هتل ما در طبقه سوم است. یک تخت بزرگ و نرم و یک بالکن دارد. از بالکن می‌توانم دریا را ببینم. صبح ما برای صبحانه می‌رویم. صبحانه در هتل همیشه به طور خاص خوشمزه است."
    },
    { germanTitle: "Ein Schneemann bauen", persianTitle: "ساختن یک آدم برفی",
      germanStory: "Im Winter liegt überall Schnee. Ich ziehe meine dicke Jacke an und gehe nach draußen. Ich möchte einen Schneemann bauen. Zuerst rolle ich drei große Schneebälle. Dann setze ich sie aufeinander. Der Schneemann bekommt eine Karotte als Nase und zwei alte Knöpfe als Augen. Er sieht sehr lustig aus.",
      persianTranslation: "در زمستان همه جا برف است. من ژاکت کلفتم را می‌پوشم و بیرون می‌روم. من می‌خواهم یک آدم برفی بسازم. اول سه گلوله برفی بزرگ را می‌غلظانم. بعد آنها را روی هم قرار می‌دههم. آدم برفی یک هویج به عنوان بینی و دو دکمه قدیمی به عنوان چشم می‌گیرد. او خیلی بامزه به نظر می‌رسد."
    },
    { germanTitle: "Die Nachbarn", persianTitle: "همسایه‌ها",
      germanStory: "Neben unserem Haus wohnt eine nette Familie. Sie heißen Familie Müller. Sie haben zwei Kinder, die so alt sind wie ich. Manchmal spielen wir zusammen in ihrem Garten. Wenn wir im Urlaub sind, gießen die Müllers unsere Blumen. Es ist schön, gute Nachbarn zu haben.",
      persianTranslation: "کنار خانه ما یک خانواده مهربان زندگی می‌کند. نام آنها خانواده مولر است. آنها دو فرزند دارند که همسن من هستند. گاهی ما با هم در باغ آنها بازی می‌کنیم. وقتی ما در تعطیلات هستیم، خانواده مولر گل‌های ما را آب می‌دهند. داشتن همسایه‌های خوب زیباست."
    },
    { germanTitle: "Ein verlorener Schlüssel", persianTitle: "یک کلید گمشده",
      germanStory: "Oh nein, ich kann meinen Hausschlüssel nicht finden! Ich suche überall. Zuerst suche ich in meiner Hosentasche. Dann suche ich in meiner Jacke. Er ist nicht da. Wo ist er nur? Ich werde ein bisschen nervös. Ah, da liegt er! Ich sehe ihn auf dem kleinen Tisch neben der Tür. Puh, Glück gehabt!",
      persianTranslation: "اوه نه، من نمی‌توانم کلید خانه‌ام را پیدا کنم! من همه جا را می‌گردم. اول در جیب شلوارم می‌گردم. بعد در ژاکتم می‌گردم. آنجا نیست. کجاست؟ من کمی عصبی می‌شوم. آه, آنجاست! من آن را روی میز کوچک کنار در می‌بینم. اوف، شانس آوردم!"
    },
    { germanTitle: "In den Bergen", persianTitle: "در کوهستان",
      germanStory: "Im Sommer machen wir eine Wanderung in den Bergen. Wir laufen einen kleinen Weg immer weiter hinauf. Die Luft hier oben ist sehr klar und frisch. Wir sehen viele grüne Bäume und große Felsen. Als wir oben auf dem Gipfel sind, haben wir eine tolle Aussicht. Wir können das ganze Tal sehen.",
      persianTranslation: "در تابستان ما در کوهستان پیاده‌روی می‌کنیم. ما از یک مسیر کوچک بالاتر و بالاتر می‌رویم. هوای اینجا بالا خیلی صاف و تازه است. ما درختان سبز زیاد و صخره‌های بزرگی می‌بینیم. وقتی به قله می‌رسیم، منظره فوق‌العاده‌ای داریم. ما می‌توانیم تمام دره را ببینیم."
    },
    { germanTitle: "Ein Arztbesuch", persianTitle: "مراجعه به پزشک",
      germanStory: "Heute fühle ich mich nicht gut. Mein Hals tut weh und meine Nase läuft. Meine Mutter geht mit mir zum Arzt. Der Arzt ist sehr freundlich. Er schaut in meinen Hals und hört meine Lunge ab. Er sagt, ich soll viel Tee trinken und im Bett bleiben. Er gibt mir eine Medizin, damit ich bald wieder gesund werde.",
      persianTranslation: "امروز حالم خوب نیست. گلویم درد می‌کند و آبریزش بینی دارم. مادرم با من به دکتر می‌رود. دکتر خیلی مهربان است. او به گلوی من نگاه می‌کند و به ریه‌هایم گوش می‌دهد. او می‌گوید باید چای زیاد بنوشم و در رختخواب بمانم. او به من یک دارو می‌دهد تا به زودی دوباره سالم شوم."
    },
    { germanTitle: "Ein schöner Traum", persianTitle: "یک رویای زیبا",
      germanStory: "Letzte Nacht hatte ich einen wunderschönen Traum. Ich habe geträumt, dass ich fliegen kann. Ich bin einfach über meine Stadt geflogen wie ein Vogel. Ich habe alles von oben gesehen: die kleinen Häuser, die Bäume und die winzigen Autos. Es war ein wunderbares Gefühl von Freiheit. Dann bin ich leider aufgewacht.",
      persianTranslation: "دیشب یک رویای بسیار زیبا دیدم. من خواب دیدم که می‌توانم پرواز کنم. من به سادگی مانند یک پرنده بر فراز شهرم پرواز کردم. من همه چیز را از بالا دیدم: خانه‌های کوچک، درختان و ماشین‌های ریز. این یک حس فوق‌العاده از آزادی بود. متأسفانه بعد بیدار شدم."
    },
    { germanTitle: "Ein Brief vom Briefträger", persianTitle: "نامه‌ای از پستچی",
      germanStory: "Heute kommt der Briefträger zu unserer Tür. Er hat einen Brief für mich! Das ist eine Überraschung. Der Brief ist von meiner Freundin, die in einer anderen Stadt wohnt. Ich freue mich sehr darüber. Ich öffne den Brief sofort und lese, was sie über ihre Ferien geschrieben hat.",
      persianTranslation: "امروز پستچی به در خانه ما می‌آید. او یک نامه برای من دارد! این یک غافلگیری است. نامه از طرف دوستم است که در شهر دیگری زندگی می‌کند. من از این بابت خیلی خوشحالم. من فوراً نامه را باز می‌کنم و می‌خوانم که او درباره تعطیلاتش چه نوشته است."
    },
    { germanTitle: "Einen Kuchen backen", persianTitle: "پختن یک کیک",
      germanStory: "Heute backe ich mit meiner Mutter einen leckeren Kuchen. Wir brauchen dafür Mehl, Zucker, Eier und Butter. Wir mischen alle Zutaten in einer großen Schüssel. Dann kommt der Teig in eine Form und in den heißen Ofen. Das ganze Haus riecht wunderbar. Nach einer Stunde ist der Kuchen fertig und schmeckt sehr gut.",
      persianTranslation: "امروز من با مادرم یک کیک خوشمزه می‌پزم. ما برای آن به آرد، شکر، تخم‌مرغ و کره نیاز داریم. ما همه مواد را در یک کاسه بزرگ مخلوط می‌کنیم. سپس خمیر به یک قالب و به فر داغ می‌رود. تمام خانه بوی فوق‌العاده‌ای می‌دهد. بعد از یک ساعت کیک آماده است و طعم خیلی خوبی دارد."
    },
    { germanTitle: "Im Schwimmbad", persianTitle: "در استخر",
      germanStory: "An einem heißen Sommertag gehen wir ins Schwimmbad. Das kühle Wasser ist eine tolle Erfrischung. Ich springe mit einem lauten 'Platsch' ins Wasser. Ich kann schon ein bisschen schwimmen und tauchen. Am meisten Spaß macht aber die große Wasserrutsche. Ich rutsche immer wieder hinunter.",
      persianTranslation: "در یک روز گرم تابستانی ما به استخر می‌رویم. آب خنک یک طراوت عالی است. من با یک «پلاچ» بلند به داخل آب می‌پرم. من دیگر می‌توانم کمی شنا کنم و غواصی کنم. اما بیشترین سرگرمی را سرسره آبی بزرگ دارد. من بارها و بارها از آن پایین می‌آیم."
    },
    { germanTitle: "Ein Gewitter", persianTitle: "یک طوفان",
      germanStory: "Am Abend wird der Himmel plötzlich ganz dunkel. Es kommt ein starkes Gewitter. Zuerst sehe ich einen hellen Blitz, dann höre ich einen lauten Donner. Der Regen prasselt gegen das Fenster. Ich sitze gemütlich und sicher im Haus. Ich habe keine Angst. Ich finde Gewitter sogar ein bisschen spannend.",
      persianTranslation: "عصر آسمان ناگهان کاملاً تاریک می‌شود. یک طوفان شدید می‌آید. اول یک برق روشن می‌بینم، بعد یک رعد بلند می‌شنوم. باران به پنجره می‌کوبد. من راحت و امن در خانه نشسته‌ام. من نمی‌ترسم. من حتی طوفان‌ها را کمی هیجان‌انگیز می‌دانم."
    },
    { germanTitle: "Meine Lieblingsfarbe", persianTitle: "رنگ مورد علاقه من",
      germanStory: "Meine absolute Lieblingsfarbe ist Grün. Grün ist die Farbe von frischem Gras im Sommer und von den Blättern an den Bäumen. Ich finde, Grün ist eine sehr ruhige und schöne Farbe. Mein Zimmer hat eine grüne Wand und ich habe auch ein grünes T-Shirt, das ich sehr gerne trage. Die Farbe Grün gefällt mir einfach.",
      persianTranslation: "رنگ مورد علاقه مطلق من سبز است. سبز رنگ چمن تازه در تابستان و برگ‌های روی درختان است. به نظر من، سبز یک رنگ بسیار آرام و زیباست. اتاق من یک دیوار سبز دارد و من یک تی‌شرت سبز هم دارم که خیلی دوست دارم بپوشم. من einfach رنگ سبز را دوست دارم."
    },
    { germanTitle: "Ein Puzzle lösen", persianTitle: "حل کردن یک پازل",
      germanStory: "Ich habe ein neues Puzzle bekommen. Es hat 100 Teile. Das Bild auf dem Karton zeigt einen bunten Bauernhof. Ich breite alle Teile auf dem Tisch aus. Das ist manchmal schwierig, das richtige Teil zu finden. Man braucht viel Geduld. Aber wenn das Puzzle fertig ist, bin ich sehr stolz auf mein Werk.",
      persianTranslation: "من یک پازل جدید گرفته‌ام. ۱۰۰ تکه دارد. تصویر روی جعبه یک مزرعه رنگارنگ را نشان می‌دهد. من تمام تکه‌ها را روی میز پهن می‌کنم. گاهی اوقات پیدا کردن تکه درست دشوار است. به صبر زیادی نیاز است. اما وقتی پازل تمام می‌شود، من خیلی به کارم افتخار می‌کنم."
    },
    { germanTitle: "Die Post", persianTitle: "اداره پست",
      germanStory: "Ich gehe heute zur Post. Ich muss eine Postkarte an meine Tante in einer anderen Stadt schicken. Bei der Post kaufe ich eine Briefmarke am Schalter. Ich klebe die bunte Briefmarke auf die Karte. Dann werfe ich die Karte in den großen, gelben Briefkasten. Die Post bringt die Karte dann zu meiner Tante.",
      persianTranslation: "من امروز به اداره پست می‌روم. من باید یک کارت پستال برای عمه‌ام در شهر دیگری بفرستم. در پست من یک تمبر از باجه می‌خرم. من تمبر رنگارنگ را روی کارت می‌چسبانم. سپس کارت را در صندوق پست بزرگ و زرد می‌اندازم. پست بعداً کارت را به عمه‌ام می‌رساند."
    },
    { germanTitle: "Ein lustiger Witz", persianTitle: "یک جوک خنده‌دار",
      germanStory: "Mein Freund erzählt mir heute einen Witz. Er fragt: 'Treffen sich zwei Fische. Sagt der eine: 'Hai!' Sagt der andere: 'Wo?'' Ich verstehe den Witz und muss sehr laut lachen. Lachen ist gesund und macht gute Laune. Später erzähle ich den Witz meinem Vater.",
      persianTranslation: "دوستم امروز برایم یک جوک تعریف می‌کند. او می‌پرسد: «دو ماهی به هم می‌رسند. یکی می‌گوید: «سلام (کوسه)!» دیگری می‌گوید: «کجا؟»» من جوک را می‌فهمم و باید خیلی بلند بخندم. خنده سالم است و حال آدم را خوب می‌کند. بعداً جوک را برای پدرم تعریف می‌کنم."
    },
    { germanTitle: "Schlafen und Träumen", persianTitle: "خوابیدن و رویا دیدن",
      germanStory: "Jede Nacht schlafe ich in meinem gemütlichen Bett. Schlafen ist sehr wichtig für den Körper, damit er sich erholen kann. Im Schlaf träume ich oft. Manchmal sind die Träume schön, manchmal sind sie aber auch komisch. Am Morgen wache ich erholt auf und bin wieder fit für den neuen Tag.",
      persianTranslation: "هر شب من در تخت دنج خود می‌خوابم. خواب برای بدن بسیار مهم است تا بتواند استراحت کند. در خواب من اغلب رویا می‌بینم. گاهی رویاها زیبا هستند، اما گاهی هم عجیب هستند. صبح من با استراحت بیدار می‌شوم و دوباره برای روز جدید آماده هستم."
    },
    { germanTitle: "Ein Glas Wasser", persianTitle: "یک لیوان آب",
      germanStory: "Nach dem Spielen habe ich großen Durst. Ich gehe in die Küche. Dort nehme ich ein Glas aus dem Schrank. Ich halte das Glas unter den Wasserhahn und fülle es mit kühlem Wasser. Ich trinke das ganze Glas leer. Wasser ist kühl und erfrischend. Es ist das beste Getränk, wenn man Durst hat.",
      persianTranslation: "بعد از بازی من خیلی تشنه هستم. به آشپزخانه می‌روم. آنجا یک لیوان از کابینت برمی‌دارم. من لیوان را زیر شیر آب می‌گیرم و آن را با آب خنک پر می‌کنم. من تمام لیوان را می‌نوشم. آب خنک و باطراوت است. این بهترین نوشیدنی است وقتی تشنه هستی."
    },
    { germanTitle: "Die Ampel", persianTitle: "چراغ راهنمایی",
      germanStory: "Ich stehe an einer großen Straße und möchte hinübergehen. Die Ampel für die Fußgänger ist rot. Das bedeutet 'Stopp', also warte ich. Alle Autos fahren schnell vorbei. Dann wird die Ampel grün. Das bedeutet 'Gehen'. Jetzt kann ich sicher über die Straße gehen. Ich schaue trotzdem immer nach links und rechts.",
      persianTranslation: "من کنار یک خیابان بزرگ ایستاده‌ام و می‌خواهم عبور کنم. چراغ راهنمایی برای عابران پیاده قرمز است. این یعنی «ایست»، پس من منتظر می‌مانم. همه ماشین‌ها با سرعت عبور می‌کنند. سپس چراغ سبز می‌شود. این یعنی «برو». حالا می‌توانم با خیال راحت از خیابان عبور کنم. با این حال من همیشه به چپ و راست نگاه می‌کنم."
    },
    { germanTitle: "Ein Baum im Garten", persianTitle: "یک درخت در باغ",
      germanStory: "In unserem Garten steht ein sehr großer Apfelbaum. Im Frühling hat er wunderschöne rosa Blüten. Im Sommer gibt er uns viel Schatten. Im Herbst können wir die süßen, roten Äpfel ernten. Und im Winter hat er keine Blätter mehr. Der Baum verändert sich mit jeder Jahreszeit.",
      persianTranslation: "در باغ ما یک درخت سیب خیلی بزرگ قرار دارد. در بهار شکوفه‌های صورتی بسیار زیبایی دارد. در تابستان به ما سایه زیادی می‌دهد. در پاییز می‌توانیم سیب‌های شیرین و قرمز را بچینیم. و در زمستان دیگر برگی ندارد. درخت با هر فصل تغییر می‌کند."
    },
    { germanTitle: "Auf dem Land", persianTitle: "در روستا",
      germanStory: "Das Leben auf dem Land ist viel ruhiger als in der Stadt. Man sieht viele grüne Felder und große Wälder. Die Luft ist sehr sauber. Manchmal kann man Tiere auf der Wiese sehen, zum Beispiel Kühe und Schafe. Es gibt nicht so viele Autos und Lärm. Ich mag die Ruhe und die Natur auf dem Land.",
      persianTranslation: "زندگی در روستا بسیار آرام‌تر از شهر است. مزارع سبز زیاد و جنگل‌های بزرگی را می‌بینی. هوا خیلی تمیز است. گاهی می‌توان حیوانات را در چمنزار دید, به عنوان مثال گاو و گوسفند. به اندازه شهر ماشین و سر و صدا وجود ندارد. من آرامش و طبیعت روستا را دوست دارم."
    },
    { germanTitle: "Eine Tasse Tee", persianTitle: "یک فنجان چای",
      germanStory: "Wenn es draußen kalt und ungemütlich ist, trinke ich gerne eine Tasse warmen Tee. Meine Mutter kocht das Wasser im Wasserkocher. Sie gibt einen Teebeutel in meine Lieblingstasse. Der Tee muss dann ein paar Minuten ziehen. Ich trinke meinen Tee mit ein bisschen Zucker. Er wärmt mich von innen und ist sehr lecker.",
      persianTranslation: "وقتی بیرون سرد و ناخوشایند است، دوست دارم یک فنجان چای گرم بنوشم. مادرم آب را در کتری برقی می‌جوشاند. او یک چای کیسه‌ای در فنجان مورد علاقه‌ام می‌گذارد. چای بعد باید چند دقیقه دم بکشد. من چایم را با کمی شکر می‌نوشم. او مرا از درون گرم می‌کند و خیلی خوشمزه است."
    },
    { germanTitle: "Ein Foto machen", persianTitle: "عکس گرفتن",
      germanStory: "Ich mache sehr gerne Fotos mit meinem Handy. Heute sehe ich einen wunderschönen Schmetterling im Garten. Er ist ganz bunt. Ich gehe ganz leise näher und mache ein Foto von ihm. Das Foto ist sehr gut geworden, man sieht alle Farben. Fotos sind tolle Erinnerungen für später.",
      persianTranslation: "من خیلی دوست دارم با موبایلم عکس بگیرم. امروز یک پروانه بسیار زیبا در باغ می‌بینم. او کاملاً رنگارنگ است. من خیلی آرام نزدیک‌تر می‌شوم و از او یک عکس می‌گیرم. عکس خیلی خوب شده است، تمام رنگ‌ها دیده می‌شوند. عکس‌ها خاطرات عالی برای آینده هستند."
    },
    { germanTitle: "Die Hausnummer", persianTitle: "شماره خانه",
      germanStory: "Jedes Haus in unserer Straße hat eine Hausnummer. Unsere Hausnummer ist die 12. Die Nummer steht groß neben der Tür, damit man sie gut sehen kann. Der Briefträger braucht die Hausnummer, damit er weiß, wo er die Post einwerfen soll. Es ist wichtig, seine eigene Adresse und Hausnummer zu kennen.",
      persianTranslation: "هر خانه‌ای در خیابان ما یک شماره خانه دارد. شماره خانه ما ۱۲ است. شماره به صورت بزرگ کنار در قرار دارد تا بتوان آن را خوب دید. پستچی به شماره خانه نیاز دارد تا بداند پست را کجا بیندازد. مهم است که آدرس و شماره خانه خود را بدانی."
    },
    { germanTitle: "Ein Stern am Himmel", persianTitle: "یک ستاره در آسمان",
      germanStory: "Am Abend, wenn es dunkel ist, schaue ich gerne in den Himmel. Der Himmel ist dann ganz schwarz. Ich sehe den hellen Mond und viele, viele Sterne. Die Sterne sind wie kleine, funkelnde Lichtpunkte. Sie sind unglaublich weit weg. Der Sternenhimmel ist für mich das Schönste in der Nacht.",
      persianTranslation: "عصر، وقتی تاریک است، دوست دارم به آسمان نگاه کنم. آسمان آن وقت کاملاً سیاه است. من ماه روشن و ستاره‌های بسیار زیادی را می‌بینم. ستاره‌ها مانند نقاط نورانی کوچک و درخشانی هستند. آنها به طور باورنکردنی دور هستند. آسمان پرستاره برای من زیباترین چیز در شب است."
    },
    { germanTitle: "Ein Lied singen", persianTitle: "آواز خواندن",
      germanStory: "Ich singe sehr gerne Lieder. Mein Lieblingslied ist ein fröhliches Kinderlied. Ich kenne den ganzen Text auswendig. Ich singe oft im Auto, unter der Dusche oder einfach so in meinem Zimmer. Singen macht mir gute Laune. Manchmal singen wir auch alle zusammen in der Schule.",
      persianTranslation: "من خیلی دوست دارم آهنگ بخوانم. آهنگ مورد علاقه من یک آهنگ شاد کودکانه است. من تمام متن را از حفظ بلدم. من اغلب در ماشین، زیر دوش یا همینطور در اتاقم آواز می‌خوانم. آواز خواندن حال مرا خوب می‌کند. گاهی اوقات ما همه با هم در مدرسه آواز می‌خوانیم."
    },
    { germanTitle: "Ein Buch lesen", persianTitle: "کتاب خواندن",
      germanStory: "Ich liebe es, Bücher zu lesen. Lesen ist wie eine Reise in eine andere Welt. Mein aktuelles Buch handelt von einem mutigen Piraten auf dem Meer. Es ist sehr spannend geschrieben. Ich lese jeden Abend vor dem Schlafen ein Kapitel. Ich bin immer neugierig, was als Nächstes passiert.",
      persianTranslation: "من عاشق کتاب خواندن هستم. خواندن مانند سفری به دنیای دیگر است. کتاب فعلی من درباره یک دزد دریایی شجاع در دریا است. بسیار هیجان‌انگیز نوشته شده است. من هر شب قبل از خواب یک فصل می‌خوانم. من همیشه کنجکاو هستم که بعد چه اتفاقی می‌افتد."
    },
    { germanTitle: "Am Fluss", persianTitle: "کنار رودخانه",
      germanStory: "In unserer Stadt gibt es einen großen Fluss. Wir gehen oft am Ufer spazieren. Manchmal kann man große Schiffe sehen, die langsam vorbeifahren. Viele Enten schwimmen auf dem Wasser. Einige Leute sitzen am Ufer und angeln. Es ist sehr friedlich, dem Wasser beim Fließen zuzusehen.",
      persianTranslation: "در شهر ما یک رودخانه بزرگ وجود دارد. ما اغلب در ساحل قدم می‌زنیم. گاهی می‌توان کشتی‌های بزرگی را دید که به آرامی عبور می‌کنند. اردک‌های زیادی روی آب شنا می‌کنند. برخی از مردم در ساحل نشسته‌اند و ماهیگیری می‌کنند. تماشای جریان آب بسیار آرامش‌بخش است."
    },
    { germanTitle: "Ein Paket bekommen", persianTitle: "دریافت یک بسته",
      germanStory: "Plötzlich klingelt es an der Tür. Es ist der Paketbote! Er hat ein großes Paket für meine Eltern. Es ist eine große braune Kiste. Ich bin sehr neugierig, was wohl darin ist. Vielleicht ist es ein Geschenk oder etwas, das Mama bestellt hat. Das ist immer eine kleine Überraschung.",
      persianTranslation: "ناگهان زنگ در به صدا در می‌آید. پستچی بسته است! او یک بسته بزرگ برای والدینم دارد. این یک جعبه قهوه‌ای بزرگ است. من خیلی کنجکاو هستم که داخل آن چه چیزی است. شاید یک هدیه باشد یا چیزی که مادر سفارش داده است. این همیشه یک غافلگیری کوچک است."
    },
    { germanTitle: "Ein sauberes Zimmer", persianTitle: "یک اتاق تمیز",
      germanStory: "Am Samstag ist Aufräumtag. Ich muss mein Zimmer aufräumen. Ich lege meine Bücher ordentlich ins Regal. Ich räume meine Kleidung in den Schrank. Ich wische auch den Staub von meinem Schreibtisch. Wenn alles fertig ist, ist mein Zimmer wieder sauber und ordentlich. Das fühlt sich gut an.",
      persianTranslation: "روز شنبه روز نظافت است. من باید اتاقم را مرتب کنم. من کتاب‌هایم را مرتب در قفسه می‌گذارم. من لباس‌هایم را در کمد می‌گذارم. من همچنین گرد و غبار را از روی میز تحریرم پاک می‌کنم. وقتی همه چیز تمام می‌شود، اتاق من دوباره تمیز و مرتب است. این حس خوبی دارد."
    },
    { germanTitle: "Ein Apfel vom Baum", persianTitle: "یک سیب از درخت",
      germanStory: "Im Garten meiner Oma steht ein alter Apfelbaum. Im Herbst sind die Äpfel reif. Ich klettere auf eine kleine Leiter, um einen Apfel zu pflücken. Ich pflücke einen großen, roten Apfel direkt vom Baum. Er ist sehr saftig und schmeckt süß und frisch. Das ist der beste Apfel der Welt.",
      persianTranslation: "در باغ مادربزرگم یک درخت سیب قدیمی قرار دارد. در پاییز سیب‌ها رسیده‌اند. من از یک نردبان کوچک بالا می‌روم تا یک سیب بچینم. من یک سیب بزرگ و قرمز را مستقیماً از درخت می‌چینم. بسیار آبدار است و طعم شیرین و تازه‌ای دارد. این بهترین سیب دنیاست."
    },
    { germanTitle: "Eine Blume pflanzen", persianTitle: "کاشتن یک گل",
      germanStory: "Heute pflanze ich eine Blume in unserem Garten. Zuerst mache ich ein kleines Loch in die Erde. Dann setze ich die kleine Pflanze vorsichtig hinein. Ich bedecke die Wurzeln wieder mit Erde. Zum Schluss gieße ich die Blume mit Wasser aus der Gießkanne. Jetzt muss sie nur noch wachsen und blühen.",
      persianTranslation: "امروز من یک گل در باغمان می‌کارم. اول یک سوراخ کوچک در خاک ایجاد می‌کنم. بعد گیاه کوچک را با احتیاط داخل آن قرار می‌دههم. من ریشه‌ها را دوباره با خاک می‌پوشانم. در آخر گل را با آب از آبپاش آبیاری می‌کنم. حالا فقط باید رشد کند و شکوفه دهد."
    },
    { germanTitle: "Der Mond in der Nacht", persianTitle: "ماه در شب",
      germanStory: "Wenn die Sonne untergeht, wird es dunkel und der Mond kommt heraus. Manchmal ist er ganz rund wie ein Ball, das ist der Vollmond. Manchmal ist er aber auch nur eine schmale, helle Sichel. Der Mond leuchtet hell am Nachthimmel. Er ist der treue Begleiter der Erde.",
      persianTranslation: "وقتی خورشید غروب می‌کند، تاریک می‌شود و ماه بیرون می‌آید. گاهی اوقات کاملاً گرد مانند یک توپ است، این ماه کامل است. اما گاهی اوقات هم فقط یک هلال باریک و روشن است. ماه در آسمان شب به روشنی می‌درخشد. او همراه وفادار زمین است."
    },
    { germanTitle: "Ein Vogel im Nest", persianTitle: "یک پرنده در لانه",
      germanStory: "Auf einem hohen Baum vor meinem Fenster ist ein kleines Nest. In dem Nest sitzt eine Amsel auf ihren Eiern. Nach ein paar Wochen schlüpfen kleine Babys. Die kleinen Vögel piepsen den ganzen Tag, weil sie Hunger haben. Die Mutter fliegt immer wieder weg, um Futter zu suchen. Ich schaue ihnen gerne vom Fenster aus zu.",
      persianTranslation: "روی یک درخت بلند جلوی پنجره من یک لانه کوچک وجود دارد. در لانه یک توکای سیاه روی تخم‌هایش نشسته است. بعد از چند هفته بچه‌های کوچکی از تخم بیرون می‌آیند. پرندگان کوچک تمام روز جیک جیک می‌کنند چون گرسنه هستند. مادر بارها و بارها پرواز می‌کند تا غذا پیدا کند. من دوست دارم از پنجره آنها را تماشا کنم."
    },
    { germanTitle: "Ein Ballspiel", persianTitle: "یک بازی با توپ",
      germanStory: "Ich spiele mit meinem Freund im Park. Wir haben einen bunten Ball dabei. Wir werfen uns den Ball gegenseitig zu. Ich werfe und er fängt. Dann wirft er und ich fange. Manchmal fällt der Ball auf den Boden, dann lachen wir. Es ist ein ganz einfaches Spiel, aber es macht uns beiden großen Spaß.",
      persianTranslation: "من با دوستم در پارک بازی می‌کنم. ما یک توپ رنگارنگ همراه داریم. ما توپ را به سمت یکدیگر پرتاب می‌کنیم. من پرتاب می‌کنم و او می‌گیرد. بعد او پرتاب می‌کند و من می‌گیرم. گاهی توپ روی زمین می‌افتد، آن وقت ما می‌خندیم. این یک بازی کاملاً ساده است، اما برای هر دوی ما بسیار سرگرم‌کننده است."
    },
    { germanTitle: "Ein Spaziergang mit dem Hund", persianTitle: "پیاده‌روی با سگ",
      germanStory: "Jeden Tag gehe ich mit unserem Hund Bello Gassi. Ich mache die Leine an sein Halsband und wir gehen los. Wir gehen meistens in den Park. Bello liebt es, überall zu schnüffeln. Wenn er andere Hunde sieht, freut er sich und wedelt mit dem Schwanz. Spaziergänge sind das Beste an seinem Tag.",
      persianTranslation: "هر روز من با سگمان بلو به پیاده‌روی می‌روم. من قلاده را به گردنبندش می‌بندم و ما راه می‌افتیم. ما بیشتر به پارک می‌رویم. بلو عاشق این است که همه جا را بو بکشد. وقتی سگ‌های دیگر را می‌بیند، خوشحال می‌شود و دمش را تکان می‌دهد. پیاده‌روی بهترین قسمت روز اوست."
    },
    { germanTitle: "Ein neues Fahrrad", persianTitle: "یک دوچرخه جدید",
      germanStory: "Zu meinem Geburtstag habe ich ein tolles, neues Fahrrad bekommen. Es ist leuchtend rot und glänzt in der Sonne. Es hat eine laute Klingel und ein helles Licht für die Dunkelheit. Ich übe damit, in unserer Straße zu fahren. Radfahren ist super, aber ich bin immer sehr vorsichtig.",
      persianTranslation: "برای تولدم یک دوچرخه عالی و جدید گرفتم. به رنگ قرمز روشن است و در آفتاب می‌درخشد. یک زنگ بلند و یک چراغ روشن برای تاریکی دارد. من با آن در خیابانمان تمرین می‌کنم. دوچرخه‌سواری عالی است، اما من همیشه خیلی مراقب هستم."
    },
    { germanTitle: "Ein Feuer im Kamin", persianTitle: "آتشی در شومینه",
      germanStory: "Im Winter ist es draußen oft sehr kalt. Drinnen machen wir dann manchmal ein Feuer im Kamin an. Das trockene Holz knistert lustig. Die Flammen tanzen und sind warm und orange. Wir sitzen davor auf dem weichen Teppich und schauen ins Feuer. Das macht das Zimmer sehr gemütlich.",
      persianTranslation: "در زمستان بیرون اغلب خیلی سرد است. آن وقت ما گاهی داخل، در شومینه آتش روشن می‌کنیم. چوب خشک به طور بامزه‌ای ترق و تروق می‌کند. شعله‌ها می‌رقصند و گرم و نارنجی هستند. ما جلوی آن روی فرش نرم می‌نشینیم و به آتش نگاه می‌کنیم. این اتاق را خیلی دنج می‌کند."
    },
    { germanTitle: "Ein Regenschirm", persianTitle: "یک چتر",
      germanStory: "Es fängt plötzlich an zu regnen. Zum Glück habe ich meinen Regenschirm dabei. Er ist blau mit vielen weißen Punkten. Ich drücke auf den Knopf und er öffnet sich. Jetzt werde ich nicht nass. Der Regen trommelt leise auf den Schirm. Ich finde, das ist ein schönes Geräusch.",
      persianTranslation: "ناگهان باران شروع به باریدن می‌کند. خوشبختانه من چترم را همراه دارم. آبی با نقطه‌های سفید زیاد است. من دکمه را فشار می‌دههم و او باز می‌شود. حالا خیس نمی‌شوم. باران به آرامی روی چتر طبل می‌زند. به نظر من، این صدای زیبایی است."
    },
    { germanTitle: "Der erste Schnee", persianTitle: "اولین برف",
      germanStory: "Als ich heute Morgen aufwache, ist draußen alles weiß. Es hat in der Nacht geschneit! Das ist der erste Schnee in diesem Jahr. Ich ziehe mich schnell an und renne sofort nach draußen. Der Schnee ist kalt und ganz weich. Ich mache eine lustige Schneeballschlacht mit meinem Bruder.",
      persianTranslation: "امروز صبح وقتی بیدار می‌شوم، بیرون همه چیز سفید است. شب برف باریده است! این اولین برف امسال است. من سریع لباس می‌پوشم و فوراً به بیرون می‌دوم. برف سرد و کاملاً نرم است. من با برادرم یک گلوله برفی بازی بامزه می‌کنم."
    },
    { germanTitle: "Eine freundliche Geste", persianTitle: "یک حرکت دوستانه",
      germanStory: "Ich sehe, wie eine alte Frau ihre Einkaufstasche fallen lässt. Alle Äpfel rollen heraus. Ich gehe schnell hin und helfe ihr, alles wieder einzusammeln. Sie lächelt mich an und sagt: 'Vielen Dank, mein Junge. Du bist sehr nett.' Ich fühle mich gut, weil ich ihr geholfen habe.",
      persianTranslation: "من می‌بینم که یک خانم مسن کیسه خریدش را می‌اندازد. همه سیب‌ها بیرون می‌غلتند. من سریع به آنجا می‌روم و به او کمک می‌کنم همه چیز را دوباره جمع کند. او به من لبخند می‌زند و می‌گوید: «خیلی ممنون، پسرکم. تو خیلی مهربان هستی.» من حس خوبی دارم چون به او کمک کرده‌ام."
    },
    { germanTitle: "Die Sonne scheint", persianTitle: "خورشید می‌درخشد",
      germanStory: "Die Sonne scheint heute sehr hell vom blauen Himmel. Sie macht den Tag warm und freundlich. Die Blumen im Garten strecken ihre Köpfe zur Sonne. Wenn die Sonne scheint, setze ich meine Sonnenbrille auf. Ein sonniger Tag macht mir immer besonders gute Laune.",
      persianTranslation: "خورشید امروز بسیار درخشان از آسمان آبی می‌تابد. او روز را گرم و دوستانه می‌کند. گل‌های باغ سرهایشان را به سمت خورشید می‌کشند. وقتی خورشید می‌تابد، من عینک آفتابی‌ام را می‌زنم. یک روز آفتابی همیشه حال مرا به طور خاص خوب می‌کند."
    },
    { germanTitle: "Ein Lächeln", persianTitle: "یک لبخند",
      germanStory: "Auf dem Spielplatz sehe ich ein Mädchen, das traurig auf der Bank sitzt. Ich gehe zu ihr und lächle sie freundlich an. Sie schaut auf und lächelt ein kleines bisschen zurück. Ein Lächeln kostet nichts, aber es kann einen anderen Menschen ein bisschen glücklich machen. Es ist eine einfache und nette Geste.",
      persianTranslation: "در زمین بازی من دختری را می‌بینم که غمگین روی نیمکت نشسته است. من به سمت او می‌روم و با مهربانی به او لبخند می‌زنم. او نگاه می‌کند و کمی لبخند می‌زند. یک لبخند هیچ هزینه‌ای ندارد، اما می‌تواند یک انسان دیگر را کمی خوشحال کند. این یک حرکت ساده و مهربانانه است."
    },
    { germanTitle: "Ein ruhiger Abend", persianTitle: "یک عصر آرام",
      germanStory: "Nach einem langen und lauten Tag bin ich müde. Am Abend sitze ich mit meinen Eltern auf dem Sofa. Der Fernseher ist aus und wir reden einfach nur über den Tag. Es ist ganz ruhig und friedlich. Das ist für mich oft die beste Zeit des ganzen Tages.",
      persianTranslation: "بعد از یک روز طولانی و پر سر و صدا من خسته هستم. عصر من با والدینم روی مبل نشسته‌ام. تلویزیون خاموش است و ما فقط درباره روز صحبت می‌کنیم. کاملاً آرام و صلح‌آمیز است. این برای من اغلب بهترین زمان کل روز است."
    },
    { germanTitle: "Ein leckeres Eis", persianTitle: "یک بستنی خوشمزه",
      germanStory: "Weil es heute so heiß ist, kaufe ich mir ein Eis. Ich nehme zwei Kugeln: Schokolade und Erdbeere. Das Eis ist in einer knusprigen Waffel. Es schmilzt schnell in der Sonne, deshalb muss ich es schnell essen. Es ist so lecker, kalt und erfrischend.",
      persianTranslation: "چون امروز خیلی گرم است، من یک بستنی برای خودم می‌خرم. من دو اسکوپ می‌گیرم: شکلات و توت فرنگی. بستنی در یک نان ترد است. به سرعت در آفتاب آب می‌شود، برای همین باید آن را سریع بخورم. خیلی خوشمزه، سرد و باطراوت است."
    },
    { germanTitle: "Eine gute Nacht", persianTitle: "یک شب بخیر",
      germanStory: "Es ist schon spät. Es ist Zeit für mich, ins Bett zu gehen. Zuerst putze ich meine Zähne. Dann ziehe ich meinen gemütlichen Schlafanzug an. Meine Eltern kommen in mein Zimmer, um mir eine gute Nacht zu wünschen. Sie geben mir einen Kuss. Ich mache das Licht aus und schlafe schnell ein.",
      persianTranslation: "دیگر دیر شده است. وقت آن است که من به رختخواب بروم. اول دندان‌هایم را مسواک می‌زنم. بعد لباس خواب راحتم را می‌پوشم. والدینم به اتاق من می‌آیند تا برایم شب بخیر آرزو کنند. آنها مرا می‌بوسند. من چراغ را خاموش می‌کنم و سریع به خواب می‌روم."
    },
    { 
      germanTitle: "Eine Fahrradtour", 
      persianTitle: "یک تور دوچرخه‌سواری",
      germanStory: "Am Samstag machen Papa und ich eine Fahrradtour. Mein Fahrrad ist blau und Papas ist schwarz. Wir fahren zusammen durch den Park. Die Sonne scheint und die Vögel singen in den Bäumen. Wir halten an einem kleinen See an und essen ein Sandwich, das Mama uns gemacht hat. Es ist ein sehr schöner Ausflug.",
      persianTranslation: "روز شنبه من و پدرم یک تور دوچرخه‌سواری می‌کنیم. دوچرخه من آبی است و دوچرخه پدرم مشکی. ما با هم در پارک می‌رانیم. خورشید می‌درخشد و پرندگان در درختان آواز می‌خوانند. ما کنار یک دریاچه کوچک توقف می‌کنیم و ساندویچی را که مادر برایمان درست کرده است، می‌خوریم. این یک گردش بسیار زیباست."
    },
    { 
      germanTitle: "Im Flugzeug", 
      persianTitle: "در هواپیما",
      germanStory: "Heute ist mein erster Flug! Ich sitze in einem großen Flugzeug direkt am Fenster. Beim Start wird es laut und schnell. Unten werden die Häuser und Autos ganz klein. Wir fliegen über den Wolken, wo der Himmel immer blau ist. Es ist sehr aufregend. Eine nette Stewardess bringt mir sogar einen Apfelsaft.",
      persianTranslation: "امروز اولین پرواز من است! من در یک هواپیمای بزرگ درست کنار پنجره نشسته‌ام. هنگام بلند شدن، صدا بلند و سریع می‌شود. در پایین خانه‌ها و ماشین‌ها خیلی کوچک می‌شوند. ما بر فراز ابرها پرواز می‌کنیم، جایی که آسمان همیشه آبی است. بسیار هیجان‌انگیز است. یک مهماندار مهربان حتی برایم یک آب سیب می‌آورد."
    },
    { 
      germanTitle: "Ein Geschenk für Mama", 
      persianTitle: "هدیه‌ای برای مادر",
      germanStory: "Mama hat bald Geburtstag und ich möchte ihr etwas Besonderes schenken. Ich nehme meine Buntstifte und male ein schönes Bild für sie. Auf dem Bild sind eine große, lachende Sonne, viele bunte Blumen und unsere ganze Familie. Ich verpacke das Bild in schönes Geschenkpapier. Ich hoffe, Mama freut sich über meine Überraschung.",
      persianTranslation: "مادر به زودی تولد دارد و من می‌خواهم به او یک هدیه خاص بدهم. من مداد رنگی‌هایم را برمی‌دارم و یک نقاشی زیبا برای او می‌کشم. در نقاشی یک خورشید بزرگ و خندان، گل‌های رنگارنگ زیاد و تمام خانواده ما هستند. من نقاشی را در کاغذ کادوی زیبا بسته‌بندی می‌کنم. امیدوارم مادر از غافلگیری من خوشحال شود."
    },
    { 
      germanTitle: "Verloren im Supermarkt", 
      persianTitle: "گم‌شده در سوپرمارکت",
      germanStory: "Ich bin mit Mama im Supermarkt. Plötzlich sehe ich ein tolles Spielzeug und laufe schnell dorthin. Als ich mich umdrehe, ist Mama weg. Ich kann sie nicht sehen und habe ein bisschen Angst. Ich rufe laut ihren Namen. Dann höre ich ihre Stimme: 'Leo, hier bin ich!' Ich laufe schnell zu ihr und bin wieder glücklich.",
      persianTranslation: "من با مادر در سوپرمارکت هستم. ناگهان یک اسباب‌بازی عالی می‌بینم و به سرعت به سمت آن می‌دوم. وقتی برمی‌گردم، مادر رفته است. من نمی‌توانم او را ببینم و کمی می‌ترسم. من با صدای بلند اسمش را صدا می‌زنم. بعد صدایش را می‌شنوم: «لئو، من اینجا هستم!» من سریع به سمت او می‌دوم و دوباره خوشحال می‌شوم."
    },
    { 
      germanTitle: "Mein erster Schultag", 
      persianTitle: "اولین روز مدرسه‌ام",
      germanStory: "Heute ist mein allererster Schultag, ich bin sehr aufgeregt. Ich habe eine große Schultüte bekommen. Sie ist schwer und voll mit Süßigkeiten und kleinen Geschenken. Meine Lehrerin ist sehr nett und heißt Frau Schmidt. Im Klassenzimmer lerne ich viele neue Kinder kennen. Ich glaube, die Schule wird spannend.",
      persianTranslation: "امروز اولین روز مدرسه من است، من خیلی هیجان‌زده هستم. من یک قیف مدرسه بزرگ گرفته‌ام. سنگین است و پر از شیرینی و هدیه‌های کوچک. معلم من خیلی مهربان است و نامش خانم اشمیت است. در کلاس با بچه‌های جدید زیادی آشنا می‌شوم. فکر می‌کنم مدرسه هیجان‌انگیز خواهد بود."
    }
  ],
  A2: [
    { 
      germanTitle: "Ein Wochenende in Berlin", 
      persianTitle: "یک آخر هفته در برلین", 
      audioUrl: "https://storage.googleapis.com/audio-samples-for-app/a2-story-1.mp3",
      germanStory: "Letztes Wochenende habe ich einen Ausflug nach Berlin gemacht, worauf ich mich schon lange gefreut hatte. Ich bin mit dem Zug gefahren, weil die Reise so viel entspannter ist als mit dem Auto. Am Samstagvormittag stand ich endlich vor dem Brandenburger Tor. Es war noch beeindruckender als auf den Fotos. Danach machte ich eine gemütliche Bootsfahrt auf der Spree und sah die Stadt vom Wasser aus. Zum Abendessen probierte ich in einem kleinen Imbiss eine leckere Currywurst. Berlin ist eine faszinierende Stadt, die ich bald wieder besuchen möchte.",
      persianTranslation: "آخر هفته گذشته سفری به برلین داشتم که مدت‌ها منتظرش بودم. من با قطار سفر کردم، چون سفر اینطور خیلی آرامش‌بخش‌تر از با ماشین است. صبح شنبه بالاخره جلوی دروازه براندنبورگ ایستادم. حتی از عکس‌ها هم تأثیرگذارتر بود. بعد از آن یک سفر آرام با قایق روی رودخانه شپری داشتم و شهر را از روی آب دیدم. برای شام در یک اغذیه‌فروشی کوچک یک کاری‌ورست خوشمزه را امتحان کردم. برلین شهری شگفت‌انگیز است که می‌خواهم به زودی دوباره از آن دیدن کنم."
    },
    { 
      germanTitle: "Ein Brief an einen Freund", 
      persianTitle: "نامه‌ای به یک دوست", 
      audioUrl: "https://storage.googleapis.com/audio-samples-for-app/a2-story-2.mp3",
      germanStory: "Lieber Alex, ich hoffe, es geht dir gut! Ich schreibe dir, weil ich dir von meinem neuen Job erzählen wollte. Seit einem Monat arbeite ich in einem kleinen, beliebten Café in der Innenstadt. Die Arbeit ist manchmal ziemlich anstrengend, besonders am Wochenende. Aber meine Kollegen sind super nett und wir haben ein tolles Team. Letzte Woche hat mir mein Chef beigebracht, wie man den perfekten Cappuccino mit Milchschaum-Herz macht. Du musst mich unbedingt bald besuchen kommen, dann mache ich einen für dich! Herzliche Grüße, deine Sarah.",
      persianTranslation: "الکس عزیز، امیدوارم حالت خوب باشد! برایت می‌نویسم چون می‌خواستم از شغل جدیدم برایت بگویم. از یک ماه پیش در یک کافه کوچک و محبوب در مرکز شهر کار می‌کنم. کار گاهی اوقات بسیار خسته‌کننده است، به خصوص آخر هفته‌ها. اما همکارانم فوق‌العاده مهربان هستند و ما یک تیم عالی داریم. هفته گذشته رئیسم به من یاد داد که چگونه کاپوچینوی عالی با یک قلب از کف شیر درست کنم. حتماً باید به زودی به دیدنم بیایی، آن وقت یکی برایت درست می‌کنم! با بهترین آرزوها، سارای تو."
    },
    { 
      germanTitle: "Beim Arzt", 
      persianTitle: "نزد دکتر",
      germanStory: "Gestern wachte ich mit starken Kopfschmerzen auf, deshalb beschloss ich, zum Arzt zu gehen. Im Wartezimmer musste ich fast eine halbe Stunde warten, weil viele Patienten da waren. Dann rief mich die Ärztin auf. Sie war sehr freundlich, maß meinen Blutdruck und hörte meine Lunge ab. Sie sagte, ich solle mehr Wasser trinken und versuchen, weniger Stress zu haben. Sie gab mir ein Rezept für Schmerztabletten, falls es nicht besser wird.",
      persianTranslation: "دیروز با سردرد شدیدی از خواب بیدار شدم، برای همین تصمیم گرفتم به دکتر بروم. در اتاق انتظار تقریباً نیم ساعت منتظر ماندم، چون بیماران زیادی آنجا بودند. بعد دکتر مرا صدا زد. او بسیار مهربان بود، فشار خونم را اندازه گرفت و به ریه‌هایم گوش داد. او گفت باید آب بیشتری بنوشم و سعی کنم استرس کمتری داشته باشم. او برایم یک نسخه برای قرص‌های مسکن داد، در صورتی که بهتر نشود."
    },
    { 
      germanTitle: "Ein Rezept kochen", 
      persianTitle: "پختن یک دستور غذا",
      germanStory: "Heute Abend wollte ich für meine Freunde etwas Besonderes kochen. Ich habe online ein Rezept für eine vegetarische Linsensuppe gefunden. Zuerst musste ich Zwiebeln, Karotten und Sellerie in kleine Würfel schneiden. Das dauerte eine Weile. Dann habe ich das Gemüse in einem großen Topf mit etwas Öl angebraten. Danach kamen die Linsen und Gemüsebrühe dazu. Die Suppe musste fast eine Stunde kochen, aber am Ende duftete die ganze Küche wunderbar und sie schmeckte fantastisch.",
      persianTranslation: "امشب می‌خواستم برای دوستانم چیز خاصی بپزم. من در اینترنت یک دستور پخت برای سوپ عدس گیاهی پیدا کردم. ابتدا باید پیاز، هویج و کرفس را به قطعات کوچک خرد می‌کردم. این کار مدتی طول کشید. بعد سبزیجات را در یک قابلمه بزرگ با کمی روغن تفت دادم. سپس عدس و آب سبزیجات اضافه شدند. سوپ باید تقریباً یک ساعت می‌پخت، اما در پایان تمام آشپزخانه بوی فوق‌العاده‌ای می‌داد و طعمش عالی بود."
    },
    { 
      germanTitle: "Mein letzter Urlaub", 
      persianTitle: "آخرین تعطیلات من",
      germanStory: "In meinem letzten Urlaub war ich mit meiner Familie in Italien am Meer. Wir wohnten in einem kleinen Hotel mit Blick auf den Strand. Jeden Morgen, nach dem Frühstück, gingen wir direkt zum Meer, um zu schwimmen. Das Wasser war herrlich warm. Abends spazierten wir durch die kleine Stadt und aßen in gemütlichen Restaurants Pizza und Pasta. Das Wetter war die ganze Woche perfekt. Ich war sehr entspannt, weil ich den Alltagsstress komplett vergessen konnte.",
      persianTranslation: "در آخرین تعطیلاتم با خانواده‌ام در ایتالیا کنار دریا بودم. ما در یک هتل کوچک با منظره ساحل اقامت داشتیم. هر روز صبح، بعد از صبحانه، مستقیماً به دریا می‌رفتیم تا شنا کنیم. آب به طور شگفت‌انگیزی گرم بود. عصرها در شهر کوچک قدم می‌زدیم و در رستوران‌های دنج پیتزا و پاستا می‌خوردیم. هوا تمام هفته عالی بود. من خیلی آرام بودم، چون توانستم استرس روزمره را کاملاً فراموش کنم."
    },
    { 
      germanTitle: "Eine neue Wohnung finden", 
      persianTitle: "پیدا کردن یک آپارتمان جدید",
      germanStory: "Ich suche schon seit zwei Monaten eine neue Wohnung, weil meine alte zu klein geworden ist. Es ist wirklich schwierig, in dieser Stadt etwas Gutes zu finden, das auch bezahlbar ist. Gestern habe ich eine interessante Wohnung besichtigt. Sie hatte zwei Zimmer und einen sonnigen Balkon, was mir sehr gut gefiel. Leider war die Miete etwas zu hoch für mein Budget. Also muss ich wohl weitersuchen und hoffen, bald Glück zu haben.",
      persianTranslation: "من دو ماه است که به دنبال یک آپارتمان جدید هستم، چون آپارتمان قدیمی‌ام خیلی کوچک شده است. واقعاً سخت است در این شهر چیز خوبی پیدا کنی که قابل پرداخت هم باشد. دیروز یک آپارتمان جالب را بازدید کردم. دو اتاق و یک بالکن آفتاب‌گیر داشت که خیلی خوشم آمد. متأسفانه اجاره‌اش کمی برای بودجه من بالا بود. بنابراین احتمالاً باید به جستجو ادامه دهم و امیدوارم به زودی شانس بیاورم."
    },
    { 
      germanTitle: "Ein Gespräch mit den Nachbarn", 
      persianTitle: "گفتگو با همسایه‌ها",
      germanStory: "Gestern traf ich meine neuen Nachbarn zum ersten Mal im Treppenhaus. Sie sind gerade erst am Wochenende eingezogen. Wir stellten uns kurz vor und unterhielten uns. Sie heißen Familie Schmidt und kommen ursprünglich aus Hamburg. Sie wirkten sehr sympathisch und freundlich. Ich habe sie für nächste Woche auf einen Kaffee eingeladen, damit wir uns in Ruhe besser kennenlernen können.",
      persianTranslation: "دیروز برای اولین بار همسایه‌های جدیدم را در راه‌پله ملاقات کردم. آنها تازه آخر هفته اسباب‌کشی کرده‌اند. ما کوتاه خودمان را معرفی کردیم و با هم صحبت کردیم. نام آنها خانواده اشمیت است و اصالتاً از هامبورگ می‌آیند. آنها بسیار خوش‌برخورد و مهربان به نظر می‌رسیدند. من آنها را برای هفته آینده به یک قهوه دعوت کردم تا بتوانیم در آرامش بهتر با هم آشنا شویم."
    },
    { 
      germanTitle: "Ein Fest in Deutschland", 
      persianTitle: "یک جشن در آلمان",
      germanStory: "Letzten Monat war ich zum ersten Mal auf dem Oktoberfest in München. Es ist ein riesiges und weltberühmtes Volksfest. Viele Leute, auch Touristen, tragen traditionelle Kleidung wie Dirndl und Lederhosen. Es gibt riesige Bierzelte, in denen man bayerisches Bier trinkt und Hähnchen isst. Die Atmosphäre war unglaublich fröhlich und laut, obwohl es sehr voll war. Es war eine tolle Erfahrung.",
      persianTranslation: "ماه گذشته برای اولین بار در جشن اکتبر در مونیخ بودم. این یک جشن مردمی غول‌پیکر و مشهور جهانی است. بسیاری از مردم، حتی توریست‌ها، لباس‌های سنتی مانند دیرندل و لدرهوزن می‌پوشند. چادرهای آبجوی غول‌پیکری وجود دارد که در آنها آبجوی باواریایی می‌نوشند و مرغ می‌خورند. جو فوق‌العاده شاد و پر سر و صدا بود، اگرچه خیلی شلوغ بود. این یک تجربه عالی بود."
    },
    { 
      germanTitle: "Auf dem Bahnhof", 
      persianTitle: "در ایستگاه قطار",
      germanStory: "Ich musste heute Morgen meinen Freund vom Bahnhof abholen. Leider hatte sein Zug aus Frankfurt 20 Minuten Verspätung. Ich wartete auf einer Bank am Bahnsteig und beobachtete die digitale Anzeigetafel. Als der Zug endlich ankam, war die Freude groß, weil wir uns fast ein Jahr nicht gesehen hatten. Wir umarmten uns lange und herzlich, bevor wir zu meiner Wohnung fuhren.",
      persianTranslation: "امروز صبح باید دوستم را از ایستگاه قطار می‌آوردم. متأسفانه قطارش از فرانکفورت ۲۰ دقیقه تأخیر داشت. من روی یک نیمکت در سکو منتظر ماندم و تابلوی اعلانات دیجیتال را تماشا کردم. وقتی قطار بالاخره رسید، شادی بزرگی بود چون ما تقریباً یک سال بود که همدیگر را ندیده بودیم. ما قبل از اینکه به آپارتمان من برویم، مدت طولانی و صمیمانه یکدیگر را در آغوش گرفتیم."
    },
    { 
      germanTitle: "Sport und Fitness", 
      persianTitle: "ورزش و تناسب اندام",
      germanStory: "Ich versuche, regelmäßig Sport zu machen, um fit zu bleiben. Normalerweise gehe ich dreimal pro Woche ins Fitnessstudio. Am Montag mache ich Krafttraining. Am Mittwoch besuche ich einen Yogakurs, der mir hilft, flexibel zu bleiben und mich zu entspannen. Und am Freitag gehe ich eine Stunde im Park laufen. Der Sport hilft mir nicht nur körperlich, sondern auch, um den Kopf nach einem langen Arbeitstag freizubekommen.",
      persianTranslation: "من سعی می‌کنم به طور منظم ورزش کنم تا خوش‌فرم بمانم. معمولاً سه بار در هفته به باشگاه بدنسازی می‌روم. دوشنبه‌ها تمرینات قدرتی انجام می‌دهم. چهارشنبه‌ها در یک کلاس یوگا شرکت می‌کنم که به من کمک می‌کند انعطاف‌پذیر بمانم و آرام شوم. و جمعه‌ها یک ساعت در پارک می‌دوم. ورزش نه تنها از نظر جسمی به من کمک می‌کند، بلکه برای آزاد کردن ذهنم پس از یک روز کاری طولانی نیز مفید است."
    },
    { 
        germanTitle: "Eine Party planen", 
        persianTitle: "برنامه‌ریزی یک مهمانی",
        germanStory: "Nächsten Monat habe ich Geburtstag und möchte eine kleine Party organisieren. Die Planung macht Spaß, ist aber auch viel Arbeit. Zuerst muss ich eine Gästeliste schreiben und digitale Einladungen verschicken. Dann muss ich überlegen, welche Speisen und Getränke ich anbieten möchte. Vielleicht mache ich ein Buffet. Außerdem werde ich eine Playlist mit guter Musik erstellen, damit wir auch tanzen können. Ich hoffe, es wird ein schöner Abend.",
        persianTranslation: "ماه آینده تولدم است و می‌خواهم یک مهمانی کوچک ترتیب دهم. برنامه‌ریزی سرگرم‌کننده است، اما کار زیادی هم دارد. ابتدا باید یک لیست مهمان بنویسم و دعوت‌نامه‌های دیجیتال بفرستم. سپس باید فکر کنم چه غذاها و نوشیدنی‌هایی را می‌خواهم ارائه دهم. شاید یک بوفه درست کنم. علاوه بر این، یک لیست پخش با موسیقی خوب ایجاد خواهم کرد تا بتوانیم برقصیم. امیدوارم شب خوبی شود."
    },
    { 
        germanTitle: "Ein unvergesslicher Ausflug", 
        persianTitle: "یک گردش فراموش‌نشدنی",
        germanStory: "Letzten Sommer machten wir mit Freunden einen Ausflug zu einem alten Schloss in den Bergen. Das Schloss stand auf einem hohen Felsen. Wir mussten eine Stunde durch den Wald wandern, um dorthin zu gelangen. Der Weg war anstrengend, aber die Aussicht von oben war atemberaubend. Man konnte das ganze Tal überblicken. Wir machten viele Fotos und hatten ein Picknick. Es war ein perfekter Tag, den ich so schnell nicht vergessen werde.",
        persianTranslation: "تابستان گذشته با دوستانمان به یک قلعه قدیمی در کوهستان سفر کردیم. قلعه روی یک صخره بلند قرار داشت. ما باید یک ساعت در جنگل پیاده‌روی می‌کردیم تا به آنجا برسیم. مسیر خسته‌کننده بود، اما منظره از بالا نفس‌گیر بود. می‌شد تمام دره را دید. ما عکس‌های زیادی گرفتیم و یک پیک‌نیک داشتیم. این یک روز عالی بود که به این زودی‌ها فراموش نخواهم کرد."
    },
    { 
        germanTitle: "Ein Problem mit dem Computer", 
        persianTitle: "مشکلی با کامپیوتر",
        germanStory: "Mein Laptop funktioniert seit gestern nicht mehr richtig. Er ist unglaublich langsam und die Programme stürzen ständig ab. Ich habe versucht, ihn neu zu starten und nach Viren zu suchen, aber das hat leider nicht geholfen. Ich kenne mich technisch nicht gut aus, deshalb bin ich ratlos. Wahrscheinlich muss ich ihn zu einem Experten bringen, damit er ihn repariert. Ich hoffe, es ist nicht zu teuer.",
        persianTranslation: "لپ‌تاپ من از دیروز به درستی کار نمی‌کند. فوق‌العاده کند است و برنامه‌ها مدام از کار می‌افتند. من سعی کردم آن را دوباره راه‌اندازی کنم و به دنبال ویروس بگردم، اما متأسفانه کمکی نکرد. من از نظر فنی اطلاعات خوبی ندارم، برای همین درمانده‌ام. احتمالاً باید آن را پیش یک متخصص ببرم تا آن را تعمیر کند. امیدوارم خیلی گران نباشد."
    },
    { 
        germanTitle: "Ein Besuch im Museum", 
        persianTitle: "بازدید از موزه",
        germanStory: "Am Wochenende war ich im städtischen Kunstmuseum. Es gab eine Sonderausstellung mit modernen Skulpturen, die mich sehr interessiert hat. Ich fand die Kunstwerke sehr beeindruckend und kreativ, auch wenn ich nicht alles verstanden habe. Ich lief fast drei Stunden durch die verschiedenen Räume. Es war ein sehr inspirierender Nachmittag und eine schöne Abwechslung zum Alltag.",
        persianTranslation: "آخر هفته من در موزه هنر شهری بودم. یک نمایشگاه ویژه با مجسمه‌های مدرن وجود داشت که برایم بسیار جالب بود. من آثار هنری را بسیار تأثیرگذار و خلاقانه یافتم، حتی اگر همه چیز را نفهمیدم. من تقریباً سه ساعت در اتاق‌های مختلف قدم زدم. این یک بعد از ظهر بسیار الهام‌بخش و یک تنوع خوب از روزمرگی بود."
    },
    { 
        germanTitle: "Die Wegbeschreibung", 
        persianTitle: "آدرس دادن",
        germanStory: "Gestern sprach mich ein Tourist auf der Straße an und fragte nach dem Weg zum Rathaus. Er sprach nur Englisch, aber das war kein Problem. Ich versuchte, ihm den Weg so einfach wie möglich zu erklären: 'Gehen Sie diese Straße geradeaus bis zur zweiten großen Kreuzung. Dort biegen Sie links ab. Nach ungefähr 200 Metern sehen Sie das Rathaus auf der rechten Seite.' Er bedankte sich freundlich und ich hoffe, dass er es gefunden hat.",
        persianTranslation: "دیروز یک توریست در خیابان با من صحبت کرد و مسیر رسیدن به شهرداری را پرسید. او فقط انگلیسی صحبت می‌کرد، اما این مشکلی نبود. من سعی کردم مسیر را به ساده‌ترین شکل ممکن برایش توضیح دهم: «این خیابان را مستقیم تا دومین تقاطع بزرگ بروید. آنجا به چپ بپیچید. بعد از تقریباً ۲۰۰ متر شهرداری را در سمت راست خواهید دید.» او با مهربانی تشکر کرد و من امیدوارم که آن را پیدا کرده باشد."
    },
    { 
        germanTitle: "Ein kleines Missgeschick", 
        persianTitle: "یک اتفاق ناگوار کوچک",
        germanStory: "Heute Morgen passierte mir in der Küche ein kleines Missgeschick. Ich war noch müde und verschüttete meinen Kaffee über mein ganzes weißes Hemd. Es gab einen großen braunen Fleck. Das war sehr ärgerlich, weil ich es eilig hatte. Ich musste mich schnell umziehen, bevor ich zur Arbeit ging. Manchmal beginnen Tage einfach nicht gut, aber ich habe versucht, darüber zu lachen.",
        persianTranslation: "امروز صبح در آشپزخانه یک اتفاق ناگوار کوچک برایم افتاد. من هنوز خسته بودم و قهوه‌ام را روی تمام پیراهن سفیدم ریختم. یک لکه بزرگ قهوه‌ای ایجاد شد. این خیلی آزاردهنده بود، چون عجله داشتم. من باید سریع لباس عوض می‌کردم قبل از اینکه به سر کار بروم. گاهی روزها خوب شروع نمی‌شوند، اما من سعی کردم به آن بخندم."
    },
    { 
        germanTitle: "Eine Diskussion über einen Film", 
        persianTitle: "بحث در مورد یک فیلم",
        germanStory: "Nach dem Kinobesuch diskutierten mein Freund und ich lange über den Film, den wir gesehen hatten. Ich fand den Film fantastisch und tiefgründig, aber er fand ihn ziemlich langweilig. Wir hatten komplett unterschiedliche Meinungen über die Schauspieler und das überraschende Ende. Es war trotzdem eine interessante Diskussion, weil wir lernten, die Perspektive des anderen zu verstehen.",
        persianTranslation: "بعد از رفتن به سینما، من و دوستم مدت زیادی درباره فیلمی که دیده بودیم بحث کردیم. من فیلم را فوق‌العاده و عمیق یافتم، اما او آن را کاملاً خسته‌کننده یافت. ما نظرات کاملاً متفاوتی درباره بازیگران و پایان غافلگیرکننده داشتیم. با این حال، این یک بحث جالب بود، چون یاد گرفتیم دیدگاه یکدیگر را درک کنیم."
    },
    { 
        germanTitle: "Ein typischer Arbeitstag", 
        persianTitle: "یک روز کاری معمولی",
        germanStory: "Mein Arbeitstag beginnt normalerweise um 9 Uhr im Büro. Als Erstes koche ich mir einen Kaffee und lese meine E-Mails. Dann habe ich oft Besprechungen mit Kollegen, in denen wir unsere Projekte planen. Mittags esse ich mit meinem Team in der Kantine. Am Nachmittag arbeite ich konzentriert an meinen Aufgaben. Um 17 Uhr habe ich Feierabend und fahre mit dem Fahrrad nach Hause.",
        persianTranslation: "روز کاری من معمولاً ساعت ۹ در دفتر شروع می‌شود. اولین کار، یک قهوه برای خودم درست می‌کنم و ایمیل‌هایم را می‌خوانم. بعد اغلب با همکارانم جلساتی دارم که در آنها پروژه‌هایمان را برنامه‌ریزی می‌کنیم. ظهر با تیمم در غذاخوری ناهار می‌خورم. بعد از ظهر با تمرکز روی وظایفم کار می‌کنم. ساعت ۱۷ کارم تمام می‌شود و با دوچرخه به خانه می‌روم."
    },
    { 
        germanTitle: "Ein Geschenk für einen Freund auswählen", 
        persianTitle: "انتخاب هدیه برای یک دوست",
        germanStory: "Mein bester Freund hat nächste Woche Geburtstag und ich habe noch keine Idee für ein Geschenk. Das ist immer so schwer! Er liest gerne Krimis, also ist vielleicht ein neues Buch eine gute Idee. Oder vielleicht ein Gutschein für ein Konzert, weil er eine bestimmte Band sehr liebt? Ich möchte ihm etwas Persönliches schenken, über das er sich wirklich freut. Ich werde am Wochenende in die Stadt gehen und nach etwas Passendem suchen.",
        persianTranslation: "بهترین دوستم هفته آینده تولد دارد و من هنوز ایده‌ای برای هدیه ندارم. این همیشه خیلی سخت است! او دوست دارد رمان‌های جنایی بخواند، پس شاید یک کتاب جدید ایده خوبی باشد. یا شاید یک کوپن برای یک کنسرت، چون او یک گروه موسیقی خاص را خیلی دوست دارد؟ من می‌خواهم به او یک هدیه شخصی بدهم که واقعاً از آن خوشحال شود. آخر هفته به شهر می‌روم و به دنبال چیز مناسبی می‌گردم."
    },
    { 
        germanTitle: "Die vier Jahreszeiten in meiner Heimat", 
        persianTitle: "چهار فصل در کشور من",
        germanStory: "In meiner Heimat gibt es vier sehr unterschiedliche Jahreszeiten, die alle ihren eigenen Charme haben. Die Sommer sind normalerweise sehr heiß und trocken. Im Herbst wird es kühler und die Blätter der Bäume verfärben sich in wunderschönen Rot- und Gelbtönen. Die Winter können kalt sein, aber Schnee gibt es selten. Im Frühling wird dann alles wieder grün und die Natur erwacht zu neuem Leben.",
        persianTranslation: "در کشور من چهار فصل بسیار متفاوت وجود دارد که هر کدام جذابیت خاص خود را دارند. تابستان‌ها معمولاً بسیار گرم و خشک هستند. در پاییز هوا خنک‌تر می‌شود و برگ‌های درختان به رنگ‌های زیبای قرمز و زرد در می‌آیند. زمستان‌ها می‌توانند سرد باشند، اما برف به ندرت می‌بارد. در بهار سپس همه چیز دوباره سبز می‌شود و طبیعت به زندگی جدید بیدار می‌شود."
    },
    { 
        germanTitle: "Ein Verkehrsunfall", 
        persianTitle: "یک تصادف رانندگی",
        germanStory: "Auf dem Weg zur Arbeit sah ich heute Morgen einen kleinen Verkehrsunfall. Ein Auto war einem anderen an einer roten Ampel hinten aufgefahren. Glücklicherweise schien niemand ernsthaft verletzt zu sein, aber beide Autos waren beschädigt. Die Fahrer standen auf der Straße und diskutierten laut. Wegen des Unfalls bildete sich sofort ein langer Stau, weshalb ich zu spät zur Arbeit kam.",
        persianTranslation: "امروز صبح در راه سر کار یک تصادف رانندگی کوچک دیدم. یک ماشین در چراغ قرمز از پشت به دیگری زده بود. خوشبختانه به نظر می‌رسید کسی به طور جدی آسیب ندیده است، اما هر دو ماشین آسیب دیده بودند. رانندگان در خیابان ایستاده بودند و با صدای بلند بحث می‌کردند. به خاطر تصادف فوراً یک ترافیک طولانی ایجاد شد، به همین دلیل من دیر به سر کار رسیدم."
    },
    { 
        germanTitle: "Ein Vorstellungsgespräch für einen Nebenjob", 
        persianTitle: "مصاحبه برای یک کار پاره‌وقت",
        germanStory: "Ich hatte heute ein Vorstellungsgespräch für einen Nebenjob in einem Buchladen. Davor war ich ziemlich nervös. Der Manager war aber sehr nett. Er stellte mir viele Fragen zu meinen Lieblingsbüchern und warum ich genau dort arbeiten möchte. Ich glaube, das Gespräch lief ganz gut, weil ich meine Leidenschaft für Bücher zeigen konnte. Sie wollen mir nächste Woche Bescheid geben.",
        persianTranslation: "امروز من یک مصاحبه برای یک کار پاره‌وقت در یک کتابفروشی داشتم. قبل از آن خیلی مضطرب بودم. اما مدیر بسیار مهربان بود. او سوالات زیادی در مورد کتاب‌های مورد علاقه‌ام و اینکه چرا دقیقاً می‌خواهم آنجا کار کنم از من پرسید. فکر می‌کنم مصاحبه خیلی خوب پیش رفت، چون توانستم علاقه شدیدم به کتاب‌ها را نشان دهم. آنها می‌خواهند هفته آینده به من خبر دهند."
    },
    { 
        germanTitle: "Kleidung für verschiedene Anlässe", 
        persianTitle: "لباس برای مناسبت‌های مختلف",
        germanStory: "Man trägt nicht für jeden Anlass die gleiche Kleidung. Wenn ich zur Arbeit gehe, ziehe ich oft eine Bluse und eine schicke Hose an, um professionell auszusehen. Am Wochenende, wenn ich mich mit Freunden treffe, trage ich lieber bequeme Jeans und ein T-Shirt. Und wenn ich zu einer Hochzeit eingeladen bin, dann wähle ich ein elegantes Kleid. Ich finde es wichtig, sich passend zum Anlass zu kleiden.",
        persianTranslation: "آدم برای هر مناسبتی لباس یکسانی نمی‌پوشد. وقتی به سر کار می‌روم، اغلب یک بلوز و یک شلوار شیک می‌پوشم تا حرفه‌ای به نظر برسم. آخر هفته، وقتی با دوستانم ملاقات می‌کنم، ترجیح می‌دهم شلوار جین راحت و یک تی‌شرت بپوشم. و اگر به یک عروسی دعوت شوم، آنگاه یک لباس مجلسی انتخاب می‌کنم. به نظرم مهم است که متناسب با مناسبت لباس بپوشی."
    },
    { 
        germanTitle: "Ein Streit und eine Versöhnung", 
        persianTitle: "یک دعوا و یک آشتی",
        germanStory: "Letzte Woche hatte ich einen dummen Streit mit meiner besten Freundin. Wir waren beide wütend und haben danach ein paar Tage nicht miteinander gesprochen. Das hat mich sehr traurig gemacht. Also habe ich sie angerufen. Wir haben lange über das Problem geredet und uns beide entschuldigt. Jetzt ist zum Glück alles wieder gut zwischen uns. Freundschaft ist zu wichtig für solche Streitereien.",
        persianTranslation: "هفته گذشته من یک دعوای احمقانه با بهترین دوستم داشتم. ما هر دو عصبانی بودیم و بعد از آن چند روز با هم صحبت نکردیم. این مرا خیلی ناراحت کرد. برای همین به او زنگ زدم. ما مدت زیادی درباره مشکل صحبت کردیم و هر دو عذرخواهی کردیم. خوشبختانه حالا همه چیز دوباره بین ما خوب است. دوستی برای چنین دعواهایی خیلی مهم‌تر است."
    },
    { 
        germanTitle: "Wie ich Deutsch lerne", 
        persianTitle: "چگونه آلمانی یاد می‌گیرم",
        germanStory: "Ich lerne Deutsch seit etwa einem Jahr und es macht mir viel Spaß. Ich besuche zweimal pro Woche einen Sprachkurs. Zusätzlich mache ich jeden Tag meine Hausaufgaben. Ich versuche auch, jeden Abend eine deutsche Serie mit Untertiteln zu schauen. Das hilft sehr beim Hörverstehen. Es ist nicht immer einfach, aber ich merke, dass ich langsam Fortschritte mache.",
        persianTranslation: "من حدود یک سال است که آلمانی یاد می‌گیرم و برایم بسیار لذت‌بخش است. من دو بار در هفته در یک کلاس زبان شرکت می‌کنم. علاوه بر این، هر روز تکالیفم را انجام می‌دههم. من همچنین سعی می‌کنم هر شب یک سریال آلمانی با زیرنویس تماشا کنم. این در درک شنیداری بسیار کمک می‌کند. همیشه آسان نیست، اما متوجه می‌شوم که به آرامی در حال پیشرفت هستم."
    },
    { 
        germanTitle: "Ein traditionelles Gericht aus meinem Land", 
        persianTitle: "یک غذای سنتی از کشورم",
        germanStory: "Ein sehr berühmtes und beliebtes Gericht aus meiner Heimat ist Ghorme Sabzi. Es ist ein köstlicher Eintopf aus vielen verschiedenen Kräutern, roten Bohnen und kleinen Fleischstücken. Die Zubereitung dauert mehrere Stunden, weil die Kräuter lange kochen müssen. Man isst es normalerweise mit Safranreis. Jeder in meiner Familie liebt dieses Gericht.",
        persianTranslation: "یک غذای بسیار معروف و محبوب از کشور من قورمه سبزی است. این یک خورش لذیذ از سبزیجات مختلف، لوبیا قرمز و تکه‌های کوچک گوشت است. تهیه آن چندین ساعت طول می‌کشد، زیرا سبزیجات باید مدت طولانی بپزند. معمولاً آن را با برنج زعفرانی می‌خورند. همه در خانواده من این غذا را دوست دارند."
    },
    { 
        germanTitle: "Eine E-Mail an den Vermieter", 
        persianTitle: "ایمیلی به صاحب‌خانه",
        germanStory: "Ich musste meinem Vermieter eine E-Mail schreiben, weil die Heizung in meiner Wohnung seit zwei Tagen kaputt ist. Ich habe das Problem genau beschrieben und höflich gefragt, wann er einen Handwerker schicken kann. Ich hoffe, er antwortet schnell und kümmert sich bald darum, denn die Nächte werden langsam ziemlich kalt in der Wohnung.",
        persianTranslation: "من باید به صاحب‌خانه‌ام یک ایمیل می‌نوشتم، چون شوفاژ آپارتمانم دو روز است که خراب است. من مشکل را دقیقاً توصیف کردم و با ادب پرسیدم کی می‌تواند یک تعمیرکار بفرستد. امیدوارم او سریع جواب دهد و به زودی به آن رسیدگی کند، چون شب‌ها در آپارتمان کم‌کم خیلی سرد می‌شود."
    },
    { 
        germanTitle: "Öffentliche Verkehrsmittel benutzen", 
        persianTitle: "استفاده از وسایل نقلیه عمومی",
        germanStory: "In meiner Stadt benutze ich fast jeden Tag öffentliche Verkehrsmittel. Ich fahre mit dem Bus zur Arbeit und am Wochenende mit der U-Bahn ins Stadtzentrum. Das ist viel billiger und umweltfreundlicher, als ein eigenes Auto zu haben. Manchmal, im Berufsverkehr, sind die Busse und Bahnen sehr voll, aber meistens ist es eine sehr praktische und schnelle Art, sich fortzubewegen.",
        persianTranslation: "در شهرم من تقریباً هر روز از وسایل نقلیه عمومی استفاده می‌کنم. من با اتوبوس به سر کار می‌روم و آخر هفته با مترو به مرکز شهر. این بسیار ارزان‌تر و سازگارتر با محیط زیست از داشتن ماشین شخصی است. گاهی اوقات، در ساعات شلوغی، اتوبوس‌ها و قطارها خیلی پر هستند، اما بیشتر اوقات این یک روش بسیار کاربردی و سریع برای جابجایی است."
    },
    { 
        germanTitle: "Eine Fahrradtour", 
        persianTitle: "یک تور دوچرخه‌سواری",
        germanStory: "Am letzten Samstag habe ich mit ein paar Freunden eine lange Fahrradtour gemacht. Wir sind an einem Fluss entlang gefahren, wo es einen schönen Radweg gab. Das Wetter war sonnig, aber nicht zu heiß. Wir hatten ein Picknick dabei und machten mittags eine lange Pause auf einer Wiese. Insgesamt sind wir fast 40 Kilometer gefahren. Am Abend war ich sehr müde, aber auch sehr glücklich.",
        persianTranslation: "شنبه گذشته من با چند دوست یک تور دوچرخه‌سواری طولانی انجام دادم. ما در امتداد یک رودخانه راندیم که در آن یک مسیر دوچرخه‌سواری زیبا وجود داشت. هوا آفتابی بود، اما نه خیلی گرم. ما یک پیک‌نیک همراه داشتیم و ظهر یک استراحت طولانی در یک چمنزار داشتیم. در مجموع ما تقریباً ۴۰ کیلومتر راندیم. عصر خیلی خسته، اما همچنین خیلی خوشحال بودم."
    },
    { 
        germanTitle: "Ein Bankgespräch", 
        persianTitle: "گفتگو در بانک",
        germanStory: "Ich musste heute zur Bank gehen, weil ich ein neues Konto eröffnen wollte. Ein freundlicher Bankangestellter hat mir dabei geholfen. Ich musste einige Formulare ausfüllen und meinen Ausweis vorzeigen. Er hat mir die verschiedenen Kontotypen und die Gebühren geduldig erklärt. Nach ungefähr einer halben Stunde war alles erledigt und ich hatte mein neues Konto.",
        persianTranslation: "امروز باید به بانک می‌رفتم چون می‌خواستم یک حساب جدید باز کنم. یک کارمند مهربان بانک به من در این کار کمک کرد. من باید چند فرم را پر می‌کردم و کارت شناسایی‌ام را نشان می‌دادم. او انواع مختلف حساب‌ها و هزینه‌ها را با حوصله برایم توضیح داد. بعد از تقریباً نیم ساعت همه کارها انجام شد و من حساب جدیدم را داشتم."
    },
    { 
        germanTitle: "Ein verlorenes Gepäckstück", 
        persianTitle: "یک چمدان گمشده",
        germanStory: "Nach meinem letzten Flug nach München konnte ich meinen Koffer am Gepäckband einfach nicht finden. Ich war sehr besorgt, weil alle meine wichtigen Sachen darin waren. Ich ging zum Gepäckschalter der Fluggesellschaft und füllte ein Verlustformular aus. Glücklicherweise riefen sie mich am nächsten Tag an. Mein Koffer war versehentlich in einem anderen Flugzeug nach Hamburg gelandet, aber sie schickten ihn mir nach Hause.",
        persianTranslation: "بعد از آخرین پروازم به مونیخ، به سادگی نتوانستم چمدانم را روی نوار نقاله پیدا کنم. خیلی نگران بودم چون تمام وسایل مهمم داخل آن بود. به باجه بار شرکت هواپیمایی رفتم و یک فرم گم شدن پر کردم. خوشبختانه روز بعد به من زنگ زدند. چمدان من به اشتباه در هواپیمای دیگری به مقصد هامبورگ فرود آمده بود، اما آنها آن را برایم به خانه فرستادند."
    },
    { 
        germanTitle: "Ein Konzertbesuch", 
        persianTitle: "رفتن به کنسرت",
        germanStory: "Letzte Woche war ich auf einem Rockkonzert meiner Lieblingsband. Die Stimmung in der Halle war fantastisch und alle Leute haben mitgesungen und getanzt. Die Band spielte alle ihre berühmten Lieder und gab sogar zwei Zugaben. Das Konzert dauerte über zwei Stunden und ich stand die ganze Zeit. Nach dem Konzert war meine Stimme heiser vom Singen, aber ich war überglücklich.",
        persianTranslation: "هفته گذشته من در یک کنسرت راک از گروه موسیقی مورد علاقه‌ام بودم. جو سالن فوق‌العاده بود و همه مردم با هم می‌خواندند و می‌رقصیدند. گروه تمام آهنگ‌های معروفش را اجرا کرد و حتی دو آهنگ اضافی هم خواند. کنسرت بیش از دو ساعت طول کشید و من تمام مدت ایستاده بودم. بعد از کنسرت صدایم از آواز خواندن گرفته بود، اما بی‌نهایت خوشحال بودم."
    },
    { 
        germanTitle: "Meine Kindheit auf dem Land", 
        persianTitle: "کودکی من در روستا",
        germanStory: "Ich hatte das Glück, eine sehr schöne Kindheit auf dem Land zu haben. Ich wuchs in einem kleinen Dorf auf und spielte den ganzen Tag draußen in der Natur. Im Sommer gingen wir im nahegelegenen See schwimmen und im Winter bauten wir große Schneemänner. Ich hatte viele Freunde in der Nachbarschaft und wir waren immer zusammen unterwegs. Ich erinnere mich sehr gerne an diese unbeschwerte und freie Zeit zurück.",
        persianTranslation: "من شانس این را داشتم که کودکی بسیار زیبایی در روستا داشته باشم. من در یک روستای کوچک بزرگ شدم و تمام روز را بیرون در طبیعت بازی می‌کردم. در تابستان در دریاچه نزدیک شنا می‌کردیم و در زمستان آدم‌برفی‌های بزرگی می‌ساختیم. من دوستان زیادی در محله داشتم و ما همیشه با هم بودیم. من با خوشحالی آن دوران بی‌دغدغه و آزاد را به یاد می‌آورم."
    },
    { 
        germanTitle: "Eine Wanderung in den Alpen", 
        persianTitle: "پیاده‌روی در کوه‌های آلپ",
        germanStory: "In den Sommerferien machten wir eine mehrtägige Wanderung in den Alpen. Wir standen jeden Tag früh auf, um die kühle Morgenluft zu genießen. Die Wege waren manchmal sehr steil, aber die Aussicht von den Gipfeln war jede Mühe wert. Wir sahen Kühe auf den Almen und aßen auf einer traditionellen Hütte zu Mittag. Es waren anstrengende, aber wunderschöne Tage in der Natur, weit weg von der Stadt.",
        persianTranslation: "در تعطیلات تابستان ما یک پیاده‌روی چند روزه در کوه‌های آلپ داشتیم. ما هر روز زود بیدار می‌شدیم تا از هوای خنک صبح لذت ببریم. مسیرها گاهی بسیار شیب‌دار بودند، اما منظره از قله‌ها ارزش هر تلاشی را داشت. ما گاوها را در مراتع کوهستانی دیدیم و در یک کلبه سنتی ناهار خوردیم. این روزهای خسته‌کننده اما بسیار زیبایی در طبیعت، دور از شهر بود."
    },
    { 
        germanTitle: "Ein Umzug in eine andere Stadt", 
        persianTitle: "اسباب‌کشی به شهری دیگر",
        germanStory: "Vor zwei Monaten bin ich wegen meines neuen Jobs in eine andere Stadt gezogen. Der Umzug selbst war sehr stressig. Ich musste alle meine Sachen in unzählige Kisten packen und eine Transportfirma organisieren. Die neue Stadt und die neue Arbeit gefallen mir sehr gut, aber ich vermisse manchmal meine Familie und meine alten Freunde. Es braucht Zeit, sich an einem neuen Ort wirklich zu Hause zu fühlen.",
        persianTranslation: "دو ماه پیش من به خاطر شغل جدیدم به شهر دیگری نقل مکان کردم. خود اسباب‌کشی خیلی استرس‌زا بود. من باید تمام وسایلم را در جعبه‌های بی‌شمار بسته‌بندی می‌کردم و یک شرکت حمل و نقل را سازماندهی می‌کردم. شهر جدید و کار جدید را خیلی دوست دارم، اما گاهی دلم برای خانواده و دوستان قدیمی‌ام تنگ می‌شود. زمان می‌برد تا در یک مکان جدید واقعاً احساس کنی در خانه هستی."
    },
    { 
        germanTitle: "Ein Tag als Tourist in der eigenen Stadt", 
        persianTitle: "یک روز به عنوان توریست در شهر خود",
        germanStory: "Gestern beschloss ich, ein Tourist in meiner eigenen Stadt zu sein. Ich besuchte all die berühmten Sehenswürdigkeiten, an denen ich normalerweise nur vorbeilaufe. Ich fuhr mit einem Hop-on-Hop-off-Bus und machte viele Fotos, genau wie ein echter Tourist. Dabei habe ich viele schöne Ecken und interessante Details entdeckt, die ich vorher noch nie bemerkt hatte. Es war eine sehr lustige und interessante Erfahrung.",
        persianTranslation: "دیروز تصمیم گرفتم در شهر خودم یک توریست باشم. من از تمام جاذبه‌های دیدنی معروفی که معمولاً فقط از کنارشان رد می‌شوم، بازدید کردم. من با یک اتوبوس توریستی سوار شدم و عکس‌های زیادی گرفتم، درست مثل یک توریست واقعی. در این حین گوشه‌های زیبا و جزئیات جالبی را کشف کردم که قبلاً هرگز متوجه آنها نشده بودم. این یک تجربه بسیار سرگرم‌کننده و جالب بود."
    },
    { 
        germanTitle: "Ein Haustier adoptieren", 
        persianTitle: "به سرپرستی گرفتن یک حیوان خانگی",
        germanStory: "Seit langem wünschte ich mir einen Hund. Letzte Woche haben wir uns entschieden, einen Hund aus dem Tierheim zu adoptieren. Wir haben einen kleinen Mischlingshund namens Max mit nach Hause genommen. Er ist sehr verspielt und unglaublich freundlich. Ein Haustier zu haben bedeutet viel Verantwortung, aber es bringt auch so viel Freude und Liebe in unser Leben. Es war die beste Entscheidung.",
        persianTranslation: "مدت‌ها بود که آرزوی یک سگ را داشتم. هفته گذشته ما تصمیم گرفتیم یک سگ از پناهگاه حیوانات به سرپرستی بگیریم. ما یک سگ کوچک میکس به نام ماکس را با خود به خانه آوردیم. او بسیار بازیگوش و فوق‌العاده مهربان است. داشتن یک حیوان خانگی به معنای مسئولیت زیاد است، اما همچنین شادی و عشق زیادی را به زندگی ما می‌آورد. این بهترین تصمیم بود."
    },
    { 
        germanTitle: "Eine Überraschungsparty", 
        persianTitle: "یک مهمانی غافلگیرکننده",
        germanStory: "Meine Freunde haben heimlich eine Überraschungsparty zu meinem 30. Geburtstag organisiert. Ich wusste absolut von nichts. Als ich an dem Abend nach Hause kam, waren alle meine Freunde und meine Familie da und riefen 'Überraschung!'. Ich war total sprachlos und so gerührt, dass mir die Tränen kamen. Es war der beste und emotionalste Geburtstag, den ich je hatte.",
        persianTranslation: "دوستانم مخفیانه یک مهمانی غافلگیرکننده برای تولد ۳۰ سالگی‌ام ترتیب دادند. من مطلقاً از هیچ چیز خبر نداشتم. وقتی آن شب به خانه آمدم، همه دوستان و خانواده‌ام آنجا بودند و فریاد زدند «سورپرایز!». من کاملاً لال شده بودم و آنقدر تحت تأثیر قرار گرفتم که اشک‌هایم سرازیر شد. این بهترین و احساسی‌ترین تولدی بود که تا به حال داشتم."
    },
    { 
        germanTitle: "Ein Gespräch über Zukunftspläne", 
        persianTitle: "گفتگو درباره برنامه‌های آینده",
        germanStory: "Ich habe neulich mit meinen Eltern lange über meine Zukunftspläne gesprochen. Ich erzählte ihnen, dass ich nach dem Studium gerne für ein paar Jahre im Ausland arbeiten würde, um Erfahrungen zu sammeln. Zuerst waren sie etwas besorgt, weil ich dann so weit weg wäre. Aber am Ende haben sie meine Idee unterstützt. Es ist ein gutes Gefühl zu wissen, dass meine Familie hinter mir steht, egal was ich entscheide.",
        persianTranslation: "اخیراً با والدینم مدت زیادی درباره برنامه‌های آینده‌ام صحبت کردم. به آنها گفتم که دوست دارم بعد از تحصیل برای چند سال در خارج از کشور کار کنم تا تجربه کسب کنم. در ابتدا آنها کمی نگران بودند، چون آن وقت خیلی دور می‌شدم. اما در نهایت از ایده‌ام حمایت کردند. این حس خوبی است که بدانی خانواده‌ام پشت من هستند، مهم نیست چه تصمیمی بگیرم."
    },
    { 
        germanTitle: "Ein Besuch auf dem Flohmarkt", 
        persianTitle: "بازدید از بازار کهنه‌فروشان",
        germanStory: "Am Sonntag besuchte ich einen großen Flohmarkt in der Nachbarstadt. Ich liebe es, zwischen all den alten Sachen zu stöbern, weil man nie weiß, welche Schätze man findet. Ich kaufte ein paar alte Bücher und eine schöne Vintage-Vase für nur fünf Euro. Das Handeln mit den Verkäufern macht auch immer besonders viel Spaß. Ein Flohmarkt ist für mich wie eine kleine Schatzsuche.",
        persianTranslation: "روز یکشنبه من از یک بازار کهنه‌فروشان بزرگ در شهر همسایه دیدن کردم. من عاشق گشتن بین تمام وسایل قدیمی هستم، چون هرگز نمی‌دانی چه گنج‌هایی پیدا می‌کنی. من چند کتاب قدیمی و یک گلدان وینتیج زیبا را فقط با پنج یورو خریدم. چانه زدن با فروشندگان هم همیشه به طور خاص سرگرم‌کننده است. یک بازار کهنه‌فروشان برای من مانند یک گنج‌یابی کوچک است."
    },
    { 
        germanTitle: "Eine Reklamation im Geschäft", 
        persianTitle: "شکایت در یک فروشگاه",
        germanStory: "Ich habe letzte Woche einen neuen Toaster gekauft, aber er funktionierte von Anfang an nicht. Also ging ich heute zurück ins Elektronikgeschäft, um ihn zu reklamieren. Ich zeigte dem Verkäufer den Kassenbon und erklärte das Problem. Er war sehr verständnisvoll und entschuldigte sich. Ich konnte mir sofort ein neues, funktionierendes Gerät aussuchen. Der Umtausch war zum Glück sehr unkompliziert.",
        persianTranslation: "من هفته گذشته یک توستر جدید خریدم، اما از همان ابتدا کار نمی‌کرد. بنابراین امروز به فروشگاه الکترونیک برگشتم تا آن را پس دهم. من رسید را به فروشنده نشان دادم و مشکل را توضیح دادم. او بسیار با درک بود و عذرخواهی کرد. من توانستم فوراً یک دستگاه جدید و کارآمد انتخاب کنم. خوشبختانه تعویض بسیار بدون دردسر بود."
    },
    { 
        germanTitle: "Ein lustiges Erlebnis in der Sprachschule", 
        persianTitle: "یک تجربه خنده‌دار در آموزشگاه زبان",
        germanStory: "In meinem Deutschkurs passierte letzte Woche etwas sehr Lustiges. Wir sollten Sätze mit Modalverben bilden. Ein Mitschüler aus Spanien wollte sagen 'Ich muss heute kochen', aber er verwechselte die Wörter und sagte 'Ich muss heute kotzen'. Die ganze Klasse, auch die Lehrerin, konnte nicht mehr vor Lachen. Solche lustigen Fehler passieren eben, wenn man eine neue Sprache lernt.",
        persianTranslation: "هفته گذشته در کلاس آلمانی من اتفاق بسیار خنده‌داری افتاد. ما باید با افعال مُدال جمله می‌ساختیم. یک همکلاسی از اسپانیا می‌خواست بگوید «من امروز باید آشپزی کنم»، اما کلمات را اشتباه گرفت و گفت «من امروز باید بالا بیاورم». تمام کلاس، حتی معلم، از خنده نمی‌توانستند جلوی خود را بگیرند. چنین اشتباهات خنده‌داری وقتی یک زبان جدید یاد می‌گیری، اتفاق می‌افتد."
    },
    { 
        germanTitle: "Ein schlechter Tag", 
        persianTitle: "یک روز بد",
        germanStory: "Gestern hatte ich einen wirklich schlechten Tag. Es fing damit an, dass ich meinen Bus zur Arbeit verpasst habe. Dann hatte ich einen kleinen Streit mit meinem Chef. Und auf dem Heimweg hat es stark angefangen zu regnen und ich hatte natürlich keinen Regenschirm dabei. Ich war froh, als ich endlich zu Hause war und der Tag vorbei war. Morgen wird es hoffentlich besser.",
        persianTranslation: "دیروز من یک روز واقعاً بدی داشتم. با این شروع شد که اتوبوسم را برای رفتن به سر کار از دست دادم. بعد یک دعوای کوچک با رئیسم داشتم. و در راه خانه باران شدیدی شروع به باریدن کرد و من البته چتر همراهم نبود. خوشحال بودم وقتی بالاخره به خانه رسیدم و روز تمام شد. امیدوارم فردا بهتر شود."
    },
    { 
        germanTitle: "Ein gemeinsamer Kochabend", 
        persianTitle: "یک شب آشپزی مشترک",
        germanStory: "Am Freitagabend trafen wir uns bei einer Freundin, um zusammen italienisch zu kochen. Jeder brachte ein paar Zutaten mit. Wir entschieden uns, Pizza komplett selbst zu machen, vom Teig bis zur Soße. Es war ein lustiges Chaos in der Küche und wir haben viel gelacht. Aber das Ergebnis war fantastisch! Gemeinsam zu kochen und dann zu essen ist einfach viel schöner als alleine.",
        persianTranslation: "عصر جمعه ما در خانه یک دوست جمع شدیم تا با هم غذای ایتالیایی بپزیم. هر کس چند ماده اولیه با خود آورد. ما تصمیم گرفتیم پیتزا را کاملاً خودمان درست کنیم، از خمیر تا سس. در آشپزخانه یک هرج و مرج خنده‌دار بود و ما خیلی خندیدیم. اما نتیجه فوق‌العاده بود! آشپزی و سپس غذا خوردن با هم به سادگی بسیار زیباتر از تنهایی است."
    },
    { 
        germanTitle: "Eine wichtige Prüfung", 
        persianTitle: "یک امتحان مهم",
        germanStory: "Nächste Woche habe ich eine sehr wichtige Prüfung an der Universität. Deshalb muss ich im Moment sehr viel lernen. Ich verbringe jeden Tag mehrere Stunden in der Bibliothek. Ich wiederhole den ganzen Stoff und mache alte Prüfungsaufgaben. Ich bin schon ein bisschen aufgeregt, aber ich fühle mich relativ gut vorbereitet. Ich hoffe, dass sich die ganze Mühe lohnen wird und ich die Prüfung bestehe.",
        persianTranslation: "هفته آینده من یک امتحان بسیار مهم در دانشگاه دارم. به همین دلیل در حال حاضر باید خیلی زیاد درس بخوانم. من هر روز چندین ساعت را در کتابخانه می‌گذرانم. من تمام مطالب را مرور می‌کنم و سوالات امتحانات قدیمی را حل می‌کنم. من کمی هیجان‌زده هستم، اما احساس می‌کنم نسبتاً خوب آماده شده‌ام. امیدوارم که تمام این زحمات ارزشش را داشته باشد و من امتحان را قبول شوم."
    },
    { 
        germanTitle: "Ein Anruf bei einer Behörde", 
        persianTitle: "تماس با یک اداره",
        germanStory: "Ich musste heute bei der Ausländerbehörde anrufen, um meinen Termin zur Visumsverlängerung zu vereinbaren. Ich war sehr lange in der telefonischen Warteschleife, bis endlich jemand ranging. Die Mitarbeiterin am Telefon war aber zum Glück sehr freundlich und kompetent. Sie half mir, einen passenden Termin zu finden. Manchmal braucht man viel Geduld, wenn man mit Behörden zu tun hat.",
        persianTranslation: "امروز باید به اداره اتباع خارجی زنگ می‌زدم تا وقت ملاقاتم را برای تمدید ویزا تعیین کنم. من مدت بسیار طولانی در صف انتظار تلفنی بودم تا بالاخره کسی جواب داد. اما خوشبختانه کارمند پشت تلفن بسیار مهربان و باصلاحیت بود. او به من کمک کرد تا یک وقت مناسب پیدا کنم. گاهی اوقات وقتی با ادارات سر و کار داری، به صبر زیادی نیاز داری."
    },
    { 
        germanTitle: "Ein Traumhaus beschreiben", 
        persianTitle: "توصیف خانه رویایی",
        germanStory: "Mein absolutes Traumhaus wäre ein kleines, modernes Holzhaus mitten in der Natur, vielleicht an einem See. Es hätte riesige Fenster, damit viel Licht hereinkommt und man die Natur beobachten kann. Im Wohnzimmer gäbe es einen gemütlichen Kamin für kalte Winterabende. Ich wünschte mir auch einen großen Garten, in dem ich mein eigenes Gemüse und Obst anbauen könnte. Das wäre für mich der perfekte Ort zum Leben.",
        persianTranslation: "خانه رویایی مطلق من یک کلبه چوبی کوچک و مدرن در دل طبیعت خواهد بود، شاید کنار یک دریاچه. پنجره‌های غول‌پیکری خواهد داشت تا نور زیادی وارد شود و بتوان طبیعت را تماشا کرد. در اتاق نشیمن یک شومینه دنج برای عصرهای سرد زمستانی وجود خواهد داشت. من همچنین آرزوی یک باغ بزرگ را دارم که در آن بتوانم سبزیجات و میوه‌های خودم را بکارم. این برای من مکان عالی برای زندگی خواهد بود."
    },
    { 
        germanTitle: "Ehrenamtliche Arbeit", 
        persianTitle: "کار داوطلبانه",
        germanStory: "Jeden Samstag arbeite ich für ein paar Stunden ehrenamtlich in einem Tierheim. Ich helfe dabei, die Käfige zu säubern, und gehe mit den Hunden spazieren. Die Arbeit ist unbezahlt, aber sie gibt mir ein unglaublich gutes Gefühl. Es ist schön zu sehen, wie sehr sich die Tiere über ein bisschen Aufmerksamkeit und Liebe freuen. Ich finde es wichtig, der Gemeinschaft auf irgendeine Weise etwas zurückzugeben.",
        persianTranslation: "هر شنبه من برای چند ساعت به صورت داوطلبانه در یک پناهگاه حیوانات کار می‌کنم. من در تمیز کردن قفس‌ها کمک می‌کنم و با سگ‌ها به پیاده‌روی می‌روم. این کار بدون حقوق است، اما به من حس فوق‌العاده خوبی می‌دهد. دیدن اینکه حیوانات چقدر از کمی توجه و عشق خوشحال می‌شوند، زیباست. به نظرم مهم است که به نوعی چیزی به جامعه بازگردانیم."
    },
    { 
        germanTitle: "Ein typisches deutsches Frühstück", 
        persianTitle: "یک صبحانه معمولی آلمانی",
        germanStory: "Ein typisch deutsches Frühstück, besonders am Wochenende, ist oft sehr reichhaltig. Es gibt verschiedene Sorten frischer Brötchen vom Bäcker, dazu Brot, Wurst, Käse und süße Aufstriche wie Marmelade oder Honig. Viele Erwachsene trinken dazu starken Kaffee. Manchmal gibt es auch noch ein gekochtes Ei oder Müsli mit Joghurt. Für dieses Frühstück nimmt man sich gerne viel Zeit.",
        persianTranslation: "یک صبحانه معمولی آلمانی، به خصوص در آخر هفته، اغلب بسیار مفصل است. انواع مختلف نان‌های تازه از نانوایی، به همراه نان، کالباس، پنیر و مواد شیرین مالیدنی مانند مربا یا عسل وجود دارد. بسیاری از بزرگسالان با آن قهوه غلیظ می‌نوشند. گاهی اوقات یک تخم‌مرغ آب‌پز یا موسلی با ماست هم وجود دارد. برای این صبحانه با کمال میل وقت زیادی صرف می‌شود."
    },
    { 
        germanTitle: "Eine Autopanne", 
        persianTitle: "خرابی ماشین",
        germanStory: "Gestern hatte ich eine Autopanne auf der Autobahn. Plötzlich machte der Motor komische Geräusche und verlor an Leistung. Ich fuhr sofort auf den Seitenstreifen, machte den Warnblinker an und rief den Pannendienst. Es war eine sehr unangenehme Situation. Nach einer Stunde kam endlich ein Abschleppwagen und brachte mein kaputtes Auto in eine Werkstatt. Das wird wohl teuer.",
        persianTranslation: "دیروز من در اتوبان ماشینم خراب شد. ناگهان موتور صداهای عجیبی درآورد و قدرت خود را از دست داد. من فوراً به شانه خاکی رفتم، فلاشر را روشن کردم و به امداد خودرو زنگ زدم. این یک وضعیت بسیار ناخوشایند بود. بعد از یک ساعت بالاخره یک یدک‌کش آمد و ماشین خرابم را به یک تعمیرگاه برد. این احتمالاً گران تمام خواهد شد."
    },
    { 
        germanTitle: "Ein interessanter Traum", 
        persianTitle: "یک رویای جالب",
        germanStory: "Letzte Nacht hatte ich einen sehr seltsamen, aber interessanten Traum. Ich träumte, dass ich mit Tieren sprechen konnte. Ein Eichhörnchen erzählte mir von seinen Problemen mit den Nüssen und ein Vogel sang mir ein trauriges Lied von seiner verlorenen Familie vor. Als ich aufwachte, war ich ein bisschen traurig, dass es nur ein Traum war. Es wäre faszinierend, wenn das wirklich möglich wäre.",
        persianTranslation: "دیشب یک رویای بسیار عجیب اما جالب دیدم. من خواب دیدم که می‌توانم با حیوانات صحبت کنم. یک سنجاب از مشکلاتش با گردوها برایم گفت و یک پرنده برایم آهنگی غمگین از خانواده گمشده‌اش خواند. وقتی بیدار شدم، کمی غمگین بودم که این فقط یک رویا بود. شگفت‌انگیز می‌شد اگر این واقعاً ممکن بود."
    },
    { 
        germanTitle: "Ein Tag ohne Handy", 
        persianTitle: "یک روز بدون موبایل",
        germanStory: "Gestern habe ich ein Experiment gemacht: einen ganzen Tag ohne mein Handy. Am Anfang fühlte es sich sehr komisch an. Ich hatte ständig das Gefühl, etwas zu verpassen. Aber nach ein paar Stunden wurde es sehr entspannter. Ich habe ein Buch gelesen, war lange spazieren und habe mich mit einem Freund unterhalten, ohne ständig abgelenkt zu sein. Ich hatte plötzlich viel mehr Zeit und war ruhiger. Das sollte ich öfter machen.",
        persianTranslation: "دیروز یک آزمایش انجام دادم: یک روز کامل بدون موبایلم. در ابتدا حس بسیار عجیبی داشت. من دائماً احساس می‌کردم چیزی را از دست می‌دهم. اما بعد از چند ساعت بسیار آرامش‌بخش‌تر شد. من یک کتاب خواندم، مدت طولانی پیاده‌روی کردم و با یک دوست صحبت کردم، بدون اینکه مدام حواسم پرت شود. ناگهان وقت بسیار بیشتری داشتم و آرام‌تر بودم. باید این کار را بیشتر انجام دهم."
    },
    { 
        germanTitle: "Ein Picknick am See", 
        persianTitle: "پیک‌نیک کنار دریاچه",
        germanStory: "Am Sonntag war das Wetter perfekt, also fuhren wir zu einem nahegelegenen See, um ein Picknick zu machen. Wir breiteten eine große Decke im Gras direkt am Ufer aus. Wir hatten Sandwiches, einen Nudelsalat und frisches Obst dabei. Nach dem Essen gingen wir sogar im See schwimmen, obwohl das Wasser noch ziemlich kalt war. Es war ein perfekter, entspannter Tag in der Natur mit guten Freunden.",
        persianTranslation: "روز یکشنبه هوا عالی بود، بنابراین ما به یک دریاچه نزدیک رفتیم تا پیک‌نیک کنیم. ما یک پتوی بزرگ روی چمن درست کنار ساحل پهن کردیم. ما ساندویچ، یک سالاد ماکارونی و میوه تازه همراه داشتیم. بعد از غذا حتی در دریاچه شنا کردیم، اگرچه آب هنوز خیلی سرد بود. این یک روز عالی و آرام در طبیعت با دوستان خوب بود."
    },
    { 
        germanTitle: "Ein Besuch im Fitnessstudio", 
        persianTitle: "رفتن به باشگاه بدنسازی",
        germanStory: "Ich habe mich letzte Woche in einem Fitnessstudio angemeldet, um etwas für meine Gesundheit zu tun. Gestern war ich das erste Mal dort. Ein Trainer hat mir alle Geräte erklärt und einen persönlichen Trainingsplan für mich erstellt. Das erste Training war sehr anstrengend, aber es hat sich gut angefühlt. Heute habe ich überall Muskelkater, aber ich bin motiviert und werde auf jeden Fall weitermachen.",
        persianTranslation: "من هفته گذشته در یک باشگاه بدنسازی ثبت نام کردم تا کاری برای سلامتی‌ام انجام دهم. دیروز برای اولین بار آنجا بودم. یک مربی تمام دستگاه‌ها را برایم توضیح داد و یک برنامه تمرینی شخصی برایم تهیه کرد. اولین تمرین بسیار سخت بود، اما حس خوبی داشت. امروز همه جای بدنم درد می‌کند، اما من با انگیزه هستم و حتماً ادامه خواهم داد."
    },
    { 
        germanTitle: "Eine Entschuldigung schreiben", 
        persianTitle: "نوشتن یک نامه عذرخواهی",
        germanStory: "Leider habe ich letzte Woche den Geburtstag eines guten Freundes komplett vergessen. Das war mir sehr peinlich. Deshalb habe ich ihm eine lange Nachricht geschrieben. Ich habe mich aufrichtig entschuldigt und erklärt, dass ich in letzter Zeit sehr viel Stress bei der Arbeit hatte. Er hat zum Glück sehr verständnisvoll reagiert und war nicht lange böse auf mich. Ich werde ihn am Wochenende auf einen Kaffee einladen.",
        persianTranslation: "متأسفانه هفته گذشته تولد یک دوست خوب را کاملاً فراموش کردم. این برایم خیلی خجالت‌آور بود. به همین دلیل برایش یک پیام طولانی نوشتم. من صمیمانه عذرخواهی کردم و توضیح دادم که اخیراً استرس کاری زیادی داشتم. خوشبختانه او با درک زیادی واکنش نشان داد و مدت طولانی از من عصبانی نبود. من او را آخر هفته به یک قهوه دعوت خواهم کرد."
    },
    { 
        germanTitle: "Ein Campingausflug", 
        persianTitle: "سفر کمپینگ",
        germanStory: "Am Wochenende machten wir einen kleinen Campingausflug in den Wald. Wir bauten unser Zelt auf einer Lichtung in der Nähe eines kleinen Flusses auf. Am Abend machten wir ein Lagerfeuer, grillten Würstchen und erzählten uns Geschichten. Nachts war es komplett still und wir konnten unzählige Sterne am Himmel beobachten. Es war toll, einfach mal weg von der Stadt und dem Lärm zu sein.",
        persianTranslation: "آخر هفته ما یک سفر کمپینگ کوچک به جنگل داشتیم. ما چادرمان را در یک поляна نزدیک یک رودخانه کوچک برپا کردیم. عصر آتش روشن کردیم، سوسیس کباب کردیم و برای هم داستان تعریف کردیم. شب کاملاً ساکت بود و ما می‌توانستیم ستاره‌های بی‌شماری را در آسمان تماشا کنیم. عالی بود که برای مدتی از شهر و سر و صدا دور باشیم."
    },
    { 
        germanTitle: "Eine neue Fähigkeit lernen", 
        persianTitle: "یادگیری یک مهارت جدید",
        germanStory: "Ich wollte schon immer lernen, wie man Gitarre spielt. Also habe ich mir letzte Woche eine günstige Gitarre gekauft und einen Online-Kurs begonnen. Die ersten Akkorde zu lernen ist sehr schwer und meine Finger tun ziemlich weh. Aber ich versuche, jeden Tag eine halbe Stunde zu üben. Ich bin sehr motiviert und hoffe, dass ich bald mein erstes einfaches Lied spielen kann.",
        persianTranslation: "من همیشه می‌خواستم یاد بگیرم چگونه گیتار بنوازم. بنابراین هفته گذشته یک گیتار ارزان خریدم و یک دوره آنلاین را شروع کردم. یادگیری آکوردهای اول بسیار سخت است و انگشتانم خیلی درد می‌کنند. اما من سعی می‌کنم هر روز نیم ساعت تمرین کنم. من بسیار با انگیزه هستم و امیدوارم به زودی بتوانم اولین آهنگ ساده‌ام را بنوازم."
    },
    { 
        germanTitle: "Ein besonderes Familienfest", 
        persianTitle: "یک جشن خانوادگی خاص",
        germanStory: "Letzten Samstag feierten meine Großeltern ihre Goldene Hochzeit, also ihr 50. Hochzeitsjubiläum. Das ist ein sehr besonderes Fest. Die ganze Familie kam zusammen, um zu gratulieren, auch Verwandte, die sehr weit weg wohnen. Wir haben zusammen gegessen, alte Geschichten erzählt und uns Fotoalben von früher angesehen. Es war ein sehr emotionaler und schöner Tag, der uns als Familie noch enger zusammengebracht hat.",
        persianTranslation: "شنبه گذشته پدربزرگ و مادربزرگم جشن عروسی طلایی خود، یعنی پنجاهمین سالگرد ازدواجشان را برگزار کردند. این یک جشن بسیار خاص است. تمام خانواده برای تبریک گفتن دور هم جمع شدند، حتی بستگانی که خیلی دور زندگی می‌کنند. ما با هم غذا خوردیم، داستان‌های قدیمی تعریف کردیم و آلبوم‌های عکس قدیمی را نگاه کردیم. این یک روز بسیار احساسی و زیبا بود که ما را به عنوان خانواده به هم نزدیک‌تر کرد."
    },
    { 
        germanTitle: "Ein guter Ratschlag", 
        persianTitle: "یک نصیحت خوب",
        germanStory: "Als ich mit meinem Studium sehr unzufrieden war, wusste ich nicht, was ich tun sollte. Mein Vater gab mir damals einen guten Ratschlag. Er sagte: 'Es ist keine Schande, eine Entscheidung zu ändern, wenn du merkst, dass sie dich unglücklich macht.' Dieser Ratschlag gab mir den Mut, das Studienfach zu wechseln. Heute bin ich sehr glücklich mit meiner neuen Wahl und dankbar für seine Worte.",
        persianTranslation: "وقتی از تحصیلم خیلی ناراضی بودم، نمی‌دانستم چه کار کنم. پدرم آن زمان نصیحت خوبی به من کرد. او گفت: «تغییر دادن یک تصمیم اگر متوجه شوی که تو را ناراحت می‌کند، شرم‌آور نیست.» این نصیحت به من شجاعت داد تا رشته تحصیلی‌ام را عوض کنم. امروز من از انتخاب جدیدم بسیار خوشحالم و از حرف‌های او سپاسگزارم."
    },
    { 
        germanTitle: "Eine unerwartete Begegnung", 
        persianTitle: "یک برخورد غیرمنتظره",
        germanStory: "Gestern traf ich in der Stadt zufällig meine alte Grundschullehrerin. Ich hatte sie seit über fünfzehn Jahren nicht mehr gesehen. Zuerst war ich nicht sicher, ob sie es ist, aber dann sprach sie mich an, weil sie mich erkannt hatte. Wir haben uns eine Weile über die alten Zeiten und unser jetziges Leben unterhalten. Das war eine sehr nette und völlig unerwartete Begegnung.",
        persianTranslation: "دیروز در شهر به طور تصادفی معلم قدیمی دبستانم را ملاقات کردم. من بیش از پانزده سال بود که او را ندیده بودم. در ابتدا مطمئن نبودم که اوست، اما بعد او با من صحبت کرد چون مرا شناخته بود. ما مدتی درباره دوران قدیم و زندگی فعلی‌مان صحبت کردیم. این یک برخورد بسیار خوب و کاملاً غیرمنتظره بود."
    },
    { 
        germanTitle: "Ein Tag im Leben eines Studenten", 
        persianTitle: "یک روز از زندگی یک دانشجو",
        germanStory: "Als Student ist kein Tag wie der andere, aber es gibt eine gewisse Routine. Normalerweise stehe ich auf, frühstücke schnell und gehe dann zu den Vorlesungen an der Universität. Den Nachmittag verbringe ich oft in der Bibliothek, um für Prüfungen zu lernen. Abends koche ich meistens mit meinen Mitbewohnern oder wir gehen in eine Studentenbar. Man muss sehr diszipliniert sein, aber man genießt auch viele Freiheiten.",
        persianTranslation: "به عنوان یک دانشجو، هیچ روزی شبیه روز دیگر نیست، اما یک روال خاصی وجود دارد. معمولاً بیدار می‌شوم، سریع صبحانه می‌خورم و بعد به سخنرانی‌ها در دانشگاه می‌روم. بعد از ظهر را اغلب در کتابخانه می‌گذرانم تا برای امتحانات درس بخوانم. عصرها بیشتر با هم‌اتاقی‌هایم آشپزی می‌کنم یا به یک بار دانشجویی می‌رویم. باید خیلی منضبط بود، اما از آزادی‌های زیادی هم لذت می‌بری."
    },
    { 
        germanTitle: "Ein Missverständnis am Telefon", 
        persianTitle: "یک سوءتفاهم تلفنی",
        germanStory: "Ich rief gestern bei einer Firma an, um mich nach meiner Bestellung zu erkundigen. Die Verbindung war sehr schlecht und die Person am Telefon sprach sehr schnell. Ich dachte, sie sagte, meine Bestellung sei 'storniert'. Ich war schon sehr wütend. Aber dann wiederholte sie es: 'Ihre Bestellung ist schon unterwegs.' Es war ein lustiges Missverständnis. Man muss am Telefon immer sehr genau hinhören.",
        persianTranslation: "دیروز به شرکتی زنگ زدم تا در مورد سفارشم سوال کنم. ارتباط خیلی بد بود و فرد پشت تلفن خیلی سریع صحبت می‌کرد. من فکر کردم او گفت سفارش من «لغو شده» است. من دیگر خیلی عصبانی بودم. اما بعد او تکرار کرد: «سفارش شما در راه است.» این یک سوءتفاهم خنده‌دار بود. باید همیشه پای تلفن با دقت گوش داد."
    },
    { 
        germanTitle: "Eine Reise in die Vergangenheit", 
        persianTitle: "سفری به گذشته",
        germanStory: "Wenn ich mit einer Zeitmaschine in die Vergangenheit reisen könnte, würde ich die 'Goldenen Zwanziger' Jahre in Berlin besuchen. Ich stelle mir diese Zeit unglaublich aufregend und kreativ vor, mit all der neuen Kunst, Musik und dem Theater. Natürlich weiß ich, dass es auch viele soziale Probleme gab, aber es wäre faszinierend, die besondere Atmosphäre dieser Zeit einmal selbst zu erleben.",
        persianTranslation: "اگر می‌توانستم با یک ماشین زمان به گذشته سفر کنم، دهه «بیست طلایی» در برلین را بازدید می‌کردم. من این دوران را فوق‌العاده هیجان‌انگیز و خلاقانه تصور می‌کنم، با تمام آن هنر، موسیقی و تئاتر جدید. البته می‌دانم که مشکلات اجتماعی زیادی هم وجود داشت، اما تجربه کردن جو خاص آن زمان به شخصه شگفت‌انگیز خواهد بود."
    },
    { 
        germanTitle: "Ein Kompliment bekommen", 
        persianTitle: "دریافت یک تعریف",
        germanStory: "Heute bei der Arbeit hat mir eine Kollegin ein sehr nettes Kompliment gemacht. Sie sagte, dass sie meine positive Art und meine Hilfsbereitschaft im Team sehr schätzt. Das hat mich wirklich sehr gefreut und mir den ganzen Tag versüßt. Ein ehrliches und unerwartetes Kompliment kann eine große positive Wirkung haben und die Motivation steigern.",
        persianTranslation: "امروز در محل کار یک همکار از من تعریف بسیار خوبی کرد. او گفت که از رفتار مثبت و کمک‌رسانی من در تیم بسیار قدردانی می‌کند. این واقعاً مرا بسیار خوشحال کرد و تمام روزم را شیرین کرد. یک تعریف صادقانه و غیرمنتظره می‌تواند تأثیر مثبت بزرگی داشته باشد و انگیزه را افزایش دهد."
    },
    { 
        germanTitle: "Ein Regentag zu Hause", 
        persianTitle: "یک روز بارانی در خانه",
        germanStory: "Es hat den ganzen Samstag stark geregnet, deshalb haben wir unsere Pläne abgesagt und sind zu Hause geblieben. Wir haben es uns auf dem Sofa gemütlich gemacht, eine Kanne Tee gekocht und einen alten Filmklassiker angeschaut. Manchmal ist es wunderschön, wenn man keine Termine hat und einfach nur entspannen kann. So ein fauler Tag zu Hause tut der Seele gut.",
        persianTranslation: "تمام روز شنبه باران شدیدی بارید، به همین دلیل ما برنامه‌هایمان را لغو کردیم و در خانه ماندیم. ما روی مبل راحت نشستیم، یک قوری چای دم کردیم و یک فیلم کلاسیک قدیمی تماشا کردیم. گاهی اوقات وقتی هیچ قراری نداری و فقط می‌توانی استراحت کنی، فوق‌العاده است. چنین روز تنبلی برای روح خوب است."
    },
    { 
        germanTitle: "Ein lustiger Fehler", 
        persianTitle: "یک اشتباه خنده‌دار",
        germanStory: "Als ich neulich im Supermarkt einkaufen war, war ich sehr in Gedanken vertieft. An der Kasse legte ich alle meine Waren auf das Band und wollte bezahlen. Aber anstatt meine EC-Karte aus der Tasche zu holen, hielt ich dem Kassierer meine Fernbedienung für das Auto hin. Er schaute mich verwirrt an und wir mussten beide sehr lachen. Manchmal ist man einfach ein bisschen durcheinander.",
        persianTranslation: "اخیراً وقتی در سوپرمارکت خرید می‌کردم، خیلی در فکر فرو رفته بودم. در صندوق تمام کالاهایم را روی نوار نقاله گذاشتم و می‌خواستم پرداخت کنم. اما به جای اینکه کارت بانکی‌ام را از کیفم بیرون بیاورم، ریموت ماشینم را به صندوقدار دادم. او با گیجی به من نگاه کرد و هر دوی ما خیلی خندیدیم. گاهی آدم просто کمی گیج است."
    },
    { 
        germanTitle: "Ein Besuch im Theater", 
        persianTitle: "رفتن به تئاتر",
        germanStory: "Letzte Woche hat mir meine Freundin zum Geburtstag Karten für das Theater geschenkt. Wir haben uns eine moderne Inszenierung von Shakespeares 'Romeo und Julia' angesehen. Das Bühnenbild und die Kostüme waren sehr kreativ und ungewöhnlich. Es war eine ganz andere, viel intensivere Erfahrung als ins Kino zu gehen. Ich habe mir vorgenommen, jetzt öfter ins Theater zu gehen.",
        persianTranslation: "هفته گذشته دوستم برای تولدم بلیط تئاتر به من هدیه داد. ما یک اجرای مدرن از «رومئو و ژولیت» شکسپیر را تماشا کردیم. طراحی صحنه و لباس‌ها بسیار خلاقانه و غیرمعمول بود. این یک تجربه کاملاً متفاوت و بسیار شدیدتر از رفتن به سینما بود. من تصمیم گرفته‌ام که از این به بعد بیشتر به تئاتر بروم."
    },
    { 
        germanTitle: "Eine gute Tat", 
        persianTitle: "یک کار خوب",
        germanStory: "Auf dem Heimweg sah ich heute einen älteren Mann, der große Schwierigkeiten hatte, seine schweren Einkaufstüten zu tragen. Er musste alle paar Meter eine Pause machen. Ich ging zu ihm und fragte, ob ich ihm helfen könne. Er war sehr dankbar. Ich trug seine Taschen bis zu seiner Haustür im dritten Stock. Es war nur eine kleine Geste, aber es fühlte sich sehr gut an, jemandem geholfen zu haben.",
        persianTranslation: "امروز در راه خانه یک مرد مسن را دیدم که در حمل کیسه‌های خرید سنگینش مشکل زیادی داشت. او باید هر چند متر یک بار استراحت می‌کرد. من به سمت او رفتم و پرسیدم آیا می‌توانم به او کمک کنم. او بسیار سپاسگزار بود. من کیسه‌هایش را تا در خانه‌اش در طبقه سوم حمل کردم. این فقط یک حرکت کوچک بود، اما حس بسیار خوبی داشت که به کسی کمک کرده‌ام."
    },
    { 
        germanTitle: "Ein spannendes Sportereignis", 
        persianTitle: "یک رویداد ورزشی هیجان‌انگیز",
        germanStory: "Gestern Abend habe ich mit Freunden das Finale der Fußball-Weltmeisterschaft im Fernsehen geschaut. Es war ein unglaublich spannendes und dramatisches Spiel, das erst in der Verlängerung entschieden wurde. Die Atmosphäre bei uns zu Hause war fast wie im Stadion. Wir haben bis zur letzten Minute mitgefiebert und am Ende laut gejubelt. Solche gemeinsamen Erlebnisse sind einfach unbezahlbar.",
        persianTranslation: "دیشب با دوستانم فینال جام جهانی فوتبال را از تلویزیون تماشا کردم. این یک بازی فوق‌العاده هیجان‌انگیز و دراماتیک بود که تازه در وقت اضافه مشخص شد. جو خانه ما تقریباً مثل ورزشگاه بود. ما تا آخرین لحظه هیجان‌زده بودیم و در پایان با صدای بلند شادی کردیم. چنین تجربیات مشترکی به سادگی بی‌قیمت هستند."
    },
    { 
        germanTitle: "Ein Brief aus der Heimat", 
        persianTitle: "نامه‌ای از وطن",
        germanStory: "Heute lag ein handgeschriebener Brief von meiner Großmutter aus der Heimat in meinem Briefkasten. Sie hat mir von ihrem Alltag im Dorf erzählt. Einen echten Brief zu bekommen ist heutzutage etwas ganz Besonderes. Es fühlt sich viel persönlicher an als eine schnelle E-Mail oder eine Nachricht. Ich habe mich riesig darüber gefreut und werde ihr bald zurückschreiben.",
        persianTranslation: "امروز یک نامه دست‌نویس از مادربزرگم از وطن در صندوق پستم بود. او از روزمرگی‌هایش در روستا برایم گفته بود. امروزه دریافت یک نامه واقعی چیز بسیار خاصی است. بسیار شخصی‌تر از یک ایمیل یا پیام سریع حس می‌شود. من از این بابت بی‌نهایت خوشحال شدم و به زودی برایش جواب خواهم نوشت."
    },
    { 
        germanTitle: "Eine Zugverspätung", 
        persianTitle: "تأخیر قطار",
        germanStory: "Mein Zug nach Hamburg hatte heute Morgen eine ganze Stunde Verspätung wegen eines technischen Problems an der Strecke. Das war sehr ärgerlich, weil ich einen wichtigen Termin in Hamburg hatte. Viele Leute am Bahnsteig waren ungeduldig und haben sich beschwert. Zugverspätungen sind in letzter Zeit leider keine Seltenheit mehr, aber man kann als Passagier nichts dagegen tun.",
        persianTranslation: "قطار من به هامبورگ امروز صبح به دلیل یک مشکل فنی در مسیر، یک ساعت کامل تأخیر داشت. این خیلی آزاردهنده بود چون من یک قرار مهم در هامبورگ داشتم. بسیاری از مردم در سکو بی‌صبر بودند و شکایت می‌کردند. متأسفانه تأخیر قطارها اخیراً دیگر نادر نیست، اما به عنوان مسافر کاری نمی‌توان در مورد آن انجام داد."
    },
    { 
        germanTitle: "Ein altes Fotoalbum", 
        persianTitle: "یک آلبوم عکس قدیمی",
        germanStory: "Bei meinen Eltern auf dem Dachboden haben wir neulich ein altes Fotoalbum wiedergefunden. Es waren viele Schwarz-Weiß-Fotos von meinen Großeltern als junge Leute und von meinen Eltern als Kinder darin. Es war faszinierend zu sehen, wie die Mode und die Frisuren damals waren. Solche alten Fotoalben sind wie kleine Zeitmaschinen, die Geschichten erzählen.",
        persianTranslation: "اخیراً در اتاق زیر شیروانی والدینم ما یک آلبوم عکس قدیمی را دوباره پیدا کردیم. عکس‌های سیاه و سفید زیادی از پدربزرگ و مادربزرگم در جوانی و از والدینم در کودکی در آن بود. دیدن اینکه مد و مدل موها در آن زمان چگونه بوده، شگفت‌انگیز بود. چنین آلبوم‌های عکس قدیمی مانند ماشین‌های زمان کوچکی هستند که داستان‌ها را روایت می‌کنند."
    },
    { 
        germanTitle: "Ein Gespräch über Hobbys", 
        persianTitle: "گفتگو درباره سرگرمی‌ها",
        germanStory: "In der Mittagspause sprachen wir mit den Kollegen über unsere Hobbys. Eine Kollegin erzählte, dass sie in ihrer Freizeit in einer Band singt. Ein anderer Kollege sammelt begeistert alte Münzen. Ich erzählte vom Gärtnern auf meinem Balkon. Es ist immer wieder interessant zu erfahren, was die Leute außerhalb der Arbeit für Leidenschaften haben. Man lernt sie von einer ganz anderen Seite kennen.",
        persianTranslation: "در وقت ناهار با همکاران درباره سرگرمی‌هایمان صحبت کردیم. یک همکار گفت که در اوقات فراغتش در یک گروه موسیقی می‌خواند. یک همکار دیگر با اشتیاق سکه‌های قدیمی جمع می‌کند. من از باغبانی در بالکنم گفتم. همیشه جالب است که بدانی مردم خارج از کار چه علاقه‌هایی دارند. آدم آنها را از یک جنبه کاملاً متفاوت می‌شناسد."
    },
    { 
        germanTitle: "Eine Nacht im Hotel", 
        persianTitle: "یک شب در هتل",
        germanStory: "Für eine kurze Geschäftsreise musste ich letzte Woche eine Nacht im Hotel übernachten. Das Zimmer war modern eingerichtet und das Bett war unglaublich bequem. Das Beste war aber das riesige Frühstücksbuffet am nächsten Morgen. Es gab eine riesige Auswahl an allem, was man sich wünschen kann. Eine Nacht im Hotel fühlt sich für mich immer ein bisschen wie ein kleiner Luxus-Urlaub an.",
        persianTranslation: "برای یک سفر کاری کوتاه هفته گذشته باید یک شب در هتل می‌ماندم. اتاق به سبک مدرن تزئین شده بود و تخت فوق‌العاده راحت بود. اما بهترین قسمت بوفه صبحانه غول‌پیکر روز بعد بود. انتخاب بسیار بزرگی از هر چیزی که می‌توانستی آرزو کنی وجود داشت. یک شب در هتل برای من همیشه کمی شبیه یک تعطیلات لوکس کوچک است."
    },
    { 
        germanTitle: "Ein plötzlicher Stromausfall", 
        persianTitle: "قطعی ناگهانی برق",
        germanStory: "Gestern Abend gab es einen plötzlichen Stromausfall in unserer ganzen Straße. Plötzlich war alles dunkel und absolut still. Wir suchten nach Kerzen und zündeten sie an. Es war eigentlich eine ganz gemütliche und besondere Atmosphäre. Wir saßen im Wohnzimmer zusammen und redeten, anstatt fernzusehen. Nach einer Stunde ging das Licht zum Glück wieder an.",
        persianTranslation: "دیشب یک قطعی ناگهانی برق در تمام خیابان ما رخ داد. ناگهان همه جا تاریک و کاملاً ساکت شد. ما به دنبال شمع گشتیم و آنها را روشن کردیم. در واقع یک جو کاملاً دنج و خاص بود. ما با هم در اتاق نشیمن نشستیم و صحبت کردیم، به جای اینکه تلویزیون تماشا کنیم. خوشبختانه بعد از یک ساعت برق دوباره وصل شد."
    },
    { 
        germanTitle: "Ein Besuch im botanischen Garten", 
        persianTitle: "بازدید از باغ گیاه‌شناسی",
        germanStory: "Da das Wetter am Sonntag so schön war, besuchten wir den botanischen Garten. Es war beeindruckend, die vielen verschiedenen und exotischen Pflanzen aus der ganzen Welt zu sehen. Besonders gut gefiel mir das große Tropenhaus. Dort war es sehr warm und feucht, genau wie in einem echten Dschungel. Es war ein sehr lehrreicher und gleichzeitig entspannender Nachmittag.",
        persianTranslation: "چون هوای روز یکشنبه خیلی خوب بود، ما از باغ گیاه‌شناسی دیدن کردیم. دیدن گیاهان مختلف و عجیب و غریب از سراسر جهان بسیار تأثیرگذار بود. من به خصوص از خانه بزرگ استوایی خوشم آمد. آنجا بسیار گرم و مرطوب بود، درست مثل یک جنگل واقعی. این یک بعد از ظهر بسیار آموزنده و در عین حال آرامش‌بخش بود."
    },
    { 
        germanTitle: "Eine lustige Geschichte über ein Tier", 
        persianTitle: "یک داستان خنده‌دار درباره یک حیوان",
        germanStory: "Die Katze meiner Nachbarin ist sehr klug. Sie hat letzte Woche gelernt, wie man die Türklinke herunterdrückt, um die Tür zu öffnen. Eines Morgens kam sie einfach in unsere Küche spaziert, sprang auf den Tisch und wollte unsere Wurst vom Frühstück klauen. Wir waren alle sehr überrascht und mussten herzlich lachen. Jetzt müssen wir immer die Küchentür abschließen, wenn wir lüften.",
        persianTranslation: "گربه همسایه‌ام بسیار باهوش است. او هفته گذشته یاد گرفت چگونه دستگیره در را پایین بکشد تا در را باز کند. یک روز صبح او به سادگی وارد آشپزخانه ما شد، روی میز پرید و می‌خواست کالباس صبحانه ما را بدزدد. ما همه خیلی متعجب شدیم و از ته دل خندیدیم. حالا باید همیشه در آشپزخانه را وقتی هوا را عوض می‌کنیم، قفل کنیم."
    },
    { 
        germanTitle: "Ein handgemachtes Geschenk", 
        persianTitle: "یک هدیه دست‌ساز",
        germanStory: "Zum Muttertag wollte ich meiner Mutter dieses Jahr etwas Persönliches schenken. Also habe ich ein Fotoalbum mit vielen alten und neuen Bildern von unserer Familie gebastelt. Ich habe jede Seite liebevoll dekoriert und kleine Anekdoten dazugeschrieben. Meine Mutter war zu Tränen gerührt und hat sich riesig gefreut. Ein handgemachtes Geschenk ist oft viel wertvoller als etwas Teures, das man kauft.",
        persianTranslation: "برای روز مادر امسال می‌خواستم به مادرم یک هدیه شخصی بدهم. بنابراین یک آلبوم عکس با عکس‌های قدیمی و جدید زیادی از خانواده‌مان درست کردم. من هر صفحه را با عشق تزئین کردم و حکایت‌های کوچکی کنارش نوشتم. مادرم اشک در چشمانش جمع شد و بی‌نهایت خوشحال شد. یک هدیه دست‌ساز اغلب بسیار ارزشمندتر از چیز گران‌قیمتی است که می‌خری."
    },
    { 
        germanTitle: "Ein Tag am Meer", 
        persianTitle: "یک روز کنار دریا",
        germanStory: "Wir sind für einen Tag an die Nordsee gefahren, um dem Stadtleben zu entfliehen. Die frische, salzige Meeresluft war herrlich. Wir machten einen langen Spaziergang am leeren Strand und sammelten Muscheln. Das Wasser war natürlich noch viel zu kalt zum Schwimmen, aber wir saßen in einem gemütlichen Strandkorb und aßen ein leckeres Fischbrötchen. Das war wie ein perfekter kleiner Kurzurlaub.",
        persianTranslation: "ما برای یک روز به دریای شمال رفتیم تا از زندگی شهری فرار کنیم. هوای تازه و شور دریا عالی بود. ما یک پیاده‌روی طولانی در ساحل خالی داشتیم و صدف جمع کردیم. آب البته هنوز برای شنا خیلی سرد بود، اما ما در یک صندلی ساحلی دنج نشستیم و یک ساندویچ ماهی خوشمزه خوردیم. این مانند یک تعطیلات کوتاه عالی بود."
    },
    { 
        germanTitle: "Eine wichtige Entscheidung treffen", 
        persianTitle: "تصمیم گرفتن",
        germanStory: "Ich musste vor kurzem eine wichtige berufliche Entscheidung treffen: Sollte ich meinen sicheren Job für ein interessantes, aber unsicheres Jobangebot wechseln? Ich habe eine Liste mit allen Vor- und Nachteilen geschrieben und lange mit meiner Familie darüber gesprochen. Nach langem Überlegen habe ich mich für die neue Stelle entschieden. Es war keine leichte Entscheidung, aber ich bin gespannt auf die neue Herausforderung.",
        persianTranslation: "من اخیراً باید یک تصمیم مهم شغلی می‌گرفتم: آیا باید شغل امنم را برای یک پیشنهاد شغلی جالب اما نامطمئن عوض کنم؟ من یک لیست با تمام مزایا و معایب نوشتم و مدت طولانی با خانواده‌ام در این باره صحبت کردم. پس از تفکر طولانی، تصمیم گرفتم شغل جدید را بپذیرم. این تصمیم آسانی نبود، اما من برای چالش جدید هیجان‌زده هستم."
    },
    { 
        germanTitle: "Ein Geheimnis", 
        persianTitle: "یک راز",
        germanStory: "Meine kleine Schwester hat mir gestern ein großes Geheimnis anvertraut. Sie plant, unseren Eltern zu ihrem Hochzeitstag eine Überraschungsreise nach Paris zu schenken. Sie hat schon Geld gespart. Ich darf absolut niemandem etwas davon erzählen, besonders nicht unseren Eltern. Es ist manchmal schwer, ein so schönes Geheimnis für sich zu behalten, aber ich freue mich schon sehr auf ihre überraschten Gesichter.",
        persianTranslation: "خواهر کوچکم دیروز یک راز بزرگ را به من سپرد. او قصد دارد به والدینمان به مناسبت سالگرد ازدواجشان یک سفر غافلگیرکننده به پاریس هدیه بدهد. او دیگر پول پس‌انداز کرده است. من مطلقاً نباید به کسی چیزی در این باره بگویم، به خصوص به والدینمان. گاهی اوقات نگه داشتن چنین راز زیبایی سخت است، اما من از الان خیلی برای چهره‌های غافلگیر شده آنها خوشحالم."
    },
    { 
        germanTitle: "Ein Glücksmoment", 
        persianTitle: "یک لحظه خوشبختی",
        germanStory: "Gestern saß ich nach einem anstrengenden Arbeitstag im Park auf einer Bank. Die Sonne ging gerade unter und färbte den Himmel in wunderschönen Orange- und Rottönen. Vögel zwitscherten und alles war friedlich. In diesem Moment fühlte ich mich einfach nur ruhig, glücklich und dankbar. Manchmal sind es diese kleinen, einfachen Momente im Leben, die am allerschönsten sind.",
        persianTranslation: "دیروز بعد از یک روز کاری سخت، روی یک نیمکت در پارک نشسته بودم. خورشید در حال غروب بود و آسمان را به رنگ‌های زیبای نارنجی و قرمز درآورده بود. پرندگان جیک جیک می‌کردند و همه چیز آرام بود. در آن لحظه من فقط احساس آرامش، خوشبختی و سپاسگزاری می‌کردم. گاهی اوقات این لحظات کوچک و ساده زندگی هستند که از همه زیباترند."
    },
    { 
        germanTitle: "Ein wichtiges Arbeitstreffen", 
        persianTitle: "یک جلسه کاری مهم",
        germanStory: "Wir hatten heute ein sehr wichtiges Arbeitstreffen mit einem potenziellen neuen Kunden. Wir haben ihm unsere Ideen für ein großes Projekt präsentiert. Das Treffen dauerte fast zwei Stunden und war sehr intensiv, aber auch sehr produktiv. Der Kunde schien von unseren Vorschlägen und unserer Arbeit sehr begeistert zu sein. Ich habe ein gutes Gefühl und denke, dass wir den Auftrag bekommen werden.",
        persianTranslation: "امروز ما یک جلسه کاری بسیار مهم با یک مشتری بالقوه جدید داشتیم. ما ایده‌هایمان را برای یک پروژه بزرگ به او ارائه دادیم. جلسه تقریباً دو ساعت طول کشید و بسیار فشرده، اما همچنین بسیار پربار بود. به نظر می‌رسید مشتری از پیشنهادات و کار ما بسیار هیجان‌زده است. من حس خوبی دارم و فکر می‌کنم که ما قرارداد را خواهیم گرفت."
    },
    { 
        germanTitle: "Ein ungewöhnliches Hobby", 
        persianTitle: "یک سرگرمی غیرمعمول",
        germanStory: "Mein Nachbar hat ein ziemlich ungewöhnliches Hobby: Er ist Hobby-Imker. Er hat mehrere Bienenstöcke hinten in seinem Garten stehen. Er hat mir schon viel über das faszinierende Leben der Bienen erzählt. Letzte Woche hat er mir ein Glas von seinem eigenen, selbstgemachten Honig geschenkt. Er war unglaublich köstlich, viel besser als der Honig aus dem Supermarkt.",
        persianTranslation: "همسایه‌ام یک سرگرمی کاملاً غیرمعمول دارد: او زنبوردار آماتور است. او چندین کندو در پشت باغش دارد. او چیزهای زیادی درباره زندگی شگفت‌انگیز زنبورها به من گفته است. هفته گذشته او یک شیشه از عسل خودش، دست‌ساز خودش، را به من هدیه داد. فوق‌العاده خوشمزه بود، خیلی بهتر از عسل سوپرمارکتی."
    },
    { 
        germanTitle: "Ein Besuch bei Freunden", 
        persianTitle: "دیدار با دوستان",
        germanStory: "Am Wochenende haben wir Freunde besucht, die vor einem Jahr in eine andere Stadt gezogen sind. Wir haben bei ihnen übernachtet. Wir haben zusammen gekocht, einen langen Spaziergang durch ihre neue Stadt gemacht und bis spät in die Nacht geredet und gelacht. Es ist immer wieder schön, gute Freunde zu treffen, auch wenn man sich wegen der Entfernung nicht mehr so oft sieht.",
        persianTranslation: "آخر هفته ما به دیدن دوستانی رفتیم که یک سال پیش به شهر دیگری نقل مکان کرده بودند. ما شب را نزد آنها ماندیم. ما با هم آشپزی کردیم، یک پیاده‌روی طولانی در شهر جدیدشان داشتیم و تا دیروقت شب صحبت کردیم و خندیدیم. دیدار با دوستان خوب همیشه زیباست، حتی اگر به خاطر فاصله دیگر همدیگر را زیاد نبینید."
    },
    { 
        germanTitle: "Ein Spaziergang durch die Altstadt", 
        persianTitle: "قدم زدن در شهر قدیمی",
        germanStory: "Ich liebe es, an einem Sonntagnachmittag ohne Ziel durch die Altstadt zu spazieren. Die engen, verwinkelten Gassen, die alten Fachwerkhäuser und die kleinen, individuellen Geschäfte haben einen ganz besonderen Charme. Man fühlt sich ein bisschen wie auf einer Reise in eine andere Zeit. Ich entdecke jedes Mal eine neue schöne Ecke, die ich vorher noch nicht bemerkt hatte.",
        persianTranslation: "من عاشق این هستم که بعد از ظهر یکشنبه بدون هدف در شهر قدیمی قدم بزنم. کوچه‌های باریک و پیچ در پیچ، خانه‌های قدیمی نیمه‌چوبی و مغازه‌های کوچک و منحصر به فرد جذابیت بسیار خاصی دارند. آدم کمی احساس می‌کند در سفری به زمان دیگری است. من هر بار یک گوشه زیبای جدید را کشف می‌کنم که قبلاً متوجه آن نشده بودم."
    },
    { 
        germanTitle: "Einen verlorenen Gegenstand wiederfinden", 
        persianTitle: "پیدا کردن یک شیء گمشده",
        germanStory: "Ich habe gestern meinen Lieblingsschal, ein Geschenk von meiner Oma, im Bus verloren. Ich habe es erst bemerkt, als ich schon zu Hause war. Ich habe mich sehr geärgert. Heute Morgen rief ich beim Fundbüro der Busgesellschaft an. Und tatsächlich: Jemand hatte meinen Schal gefunden und abgegeben! Ich war so erleichtert und froh über die ehrliche Person.",
        persianTranslation: "من دیروز شال مورد علاقه‌ام را، که هدیه‌ای از مادربزرگم بود، در اتوبوس گم کردم. تازه وقتی به خانه رسیدم متوجه شدم. خیلی ناراحت شدم. امروز صبح به دفتر اشیاء گمشده شرکت اتوبوسرانی زنگ زدم. و واقعاً: کسی شال مرا پیدا کرده و تحویل داده بود! من خیلی خیالم راحت شد و از آن شخص صادق خوشحال شدم."
    },
    { 
        germanTitle: "Eine neue Sprache lernen: Tipps", 
        persianTitle: "یادگیری یک زبان جدید: نکات",
        germanStory: "Eine neue Sprache zu lernen, erfordert viel Geduld und Disziplin. Mein bester Tipp ist, jeden Tag ein bisschen zu üben, anstatt nur einmal pro Woche für mehrere Stunden. Es hilft auch sehr, Medien in der neuen Sprache zu konsumieren, zum Beispiel Filme oder Podcasts mit Untertiteln. Und am wichtigsten ist: Man darf keine Angst haben, Fehler zu machen. Fehler sind ein normaler Teil des Lernprozesses.",
        persianTranslation: "یادگیری یک زبان جدید نیازمند صبر و انضباط زیادی است. بهترین نکته من این است که هر روز کمی تمرین کنی، به جای اینکه فقط یک بار در هفته برای چندین ساعت. همچنین مصرف رسانه‌ها به زبان جدید، مثلاً فیلم‌ها یا پادکست‌ها با زیرنویس، بسیار کمک می‌کند. و از همه مهمتر: نباید از اشتباه کردن ترسید. اشتباهات بخش عادی از فرآیند یادگیری هستند."
    },
    { 
        germanTitle: "Ein Tag im Schnee", 
        persianTitle: "یک روز در برف",
        germanStory: "Endlich hat es über Nacht genug geschneit, sodass wir Schlitten fahren konnten. Wir sind zu einem großen Hügel in der Nähe gefahren. Es hat riesigen Spaß gemacht, mit dem Schlitten den Hügel immer wieder hinunterzurasen. Nach zwei Stunden waren wir komplett nass und durchgefroren, aber überglücklich. Zu Hause haben wir uns dann mit einem heißen Kakao wieder aufgewärmt.",
        persianTranslation: "بالاخره شب به اندازه کافی برف بارید تا بتوانیم سورتمه‌سواری کنیم. ما به یک تپه بزرگ در نزدیکی رفتیم. با سورتمه بارها و بارها از تپه پایین آمدن بسیار سرگرم‌کننده بود. بعد از دو ساعت کاملاً خیس و یخ‌زده بودیم، اما بی‌نهایت خوشحال. در خانه بعد با یک کاکائوی داغ خودمان را دوباره گرم کردیم."
    },
    { 
        germanTitle: "Ein peinlicher Moment", 
        persianTitle: "یک لحظه خجالت‌آور",
        germanStory: "Gestern in der vollen U-Bahn winkte und lächelte ich einer Person enthusiastisch zu, weil ich fest davon überzeugt war, es sei eine gute Freundin. Aber es war eine völlig fremde Person. Sie schaute mich nur sehr komisch an. Das war mir extrem peinlich. Ich wurde ganz rot im Gesicht und bin an der nächsten Station sofort ausgestiegen. Solche Momente vergisst man nicht so schnell.",
        persianTranslation: "دیروز در متروی شلوغ با اشتیاق به شخصی دست تکان دادم و لبخند زدم، چون کاملاً مطمئن بودم که او یک دوست خوب است. اما او یک فرد کاملاً غریبه بود. او فقط با تعجب به من نگاه کرد. این برایم بی‌نهایت خجالت‌آور بود. صورتم کاملاً قرمز شد و در ایستگاه بعدی فوراً پیاده شدم. چنین لحظاتی را به این زودی‌ها فراموش نمی‌کنی."
    },
    { 
        germanTitle: "Ein Gerücht in der Nachbarschaft", 
        persianTitle: "شایعه‌ای در محله",
        germanStory: "In unserer Nachbarschaft ging letzte Woche das Gerücht um, dass ein berühmter Fußballspieler in unsere Straße ziehen würde. Alle waren sehr aufgeregt und neugierig. Es stellte sich aber schnell heraus, dass der neue Nachbar nur zufällig den gleichen Nachnamen wie der Fußballer hatte. Es war eine lustige Verwechslung und wir haben alle darüber gelacht.",
        persianTranslation: "هفته گذشته در محله ما شایعه شد که یک فوتبالیست معروف به خیابان ما نقل مکان خواهد کرد. همه خیلی هیجان‌زده و کنجکاو بودند. اما به زودی معلوم شد که همسایه جدید فقط به طور تصادفی همان نام خانوادگی فوتبالیست را داشت. این یک اشتباه خنده‌دار بود و همه ما به آن خندیدیم."
    },
    { 
        germanTitle: "Eine Wohnungsrenovierung", 
        persianTitle: "یک بازسازی آپارتمان",
        germanStory: "Wir renovieren gerade unsere Küche und das ist anstrengender als gedacht. Überall ist Staub und Lärm. Wir können seit einer Woche nicht mehr richtig kochen und müssen oft Essen bestellen oder bei Freunden essen. Es ist sehr chaotisch. Aber ich freue mich schon riesig darauf, wenn alles fertig ist. Die neue Küche wird bestimmt toll aussehen.",
        persianTranslation: "ما در حال بازسازی آشپزخانه‌مان هستیم و این خسته‌کننده‌تر از آن چیزی است که فکر می‌کردم. همه جا گرد و غبار و سر و صدا است. ما یک هفته است که نمی‌توانیم درست آشپزی کنیم و اغلب باید غذا سفارش دهیم یا در خانه دوستان غذا بخوریم. خیلی شلوغ است. اما من از الان بی‌نهایت خوشحالم وقتی همه چیز تمام شود. آشپزخانه جدید حتماً عالی به نظر خواهد رسید."
    },
    { 
        germanTitle: "Ein Neuanfang", 
        persianTitle: "یک شروع جدید",
        germanStory: "Nachdem ich unerwartet meinen Job verloren hatte, war ich zuerst sehr traurig und besorgt. Aber dann habe ich es als eine Chance für einen kompletten Neuanfang gesehen. Ich habe eine Weiterbildung in einem neuen Bereich gemacht und einen Job gefunden, der mir viel mehr Spaß macht. Manchmal sind Veränderungen, auch wenn sie zuerst schwierig sind, das Beste, was einem passieren kann.",
        persianTranslation: "بعد از اینکه به طور غیرمنتظره شغلم را از دست دادم، در ابتدا خیلی غمگین و نگران بودم. اما بعد آن را به عنوان فرصتی برای یک شروع کاملاً جدید دیدم. من یک دوره آموزشی تکمیلی در یک حوزه جدید گذراندم و شغلی پیدا کردم که برایم بسیار لذت‌بخش‌تر است. گاهی اوقات تغییرات، حتی اگر در ابتدا سخت باشند، بهترین چیزی است که می‌تواند برای آدم اتفاق بیفتد."
    },
    { 
        germanTitle: "Eine wichtige Lektion", 
        persianTitle: "یک درس مهم",
        germanStory: "Früher wollte ich in Diskussionen immer unbedingt Recht haben und gewinnen. Aber ich habe eine wichtige Lektion gelernt: Es ist nicht immer wichtig, Recht zu haben. Manchmal ist es viel wichtiger, freundlich zu sein und eine gute Beziehung zu erhalten. Heute versuche ich, auch die Perspektive der anderen Person zu verstehen, anstatt nur auf meiner Meinung zu bestehen. Das hat vieles einfacher gemacht.",
        persianTranslation: "در گذشته همیشه می‌خواستم در بحث‌ها حتماً حق با من باشد و برنده شوم. اما یک درس مهم یاد گرفتم: همیشه حق با تو بودن مهم نیست. گاهی اوقات مهربان بودن و حفظ یک رابطه خوب بسیار مهم‌تر است. امروز سعی می‌کنم دیدگاه فرد مقابل را نیز درک کنم، به جای اینکه فقط بر نظر خودم اصرار کنم. این بسیاری از چیزها را آسان‌تر کرده است."
    },
    { 
        germanTitle: "Ein unerwarteter Gast", 
        persianTitle: "یک مهمان ناخوانده",
        germanStory: "Gestern Abend klingelte es plötzlich an meiner Tür. Draußen stand ein alter Schulfreund, den ich seit über zehn Jahren nicht mehr gesehen hatte. Er war geschäftlich in der Stadt und hat meine Adresse im Internet gefunden. Es war eine unglaubliche Überraschung. Wir haben die halbe Nacht geredet, alte Erinnerungen ausgetauscht und viel gelacht. Es war, als wäre keine Zeit vergangen.",
        persianTranslation: "دیشب ناگهان زنگ در خانه‌ام به صدا درآمد. بیرون یک دوست قدیمی دوران مدرسه ایستاده بود که بیش از ده سال بود او را ندیده بودم. او برای کار در شهر بود و آدرس مرا در اینترنت پیدا کرده بود. این یک غافلگیری باورنکردنی بود. ما نیمی از شب را صحبت کردیم، خاطرات قدیمی را مرور کردیم و زیاد خندیدیم. انگار هیچ زمانی نگذشته بود."
    },
    { 
        germanTitle: "Ein Tag in der Natur", 
        persianTitle: "یک روز در طبیعت",
        germanStory: "Um dem Stress der lauten Stadt zu entfliehen, habe ich den ganzen Sonntag in der Natur verbracht. Ich bin in einem großen Wald spazieren gegangen und habe bewusst mein Handy ausgeschaltet. Ich habe nur die Geräusche der Vögel und des Windes in den Bäumen gehört. Diese absolute Ruhe und Stille war genau das, was ich gebraucht habe, um meine Batterien wieder vollständig aufzuladen.",
        persianTranslation: "برای فرار از استرس شهر پر سر و صدا، تمام روز یکشنبه را در طبیعت گذراندم. من در یک جنگل بزرگ قدم زدم و عمداً موبایلم را خاموش کردم. من فقط به صدای پرندگان و باد در درختان گوش دادم. این آرامش و سکوت مطلق دقیقاً همان چیزی بود که برای شارژ مجدد کامل باتری‌هایم نیاز داشتم."
    },
    { 
        germanTitle: "Ein Tag im Homeoffice", 
        persianTitle: "یک روز در دفتر کار خانگی",
        germanStory: "Seit der Pandemie arbeite ich zwei Tage pro Woche im Homeoffice. Das hat Vor- und Nachteile. Ich spare den langen Weg zur Arbeit und kann meine Zeit flexibler einteilen. Aber ich vermisse auch den direkten Kontakt und die spontanen Gespräche mit meinen Kollegen. Heute hatte ich viele Videokonferenzen. Es ist wichtig, auch zu Hause eine klare Struktur im Arbeitstag zu haben, um produktiv zu bleiben.",
        persianTranslation: "از زمان همه‌گیری، من دو روز در هفته در دفتر کار خانگی کار می‌کنم. این مزایا و معایبی دارد. من از مسیر طولانی تا محل کار صرفه‌جویی می‌کنم و می‌توانم وقتم را انعطاف‌پذیرتر تنظیم کنم. اما دلم برای تماس مستقیم و گفتگوهای خودجوش با همکارانم نیز تنگ می‌شود. امروز کنفرانس‌های ویدیویی زیادی داشتم. مهم است که در خانه نیز ساختار روشنی در روز کاری داشته باشی تا بهره‌ور بمانی."
    },
    { 
        germanTitle: "Ein überraschender Gewinn", 
        persianTitle: "یک برد غافلگیرکننده",
        germanStory: "Ich mache eigentlich nie bei Gewinnspielen mit, aber letzte Woche habe ich eine Ausnahme gemacht. Ein lokales Radio verloste Tickets für ein großes Musikfestival. Ich füllte online ein Formular aus und vergaß es wieder. Gestern bekam ich einen Anruf. 'Herzlichen Glückwunsch, Sie haben gewonnen!', sagte eine fröhliche Stimme. Ich konnte es kaum glauben! Ich habe sofort meine beste Freundin angerufen. Jetzt freuen wir uns riesig auf ein unvergessliches Wochenende mit toller Musik.",
        persianTranslation: "من در واقع هرگز در قرعه‌کشی‌ها شرکت نمی‌کنم، اما هفته گذشته یک استثنا قائل شدم. یک رادیوی محلی بلیط‌هایی برای یک جشنواره بزرگ موسیقی هدیه می‌داد. من یک فرم را آنلاین پر کردم و دوباره فراموشش کردم. دیروز یک تماس تلفنی دریافت کردم. یک صدای شاد گفت: «تبریک می‌گویم، شما برنده شدید!». به سختی می‌توانستم باور کنم! فوراً به بهترین دوستم زنگ زدم. حالا ما بی‌نهایت برای یک آخر هفته فراموش‌نشدنی با موسیقی عالی خوشحالیم."
    },
    { 
        germanTitle: "Ein Kochkurs", 
        persianTitle: "یک کلاس آشپزی",
        germanStory: "Um meine Kochkünste zu verbessern, habe ich mich für einen italienischen Kochkurs angemeldet. Gestern war der erste Abend. Der Lehrer, ein echter Italiener namens Marco, war sehr sympathisch und lustig. Wir haben gelernt, wie man frische Pasta selbst macht. Es war mehr Arbeit als gedacht, aber es hat viel Spaß gemacht. Am Ende haben wir unsere selbstgemachten Nudeln mit einer leckeren Tomatensoße gegessen. Es war köstlich! Nächste Woche lernen wir, wie man Tiramisu macht.",
        persianTranslation: "برای بهتر کردن مهارت‌های آشپزی‌ام، در یک کلاس آشپزی ایتالیایی ثبت‌نام کردم. دیروز اولین شب بود. معلم، یک ایتالیایی واقعی به نام مارکو، بسیار خوش‌برخورد و بامزه بود. ما یاد گرفتیم چگونه خودمان پاستای تازه درست کنیم. کار بیشتری از آنچه فکر می‌کردم بود، اما بسیار سرگرم‌کننده بود. در پایان، ما نودل‌های دست‌ساز خودمان را با یک سس گوجه‌فرنگی خوشمزه خوردیم. لذیذ بود! هفته آینده یاد می‌گیریم چگونه تیرامیسو درست کنیم."
    },
    { 
        germanTitle: "Eine gute Tat", 
        persianTitle: "یک کار خوب",
        germanStory: "Als ich heute von der Arbeit nach Hause ging, sah ich eine ältere Dame, der ihre Einkaufstüte gerissen war. Alles fiel auf den Boden. Ich zögerte nicht und half ihr sofort, alles wieder aufzusammeln. Sie hatte Schwierigkeiten, alles zu tragen, also begleitete ich sie bis zu ihrer Haustür. Sie bedankte sich mehrmals und war sehr dankbar. Es war nur eine kleine Hilfe, aber es gab mir ein sehr gutes Gefühl für den Rest des Tages.",
        persianTranslation: "امروز وقتی از سر کار به خانه می‌رفتم، خانم مسنی را دیدم که کیسه خریدش پاره شده بود. همه چیز روی زمین ریخت. من تردید نکردم و فوراً به او کمک کردم تا همه چیز را دوباره جمع کند. او در حمل همه چیز مشکل داشت، بنابراین من او را تا در خانه‌اش همراهی کردم. او چندین بار تشکر کرد و بسیار سپاسگزار بود. این فقط یک کمک کوچک بود، اما برای بقیه روز به من حس بسیار خوبی داد."
    }
  ],
  // FIX: Added missing B1 and B2 level entries to satisfy the Record<Level, ...> type.
  B1: [],
  B2: [],
};

// FIX: Added and exported the getTopicsForLevel function, which was missing.
export const getTopicsForLevel = (level: Level): StoryTopic[] => {
  const topicsForLevel = predefinedTopics[level] || [];
  return topicsForLevel.map((topic, index) => ({
    ...topic,
    id: index,
  }));
};
