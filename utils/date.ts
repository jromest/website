// Format date string 2024-10-20 [y, m, d] to October 20, 2024
export const formatDate = (dateStr: string): string => {
  const date = new Date(dateStr);

  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};
