import { registerBlockType } from "@quillforms/blocks";
import StatementBlock from "./display";

registerBlockType("statement", {
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
