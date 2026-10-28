
"use client";

import Link from "next/link";
import {
  Instagram,
  Facebook,
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowUpRight,
  Heart,
} from "lucide-react";

const contactDetails = {
  phone: "+91 9719767018",
  email: "info@mandaljewellers.in",
  address:
    "Mothorowala Road, Ajabpur Kalan, Near Railway Crossing, Dehradun, Uttarakhand 248121",

  // Search for the showroom directly on Google Maps.
  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=Mandal+Jewellers+Mothorowala+Road+Ajabpur+Kalan+Dehradun+Uttarakhand+248121",

  // Update these with your actual store timings.
  businessHours: "10am to 10pm",
};

const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/mandaljewellers.in/",
    Icon: Instagram,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/mandal.jeweller/",
    Icon: Facebook,
  },
];

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Shop All Jewellery", href: "/shop" },
  { label: "Our Collections", href: "/#collections" },
  { label: "Our Story", href: "/#story" },
  { label: "Our Craftsmanship", href: "/#craft" },
  { label: "Contact Us", href: "/#contact" },
];

export default function Footer() {
  const telephoneLink = `tel:${contactDetails.phone.replace(/[^\d+]/g, "")}`;

  return (
    <footer
      id="contact"
      className="bg-[#211b16] text-white"
    >
      {/* Main Footer */}
      <div className="container-shell grid grid-cols-1 gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.3fr_.8fr_1fr_1.2fr] lg:gap-12 lg:py-16">

        {/* Brand Section */}
        <div>
          <Link
            href="/"
            aria-label="Mandal Jewellers Home"
            className="inline-flex flex-col leading-none"
          >
            <span className="font-serif text-3xl tracking-[0.15em]">
              MANDAL
            </span>

            <span className="mt-2 text-[9px] tracking-[0.45em] text-gold">
              JEWELLERS
            </span>
          </Link>

          <p className="mt-5 max-w-xs text-sm leading-7 text-white/60">
            Jewellery that holds a story. Thoughtfully crafted pieces
            for your everyday moments and your forever memories.
            Discover timeless elegance with Mandal Jewellers.
          </p>

          {/* Social Media */}
          <div className="mt-6">
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-gold">
              Follow Us
            </h3>

            <div className="flex gap-3">
              {socialLinks.map(({ name, href, Icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit Mandal Jewellers on ${name}`}
                  title={name}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 transition-all duration-300 hover:border-gold hover:bg-gold hover:text-[#211b16]"
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-6 text-xs font-semibold uppercase tracking-[0.18em] text-gold">
            Explore
          </h3>

          <ul className="space-y-4 text-sm text-white/65">
            {quickLinks.map(({ label, href }) => (
              <li key={label}>
                <Link
                  href={href}
                  className="transition-colors hover:text-gold"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="mb-6 text-xs font-semibold uppercase tracking-[0.18em] text-gold">
            Get In Touch
          </h3>

          <div className="space-y-5 text-sm text-white/65">

            {/* Phone */}
            <a
              href={telephoneLink}
              className="group flex items-start gap-3"
              aria-label={`Call Mandal Jewellers at ${contactDetails.phone}`}
            >
              <Phone
                size={18}
                className="mt-0.5 shrink-0 text-gold"
              />

              <div>
                <span className="mb-1 block text-xs text-white/40">
                  Call Us
                </span>

                <span className="transition-colors group-hover:text-gold">
                  {contactDetails.phone}
                </span>
              </div>
            </a>

            {/* Email */}
            <a
              href={`mailto:${contactDetails.email}`}
              className="group flex items-start gap-3"
              aria-label={`Email Mandal Jewellers at ${contactDetails.email}`}
            >
              <Mail
                size={18}
                className="mt-0.5 shrink-0 text-gold"
              />

              <div className="min-w-0">
                <span className="mb-1 block text-xs text-white/40">
                  Email Us
                </span>

                <span className="break-all transition-colors group-hover:text-gold">
                  {contactDetails.email}
                </span>
              </div>
            </a>

            {/* Address */}
            <a
              href={contactDetails.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-3"
              aria-label="Get directions to Mandal Jewellers"
            >
              <MapPin
                size={18}
                className="mt-0.5 shrink-0 text-gold"
              />

              <div>
                <span className="mb-1 block text-xs text-white/40">
                  Visit Our Store
                </span>

                <span className="leading-6 transition-colors group-hover:text-gold">
                  {contactDetails.address}
                </span>

                <span className="mt-2 inline-flex items-center gap-1 text-xs text-gold">
                  Get Directions
                  <ArrowUpRight size={13} />
                </span>
              </div>
            </a>

            {/* Business Hours */}
            <div className="flex items-start gap-3">
              <Clock
                size={18}
                className="mt-0.5 shrink-0 text-gold"
              />

              <div>
                <span className="mb-1 block text-xs text-white/40">
                  Store Hours
                </span>

                <span className="leading-6">
                  {contactDetails.businessHours}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Location / Map */}
        <div>
          <h3 className="mb-6 text-xs font-semibold uppercase tracking-[0.18em] text-gold">
            Find Our Store
          </h3>

          <p className="mb-4 text-sm leading-6 text-white/60">
            Visit Mandal Jewellers and explore our collection in person.
            We look forward to welcoming you.
          </p>

          <a
            href={contactDetails.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open Mandal Jewellers location in Google Maps"
            className="group flex min-h-44 flex-col items-center justify-center rounded-sm border border-white/10 bg-white/[0.04] p-5 text-center transition-all duration-300 hover:border-gold/50 hover:bg-white/[0.07]"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-gold/40 text-gold transition-colors group-hover:bg-gold group-hover:text-[#211b16]">
              <MapPin size={23} />
            </div>

            <span className="font-serif text-lg">
              Visit Our Showroom
            </span>

            <span className="mt-2 inline-flex items-center gap-2 text-xs text-gold">
              Open Google Maps
              <ArrowUpRight size={14} />
            </span>
          </a>

          <a
            href={telephoneLink}
            className="mt-4 inline-flex w-full items-center justify-center gap-2 border border-gold/50 px-4 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-gold transition-colors hover:bg-gold hover:text-[#211b16]"
          >
            <Phone size={15} />
            Call Our Store
          </a>

          {/* <a
            href={`mailto:${contactDetails.email}`}
            className="mt-3 inline-flex w-full items-center justify-center gap-2 border border-white/15 px-4 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-white/75 transition-colors hover:border-gold hover:text-gold"
          >
            <Mail size={15} />
            Email Our Store
          </a> */}
        </div>
      </div>

      
      <div className="border-t border-white/10">
        <div className="container-shell flex flex-col gap-4 py-5 text-[11px] tracking-wide text-white/45 sm:flex-row sm:items-center sm:justify-between">

          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} Mandal Jewellers.
            All rights reserved.
          </p>

          <p className="flex items-center justify-center gap-1.5">
            Made with
            <Heart
              size={12}
              className="fill-gold text-gold"
            />
            for jewellery lovers.
          </p>

          <div className="flex flex-wrap justify-center gap-5">
            <Link
              href="/privacy-policy"
              className="transition-colors hover:text-gold"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="transition-colors hover:text-gold"
            >
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
