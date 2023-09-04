export default function Links() {
  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <a href="/a/github" className="hover:underline active:opacity-80">
        GitHub
      </a>
      <a
        href="/a/linkedin"
        target="_blank"
        rel="noopener"
        className="hover:underline active:opacity-80"
      >
        LinkedIn
      </a>
      <a
        href="/a/resumee"
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
