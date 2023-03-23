export async function sendMessageToWebhook(content, message) {
  const webhook = import.meta.env.VITE_HOOK_REVIEW;
  const response = await fetch(webhook, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      // content: `The content: ${content} \n The message: ${message}`
      embeds: [
        {
          title: content,
          // url: "https://google.com/",
          // description: message,
          color: 32441,
          fields: [
            {
              name: "REVIEWER COMMENT",
              value: message,
              // inline: true,
            },
          ],
        },
      ],
    }),
  });
}
