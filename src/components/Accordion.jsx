export default function Accordion(props) {
  return (
    <div className="w-full border border-gray-800 rounded-lg mb-2 shadow-lg ">
      <button
        className="md:w-full w-[375px] h-full py-4 md:px-10 px-4 rounded-lg text-left bg-gray-700 hover:bg-gray-300 hover:text-gray-900 transition duration-300"
        onClick={props.toggleAccordion}
      >
        {props.title}
        <span
          className={`float-right transform ${
            props.isOpen ? "rotate-180" : "rotate-0"
          }   transition-transform duration-300`}
        >
          &#9660;
        </span>
      </button>
      {props.isOpen && (
        <div className="md:w-full w-[380px] px-5 py-2 bg-gray-800 rounded-lg">
          {props.data}
        </div>
      )}
    </div>
  );
}
