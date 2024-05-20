export default function Skill({ skill }) {
    return (
      <button
        className="bg-transparent text-black border border-black hover:bg-black hover:text-white hover:border-white inline-block align-top overflow-hidden whitespace-nowrap rounded-xl outline-0 focus-visible:ring-4 focus-visible:ring-brand-blue/50 focus-visible:ring-outset cursor-pointer max-w-full py-1 px-3 paragraph-xs"
      >
        <span className="text-base">{skill}</span>
      </button>
    );
  }
  