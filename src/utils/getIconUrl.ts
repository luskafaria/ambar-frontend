import { ICON_URL } from "constants/api";

export default function getIconUrl(iconId?: string): string {
  if (!iconId) {
    return "";
  }

  return `${ICON_URL}${iconId}.png`;
}
