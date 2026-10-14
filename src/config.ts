/**
 * Everything that names or contacts the product lives here, so renaming the
 * site or changing the contact address is a one-file edit.
 */
export const site = {
  name: 'KitKeeper',
  tagline: 'Know where every piece of equipment is, and who has it.',
  contactEmail: 'daliaalymohamed@gmail.com',
  demoSubject: 'Demo request',
};

export const mailtoDemo = `mailto:${site.contactEmail}?subject=${encodeURIComponent(
  `${site.demoSubject} – ${site.name}`,
)}`;
