import { withUt } from "uploadthing/tw";

export default withUt({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      height: {
        forYou_xl: "calc(100vh - 96px - 24px - 12px)",
        forYou: "calc(100vh - 96px )",
        main_xl: "calc(100vh - 56px - 24px )",
        main: "calc(100vh - 56px  )",
        video_xl: "calc(100vh - 56px - 24px - 80px)",
        video: "calc(100vh - 56px - 80px)",
        searchVid: "calc(100vh - 52px - 24px)",
        commentContainer: "calc(100vh - 24px - 56px - 232px)",
      },

      width: {
        "290": "290px",
      },

      gridTemplateColumns: {
        auto1fr: "auto 1fr",
      },

      gridTemplateRows: {
        auto1fr: "auto 1fr",
      },

      colors: {
        ccc: "#ccc",
        blackLayer: "rgba(0,0,0,0.5)",
        main: "#2761f5",
        // Dark theme colors
        primaryDark: "#000000",
        secondaryDark: "#121212",
        tertiaryDark: "#464a4a",
        backgroundDark: "#202222",
        accentDark: "#00da66",
        almostBlack: "#232323",
        textDark: "#a7a7a7",

        // White theme colors
        primaryWhite: "#e9eef2",
        secondaryWhite: "#e0e5e8",
        textLight: "#000000",
        // Add more colors as needed
      },
    },
  },
  plugins: [],
});
