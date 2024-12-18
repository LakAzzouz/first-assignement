import { registerBlockType } from "@quillforms/blocks";
import StatementBlock from "./display";

registerBlockType("blocklib-statement-block", {
  attributes: {
    label: {
      type: "string",
      default: "",
    },
    description: {
      type: "string",
      default: "",
    },
  },
  display: StatementBlock,
});
