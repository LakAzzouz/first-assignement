import React from "react";
import { css } from "emotion";
import { useRendererStoreActions } from "@quillforms/renderer-core";

const StatementBlock = ({ attributes }) => {
  const { goNext } = useRendererStoreActions();
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

      .title {
        display: inline-block;
        border: 1px solid #2b35ee;
        border-radius: 20px;
        padding: 8px 8px;
        font-size: 12px;
        color: #2b35ee;
        font-family: "Inter", sans-serif;
        font-weight: 500;
        margin: 4px;
        text-align: center;
      }
    `}
  >
      <div
        className={css`
          background: linear-gradient(
            124.98deg,
            #fffcf11a 29.07%,
            #c2a0f11a 87.88%
          );
          width: 600px;
          box-shadow: 0px 12px 24px 0px #8e8da83d, 0px 0px 13px 0px #8e8da81a;
          border-radius: 12px;
          border: 2px solid #ffffff;
          padding: 24px;
          text-align: left;
        `}
      >
        <div
          className={css`
            font-size: 24px;
            font-weight: 900;
            color: #2a2a2a;
            font-family: "Montserrat", sans-serif;
            margin-bottom: 16px;
          `}
        >
          {label}
        </div>
        <div
          className={css`
            font-size: 16px;
            line-height: 1.6;
            color: #2a2a2a;
            opacity: 0.8;
            font-family: "Inter", sans-serif;
            margin-bottom: 24px;
          `}
          dangerouslySetInnerHTML={{ __html: markdownToHTML(description) }}
        ></div>
        
        <div
          className={css`
            display: flex;
            gap: 12px;
            justify-content: flex-start;
            flex-wrap: wrap;
            margin-bottom: 24px;
          `}
        >
        </div>
        <button
          onClick={() => goNext()}
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
          Continue
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
    .replace(/_(.*?)_/g, "<em>$1</em>") // Italique
    .replace(/\n/g, "<br />") // Retour à la ligne
    .replace(/\[btn\](.*?)\[\/btn\]/g, '<span class="title">$1</span>'); // Apparence bouton
  return html;
};

export default StatementBlock;
