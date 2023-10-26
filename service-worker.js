const urlB64ToUint8Array = (base64String) => {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding)
    .replace(/\-/g, "+")
    .replace(/_/g, "/");
  const rawData = atob(base64);
  const outputArray = new Uint8Array(rawData.length);
  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
};

self.addEventListener("push", (event) => {
  const options = {
    body: event.data.text(),
  };
  event.waitUntil(self.registration.showNotification("Your App Name", options));
});

self.addEventListener("install", async () => {
  self.skipWaiting();
  const applicationServerKey = urlB64ToUint8Array(
    "BLfTIb9DeR6DrzSAn_8CZBPWpnWvwULz3ryQ-Y3XJl1KY2padp_fpNnGy3huat1NNd8vRofHDOu9RVQPPZoFPE0"
  );
  const options = { applicationServerKey, userVisibleOnly: true };
  const subscription = await self.registration.pushManager.subscribe(options);
  await saveSubscription(subscription);
});

const saveSubscription = async (subscription) => {
  const SERVER_URL = "http://localhost:8000/save-subscription";
  const response = await fetch(SERVER_URL, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(subscription),
  });
  return response.json();
};

// const showNotification = (title, swRegistration) => {
//   swRegistration.showNotification(title, {});
// };
