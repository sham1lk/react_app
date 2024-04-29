export default function Contact() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6" id="contacts">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Свяжитесь с нами</h2>
            <p className="text-xl text-gray-400">Свяжитесь с нами для получения подробной информации и консультации. Мы готовы помочь вам повысить эффективность и точность диагностики.</p>
          </div>

          <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none">

            <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up">
              <div>
                <div className="relative inline-flex flex-col mb-4">

                </div>
              </div>
              <blockquote className="text-lg text-gray-400 grow">Email</blockquote>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <a className="text-gray-200 not-italic">shastiev@innopolis.university</a>
              </div>
            </div>
            <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up">
              <div>
                <div className="relative inline-flex flex-col mb-4">

                </div>
              </div>
              <blockquote className="text-lg text-gray-400 grow">Телефон</blockquote>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <a className="text-gray-200 not-italic">+7 (999) 999 - 99 - 99</a>
              </div>
            </div>
            <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up">
              <div>
                <div className="relative inline-flex flex-col mb-4">

                </div>
              </div>
              <blockquote className="text-lg text-gray-400 grow">Факс</blockquote>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <a className="text-gray-200 not-italic">+7 (999) 999 - 99 - 99</a>
              </div>
            </div>


          </div>

        </div>
      </div>
    </section>
  )
}
