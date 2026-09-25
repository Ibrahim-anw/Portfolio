import './Skills.css'

const skillGroups = [
  {
    category: 'Languages',
    items: ['Java', 'C', 'C++', 'Python', 'JavaScript'],
  },
  {
    category: 'Web Development',
    items: ['React', 'HTML', 'CSS'],
  },
]

function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <p className="section-label">What I work with</p>
        <h2 className="section-title">Skills</h2>

        <div className="skills__groups">
          {skillGroups.map((group) => (
            <div className="skills__group" key={group.category}>
              <h3 className="skills__category">{group.category}</h3>
              <ul className="skills__tags">
                {group.items.map((item) => (
                  <li key={item} className="skills__tag">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
