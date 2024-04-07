function DateTime({ date }: { date: string }) {
  const newDate = new Date(date);
  const formatedDate = newDate.toLocaleString();
  return (
    <div>
      <span className="text-xs font-thin">{formatedDate}</span>
    </div>
  );
}

export default DateTime;
