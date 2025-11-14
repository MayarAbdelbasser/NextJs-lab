import Image from "next/image";

export default function Home() {
  return (
    <section className="section" id="hero">
      <div className="container section__container grid grid-cols-2 px-40 py-10">
        <div className="section__info flex flex-col gap-5 justify-center">
          <h2 className="text-4xl fw-bolder">For All Your Furniture Needs</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus
            quidem maiores perspiciatis, illo maxime voluptatem a itaque
            suscipit.
          </p>
        </div>
        <div className="section__img">
          <Image
            src="/slider-img.png"
            alt="section-img"
            width={600}
            height={500}
          />
        </div>
      </div>
    </section>
  );
}
