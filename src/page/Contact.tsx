export function ContactSection() {
  return (
    <section id="contact" className="py-16 px-4 md:px-20 max-w-3xl mx-auto">
      <h2 className="text-3xl font-semibold text-emerald-700 mb-6">Contact</h2>
      <p className="text-gray-700 mb-4">
        Feel free to reach out via email, GitHub, or Instagram. (Kamu bisa ubah
        link-nya nanti ya!)
      </p>
      <ul className="text-emerald-700 space-y-2">
        <li>Email: example@email.com</li>
        <li>GitHub: github.com/username</li>
        <li>Instagram: @username</li>
      </ul>
    </section>
  );
}
