import Photography from "../Photography";
import Music from "../Music";

export default () => {
  return (
    <section
      id="other-interests"
      className="scroll-mt-20 flex items-center justify-center"
    >
      <div className="flex flex-col justify-center align-center gap-6">
        <div className="text-3xl mx-auto">Other Interests</div>
        <div className="flex justify-center">
          <Photography />
        </div>
        <div className="flex justify-center">
          <Music />
        </div>
      </div>
    </section>
  );
};
