import { Head, useForm } from '@inertiajs/react';

export default function Welcome() {

    const { post, processing } = useForm();

    const handleLogout = (e: any) => {
            e.preventDefault();

            // Optional: confirmation before logout
            if (!window.confirm("Are you sure you want to log out?")) {
                return;
            }

            try {
                // Send POST request to backend logout route
                post("/logout");
            } catch (error) {
                console.error("Unexpected error during logout:", error);
            }
        };

    return (
        <>
            <Head title="Welcome" />
            <div className="flex min-h-screen flex-col items-center bg-[#FDFDFC] p-6 text-[#1b1b18] lg:justify-center lg:p-8 dark:bg-[#0a0a0a]">
                <div className="flex w-full items-center justify-center opacity-100 transition-opacity duration-750 lg:grow starting:opacity-0">
                    <main className="flex w-full max-w-[335px] flex-col-reverse lg:max-w-4xl lg:flex-row">
                    </main>
                    <form onSubmit={handleLogout}>
                        <button
                        type="submit"
                        style={{
                            padding: "8px 16px",
                            backgroundColor: "#e53e3e",
                            color: "#fff",
                            border: "none",
                            borderRadius: "4px",
                            cursor: "pointer"
                        }}
                    >
                        Logout
                    </button>
                    </form>
                </div>
            </div>
        </>
    );
}
