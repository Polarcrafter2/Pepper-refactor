/**
 * Viewport adjustment utility
 * Modernized version of the original adjust23.js
 */

export interface ViewportOptions {
  legacyWidth: number;
}

/**
 * Adjusts the viewport scale based on the current screen width and a legacy width
 *
 * @param options Configuration options
 */
export function adjustViewport(
  options: ViewportOptions = { legacyWidth: 1707 },
): void {
  const viewport = document.querySelector("meta[name=viewport]");

  if (viewport) {
    const windowWidth = window.screen.width;
    const scale = (windowWidth / options.legacyWidth).toFixed(3);

    const initStr = `initial-scale=${scale}`;
    const minStr = `minimum-scale=${scale}`;
    const maxStr = `maximum-scale=${scale}`;

    viewport.setAttribute("content", `${initStr},${minStr},${maxStr}`);
  }
}

/**
 * React hook for viewport adjustment
 */
export function useViewportAdjustment(options?: ViewportOptions): void {
  // This would be called in a useEffect in a React component
  adjustViewport(options);
}
