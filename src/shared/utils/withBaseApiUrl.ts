export const withBaseApiUrl = (url: string) =>
  `${import.meta.env.VITE_BASE_API}/${url}`
