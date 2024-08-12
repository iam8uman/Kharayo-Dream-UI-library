import Sidebar from "@/lib/layout/Sidebar";
import Topbar from "@/lib/layout/Topbar";

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
        <Sidebar />
        <div className="flex flex-col">
          <Topbar />
          {children}
        </div>
      </div>
    </section>
  );
}
