"use client";

export default function QuoteForm() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const subject = encodeURIComponent(`Get a Free Quote — ${data.get("name")}`);
        const body = [
          `Client's Name / Company Name: ${data.get("name")}`,
          `Contact Number: ${data.get("phone")}`,
          `Address: ${data.get("address")}`,
          `Email Address: ${data.get("email")}`,
          "",
          `Quotation Details: ${data.get("details")}`,
        ].join("\n");
        window.location.href = `mailto:sales@huswelltrading.com?subject=${subject}&body=${encodeURIComponent(body)}`;
      }}
      className="grid grid-cols-1 gap-10 md:grid-cols-2"
    >
      <Field label="Client's name / company name" name="name" placeholder="Juan Dela Cruz Co." required />
      <Field label="Contact number" name="phone" placeholder="0917 000 0000" required />
      <Field label="Address" name="address" placeholder="City, Province" required />
      <Field label="Email address" name="email" type="email" placeholder="you@company.com" required />
      <div className="md:col-span-2">
        <label
          htmlFor="details"
          className="mb-4 block text-[11px] font-medium uppercase tracking-[0.22em] text-mute"
        >
          Quotation details
        </label>
        <textarea
          id="details"
          name="details"
          rows={5}
          required
          placeholder="Box description, size (L x W x H), quantity, finishing, and target date…"
          className="w-full resize-y border-b border-line bg-transparent py-3 text-base text-ink placeholder:text-mute focus:border-accent focus:outline-none"
        />
      </div>
      <div className="md:col-span-2 flex flex-col gap-4 sm:flex-row sm:items-center">
        <button type="submit" className="btn-solid-light">
          Submit
        </button>
        <p className="text-sm text-mute">
          We reply within one working day. For urgent orders, call{" "}
          <a href="tel:+639173183354" className="underline underline-offset-4 decoration-accent">
            +63 917 318 3354
          </a>
          .
        </p>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-4 block text-[11px] font-medium uppercase tracking-[0.22em] text-mute"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full border-b border-line bg-transparent py-3 text-base text-ink placeholder:text-mute focus:border-accent focus:outline-none"
      />
    </div>
  );
}