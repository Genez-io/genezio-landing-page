import { useState } from "react";
import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { PolymetSEO } from "@/polymet/components/polymet-seo";
import { isWorkEmail } from "@/lib/work-email";
import { CheckIcon, Loader2Icon, CheckCircle2Icon } from "lucide-react";

/* ─────────────────────────  form options  ───────────────────────── */

const COMPANY_REVENUE_OPTIONS = [
  "Less than $1M",
  "$1M - $10M",
  "$10M - $50M",
  "$50M - $250M",
  "$250M - $1B",
  "More than $1B",
];

const HEARD_ABOUT_OPTIONS = [
  "Google / AI search",
  "ChatGPT, Gemini or another AI assistant",
  "LinkedIn",
  "Referral or word of mouth",
  "Event or conference",
  "Newsletter or blog",
  "Press or podcast",
  "Other",
];

/** Country dial codes offered in the phone field, most common markets first. */
const DIAL_CODES = [
  { code: "+40", flag: "🇷🇴", label: "Romania" },
  { code: "+1", flag: "🇺🇸", label: "United States / Canada" },
  { code: "+44", flag: "🇬🇧", label: "United Kingdom" },
  { code: "+49", flag: "🇩🇪", label: "Germany" },
  { code: "+33", flag: "🇫🇷", label: "France" },
  { code: "+34", flag: "🇪🇸", label: "Spain" },
  { code: "+39", flag: "🇮🇹", label: "Italy" },
  { code: "+31", flag: "🇳🇱", label: "Netherlands" },
  { code: "+32", flag: "🇧🇪", label: "Belgium" },
  { code: "+41", flag: "🇨🇭", label: "Switzerland" },
  { code: "+43", flag: "🇦🇹", label: "Austria" },
  { code: "+45", flag: "🇩🇰", label: "Denmark" },
  { code: "+46", flag: "🇸🇪", label: "Sweden" },
  { code: "+47", flag: "🇳🇴", label: "Norway" },
  { code: "+48", flag: "🇵🇱", label: "Poland" },
  { code: "+351", flag: "🇵🇹", label: "Portugal" },
  { code: "+353", flag: "🇮🇪", label: "Ireland" },
  { code: "+358", flag: "🇫🇮", label: "Finland" },
  { code: "+30", flag: "🇬🇷", label: "Greece" },
  { code: "+36", flag: "🇭🇺", label: "Hungary" },
  { code: "+359", flag: "🇧🇬", label: "Bulgaria" },
  { code: "+420", flag: "🇨🇿", label: "Czechia" },
  { code: "+61", flag: "🇦🇺", label: "Australia" },
  { code: "+971", flag: "🇦🇪", label: "United Arab Emirates" },
  { code: "+972", flag: "🇮🇱", label: "Israel" },
  { code: "+91", flag: "🇮🇳", label: "India" },
  { code: "+65", flag: "🇸🇬", label: "Singapore" },
  { code: "+81", flag: "🇯🇵", label: "Japan" },
  { code: "+55", flag: "🇧🇷", label: "Brazil" },
];

const SELLING_POINTS = [
  "Request a demo",
  "Speak with an AI visibility specialist",
  "Explore an enterprise plan",
];

/* ─────────────────────────  field helpers  ───────────────────────── */

const FIELD_CLASS =
  "h-12 bg-white/5 border-white/10 text-white placeholder:text-white/35 rounded-xl focus:border-white/25 focus-visible:ring-0";

const SELECT_CLASS =
  "h-12 w-full appearance-none rounded-xl border border-white/10 bg-white/5 px-3 pr-10 text-sm text-white outline-none transition-colors focus:border-white/25 disabled:cursor-not-allowed disabled:opacity-50 [&>option]:bg-[#0A0A0C] [&>option]:text-white";

function FieldLabel({
  htmlFor,
  children,
  required = false,
}: {
  htmlFor: string;
  children: React.ReactNode;
  required?: boolean;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="mb-2 block text-sm font-medium text-white/80"
    >
      {children}
      {required && <span className="ml-0.5 text-red-400">*</span>}
    </label>
  );
}

