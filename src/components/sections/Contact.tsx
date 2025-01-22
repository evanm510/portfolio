import ContactForm from "../ContactForm";

export default () => {
  return (
    <section id="experience" className="scroll-mt-20  mb-20">
      <div className="flex flex-col gap-4 items-center">
        <div className="text-3xl mx-auto">Contact</div>
        <div className="w-[90%] bg-secondary p-6 rounded-lg">
          <div className="flex justify-center mb-4">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};
