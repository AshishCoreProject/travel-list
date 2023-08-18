export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to you packing list</em>
      </p>
    );

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      {percentage === 100 ? (
        "you got evertyhing! Ready to go 😁"
      ) : (
        <em>
          💼you have {numItems} items on you list, and you already packed{" "}
          {numPacked} ( {percentage}%)
        </em>
      )}
    </footer>
  );
}
