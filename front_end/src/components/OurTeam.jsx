
const people = [
    {
      name: 'Kamal Lotfi',
      role: 'admin',
      imageUrl: "https://github.com/shadcn.png"
    },
    // More people...
    {
        name:'Charaf eddin kaouri',
        role: 'admin',
        imageUrl: "https://github.com/shadcn.png"
    },
    {
        name:'Mohamed Boufous',
        role: 'admin',
        imageUrl: "https://github.com/shadcn.png",
    },
  ]
  
  export default function OurTeam() {
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3 ">
          <div className="w-full">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl flex justify-center items-center">Meet our leadership</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae elementum enim vitae ullamcorper
              suspendisse.
            </p>
          </div>
          <br></br>
          <ul role="list" className="grid gap-x-12 gap-y-12 sm:grid-cols-3  sm:gap-y-16 xl:col-span-3">
            {people.map((person) => (
              <li key={person.name}>
                <div className="flex items-center gap-x-6">
                  <img className="h-16 w-16 rounded-full" src={person.imageUrl} alt="" />
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                    <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
  