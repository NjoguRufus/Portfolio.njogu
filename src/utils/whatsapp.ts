export const openWhatsApp = (message: string = '') => {
  const whatsappUrl = `https://wa.me/254714748299?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, '_blank');
};

export const sendWhatsAppMessage = (name: string, message: string) => {
  if (!name.trim() || !message.trim()) {
    alert("Please fill out both fields.");
    return;
  }
  
  const whatsappMessage = `Hi, my name is ${name}. ${message}`;
  openWhatsApp(whatsappMessage);
};