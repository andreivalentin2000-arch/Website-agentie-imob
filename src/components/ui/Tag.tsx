export default function Tag({ children }: { children: string }) {
  return (
    <span className="inline-block border border-olive/30 bg-olive/5 px-3 py-1 text-[11px] uppercase tracking-wide text-olive font-body">
      {children}
    </span>
  );
}
