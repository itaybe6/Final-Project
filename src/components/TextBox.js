
import React, { useState } from 'react';
import '../Style/Box.css';

const Box = () => {
const tips = [
  "התחל בלהבין את המושגים הבסיסים ואת הכלים הנפוצים להשקעה.",
  "תקח זמן להבין את תנועת השוק, תעקוב אחרי התנהגויות תקרא ותתעניין.",
  "⁠כתוב לך כללים תרשום שיטות ועקרונות שעל פיהם תפעל.",
  "⁠למידה פרקטית - פתח חשבון מסחר דמו ותראה אם הינך מצליח ליישם את השיטות שלמדת."
];

return (
  <div>
    {tips.map((tip, index) => (
      <div key={index} className={`box box${index + 1}`}>
        {tip}
      </div>
    ))}
  </div>
);
    }
export default Box;
