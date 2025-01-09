import { Navbar } from "../navigation/navbar";

export function Layout({ children }) {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1 p-4 bg-gray-100 mt-20 bg-dotted-gray-300 bg-dotted-spacing-4">{children}</main>
        </div>
    );
}
