import { contactEmailLink } from '@/consts';
import { buildUrl } from '@/utils/url';

export const reservationLink = buildUrl('https://calendly.com/logto/30min', {
  // Note: month format is YYYY-MM
  month: new Date().toISOString().slice(0, 7),
});
export const emailUsLink = buildUrl(contactEmailLink, {
  subject: 'Cloud pricing and special offer',
}).replace(/\+/g, '%20');

export const logtoBlogLink = 'https://blog.logto.io/?utm_source=console';
export const aboutCloudPreviewLink = 'https://docs.logto.io/about/cloud-preview?utm_source=console';

export const gtagAwTrackingId = 'AW-11124811245';
/** This ID indicates a user has truly signed up for Logto Cloud. */
export const gtagSignUpConversionId = `${gtagAwTrackingId}/RVejCKC65qMYEO3L3Lgp`;
export const logtoProductionHostname = 'logto.io';
