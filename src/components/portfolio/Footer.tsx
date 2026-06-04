export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p>Built by <span className="text-foreground font-medium">Maheshwaree Talekar</span></p>
        <p>© {new Date().getFullYear()} · All rights reserved</p>
      </div>
    </footer>
  );
}
