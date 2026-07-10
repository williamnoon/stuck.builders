// Meta Pixel helper. Client-only. Structured so a server-side CAPI route can be
// added later without changing call-sites.
declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

export function trackPageView() {
  if (typeof window === "undefined" || !window.fbq) return;
  window.fbq("track", "PageView");
}

export function trackLead(params: { value: number; currency?: string; content_name: string }) {
  if (typeof window === "undefined" || !window.fbq) return;
  window.fbq("track", "Lead", {
    value: params.value,
    currency: params.currency ?? "USD",
    content_name: params.content_name,
  });
}
