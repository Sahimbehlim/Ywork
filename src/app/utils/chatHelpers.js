// Get initial letters from name
export const getInitials = (name) => {
  const parts = name.split(" ");
  return parts.length === 1
    ? parts[0][0].toUpperCase()
    : `${parts[0][0]}${parts[1][0]}`.toUpperCase();
};

// Generate random color based on name
export const getRandomColor = (name) => {
  const hash = [...name].reduce((a, c) => a + c.charCodeAt(0), 0);
  const hue = hash % 360;
  return {
    bg: name ? `hsl(${hue}, 70%, 80%)` : "#4b46e1",
    text: name ? `hsl(${hue}, 70%, 30%)` : "#FFF",
  };
};
