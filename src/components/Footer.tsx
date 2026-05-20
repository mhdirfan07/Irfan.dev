export default function Footer() {
  return (
    <footer className="flex flex-col md:flex-row justify-between items-center p-4 border-t border-[var(--color-border)] bg-[var(--color-background)]">
      <div className="font-mono text-[10px] text-[var(--color-muted)] uppercase tracking-widest mb-4 md:mb-0">
        &copy;2025_IRFN.DEV — BENGKULU, ID
      </div>
      <div className="flex gap-6 font-mono text-[10px] text-[var(--color-muted)] uppercase tracking-widest">
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-foreground)] transition-colors">GITHUB</a>
        <a href="https://www.linkedin.com/in/muhammad-irfan-0ba9b326b/" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-foreground)] transition-colors">LINKEDIN</a>
        <a href="#about" className="hover:text-[var(--color-foreground)] transition-colors">ABOUT</a>
        <a href="#contact" className="hover:text-[var(--color-foreground)] transition-colors">CONTACT</a>
      </div>
    </footer>
  );
}
