export async function sendMessageToWebhook(type, message) {
  let webhook;
  if (type === "ERROR") webhook = import.meta.env.VITE_HOOK_SUPA;
  if (type === "AUTH") webhook = import.meta.env.VITE_HOOK_AUTH;
  if (type === "REVIEW") webhook = import.meta.env.VITE_HOOK_REVIEW;

  try {
    const response = await fetch(webhook, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // username: type === "MAGIC" ? "Magic Login" : undefined,
        // avatar_url: "https://i.imgur.com/4M34hi2.png",
        // content: type,
        embeds: [
          {
            author: {
              name: "Portfolio Viewer",
              // url: "https://www.reddit.com/r/cats/",
              icon_url:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRc7YDpfe7-KRj1Y7JAP5R73L-RLKcLTWbEjWQ84B2&s",
            },
            title: type,
            // url: "https://google.com/",
            description: JSON.stringify(message),
            color: 32441,
            fields: [
              {
                name: "AUTH",
                value: "Portfolio Viewer",
                inline: true,
              },
              // {
              //   name: "Thanks!",
              //   value: "You're welcome :wink:",
              // },
            ],
            thumbnail: {
              url: "https://w7.pngwing.com/pngs/150/908/png-transparent-monkey-d-luffy-one-piece-roronoa-zoro-portgas-d-ace-animation-one-piece-manga-cartoon-one-piece.png",
            },
            // image: {
            //   url: "https://w7.pngwing.com/pngs/150/908/png-transparent-monkey-d-luffy-one-piece-roronoa-zoro-portgas-d-ace-animation-one-piece-manga-cartoon-one-piece.png",
            // },
          },
        ],
      }),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    console.log("Successfully sent message to webhook of type: ", type);
  } catch (err) {
    console.error(`Error sending message to webhook: ${err}`);
  }
}
