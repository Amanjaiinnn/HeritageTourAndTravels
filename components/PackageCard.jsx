export default function PackageCard({ item }) {
  return (
    <div className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden">
      {/* Vehicle Image */}
      <div className="h-52 w-full overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Vehicle Info */}
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800">{item.name}</h3>
        <p className="text-sm text-gray-500">{item.category}</p>
        <p className="mt-2 text-base font-semibold text-green-700">
          {item.rate}
        </p>
      </div>
    </div>
  );
}

