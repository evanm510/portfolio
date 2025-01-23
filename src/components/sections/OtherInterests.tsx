import Photography from "../Photography";
import Music from "../Music";
import Geology from "../Geology";

export default function OtherInterests() {
  return (
    <section
      id="other-interests"
      className="scroll-mt-20 flex items-center justify-center mb-20"
    >
      <div className="w-[90%] max-w-[1400px]">
        <div className="flex flex-col justify-center items-center gap-4">
          <div className="text-heading font-heading text-3xl">
            Other Interests
          </div>
          <div className="flex flex-col gap-4 w-full">
            <div className="flex flex-1 flex-col items-center bg-card shadow p-2 rounded-lg">
              <Photography />
            </div>
            <div className="flex flex-1 flex-col items-center bg-card  shadow p-2 rounded-lg">
              <Music />
            </div>
            <div className="flex flex-1 flex-col items-center bg-card  shadow p-2 rounded-lg">
              <Geology />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
