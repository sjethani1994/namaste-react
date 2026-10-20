import ItemList from "./ItemList";

// Controlled component: the parent decides whether it's open (isOpen)
// and what happens on click (onToggle). It has no state of its own.
const RestaurantCategory = ({ data, isOpen, onToggle }) => {
  const { title, itemCards } = data;
  const panelId = `category-${title.replace(/\W+/g, "-")}`;

  return (
    <div className="mb-4 overflow-hidden rounded-2xl border border-[#ededf0] bg-white shadow-[0_2px_8px_rgba(0,0,0,0.03)]">
      <button
        type="button"
        onClick={onToggle}
        // aria-expanded={isOpen}
        // aria-controls={panelId}
        className="flex w-full cursor-pointer items-center justify-between gap-4 px-4 py-4 text-left transition-colors hover:bg-[#fffaf6] sm:px-6 sm:py-5"
      >
        <span className="text-base font-extrabold text-[#202333] sm:text-lg">
          {title}{" "}
          <span className="font-semibold text-[#858793]">
            ({itemCards.length})
          </span>
        </span>

        {/* Chevron rotates when the category is open */}
        <span
          className={`text-sm text-[#e85d04] transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          aria-hidden="true"
        >
          ▼
        </span>
      </button>

      {/* Items are only rendered when the category is open */}
      {isOpen && (
        <div id={panelId}>
          <ItemList items={itemCards} />
        </div>
      )}
    </div>
  );
};

export default RestaurantCategory;
