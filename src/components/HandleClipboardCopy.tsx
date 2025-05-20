const HandleClipboardCopy = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text);
    alert(`Copied: ${text}`);
  } catch (err) {
    alert("Unable to copy value");
  }
};

export default HandleClipboardCopy;
