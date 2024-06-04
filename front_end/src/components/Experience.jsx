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
            company="Vala."
            duration="2021 - Present"
            description="Developed and maintained complex web applications using React, Node.js, and various other technologies. Collaborated with cross-functional teams to deliver high-quality software solutions."
          />

          <div className="aspect-square w-3 bg-gray-900 rounded-full dark:bg-gray-50 ml-[-3px]" />
          <WorkExperience
            title="Frontend Developer"
            company="XYZ Comp."
            duration="2019 - 2021"
            description="Designed and implemented responsive user interfaces using HTML,
            CSS, and JavaScript. Collaborated with designers and backend
            developers to deliver seamless user experiences."
          />
        </div>
      </section>
    </>
  );
}
