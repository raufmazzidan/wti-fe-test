import Button from "@/components/button";
import Link from "next/link";

const Home = () => {
  return (
    <section className="flex items-center justify-center h-screen">
      <Link href="/counter">
        <Button>Lets Get Strated</Button>
      </Link>
    </section>
  );
};

export default Home;
