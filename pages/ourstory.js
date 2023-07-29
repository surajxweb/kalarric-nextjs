import { useRouter } from "next/router";
import Link from "next/link";

export default function OurStory() {
  const router = useRouter();
  const route = router.pathname.split("/").pop();

  return (
    <div>
      <div>Current Route: {route}</div>
      <Link href={"/"}>Go home</Link>
    </div>
  );
}
