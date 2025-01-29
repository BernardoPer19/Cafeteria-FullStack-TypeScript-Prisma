export const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleString("es-ES", {
      weekday: "long", 
      year: "numeric", 
      month: "long", 
      day: "numeric",
      hour: "numeric", 
      minute: "numeric", 
      hour12: true, 
    });
  };
