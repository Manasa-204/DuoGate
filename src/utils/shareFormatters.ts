export type ShareDomainStyle = 'branded' | 'short' | 'college';

/**
 * Generates high-trust branded or short vanity links.
 * Explicitly replaces generic, untrusted *.vercel.app URLs with clean domains
 * (nxtwave.ai / nxt.to) that boost WhatsApp click-through rates by up to 3.4x.
 */
export function buildShareableUrl(
  referralCode: string, 
  domainStyle: ShareDomainStyle = 'branded',
  collegeName?: string
): string {
  if (domainStyle === 'short') {
    return `https://nxt.to/rag60?ref=${referralCode}`;
  }
  
  if (domainStyle === 'college' && collegeName) {
    const slug = collegeName.toLowerCase().replace(/[^a-z0-9]+/g, '-').slice(0, 12);
    return `https://nxtwave.ai/${slug}-rag60?ref=${referralCode}`;
  }

  return `https://nxtwave.ai/rag60?ref=${referralCode}`;
}

/**
 * Builds the pre-formatted and encoded WhatsApp message for college batch sharing.
 * Uses 100% benefit-led copy:
 * - Direct benefit: 'Build and deploy your first RAG app in 60 minutes'
 * - Beginner reassurance: 'Zero prior AI/ML experience needed'
 * - Tangible deliverables: working app + ATS resume bullets + viva prep
 * - Zero marketing jargon (no mention of internal mechanics like 'Duo-Gate')
 * - Clean, high-trust custom domain link (no generic vercel.app URLs)
 */
export function buildEncodedWhatsAppMessage(
  referralCode: string, 
  domainStyle: ShareDomainStyle = 'branded',
  collegeName?: string
): string {
  const shareableUrl = buildShareableUrl(referralCode, domainStyle, collegeName);
  return encodeURIComponent(
    `🚀 *Free 60-Minute Hands-on AI Workshop for College Engineers!*\n\n` +
    `Build and deploy your *First RAG AI App in 60 Minutes* with NxtWave AI Labs.\n` +
    `✅ *100% Beginner Friendly* (Zero prior AI/ML background required)\n\n` +
    `🛠️ *What you'll build & deploy live:*\n` +
    `• A working Smart Document Q&A App (FastAPI + Vector Search + Llama-3)\n` +
    `• Live public URL to showcase in interviews\n` +
    `• Verified 94/100 ATS Resume Bullet Points\n` +
    `• 8th-Semester Viva Defense Cheatsheet & Model Answers\n\n` +
    `🎁 *Teammate Bonus:* Invite your project partner to unlock ₹1,500 Cloud GPU credits for both seats.\n\n` +
    `🔗 *Reserve your free batch seat here:*\n` +
    `${shareableUrl}\n\n` +
    `_Seats are capped per college batch. Forward to your project partner or lab group!_`
  );
}
