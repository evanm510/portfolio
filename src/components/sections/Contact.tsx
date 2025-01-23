import ContactForm from "../ContactForm";

export default () => {
  return (
    <section id="contact" className="scroll-mt-20  mb-20">
      <div className="flex flex-col gap-4 items-center">
        <div className="font-heading text-3xl mx-auto">Contact</div>
        <div className="w-[90%] bg-secondary  shadow p-6 rounded-lg">
          <div className="flex justify-center mb-4">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};
