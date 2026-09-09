"use client";

import { useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import { cn } from "@/lib/utils";
import { reservation } from "@/content/lounge-copy";
import { Mail, Phone, Calendar, Clock, Users, MapPin, Sparkles, Check, Loader2 } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const fieldIcons = {
  name: undefined,
  email: Mail,
  phone: Phone,
  date: Calendar,
  time: Clock,
  partySize: Users,
  occasion: Sparkles,
  preferences: Sparkles,
  membership: Sparkles,
};

function FormField({ 
  label, 
  placeholder, 
  type = "text", 
  value, 
  onChange, 
  required,
  icon: Icon,
  options,
  select = false
}: {
  label: string;
  placeholder?: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  required?: boolean;
  icon?: React.ComponentType<{ className?: string }>;
  options?: string[];
  select?: boolean;
}) {
  const [focused, setFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const selectRef = useRef<HTMLSelectElement | null>(null);

  useEffect(() => {
    const el = select ? selectRef.current : inputRef.current;
    if (el) {
      gsap.fromTo(
        el,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 95%",
          },
        }
      );
    }
  }, [select]);

  return (
    <div className="relative group">
      <label className={cn(
        "absolute left-4 top-1/2 -translate-y-1/2 text-foreground-muted text-sm transition-all duration-300 pointer-events-none",
        (focused || value) && "top-0 -translate-y-0 text-[11px] tracking-widest uppercase text-gold"
      )}>
        {label} {required && <span className="text-gold">*</span>}
      </label>
      {Icon && (
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground-subtle transition-colors duration-300 group-focus-within:text-gold">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </div>
      )}
      {select ? (
        <select
          ref={selectRef}
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          required={required}
          className={cn(
            "w-full bg-background-card border border-border rounded-lg px-4 py-3.5 pl-12 pr-10 text-foreground placeholder-foreground-subtle transition-all duration-300",
            "focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold",
            "hover:border-gold/30"
          )}
        >
          <option value="">Select...</option>
          {options?.map(opt => <option key={opt} value={opt}>{opt}</option>)}
        </select>
      ) : (
        <input
          ref={inputRef}
          type={type}
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder={placeholder}
          required={required}
          className={cn(
            "w-full bg-background-card border border-border rounded-lg px-4 py-3.5 pl-12 pr-4 text-foreground placeholder-foreground-subtle transition-all duration-300",
            "focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold",
            "hover:border-gold/30"
          )}
        />
      )}
    </div>
  );
}

import { useRef } from "react";

type FormData = {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  partySize: string;
  occasion: string;
  preferences: string;
  membership: string;
};

