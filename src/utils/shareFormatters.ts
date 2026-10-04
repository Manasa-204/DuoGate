export type ShareDomainStyle = 'branded' | 'short' | 'college';
export type SharePersona = 'partner' | 'class' | 'placement';

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
 * Builds persona-tailored, pre-formatted and encoded WhatsApp messages:
 * - 'partner': Informal peer invite highlighting the double GPU bonus & viva guide
 * - 'class': Authoritative Class Representative broadcast with batch quotas
 * - 'placement': Placement-focused pitch highlighting ATS score & interview credibility
 */
export function buildEncodedWhatsAppMessage(
  referralCode: string, 
  domainStyle: ShareDomainStyle = 'branded',
  collegeName?: string,
  persona: SharePersona = 'class'
): string {
  const shareableUrl = buildShareableUrl(referralCode, domainStyle, collegeName);

  if (persona === 'partner') {
    return encodeURIComponent(
      `⚡ *Hey bro!* I just registered us for the free NxtWave 60-min AI workshop.\n\n` +
      `We build and deploy a live *Document Q&A RAG App* (zero prior ML experience needed). We can use this directly for our final-year capstone.\n\n` +
      `🎁 *Our Perks:* We both get ₹1,500 Cloud GPU credits and the 8th-Sem Viva Defense cheatsheet.\n\n` +
      `Add your details with my link to claim our partner pack:\n` +
      `${shareableUrl}`
    );
  }

  if (persona === 'placement') {
    return encodeURIComponent(
      `💼 *For anyone prepping for 2026/2027 Campus Placements:*\n\n` +
      `Technical interviewers reject copied Iris/Titanic models in seconds. NxtWave is hosting a *Free 60-Minute Masterclass* to build and deploy a real *RAG AI Application with FastAPI & Vector Search*.\n\n` +
      `✅ Live public URL to showcase in interviews\n` +
      `✅ Verified 94/100 ATS Resume Bullet Points\n` +
      `✅ 8th-Semester Viva Defense Q&A Cheatsheet\n\n` +
      `Claim free entry here:\n` +
      `${shareableUrl}`
    );
  }

  // Default: Class Representative batch group broadcast
  return encodeURIComponent(
    `📢 *Free 60-Minute Hands-on AI Workshop for College Engineers!*\n\n` +
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
