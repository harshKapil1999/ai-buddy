import MainHeader from "@/components/main-header";
import Sidebar from "@/components/sidebar";

export default function DashboardLayout({ 
    children
 }: { 
    children: React.ReactNode
 }) {
    return (
        <main className="w-full flex h-full min-h-screen">
            <div className="hidden md:flex w-72 h-full border-r">
              <Sidebar />  
            </div>
            <div className="w-full h-full flex flex-col ">
                <MainHeader />
                {children}
            </div>
            
        </main>
    );
}