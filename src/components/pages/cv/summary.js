"use client"
import { useState, useEffect, useRef } from "react";
import { Textarea } from "@/components/forms/textarea";
import { mergerServices } from "@/services/MergerServices";

export function SummarySections() {
    const [summary, setSummary] = useState(
        "Graduated from a Vocational High School with a focus on Software Engineering. Experienced in backend development and web development, with skills honed through active participation for two years as a Backend Developer and Web Developer in an organization. Additionally, has one year of internship experience at Bank Rakyat Padang, specializing in Backend Development or Web Development."
    );
    const [isEditing, setIsEditing] = useState(false);
    const wrapperRef = useRef(null);

    useEffect(() => {
        const storedData = mergerServices.getData();
        if (storedData?.summary) {
            setSummary(storedData.summary);
        }
    }, []);

    useEffect(() => {
        mergerServices.saveData("summary", summary);
    }, [summary]);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (
                isEditing &&
                wrapperRef.current &&
                !wrapperRef.current.contains(e.target)
            ) {
                setIsEditing(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isEditing]);

    const handleDoubleClick = () => setIsEditing(true);

    const handleChange = (e) => setSummary(e.target.value);

    return (
        <div className="text-center card-summary space-y-3" ref={wrapperRef}>
            {isEditing ? (
                <Textarea
                    value={summary}
                    onChange={handleChange}
                    rows={6}
                    autoFocus
                />
            ) : (
                <p onDoubleClick={handleDoubleClick}>{summary}</p>
            )}
        </div>
    );
}
