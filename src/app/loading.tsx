import { RoacsLoadingAnimation } from "@/components/common/RoacsLoadingAnimation";

export default function Loading() {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999, // Under Header (zIndex 100000) so only navbar is visible
        backgroundColor: "#FFFFFF",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "72px",
        overflow: "hidden",
      }}
    >
      <RoacsLoadingAnimation size="lg" />
    </div>
  );
}
