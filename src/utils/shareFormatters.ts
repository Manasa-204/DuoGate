/**
 * Generates the full shareable URL with the referral code query parameter.
 */
export function buildShareableUrl(referralCode: string): string {
  return `https://nxtwave.ai/ai-capstone-60m?ref=${referralCode}`;
}

/**
 * Builds the pre-formatted and encoded WhatsApp message for 8th sem batch sharing.
 */
export function buildEncodedWhatsAppMessage(referralCode: string): string {
  const shareableUrl = buildShareableUrl(referralCode);
  return encodeURIComponent(
    `🚨 *Urgent for 8th Sem / Final-Year Batch mates!* 🚨\n\n` +
    `NxtWave is conducting a *Free 60-Minute Masterclass* to build & deploy a *Production-Grade RAG AI Project* with runnable GitHub repo code for placements & viva.\n\n` +
    `🎓 *Project:* Full-Stack Enterprise RAG Pipeline (FastAPI + Pinecone + Llama-3 + Docker)\n` +
    `🔥 *Exclusive Perk:* Register using my Capstone Duo link below to unlock the *System Architecture Blueprint* + *Viva Defense Cheatsheet* + *₹1,500 Cloud GPU Credits* for both of us:\n\n` +
    `🔗 *Register here with our college batch:* ${shareableUrl}\n\n` +
    `_Only 500 final-year seats across engineering colleges in India._`
  );
}
