export const typingEffect = async (
  fullText,
  onUpdate,
  speed = 15
) => {
  let current = "";

  for (let i = 0; i < fullText.length; i++) {
    current += fullText[i];

    onUpdate(current);

    await new Promise((resolve) =>
      setTimeout(resolve, speed)
    );
  }
};