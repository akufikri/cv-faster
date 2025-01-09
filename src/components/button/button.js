export function Button({ type = "primary", size = "md", onClick, children }) {
    const baseClass = "btn"; // Base class untuk semua tombol
    const typeClass = {
        primary: "btn-primary",
        secondary: "btn-secondary",
        success: "btn-success",
        danger: "btn-error",
        warning: "btn-warning",
        info: "btn-info",
        ghost: "btn-ghost",
        link: "btn-link"
    }[type];

    const sizeClass = {
        sm: "btn-sm",
        md: "btn-md",
        lg: "btn-lg"
    }[size];

    return (
        <button
            className={`${baseClass} ${typeClass} ${sizeClass}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
}
