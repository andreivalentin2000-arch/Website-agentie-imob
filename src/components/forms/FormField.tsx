import { InputHTMLAttributes, ReactNode, SelectHTMLAttributes, TextareaHTMLAttributes } from "react";

const labelClass = "mb-1.5 block font-body text-[11px] uppercase tracking-widest2 text-brown/50";
const fieldClass =
  "w-full border border-brown/20 bg-cream-paper px-4 py-3 font-body text-sm text-brown placeholder:text-brown/35 focus:border-gold";
const errorClass = "mt-1.5 font-body text-xs text-[#9C4B3F]";

export function TextField({
  label,
  error,
  ...rest
}: { label: string; error?: string } & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="block">
      <span className={labelClass}>{label}</span>
      <input className={fieldClass} {...rest} />
      {error && <span className={errorClass}>{error}</span>}
    </label>
  );
}

export function SelectField({
  label,
  error,
  children,
  ...rest
}: { label: string; error?: string; children: ReactNode } & SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <label className="block">
      <span className={labelClass}>{label}</span>
      <select className={fieldClass} {...rest}>
        {children}
      </select>
      {error && <span className={errorClass}>{error}</span>}
    </label>
  );
}

export function TextAreaField({
  label,
  error,
  ...rest
}: { label: string; error?: string } & TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <label className="block">
      <span className={labelClass}>{label}</span>
      <textarea className={fieldClass} {...rest} />
      {error && <span className={errorClass}>{error}</span>}
    </label>
  );
}

export function CheckboxField({
  label,
  checked,
  onChange,
  error,
}: {
  label: ReactNode;
  checked: boolean;
  onChange: (checked: boolean) => void;
  error?: string;
}) {
  return (
    <label className="flex items-start gap-3">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="mt-1 h-4 w-4 shrink-0 accent-[#B68A4E]"
      />
      <span className="font-body text-sm leading-relaxed text-brown/70">{label}</span>
      {error && <span className={errorClass}>{error}</span>}
    </label>
  );
}
