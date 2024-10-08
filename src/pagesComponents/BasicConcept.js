import React from 'react';
import aftermarket from '../img/aftermarket.jpg'
import  askbid from '../img/askbid.jpg'
import premarket from '../img/premarket.jpg'
import stock from '../img/stock.jpg'
import earnmoney from '../img/earnmoney.jpg'
import dividend from '../img/dividend.png'
import gap from '../img/gap.png'
import volume from '../img/volume.png'
import ImageTextDisplay from '../components/ImageTextDisplay ';
import candels from '../img/candels.jpg';
import israel from '../img/israel.jpg'
import tokyo from '../img/tokyo.jpg'
import nasdaq from '../img/nasdaq.jpg'
import newyork from '../img/newyork.jpg'
import Advantages from '../components/Advantages';
import RowTopics from '../components/RowTopics';
import Introduction from '../components/Introduction';


const BasicConcept = () => {
    const subTopics1 = [
        {
            description: 'מתרחש לאחר סגירת השוק, בדרך כלל משעה 16:00 (23:00 בלילה שעון ישראל ) עד 20:00 (3:00 שעון ישראל ) שעון מזרח. בדומה למסחר המוקדם, הוא מספק הזדמנות למשקיעים לסחור בחדשות או באירועים המתרחשים לאחר הפגישה הרגילה בשוק. מסחר במניות מחוץ לשעות הרגילות יכול להציע גמישות ונוחות, אבל זה מגיע גם עם סיכונים כמו נזילות נמוכה יותר ותנודתיות גבוהה יותר. המשמעות היא שייתכן שיהיו פחות קונים ומוכרים, מה שעלול להוביל לתנודות גדולות יותר במחיר.',
            imageUrl: aftermarket,
        },
        {
            description:'המחיר של כל מניה משתנה בהתאם להיצע וביקוש. מחיר ה"היצע" מייצגת את המחיר שבו מוכנים מוכרי המניות למכור את מניותיהם, בעוד שה"ביקוש" מייצג את המחיר שבו קונים מוכנים לרכוש מניות. כאשר הביקוש על מניה  גבוה (כלומר, ישנם רבים המעוניינים לרכוש אותה), מחיר המניה עולה , מכיוון שקונים יהיו מוכנים לשלם יותר כדי להבטיח את רכישתה.  לעומת זאת, כאשר יש היצע גבוהה למניה (כלומר, ישנם רבים המעוניינים למכור אותה) והביקוש נמוך, מחיר המניה יכול לרדת מכיוון שמוכרים יציעו מחירים נמוכים יותר כדי למכור אותה. מנגנון זה של הצעה וביקוש הוא שמניע את דינמיקת המחירים בשוק המניות.',
            imageUrl: askbid,
        },
        {
            description: 'מתרחש לפני פתיחת השוק הרגיל, בדרך כלל החל משעה 4:00 בבוקר ( 11:00 בבוקר שעון ישראל )  ונמשך עד פתיחת השוק בשעה 9:30 (16:30 שעון ישראל )  בבוקר שעון המזרח. המסחר המוקדם מאפשר למשקיעים להגיב לחדשות ואירועים, כמו דוחות רווחים או נתונים כלכליים, המתרחשים מחוץ לשעות המסחר הרגילות.',
            imageUrl: premarket,
        },
        {
            description: 'מניה מייצגת בעלות בחברה. כאשר אתה קונה מניה, אתה רוכש חלק קטן מאותה חברה, המכונה "מניה". חברות מוכרות מניות כדי לגייס כסף למטרות שונות, כמו הרחבת העסק שלהן או פיתוח מוצרים חדשים. בעלות על מניות בחברה הופכת אותך לבעל מניות, כלומר יש לך תביעה על חלק מהנכסים והרווחים של החברה. ככל שבבעלותך יותר מניות, כך חלק החברה בבעלותך גדול יותר.',
            imageUrl: stock,
        },
        
    ];

    const subTopics2 = [
        {
            description: 'השקעה במניות יכולה להיות דרך להרוויח כסף, בין אם קנינו את המניה ומחירה עולה ובין אם מכרנו את המניה ומכירה יורד . דרך נוספת להרוויח היא באמצעות דיבידנדים, שהם תשלומים שחברות מסוימות משלמות לבעלי המניות מתוך הרווחים שלהן כאשר הם קונים את המניה .',
            imageUrl: earnmoney,
        },
        {

            description : 'במסחר במניות, גאפ מתייחס להפרש מחירים מורגש בין סגירת יום מסחר אחד לפתיחה של יום מסחר אחר, ללא מסחר ביניהם. גאפים  מתרחשים בדרך כלל עקב אירועים משמעותיים או חדשות המשפיעות על סנטימנט המשקיעים לגבי מניה, מה שיכול לקרות לאחר סגירת השוק או לפני פתיחתה. ישנם סוגים שונים של גאפים ,גאפ הפ ( מחיר המניה גבוה מיום לפני ) וגאפ דאון ( מחיר המניה נמוך מיום לפני )  כל אחד מעיד על סנטימנטים שונים בשוק ועל תנועות מחיר עתידיות פוטנציאליות. גאפים חשובים בניתוח טכני מכיוון שהם יכולים לספק תובנות לגבי מגמות שוק והתנהגות משקיעים.', 
            imageUrl : gap,
        },
        {
            description: 'דיבידנד הוא תשלום שמעבירה החברה לבעלי המניות שלה, בדרך כלל מרווחים שנצברו בה או מעודפים כספיים. במילים אחרות  זו היא הדרך של החברה לשתף את הרווחים עם בעליה - כאשר החברה מייצרת רווחים היא יכולה לשלם חלק מהם לבעלי המניות כדיבידנד ולשמור את היתרה לשימושה. בדרך כלל החברה מודיעה על תאריך בוא היא הולכת לחלק דיבידנדים ובתאריך הזה כל שותף במניות מקבל סכום של כסף לפי מספר המניות שלו. ',
            imageUrl: dividend,
        },
        {
            description: 'בשוק המניות, נפח מתייחס למספר המניות של מניה מסוימת הנסחרות בתוך תקופה מסוימת, בדרך כלל יום מסחר בודד. נפח מסחר גבוה מעיד על רמת עניין גבוהה במניה, שיכולה לנבוע מגורמים שונים כמו חדשות על המניה , דוחות כלכליים או מגמות בשוק. נפח הוא אינדיקטור מרכזי בניתוח טכני, מכיוון שהוא עוזר למשקיעים לאמוד את החוזק של תנועת מחירים וסנטימנט המשקיעים הפוטנציאלי.',
            imageUrl: volume,
        },
        
    ];

    const subTopics3 = [
        {
            description: 'בורסת ישראל היא הבורסה הרשמית במדינת ישראל. שעות פתיחת הבורסה הרשמיות הן: 9:45-16:30 בימי ראשון-חמישי (ישנם ימי שוק שבהם הבורסה נפתחת ב9:30 . ) מטבע המסחר הראשי בבורסה הוא- שקל חדש. חשוב לדעת - כשאנחנו מסתכלים על המחיר המוצג של מנייה בישראל הוא מוצג באגורות ולכן על מנת להבין את מחירו - נצטרך לחלק במאה.',
            imageUrl: israel,
        },
        {
            description:'בורסת טוקיו משמשת כמרכז פיננסי ובעלת השפעה גדולה על הכלכלה של יפן ועל המסחר העולמי. שעות הפעילות הן 9:00-15:00 שעון יפן וישנם ימי שוק שבם נפתחת ונסגרת קודם.המניות בבורסת טוקיו מתחלקות לקבוצות: מניות ראשיות, אירופיות וכדומה .בגלל השפעתה הגדולה על המסחר העולמי ועל הכלכלה העולמית היא נחשבת לאחת הבורסות המשפיעות על אסיה ועל העולם , היא נסחרת במטבע ה-ין היפני, שהוא המטבע המקומי ביפן.',
            imageUrl: tokyo,
        },
        {
            description: 'בורסת נאסק גם היא אחת מהבורסות הבולטות ביותר וממוקמת בניו יורק.  השם נאסד״ק הוא ראשי תיבות באנגלית של שוק הערכות ואופציות בבורסה. שעות הפעילות 9:30-16:00 שעון ארה״ב קיימות גם שעות מסחר מוקדמות ומאוחרות.  המטבע בו נסחרת היא הדולר האמריקאי. נאסד״ק מכילה בתוכה חברות גדולות ורבות כמו: גוגל, אפל, אמזון, פייסבוק, ועוד.נאסד״ק הוא שוק מסחר אלקטרוני וחלק מהמדדים העיקרים שלו הם: Nasdaq 100 , המדד הזה מייצג את התנועות בשוק כולו או בתחום של תעשיה ספציפית.',
            imageUrl: nasdaq,
        },
        {
            description: 'בורסת ניו יורק היא אחת מהבורסות הבולטות והחשובות היא ממוקמת בלה מהנטן. שעות הפעילות של הבורסה היא 9:30-16:00 שעון ארה״ב. בשעות הערב לאחר הסגירה יש שעות מסחר מאוחרות. המטבע בו נסחרת היא דולר אמריקאי, בורסת ארה״ב מציעה מגוון של מדדים ובניהם המדד המוכר ביותר Djnc וגם S&p 500 המורכב מ30 מניות מובילות בשוק. מדדים עיקרים אלו מסייעים להבנת השוק הם מייצגות אירועים כלכלים גדולים, פיתוחים טכנולוגים וגאוגרפיים ועלולים להשפיע על הבורסה כולה.',
            imageUrl: newyork,
        },
        
    ];

    const imgTextDisplay = { url : 'https://www.youtube.com/watch?v=ruwoQA-jgaQ&t=694s' , title :  "נרות יפניים" , content_text : "נרות יפניים אחד הכלים הפופולרים לניתוח טכני . הם מספקים ייצוג חזותי של תנועות המחירים בתוך מסגרת זמן מסוימת.כל פמוט מציג ארבע פיסות מידע מרכזיות. הגוף הראשי (החלק הרחב יותר) של הפמוט מציג את מחירי הפתיחה והסגירה. אם מחיר הסגירה גבוה ממחיר הפתיחה, הפמוט נצבע לרוב בירוק, מה שמעיד על עלייה. אם מחיר הסגירה נמוך יותר, הפמוט בצבע אדום, מה שמצביע על ירידה.הקווים הנמשכים מהחלק העליון והתחתון של הגוף, מייצגים את המחירים הגבוהים והנמוכים במהלך התקופה."}

    const title = 'לומדת שוק ההון'
    const text = 'ברוכים הבאים לעולם הקסום של מושגי שוק ההון! עמוד זה מהווה את נקודת הפתיחה שלכם במסע להבנת היסודות שעומדים בבסיס שוק המניות. פה נעבור יחד על המושגים הבסיסיים, מהם מניות ואיך הן עובדות, דרך הבנת אינדקסים כלכליים, ועד לפענוח מונחים כמו נפח המסחר,גאפ ועוד. אנחנו כאן כדי לוודא שתתחילו את מסעכם בעולם ההשקעות עם הבסיס החזק ביותר. אז קבלו את עצמכם בזרועות פתוחות לחדר הלימודים שלנו, והיכונו להרפתקה מרתקת בעולם הפיננסי!'
    return (
        <div>
            {/* <Carousel /> */}
            
            <Introduction title = {title} text = {text}/> 
            <RowTopics subTopics ={subTopics1}/>
            <ImageTextDisplay obj = {imgTextDisplay} img = {candels} />
            <RowTopics subTopics ={subTopics2}/>
            <Advantages />
            <RowTopics subTopics ={subTopics3}/>

            

            
        </div>
    );
};

export default BasicConcept;
