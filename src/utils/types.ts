declare global {
  interface Window {
    CC: CookieConsent;
  }
}

export type NavItem = {
  text: string;
  href: string;
};

export type ProjectItem = {
  name: string;
  description: string;
  url: string;
};

export {};
