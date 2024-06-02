import details from '../Models/details'
const Taycan=(props)=>{
    const features = [
      { power: 'Power' },
      { acceleration: 'Acceleration 0-100km/h'},
      { availablemodels: 'Available Models' },
      { topspeed: 'Top Speed' ,id:''},
      { powertorque: 'Max Power (bhp@rpm)&Max Torque (Nm@rpm)' },
      { price: 'Ex-Showroom Price'},
    ]
       return(<>
     
     
  <div  className="bg-white">
        <div  className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">  <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{details[2].header}</h2>
            <p className="mt-4 text-gray-500">
              {details[2].desc}
            </p>
            
            <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
              
                <div key={props.header} className="border-t border-gray-200 pt-4">
                
                  <dt className="font-medium text-gray-900">{features[0].power}</dt>
                  <dd className="mt-2 text-sm text-gray-500">{details[2].power}</dd>
                </div>
                <div key={props.header} className="border-t border-gray-200 pt-4">
                
                  <dt className="font-medium text-gray-900">{features[1].acceleration}</dt>
                  <dd className="mt-2 text-sm text-gray-500">{details[2].acceleration}</dd>
                </div>
                <div key={props.header} className="border-t border-gray-200 pt-4">
                
                  <dt className="font-medium text-gray-900">{features[2].availablemodels}</dt>
                  <dd className="mt-2 text-sm text-gray-500">{details[2].availablemodels}</dd>
                </div>
                <div key={props.header} className="border-t border-gray-200 pt-4">
                
                  <dt className="font-medium text-gray-900">{features[3].topspeed}</dt>
                  <dd className="mt-2 text-sm text-gray-500">{details[2].topspeed}</dd>
                </div>
                <div key={props.header} className="border-t border-gray-200 pt-4">
                
                  <dt className="font-medium text-gray-900">{features[4].powertorque}</dt>
                  <dd className="mt-2 text-sm text-gray-500">{details[2].powertorque}</dd>
                </div>
                <div key={props.header} className="border-t border-gray-200 pt-4">
                
                  <dt className="font-medium text-gray-900">{features[5].price}</dt>
                  <dd className="mt-2 text-sm text-gray-500">{details[2].price}</dd>
                </div>
            </dl>
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8 img-width">
            <img
              src="https://imgd.aeplcdn.com/664x374/n/cw/ec/45063/taycan-exterior-left-front-three-quarter.jpeg?isig=0&q=80"
              alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
              className="rounded-lg bg-gray-100"
            />
            <img
              src="https://imgd.aeplcdn.com/664x374/n/cw/ec/45063/porsche-taycan-right-rear-three-quarter0.jpeg?q=80"
              alt="Top down view of walnut card tray with embedded magnets and card groove."
              className="rounded-lg bg-gray-100"
            />
            <img
              src="https://imgd.aeplcdn.com/370x208/n/cw/ec/45063/taycan-exterior-tail-light-tail-lamp.jpeg?isig=0&q=80"
              alt="Side of walnut card tray with card groove and recessed card area."
              className="rounded-lg bg-gray-100"
            />
            <img
              src="https://imgd.aeplcdn.com/370x208/n/cw/ec/45063/taycan-interior-steering-wheel.jpeg?isig=0&q=80"
              alt="Walnut card tray filled with cards and card angled in dedicated groove."
              className="rounded-lg bg-gray-100"
            />
          </div>
        </div>
  </div>
     </>)
  }
  export default Taycan