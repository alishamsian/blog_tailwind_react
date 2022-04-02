
const StatusCard = props => {
  return (
    <div className={`p-8 ${props.color} bg-slate-600 flex items-center text-white shadow-lg rounded-xl relative z-10 overflow-hidden cursor-pointer`}>
      <div className="h-full w-1/2 text-5xl flex items-center justify-center z-10">
        <i className={props.icon}></i>
      </div>
      <div className={`flex flex-1 items-center z-10 text-3xl`}>
          <h4>{props.count}</h4>
          <span>{props.title}</span>
      </div>
    </div>
  );
};

export default StatusCard;
