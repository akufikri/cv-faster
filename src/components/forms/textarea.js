"use client"
import { useRef, useEffect } from "react";

export function Textarea({
    placeholder = "",
    value,
    onChange,
    className = "",
    label = "",
    required = false,
    rows = 4
}) {
    const textareaRef = useRef(null);

    useEffect(() => {
        if (textareaRef.current) {
            // Mengatur tinggi secara otomatis berdasarkan konten
            textareaRef.current.style.height = "auto";
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
        }
    }, [value]); // Jalankan setiap kali value berubah

    return (
        <div className="form-control w-full">
            {label && (
                <label className="label">
                    <span className="label-text">{label}</span>
                </label>
            )}
            <textarea
                ref={textareaRef}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className={`textarea w-full border-dashed border-2 textarea-bordered ${className}`}
                required={required}
                rows={rows}
                style={{ resize: "none" }} // Nonaktifkan resize manual
            ></textarea>
        </div>
    );
}
