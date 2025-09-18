type EmptyStateProps = {
  title: string;
  message?: string;
};

function EmptyState({ title, message }: EmptyStateProps) {
  return (
    <div className="c">
      <p>{title}</p>
      {message ? <p>{message}</p> : null}
    </div>
  );
}

export default EmptyState;
