import details from '../Models/details'
const Macan=(props)=>{
    const features = [
      { power: 'Engine Capacity' },
      { acceleration: 'Acceleration 0-100km/h'},
      { availablemodels: 'Available Models' },
      { topspeed: 'Top Speed' ,id:''},
      { powertorque: 'Max Power (bhp@rpm)&Max Torque (Nm@rpm)' },
      { price: 'Ex-Showroom Price'},
    ]
       return(<>
     
     
  <div  className="bg-white">
        <div  className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">  <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{details[4].header}</h2>
            <p className="mt-4 text-gray-500">
              {details[4].desc}
            </p>
            
            <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
              
                <div key={props.header} className="border-t border-gray-200 pt-4">
                
                  <dt className="font-medium text-gray-900">{features[0].power}</dt>
                  <dd className="mt-2 text-sm text-gray-500">{details[4].power}</dd>
                </div>
                <div key={props.header} className="border-t border-gray-200 pt-4">
                
                  <dt className="font-medium text-gray-900">{features[1].acceleration}</dt>
                  <dd className="mt-2 text-sm text-gray-500">{details[4].acceleration}</dd>
                </div>
                <div key={props.header} className="border-t border-gray-200 pt-4">
                
                  <dt className="font-medium text-gray-900">{features[2].availablemodels}</dt>
                  <dd className="mt-2 text-sm text-gray-500">{details[4].availablemodels}</dd>
                </div>
                <div key={props.header} className="border-t border-gray-200 pt-4">
                
                  <dt className="font-medium text-gray-900">{features[3].topspeed}</dt>
                  <dd className="mt-2 text-sm text-gray-500">{details[4].topspeed}</dd>
                </div>
                <div key={props.header} className="border-t border-gray-200 pt-4">
                
                  <dt className="font-medium text-gray-900">{features[4].powertorque}</dt>
                  <dd className="mt-2 text-sm text-gray-500">{details[4].powertorque}</dd>
                </div>
                <div key={props.header} className="border-t border-gray-200 pt-4">
                
                  <dt className="font-medium text-gray-900">{features[5].price}</dt>
                  <dd className="mt-2 text-sm text-gray-500">{details[4].price}</dd>
                </div>
            </dl>
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8 img-width">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5dY8wa2hMTbSAmrCwzXntNgeGzp6PFK7qww&s"
              alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
              className="rounded-lg bg-gray-100"
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBBw-uq4irj2jL1LWL_FKXSYG_xaYHNqFcBA&s"
              alt="Top down view of walnut card tray with embedded magnets and card groove."
              className="rounded-lg bg-gray-100"
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjYEeTkO0UhE3Bnab8BRYVxSDAMywzS02kog&s"
              alt="Side of walnut card tray with card groove and recessed card area."
              className="rounded-lg bg-gray-100"
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2_YbbCNhMYuMOFeumTo5_c7-9Hl8D4u0Bwg&s"
              alt="Walnut card tray filled with cards and card angled in dedicated groove."
              className="rounded-lg bg-gray-100"
            />
          </div>
        </div>
  </div>
     </>)
  }
  export {Macan}