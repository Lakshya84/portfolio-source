export const downloadResume = () => {
  try {
    const link = document.createElement("a");
    // link.href = "/Lakshya_Pandey_Software_Engineer.pdf";
      link.href =
    `${import.meta.env.BASE_URL}Lakshya_Pandey_Software_Engineer.pdf`;
    link.download = "Lakshya_Pandey_Software_Engineer.pdf";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } catch (error) {
    console.error("Error downloading resume:", error);
    window.open("/Lakshya_Pandey_Software_Engineer.pdf", "_blank");
  }
};
