export const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleString("es-ES", {
      weekday: "long", // Día de la semana
      year: "numeric", 
      month: "long", 
      day: "numeric",
      hour: "numeric", 
      minute: "numeric", 
      hour12: true, // Si deseas usar el formato de 12 horas (AM/PM)
    });
  };