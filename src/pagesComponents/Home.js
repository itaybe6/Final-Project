import React from 'react';
import '../Style/Home.css'


function Home() {
  return (
    <div className="container">
      <h1>ברוך הבא לעמוד הבית שלנו!</h1>
      <h2>כיצד לפתוח חשבון מניות באינטראקטיב ברוקרס</h2>
      <ol>
        <li>כנס לאתר של <a href="https://www.interactivebrokers.com/" target="_blank" rel="noopener noreferrer">אינטראקטיב ברוקרס</a>.</li>
        <li>לחץ על כפתור "פתח חשבון" (Open Account).</li>
        <li>בחר את סוג החשבון שאתה רוצה לפתוח (פרטי, משותף, עסקי וכו').</li>
        <li>מלא את הפרטים האישיים שלך בטופס ההרשמה.</li>
        <li>העלה את המסמכים הדרושים לאימות זהותך.</li>
        <li>השלם את תהליך האימות על ידי מילוי השאלון הרלוונטי.</li>
        <li>הפקד את הכסף ההתחלתי לחשבון המניות שלך.</li>
        <li>התחל לסחור במניות!</li>
      </ol>
    </div>
  );
}

export default Home;
