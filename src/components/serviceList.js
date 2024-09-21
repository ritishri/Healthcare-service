
const ServiceList = ({ services, onDelete, onEdit }) => {
    return (
      <div className="flex flex-col space-y-4">
        {services.map((service, index) => (
          <div key={index} className="bg-white p-4 rounded shadow">
            <h2 className="text-lg font-bold">{service.name}</h2>
            <p>{service.description}</p>
            <p>${service.price}</p>
            <div className="mt-2 space-x-2">
              <button onClick={() => onEdit(index)} className="text-blue-500">Edit</button>
              <button onClick={() => onDelete(index)} className="text-red-500">Delete</button>
            </div>
          </div>
        ))}
      </div>
    );
  };
  export default ServiceList;
  