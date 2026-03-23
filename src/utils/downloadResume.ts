export const downloadResume = () => {
  try {
    const link = document.createElement("a");
    link.href = "portfolio/Lakshya_Pandey_Resume.pdf";
    link.download = "Lakshya_Pandey_Resume.pdf";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } catch (error) {
    console.error("Error downloading resume:", error);
    window.open("/Lakshya_Pandey_Resume.pdf", "_blank");
  }
};
