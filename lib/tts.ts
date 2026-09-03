const ABBREVIATIONS: [RegExp, string][] = [
  [/\btbsp\b/gi, "tablespoon"],
  [/\btsp\b/gi, "teaspoon"],
  [/\bmin\b/gi, "minutes"],
  [/\bhrs?\b/gi, "hours"],
  [/\bg\b/gi, "grams"],
  [/\bkg\b/gi, "kilograms"],
  [/\bml\b/gi, "milliliters"],
  [/\bfl oz\b/gi, "fluid ounces"],
  [/\boz\b/gi, "ounces"],
  [/\blb\b/gi, "pounds"],
  [/\b°f\b/gi, "degrees fahrenheit"],
  [/\b°c\b/gi, "degrees celsius"],
  [/\bn\/a\b/gi, "not applicable"],
];
// added this to smoothen tts out
export function cleanForTTS(text: string): string {
  let out = text;
  for (const [re, replacement] of ABBREVIATIONS) {
    out = out.replace(re, replacement);
  }
  out = out.replace(/\s+/g, " ").trim();
  return out;
}
