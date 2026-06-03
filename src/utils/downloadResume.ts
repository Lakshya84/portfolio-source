export const downloadResume = () => {
  try {
    const link = document.createElement("a");
    link.href = "portfolio/Lakshya Pandey Software_Engineer.pdf";
    link.download = "Lakshya Pandey Software_Engineer.pdf";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } catch (error) {
    console.error("Error downloading resume:", error);
    window.open("/Lakshya Pandey Software_Engineer.pdf", "_blank");
  }
};
