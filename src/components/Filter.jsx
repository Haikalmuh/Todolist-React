export default function Filter({ filter, setFilter }) {
  return (
    <div className="flex justify-center gap-4 mb-6 mt-6">
      {["all", "active", "completed"].map(type => (
        <button
          key={type}
          onClick={() => setFilter(type)}
          className={`px-3 py-1 rounded-xl 
            ${filter === type ? "bg-blue-500 text-white" : "bg-gray-200 dark:bg-gray-700"}`}
        >
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </button>
      ))}
    </div>
  );
}
