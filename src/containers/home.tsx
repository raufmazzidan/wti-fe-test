import Button from "@/components/button";
import Link from "next/link";

const Home = () => {
  return (
    <section className="flex items-center flex-col gap-6 justify-center h-screen">
      <Link href="/counter">
        <Button>Lets Get Started</Button>
      </Link>
    </section>
  );
};

export default Home;
