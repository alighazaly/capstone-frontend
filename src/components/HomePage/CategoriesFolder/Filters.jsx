const Filters = (props) => {
    return (
      <div key={props.title} className="text-sm sm:text-base flex flex-col items-center cursor-pointer"
      onClick={props.onClick}
      >
        <div className="">
          <img
            src={props.icon}
            alt={props.title}
            className="sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" // Responsive image size for small screens
          />
        </div>
        <div>{props.title}</div>
      </div>
    );
  };
  
  export default Filters;
  