export function LoungeReservation() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    partySize: "",
    occasion: "",
    preferences: "",
    membership: "First Visit",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    const data = formData as FormData;
    if (!data.name.trim()) newErrors['name'] = "Name is required";
    if (!data.email.trim()) newErrors['email'] = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) newErrors['email'] = "Invalid email format";
    if (!data.phone.trim()) newErrors['phone'] = "Phone is required";
    if (!data.date) newErrors['date'] = "Date is required";
    if (!data.time) newErrors['time'] = "Time is required";
    if (!data.partySize) newErrors['partySize'] = "Party size is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setSubmitting(false);
    setSubmitted(true);
    setFormData({
      name: "", email: "", phone: "", date: "", time: "", partySize: "",
      occasion: "", preferences: "", membership: "First Visit",
    });
  };

  useGSAP((ctx: gsap.Context) => {
    gsap.context(() => {
      gsap.fromTo(
        ".reservation-header .reveal-up",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".reservation-header",
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        ".info-card",
        { x: -60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".reservation-info",
            start: "top 85%",
          },
        }
      );
    }, ctx);
  }, []);

  return (
    <section
      id="reservation"
      className="relative py-24 md:py-32 lg:py-40 px-4 md:px-6 lg:px-8"
      aria-labelledby="reservation-headline"
    >
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-gold/5 blur-[300px]" />
      </div>

      <div className="relative mx-auto max-w-[1400px]">
        <div className="reservation-header text-center mb-16 md:mb-20">
          <span className="reveal-up inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase text-gold mb-6">
            <Sparkles className="h-4 w-4" aria-hidden="true" />
            {reservation.subheadline}
          </span>
          <h2 id="reservation-headline" className="reveal-up font-display text-4xl md:text-5xl lg:text-6xl font-medium leading-tight tracking-tight text-foreground">
            {reservation.headline}
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-10 md:gap-12">
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <div className="grid sm:grid-cols-2 gap-6">
                <FormField
                  label={reservation.form.name.label}
                  placeholder={reservation.form.name.placeholder}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  icon={fieldIcons.name}
                />
                <FormField
                  label={reservation.form.email.label}
                  placeholder={reservation.form.email.placeholder}
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  icon={fieldIcons.email}
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <FormField
                  label={reservation.form.phone.label}
                  placeholder={reservation.form.phone.placeholder}
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  icon={fieldIcons.phone}
                />
                <FormField
                  label={reservation.form.partySize.label}
                  placeholder={reservation.form.partySize.placeholder}
                  value={formData.partySize}
                  onChange={(e) => setFormData({ ...formData, partySize: e.target.value })}
                  required
                  icon={fieldIcons.partySize}
                  select
                  options={["1", "2", "3", "4", "5", "6", "7+ (Private Dining)"].map(String)}
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <FormField
                  label={reservation.form.date.label}
                  placeholder={reservation.form.date.placeholder}
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  required
                  icon={fieldIcons.date}
                />
                <FormField
                  label={reservation.form.time.label}
                  placeholder={reservation.form.time.placeholder}
                  type="time"
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  required
                  icon={fieldIcons.time}
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <FormField
                  label={reservation.form.membership.label}
                  value={formData.membership}
                  onChange={(e) => setFormData({ ...formData, membership: e.target.value })}
                  icon={fieldIcons.membership}
                  select
                  options={reservation.form.membership.options}
                />
                <FormField
                  label={reservation.form.occasion.label}
                  placeholder={reservation.form.occasion.placeholder}
                  value={formData.occasion}
                  onChange={(e) => setFormData({ ...formData, occasion: e.target.value })}
                  icon={fieldIcons.occasion}
                />
              </div>

              <FormField
                label={reservation.form.preferences.label}
                placeholder={reservation.form.preferences.placeholder}
                value={formData.preferences}
                onChange={(e) => setFormData({ ...formData, preferences: e.target.value })}
                icon={fieldIcons.preferences}
              />

              <button
                type="submit"
                disabled={submitting || submitted}
                className={cn(
                  "w-full rounded-lg bg-gradient-to-r from-gold to-amber px-8 py-4 text-base font-semibold text-background transition-all",
                  "hover:shadow-gold hover:scale-[1.02]",
                  "disabled:opacity-50 disabled:cursor-not-allowed",
                  "flex items-center justify-center gap-3"
                )}
              >
                {submitting && <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />}
                {submitted ? (
                  <>
                    <Check className="h-5 w-5" aria-hidden="true" />
                    Reservation Requested
                  </>
                ) : (
                  reservation.cta
                )}
              </button>

              {submitted && (
                <p className="text-center text-foreground-muted text-sm">
                  We'll confirm within 2 hours. Thank you.
                </p>
              )}

              <p className="text-center text-foreground-subtle text-sm">
                {reservation.note}
              </p>
            </form>
          </div>

          <div className="reservation-info space-y-8">
            <div className="info-card rounded-2xl bg-background-card border border-border p-6 md:p-8">
              <h3 className="font-display text-xl font-medium tracking-tight text-foreground mb-6 flex items-center gap-2">
                <MapPin className="h-5 w-5 text-gold" aria-hidden="true" />
                {reservation.location.label}
              </h3>
              <address className="not-italic text-foreground-muted leading-relaxed space-y-2">
                <p>{reservation.location.address}</p>
                <p>{reservation.location.city}</p>
                <p className="text-gold/70 text-sm">{reservation.location.note}</p>
              </address>
            </div>

            <div className="info-card rounded-2xl bg-background-card border border-border p-6 md:p-8">
              <h3 className="font-display text-xl font-medium tracking-tight text-foreground mb-6 flex items-center gap-2">
                <Clock className="h-5 w-5 text-gold" aria-hidden="true" />
                {reservation.hours.label}
              </h3>
              <dl className="space-y-3 text-foreground-muted">
                {reservation.hours.days.map((day) => (
                  <div key={day.day} className="flex justify-between gap-4">
                    <dt className="font-medium text-foreground">{day.day}</dt>
                    <dd className="text-right font-mono">{day.time}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}