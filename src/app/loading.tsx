import { RoacsLoadingAnimation } from "@/components/common/RoacsLoadingAnimation";

export default function Loading() {
  return (
    <div
      style={{
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FFFFFF",
        padding: "3rem",
        paddingTop: "6rem",
      }}
    >
      <RoacsLoadingAnimation size="lg" />
    </div>
  );
}
