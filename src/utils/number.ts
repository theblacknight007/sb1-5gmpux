export function formatNumber(value: number, decimals: number = 2): string {
  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(value);
}

export function parseInputNumber(value: string): number {
  return parseFloat(value.replace(/[^\d.-]/g, '')) || 0;
}

export function calculateTotal(price: number, amount: number): number {
  return price * amount;
}