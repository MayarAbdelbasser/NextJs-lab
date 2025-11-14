import Image from "next/image";

function about() {
  return (
    <section className="px-[100px] py-5">
      <div className="flex flex-column justify-center items-center">
        <div className="flex-1">
          <Image src="/image.png" alt="section-img" width={600} height={500} />
        </div>
        <div className="flex-1 ">
          <h2 className="text-4xl fw-bolder py-5">About Us</h2>
          <p className="text-lg">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus
            quidem maiores perspiciatis, illo maxime voluptatem a itaque
            suscipit.
          </p>
        </div>
      </div>
    </section>
  );
}

export default about;
