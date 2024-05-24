import LandingHeader from "@/components/Landing-header";

export default function LandingLayout({ 
    children
 }: { 
    children: React.ReactNode
 }) {
    return(
        <main>
            <LandingHeader />
            {children}
        </main>
    );
}