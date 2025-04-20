// import '../css/skills.css';
export default function Skills({ description, skills }) {
  return (
    <div className='tech-main-container m-6 w-[1000px] '>
      <h2
        className='lg: bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-transparent text-4xl text-center m-4'
        id='portfolio'
      >
        {description}
      </h2>
      <div className='tech-container grid gap-4 grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))]  '>
        {skills.map(skill => (
          <div
            key={skill.name}
            className=' stack-btn flex h-14 items-center p-2 gap-2 bg-white rounded
'
          >
            <img src={skill.image} alt={skill.image} className='h-[100%]' />

            <h3>{skill.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
