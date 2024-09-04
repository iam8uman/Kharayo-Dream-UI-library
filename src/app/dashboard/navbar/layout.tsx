import PreLayout from "./pre-layout";

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <PreLayout />
      <div className="p-4">{children}</div>
    </section>
  );
}
