"use client";

import { useActionState } from "react";
import { submitContact, type ContactFormState } from "@/app/contact/actions";
import { serviceGroups } from "@/content/services";
import { cn } from "@/lib/cn";
import { Icon } from "@/components/ui/Icon";
import styles from "./contact.module.css";

const initialState: ContactFormState = { status: "idle" };

export function ContactForm() {
  const [state, formAction, pending] = useActionState(submitContact, initialState);
  const errors = state.errors ?? {};
  const values = state.values ?? {};

  if (state.status === "success") {
    return (
      <div className={styles.success} role="status">
        <span className={styles.successIcon}>
          <Icon name="check" size={28} />
        </span>
        <h2>Message sent!</h2>
        <p>{state.message}</p>
      </div>
    );
  }

  return (
    <form action={formAction} className={styles.form} noValidate>
      <div className={styles.row}>
        <Field
          label="Your name"
          name="name"
          error={errors.name}
          defaultValue={values.name}
          autoComplete="name"
          required
        />
        <Field
          label="Email address"
          name="email"
          type="email"
          error={errors.email}
          defaultValue={values.email}
          autoComplete="email"
          required
        />
      </div>
      <div className={styles.row}>
        <Field
          label="Phone (optional)"
          name="phone"
          type="tel"
          error={errors.phone}
          defaultValue={values.phone}
          autoComplete="tel"
        />
        <div className={styles.field}>
          <label htmlFor="service" className={styles.label}>
            Service you&rsquo;re interested in
          </label>
          <select id="service" name="service" className={styles.input} defaultValue={values.service ?? ""}>
            <option value="">Not sure yet</option>
            {serviceGroups.map((group) => (
              <optgroup key={group.id} label={group.title}>
                {group.services.map((service) => (
                  <option key={service.slug} value={service.title}>
                    {service.title}
                  </option>
                ))}
              </optgroup>
            ))}
          </select>
        </div>
      </div>
      <div className={styles.field}>
        <label htmlFor="message" className={styles.label}>
          How can we help? <span aria-hidden="true">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          className={cn(styles.input, styles.textarea, errors.message && styles.invalid)}
          defaultValue={values.message}
          placeholder="Tell us about your business and what you'd like to achieve…"
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          required
        />
        {errors.message && (
          <p id="message-error" className={styles.error}>
            {errors.message}
          </p>
        )}
      </div>

      {/* Honeypot field for spam bots — hidden from people and screen readers */}
      <div className={styles.honeypot} aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {state.status === "error" && state.message && (
        <p className={styles.formError} role="alert">
          {state.message}
        </p>
      )}

      <button type="submit" className={styles.submit} disabled={pending}>
        {pending ? "Sending…" : "Send message"}
        <Icon name="send" size={18} />
      </button>
      <p className={styles.note}>We&rsquo;ll only use your details to reply to your enquiry.</p>
    </form>
  );
}

type FieldProps = {
  label: string;
  name: string;
  type?: string;
  error?: string;
  defaultValue?: string;
  autoComplete?: string;
  required?: boolean;
};

function Field({ label, name, type = "text", error, defaultValue, autoComplete, required }: FieldProps) {
  return (
    <div className={styles.field}>
      <label htmlFor={name} className={styles.label}>
        {label} {required && <span aria-hidden="true">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        defaultValue={defaultValue}
        autoComplete={autoComplete}
        required={required}
        className={cn(styles.input, error && styles.invalid)}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${name}-error` : undefined}
      />
      {error && (
        <p id={`${name}-error`} className={styles.error}>
          {error}
        </p>
      )}
    </div>
  );
}
