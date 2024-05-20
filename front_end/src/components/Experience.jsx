import WorkExperience from "./workExperience";
export default function Experience() {
  return (
    <>
      <section className="space-y-6 p-4 md:p-6">
        <div className="flex items-center justify-between">
          <h2 className="not-italic text-purple-500 text-2xl font-semibold ">Work Experience</h2>
          <div className="flex items-center gap-4">
            <div className="h-[1px] flex-1 bg-gray-200 dark:bg-gray-700 border-dashed border-gray-300 dark:border-gray-600" />

            <div className="h-[1px] flex-1 bg-gray-200 dark:bg-gray-700 border-dashed border-gray-300 dark:border-gray-600" />
          </div>
        </div>
        <div className="space-y-4">
          <WorkExperience
            title="Software Engineer"
            company="Acme Inc."
            duration="June 2021 - Present"
            description="Developed and maintained complex web applications using React, Node.js, and various other technologies. Collaborated with cross-functional teams to deliver high-quality software solutions."
          />

          <div className="aspect-square w-3 bg-gray-900 rounded-full dark:bg-gray-50 ml-[-3px]" />
          <WorkExperience
            title="Frontend Developer"
            company="XYZ Corp."
            duration="September 2019 - May 2021"
            description="Designed and implemented responsive user interfaces using HTML,
            CSS, and JavaScript. Collaborated with designers and backend
            developers to deliver seamless user experiences."
          />
          <div className="aspect-square w-3 bg-gray-900 rounded-full dark:bg-gray-50 ml-[-3px]" />
          <WorkExperience
            title="Intern, Web Development"
            company="ABC Company."
            duration="   June 2018 - August 2018"
            description="    Assisted in the development and maintenance of company websites.
            Gained hands-on experience in web development and project
            collaboration."
          />
           <div className="aspect-square w-3 bg-gray-900 rounded-full dark:bg-gray-50 ml-[-3px]" />
          <WorkExperience
            title="Intern, Web Development"
            company="ABC Company."
            duration="   June 2018 - August 2018"
            description="    Assisted in the development and maintenance of company websites.
            Gained hands-on experience in web development and project
            collaboration."
          />
        </div>
      </section>
    </>
  );
}
