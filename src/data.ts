/**
 * Page content. Every claim here maps to a feature the product actually has —
 * keep it that way when editing: no invented customers, numbers or certifications.
 *
 * The example items mirror the app's real data model:
 *  - items are assigned to a person (a user account), never to a team;
 *  - "Category" is the item's tag, which is also the prefix of its QR code
 *    (`TAG-00000`);
 *  - the status is one of the item statuses (default: Working, Faulty,
 *    Needs Maintenance, Expired). Being assigned is shown separately, through
 *    who the item is currently with;
 *  - the history holds only assignment events: assigned, reassigned, returned
 *    (with the status chosen when the return was confirmed).
 */

export type HistoryEntry = { when: string; what: string };

export type StatusColor = 'emerald' | 'red' | 'amber' | 'gray';

export type Industry = {
  id: string;
  label: string;
  pitch: string;
  examples: string[];
  item: {
    name: string;
    code: string;
    tag: string;
    serial: string;
    location: string;
    status: string;
    statusColor: StatusColor;
    /** Full name of the person who has it, or null when it is on the shelf. */
    assignee: string | null;
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
      code: 'LAP-00418',
      tag: 'LAP',
      serial: 'SN-5CD24187QX',
      location: 'IT store – Shelf 2',
      status: 'Working',
      statusColor: 'emerald',
      assignee: 'Sara Ali',
      history: [
        { when: 'Today', what: 'Assigned to Sara Ali' },
        { when: '2 weeks ago', what: 'Returned – Working' },
        { when: 'Last year', what: 'Assigned to Omar Hassan' },
      ],
    },
  },
  {
    id: 'schools',
    label: 'Schools & universities',
    pitch: 'Lab equipment, tablets and projectors that move between classrooms, teachers and staff.',
    examples: ['Microscopes', 'Tablets', 'Projectors', 'Lab kits'],
    item: {
      name: 'Microscope – binocular',
      code: 'LAB-00072',
      tag: 'LAB',
      serial: 'MX-2290-0072',
      location: 'Biology lab 2 – Cabinet B',
      status: 'Working',
      statusColor: 'emerald',
      assignee: 'Lena Novak',
      history: [
        { when: 'Today', what: 'Assigned to Lena Novak' },
        { when: 'Last month', what: 'Returned – Working' },
        { when: 'Last term', what: 'Reassigned to Daniel Reyes' },
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
      code: 'MED-01290',
      tag: 'MED',
      serial: 'IP-77310-1290',
      location: 'Ward 4 – Equipment room',
      status: 'Needs Maintenance',
      statusColor: 'amber',
      assignee: null,
      history: [
        { when: 'Today', what: 'Returned – Needs Maintenance' },
        { when: 'Last week', what: 'Assigned to Mina Park' },
        { when: 'Last month', what: 'Returned – Working' },
      ],
    },
  },
  {
    id: 'construction',
    label: 'Construction & field work',
    pitch: 'Tools and machines spread across sites, workers and vans.',
    examples: ['Power tools', 'Generators', 'Safety gear', 'Measuring kit'],
    item: {
      name: 'Rotary hammer drill',
      code: 'TOOL-02207',
      tag: 'TOOL',
      serial: 'RH-40-022071',
      location: 'Main yard – Tool store',
      status: 'Working',
      statusColor: 'emerald',
      assignee: 'Karim Mostafa',
      history: [
        { when: 'Today', what: 'Reassigned to Karim Mostafa' },
        { when: 'Monday', what: 'Assigned to Daniel Reyes' },
        { when: 'Last month', what: 'Returned – Working' },
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
      code: 'CAM-00315',
      tag: 'CAM',
      serial: 'CB-6K-00315',
      location: 'Studio – Kit room',
      status: 'Working',
      statusColor: 'emerald',
      assignee: null,
      history: [
        { when: 'Today', what: 'Returned – Working' },
        { when: 'Last week', what: 'Assigned to Omar Hassan' },
        { when: 'Last month', what: 'Returned – Working' },
      ],
    },
  },
];

export const steps = [
  {
    title: 'Label it',
    text: 'Every item gets its own QR code the moment it is added. Print the label and stick it on.',
  },
  {
    title: 'Hand it out',
    text: 'Assign the item to a person in a few clicks — straight away, or after an approval if the item needs one.',
  },
  {
    title: 'Get it back',
    text: 'Request the return, approve it, and confirm it — recording the condition it came back in.',
  },
  {
    title: 'See everything',
    text: 'Scan a label with a phone to open the item: its status, location and who has it, with its full assignment history one tap away.',
  },
];

export const features = [
  {
    title: 'QR labels',
    text: 'Created with every item and ready to print. Scan with any phone camera; staff sign in to see the details.',
  },
  {
    title: 'Approval workflows',
    text: 'Choose per item whether handing it out needs approval, and whether it must come back before it can go to someone else. Returns are requested, approved and confirmed, so nothing changes hands unrecorded.',
  },
  {
    title: 'Full history',
    text: 'Every assignment, reassignment and return, for each item and across the whole inventory.',
  },
  {
    title: 'Your own statuses',
    text: 'Start with Working, Faulty, Needs Maintenance and Expired. Rename, recolour or add your own, and decide which can be handed out.',
  },
  {
    title: 'Organised your way',
    text: 'Categories, subcategories and tags; storage from building to shelf; photos, vendors, serial numbers and purchase dates.',
  },
  {
    title: 'Reports in Excel',
    text: 'Inventory status, utilisation, outstanding assignments, assignment history, return turnaround, vendors and user activity — all exportable to .xlsx, with a one-page PDF breakdown for any row.',
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
    title: 'Works on phones',
    text: 'Dedicated mobile screens for scanning, checking items and handling requests on the move. Add it to the home screen and it opens like an app, with your own name and icon.',
  },
  {
    title: 'Roles & permissions',
    text: 'Decide exactly who can view, create, edit or delete each part of the system — enforced on the server, not just hidden in the screen.',
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

export const faq = [
  {
    question: 'Can we host it ourselves, or do you host it?',
    answer:
      'Either. You can run it on your own servers with Docker or Node.js and a MongoDB database, or we can host and run it for you.',
  },
  {
    question: 'Who owns our data?',
    answer:
      'You do. If you host it, your data stays in your own database and never reaches us. If we host it, your organisation gets its own separate installation and database, not shared with anyone else.',
  },
  {
    question: 'Does it work on phones?',
    answer:
      'Yes. It has dedicated mobile screens for scanning labels, checking items, and requesting, approving and returning equipment.',
  },
  {
    question: 'Do we need to install an app from an app store?',
    answer:
      'No. It is a web app that can be installed straight from the browser: add it to the home screen of a phone, tablet or computer and it opens full-screen like a native app, with your organisation\'s name and icon. It needs an internet connection to work.',
  },
  {
    question: 'Can it use our Microsoft or Google login?',
    answer:
      'Yes. It supports single sign-on with Microsoft Entra ID, Google Workspace, Okta or any standard OpenID Connect provider — one provider per installation.',
  },
  {
    question: 'Can we use our own categories and statuses?',
    answer:
      'Yes. Categories, subcategories, tags, storage locations and item statuses are all set up by you, with no code changes.',
  },
  {
    question: 'Can we get our information out?',
    answer:
      'Yes. Every report and the audit log can be exported to Excel at any time.',
  },
  {
    question: 'Can it carry our company name and logo?',
    answer: 'Yes. Your name, logo, tagline and support email are all set in its configuration, with no code changes.',
  },
  {
    question: 'How is it priced?',
    answer:
      'It depends on how you want to run it and what you need. Contact us for a quote.',
  },
];
