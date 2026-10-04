/**
 * Generates a clean campus referral code based on college name and a pseudo-random integer.
 * Example: NXT-AKTU-7194
 */
export function generateReferralCode(college: string): string {
  const cleanCode = college
    .slice(0, 4)
    .replace(/[^A-Za-z]/g, '')
    .toUpperCase();
  const initials = cleanCode.length > 0 ? cleanCode : 'ENG';
  const randNum = Math.floor(1000 + Math.random() * 9000);
  return `NXT-${initials}-${randNum}`;
}
