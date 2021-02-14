export default function AppLayout({ children }) {
  return (
    <>
      <div>
        <header className="bg-white shadow"></header>
        <main className="container mx-auto">{children}</main>
      </div>
    </>
  );
}
