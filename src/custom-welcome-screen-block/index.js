import { registerBlockType } from "@quillforms/blocks";
import WelcomeScreenBlock from "./display";

registerBlockType("welcome-screen", {
  attributes: {
    label: {
      type: "string",
      default: "Welcome to X-SQUAD.",
    },
    description: {
      type: "string",
      default: `
        Your journey to DevOps excellence starts here!<br>
        Take this quick and comprehensive level assessment to evaluate your
        organization’s DevOps maturity.<br><br>
        🌟 <b>What to expect?</b><br>
        • A series of targeted questions<br>
        • A detailed report with personalized recommendations<br><br>
        Let’s unlock your full potential together. Ready to begin?
      `,
    },
    type: {
      type: "number", // New attribute to distinguish between modes
      default: 0, // 0 for welcome-screen, 1 for statement
    },
  },
  display: WelcomeScreenBlock, // Pass attributes dynamically
});
