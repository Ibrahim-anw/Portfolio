import './Experience.css'

const experience = [
  {
    duration: 'March 2026 — Present',
    role: 'Customer Success Executive',
    place: 'Staff Asia',
    description: 'Supporting customers and helping resolve their queries.',
  },
]

function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <p className="section-label">Where I've worked</p>
        <h2 className="section-title">Experience</h2>

        <ul className="timeline">
          {experience.map((entry) => (
            <li className="timeline__item" key={entry.role}>
              <span className="timeline__year">{entry.duration}</span>
              <div>
                <h3 className="timeline__title">{entry.role}</h3>
                <p className="timeline__place">{entry.place}</p>
                <p className="timeline__desc">{entry.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Experience
