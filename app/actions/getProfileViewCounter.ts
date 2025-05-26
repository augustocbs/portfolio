import { siteConfig } from "@/config/site";

export async function getProfileViewCounter() {
  try {
    const response = await fetch(
      `https://komarev.com/ghpvc/?username=${siteConfig.links.githubUsername}`
    );
    const svgText = await response.text();

    const matches = svgText.match(/<text[^>]*>([0-9,]+)<\/text>/g);
    
    if (matches && matches.length > 0) {
      const lastMatch = matches[matches.length - 1];
      const numberMatch = lastMatch.match(/>([0-9,]+)</);

      if (numberMatch && numberMatch[1]) {
        return numberMatch[1];
      }
    }
    return '0';
  } catch (error) {
    console.error("Erro ao buscar contagem de visualizações:", error);
    return '0';
  }
}