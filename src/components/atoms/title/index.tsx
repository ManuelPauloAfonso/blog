type props = {
  title: string;
};

export default function Title({ title }: props) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-orange-400">{title}</h2>
    </div>
  );
}
