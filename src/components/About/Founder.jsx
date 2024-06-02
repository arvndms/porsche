import founder from '../../assets/founder.jpg'
export default function Founder() {
    return (
      <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8 ">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
        <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <figure className="mt-10">
            <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
              <p>
                “Porsche there is no Substitute”
              </p>
            </blockquote>
            <figcaption className="mt-10">
              <img
                className="mx-auto h-20 w-20 rounded-full"
                src={founder}
                alt=""
              />
              <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                <div className="font-semibold text-gray-900">Ferdinand Porsche</div>
                <svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true" className="fill-gray-900">
                  <circle cx={1} cy={1} r={1} />
                </svg>
                <div className="text-gray-600">Founder of Porsche</div>
              
              </div><div className='p-10'>Ferdinand Porsche founded his engineering office in 1931. Working until his death in 1951, the exceptionally creative technician, formerly a designer of electric cars and racing cars and the chief developer at Daimler-Benz, laid the foundations for the global company that would later bear the same name</div>
            </figcaption>
          </figure>
        </div>
      </section>
    )
  }
  