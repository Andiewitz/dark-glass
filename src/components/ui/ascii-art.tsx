"use client";

export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src="https://assets.21st.dev/ascii-recipes/videos/user_3GRKE8E4T91HLBKvL8CImp46wt2/458d850c-821c-471a-b246-4458430c18ce.mp4"
      poster="https://assets.21st.dev/ascii-recipes/thumbnails/user_3GRKE8E4T91HLBKvL8CImp46wt2/605a5945-32ee-41fa-b00b-e419ea395aa1.png"
      autoPlay
      loop
      muted
      playsInline
      aria-label="Animated ASCII art"
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  );
}
