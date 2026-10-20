/**
 * Everything that names or contacts the product lives here, so renaming the
 * site or changing the contact address is a one-file edit.
 */
export const site = {
  name: 'KitKeeper',
  tagline: 'Know where every piece of equipment is, and who has it.',
  contactEmail: 'daliaalymohamed@gmail.com',
  demoSubject: 'Demo request',
  /**
   * Base of the scan links in the example QR codes. The app encodes
   * `<app address>/scan/<item code>` in every label, so the examples do the
   * same. example.com is reserved for examples and safe to point at; switch it
   * to a real demo address once one exists.
   */
  exampleScanBaseUrl: 'https://inventory.example.com',
  /** YouTube id of the demo video (youtu.be/<id>). */
  demoVideoId: 'WO5dKLgwqD4',
};

export const mailtoDemo = `mailto:${site.contactEmail}?subject=${encodeURIComponent(
  `${site.demoSubject} – ${site.name}`,
)}`;
