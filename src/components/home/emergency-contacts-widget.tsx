import Link from "next/link";
import { EmergencyContactCard } from "@/components/content/emergency-contact-card";
import { getEmergencyContacts } from "@/lib/data";

export function EmergencyContactsWidget() {
  const contacts = getEmergencyContacts().items.slice(0, 4);

  return (
    <section className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
      <div className="flex items-baseline justify-between">
        <h2 className="text-2xl font-semibold">Emergency Contacts</h2>
        <Link href="/safety" className="text-sm font-medium text-primary hover:underline">
          View all
        </Link>
      </div>
      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        {contacts.map((contact) => (
          <EmergencyContactCard key={contact.id} contact={contact} />
        ))}
      </div>
    </section>
  );
}
