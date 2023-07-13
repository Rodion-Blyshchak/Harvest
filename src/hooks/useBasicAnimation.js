const useBasicAnimation = ({ hidden, visible }) => ({
  hidden: () => ({
    y: 100,
    opacity: 0,
    ...hidden,
  }),
  visible: (custom) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 },
    ...visible,
  }),
})

export default useBasicAnimation
