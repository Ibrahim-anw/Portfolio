import './Contact.css'

const contactLinks = [
  {
    label: 'Email',
    value: 'ibrahimanwar9900@gmail.com',
    href: 'mailto:ibrahimanwar9900@gmail.com',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/syed-ibrahim-anwar',
    href: 'https://www.linkedin.com/in/syed-ibrahim-anwar',
  },
  {
    label: 'GitHub',
    value: 'github.com/Ibrahim-anw',
    href: 'https://github.com/Ibrahim-anw',
  },
]

function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <p className="section-label">Let's connect</p>
        <h2 className="section-title">Contact</h2>

        <ul className="contact__list">
          {contactLinks.map((link) => (
            <li className="contact__item" key={link.label}>
              <span className="contact__label">{link.label}</span>
              <a
                className="contact__value"
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
              >
                {link.value}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Contact
