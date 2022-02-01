import { useState } from "react";
import '../styles/sorting-hat.css';

export default function First() {
    const [firstName, setFirstNameName] = useState("");
    const [lastName, setLastName] = useState("")
    const [favoriteColor, setFavoriteColor] = useState("")
    const [result, setResult] = useState("")


    const onChange = (e: any) => {
        switch (e.target.name) {
            case "firstName":
                setFirstNameName(e.target.value)
                break;
            case "lastName":
                setLastName(e.target.value)
                break;
            case "favoriteColor":
                setFavoriteColor(e.target.value)
                break;
        }
    }

    const applyToHogwarts = () => {
        if (favoriteColor === "red") setResult("התקבלת לגריפינדור! 🦁")
        if (favoriteColor === "blue") setResult("התקבלת לרייבנקלו! 🦅");
        if (favoriteColor === "green") setResult("התקבלת לסלית'רין! 🐍");
        if (favoriteColor === "yellow") setResult("התקבלת להפלפאף! 🦡")
    }

    return (
        <div className="page">
            <img src="/Hogwartscrest.png" />

            <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', flexDirection: 'row-reverse' }}>
                <label htmlFor="firstName">שם פרטי</label>
                <input name="firstName" value={firstName} onChange={onChange} />
            </div>

            <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', flexDirection: 'row-reverse' }}>
                <label htmlFor="lastName">שם משפחה</label>
                <input name="lastName" value={lastName} onChange={onChange} />
            </div>

            <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', flexDirection: 'row-reverse' }}>
                <label htmlFor="favoriteColor">צבע אהוב</label>
                <input name="favoriteColor" value={favoriteColor} onChange={onChange} />
            </div>

            <div className="send-button" style={{ backgroundColor: 'gray' }} onClick={() => applyToHogwarts()}>שליחה</div>
            <div className="result">{`תוצאה: ${result}`}</div>
        </div>
    )
}
