"use client";
import { useState, useEffect, useRef } from "react";
import { Input } from "@/components/forms/input";
import { mergerServices } from "@/services/MergerServices";

export function HeaderSections() {
    const [formData, setFormData] = useState(() => {
        const data = mergerServices.getData();
        return data.header || {
            name: "John Doe",
            address: "123 Main Street, Springfield, USA",
            email: "john.doe@example.com",
            phone_number: "+1 555-123-4567",
        };
    });

    const [editableField, setEditableField] = useState(null);
    const wrapperRef = useRef(null);

    // Simpan data ke localStorage saat formData berubah
    useEffect(() => {
        mergerServices.saveData("header", formData);
    }, [formData]);

    // Deteksi klik di luar elemen untuk menutup input yang sedang aktif
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (
                editableField &&
                wrapperRef.current &&
                !wrapperRef.current.contains(e.target)
            ) {
                setEditableField(null);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [editableField]);

    const handleDoubleClick = (field) => {
        setEditableField(field);
    };

    const handleChange = (field, value) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    const validateField = (field, value) => {
        if (value.trim() === "") {
            alert(`${field.replace("_", " ")} tidak boleh kosong!`);
            return false;
        }
        if (
            ["address", "email", "phone_number"].includes(field) &&
            !value.includes(",")
        ) {
            alert(`${field.replace("_", " ")} harus memiliki koma!`);
            return false;
        }
        return true;
    };

    const handleBlur = (field, value) => {
        if (!validateField(field, value)) {
            setFormData((prev) => ({
                ...prev,
                [field]: "John Doe", // Atur kembali ke nilai default jika tidak valid
            }));
        }
        setEditableField(null);
    };

    return (
        <>
            <div className="text-center card-header space-y-3" ref={wrapperRef}>
                {/* Name */}
                {editableField === "name" ? (
                    <div className="input-container active">
                        <Input
                            value={formData.name}
                            onChange={(e) => handleChange("name", e.target.value)}
                            onBlur={() => handleBlur("name", formData.name)}
                            autoFocus
                            className="font-black text-xl uppercase"
                        />
                    </div>
                ) : (
                    <h1
                        className="font-black text-xl uppercase cursor-pointer"
                        onDoubleClick={() => handleDoubleClick("name")}
                    >
                        {formData.name}
                    </h1>
                )}
                <div className="flex items-center justify-center text-sm">
                    {/* Address */}
                    {editableField === "address" ? (
                        <div className="input-container active">
                            <Input
                                value={formData.address}
                                onChange={(e) => handleChange("address", e.target.value)}
                                onBlur={() => handleBlur("address", formData.address)}
                                autoFocus
                            />
                        </div>
                    ) : (
                        <span
                            className="capitalize cursor-pointer"
                            onDoubleClick={() => handleDoubleClick("address")}
                        >
                            {formData.address}
                        </span>
                    )}
                    <div className="divider-horizontal divider w-0"></div>

                    {/* Email */}
                    {editableField === "email" ? (
                        <div className="input-container active">
                            <Input
                                type="email"
                                value={formData.email}
                                onChange={(e) => handleChange("email", e.target.value)}
                                onBlur={() => handleBlur("email", formData.email)}
                                autoFocus
                            />
                        </div>
                    ) : (
                        <span
                            className="cursor-pointer"
                            onDoubleClick={() => handleDoubleClick("email")}
                        >
                            {formData.email}
                        </span>
                    )}
                    <div className="divider-horizontal divider w-0"></div>

                    {/* Phone Number */}
                    {editableField === "phone_number" ? (
                        <div className="input-container active">
                            <Input
                                type="tel"
                                value={formData.phone_number}
                                onChange={(e) => handleChange("phone_number", e.target.value)}
                                onBlur={() => handleBlur("phone_number", formData.phone_number)}
                                autoFocus
                            />
                        </div>
                    ) : (
                        <span
                            className="cursor-pointer"
                            onDoubleClick={() => handleDoubleClick("phone_number")}
                        >
                            {formData.phone_number}
                        </span>
                    )}
                </div>
            </div>
        </>
    );
}
