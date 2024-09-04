import VersionLayout from "./versionLayout";

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="">
      {/* Include shared UI here e.g. a header or sidebar */}
      {/* <VersionLayout /> */}
      {children}
    </section>
  );
}
