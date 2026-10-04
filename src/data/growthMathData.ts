export interface FunnelRow {
  node: string;
  traffic: string;
  conversion: string;
  yield: string;
  highlight?: boolean;
}

export const FUNNEL_BREAKDOWN_DATA: FunnelRow[] = [
  {
    node: "15 Batch WhatsApp Groups (CR Pins)",
    traffic: "900 student clicks",
    conversion: "~33% Primary Form",
    yield: "300 Primary Regs"
  },
  {
    node: "Teammate / Lab Partner Viral Invite (Dual Unlock)",
    traffic: "300 Primary users",
    conversion: "65% pair a partner",
    yield: "+195 Duo Regs"
  },
  {
    node: "Inter-College Leaderboard FOMO",
    traffic: "Campus sharing",
    conversion: "Organic K=0.12",
    yield: "+35 Regs"
  },
  {
    node: "Total Expected 7-Day Registrations",
    traffic: "~1,150 visits",
    conversion: "Blended 46%",
    yield: "530 Verified Regs",
    highlight: true
  }
];

export const BUDGET_ITEMS = [
  {
    title: "₹1,500: Micro-Incentives for 15 CRs",
    desc: "₹100 direct UPI transfer or canteen/mobile voucher to 15 Tier-2/3 college Class Representatives to pin the workshop announcement message for 24 hours."
  },
  {
    title: "₹500: Twilio / WhatsApp Cloud API",
    desc: "Automated transactional confirmation webhooks triggering the immediate WhatsApp calendar invite and GitHub repository invite link to the paired duo partner."
  }
];
