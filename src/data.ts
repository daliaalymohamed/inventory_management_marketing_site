/**
 * Page content. Every claim here maps to a feature the product actually has —
 * keep it that way when editing: no invented customers, numbers or certifications.
 */

export type HistoryEntry = { when: string; what: string };

export type Industry = {
  id: string;
  label: string;
  pitch: string;
  examples: string[];
  item: {
    name: string;
    code: string;
    category: string;
    location: string;
    status: string;
    holder: string;
    history: HistoryEntry[];
  };
};

export const industries: Industry[] = [
  {
    id: 'companies',
    label: 'Companies',
    pitch: 'Laptops, phones and monitors handed to staff, and back again when people leave.',
    examples: ['Laptops', 'Phones', 'Monitors', 'Access cards'],
    item: {
      name: 'Laptop – 14" ultrabook',
      code: 'IT-00418',
      category: 'IT equipment › Laptops',
      location: 'Head office · IT store',
      status: 'Assigned',
      holder: 'Finance team',
      history: [
        { when: 'Today', what: 'Assigned to Finance team' },
        { when: '3 days ago', what: 'Assignment approved' },
        { when: '2 weeks ago', what: 'Returned in working condition' },
      ],
    },
  },
  {
    id: 'schools',
    label: 'Schools & universities',
    pitch: 'Lab equipment, tablets and projectors that move between classrooms and students.',
    examples: ['Microscopes', 'Tablets', 'Projectors', 'Lab kits'],
    item: {
      name: 'Microscope – binocular',
      code: 'LAB-0072',
      category: 'Science lab › Microscopes',
      location: 'Biology lab 2 · Cabinet B',
      status: 'Assigned',
      holder: 'Year 10 biology',
      history: [
        { when: 'Today', what: 'Assigned to Year 10 biology' },
        { when: 'Last week', what: 'Returned in working condition' },
        { when: 'Last month', what: 'Returned after maintenance' },
      ],
    },
  },
  {
    id: 'healthcare',
    label: 'Hospitals & clinics',
    pitch: 'Shared devices that must be found fast and checked before they go back into use.',
    examples: ['Infusion pumps', 'Wheelchairs', 'Monitors', 'Scanners'],
    item: {
      name: 'Infusion pump',
      code: 'MED-1290',
      category: 'Medical devices › Pumps',
      location: 'Ward 4 · Equipment room',
      status: 'Maintenance',
      holder: 'Biomedical engineering',
      history: [
        { when: 'Today', what: 'Returned, marked for maintenance' },
        { when: 'Yesterday', what: 'Return requested by Ward 4' },
        { when: 'Last week', what: 'Assigned to Ward 4' },
      ],
    },
  },
  {
    id: 'construction',
    label: 'Construction & field work',
    pitch: 'Tools and machines spread across sites, crews and vans.',
    examples: ['Power tools', 'Generators', 'Safety gear', 'Measuring kit'],
    item: {
      name: 'Rotary hammer drill',
      code: 'TL-2207',
      category: 'Power tools › Drills',
      location: 'Main yard · Tool store',
      status: 'Assigned',
      holder: 'Site crew B',
      history: [
        { when: 'Today', what: 'Reassigned to Site crew B' },
        { when: 'Monday', what: 'Assigned to Site crew A' },
        { when: 'Last month', what: 'Purchased from vendor, added to stock' },
      ],
    },
  },
  {
    id: 'media',
    label: 'Media & events',
    pitch: 'Cameras, lights and audio gear booked out for shoots and shows.',
    examples: ['Cameras', 'Lenses', 'Lighting', 'Audio kits'],
    item: {
      name: 'Cinema camera body',
      code: 'AV-0315',
      category: 'Camera › Bodies',
      location: 'Studio · Kit room',
      status: 'Available',
      holder: '—',
      history: [
        { when: 'Today', what: 'Return confirmed, back on the shelf' },
        { when: 'Last week', what: 'Assigned to Event crew' },
        { when: 'Last week', what: 'Assignment approved' },
      ],
    },
  },
];

export const steps = [
  {
    title: 'Label it',
    text: 'Every item gets a QR code. Print the label and stick it on.',
  },
  {
    title: 'Hand it out',
    text: 'Request, approve and assign an item to a person or team in a few clicks.',
  },
  {
    title: 'Get it back',
    text: 'Request the return, confirm it, and record what condition it came back in.',
  },
  {
    title: 'See everything',
    text: 'Scan any label to open the item and its full history: who had it, when, and in what state.',
  },
];

export const features = [
  {
    title: 'QR labels',
    text: 'Generated with every item, ready to print, and scannable with any phone camera.',
  },
  {
    title: 'Approval workflows',
    text: 'Assignments and returns go through request and approval, so nothing changes hands unrecorded.',
  },
  {
    title: 'Full history',
    text: 'A complete assignment history for every item and across the whole inventory.',
  },
  {
    title: 'Your own statuses',
    text: 'Working, faulty, in maintenance, expired — or add your own, without any code changes.',
  },
  {
    title: 'Organised your way',
    text: 'Categories, subcategories, tags, storage locations, vendors and purchase details.',
  },
  {
    title: 'Reports in Excel',
    text: 'Inventory status, utilisation, assignment history, return turnaround and more, exportable to .xlsx.',
  },
  {
    title: 'Live dashboard',
    text: 'A summary of your inventory that updates as things change.',
  },
  {
    title: 'Notifications',
    text: 'In-app and email alerts for the events you choose, sent to a role or a specific person.',
  },
  {
    title: 'Roles & permissions',
    text: 'Decide exactly who can view, create, approve or delete — enforced on the server, not just hidden in the screen.',
  },
];

export const security = [
  'Single sign-on with your existing identity provider (OpenID Connect)',
  'Two-factor authentication you can make mandatory for everyone',
  'Account lockout after repeated failed logins, with admin alerts',
  'Password expiry and admin-approved password resets',
  'An append-only audit log of security and workflow events',
  'Your own name, logo and branding throughout',
];
