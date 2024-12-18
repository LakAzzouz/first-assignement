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
            line-height: 19.36px;
            font-weight: 400;
            color: #2a2a2a;
            opacity: 0.8;
            font-family: "Inter", sans-serif;
            margin-bottom: 16px;
          `}
          dangerouslySetInnerHTML={{ __html: description }}
        ></div>
        <button
          onClick={() => goToBlock("dhrnpq5")}
          style={{
            backgroundColor: "#2B35EE",
            color: "#ffffff",
            border: "none",
            borderRadius: "18px",
            padding: "10px 16px",
            fontSize: "14px",
            cursor: "pointer",
            transition: "background-color 0.3s ease, transform 0.2s ease",
          }}
        >
          Let's start!
        </button>
      </div>
    </div>
  );
};

export default WelcomeScreenBlock;
