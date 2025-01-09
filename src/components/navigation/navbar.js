"use client";
import React, { useState, useEffect, useRef } from "react";
import { Button } from "../button/button";

export function Navbar() {
    const colors = {
        red: "#FF0000",
        black: "#000000",
        white: "#FFFFFF",
        blue: "#0000FF",
        green: "#008000",
        yellow: "#FFFF00",
    };

    const [selectedColor, setSelectedColor] = useState({
        name: "Pick Colors",
        code: "#000000",
    });

    const [isRotated, setIsRotated] = useState(false); // State untuk rotasi
    const dropdownRef = useRef(null); // Reference untuk dropdown

    // Effect untuk menangani klik di luar dropdown
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsRotated(false); // Reset rotasi jika klik di luar dropdown
            }
        };

        document.addEventListener("click", handleClickOutside);

        return () => {
            document.removeEventListener("click", handleClickOutside); // Bersihkan event listener
        };
    }, []);

    return (
        <>
            <section className="flex items-center fixed justify-between px-10 bg-base-100 z-10 w-full h-20">
                <a className="capitalize font-black text-2xl btn btn-ghost hover:bg-base-100"><span className="text-3xl">⚡️</span>  cv faster</a>
                <div className="flex items-center gap-3">
                    {/* Font Picker */}
                    <div className="dropdown" ref={dropdownRef}>
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn hover:bg-base-100 m-1 btn-ghost flex items-center gap-2"
                            onClick={() => setIsRotated((prev) => !prev)} // Toggle rotasi
                        >
                            <span
                                className={`text-2xl transition-transform duration-300 ${isRotated ? "rotate-90" : "rotate-0"
                                    }`}
                            >
                                👉🏻
                            </span>
                            Pick Fonts
                        </div>
                        <ul
                            tabIndex={0}
                            className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
                        >
                            <li>
                                <a>Arial</a>
                            </li>
                            <li>
                                <a>Times New Roman</a>
                            </li>
                        </ul>
                    </div>

                    <div className="divider lg:divider-horizontal divider-sm"></div>

                    {/* Color Picker */}
                    <div className="dropdown">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn hover:bg-base-100 m-1 btn-ghost flex items-center gap-2"
                        >
                            <span
                                className="text-2xl"
                                style={{ color: selectedColor.code }}
                            >
                                🎨
                            </span>
                            <span
                                className="truncate max-w-[100px] text-center"
                                style={{
                                    color: selectedColor.code,
                                    minWidth: "100px", // Lebar minimum tetap
                                    textShadow:
                                        selectedColor.code === "#FFFFFF"
                                            ? "0px 0px 2px #000000, 0px 0px 5px #000000" // Outline untuk teks putih
                                            : "none",
                                }}
                            >
                                {selectedColor.name}
                            </span>
                        </div>
                        <ul
                            tabIndex={0}
                            className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
                        >
                            {Object.entries(colors).map(([colorName, colorCode]) => (
                                <li key={colorName}>
                                    <a
                                        onClick={() =>
                                            setSelectedColor({
                                                name: colorName.charAt(0).toUpperCase() + colorName.slice(1),
                                                code: colorCode,
                                            })
                                        }
                                    >
                                        <span
                                            className="w-4 h-4 inline-block border rounded-full mr-2"
                                            style={{ backgroundColor: colorCode }}
                                        ></span>
                                        {colorName.charAt(0).toUpperCase() + colorName.slice(1)}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div>
                    {/* <Button type="warning">
                        Support Me
                    </Button> */}
                </div>
            </section>
        </>
    );
}