/** Native select wrapped so it keeps the site's chevron + dark styling. */
function SelectField({
  id,
  value,
  onChange,
  required,
  placeholder,
  options,
}: {
  id: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  placeholder: string;
  options: string[];
}) {
  return (
    <div className="relative">
      <select
        id={id}
        name={id}
        value={value}
        required={required}
        onChange={(e) => onChange(e.target.value)}
        className={`${SELECT_CLASS} ${value ? "text-white" : "text-white/35"}`}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <svg
        aria-hidden="true"
        viewBox="0 0 20 20"
        className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M5.23 7.21a.75.75 0 011.06.02L10 11.17l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
}

/* ─────────────────────────────  page  ───────────────────────────── */

const EMPTY_FORM = {
  firstName: "",
  lastName: "",
  email: "",
  companyName: "",
  companyRevenue: "",
  dialCode: "+40",
  phone: "",
  heardAbout: "",
  message: "",
};

export function ContactSales() {
  const [form, setForm] = useState(EMPTY_FORM);
  const [error, setError] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success">(
    "idle"
  );

  const setField = (field: keyof typeof EMPTY_FORM) => (value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (error) setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "submitting") return;

    if (!isWorkEmail(form.email)) {
      setError(
        "Please use your work email. Free inboxes like Gmail or Outlook aren't accepted."
      );
      return;
    }

    setError("");
    setStatus("submitting");
    try {
      const res = await fetch("/api/contact-sales", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: form.firstName.trim(),
          lastName: form.lastName.trim(),
          email: form.email.trim(),
          companyName: form.companyName.trim(),
          companyRevenue: form.companyRevenue,
          phone: form.phone.trim() ? `${form.dialCode} ${form.phone.trim()}` : "",
          heardAbout: form.heardAbout,
          message: form.message.trim(),
        }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setError(
          (data && data.error) || "Something went wrong. Please try again."
        );
        setStatus("idle");
        return;
      }
      setStatus("success");
    } catch {
      setError("Something went wrong. Please try again.");
      setStatus("idle");
    }
  };

  return (
    <>
      <PolymetSEO
        title="Contact sales | Genezio"
        description="Talk to the Genezio team about a demo, an enterprise plan, or how AI assistants recommend your brand. Tell us about your company and we'll get back to you."
        canonicalPath="/contact-sales/"
      />

      <section className="relative overflow-hidden bg-[#050506] pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="relative z-10 mx-auto grid max-w-6xl gap-12 px-6 md:px-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)] lg:gap-20 lg:px-16">
          {/* ── left column: pitch ── */}
          <div className="lg:pt-2">
            <h1 className="mb-8 text-4xl font-semibold leading-tight text-white md:text-5xl">
              Contact sales
            </h1>

            <ul className="space-y-4">
              {SELLING_POINTS.map((point) => (
                <li key={point} className="flex items-center gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-emerald-400">
                    <CheckIcon className="h-4 w-4 text-black" strokeWidth={3} />
                  </span>
                  <span className="text-base text-white/85">{point}</span>
                </li>
              ))}
            </ul>

            <div className="mt-12 border-t border-white/10 pt-8">
              <p className="text-sm leading-relaxed text-white/45">
                Need help with onboarding, product questions, or technical
                issues?
              </p>
              <a
                href="mailto:support@genez.io"
                className="mt-1 inline-block text-sm font-medium text-white/70 underline decoration-white/20 underline-offset-4 transition-colors hover:text-white"
              >
                Contact support
              </a>
            </div>
          </div>

          {/* ── right column: form ── */}
          <div>
            {status === "success" ? (
              <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-[#0A0A0C] p-6">
                <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg border border-emerald-500/30 bg-emerald-500/15">
                  <CheckCircle2Icon className="h-5 w-5 text-emerald-400" />
                </span>
                <div>
                  <p className="font-semibold text-white">Thanks, we got it</p>
                  <p className="mt-1 text-sm text-white/60">
                    Someone from the Genezio team will reply to{" "}
                    <span className="font-medium text-white/80">
                      {form.email}
                    </span>{" "}
                    shortly.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate={false}>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <FieldLabel htmlFor="firstName" required>
                      First name
                    </FieldLabel>
                    <Input
                      id="firstName"
                      name="firstName"
                      autoComplete="given-name"
                      placeholder="Jane"
                      required
                      value={form.firstName}
                      onChange={(e) => setField("firstName")(e.target.value)}
                      className={FIELD_CLASS}
                    />
                  </div>
                  <div>
                    <FieldLabel htmlFor="lastName" required>
                      Last name
                    </FieldLabel>
                    <Input
                      id="lastName"
                      name="lastName"
                      autoComplete="family-name"
                      placeholder="Doe"
                      required
                      value={form.lastName}
                      onChange={(e) => setField("lastName")(e.target.value)}
                      className={FIELD_CLASS}
                    />
                  </div>
                </div>

                <div>
                  <FieldLabel htmlFor="email" required>
                    Email
                  </FieldLabel>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="jane@company.com"
                    required
                    aria-invalid={!!error}
                    value={form.email}
                    onChange={(e) => setField("email")(e.target.value)}
                    className={`${FIELD_CLASS} ${
                      error ? "border-red-500/60 focus:border-red-500/60" : ""
                    }`}
                  />
                </div>

                <div>
                  <FieldLabel htmlFor="companyName" required>
                    Company name
                  </FieldLabel>
                  <Input
                    id="companyName"
                    name="companyName"
                    autoComplete="organization"
                    placeholder="Your company name"
                    required
                    value={form.companyName}
                    onChange={(e) => setField("companyName")(e.target.value)}
                    className={FIELD_CLASS}
                  />
                </div>

                <div>
                  <FieldLabel htmlFor="companyRevenue" required>
                    Company revenue
                  </FieldLabel>
                  <SelectField
                    id="companyRevenue"
                    value={form.companyRevenue}
                    onChange={setField("companyRevenue")}
                    required
                    placeholder="Select..."
                    options={COMPANY_REVENUE_OPTIONS}
                  />
                </div>

                <div>
                  <FieldLabel htmlFor="phone">Phone number</FieldLabel>
                  <div className="flex gap-2">
                    <div className="relative w-32 flex-shrink-0">
                      <select
                        id="dialCode"
                        name="dialCode"
                        aria-label="Country dial code"
                        value={form.dialCode}
                        onChange={(e) => setField("dialCode")(e.target.value)}
                        className={SELECT_CLASS}
                      >
                        {DIAL_CODES.map((country) => (
                          <option
                            key={`${country.code}-${country.label}`}
                            value={country.code}
                          >
                            {country.flag} {country.code}
                          </option>
                        ))}
                      </select>
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 20 20"
                        className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06.02L10 11.17l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel-national"
                      placeholder="712 345 678"
                      value={form.phone}
                      onChange={(e) => setField("phone")(e.target.value)}
                      className={`${FIELD_CLASS} flex-1`}
                    />
                  </div>
                </div>

                <div>
                  <FieldLabel htmlFor="heardAbout">
                    How did you hear about us?
                  </FieldLabel>
                  <SelectField
                    id="heardAbout"
                    value={form.heardAbout}
                    onChange={setField("heardAbout")}
                    placeholder="Select..."
                    options={HEARD_ABOUT_OPTIONS}
                  />
                </div>

                <div>
                  <FieldLabel htmlFor="message">How can we help?</FieldLabel>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="I'm interested in a demo..."
                    value={form.message}
                    onChange={(e) => setField("message")(e.target.value)}
                    className="min-h-[120px] rounded-xl border-white/10 bg-white/5 text-white placeholder:text-white/35 focus-visible:ring-0 focus:border-white/25"
                  />
                </div>

                {error && (
                  <p role="alert" className="text-sm text-red-400">
                    {error}
                  </p>
                )}

                <Button
                  type="submit"
                  size="lg"
                  disabled={status === "submitting"}
                  className="h-12 w-full rounded-xl bg-emerald-400 text-sm font-semibold text-black transition-all hover:bg-emerald-300 disabled:opacity-70 sm:w-auto sm:px-10"
                >
                  {status === "submitting" ? (
                    <>
                      <Loader2Icon className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Talk to sales"
                  )}
                </Button>

                <p className="text-xs leading-relaxed text-white/35">
                  By submitting this form you agree to our{" "}
                  <Link
                    to="/privacy-policy"
                    className="underline decoration-white/20 underline-offset-2 hover:text-white/60"
                  >
                    Privacy Policy
                  </Link>
                  .
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactSales;
