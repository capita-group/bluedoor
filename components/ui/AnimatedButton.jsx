"use client";

export default function AnimatedButton({
  label = "Button",
  color = "rgba(88, 101, 242, 1)",
  onClick,
  type = "button",
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      style={{
        "--btn-color": color,
        padding: "0.75em 2.2em",
        backgroundColor: "transparent",
        borderRadius: "0.3em",
        position: "relative",
        overflow: "hidden",
        cursor: "pointer",
        transition: "0.5s",
        fontWeight: 600,
        fontSize: "12px",
        border: `1px solid ${color}`,
        fontFamily: "inherit",
        textTransform: "uppercase",
        color: color,
        zIndex: 1,
        letterSpacing: "0.15em",
        width: "100%",          // ✅ mobile full width
        maxWidth: "260px",      // ✅ keeps it nice on desktop
      }}
      className="md:w-auto md:max-w-none"
      onMouseEnter={(e) => {
        e.currentTarget.style.color = "#fff";
        e.currentTarget.querySelectorAll(".ripple").forEach((el) => {
          el.style.width = "410px";
          el.style.height = "410px";
        });
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = color;
        e.currentTarget.querySelectorAll(".ripple").forEach((el) => {
          el.style.width = "50px";
          el.style.height = "50px";
        });
      }}
      onMouseDown={(e) => {
        e.currentTarget.style.filter = "brightness(0.8)";
      }}
      onMouseUp={(e) => {
        e.currentTarget.style.filter = "brightness(1)";
      }}
    >
      <span
        className="ripple"
        style={{
          position: "absolute",
          top: "-1em",
          left: "-1em",
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          backgroundColor: color,
          transform: "translate(-50%, -50%)",
          transition: "1s ease",
          zIndex: -1,
        }}
      />
      <span
        className="ripple"
        style={{
          position: "absolute",
          top: "calc(100% + 1em)",
          left: "calc(100% + 1em)",
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          backgroundColor: color,
          transform: "translate(-50%, -50%)",
          transition: "1s ease",
          zIndex: -1,
        }}
      />
      {label}
    </button>
  );
}
