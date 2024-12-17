import React from "react";
import { css } from "emotion";
import { useRendererStoreActions } from "@quillforms/renderer-core";

const StatementBlock = () => {
  const { goToBlock } = useRendererStoreActions();
  
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
          background: linear-gradient(124.98deg, #fffcf11a 29.07%, #c2a0f11a 87.88%);
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
            margin-bottom: 16px;
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
            1. Continuous Exploration
          </h1>
          <p
            className={css`
              font-size: 16px;
              color: #2a2a2a;
              opacity: 0.8;
              weight: 400;
              line-height: 19.36px;
              font-family: "Inter", sans-serif;
              margin: 4px 0 0;
            `}
          >
            Unleashing innovation through constant learning.
          </p>
        </div>
        <p
          className={css`
            font-size: 16px;
            line-height: 19.36px;
            weight: 400;
            color: #2a2a2a;
            opacity: 0.6;
            font-family: "Inter", sans-serif;
            margin-bottom: 16px;
          `}
        >
          Explore how your team leverages data, insights, and collaboration to
          drive continuous improvement and innovation. Let’s assess your ability
          to stay ahead of the curve!
        </p>
        <button
          onClick={() => goToBlock("m0sphvc")}
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
          Continue
        </button>
      </div>
    </div>
  );
};

export default StatementBlock;
