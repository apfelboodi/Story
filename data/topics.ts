
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
      germanStory: "Letztes Wochenende besuchte ich Berlin. Ich fuhr mit dem Zug, weil es bequem ist. Am Samstag sah ich das Brandenburger Tor. Es war sehr beeindruckend. Danach machte ich eine Bootsfahrt auf der Spree. Abends aß ich in einem Restaurant Currywurst. Berlin ist eine tolle Stadt, die viel zu bieten hat.",
      persianTranslation: "آخر هفته گذشته از برلین دیدن کردم. من با قطار سفر کردم چون راحت است. روز شنبه دروازه براندنبورگ را دیدم. بسیار تاثیرگذار بود. بعد از آن یک سفر با قایق روی رودخانه شپری انجام دادم. شب در یک رستوران کاری‌ورست خوردم. برلین یک شهر عالی است که چیزهای زیادی برای ارائه دارد."
    },
    { 
      germanTitle: "Ein Brief an einen Freund", 
      persianTitle: "نامه‌ای به یک دوست", 
      audioUrl: "https://storage.googleapis.com/audio-samples-for-app/a2-story-2.mp3",
      germanStory: "Lieber Alex, wie geht es dir? Ich wollte dir von meinem neuen Job erzählen. Ich arbeite jetzt in einem Café, das sehr beliebt ist. Die Arbeit ist anstrengend, aber die Kollegen sind sehr nett. Letzte Woche lernte ich, wie man einen Cappuccino macht. Vielleicht kannst du mich ja bald besuchen kommen, damit ich es dir zeigen kann. Viele Grüße, deine Sarah.",
      persianTranslation: "الکس عزیز، حالت چطور است؟ می‌خواستم درباره شغل جدیدم برایت بگویم. من حالا در یک کافه کار می‌کنم که خیلی محبوب است. کار خسته‌کننده است، اما همکاران خیلی مهربان هستند. هفته گذشته یاد گرفتم چگونه کاپوچینو درست کنم. شاید بتوانی به زودی به دیدنم بیایی تا بتوانم به تو نشان دهم. با بهترین آرزوها، سارای تو."
    },
    { 
      germanTitle: "Beim Arzt", 
      persianTitle: "نزد دکتر",
      germanStory: "Gestern hatte ich starke Kopfschmerzen, deshalb ging ich zum Arzt. Ich musste zuerst im Wartezimmer warten, was eine halbe Stunde dauerte. Dann untersuchte mich die Ärztin. Sie maß meinen Blutdruck und sagte, ich solle mehr Wasser trinken und weniger Stress haben. Sie gab mir ein Rezept für Tabletten.",
      persianTranslation: "دیروز سردرد شدیدی داشتم، به همین دلیل به دکتر رفتم. ابتدا باید در اتاق انتظار منتظر می‌ماندم که نیم ساعت طول کشید. سپس دکتر مرا معاینه کرد. او فشار خونم را اندازه گرفت و گفت باید آب بیشتری بنوشم و استرس کمتری داشته باشم. او برایم یک نسخه برای قرص داد."
    },
    { 
      germanTitle: "Ein Rezept kochen", 
      persianTitle: "پختن یک دستور غذا",
      germanStory: "Heute Abend wollte ich etwas Besonderes kochen. Ich fand ein Rezept für Linsensuppe im Internet. Ich musste zuerst Zwiebeln und Karotten schneiden und sie in Öl anbraten. Dann kochte ich alles mit den Linsen in einem Topf. Die Suppe brauchte eine Stunde, aber sie schmeckte fantastisch.",
      persianTranslation: "امشب می‌خواستم چیز خاصی بپزم. من یک دستور پخت برای سوپ عدس در اینترنت پیدا کردم. ابتدا باید پیاز و هویج را خرد می‌کردم و آنها را در روغن تفت می‌دادم. سپس همه چیز را با عدس در یک قابلمه پختم. سوپ یک ساعت طول کشید، اما طعم فوق‌العاده‌ای داشت."
    },
    { 
      germanTitle: "Mein letzter Urlaub", 
      persianTitle: "آخرین تعطیلات من",
      germanStory: "In meinem letzten Urlaub war ich in Italien am Meer. Wir wohnten in einem kleinen Hotel direkt am Strand. Jeden Tag gingen wir schwimmen und lagen in der Sonne. Abends aßen wir in kleinen Restaurants Pizza und Pasta. Das Wetter war perfekt und ich war sehr entspannt, weil ich den Alltagsstress vergaß.",
      persianTranslation: "در آخرین تعطیلاتم من در ایتالیا کنار دریا بودم. ما در یک هتل کوچک درست کنار ساحل اقامت داشتیم. هر روز ما شنا می‌کردیم و در آفتاب دراز می‌کشیدیم. شب‌ها در رستوران‌های کوچک پیتزا و پاستا می‌خوردیم. هوا عالی بود و من خیلی آرام بودم چون استرس روزمره را فراموش کردم."
    },
    { 
      germanTitle: "Eine neue Wohnung finden", 
      persianTitle: "پیدا کردن یک آپارتمان جدید",
      germanStory: "Ich suche eine neue Wohnung, weil meine alte zu klein ist. Es ist sehr schwierig, etwas Gutes zu finden, das auch bezahlbar ist. Gestern besichtigte ich eine Wohnung. Sie hatte zwei Zimmer und einen Balkon. Die Miete war aber leider zu hoch für mein Budget. Also muss ich weitersuchen.",
      persianTranslation: "من به دنبال یک آپارتمان جدید هستم، چون آپارتمان قدیمی‌ام خیلی کوچک است. پیدا کردن چیز خوب که قابل پرداخت هم باشد خیلی سخت است. دیروز من یک آپارتمان را بازدید کردم. دو اتاق و یک بالکن داشت. اما متأسفانه اجاره‌اش برای بودجه من خیلی بالا بود. بنابراین باید به جستجو ادامه دهم."
    },
    { 
      germanTitle: "Ein Gespräch mit den Nachbarn", 
      persianTitle: "گفتگو با همسایه‌ها",
      germanStory: "Gestern traf ich meine neuen Nachbarn im Treppenhaus. Sie sind gerade erst eingezogen. Wir unterhielten uns kurz. Sie heißen Schmidt und kommen aus Hamburg. Sie wirkten sehr sympathisch. Ich habe sie für nächste Woche auf einen Kaffee eingeladen, um sie besser kennenzulernen.",
      persianTranslation: "دیروز من همسایه‌های جدیدم را در راه‌پله ملاقات کردم. آنها به تازگی اسباب‌کشی کرده‌اند. ما کوتاه با هم صحبت کردیم. نام آنها اشمیت است و از هامبورگ می‌آیند. آنها بسیار خوش‌برخورد به نظر می‌رسیدند. من آنها را برای هفته آینده به یک قهوه دعوت کردم تا بهتر با آنها آشنا شوم."
    },
    { 
      germanTitle: "Ein Fest in Deutschland", 
      persianTitle: "یک جشن در آلمان",
      germanStory: "Letzten Monat war ich auf dem Oktoberfest in München. Es ist ein sehr großes und berühmtes Fest. Viele Leute tragen traditionelle Kleidung wie Dirndl und Lederhosen. Es gibt riesige Zelte, in denen man Bier trinken und Hähnchen essen kann. Die Atmosphäre war unglaublich, obwohl es sehr voll war.",
      persianTranslation: "ماه گذشته من در جشن اکتبر در مونیخ بودم. این یک جشن بسیار بزرگ و معروف است. بسیاری از مردم لباس‌های سنتی مانند دیرندل و لدرهوزن می‌پوشند. چادرهای غول‌پیکری وجود دارد که در آنها می‌توان آبجو نوشید و مرغ خورد. جو فوق‌العاده بود، اگرچه خیلی شلوغ بود."
    },
    { 
      germanTitle: "Auf dem Bahnhof", 
      persianTitle: "در ایستگاه قطار",
      germanStory: "Ich musste heute Morgen einen Freund vom Bahnhof abholen. Sein Zug hatte leider 20 Minuten Verspätung. Ich wartete auf einer Bank und beobachtete die Anzeigetafel. Als der Zug endlich ankam, war die Freude groß, weil wir uns lange nicht gesehen hatten. Wir umarmten uns herzlich.",
      persianTranslation: "امروز صبح باید دوستی را از ایستگاه قطار می‌آوردم. قطارش متأسفانه ۲۰ دقیقه تأخیر داشت. من روی یک نیمکت منتظر ماندم و تابلوی اعلانات را تماشا کردم. وقتی قطار بالاخره رسید، شادی بزرگی بود چون ما مدت زیادی بود که همدیگر را ندیده بودیم. ما صمیمانه یکدیگر را در آغوش گرفتیم."
    },
    { 
      germanTitle: "Sport und Fitness", 
      persianTitle: "ورزش و تناسب اندام",
      germanStory: "Ich versuche, dreimal pro Woche Sport zu machen. Am Montag gehe ich im Park laufen. Am Mittwoch besuche ich einen Yogakurs, der mir hilft, flexibel zu bleiben. Und am Freitag gehe ich ins Fitnessstudio, um Krafttraining zu machen. Sport hilft mir, fit zu bleiben und den Kopf freizubekommen.",
      persianTranslation: "من سعی می‌کنم سه بار در هفته ورزش کنم. دوشنبه‌ها در پارک می‌دوم. چهارشنبه‌ها در یک کلاس یوگا شرکت می‌کنم که به من کمک می‌کند انعطاف‌پذیر بمانم. و جمعه‌ها به باشگاه بدنسازی می‌روم تا تمرینات قدرتی انجام دهم. ورزش به من کمک می‌کند تا خوش‌فرم بمانم و ذهنم را آزاد کنم."
    },
    { germanTitle: "Eine Party planen", persianTitle: "برنامه‌ریزی یک مهمانی",
      germanStory: "Für meinen Geburtstag möchte ich eine Party organisieren. Zuerst muss ich eine Gästeliste schreiben und Einladungen verschicken. Dann muss ich überlegen, was es zu essen und zu trinken gibt. Ich werde eine Playlist mit guter Musik erstellen. Ich hoffe, dass alle meine Freunde Zeit haben zu kommen.",
      persianTranslation: "برای تولدم می‌خواهم یک مهمانی ترتیب دهم. ابتدا باید یک لیست مهمان بنویسم و دعوت‌نامه‌ها را بفرستم. سپس باید فکر کنم چه چیزی برای خوردن و نوشیدن وجود دارد. من یک لیست پخش با موسیقی خوب درست خواهم کرد. امیدوارم همه دوستانم وقت داشته باشند بیایند."
    },
    { germanTitle: "Ein unvergesslicher Ausflug", persianTitle: "یک گردش فراموش‌نشدنی",
      germanStory: "Letzten Sommer machten wir einen Ausflug zu einem Schloss. Das Schloss stand auf einem hohen Berg. Wir mussten eine Stunde wandern, um dorthin zu kommen. Die Aussicht von oben war atemberaubend. Wir machten viele Fotos. Es war ein perfekter Tag, den ich nicht vergessen werde.",
      persianTranslation: "تابستان گذشته ما به یک قلعه سفر کردیم. قلعه روی یک کوه بلند قرار داشت. ما باید یک ساعت پیاده‌روی می‌کردیم تا به آنجا برسیم. منظره از بالا نفس‌گیر بود. ما عکس‌های زیادی گرفتیم. این یک روز عالی بود که فراموش نخواهم کرد."
    },
    { germanTitle: "Ein Problem mit dem Computer", persianTitle: "مشکلی با کامپیوتر",
      germanStory: "Mein Computer funktioniert seit gestern nicht mehr richtig. Er ist sehr langsam und stürzt oft ab. Ich versuchte, ihn neu zu starten, aber das hat nicht geholfen. Ich kenne mich nicht gut mit Technik aus. Wahrscheinlich muss ich ihn zu einem Experten bringen, damit er ihn repariert.",
      persianTranslation: "کامپیوتر من از دیروز به درستی کار نمی‌کند. خیلی کند است و اغلب از کار می‌افتد. من سعی کردم آن را دوباره راه‌اندازی کنم، اما این کمکی نکرد. من از تکنولوژی چیز زیادی نمی‌دانم. احتمالاً باید آن را پیش یک متخصص ببرم تا آن را تعمیر کند."
    },
    { germanTitle: "Ein Besuch im Museum", persianTitle: "بازدید از موزه",
      germanStory: "Am Wochenende war ich im Kunstmuseum. Es gab eine Sonderausstellung mit Bildern von Vincent van Gogh. Ich fand die Bilder sehr beeindruckend, besonders die leuchtenden Farben. Ich lief fast drei Stunden durch das Museum. Es hat sich wirklich gelohnt, weil ich viel gelernt habe.",
      persianTranslation: "آخر هفته من در موزه هنر بودم. یک نمایشگاه ویژه با نقاشی‌های ونسان ون گوگ وجود داشت. من نقاشی‌ها را بسیار تأثیرگذار یافتم، به خصوص رنگ‌های درخشان را. من تقریباً سه ساعت در موزه قدم زدم. واقعاً ارزشش را داشت چون چیزهای زیادی یاد گرفتم."
    },
    { germanTitle: "Die Wegbeschreibung", persianTitle: "آدرس دادن",
      germanStory: "Gestern fragte mich ein Tourist nach dem Weg zum Rathaus. Er sprach nur Englisch. Ich versuchte, ihm den Weg zu erklären: 'Gehen Sie geradeaus bis zur zweiten Kreuzung, dann biegen Sie links ab. Das Rathaus ist dann auf der rechten Seite.' Ich hoffe, dass er es gefunden hat.",
      persianTranslation: "دیروز یک توریست از من مسیر رسیدن به شهرداری را پرسید. او فقط انگلیسی صحبت می‌کرد. من سعی کردم مسیر را برایش توضیح دهم: «مستقیم تا تقاطع دوم بروید، سپس به چپ بپیچید. شهرداری آنگاه در سمت راست خواهد بود.» امیدوارم او آن را پیدا کرده باشد."
    },
    { germanTitle: "Ein kleines Missgeschick", persianTitle: "یک اتفاق ناگوار کوچک",
      germanStory: "Heute Morgen passierte mir ein kleines Missgeschick. Ich verschüttete meinen Kaffee auf meinem weißen Hemd. Es war ein großer brauner Fleck. Ich musste mich schnell umziehen, bevor ich zur Arbeit ging. Solche Tage gibt es manchmal, aber ich habe darüber gelacht.",
      persianTranslation: "امروز صبح یک اتفاق ناگوار کوچک برایم افتاد. من قهوه‌ام را روی پیراهن سفیدم ریختم. یک لکه بزرگ قهوه‌ای بود. من باید سریع لباس عوض می‌کردم قبل از اینکه به سر کار بروم. گاهی چنین روزهایی هم وجود دارد، اما من به آن خندیدم."
    },
    { germanTitle: "Eine Diskussion über einen Film", persianTitle: "بحث در مورد یک فیلم",
      germanStory: "Nach dem Kino diskutierten mein Freund und ich lange über den Film. Ich fand den Film fantastisch, aber er fand ihn langweilig. Wir hatten unterschiedliche Meinungen über die Schauspieler und das Ende. Es war eine interessante Diskussion, weil wir verschiedene Perspektiven hatten.",
      persianTranslation: "بعد از سینما من و دوستم مدت زیادی درباره فیلم بحث کردیم. من فیلم را فوق‌العاده یافتم، اما او آن را خسته‌کننده یافت. ما نظرات متفاوتی درباره بازیگران و پایان فیلم داشتیم. این یک بحث جالب بود چون ما دیدگاه‌های متفاوتی داشتیم."
    },
    { germanTitle: "Ein typischer Arbeitstag", persianTitle: "یک روز کاری معمولی",
      germanStory: "Mein Arbeitstag beginnt um 9 Uhr. Zuerst lese ich meine E-Mails, um zu sehen, was ansteht. Dann habe ich oft Besprechungen mit Kollegen. Mittags esse ich in der Kantine. Am Nachmittag arbeite ich an meinen Projekten. Um 17 Uhr habe ich Feierabend und fahre nach Hause.",
      persianTranslation: "روز کاری من ساعت ۹ شروع می‌شود. ابتدا ایمیل‌هایم را می‌خوانم تا ببینم چه کارهایی در پیش است. سپس اغلب با همکارانم جلسه دارم. ظهر در غذاخوری ناهار می‌خورم. بعد از ظهر روی پروژه‌هایم کار می‌کنم. ساعت ۱۷ کارم تمام می‌شود و به خانه می‌روم."
    },
    { germanTitle: "Ein Geschenk für einen Freund auswählen", persianTitle: "انتخاب هدیه برای یک دوست",
      germanStory: "Mein bester Freund hat nächste Woche Geburtstag. Ich weiß nicht, was ich ihm schenken soll. Er liest gerne, also ist vielleicht ein Buch eine gute Idee. Oder vielleicht ein Gutschein für ein Konzert, weil er Musik liebt? Es ist schwer, das perfekte Geschenk zu finden.",
      persianTranslation: "بهترین دوستم هفته آینده تولد دارد. من نمی‌دانم چه چیزی به او هدیه بدهم. او دوست دارد کتاب بخواند، پس شاید یک کتاب ایده خوبی باشد. یا شاید یک کوپن برای یک کنسرت، چون او عاشق موسیقی است؟ پیدا کردن هدیه عالی سخت است."
    },
    { germanTitle: "Die vier Jahreszeiten in meiner Heimat", persianTitle: "چهار فصل در کشور من",
      germanStory: "In meiner Heimat gibt es vier sehr unterschiedliche Jahreszeiten. Die Sommer sind heiß und trocken. Im Herbst wird es kühler und die Blätter der Bäume werden bunt. Die Winter sind kalt und es schneit oft. Im Frühling wird alles wieder grün. Jede Jahreszeit hat ihren eigenen Charme.",
      persianTranslation: "در کشور من چهار فصل بسیار متفاوت وجود دارد. تابستان‌ها گرم و خشک هستند. در پاییز هوا خنک‌تر می‌شود و برگ‌های درختان رنگارنگ می‌شوند. زمستان‌ها سرد هستند و اغلب برف می‌بارد. در بهار همه چیز دوباره سبز می‌شود. هر فصلی جذابیت خاص خود را دارد."
    },
    { germanTitle: "Ein Verkehrsunfall", persianTitle: "یک تصادف رانندگی",
      germanStory: "Auf dem Weg zur Arbeit sah ich einen kleinen Verkehrsunfall. Ein Auto war einem anderen hinten aufgefahren. Glücklicherweise schien niemand verletzt zu sein. Die Fahrer standen auf der Straße und diskutierten. Sofort bildete sich ein langer Stau, deshalb kam ich zu spät.",
      persianTranslation: "در راه سر کار یک تصادف رانندگی کوچک دیدم. یک ماشین از پشت به دیگری زده بود. خوشبختانه به نظر می‌رسید کسی آسیب ندیده است. رانندگان در خیابان ایستاده بودند و بحث می‌کردند. فوراً یک ترافیک طولانی ایجاد شد، به همین دلیل من دیر رسیدم."
    },
    { germanTitle: "Ein Vorstellungsgespräch für einen Nebenjob", persianTitle: "مصاحبه برای یک کار پاره‌وقت",
      germanStory: "Ich hatte heute ein Vorstellungsgespräch für einen Nebenjob in einem Buchladen. Ich war ziemlich nervös. Der Manager stellte mir viele Fragen, zum Beispiel warum ich dort arbeiten möchte. Ich glaube, das Gespräch lief ganz gut. Ich bekomme nächste Woche eine Antwort.",
      persianTranslation: "امروز من یک مصاحبه برای یک کار پاره‌وقت در یک کتابفروشی داشتم. من خیلی مضطرب بودم. مدیر سوالات زیادی از من پرسید، مثلاً چرا می‌خواهم آنجا کار کنم. فکر می‌کنم مصاحبه خیلی خوب پیش رفت. هفته آینده جواب می‌گیرم."
    },
    { germanTitle: "Kleidung für verschiedene Anlässe", persianTitle: "لباس برای مناسبت‌های مختلف",
      germanStory: "Man trägt nicht immer die gleiche Kleidung. Zur Arbeit ziehe ich oft eine Bluse und eine schicke Hose an. Am Wochenende trage ich lieber bequeme Jeans und ein T-Shirt. Wenn ich zu einer Hochzeit gehe, trage ich ein elegantes Kleid. Für jeden Anlass gibt es die passende Kleidung.",
      persianTranslation: "آدم همیشه لباس یکسانی نمی‌پوشد. برای سر کار من اغلب یک بلوز و یک شلوار شیک می‌پوشم. در آخر هفته ترجیح می‌دههم شلوار جین راحت و یک تی‌شرت بپوشم. وقتی به عروسی می‌روم، یک لباس مجلسی می‌پوشم. برای هر مناسبتی لباس مناسب وجود دارد."
    },
    { germanTitle: "Ein Streit und eine Versöhnung", persianTitle: "یک دعوا و یک آشتی",
      germanStory: "Letzte Woche hatte ich einen Streit mit meiner besten Freundin. Wir waren beide wütend und sprachen nicht mehr miteinander. Nach ein paar Tagen rief ich sie an. Wir redeten über das Problem und entschuldigten uns. Jetzt ist alles wieder gut zwischen uns.",
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
      germanStory: "Ich musste meinem Vermieter eine E-Mail schreiben, weil die Heizung in meiner Wohnung kaputt ist. Ich beschrieb das Problem genau und fragte, wann er einen Handwerker schicken kann. Ich hoffe, er antwortet schnell, denn es wird langsam kalt in der Wohnung.",
      persianTranslation: "من باید به صاحب‌خانه‌ام یک ایمیل می‌نوشتم، چون شوفاژ آپارتمانم خراب است. من مشکل را دقیقاً توصیف کردم و پرسیدم کی می‌تواند یک تعمیرکار بفرستد. امیدوارم او سریع جواب دهد، چون آپارتمان کم‌کم سرد می‌شود."
    },
    { germanTitle: "Öffentliche Verkehrsmittel benutzen", persianTitle: "استفاده از وسایل نقلیه عمومی",
      germanStory: "In meiner Stadt benutze ich oft öffentliche Verkehrsmittel. Ich fahre mit dem Bus zur Arbeit und mit der U-Bahn ins Stadtzentrum. Das ist billiger und umweltfreundlicher als ein eigenes Auto. Manchmal sind die Busse und Bahnen sehr voll, aber meistens ist es praktisch.",
      persianTranslation: "در شهرم من اغلب از وسایل نقلیه عمومی استفاده می‌کنم. من با اتوبوس به سر کار می‌روم و با مترو به مرکز شهر. این ارزان‌تر و سازگارتر با محیط زیست از داشتن ماشین شخصی است. گاهی اتوبوس‌ها و قطارها خیلی شلوغ هستند، اما بیشتر اوقات کاربردی است."
    },
    { germanTitle: "Eine Fahrradtour", persianTitle: "یک تور دوچرخه‌سواری",
      germanStory: "Am Samstag machte ich mit Freunden eine lange Fahrradtour. Wir fuhren an einem Fluss entlang. Das Wetter war sonnig und warm. Wir hatten ein Picknick dabei und machten mittags eine Pause. Insgesamt fuhren wir 40 Kilometer. Am Abend war ich müde, aber glücklich.",
      persianTranslation: "روز شنبه من با دوستانم یک تور دوچرخه‌سواری طولانی انجام دادم. ما در امتداد یک رودخانه راندیم. هوا آفتابی و گرم بود. ما یک پیک‌نیک همراه داشتیم و ظهر استراحت کردیم. در مجموع ما ۴۰ کیلومتر راندیم. عصر خسته اما خوشحال بودم."
    },
    { germanTitle: "Ein Bankgespräch", persianTitle: "گفتگو در بانک",
      germanStory: "Ich musste heute zur Bank gehen, um ein Konto zu eröffnen. Ein Bankangestellter half mir. Ich musste viele Formulare ausfüllen und meinen Ausweis zeigen. Er erklärte mir alles geduldig. Nach einer halben Stunde war alles erledigt.",
      persianTranslation: "امروز باید برای باز کردن یک حساب به بانک می‌رفتم. یک کارمند بانک به من کمک کرد. من باید فرم‌های زیادی را پر می‌کردم و کارت شناسایی‌ام را نشان می‌دادم. او همه چیز را با حوصله برایم توضیح داد. بعد از نیم ساعت همه کارها انجام شد."
    },
    { germanTitle: "Ein verlorenes Gepäckstück", persianTitle: "یک چمدان گمشده",
      germanStory: "Nach meinem Flug konnte ich meinen Koffer am Gepäckband nicht finden. Ich war sehr besorgt, weil alle meine Sachen darin waren. Ich ging zum Fundbüro des Flughafens und füllte ein Formular aus. Glücklicherweise riefen sie mich am nächsten Tag an. Mein Koffer war in einem anderen Flugzeug gelandet.",
      persianTranslation: "بعد از پروازم نتوانستم چمدانم را روی نوار نقاله پیدا کنم. خیلی نگران بودم چون تمام وسایلم داخل آن بود. به دفتر اشیاء گمشده فرودگاه رفتم و فرمی را پر کردم. خوشبختانه روز بعد به من زنگ زدند. چمدان من در هواپیمای دیگری فرود آمده بود."
    },
    { germanTitle: "Ein Konzertbesuch", persianTitle: "رفتن به کنسرت",
      germanStory: "Letzte Woche war ich auf einem Konzert meiner Lieblingsband. Die Stimmung war fantastisch und alle Leute sangen mit. Die Band spielte alle ihre berühmten Lieder. Das Konzert dauerte zwei Stunden und ich stand die ganze Zeit. Nach dem Konzert war meine Stimme heiser, aber ich war sehr glücklich.",
      persianTranslation: "هفته گذشته من در کنسرت گروه موسیقی مورد علاقه‌ام بودم. جو فوق‌العاده بود و همه مردم با هم می‌خواندند. گروه تمام آهنگ‌های معروفش را اجرا کرد. کنسرت دو ساعت طول کشید و من تمام مدت ایستاده بودم. بعد از کنسرت صدایم گرفته بود، اما خیلی خوشحال بودم."
    },
    { germanTitle: "Meine Kindheit", persianTitle: "کودکی من",
      germanStory: "Ich hatte eine sehr glückliche Kindheit. Ich wuchs auf dem Land auf und spielte den ganzen Tag draußen. Im Sommer gingen wir im See schwimmen und im Winter bauten wir Schneemänner. Ich hatte viele Freunde in der Nachbarschaft. Ich erinnere mich gerne an diese unbeschwerte Zeit zurück.",
      persianTranslation: "من کودکی بسیار شادی داشتم. من در روستا بزرگ شدم و تمام روز را بیرون بازی می‌کردم. در تابستان در دریاچه شنا می‌کردیم و در زمستان آدم برفی می‌ساختیم. من دوستان زیادی در محله داشتم. من با خوشحالی آن دوران بی‌دغدغه را به یاد می‌آورم."
    },
    { germanTitle: "Eine Wanderung in den Alpen", persianTitle: "پیاده‌روی در کوه‌های آلپ",
      germanStory: "In den Ferien machten wir eine Wanderung in den Alpen. Wir standen früh auf, um die kühle Morgenluft zu genießen. Der Weg war steil, aber die Aussicht war die Mühe wert. Wir sahen Kühe auf den Almen und aßen auf einer Hütte zu Mittag. Es war ein anstrengender, aber wunderschöner Tag in der Natur.",
      persianTranslation: "در تعطیلات ما در کوه‌های آلپ پیاده‌روی کردیم. ما زود بیدار شدیم تا از هوای خنک صبح لذت ببریم. مسیر شیب‌دار بود، اما منظره ارزش تلاش را داشت. ما گاوها را در مراتع کوهستانی دیدیم و در یک کلبه کوهستانی ناهار خوردیم. این یک روز خسته‌کننده اما بسیار زیبا در طبیعت بود."
    },
    { germanTitle: "Ein Umzug in eine andere Stadt", persianTitle: "اسباب‌کشی به شهری دیگر",
      germanStory: "Vor zwei Monaten bin ich wegen meines Studiums in eine andere Stadt gezogen. Der Umzug war sehr stressig. Ich musste alle meine Sachen in Kisten packen und eine Transportfirma organisieren. Die neue Stadt gefällt mir gut, aber ich vermisse manchmal meine Familie und meine alten Freunde.",
      persianTranslation: "دو ماه پیش من به خاطر تحصیلم به شهر دیگری نقل مکان کردم. اسباب‌کشی خیلی استرس‌زا بود. من باید تمام وسایلم را در جعبه‌ها بسته‌بندی می‌کردم و یک شرکت حمل و نقل را سازماندهی می‌کردم. شهر جدید را دوست دارم، اما گاهی دلم برای خانواده و دوستان قدیمی‌ام تنگ می‌شود."
    },
    { germanTitle: "Ein Tag als Tourist", persianTitle: "یک روز به عنوان توریست",
      germanStory: "Gestern beschloss ich, ein Tourist in meiner eigenen Stadt zu sein. Ich besuchte die berühmtesten Sehenswürdigkeiten, die ich normalerweise ignoriere. Ich fuhr mit einem Hop-on-Hop-off-Bus und machte viele Fotos. Ich entdeckte viele schöne Ecken, die ich vorher nicht kannte. Es war eine sehr interessante Erfahrung.",
      persianTranslation: "دیروز تصمیم گرفتم در شهر خودم یک توریست باشم. من از معروف‌ترین جاذبه‌های دیدنی که معمولاً نادیده می‌گیرم، بازدید کردم. من با یک اتوبوس توریستی سوار شدم و عکس‌های زیادی گرفتم. من گوشه‌های زیبای زیادی را کشف کردم که قبلاً نمی‌شناختم. این یک تجربه بسیار جالب بود."
    },
    { germanTitle: "Ein Haustier bekommen", persianTitle: "گرفتن یک حیوان خانگی",
      germanStory: "Seit langem wünschte ich mir einen Hund. Letzte Woche haben meine Eltern mir erlaubt, einen Hund aus dem Tierheim zu holen. Wir haben einen kleinen Mischlingshund namens Max adoptiert. Er ist sehr verspielt und freundlich. Ein Haustier zu haben ist viel Verantwortung, aber es bringt auch viel Freude.",
      persianTranslation: "مدت‌ها بود که آرزوی یک سگ را داشتم. هفته گذشته والدینم به من اجازه دادند یک سگ از پناهگاه حیوانات بیاورم. ما یک سگ کوچک میکس به نام ماکس را به سرپرستی گرفتیم. او بسیار بازیگوش و مهربان است. داشتن یک حیوان خانگی مسئولیت زیادی دارد، اما شادی زیادی نیز به همراه دارد."
    },
    { germanTitle: "Eine Überraschungsparty", persianTitle: "یک مهمانی غافلگیرکننده",
      germanStory: "Meine Freunde organisierten eine Überraschungsparty zu meinem Geburtstag. Ich wusste von nichts. Als ich nach Hause kam, waren alle da und riefen 'Überraschung!'. Ich war total sprachlos und habe mich riesig gefreut. Es war der beste Geburtstag, den ich je hatte.",
      persianTranslation: "دوستانم یک مهمانی غافلگیرکننده برای تولدم ترتیب دادند. من از هیچ چیز خبر نداشتم. وقتی به خانه آمدم، همه آنجا بودند و فریاد زدند «سورپرایز!». من کاملاً لال شده بودم و بی‌نهایت خوشحال شدم. این بهترین تولدی بود که تا به حال داشتم."
    },
    { germanTitle: "Ein Gespräch über Zukunftspläne", persianTitle: "گفتگو درباره برنامه‌های آینده",
      germanStory: "Ich sprach neulich mit meinen Eltern über meine Zukunftspläne. Ich erzählte ihnen, dass ich nach dem Studium gerne im Ausland arbeiten würde. Zuerst waren sie etwas besorgt, aber dann unterstützten sie meine Idee. Es ist gut zu wissen, dass meine Familie hinter mir steht, egal was ich entscheide.",
      persianTranslation: "اخیراً با والدینم درباره برنامه‌های آینده‌ام صحبت کردم. به آنها گفتم که دوست دارم بعد از تحصیل در خارج از کشور کار کنم. در ابتدا آنها کمی نگران بودند، اما بعد از ایده‌ام حمایت کردند. خوب است بدانم که خانواده‌ام پشت من هستند، مهم نیست چه تصمیمی بگیرم."
    },
    { germanTitle: "Ein Besuch auf dem Flohmarkt", persianTitle: "بازدید از بازار کهنه‌فروشان",
      germanStory: "Am Sonntag besuchte ich einen großen Flohmarkt. Ich liebe es, zwischen den alten Sachen zu stöbern, weil man oft interessante Dinge findet. Ich kaufte ein paar alte Bücher und eine schöne Vase. Das Handeln mit den Verkäufern macht auch immer viel Spaß. Ein Flohmarkt ist wie eine Schatzsuche.",
      persianTranslation: "روز یکشنبه من از یک بازار کهنه‌فروشان بزرگ دیدن کردم. من عاشق گشتن بین وسایل قدیمی هستم، چون اغلب چیزهای جالبی پیدا می‌کنی. من چند کتاب قدیمی و یک گلدان زیبا خریدم. چانه زدن با فروشندگان هم همیشه خیلی سرگرم‌کننده است. یک بازار کهنه‌فروشان مانند یک گنج‌یابی است."
    },
    { germanTitle: "Eine Reklamation im Geschäft", persianTitle: "شکایت در یک فروشگاه",
      germanStory: "Ich kaufte letzte Woche einen neuen Toaster, aber er funktionierte nicht. Also ging ich heute zurück ins Geschäft, um ihn zu reklamieren. Ich zeigte dem Verkäufer den Kassenbon und erklärte das Problem. Er war sehr verständnisvoll und gab mir sofort ein neues Gerät. Der Umtausch war zum Glück unkompliziert.",
      persianTranslation: "من هفته گذشته یک توستر جدید خریدم، اما کار نمی‌کرد. بنابراین امروز به فروشگاه برگشتم تا آن را پس دهم. من رسید را به فروشنده نشان دادم و مشکل را توضیح دادم. او بسیار با درک بود و فوراً یک دستگاه جدید به من داد. خوشبختانه تعویض بدون دردسر بود."
    },
    { germanTitle: "Ein lustiges Erlebnis in der Sprachschule", persianTitle: "یک تجربه خنده‌دار در آموزشگاه زبان",
      germanStory: "In meinem Deutschkurs passierte letzte Woche etwas Lustiges. Wir sollten Sätze im Perfekt bilden. Ein Mitschüler wollte sagen 'Ich bin eingeschlafen', aber er sagte 'Ich bin eingeschissen'. Die ganze Klasse, auch die Lehrerin, musste so lachen. Solche Fehler passieren, wenn man eine neue Sprache lernt.",
      persianTranslation: "هفته گذشته در کلاس آلمانی من اتفاق خنده‌داری افتاد. ما باید جملاتی در زمان گذشته کامل می‌ساختیم. یک همکلاسی می‌خواست بگوید «من به خواب رفتم»، اما گفت «من خرابکاری کردم». تمام کلاس، حتی معلم، خیلی خندیدند. چنین اشتباهاتی وقتی یک زبان جدید یاد می‌گیری، اتفاق می‌افتد."
    },
    { germanTitle: "Ein schlechter Tag", persianTitle: "یک روز بد",
      germanStory: "Gestern hatte ich einen wirklich schlechten Tag. Zuerst habe ich meinen Bus verpasst. Dann hatte ich einen Streit mit meinem Chef. Und am Abend hat es angefangen zu regnen, als ich keinen Regenschirm dabeihatte. Ich war froh, als der Tag endlich vorbei war. Morgen wird es hoffentlich besser.",
      persianTranslation: "دیروز من یک روز واقعاً بدی داشتم. اول اتوبوسم را از دست دادم. بعد با رئیسم دعوا کردم. و عصر باران شروع به باریدن کرد در حالی که من چتر همراه نداشتم. خوشحال بودم وقتی روز بالاخره تمام شد. امیدوارم فردا بهتر شود."
    },
    { germanTitle: "Ein gemeinsamer Kochabend", persianTitle: "یک شب آشپزی مشترک",
      germanStory: "Am Freitagabend trafen wir uns bei einem Freund, um zusammen zu kochen. Jeder brachte Zutaten mit. Wir entschieden uns, Pizza selbst zu machen. Es war ein lustiges Chaos in der Küche, aber das Ergebnis war fantastisch. Gemeinsam zu kochen und zu essen ist viel schöner als alleine.",
      persianTranslation: "عصر جمعه ما در خانه یک دوست جمع شدیم تا با هم آشپزی کنیم. هر کس موادی با خود آورد. ما تصمیم گرفتیم خودمان پیتزا درست کنیم. در آشپزخانه یک هرج و مرج خنده‌دار بود، اما نتیجه فوق‌العاده بود. آشپزی و غذا خوردن با هم بسیار زیباتر از تنهایی است."
    },
    { germanTitle: "Eine wichtige Prüfung", persianTitle: "یک امتحان مهم",
      germanStory: "Nächste Woche habe ich eine wichtige Prüfung an der Universität. Deshalb muss ich im Moment viel lernen. Ich wiederhole den ganzen Stoff und mache Übungsaufgaben. Ich bin ein bisschen aufgeregt, aber ich fühle mich gut vorbereitet. Ich hoffe, dass ich die Prüfung bestehen werde.",
      persianTranslation: "هفته آینده من یک امتحان مهم در دانشگاه دارم. به همین دلیل در حال حاضر باید زیاد درس بخوانم. من تمام مطالب را مرور می‌کنم و تمرین‌ها را حل می‌کنم. من کمی هیجان‌زده هستم، اما احساس می‌کنم خوب آماده شده‌ام. امیدوارم که امتحان را قبول شوم."
    },
    { germanTitle: "Ein Anruf bei einer Behörde", persianTitle: "تماس با یک اداره",
      germanStory: "Ich musste heute bei der Ausländerbehörde anrufen, um einen Termin zu vereinbaren. Ich war lange in der Warteschleife, bis endlich jemand ranging. Die Mitarbeiterin war aber sehr freundlich und half mir, einen passenden Termin zu finden. Manchmal braucht man viel Geduld, wenn man mit Behörden zu tun hat.",
      persianTranslation: "امروز باید به اداره اتباع خارجی زنگ می‌زدم تا یک وقت ملاقات تعیین کنم. من مدت طولانی در صف انتظار بودم تا بالاخره کسی جواب داد. اما کارمند بسیار مهربان بود و به من کمک کرد تا یک وقت مناسب پیدا کنم. گاهی اوقات وقتی با ادارات سر و کار داری، به صبر زیادی نیاز داری."
    },
    { germanTitle: "Ein Traumhaus beschreiben", persianTitle: "توصیف خانه رویایی",
      germanStory: "Mein Traumhaus wäre ein kleines Holzhaus am See. Es hätte große Fenster, damit viel Licht hereinkommt. Im Wohnzimmer gäbe es einen Kamin für gemütliche Winterabende. Ich wünschte mir auch einen großen Garten, in dem ich mein eigenes Gemüse anbauen könnte. Das wäre für mich der perfekte Ort zum Leben.",
      persianTranslation: "خانه رویایی من یک کلبه چوبی کوچک کنار دریاچه خواهد بود. پنجره‌های بزرگی خواهد داشت تا نور زیادی وارد شود. در اتاق نشیمن یک شومینه برای عصرهای دنج زمستانی وجود خواهد داشت. من همچنین آرزوی یک باغ بزرگ را دارم که در آن بتوانم سبزیجات خودم را بکارم. این برای من مکان عالی برای زندگی خواهد بود."
    },
    { germanTitle: "Ehrenamtliche Arbeit", persianTitle: "کار داوطلبانه",
      germanStory: "Jeden Samstag arbeite ich ehrenamtlich in einem Tierheim. Ich helfe dabei, die Käfige zu säubern und die Hunde auszuführen. Die Arbeit ist nicht bezahlt, aber sie gibt mir ein gutes Gefühl. Es ist schön zu sehen, wie sehr sich die Tiere über ein bisschen Aufmerksamkeit freuen. Ich finde es wichtig, der Gemeinschaft etwas zurückzugeben.",
      persianTranslation: "هر شنبه من به صورت داوطلبانه در یک پناهگاه حیوانات کار می‌کنم. من در تمیز کردن قفس‌ها و بیرون بردن سگ‌ها کمک می‌کنم. این کار پولی ندارد، اما به من حس خوبی می‌دهد. دیدن اینکه حیوانات چقدر از کمی توجه خوشحال می‌شوند، زیباست. من فکر می‌کنم مهم است که چیزی به جامعه بازگردانیم."
    },
    { germanTitle: "Ein typisches deutsches Frühstück", persianTitle: "یک صبحانه معمولی آلمانی",
      germanStory: "Ein typisches deutsches Frühstück ist oft sehr reichhaltig. Es gibt verschiedene Sorten Brötchen, Brot, Wurst, Käse und Marmelade. Viele Leute trinken Kaffee, während Kinder oft Kakao oder Tee trinken. Manchmal gibt es auch ein gekochtes Ei oder Müsli. Es ist eine wichtige Mahlzeit, für die man sich Zeit nimmt.",
      persianTranslation: "یک صبحانه معمولی آلمانی اغلب بسیار مفصل است. انواع مختلف نان، کالباس، پنیر و مربا وجود دارد. بسیاری از مردم قهوه می‌نوشند، در حالی که کودکان اغلب کاکائو یا چای می‌نوشند. گاهی اوقات یک تخم‌مرغ آب‌پز یا موسلی هم وجود دارد. این یک وعده غذایی مهم است که برای آن وقت می‌گذارند."
    },
    { germanTitle: "Eine Autopanne", persianTitle: "خرابی ماشین",
      germanStory: "Gestern hatte ich eine Autopanne auf der Autobahn. Plötzlich machte der Motor komische Geräusche und das Auto blieb stehen. Ich musste den Warnblinker anmachen und den Pannendienst rufen. Nach einer Stunde kam ein Abschleppwagen und brachte mein Auto in eine Werkstatt. Das war eine sehr unangenehme Situation.",
      persianTranslation: "دیروز من در اتوبان ماشینم خراب شد. ناگهان موتور صداهای عجیبی درآورد و ماشین متوقف شد. من باید فلاشر را روشن می‌کردم و به امداد خودرو زنگ می‌زدم. بعد از یک ساعت یک یدک‌کش آمد و ماشینم را به یک تعمیرگاه برد. این یک وضعیت بسیار ناخوشایند بود."
    },
    { germanTitle: "Ein interessanter Traum", persianTitle: "یک رویای جالب",
      germanStory: "Letzte Nacht hatte ich einen sehr interessanten Traum. Ich träumte, dass ich mit Tieren sprechen konnte. Ein Eichhörnchen erzählte mir von seinem Leben im Park und ein Vogel sang mir ein Lied vor. Als ich aufwachte, war ich ein bisschen traurig, dass es nur ein Traum war. Es wäre toll, wenn das wirklich ginge.",
      persianTranslation: "دیشب یک رویای بسیار جالب دیدم. من خواب دیدم که می‌توانم با حیوانات صحبت کنم. یک سنجاب از زندگی‌اش در پارک برایم گفت و یک پرنده برایم آهنگی خواند. وقتی بیدار شدم، کمی غمگین بودم که این فقط یک رویا بود. عالی می‌شد اگر این واقعاً ممکن بود."
    },
    { germanTitle: "Ein Tag ohne Handy", persianTitle: "یک روز بدون موبایل",
      germanStory: "Ich habe versucht, einen ganzen Tag ohne mein Handy zu verbringen. Am Anfang war es sehr komisch. Ich wollte ständig nach neuen Nachrichten schauen. Aber nach ein paar Stunden wurde es entspannter. Ich habe ein Buch gelesen und war spazieren. Ich hatte plötzlich viel mehr Zeit. Vielleicht sollte ich das öfter machen.",
      persianTranslation: "من سعی کردم یک روز کامل را بدون موبایلم بگذرانم. در ابتدا خیلی عجیب بود. من دائماً می‌خواستم پیام‌های جدید را بررسی کنم. اما بعد از چند ساعت آرام‌تر شد. من یک کتاب خواندم و به پیاده‌روی رفتم. ناگهان وقت بسیار بیشتری داشتم. شاید باید این کار را بیشتر انجام دهم."
    },
    { germanTitle: "Ein Picknick am See", persianTitle: "پیک‌نیک کنار دریاچه",
      germanStory: "Am Sonntag fuhren wir zu einem See, um ein Picknick zu machen. Wir breiteten eine Decke im Gras aus. Wir aßen Sandwiches und tranken Limonade. Danach gingen wir im See schwimmen, obwohl das Wasser noch ziemlich kalt war. Es war ein perfekter, entspannter Tag mit Freunden.",
      persianTranslation: "روز یکشنبه ما به یک دریاچه رفتیم تا پیک‌نیک کنیم. ما یک پتو روی چمن پهن کردیم. ما ساندویچ خوردیم و لیموناد نوشیدیم. بعد از آن در دریاچه شنا کردیم، اگرچه آب هنوز خیلی سرد بود. این یک روز عالی و آرام با دوستان بود."
    },
    { germanTitle: "Ein Besuch im Fitnessstudio", persianTitle: "رفتن به باشگاه بدنسازی",
      germanStory: "Ich habe mich letzte Woche in einem Fitnessstudio angemeldet. Gestern war ich das erste Mal dort. Ein Trainer zeigte mir alle Geräte und erstellte einen Trainingsplan für mich. Das Training war anstrengend, aber es hat sich gut angefühlt. Heute habe ich Muskelkater, aber ich werde weitermachen.",
      persianTranslation: "من هفته گذشته در یک باشگاه بدنسازی ثبت نام کردم. دیروز برای اولین بار آنجا بودم. یک مربی تمام دستگاه‌ها را به من نشان داد و یک برنامه تمرینی برایم تهیه کرد. تمرین سخت بود، اما حس خوبی داشت. امروز بدن درد دارم، اما ادامه خواهم داد."
    },
    { germanTitle: "Eine Entschuldigung schreiben", persianTitle: "نوشتن یک نامه عذرخواهی",
      germanStory: "Ich habe vergessen, einem Freund zum Geburtstag zu gratulieren. Das war mir sehr peinlich. Deshalb schrieb ich ihm eine lange Nachricht. Ich entschuldigte mich und erklärte, dass ich in letzter Zeit viel Stress hatte. Er hat zum Glück verständnisvoll reagiert und war nicht böse auf mich.",
      persianTranslation: "من فراموش کردم تولد یک دوست را تبریک بگویم. این برایم خیلی خجالت‌آور بود. به همین دلیل برایش یک پیام طولانی نوشتم. من عذرخواهی کردم و توضیح دادم که اخیراً استرس زیادی داشتم. خوشبختانه او با درک واکنش نشان داد و از من عصبانی نبود."
    },
    { germanTitle: "Ein Campingausflug", persianTitle: "سفر کمپینگ",
      germanStory: "Am Wochenende machten wir einen Campingausflug in den Wald. Wir bauten unser Zelt in der Nähe eines kleinen Flusses auf. Am Abend machten wir ein Lagerfeuer und grillten Würstchen. Nachts die Sterne zu beobachten, war wunderschön. Es war toll, einfach mal weg von der Stadt zu sein.",
      persianTranslation: "آخر هفته ما یک سفر کمپینگ به جنگل داشتیم. ما چادرمان را نزدیک یک رودخانه کوچک برپا کردیم. عصر آتش روشن کردیم و سوسیس کباب کردیم. تماشای ستاره‌ها در شب بسیار زیبا بود. عالی بود که برای مدتی از شهر دور باشیم."
    },
    { germanTitle: "Eine neue Fähigkeit lernen", persianTitle: "یادگیری یک مهارت جدید",
      germanStory: "Ich wollte schon immer Gitarre spielen lernen. Also habe ich mir letzte Woche eine Gitarre gekauft und einen Online-Kurs begonnen. Die ersten Akkorde sind sehr schwer und meine Finger tun weh. Aber ich übe jeden Tag eine halbe Stunde. Ich bin motiviert und hoffe, bald mein erstes Lied spielen zu können.",
      persianTranslation: "من همیشه می‌خواستم نواختن گیتار را یاد بگیرم. بنابراین هفته گذشته یک گیتار خریدم و یک دوره آنلاین را شروع کردم. آکوردهای اول بسیار سخت هستند و انگشتانم درد می‌کنند. اما من هر روز نیم ساعت تمرین می‌کنم. من با انگیزه هستم و امیدوارم به زودی بتوانم اولین آهنگم را بنوازم."
    },
    { germanTitle: "Ein besonderes Familienfest", persianTitle: "یک جشن خانوادگی خاص",
      germanStory: "Letzten Samstag feierten meine Großeltern ihre Goldene Hochzeit. Das ist ein sehr besonderes Fest. Die ganze Familie kam zusammen, auch Verwandte, die weit weg wohnen. Wir aßen zusammen, erzählten alte Geschichten und schauten uns Fotos an. Es war ein sehr emotionaler und schöner Tag für uns alle.",
      persianTranslation: "شنبه گذشته پدربزرگ و مادربزرگم جشن عروسی طلایی خود را برگزار کردند. این یک جشن بسیار خاص است. تمام خانواده دور هم جمع شدند، حتی بستگانی که دور زندگی می‌کنند. ما با هم غذا خوردیم، داستان‌های قدیمی تعریف کردیم و به عکس‌ها نگاه کردیم. این یک روز بسیار احساسی و زیبا برای همه ما بود."
    },
    { germanTitle: "Ein guter Ratschlag", persianTitle: "یک نصیحت خوب",
      germanStory: "Als ich mit meinem Studium unzufrieden war, gab mir mein Vater einen guten Ratschlag. Er sagte: 'Es ist keine Schande, eine Entscheidung zu ändern, wenn du merkst, dass sie falsch war.' Dieser Ratschlag gab mir den Mut, das Studienfach zu wechseln. Heute bin ich sehr glücklich mit meiner neuen Wahl.",
      persianTranslation: "وقتی از تحصیلم ناراضی بودم، پدرم نصیحت خوبی به من کرد. او گفت: «تغییر دادن یک تصمیم اگر متوجه شوی که اشتباه بوده، شرم‌آور نیست.» این نصیحت به من شجاعت داد تا رشته تحصیلی‌ام را عوض کنم. امروز من از انتخاب جدیدم بسیار خوشحالم."
    },
    { germanTitle: "Eine unerwartete Begegnung", persianTitle: "یک برخورد غیرمنتظره",
      germanStory: "Gestern traf ich zufällig meine alte Grundschullehrerin in der Stadt. Ich hatte sie seit über zehn Jahren nicht mehr gesehen. Zuerst erkannte ich sie nicht, aber dann sprach sie mich an. Wir unterhielten uns eine Weile über die alten Zeiten. Das war eine sehr nette und unerwartete Begegnung.",
      persianTranslation: "دیروز به طور تصادفی معلم قدیمی دبستانم را در شهر ملاقات کردم. من بیش از ده سال بود که او را ندیده بودم. در ابتدا او را نشناختم، اما بعد او با من صحبت کرد. ما مدتی درباره دوران قدیم صحبت کردیم. این یک برخورد بسیار خوب و غیرمنتظره بود."
    },
    { germanTitle: "Ein Tag im Leben eines Studenten", persianTitle: "یک روز از زندگی یک دانشجو",
      germanStory: "Als Student ist kein Tag wie der andere. Normalerweise stehe ich auf, gehe zu den Vorlesungen an der Universität und verbringe den Nachmittag in der Bibliothek, um zu lernen. Abends koche ich oft mit meinen Mitbewohnern oder wir gehen aus. Man muss diszipliniert sein, aber man hat auch viele Freiheiten.",
      persianTranslation: "به عنوان یک دانشجو، هیچ روزی شبیه روز دیگر نیست. معمولاً بیدار می‌شوم، به سخنرانی‌ها در دانشگاه می‌روم و بعد از ظهر را در کتابخانه برای درس خواندن می‌گذرانم. عصرها اغلب با هم‌اتاقی‌هایم آشپزی می‌کنم یا بیرون می‌رویم. باید منضبط بود، اما آزادی‌های زیادی هم داری."
    },
    { germanTitle: "Ein Missverständnis am Telefon", persianTitle: "یک سوءتفاهم تلفنی",
      germanStory: "Ich rief gestern bei einer Firma an, weil ich eine Frage hatte. Die Person am Telefon sprach sehr schnell, sodass ich sie kaum verstand. Ich dachte, sie sagte 'nein', aber eigentlich sagte sie 'neu'. Es war ein lustiges Missverständnis, das wir am Ende klären konnten. Man muss am Telefon immer genau hinhören.",
      persianTranslation: "دیروز به شرکتی زنگ زدم چون سوالی داشتم. فرد پشت تلفن خیلی سریع صحبت می‌کرد، طوری که به سختی متوجه منظورش می‌شدم. من فکر کردم او گفت «نه»، اما در واقع گفت «جدید». این یک سوءتفاهم خنده‌دار بود که در نهایت توانستیم آن را برطرف کنیم. باید همیشه پای تلفن با دقت گوش داد."
    },
    { germanTitle: "Eine Reise in die Vergangenheit", persianTitle: "سفری به گذشته",
      germanStory: "Wenn ich in die Vergangenheit reisen könnte, würde ich die 1920er Jahre in Berlin besuchen. Ich stelle mir diese Zeit sehr aufregend vor, mit all der neuen Kunst, Musik und Kultur. Natürlich gab es auch viele Probleme, aber es wäre faszinierend, die Atmosphäre dieser Zeit selbst zu erleben.",
      persianTranslation: "اگر می‌توانستم به گذشته سفر کنم، دهه ۱۹۲۰ در برلین را بازدید می‌کردم. من این دوران را بسیار هیجان‌انگیز تصور می‌کنم، با تمام آن هنر، موسیقی و فرهنگ جدید. البته مشکلات زیادی هم وجود داشت، اما تجربه کردن جو آن زمان به شخصه شگفت‌انگیز خواهد بود."
    },
    { germanTitle: "Ein Kompliment bekommen", persianTitle: "دریافت یک تعریف",
      germanStory: "Heute hat mir eine Kollegin ein nettes Kompliment gemacht. Sie sagte, dass sie meine positive Art und meine Hilfsbereitschaft sehr schätzt. Das hat mich wirklich gefreut und mir den ganzen Tag versüßt. Ein ehrliches Kompliment kann eine große Wirkung haben.",
      persianTranslation: "امروز یک همکار از من تعریف خوبی کرد. او گفت که از رفتار مثبت و کمک‌رسانی من بسیار قدردانی می‌کند. این واقعاً مرا خوشحال کرد و تمام روزم را شیرین کرد. یک تعریف صادقانه می‌تواند تأثیر بزرگی داشته باشد."
    },
    { germanTitle: "Ein Regentag zu Hause", persianTitle: "یک روز بارانی در خانه",
      germanStory: "Es hat den ganzen Samstag geregnet, deshalb blieben wir zu Hause. Wir machten es uns auf dem Sofa gemütlich, tranken heiße Schokolade und schauten einen alten Film. Manchmal ist es schön, wenn man keine Pläne hat und einfach nur entspannen kann. So ein fauler Tag tut gut.",
      persianTranslation: "تمام روز شنبه باران بارید، به همین دلیل ما در خانه ماندیم. ما روی مبل راحت نشستیم، شکلات داغ نوشیدیم و یک فیلم قدیمی تماشا کردیم. گاهی اوقات خوب است که هیچ برنامه‌ای نداشته باشی و فقط بتوانی استراحت کنی. چنین روز تنبلی خوب است."
    },
    { 
      germanTitle: "Ein lustiger Fehler", 
      persianTitle: "یک اشتباه خنده‌دار",
      germanStory: "Als ich neulich einkaufen war, war ich sehr in Gedanken. An der Kasse wollte ich mit meiner Fernbedienung für das Auto bezahlen, anstatt mit meiner EC-Karte. Die Kassiererin und ich mussten beide sehr lachen. Manchmal ist man einfach ein bisschen durcheinander.",
      persianTranslation: "وقتی اخیراً برای خرید رفته بودم، خیلی در فکر بودم. در صندوق می‌خواستم با ریموت ماشینم پرداخت کنم به جای کارت بانکی‌ام. صندوق‌دار و من هر دو خیلی خندیدیم. گاهی آدم کمی گیج می‌شود."
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
