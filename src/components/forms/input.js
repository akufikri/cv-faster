export function Input({
    type = "text",
    placeholder = "",
    value,
    onChange,
    className = "",
    label = "",
    required = false
}) {
    return (
        <div className="form-control w-full">
            {label && (
                <label className="label">
                    <span className="label-text">{label}</span>
                </label>
            )}
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className={`input w-full input-sm border-dashed border-2 input-bordered ${className}`}
                required={required}
            />
        </div>
    );
}
