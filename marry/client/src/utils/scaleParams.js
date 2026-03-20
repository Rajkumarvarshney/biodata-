/**
 * Dynamically scales font sizes, photo size, and spacing
 * based on number of fields so everything fits on one A4 page.
 */
export function getScaleParams(fieldCount = 13) {
    // Base is 13 fields. Each field beyond 10 shrinks things slightly.
    const extra = Math.max(0, fieldCount - 10);

    const fontSize = Math.max(9, 14 - extra * 0.35);   // px  (min 9px)
    const nameSize = Math.max(20, 30 - extra * 0.5);    // px  (min 20px)
    const photoSize = Math.max(64, 120 - extra * 3);     // px  (min 64px)
    const gap = Math.max(2, 16 - extra * 0.9);    // px  (min 2px)
    const padding = Math.max(12, 32 - extra * 1.2);    // px  (min 12px)

    return { fontSize, nameSize, photoSize, gap, padding };
}
