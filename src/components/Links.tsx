export default function Links() {
  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <a
        href="https://github.com/cuvar"
        target="_blank"
        rel="noopener"
        className="hover:underline active:opacity-80"
      >
        GitHub
      </a>
      <a
        href="https://www.linkedin.com/in/luca-mueller01/"
        target="_blank"
        rel="noopener"
        className="hover:underline active:opacity-80"
      >
        LinkedIn
      </a>
      <a
        href="https://resumee.cuvar.dev"
        target="_blank"
        rel="noopener"
        className="hover:underline active:opacity-80"
      >
        Resumee
      </a>
      <a
        href="mailto:luca@cuvar.dev"
        className="hover:underline active:opacity-80"
      >
        Mail
      </a>
    </div>
  );
}
