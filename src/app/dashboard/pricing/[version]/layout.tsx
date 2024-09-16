import VersionLayout from "./versionLayout";

export default function NavbarinitLayout({
    children,
  }:{
    children: React.ReactNode
  }) {
    return (
      <>
        <section className="min-h-screen flex flex-col">
          <main className="flex-grow">
            <VersionLayout />
            {children}
          </main>
        </section>
      </>
    );
  }