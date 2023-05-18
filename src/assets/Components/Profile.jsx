import './Profile.css'

export function Profile() {
  return (
    <div className='container-profile'>
      <div className='container-profile-logo'>
        <div className='container-profile-headers'>
          <h1 className='h1-profile'>Anderson Marín</h1>
          <h2 className='h2-profile'>Full Stack Web Developer</h2>
        </div>
        <image alt="logo" src="#"/>
      </div>
      <p className='p-profile'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, omnis quasi perspiciatis impedit praesentium vero aliquam, natus voluptatibus a deleniti nisi dolore qui temporibus nobis obcaecati eveniet ducimus officia inventore.</p>
    </div>
  );
}