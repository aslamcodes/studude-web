import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { Provider } from "react-redux";
import "./index.css";
import { store } from "./store.tsx";

const registerServiceWorker = async () => {
  if ("serviceWorker" in navigator) {
    try {
      const registration = await navigator.serviceWorker.register(
        "/service-worker.js",
        {
          scope: "/",
        }
      );

      if (registration.installing) {
        console.log("Service worker installing");
      } else if (registration.waiting) {
        // console.log("Service worker installed");
      } else if (registration.active) {
        // console.log("Service worker active");
      }

      return registration;
    } catch (error) {
      console.error(`Registration failed with ${error}`);
    }
  }
};

const requestNotificationPermission = async () => {
  if ("Notification" in window) {
    let permission = await Notification.requestPermission();
    if (permission !== "granted") {
      if (
        confirm(
          "We would like to intimidate you, when its time to revise some concepts, Kindly change the site settings to enable notifications"
        )
      ) {
        permission = await Notification.requestPermission();
      } else {
        alert(
          "We wont Spam you, if you dont enable notifications, you'll be missing out many things, as studude depends wholely on notifications"
        );
      }
    }
  }
};

await requestNotificationPermission();
await registerServiceWorker();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <App />
  </Provider>
);
