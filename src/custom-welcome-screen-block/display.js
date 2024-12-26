import React from "react";
import { css } from "emotion";
import { useRendererStoreActions } from "@quillforms/renderer-core";

const WelcomeScreenBlock = ({ attributes }) => {
  const { goToBlock } = useRendererStoreActions();
  const { label, description } = attributes;

  return (
    <div
      className={css`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100vh;
        background-color: #f2f1f1;
      `}
    >
      <div
        className={css`
          background: linear-gradient(
            124.98deg,
            #fffcf11a 29.07%,
            #c2a0f11a 87.88%
          );
          width: 528px;
          box-shadow: 0px 12px 24px 0px #8e8da83d, 0px 0px 13px 0px #8e8da81a;
          border-radius: 12px;
          border: 2px solid #ffffff;
          padding: 24px;
          text-align: left;
        `}
      >
        <div
          className={css`
            margin-bottom: 1px;
          `}
        >
          <h1
            className={css`
              font-size: 24px;
              font-weight: 900;
              color: #2a2a2a;
              font-family: "Montserrat", sans-serif;
              margin: 0;
            `}
          >
            {label}
          </h1>
        </div>

        <div
          className={css`
            font-size: 16px;
            color: #2a2a2a;
            line-height: 1.5;
            font-family: "Inter", sans-serif;
            margin-bottom: 16px;
          `}
          dangerouslySetInnerHTML={{ __html: markdownToHTML(description) }}
        ></div>
        <button
          onClick={() => goToBlock("dhrnpq5")}
          className={css`
            background-color: #2b35ee;
            color: #ffffff;
            border: none;
            border-radius: 18px;
            padding: 10px 16px;
            font-size: 14px;
            font-family: "Inter", sans-serif;
            cursor: pointer;
            transition: background-color 0.3s ease, transform 0.2s ease;

            &:hover {
              background-color: #1a25bb;
              transform: scale(1.05);
            }
          `}
        >
          Let’s start!
        </button>
        <span
          className={css`
            font-size: 16px;
            color: #000000;
            margin-left: 8px;
            font-family: "Inter", sans-serif;
          `}
        >
          press <strong>Enter ↵</strong>
        </span>
      </div>
    </div>
  );
};

const markdownToHTML = (markdown) => {
  const html = markdown
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") // Gras
    .replace(/__(.*?)__/g, "<strong>$1</strong>") // Gras alternatif
    .replace(/_(.*?)_/g, "<em>$1</em>") // Italic
    .replace(/\n/g, "<br />") // Retour à la ligne
    .replace(/- (.*?)\n/g, "<li>$1</li>") // Liste
    .replace(/✨/g, "✨"); // Emoji
  return html;
};

export default WelcomeScreenBlock;
