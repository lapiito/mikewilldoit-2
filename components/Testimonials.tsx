import Title from "./Title";
import data from "../public/data.json";

const Testimonials = () => {
  return (
    <div id="testimonials" className="md:ml-20">
      <Title num={1} title="Testimonials" />

      <div className="flex w-screen -mb-10 space-x-10 overflow-scroll hidescrollbar md:mx-auto md:-mr-0">
        {data.testimonials.map((testimonial, i) => (
          <div key={i} className="mt-5 px-16">
            <div
              style={{ transform: `rotate(${i + 1 * 2}deg)` }}
              className="backdrop-filter backdrop-blur-3xl shadow-2xl border-2 border-darkerblue  bg-white/5  px-4 my-10 pb-3 md:min-w-[400px] min-w-[300px] rounded-lg"
            >
              <h2 className="pt-5">{testimonial.value}</h2>
              <h2 className="mt-4 text-white">{testimonial.name}</h2>
              <h2 className="text-white">{testimonial?.relation}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
