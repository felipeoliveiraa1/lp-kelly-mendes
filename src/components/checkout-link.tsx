"use client";

import { useSearchParams } from "next/navigation";
import { CHECKOUT_URL } from "@/constants";

const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
] as const;

/** Parâmetros adicionais que a Hotmart pode usar para atribuição. */
const AFFILIATE_PARAM_KEYS = ["src", "sck", "sub_id", "aff"] as const;

const PARAMS_TO_PASS = [...UTM_KEYS, ...AFFILIATE_PARAM_KEYS];

export interface CheckoutLinkProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  children: React.ReactNode;
}

/**
 * Link para o checkout Hotmart que preserva UTM e parâmetros de afiliado
 * da URL atual, para que a venda seja atribuída corretamente.
 */
export function CheckoutLink({ children, className, ...props }: CheckoutLinkProps) {
  const searchParams = useSearchParams();
  const params = new URLSearchParams();
  PARAMS_TO_PASS.forEach((key) => {
    const value = searchParams.get(key);
    if (value) {
      params.set(key, value);
    }
  });
  const queryString = params.toString();
  const href =
    queryString && CHECKOUT_URL
      ? `${CHECKOUT_URL}${CHECKOUT_URL.includes("?") ? "&" : "?"}${queryString}`
      : CHECKOUT_URL;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      {...props}
    >
      {children}
    </a>
  );
}
