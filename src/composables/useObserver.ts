function useObserver(
  target: HTMLElement,
  onEnter: () => any = () => {},
  onLeave: () => any = () => {}
) {
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      onEnter()
    } else {
      onLeave()
    }
  })

  observer.observe(target)
}

export { useObserver }
