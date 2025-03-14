import DashboardProvider from "./provider";

export default function DashboardLayout({ children }) {
    return (
        <>
            <DashboardProvider>
                {children}
            </DashboardProvider>
        </>
    )
}