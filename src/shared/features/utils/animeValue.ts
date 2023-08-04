import anime from "animejs";

export function animateValue(
  element: HTMLElement | null | undefined,
  starting: string | number = 1000,
  duration: number = 0.8,
) {
  if (!element) return;

  anime({
    targets: element,
    innerText: [0, starting],
    easing: "linear",
    round: true,
    update(a) {
      const value = a.animations[0].currentValue;

      if (element) {
        element.innerHTML = value;
      }
    },
    duration,
  });
}
