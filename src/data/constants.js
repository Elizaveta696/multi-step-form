export const PLANS = {
  arcade: { monthly: 9, yearly: 90 },
  advanced: { monthly: 12, yearly: 120 },
  pro: { monthly: 15, yearly: 150 },
};

export const ADDONS = {
  'online-service': {
    monthly: 1,
    yearly: 10,
    name: 'Online service',
    description: 'Access to multiplayer games',
  },
  'larger-storage': {
    monthly: 2,
    yearly: 20,
    name: 'Larger storage',
    description: 'Extra 1TB of cloud save',
  },
  'custom-profile': {
    monthly: 2,
    yearly: 20,
    name: 'Customizable Profile',
    description: 'Custom theme on your profile',
  },
};

export const STEPS = [
  { number: 1, label: 'Step 1', title: 'Your info' },
  { number: 2, label: 'Step 2', title: 'Select plan' },
  { number: 3, label: 'Step 3', title: 'Add-ons' },
  { number: 4, label: 'Step 4', title: 'Summary' },
];
