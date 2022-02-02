import React, { useRef, useState } from 'react';
import { useEffect } from 'react';
import '../styles/tardis.css';

// !IMPORTANT אם לא זיהיתם את הרפרנס, לכו לראות דוקטור הו 
export const Tardis = () => {
    const [year, setYear] = useState<number>(new Date().getFullYear());
    const [yearsList, setYearsList] = useState<number[]>([]);
    const timer = useRef();
    const Interval = useRef<NodeJS.Timer | undefined>();

    const sortedYearsList = yearsList.sort((a, b) => a - b).join(', ')

    useEffect(() => {
        Interval.current = setInterval(() => {
            const new_year = generateYear();
            setYear(new_year);
            setYearsList([...yearsList, new_year])
        }, 12000)
    }, []);

    useEffect(() => {
        console.log("LIST CHANGED!", yearsList);
    }, [yearsList]);


    const generateYear = () => {
        return Math.floor(Math.random() * 10000)
    }

    return <div className={'page' + ' ' + (year > new Date().getFullYear() ? 'future' : year === new Date().getFullYear() ? "present" : "past")}>
        <div className={'tardis-visible'}>
            <img src='/tardis.png' />
            <div><strong>year {year}</strong></div>
        </div>
        <div className="visitedYears">{"list: " + sortedYearsList}</div>
    </div>;
};
