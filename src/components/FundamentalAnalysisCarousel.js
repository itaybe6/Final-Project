import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Typography, Box } from '@mui/material';
import '../Style/FundamentalAnalysisCarousel.css';

import Reports from '../img/A_detailed_image_explaining_financial_statements.jpg'
import AssVSLiab from '../img/Assets_vs_Liabilities.jpg'
import PE from '../img/PE.jpg'
import CashFlow from '../img/CashFlow.jpg'
import ProfitGrowth from '../img/Profit_Growth_3_to_5_years.jpg'
import Revenue from '../img/Revenue_Growth_3_to_5_years.jpg'





const items = [
    {
        title: "דוחות כספיים",
        description: "דוחות כספיים הם אחד הכלים המרכזיים בניתוח פונדומנטלי. הם מספקים מידע על הביצועים הפיננסיים של החברה, כולל מאזנים, דוחות רווח והפסד ותזרימי מזומנים. ניתוח הדוחות הכספיים עוזר למשקיעים להבין את הרווחיות והבריאות הפיננסית של החברה. מניה טובה תראה דוחות כספיים יציבים וצומחים לאורך זמן, עם עלייה מתמשכת ברווחים ובמכירות, בעוד שמניה לא טובה תציג ירידות או חוסר יציבות בדוחות.",
        image: Reports
    },
    {
        title: "נכסים לעומת התחייבויות",
        description: "יחס נכסים לעומת התחייבויות הוא מדד חשוב שמראה את היציבות הפיננסית של החברה. יחס גבוה יותר מעיד על כך שהחברה יכולה לכסות את התחייבויותיה באמצעות הנכסים שברשותה, מה שמצביע על ביטחון פיננסי גבוה יותר. מניה טובה תציג יחס נכסים לעומת התחייבויות גבוה מ-1.5, בעוד שמניה לא טובה תציג יחס נמוך מ-1 או שלילי.",
        image: AssVSLiab
    },
    {
        title: "יחס P/E",
        description: "יחס מחיר לרווח (P/E) הוא מדד שמראה כמה המשקיעים מוכנים לשלם על כל שקל של רווחי החברה. יחס P/E נמוך מדי יכול להצביע על כך שהמניה זולה יחסית, בעוד שיחס גבוה מדי יכול להצביע על כך שהמניה יקרה. טווח רצוי לקנייה נחשב בין 15 ל-25, תלוי בענף ובצמיחה הצפויה. מניה טובה תציג יחס P/E בתחום הזה, בעוד שמניה לא טובה תציג יחס גבוה מ-30 או נמוך מ-10 ללא סיבה טובה.",
        image: PE
    },
    {
        title: "צמיחת הכנסות בטווח של 3-5 שנים",
        description: "צמיחת הכנסות לאורך זמן היא אינדיקטור חשוב לפוטנציאל הצמיחה של החברה. אם החברה מגדילה את הכנסותיה בצורה עקבית בטווח של 3-5 שנים בשיעור של לפחות 10% בשנה, זה מעיד על ביקוש גבוה למוצריה או שירותיה ועל ניהול עסקי מוצלח. מניה טובה תראה צמיחת הכנסות בשיעור זה או גבוה יותר, בעוד שמניה לא טובה תראה ירידה או חוסר יציבות בהכנסות.",
        image: ProfitGrowth
    },
    {
        title: "צמיחת רווחים בטווח של 3-5 שנים",
        description: "צמיחת רווחים לאורך זמן מראה שהחברה לא רק מצליחה להגדיל את הכנסותיה, אלא גם לשפר את רווחיותה. עלייה ברווחים בטווח של 3-5 שנים בשיעור של לפחות 15% בשנה מצביעה על יעילות תפעולית ועל יכולת לנהל את העלויות בצורה טובה. מניה טובה תציג צמיחת רווחים עקבית בשיעור זה או גבוה יותר, בעוד שמניה לא טובה תראה ירידה או חוסר יציבות ברווחים.",
        image: Revenue
    },
    {
        title: "מזומנים פנויים",
        description: "מזומנים פנויים הם חלק חשוב מהבריאות הפיננסית של החברה. הם מאפשרים לחברה להתמודד עם משברים פיננסיים, להשקיע בהזדמנויות חדשות ולחלק דיבידנדים לבעלי המניות. מזומנים פנויים גבוהים מעידים על נזילות טובה וביטחון פיננסי. מניה טובה תציג מזומנים פנויים בשיעור של לפחות 10% מסך הנכסים שלה, בעוד שמניה לא טובה תראה מחסור במזומנים ונזילות נמוכה.",
        image: CashFlow
    },
];

const FundamentalAnalysisCarousel = () => {
    return (
        <Carousel interval={10000}>
            {items.map((item, i) => (
                <Paper key={i} className="carousel-item">
                    <Box className="carousel-content">
                        <Box className="carousel-image-container">
                            <img src={item.image} alt={item.title} className="carousel-image" />
                        </Box>
                        <Box className="carousel-text">
                            <Typography variant="h4" component="h2" gutterBottom>
                                {item.title}
                            </Typography>
                            <Typography variant="body1" component="p">
                                {item.description}
                            </Typography>
                        </Box>
                    </Box>
                </Paper>
            ))}
        </Carousel>
    );
}

export default FundamentalAnalysisCarousel;
